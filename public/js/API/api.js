cadVariables = location.search.substring(1,location.search.length);
console.log(cadVariables);
//arrVariables = cadVariables.split("&");
//arrVariableActual = arrVariables[0].split("=");
//arrVariableActual2 = arrVariables[1].split("=");
arrVariables = cadVariables.split("=");
user = arrVariables[1].split("");
var coleccion;
var documento;
console.log(user[0]+"-"+user[1]);
if (user[0] == 1){
    coleccion = "admin";
    documento = "15200211";
}else if (user[0] == 2){
    coleccion = "matricula";
    documento = "17200280";
}else if (user[0] == 3){
    coleccion = "tutores";
    documento = "15200219";
}else if (user[0] == 4){
    coleccion = "profesores";
    if (user[1] == 1){
        documento = "16200090";
    }else if (user[1] == 2){
        documento = "16200259";
    }
}else if (user[0] == 5){
    coleccion = "alumnos";
    if (user[1] == 1){
        documento = "15200208";
    }else {
        documento = "0021465"+user[1];
        console.log("* "+documento);
    }
}
// ******  REGISTRAR ASISTENCIA
var firebaseConfig = {
    apiKey: "AIzaSyAM0s2JbWKZe86EWcyKbiH2K-8aQkZFxoA",
    authDomain: "school-d0254.firebaseapp.com",
    databaseURL: "https://school-d0254.firebaseio.com",
    projectId: "school-d0254",
    storageBucket: "school-d0254.appspot.com",
    messagingSenderId: "1070440942120",
    appId: "1:1070440942120:web:b522032f70c4da2df2031d",
    measurementId: "G-WQCX7HR67R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

var time = new Date();
console.log("dia del mes: "+time.getDate());
var mes = time.getMonth()+1;
console.log("dia del mes: "+mes);
//*************  captura de los datos
db.doc(coleccion+"/"+documento).get().then(function (doc) {
    if (doc.exists){

        var fecha = doc.data().fecha+"-"+time.getDate()+"/"+mes;
        var ingreso = doc.data().ingreso+"-"+time.getHours()+":"+time.getMinutes();
        var tarde;
        var temprano;
        if ((time.getHours() > 9)&&(time.getMinutes() > 15)){
            tarde = doc.data().tarde+1;
            temprano = doc.data().temprano;
        }else {
            temprano = doc.data().temprano+1;
            tarde = doc.data().tarde;
        }

        //se almacena en la bd
        db.doc(coleccion+"/"+documento).set({
            //db.collection(coleccion).doc(documento).set({
            apellido: doc.data().apellido,
            contrasena: doc.data().contrasena,
            dni: doc.data().dni,
            email: doc.data().email,
            fecha: fecha,
            ingreso: ingreso,
            nombre: doc.data().nombre,
            tarde: tarde,
            telefono: doc.data().telefono,
            temprano: temprano,
            usuario: doc.data().usuario
        }).then(function() {
            console.log("documento correctamente escrito");
        }).catch(function(error) {
            alert('Lo sentimos, ha ocurrido un error');
            console.error("Error adding document: ", error);
        });
        console.log("Persona encontrada: "+doc.data().nombre);

    }else {
        console.log("No existe el documento");
    }
}).catch(function (error) {
    console.log("Error al buscar el documento:",error);
});





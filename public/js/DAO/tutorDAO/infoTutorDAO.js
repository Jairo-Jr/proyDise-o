/*cadVariables = location.search.substring(1,location.search.length);
arrVariables = cadVariables.split("&");
arrVariableActual = arrVariables[0].split("=");
arrVariableActual2 = arrVariables[1].split("=");
var user = arrVariableActual[1];
var coleccion = arrVariableActual2[1];
console.log("user:"+arrVariableActual[1]);
console.log("coleccion:"+arrVariableActual2[1]);
*/
var user = sessionStorage.getItem("user");
var coleccion = sessionStorage.getItem("coleccion");

//variables de datos generales

var temprano = document.getElementById("temprano");
var tarde = document.getElementById("tarde");

//variables de datos personales
var dniP = document.getElementById("tutor-dni");
var nombreP = document.getElementById("tutor-name");
var apellidoP = document.getElementById("tutor-lastname");
var telefonoP = document.getElementById("tutor-phone");
var emailP = document.getElementById("tutor-email");
var gradoP = document.getElementById("tutor-grade");
var seccionP = document.getElementById("tutor-section");
var unameP = document.getElementById("tutor-uname");

const docRef = db.doc("tutores/"+user);
//const docRef = db.doc("alumnos/"+arrVariableActual[1]);
docRef.get().then(function (doc) {
    if (doc.exists){
        var contra = doc.data().contrasena;
        console.log("El xxx usuario existe"+contra);

        //mustra datos generales
        var puntual = doc.data().temprano;
        var tardanza = doc.data().tarde;

        temprano.innerHTML = puntual;
        tarde.innerHTML = tardanza;

        //muestra datos personal
        dniP.innerHTML = `<p>Número de DNI</p>
                           <input type="text" class="material-control tooltips-general" value="${doc.data().dni}" readonly="readonly">
                           <span class="highlight"></span>
                           <span class="bar"></span>`;
        nombreP.innerHTML = `<p>Nombres</p>
                             <input type="text" class="material-control tooltips-general" value="${doc.data().nombre}" readonly="readonly">
                             <span class="highlight"></span>
                             <span class="bar"></span>`;
        apellidoP.innerHTML = `<p>Apellidos</p>
                               <input type="text" class="material-control tooltips-general" value="${doc.data().apellido}" readonly="readonly">
                               <span class="highlight"></span>
                               <span class="bar"></span>`;
        telefonoP.innerHTML = `<p>Teléfono</p>
                               <input type="text" class="material-control tooltips-general" value="${doc.data().telefono}" readonly="readonly">
                               <span class="highlight"></span>
                               <span class="bar"></span>`;
        emailP.innerHTML = `<p>Correo Electronico</p>
                            <input type="text" class="material-control tooltips-general" value="${doc.data().email}" readonly="readonly">
                            <span class="highlight"></span>
                            <span class="bar"></span>`;
        gradoP.innerHTML = `<p>Grado</p>
                            <input type="text" class="material-control tooltips-general" value="${doc.data().grado}º" readonly="readonly">
                            <span class="highlight"></span>
                            <span class="bar"></span>`;
        seccionP.innerHTML = `<p>Sección</p>
                             <input type="text" class="material-control tooltips-general" value="${doc.data().seccion}" readonly="readonly">
                             <span class="highlight"></span>
                             <span class="bar"></span>`;
        unameP.innerHTML = `<p>Nombre de usuario</p>
                            <input type="text" class="material-control tooltips-general input-check-user" value="${doc.data().usuario}" readonly="readonly">
                            <span class="highlight"></span>
                            <span class="bar"></span>`;
    }else {
        console.log("No existe el documento");
    }
}).catch(function (error) {
    console.log("Error al buscar el documento:",error);
});


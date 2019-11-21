/*cadVariables = location.search.substring(1,location.search.length);
arrVariables = cadVariables.split("&");
arrVariableActual = arrVariables[0].split("=");
arrVariableActual2 = arrVariables[1].split("=");
var user = arrVariableActual[1];
var coleccion = arrVariableActual2[1];
console.log("user:"+arrVariableActual[1]);
console.log("coleccion:"+arrVariableActual2[1]);
*/
//variables de sesion
var user = sessionStorage.getItem("user");
var coleccion = sessionStorage.getItem("coleccion");

//variables de datos administrativos
var nAlumnos = document.getElementById("nAlumnos");
var nProfesores = document.getElementById("nProfesores");
var nTutores = document.getElementById("nTutores");
var temprano = document.getElementById("temprano");
var tarde = document.getElementById("tarde");

//variables de datos personales
var dniP = document.getElementById("pdm-dni");
var nombreP = document.getElementById("pdm-name");
var apellidoP = document.getElementById("pdm-lastname");
var telefonoP = document.getElementById("pdm-phone");
var emailP = document.getElementById("pdm-email");
var unameP = document.getElementById("pdm-uname");

const docRef = db.doc("matricula/"+user);
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


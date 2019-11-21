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
var horario = document.getElementById("horario");

//variables de datos personales
var dniA = document.getElementById("alum-dni");
var nombreA = document.getElementById("alum-name");
var apellidoA = document.getElementById("alum-lastname");
var telefonoA = document.getElementById("alum-phone");
var emailA = document.getElementById("alum-email");
var gradoA = document.getElementById("alum-grado");
var seccionA = document.getElementById("alum-seccion");
var unameA = document.getElementById("alum-uname");

const docRef = db.doc("alumnos/"+user);
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
        horario.innerHTML = doc.data().grado+"° - "+doc.data().seccion;
        //muestra datos personal
        dniA.innerHTML = `<p>Número de DNI</p>
                           <input type="text" class="material-control tooltips-general" value="${doc.data().dni}" readonly="readonly">
                           <span class="highlight"></span>
                           <span class="bar"></span>`;
        nombreA.innerHTML = `<p>Nombres</p>
                             <input type="text" class="material-control tooltips-general" value="${doc.data().nombre}" readonly="readonly">
                             <span class="highlight"></span>
                             <span class="bar"></span>`;
        apellidoA.innerHTML = `<p>Apellidos</p>
                               <input type="text" class="material-control tooltips-general" value="${doc.data().apellido}" readonly="readonly">
                               <span class="highlight"></span>
                               <span class="bar"></span>`;
        telefonoA.innerHTML = `<p>Teléfono</p>
                               <input type="text" class="material-control tooltips-general" value="${doc.data().telefono}" readonly="readonly">
                               <span class="highlight"></span>
                               <span class="bar"></span>`;
        emailA.innerHTML = `<p>Correo Electronico</p>
                            <input type="text" class="material-control tooltips-general" value="${doc.data().email}" readonly="readonly">
                            <span class="highlight"></span>
                            <span class="bar"></span>`;
        gradoA.innerHTML = `<p>Grado</p>
                            <input type="text" class="material-control tooltips-general" value="${doc.data().grado}º" readonly="readonly">
                            <span class="highlight"></span>
                            <span class="bar"></span>`;
        seccionA.innerHTML = `<p>Sección</p>
                             <input type="text" class="material-control tooltips-general" value="${doc.data().seccion}" readonly="readonly">
                             <span class="highlight"></span>
                             <span class="bar"></span>`;
        unameA.innerHTML = `<p>Nombre de usuario</p>
                            <input type="text" class="material-control tooltips-general input-check-user" value="${doc.data().usuario}" readonly="readonly">
                            <span class="highlight"></span>
                            <span class="bar"></span>`;
    }else {
        console.log("No existe el documento");
    }
}).catch(function (error) {
    console.log("Error al buscar el documento:",error);
});


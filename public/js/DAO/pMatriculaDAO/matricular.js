function mostrar() {
    var NewDni = document.getElementById("newDni").value;
    var NewHuella = document.getElementById("newHuella").value;  //tines q ser entre 52 y 59
    var NewNombre = document.getElementById("newNombre").value;
    var NewApellido = document.getElementById("newApellido").value;
    var NewTelefono = document.getElementById("newTelefono").value;
    var NewEmail = document.getElementById("newEmail").value;
    var NewGrado = document.getElementById("newGrado").value;
    var NewSeccion = document.getElementById("newSeccion").value;

    var NewUsuario = "002146"+NewHuella;
    var ape = NewApellido.split(" ");
    var ape1 = ape[0].split("");
    var ape2 = ape[1].split("");
    var NewContrasena = ape1[0]+ape2[0]+NewUsuario;
    console.log("usuario: "+NewUsuario);
    console.log("contrasena: "+ape1[0]+"-"+ape2[0]);

    db.doc("alumnos/"+NewUsuario).set({
        //db.collection("alumnos").add({
        nombre: NewNombre,
        apellido: NewApellido,
        usuario: NewUsuario,
        contrasena: NewContrasena,
        grado: NewGrado,
        seccion: NewSeccion,
        ingreso: "",
        fecha: "",
        dni: NewDni,
        email: NewEmail,
        telefono: NewTelefono,
        temprano: 0,
        tarde: 0,
        bim1: "00-00-00-00-00-00-00-00-00",
        bim2: "00-00-00-00-00-00-00-00-00",
        bim3: "00-00-00-00-00-00-00-00-00",
        bim4: "00-00-00-00-00-00-00-00-00"
    })
        .then(function(docRef) {
        })
        .catch(function(error) {
            alert('Lo sentimos, ha ocurrido un error');
            console.error("Error adding document: ", error);
        });

}
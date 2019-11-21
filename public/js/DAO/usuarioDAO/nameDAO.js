var user = sessionStorage.getItem("user");
var coleccion = sessionStorage.getItem("coleccion");

//variables de dato de nombre
var nameUser = document.getElementById("nombre");
var avatar = document.getElementById("icono");

const docRe = db.doc(coleccion+"/"+user);
//const docRef = db.doc("alumnos/"+arrVariableActual[1]);
docRe.get().then(function (doc) {
    if (doc.exists){
        //mustra datos generales
        var nom = doc.data().nombre;
        nameUser.innerHTML = '<span class="all-tittles">'+nom+'</span>';
        if (user == "15200211"){
            avatar.innerHTML = `<img src="assets/img/toby.gif" alt="user-picture" class="img-responsive img-circle center-box">`;
        }

    }else {
        console.log("No existe el documento");
    }
}).catch(function (error) {
    console.log("Error al buscar el documento:",error);
});
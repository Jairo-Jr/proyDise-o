function loginDAO() {
    var cod = document.getElementById("cod").value;
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;

    var coleccion = ["","admin","matricula","tutores","profesores","alumnos"];
    var home = ["","homeAdmin.html","home-pm.html","home-tutor.html","home-prof.html","home-alum.html"];
    /*
    var coleccion;
    var home;
    if (cod == 1){
        coleccion = "admin";
        home = "homeAdmin.html";
    }else if (cod == 2){
        coleccion = "matricula";
        home = "home-pm.html";
    } else if (cod == 3){
        coleccion = "tutores";
        home = "home-tutor.html";
    }else if (cod == 4){
        coleccion = "profesores";
        home = "home-prof.html";
    }else {
        coleccion = "alumnos";
        home = "home-alum.html";
    }

     */
    //********************+
    const docRef = db.doc(coleccion[cod]+"/"+user);

    docRef.get().then(function (doc) {
        if (doc.exists){
            var contra = doc.data().contrasena;
            if (contra == pass){
                console.log("El usuario existe"+contra);
                sessionStorage.setItem("user",user);
                sessionStorage.setItem("coleccion",coleccion[cod]);
                //location.href = "http://localhost:63342/PhpstormProjects/MASTER/school/public/"+home[cod];
                location.href = "https://school-d0254.firebaseapp.com/"+home[cod];
            }else {
                console.log("El usuario no coincide"+contra);
            }
            //console.log("Datos del Documento",doc.data().Apellido);
        }else {
            console.log("No existe el documento");
        }
    }).catch(function (error) {
        console.log("Error al buscar el documento:",error);
    });
}

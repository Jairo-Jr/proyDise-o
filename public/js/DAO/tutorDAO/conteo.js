//variables de sesion
var user = sessionStorage.getItem("user");
var coleccion = sessionStorage.getItem("coleccion");

//variables para listar alumnos y tutores
var nAlum = document.getElementById("nAlumnos");
var nDocen = document.getElementById("nTProfesores");

var num = 0;

//contar alumnos del mismo grado
docRef.get().then(function (doc) {
    if (doc.exists){
        var Tgrado = doc.data().grado;
        var Tseccion = doc.data().seccion;

        //cantidad de alumnos
        db.collection("alumnos").where("grado", "==", `${Tgrado}`).get()
            .then(function(querySnapshot) {
                num = 0;
                querySnapshot.forEach(function(doc) {
                    if (doc.data().seccion == Tseccion){
                        num = num + 1;
                        console.log("i="+num);
                    }
                    // doc.data() is never undefined for query doc snapshots

                });
                nAlum.innerHTML = num;
                console.log("********************");
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });

        console.log("El usuario existe para listar.js- ");
    }else {
        console.log("No existe el documento");
    }
}).catch(function (error) {
    console.log("Error al buscar el documento:",error);
});

//contar profesores del mismo grado
docRef.get().then(function (doc) {
    if (doc.exists){
        var Tgrado = doc.data().grado;
        var Tseccion = doc.data().seccion;

        //cantidad de profesores
        db.collection("profesores").where("grado", "==", `${Tgrado}`).get()
            .then(function(querySnapshot) {
                num = 0;
                querySnapshot.forEach(function(doc) {
                    if (doc.data().seccion == Tseccion){
                        num = num + 1;
                        console.log("i="+num);
                    }
                    // doc.data() is never undefined for query doc snapshots

                });
                nDocen.innerHTML = num;
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });

        console.log("El usuario existe para listar.js- ");
    }else {
        console.log("No existe el documento");
    }
}).catch(function (error) {
    console.log("Error al buscar el documento:",error);
});



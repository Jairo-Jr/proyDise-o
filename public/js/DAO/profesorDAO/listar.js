//variables de sesion
var user = sessionStorage.getItem("user");
var coleccion = sessionStorage.getItem("coleccion");

//variables para listar alumnos y tutores
var nAlum = document.getElementById("nAlumnos");
var nTuto = document.getElementById("nTutores");

var num = 0;

//contar tutores del mismo grado
docRef.get().then(function (doc) {
    if (doc.exists){
        var Pgrado = doc.data().grado;
        var Pseccion = doc.data().seccion;

        //cantidad de tutores
        db.collection("tutores").where("grado", "==", `${Pgrado}`).get()
            .then(function(querySnapshot) {
                num = 0;
                querySnapshot.forEach(function(doc) {
                    if (doc.data().seccion == Pseccion){
                        num = num + 1;
                        console.log("i="+num);
                    }
                    // doc.data() is never undefined for query doc snapshots

                });
                nTuto.innerHTML = num;
                console.log("********************");
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });

    }else {
        console.log("No existe el documento");
    }
}).catch(function (error) {
    console.log("Error al buscar el documento:",error);
});

//contar alumnos del mismo grado
docRef.get().then(function (doc) {
    if (doc.exists){
        var Pgrado = doc.data().grado;
        var Pseccion = doc.data().seccion;

        //cantidad de alumnos
        db.collection("alumnos").where("grado", "==", `${Pgrado}`).get()
            .then(function(querySnapshot) {
                num = 0;
                querySnapshot.forEach(function(doc) {
                    if (doc.data().seccion == Pseccion){
                        num = num + 1;
                        console.log("i="+num);
                    }
                    // doc.data() is never undefined for query doc snapshots

                });
                nAlum.innerHTML = num;
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });

    }else {
        console.log("No existe el documento");
    }
}).catch(function (error) {
    console.log("Error al buscar el documento:",error);
});



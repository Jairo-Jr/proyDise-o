var nAdmin = document.getElementById("nAdmin");
var nAlumnos = document.getElementById("nAlumnos");
var nProfesores = document.getElementById("nProfesores");
var nTutores = document.getElementById("nTutores");

var temprano = document.getElementById("temprano");
var tarde = document.getElementById("tarde");
var user = sessionStorage.getItem("user");
var num = 0;
//cantidad de administradores
db.collection("admin").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            num = num + 1;
            //console.log("i="+num);

        });
        nAdmin.innerHTML = num;
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
//cantidad de alumnos
db.collection("alumnos").get()
    .then(function(querySnapshot) {
        num = 0;
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            num = num + 1;
            console.log("i="+num);

        });
        nAlumnos.innerHTML = num;
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
//cantidad de profesores
db.collection("profesores").get()
    .then(function(querySnapshot) {
        num = 0;
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            num = num + 1;
            console.log("i="+num);

        });
        nProfesores.innerHTML = num;
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
//cantidad de tutores
db.collection("tutores").get()
    .then(function(querySnapshot) {
        num = 0;
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            num = num + 1;
            console.log("i="+num);

        });
        nTutores.innerHTML = num;
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

//total de tardanza y puntuales
db.doc("admin/"+user).get().then(function (doc) {
    if (doc.exists){
        var puntual = doc.data().temprano;
        var tardanza = doc.data().tarde;
        temprano.innerHTML = puntual;
        tarde.innerHTML = tardanza;
    }else {
        console.log("No existe el documento");
    }
}).catch(function (error) {
    console.log("Error al buscar el documento:",error);
});

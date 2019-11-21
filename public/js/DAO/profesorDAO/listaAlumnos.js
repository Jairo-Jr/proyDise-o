//variables de sesion
var user = sessionStorage.getItem("user");
var coleccion = sessionStorage.getItem("coleccion");

//variables de datos de curso
var mAlum = document.getElementById("misAlumnos");
mAlum.innerHTML = `<h2 class="text-center all-tittles">listado de alumnos</h2>
            <div class="table-responsive">
                <div class="div-table" style="margin:0 !important;">
                    <div class="div-table-row div-table-row-list" style="background-color:#DFF0D8; font-weight:bold;">
                        <div class="div-table-cell" style="width: 6%;">#</div>
                        <div class="div-table-cell" style="width: 18%;">DNi</div>
                        <div class="div-table-cell" style="width: 18%;">Apellidos</div>
                        <div class="div-table-cell" style="width: 18%;">Nombres</div>
                        <div class="div-table-cell" style="width: 18%;">E-mail</div>
                        <div class="div-table-cell" style="width: 18%;">Ingresar Notas</div>
                    </div>
                </div>
            </div>`;

var cursos = ["Lengua","Comprensión Lectora","Ciencia","C.Social","Educaion Fisica","Religión","Ingles","Artes Plásticas","Música"];

//listar alumnos del mismo grado que el profesor
const docRef = db.doc("profesores/"+user);
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
                        mAlum.innerHTML += `<div class="table-responsive">
                <div class="div-table" style="margin:0 !important;">
                    <div class="div-table-row div-table-row-list">
                        <div class="div-table-cell" style="width: 6%;">${num}</div>
                        <div class="div-table-cell" style="width: 18%;">${doc.data().dni}</div>
                        <div class="div-table-cell" style="width: 18%;">${doc.data().apellido}</div>
                        <div class="div-table-cell" style="width: 18%;">${doc.data().nombre}</div>
                        <div class="div-table-cell" style="width: 18%;">${doc.data().email}</div>
                        <div class="div-table-cell" style="width: 18%;">
                            <button class="btn btn-success" onclick="location.href='notas-prof.html'"><i class="zmdi zmdi-file-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>`;
                        console.log("i="+num);
                    }
                    // doc.data() is never undefined for query doc snapshots

                });
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
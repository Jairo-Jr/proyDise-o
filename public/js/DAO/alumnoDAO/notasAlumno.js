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



//variables de datos de curso
var cLengua = document.getElementById("TablaTest");
cLengua.innerHTML = `<h2 class="text-center all-tittles">Notas</h2>
            <div class="table-responsive">
                <div class="div-table" style="margin:0 !important;">
                    <div class="div-table-row div-table-row-list" style="background-color:#64612A; font-weight:bold; color:#FFF;">
                        <div class="div-table-cell" style="width: 35%;">Curso</div>
                        <div class="div-table-cell" style="width: 15%;">1er Bimestre</div>
                        <div class="div-table-cell" style="width: 15%;">2do Bimestre</div>
                        <div class="div-table-cell" style="width: 15%;">3er Bimestre</div>
                        <div class="div-table-cell" style="width: 15%;">4to Bimestre</div>
                    </div>
                </div>
            </div>`;

var cursos = ["Lengua","Comprensión Lectora","Ciencia","C.Social","Educaion Fisica","Religión","Ingles","Artes Plásticas","Música"];
var color1 = [];
var color2 = [];
var color3 = [];
var color4 = [];
const docRef = db.doc("alumnos/"+user);
//const docRef = db.doc("alumnos/"+arrVariableActual[1]);
docRef.get().then(function (doc) {
    if (doc.exists){


        var contra = doc.data().contrasena;
        var Bim1 = doc.data().bim1;
        var arrBim1 = Bim1.split("-");
        var Bim2 = doc.data().bim2;
        var arrBim2 = Bim2.split("-");
        var Bim3 = doc.data().bim3;
        var arrBim3 = Bim3.split("-");
        var Bim4 = doc.data().bim4;
        var arrBim4 = Bim4.split("-");
        for (var i=0;i<9;i++){
            if (arrBim1[i] >10){
                color1[i] = `width: 15%;`;
            }else {
                color1[i] = `width: 15%; background-color:#FA4747; color:#FFF;`;
            }
            if (arrBim2[i] >10){
                color2[i] = `width: 15%;`;
            }else {
                color2[i] = `width: 15%; background-color:#FA4747; color:#FFF;`;
            }
            if (arrBim3[i] >10){
                color3[i] = `width: 15%;`;
            }else {
                color3[i] = `width: 15%; background-color:#FA4747; color:#FFF;`;
            }
            if (arrBim4[i] >10){
                color4[i] = `width: 15%;`;
            }else {
                color4[i] = `width: 15%; background-color:#FA4747; color:#FFF;`;
            }
        }


        console.log("las notas bim1: "+Bim1);
        console.log("las notas bim2: "+Bim2);
        console.log("las notas bim3: "+Bim3);
        console.log("las notas bim4: "+Bim4);
        console.log("El usuario existe - "+contra);

        for (var i=0;i<9;i++){
           cLengua.innerHTML += `<div class="table-responsive">
                <div class="div-table" style="margin:0 !important;">
                    <div class="div-table-row div-table-row-list">
                        <div class="div-table-cell" style="width: 35%;">${cursos[i]}</div>
                        <div class="div-table-cell" style="${color1[i]}">${arrBim1[i]}</div>
                        <div class="div-table-cell" style="${color2[i]}">${arrBim2[i]}</div>
                        <div class="div-table-cell" style="${color3[i]}">${arrBim3[i]}</div>
                        <div class="div-table-cell" style="${color4[i]}">${arrBim4[i]}</div>
                    </div>
                </div>
            </div>`;

        }

        //muestra datos de notas

    }else {
        console.log("No existe el documento");
    }
}).catch(function (error) {
    console.log("Error al buscar el documento:",error);
});


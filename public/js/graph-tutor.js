var bim_data = [
  {"elapsed": "1er Bimestre", "value": 12},
  {"elapsed": "2do Bimestre", "value": 18},
  {"elapsed": "3er Bimestre", "value": 16},
  {"elapsed": "4to Bimestre", "value": 15}
];
Morris.Line({
  element: 'graph-nota-alum-tutor',
  data: bim_data,
  xkey: 'elapsed',
  ykeys: ['value'],
  labels: ['Nota'],
  resize: true,
  padding: 50,
  parseTime: false
});

Morris.Donut({
  element: 'graph-asistencia-alum-tutor',
  data: [
    {value: 70, label: 'Asistencias'},
    {value: 15, label: 'Tardanzas'},
    {value: 10, label: 'Faltas'}
  ],
  backgroundColor: 'rgba(0, 0, 0, 0.0)',
  resize: true,
  colors: [
    '#32CD32',
    '#FECE4D',
    '#FE4D4D',
  ],
  formatter: function (x) { return x + "%"}
}).on('click', function(i, row){
  console.log(i, row);
});

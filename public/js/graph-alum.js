var day_data = [
  {"period": "2019-11-11", "value": 2},
  {"period": "2019-11-12", "value": 1},
  {"period": "2019-11-13", "value": 1},
  {"period": "2019-11-14", "value": 0},
  {"period": "2019-11-15", "value": 1},
  {"period": "2019-11-18", "value": 2},
  {"period": "2019-11-19", "value": 2},
  {"period": "2019-11-20", "value": 2},
  {"period": "2019-11-21", "value": 1},
  {"period": "2019-11-22", "value": 2}
];
Morris.Line({
  element: 'graph-asistencia-alum',
  data: day_data,
  xkey: 'period',
  ykeys: ['value'],
  labels: ['Valor'],
  yLabelFormat: function(y) {
    if (y == 0)
      return "No Asistió";
    else if (y == 1)
      return "LLegó Tarde";
    else if (y == 2)
      return "Asistió";
    else
      return "";
  },
  resize: true,
  padding: 50,
  xLabelFormat: function (d) {
    return ("0" + d.getDate()).slice(-2) + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + d.getFullYear();
  },
  pointFillColors: ['#ffffff'],
  pointStrokeColors: ['black'],
  lineColors: ['#40E0D0']
});

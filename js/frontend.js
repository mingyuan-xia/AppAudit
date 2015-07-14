function renderData(data, root, renderer) {
  root.empty();
  if (!('status_msg' in data)) {
    root.text('invalid report data');
    return ;
  }
  if ('not found' in data.status_msg) {
    root.text('report is not found');
  }
  if ('scanning' in data.status_msg) {
    root.text('report is being generated');
  }
  if ('scanned' in data.status_msg) {
    root.html(renderer(data));
    $('[data-toggle="tooltip"]').tooltip(); 
  }
}

/*
var ctx = $("#adsPercent").get(0).getContext("2d");
var chart_data = data.file_dist;
var myDoughnut = new Chart(ctx).Doughnut(chart_data,{
  animation: true,
  responsive: true,
  showTooltips: true,
  percentageInnerCutout : 70,
  segmentShowStroke : false
});
*/

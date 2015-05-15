function renderData(data, root, renderer) {
  root.empty();
  root.html(renderer(data));
  $('[data-toggle="tooltip"]').tooltip(); 
  $('.rating').rating();  
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
}

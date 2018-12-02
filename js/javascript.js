//Menu-Mobile
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  //Collapsible
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  //Grafico Geral
  var options = {
    chart: {
        height: 350,
        type: 'bar',
        stacked: true,
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },
        
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    series: [{
        name: 'Homicídio Doloso',
        data: [1321, 1290, 1289, 1346]
    },{
        name: 'Tentativa de Homicídio',
        data: [712, 561, 469, 523]
    },{
        name: 'Estupro',
        data: [532, 531, 447, 576]
    },{
        name: 'Roubo de Ônibus',
        data: [1929, 2561, 2615, 2615]
    },{
        name: 'Roubo de Veículo',
        data: [6373, 6537, 6219, 5733]
    },{
        name: 'Furto de Veículo',
        data: [1752, 1717, 1642, 1565]
    }],
    title: {
        text: 'Estatisticas dos Crimes em Salvador'
    },
    xaxis: {
        categories: [2014, 2015, 2016, 2017],
        labels: {
            formatter: function(val) {
                return val 
            }
        }
    },
    yaxis: {
        title: {
            text: undefined
        },
        
    },
    tooltip: {
        y: {
            formatter: function(val) {
            return val 
        }
        }
    },
    fill: {
        opacity: 1
        
    },
    
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    }
}

var chart = new ApexCharts(
    document.querySelector("#chart"),
    options
);

chart.render();

//Gráfico total de crimes e mortes
var options = {
  chart: {
      height: 350,
      type: 'bar',
  },
  plotOptions: {
      bar: {
          horizontal: false,
          endingShape: 'rounded',
          columnWidth: '55%',
      },
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
  },
  series: [{
      name: 'Total de Crimes Registrados',
      data: [12695, 13299, 12741, 12406]
  }
  ],title: {
    text: 'Total de Crimes Registrados'
  },
  xaxis: {
      categories: ['2014', '2015', '2016', '2017'],
  },
  yaxis: {
      title: {
          text: undefined
      }
  },
  fill: {
      opacity: 1

  },
  tooltip: {
      y: {
          formatter: function (val) {
              return  val 
          }
      }
  }
}

var chart = new ApexCharts(
  document.querySelector("#total_crimes"),
  options
);

chart.render();

var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560'];
var options = {
  chart: {
      height: 350,
      type: 'bar',
  },
  colors: colors,
  plotOptions: {
      bar: {
          horizontal: false,
          endingShape: 'rounded',
          columnWidth: '55%',
          distributed: true
      },
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
  },
  series: [{
      name: 'Total de Mortes (Assassinato) Registradas',
      data: [1397, 1392, 1349, 1394]
  }
  ],title: {
    text: 'Total de Mortes Registrados'
  },
  xaxis: {
      categories: ['2014', '2015', '2016', '2017'],
  },
  yaxis: {
      title: {
          text: undefined
      }
  },
  fill: {
      opacity: 1

  },
  tooltip: {
      y: {
          formatter: function (val) {
              return  val 
          }
      }
  }
}

var chart = new ApexCharts(
  document.querySelector("#total_mortes"),
  options
);

chart.render();

//Gráfico Homicídio


var colors = ['#775DD0', '#546E7A', '#26a69a', '#D10CE8'];
        var options = {
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function(chart, w, e) {
                        console.log(chart, w, e )
                    }
                },
            },
            colors: colors,
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false,
            },
            series: [{
                name: 'Homicídios',
                data: [1321, 1290, 1289, 1346]
            }],
            xaxis: {
                categories: ['2014', '2015', '2016', '2017'],
                labels: {
                    style: {
                        colors: colors,
                        fontSize: '14px'
                    }
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#homicidio"),
            options
        );

        //Gráfico de Lesão Corporal

        chart.render();

        var colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7'];
        var options = {
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function(chart, w, e) {
                        console.log(chart, w, e )
                    }
                },
            },
            colors: colors,
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false,
            },
            series: [{
                name: 'Lesão Corporal Seguida por Morte',
                data: [26, 38, 22, 12]
            }],
            xaxis: {
                categories: ['2014', '2015', '2016', '2017'],
                labels: {
                    style: {
                        colors: colors,
                        fontSize: '14px'
                    }
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#morte"),
            options
        );

        chart.render();
    
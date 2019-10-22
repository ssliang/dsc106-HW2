


Highcharts.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Unica+One',
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);



Highcharts.theme = {
    colors: ["black","#ffc0cb","#6EC5B8","#8bbe1b","#da2c43"],
    colorAxis: {
        maxColor: '#05426E',
        minColor: '#F3E796'
    },
    chart: {
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063',
        width: 700,
        height:550
    },
    title: {
        style: {
            textTransform: 'uppercase',
            fontSize: '38px'
        }
    },
    subtitle: {
        style: {
            textTransform: 'uppercase',
            fontSize: '18px'
        }
    },
    xAxis: {
        labels: {
            style: {
                fontsize: '15px',
                color: "2B2D2F"
            }
        },
        title: {
            style: {
               fontSize: '20px',
               color: "2B2D2F"

            }
        },
    },
    yAxis: {
        labels: {
            style: {
                fontsize: '15px',
                color: "2B2D2F"
            }
        },
        title: {
            style: {
               fontSize: '18px',
               color: "2B2D2F"

            }
        }
    },
    plotOptions: {
        map: {
            nullColor: '#FCFEFE'
        }, 
        series : {
            marker: {
                enabled: false
            }
        }
    },
    navigator: {
        maskFill: 'rgba(170, 205, 170, 0.5)',
        series: {
            color: '#95C471',
            lineColor: '#35729E'
        }
    }
    
};


// Apply the theme
Highcharts.setOptions(Highcharts.theme);

/* ********************************* Beginning of WeeklyRevenue Chart ********************************* */
var series = [
    {
        name: 'Northeast',
        data: [299070,
            293778,
            316876,
            250188,
            250954,
            250517,
            259612]
    }, 
    {
        name: 'SOUTHEAST',
        data: [309857,
            293703,
            284113,
            232658,
            233282,
            237387,
            234056
        ]
    }, 
    {
        name: 'NORTHWEST',
        data: [309750,
            295226,
            291471,
            245020,
            241771,
            244614,
            243749,]
    },
    {
        name: 'SOUTHWEST',
        data: [322165,
            290585,
            299207,
            241089,
            237277,
            244602,
            239349]
    },
    {
        name: 'Central',
        data: [312093,
            298375,
            291205,
            243700,
            236809,
            238718,
            238153]
    }
 ];

 // Configuration about the plot
 var title = {
    text: 'Weekly Revenue'   
 };
 var subtitle = {
    text: '* As collected In January 2016'
 };
 var xAxis = {
    title: {
        text: "Month"
    },
    categories: ['Friday',
                'Saturday',
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday'
            ]
 };
 var yAxis = {
    title: {
       text: 'Revenue in $USD'
    },
    plotLines: [{
       value: 0,
       width: 1,
       color: '#808080'
    }]
 };  
 var tooltip = {
    valueSuffix: '$'    // /xB0C is basically degrees
 }
 var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
 };

 // Data structure to hold all the configurations together
 var json = {};

 // Tying all the configurations
json.title = title;
json.subtitle = subtitle;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.tooltip = tooltip;
json.legend = legend;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the WeeklyRevenue" div
var someVar = document.getElementById("WRChart");
Highcharts.chart(someVar, json);
/* ********************************* End of WeeklyRevenue Chart ********************************* */




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
        height: 700
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
        plotLines: [{
            color: 'black', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 33, // Value of where the line will appear
            width: 2, // Width of the line    
            label: { 
                text: 'Impossible Burger Introduced', // Content of the label. 
                fontFamily: 'Verdana',
                align: 'left', // Positioning of the label. 
                x: +10, // Amount of pixels the label will be repositioned according to the alignment. 
                
                style: {
                    fontFamily: 'sans-serif',
                    textTransform: 'uppercase',
                    fontSize: '9px'
                }
            }
        }]
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
    },
    
};







// Apply the theme
Highcharts.setOptions(Highcharts.theme);

/* ********************************* Beginning of MonthlyRevenue Chart ********************************* */
var series = [
    {
        name: 'Northeast',
        data: [9457348,
            9733850,
            9483272,
            9575377,
            10002485,
            9665528,
            9680741,
            9994607,
            9843478,
            6933809,
            7415880,
            7155121,]
    }, 
    {
        name: 'SOUTHEAST',
        data: [9109953,
            9259069,
            9069553,
            9207551,
            9417080,
            9099373,
            9123903,
            9630692,
            9517680,
            6672757,
            6921065,
            6953927,
        ]
    }, 
    {
        name: 'NORTHWEST',
        data: [9307036,
            9459514,
            9211412,
            9227258,
            9539137,
            9412795,
            9280038,
            9854410,
            9615570,
            6850640,
            7096805,
            6879992]
    },
    {
        name: 'SOUTHWEST',
        data: [9297198,
            9589420,
            9330184,
            9535836,
            9752035,
            9387353,
            9463376,
            9966328,
            9725087,
            6888326,
            7318712,
            7087942]
    },
    {
        name: 'Central',
        data: [8978887,
            9091493,
            8919569,
            9066014,
            9381606,
            9026442,
            9138796,
            9492769,
            9362489,
            6611966,
            6980661,
            6797217]
    }
 ];

 // Configuration about the plot
 var title = {
    text: 'Monthly Revenue'   
 };
 var subtitle = {
    text: '* As collected from 2016 - 2019'
 };
 var xAxis = {
    title: {
        text: "Month"
    },
    categories: ['January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
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
    valueSuffix: '${value}'   
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

// We need to couple the chart data structure with the MRLineChart" div
var someVar = document.getElementById("MRLineChart");
Highcharts.chart(someVar, json);
/* ********************************* End of MonthlyRevenue Chart ********************************* */

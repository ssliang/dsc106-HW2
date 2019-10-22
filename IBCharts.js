/* ********************************** STYLE **************************************** */

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
        height: 700,
        width: 1400,
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

/* ********************************* Beginning of ImpossibleBurger Chart ********************************* */
var series = [
    {
        name: 'CENTRAL',
        data: [1859053,
            1859777,
            1935039,
            1872326,
            1937812,
            1927852,
            2034922,
            2122132,
            2071691,
            2055393,
            2125660,
            1999736,
            2164151,
            2287898,
            2214332,
            2225469,
            2279748,
            2277884,
            2210202,
            2424068,
            2402583,
            2304779,
            2435147,
            2529948,
            2564375,
            2545197,
            2453692,
            2554753,
            2678010,
            2497981,
            2639101,
            2599335,
            2559311,
            2251794,
            2419854,
            2267533,
            2391308,
            2398621,
            2316506,
            2413466,
            2486036,
            2322725,
            2254571,
            2347234,
            2328904]
    }, 
    {
        name: 'SOUTHEAST',
        data: [1825056,
            1933574,
            1901402,
            1908892,
            2013220,
            1997693,
            1977396,
            2164116,
            2131997,
            2089130,
            2130742,
            2110360,
            2216731,
            2306213,
            2283604,
            2242638,
            2259342,
            2330922,
            2275408,
            2451183,
            2431953,
            2359954,
            2413490,
            2537451,
            2577139,
            2617479,
            2500256,
            2659690,
            2668593,
            2485609,
            2630319,
            2666406,
            2586340,
            2223673,
            2376833,
            2306116,
            2491027,
            2401803,
            2384291,
            2396331,
            2475925,
            2285149,
            2240780,
            2348987,
            2367390]
    }, 
    {
        name: 'NORTHWEST',
        data: [1871601,
            1960649,
            1939014,
            1946570,
            1979297,
            2033895,
            2015714,
            2139988,
            2124603,
            2135427,
            2162560,
            2111721,
            2248713,
            2357234,
            2299477,
            2237613,
            2302404,
            2389953,
            2302992,
            2561169,
            2404606,
            2426288,
            2517947,
            2528700,
            2629108,
            2707575,
            2553334,
            2639394,
            2704249,
            2615408,
            2637788,
            2754238,
            2670893,
            2288925,
            2416298,
            2239571,
            2557614,
            2434056,
            2419587,
            2403681,
            2553187,
            2373539,
            2323544,
            2399015,
            2415468]
    },
    {
        name: 'SOUTHWEST',
        data: [1874274,
            1969544,
            2022124,
            1990964,
            2082809,
            2023180,
            2095066,
            2250241,
            2127713,
            2170377,
            2247531,
            2143326,
            2260916,
            2419317,
            2300432,
            2328692,
            2339363,
            2414319,
            2357318,
            2585228,
            2462909,
            2429262,
            2545089,
            2592250,
            2637128,
            2662916,
            2560765,
            2676031,
            2804042,
            2599733,
            2688708,
            2736147,
            2710087,
            2288687,
            2526092,
            2352366,
            2524880,
            2537643,
            2446863,
            2540149,
            2525821,
            2350121,
            2322284,
            2394712,
            2424378]
    },
    {
        name: 'NORTHEAST',
        data: [1920995,
            1959215,
            2027678,
            1997833,
            2108274,
            2091980,
            2140709,
            2205580,
            2153816,
            2168676,
            2234393,
            2133837,
            2301686,
            2453707,
            2339264,
            2359080,
            2416127,
            2465093,
            2390742,
            2537829,
            2523511,
            2444177,
            2621029,
            2647775,
            2640761,
            2814604,
            2609253,
            2722007,
            2832936,
            2641786,
            2742490,
            2786194,
            2720638,
            2320956,
            2560458,
            2373509,
            2593906,
            2506324,
            2507077,
            2496457,
            2645148,
            2466669,
            2406800,
            2465004,
            2445513]
    }
 ];

 // Configuration about the plot
 var title = {
    text: 'McDonalds Revenue by Region from 2016 - 2019'   
 };
 var subtitle = {
    text: '* Revenue as calculated from sales of chicken filet, fish filet and hamburger'
 };
 var xAxis = {
    categories: ['Jan-16',
    'Feb-16',
    'Mar-16',
    'Apr-16',
    'May-16',
    'Jun-16',
    'Jul-16',
    'Aug-16',
    'Sep-16',
    'Oct-16',
    'Nov-16',
    'Dec-16',
    'Jan-17',
    'Feb-17',
    'Mar-17',
    'Apr-17',
    'May-17',
    'Jun-17',
    'Jul-17',
    'Aug-17',
    'Sep-17',
    'Oct-17',
    'Nov-17',
    'Dec-17',
    'Jan-18',
    'Feb-18',
    'Mar-18',
    'Apr-18',
    'May-18',
    'Jun-18',
    'Jul-18',
    'Aug-18',
    'Sep-18',
    'Oct-18',
    'Nov-18',
    'Dec-18',
    'Jan-19',
    'Feb-19',
    'Mar-19',
    'Apr-19',
    'May-19',
    'Jun-19',
    'Jul-19',
    'Aug-19',
    'Sep-19'],
    title: {
        text: 'MONTH-YEAR'
     }
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
    valueSuffix: '$'  // /xB0C is basically degrees
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

// We need to couple the chart data structure with the ImpossibleBurger div
var someVar = document.getElementById("ImpossibleBurgerChart");
Highcharts.chart(someVar, json);
/* ********************************* End of ImpossibleBurger Chart ********************************* */

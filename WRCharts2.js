Highcharts.chart('WRChart2', {
    chart: {
        zoomType: 'xy',
        width: 700,
        height: 550
    },
    title: {
        text: 'Northeast vs All Other Regions '
    },
    subtitle: {
        text: "* As collected in January of 2016"
    },
    xAxis: [{
        categories: ['Friday',
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '${value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Revenue ($USD)',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Revenue ($USD)',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '${value}',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'center',
        x: 120,
        verticalAlign: 'top',
        y: 90,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Northeast Revenue',
        type: 'column',
        yAxis: 1,
        data: [299070,
            293778,
            316876,
            250188,
            250954,
            250517,
            259612],
        tooltip: {
            valueSuffix: '${value} '
        }

    }, {
        name: 'All Other Regions\' Revenue',
        type: 'spline',
        data: [225663,
            163531,
            152033,
            141869,
            138319,
            146767,
            146240],
        tooltip: {
            valueSuffix: '$(USD)'
        }
    }]
});

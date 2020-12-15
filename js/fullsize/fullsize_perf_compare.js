// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic

Highcharts.chart('fullsizePref', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fullsize Car Segment Performance Comparison'
    },
    subtitle: {
        text: 'Source: <a href="https://www.autoevolution.com//">autoevolution.com</a>'
    },
    xAxis: {
        categories: ['Horsepower', 'Torque (lb-ft)', 'MPG (combined)'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Data from 2020 models shown',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    //tooltip: {
      //  valueSuffix: ''
    //},
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '2020 Dodge Charger',
        data: [292, 260, 24.5]
    }, {
        name: '2020 Nissan Maxima',
        data: [300, 261, 25]
    }, {
        name: '2020 Toyota Avalon',
        data: [301, 267, 29.5]
    }]
});
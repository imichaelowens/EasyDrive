// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic

Highcharts.chart('fullsizePrice', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fullsize Car Segment Price Comparison'
    },
    subtitle: {
        text: 'Source: <a href="https://www.autoevolution.com//">autoevolution.com</a>'
    },
    xAxis: {
        categories: ['Price'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Starting price shown',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: 'United States Doller'
    },
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
        data: [29995]
    }, {
        name: '2020 Nissan Maxima',
        data: [19600]
    }, {
        name: '2020 Toyota Avalon',
        data: [35875]
    }]
});
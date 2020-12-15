// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic

Highcharts.chart('midsizePrice', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Midsize Car Segment Price Comparison'
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
        name: '2020 BMW 3 Series',
        data: [41250]
    }, {
        name: '2020 Toyota Camry',
        data: [24425]
    }, {
        name: '2020 Volkswagen Passat',
        data: [22995]
    }]
});
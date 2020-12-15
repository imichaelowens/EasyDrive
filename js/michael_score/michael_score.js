Highcharts.chart('container', {
    
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Michael Score Calculation'
    },
    xAxis: {
        categories: ['Toyota Corolla', 'Toyota Camry', 'Honda Civic', 'Volkswagen Jetta', 'Volkswagen Passat', 'Mercedes A Class', 'Dodge Charger', 'BMW 3 Series', 'Nissan Maxima', 'Toyota Avalon', 'Volkswagen Golf GTI', 'BMW 5 Series']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Michael Score broken down by sub category (All cars speced as base model)'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Performance Score',
        data: [8.5, 9.4, 9.25, 11, 11.2, 11.6, 18.4, 15.2, 18.7, 17.75, 15.1, 15.3]
    }, {
        name: 'Cost Braket',
        data: [1, 1, 1, 1, 1, 3, 1, 3, 2, 2, 3, 5]
    }, {
        name: 'Fun Score',
        data: [1, 1, 2, 3, 3, 3, 3, 3, 2, 4, 4, 4]
    }, {
        name: 'Practical Score',
        data: [3, 3, 4, 3, 3, 3, 1, 3, 3, 3, 4, 4]
    }, {
        name: 'Coolness Factor',
        data: [1, 1, 1, 1, 2, 3, 2, 2, 1, 1, 3, 4]
    }]
});
new WOW().init();

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red','Green','Blue','Yellow','Grey','Red'],
        datasets: [{
            label: '# of Votes',
            data: [12, 14, 16, 5, 28, 32],
            backgroundColor: [
                'red',
                'green',
                'blue',
                'yellow',
                'grey',
                'red'
            ],
            borderColor: [
                'red',
                'green',
                'blue',
                'yellow',
                'grey',
                'red'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

let ctxPie = document.getElementById('pieChart').getContext('2d');
let pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        datasets: [{
            data: [12, 14, 16, 5, 28],
            backgroundColor: [
                'red',
                'green',
                'blue',
                'yellow',
                'grey'
            ],
            hoverBackgroundColor: [
                'thistle',
                'thistle',
                'thistle',
                'thistle',
                'thistle'
            ]
        }]
    },
    options: {
        responsive: true
    }
});
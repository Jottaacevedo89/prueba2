document.addEventListener("DOMContentLoaded", function() {
    var username = localStorage.getItem("username");
    if (username) {
        document.getElementById("welcomeMessage").textContent = "Bienvenido, " + username + "!";
        document.getElementById("cardHolder").textContent = username; 
    }

    // Datos para el gráfico
    var ctx = document.getElementById('monthlyExpensesChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['20k', '40k', '60k', '80k', '100k', '120k', '140k', '160k', '180k', '200k'],
            datasets: [{
                label: 'Items de gastos',
                data: [60000, 0, 180000, 0, 0, 0, 0, 0, 0,],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Gastos en CLP',
                        font: {
                            family: "'Quicksand', sans-serif"
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Items de gastos',
                        font: {
                            family: "'Quicksand', sans-serif"
                        }
                    },
                    ticks: {
                        callback: function(value, index, values) {
                            // Retorna tus etiquetas personalizadas para los valores del eje Y
                            var labels = {
                                60000: 'Vestuario',
                                180000: 'Pago de cuentas',
                                // Agrega más etiquetas aquí si es necesario
                            };
                            return labels[value] || '';
                        }
                    }
                }
            }
        }
    });
});

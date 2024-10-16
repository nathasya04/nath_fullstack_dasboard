// Membuat grafik Income vs Expense dengan Chart.js
document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen canvas tempat menampilkan chart
    var ctx = document.getElementById('incomeChart').getContext('2d');

    // Membuat chart menggunakan Chart.js
    var chart = new Chart(ctx, {
        type: 'bar', // Tipe chart: 'bar' untuk grafik batang
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Label untuk sumbu X
            datasets: [
                {
                    label: 'Income', // Label pertama untuk pendapatan
                    backgroundColor: '#DAAF56', // Warna batang untuk income
                    data: [2000, 3000, 5000, 7000, 10000, 9000, 8000, 7500, 8500, 6000, 4000, 7000] // Data pendapatan bulanan
                },
                {
                    label: 'Expense', // Label kedua untuk pengeluaran
                    backgroundColor: '#165f0c', // Warna batang untuk expense
                    data: [1500, 2000, 3500, 5000, 7000, 6500, 6000, 5500, 4500, 3500, 2000, 3000] // Data pengeluaran bulanan
                }
            ]
        },
        options: {
            responsive: true, // Agar grafik responsif
            scales: {
                y: {
                    beginAtZero: true // Memulai sumbu Y dari 0
                }
            },
            plugins: {
                legend: {
                    display: true, // Tampilkan legenda
                    position: 'top', // Posisi legenda
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.dataset.label + ': $' + tooltipItem.raw; // Format tooltip
                        }
                    }
                }
            }
        }
    });
});

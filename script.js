// Animações AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
});

// Gráfico Chart.js
const ctx = document.getElementById('agricultureChart').getContext('2d');
const agricultureChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2025'],
        datasets: [{
            label: 'Produção Agrícola',
            data: [10, 20, 30, 40, 50, 60, 70, 80],  // Exemplo de dados
            borderColor: '#0a8f8b',
            backgroundColor: 'rgba(10, 143, 139, 0.
00

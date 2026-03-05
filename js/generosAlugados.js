const ctx2 = document.getElementById('grafico-generos-alugados');

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Romance', 'Misterio', 'Comedia', 'Aventura', 'Ficção'],
      datasets: [{
        label: 'Generos disponiveis',
        data: [12, 19, 3, 5, 2],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
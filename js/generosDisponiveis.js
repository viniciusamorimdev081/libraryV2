const ctx = document.getElementById('grafico-generos-disponiveis');

  new Chart(ctx, {
    type: 'bar',
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
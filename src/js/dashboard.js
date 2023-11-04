const notas = JSON.parse(localStorage.getItem("notas")) || [0, 0, 0, 0, 0, 0];
const notasInputs = document.querySelectorAll(".dashboard__input");
const btEnviar = document.querySelector('.botao--enviar');
const btResetar = document.querySelector('.botao--resetar')
const grafico = document.getElementById('grafico');

const ctx = grafico.getContext("2d");

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['IC', 'ATP', 'DIW', 'Filosofia', 'FADS', 'TIAW'],
    datasets: [{
      label: 'Notas',
      data: notas,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        // Define o valor máximo no eixo Y
      }
    }
  }
});


function atualizaGrafico() {
  myChart.data.datasets[0].data = notas;
  myChart.update();
}

btEnviar.addEventListener('click', () => {
  notasInputs.forEach((input, index) => {
    const nota = parseInt(input.value);
    if (!isNaN(nota)) {
      notas[index] += nota;
      input.value = "";
    }
  });
  localStorage.setItem("notas", JSON.stringify(notas));
  atualizaGrafico();
})

btResetar.addEventListener("click", () => {
  localStorage.removeItem("notas");
  notasInputs.forEach((input, index) => {
    notas[index] = 0;
    input.value = "";
  });
  atualizaGrafico();
});

atualizaGrafico();
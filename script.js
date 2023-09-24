function mudarCor() {
    const pagina = document.getElementById('pagina');
    pagina.style.background = 'linear-gradient(620deg, rgb(45, 112, 138), rgb(0, 0, 0))';
  }

  let corFundoAtual = 1;

function mudarCor() {
  const pagina = document.getElementById('pagina');


  const coresDeFundo = [
    'linear-gradient(920deg, rgb(97, 79, 0), rgb(0, 0, 0))',
    'linear-gradient(620deg, rgb(45, 112, 138), rgb(0, 0, 0))'
  ];

  
  corFundoAtual = 1 - corFundoAtual;
  pagina.style.background = coresDeFundo[corFundoAtual];
}


let livros = [];
const endpointdaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getbuscarLivrosdaApi();

async function getbuscarLivrosdaApi(){
    const res = await fetch(endpointdaApi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto);
}




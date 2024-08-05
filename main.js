const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando"';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepção"';
let linhas = '';
const atividades = [];
const notas = [];


form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){

    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    atividades.push(nomeAtividade.value);
    notas.push(parseFloat(notaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${nomeAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';
    linhas += linha;

    nomeAtividade.value = '';
    notaAtividade.value = '';

};

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

};

function atualizaMediaFinal(){

    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){

        somaDasNotas += notas[i];
    };

    const media = somaDasNotas / notas.length;

    console.log(media);
};
    

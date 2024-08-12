const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando"';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepção"';
let linhas = '';
const atividades = [];
const notas = [];
const spamAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spamReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima, para iniciarmos.'));



form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){

    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(nomeAtividade.value)){
        alert(`A atividade ${nomeAtividade.value} já foi inserida. Por favor ensira um nome diferente.`);
    } else {
    atividades.push(nomeAtividade.value);
    notas.push(parseFloat(notaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${nomeAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';
    linhas += linha;

    nomeAtividade.value = '';
    notaAtividade.value = '';
    };
};

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

};

function atualizaMediaFinal(){

    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(1);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spamAprovado : spamReprovado;

};

function calculaMediaFinal(){

    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){

        somaDasNotas += notas[i];
    };

    return somaDasNotas / notas.length;
};
    

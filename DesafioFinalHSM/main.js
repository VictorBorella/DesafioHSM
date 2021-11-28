var listaCursos = require('./database');

const readline = require('readline-sync');

do {
    var i = listaCursos.length;
    var seletor = readline.question('\nVocê deseja: \n 1 - Adicionar um curso? \n 2 - Procurar um curso? \n 3 - Modificar um curso? \n 4 - Deletar um curso? \n 5 - Listar todos os cursos? \n EXIT - Sair \n\n');

    if (seletor === '1') {
        addCurso();
    }

    if (seletor === '2') {
        findCurso();
    }

    if (seletor === '3') {
        attCurso();
    }

    if (seletor === '4') {
        removeCurso();
    }

    if (seletor === '5') {
        showCursos();
    }

} while (seletor !== "EXIT");

function addCurso() {
    var addCurso = {};
    addCurso.Id = readline.question('Digite o ID do curso:');
    addCurso.Curso = readline.question('Digite o NOME do curso:');
    addCurso.Descricao = readline.question('Digite a DESCRIÇÃO do curso:');
    addCurso.Imagem = readline.question('Digite o caminho para a imagem:');
    addCurso.Professor = readline.question('Digite o nome do PROFESSOR:');
    addCurso.Aula = readline.question('Link para a aula:');

    listaCursos[i] = addCurso;
    i++;

    console.log('\nCurso adicionado\n');
    return
}

function findCurso() {
    var procurarId = readline.question('\nQual o ID do curso?\n');
    var curso = listaCursos.filter(listaCursos => listaCursos.Id === procurarId);
    curso != "" ? console.table(curso) : console.log('\nCurso não encontrado\n');
    return
}

function attCurso() {
    var procurarId = readline.question('\nQual o ID do curso que deseja modificar?\n');
    var atualizar = listaCursos.find(listaCursos => listaCursos.Id === procurarId);

    atualizar.Id = readline.question('Digite o novo ID do curso:');
    atualizar.Curso = readline.question('Digite o novo NOME do curso:');
    atualizar.Descricao = readline.question('Digite a nova DESCRIÇÃO do curso:');
    atualizar.Imagem = readline.question('Digite o novo caminho para a imagem:');
    atualizar.Professor = readline.question('Digite o novo PROFESSOR:');
    atualizar.Aula = readline.question('Link novo para a aula:');

    console.log('\n Curso Atualizado: \n');
    console.table(atualizar);
    return
}

function removeCurso() {
    console.table(listaCursos);

    var procurarId = readline.question('\n Qual o ID do curso que deseja deletar? \n');
    var deletar = listaCursos.find(listaCursos => listaCursos.Id === procurarId);
    var indice = listaCursos.indexOf(deletar);

    listaCursos.splice(indice, 1);
    i--;

    console.log('\nCurso deletado \n')
    return
}

function showCursos() {
    console.table(listaCursos);
    return
}
const nome = document.getElementById('nome')
const sobName = document.getElementById('sobName')
const idade = document.getElementById('idade')
const email = document.getElementById('e-mail')
const cpf = document.getElementById('cpf')
const cnh = document.getElementById('cnh')
const rg = document.getElementById('rg')
const genero = document.getElementById('genero')
const ativo = document.getElementById('ativo')
const resultado = document.getElementById('div#res')
const nomeUser = [];

function enviar(){
    if(nomeUser.length == 0){//confere todos os campos estão preenchidos
        alert('Preencha todos os campos para concluir o registro!')
    }else{//resultado apresentado na tela.
        resultado.innerHTML = ''
        resultado.innerHTML +=`Eu ${nome} ${sobName} do genero ${genero} com ${idade} anos de idade e portador do CPF ${cpf}, e do registro geral ${rg} e da carteira de habilitação ${cnh} concordo em registrar o e-mail ${email} e sendo um membro ${ativo} para estar recebendo de participando das discussões para o desenvolvimento do grupo.`
    }
}

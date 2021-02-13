const nome = document.getElementById('nome').value
const sobNome = document.getElementById('sobName').value
const idade = document.getElementById('idade').value
const email = document.getElementById('e-mail').value
const cpf = document.getElementById('cpf').value
const cnh = document.getElementById('cnh').value
const rg = document.getElementById('rg').value
const genero = document.getElementById('genero').value
const ativo = document.getElementById('ativo').value
const resultado = document.getElementById('div#res')
const nomeUser = [];


function enviar(){
    //resultado apresentado na tela.

        let newUser = {
            name: nome,
            sobName: sobNome,
            email: email,
            cpf: cpf,
            cnh: cnh,
            rg: rg,
            genero: genero,
            ativo: ativo
        }
        newUser.push(nomeUser);

        resultado.innerHTML = ''
        resultado.innerHTML +=`Eu ${nome} ${sobName} do genero ${genero} com ${idade} anos de idade e portador do CPF ${cpf}, e do registro geral ${rg} e da carteira de habilitação ${cnh} concordo em registrar o e-mail ${email} e sendo um membro ${ativo} para estar recebendo de participando das discussões para o desenvolvimento do grupo.`
    
}

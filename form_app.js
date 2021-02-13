
function enviar(){
    //Variaveis com valores recebido do formulario
    const nome = document.getElementById('nome').value
    const sobNome = document.getElementById('sobName').value
    const idade = document.getElementById('idade').value
    const email = document.getElementById('e-mail').value
    const cpf = document.getElementById('cpf').value
    const cnh = document.getElementById('cnh').value
    const rg = document.getElementById('rg').value
    const genero = document.getElementById('genero').value
    const ativo = document.getElementById('ativo').value
    const resultado = document.getElementById('res')
    const nomeUser = [];

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
        nomeUser.push(newUser);

        resultado.innerHTML = ''
        resultado.innerHTML +=`Eu <b>${newUser.name} ${sobNome}</b> do sexo <b>${genero}</b> com <b>${idade}</b> anos de idade e portador do CPF <b>${cpf}</b>, e do registro geral <b>${rg}</b> e da carteira de habilitação <b>${cnh}</b> concordo em registrar o e-mail <b>${email}</b> e sendo um membro <b>${ativo}</b> para estar recebendo de participando das discussões para o desenvolvimento do grupo.`
}

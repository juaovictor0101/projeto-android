//setando e organizando todas as variáveis que serão usadas no código
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

//verificação que inicia no momento que o usuário clica fora do campo de input, fazendo assim uma verificação se os dados foram informados corretamente. Caso tenha sido infomado algo errado, uma mensagem com o erro cometido aparece na tela. 

//Essa verificação é especifica para o campo nome

//verificação da variavel que inicialmente foi declarada como falso, porque o campo não foi preenchido,  nessa validação é verificado se a mesma foi preenchida corretamente, caso tenha sido, a mesma é mudada para true 

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

//Essa verificação é especifica para o campo nome

//verificação da variavel que inicialmente foi declarada como falso, porque o campo não foi preenchido,  nessa validação é verificado se a mesma foi preenchida corretamente, caso tenha sido, a mesma é mudada para true 

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

//Essa verificação é especifica para o campo senha

//verificação da variavel que inicialmente foi declarada como falso, porque o campo não foi preenchido,  nessa validação é verificado se a mesma foi preenchida corretamente, caso tenha sido, a mesma é mudada para true 

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

//Essa verificação é especifica para o campo confirmação de senha, onde confirma se os dados informado nesse campo são iguais ao campo "senha"

//verificação da variavel que inicialmente foi declarada como falso, porque o campo não foi preenchido,  nessa validação é verificado se a mesma foi preenchida corretamente, caso tenha sido, a mesma é mudada para true 

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

//verifica se todos os dados foram preenchidos corretamente de acordo com cada evento/função acima, caso tenha sido informa uma mensagem na tela de "Cadastro realizado com sucedo" e o usuário é encaminhado para a pagina de login, para acessar o conteudo, caso não, é informado uma mensagem que é "preciso preencher todos os dados corretamente"

//essa função também usa local storage como um tipo de "banco de dados" para guardar as informações de login usadas no cadastro e assim verificar se as mesmsas coincidem, caso coincidam, o login é realizado com sucesso, caso não, é informado uma mensagem de erro no login ou senha


function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = '../html/signin.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}
////para verificação atribuição a variavel btn e adcionando um evento de click, que ao clicar nele e verificar se o tipo dele é tipo password, se for, mudar para o tipo text, e vice versa

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

//para verificação atribuição a variavel btn e adcionando um evento de click, que ao clicar nele e verificar se o tipo dele é tipo password, se for, mudar para o tipo text, e vice versa

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})



  
  
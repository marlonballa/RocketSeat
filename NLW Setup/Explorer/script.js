//De acordo com a documentação devemos primeiro acessar o form da página
const formHabits = document.querySelector('#form-habits');

//Em seguida devemos instanciar a classe nlwSetup, passando como parametro a variável que armazena o form
const nlwSetup = new NLWSetup(formHabits);

//Acessando o botão e "Registrar Atividade"
const logActivity = document.querySelector('header button');

//Criando o evento que dispara a função de cadastro de nova atividade
logActivity.addEventListener('click', addLogActivity);

//Função para cadastro de nova atividade
function addLogActivity() {
    //Variável que recebe a data atual
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    //Função que verifica se o dia já existe no registro de atividades
    const dayExists = nlwSetup.dayExists(today);
    //Se o dia já existir, retorna uma mensagem para o usuário informando que já foi adicionado
    if(dayExists) {
        alert("Este dia já está no seu registro :)");
        return
    }
    //Caso o dia ainda não exista no registro de hábitos, ele será adicionado. 
    nlwSetup.addDay(today)
    alert("Adicionado com sucesso! 🆗")
}

//Mantendo os dias cadastrados
formHabits.addEventListener("change", saveRegisteredDay)

//Para armazenar estas informações, vamos usar o LocalStorage. O que ele faz é guardar na memória do browser, informações das atividades do usuário. 
//Função responsável por salvar os dias registrados
function saveRegisteredDay() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

//Recuperando as informações salvas no localStorage
//Criando o objeto que armazenará as informações de datas e as atividades realizadas em cada uma delas.
//Este objeto é no estilo 'chave-valor' onde a chave deve ser o data-name de cada habit dentro de formHabits
//As informações de datas devem estar no estilo MM-DD
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
//Após atribuir os dados ao método que será responsável por sua manipulaçõa, devemos carregar estes dados e renderizar o layout.
nlwSetup.load()


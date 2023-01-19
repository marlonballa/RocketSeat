//De acordo com a documentação devemos primeiro acessar o form da página
const formHabits = document.querySelector('#form-habits');

//Em seguida devemos instanciar a classe nlwSetup, passando como parametro a variável que armazena o form
const nlwSetup = new NLWSetup(formHabits);

//Criando o objeto que armazenará as informações de datas e as atividades realizadas em cada uma delas.
//Este objeto é no estilo 'chave-valor' onde a chave deve ser o data-name de cada habit dentro de formHabits
//As informações de datas devem estar no estilo MM-DD
const data = {
    hbPhysicalExercises: ['01-19', '01-20', '01-21', '01-22', '01-23', '01-24', '01-25', '01-26'],
    hbDrinkWater: ['01-19', '01-20', '01-21', '01-22', '01-23','02-03','02-04','02-05','02-06','02-07','02-08','02-09'],
    hbToSleep: ['01-19', '01-20', '01-21', '01-28','01-29', '01-30','02-07','02-08','02-09','02-07','02-08','02-09'],
    hbTaekwondo: ['01-20', '01-21', '01-27','01-28','01-29', '01-30','01-31','02-01','02-02',]
}
nlwSetup.setData(data)

//Após atribuir os dados ao método que será responsável por sua manipulaçõa, devemos carregar estes dados e renderizar o layout.
nlwSetup.load()
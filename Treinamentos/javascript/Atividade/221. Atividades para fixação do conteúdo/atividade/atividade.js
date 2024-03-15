var objetos = ['Cadeira', 'Impressora', 'Garfo']

/*  FORMO QUE EU FIZ ESTÁ CORRETA TBM, MAS AMBAS AS FORMULAS PRECISA DE VALIDAÇÃO DE DADOS POIS NÃO ESTÁ ORDENANDO DE FORMA CORRETA


function Add (){
    // Recupera o valor do campo de texto
    var campoAdd = document.getElementById('campoEntrada').value.trim()
    // Limpa o valor do campo de texto
     document.getElementById('campoEntrada').value = '';
    
    
    
     // Verifica se o valor está vazio
    if ( campoAdd === ''){
        alert ('Informe um valor válido!')
    }else{
        // Adiciona o valor ao array
        if(objetos.includes(campoAdd)){
            alert('Objeto já foi adicionado')
        }else{
            // Adiciona o valor ao array
            objetos.push(campoAdd);
            console.log('Array de objetos:', objetos); 
        }
    }
}

function Ordenar (){

 console.log(objetos.sort())


}*/
function adicionarObjetos() {
    //recupera o valor inserido no campo id objeto
    var objeto = document.getElementById('objeto').value
    
    //caso possua algum valor preenchido entra no if
    if(objeto != '') {
    //verifica se o valor já não foi inserido anteriormente
    //se sim, informa que valor já existe, se não insere novo valor
    if( objetos.indexOf(objeto) !== -1) {
    alert('Objeto já foi adicionado')
    } else {
    objetos.push(objeto)
    console.log(objetos)
    
    document.getElementById('objeto').value = ''
    }
    
    } else {
    alert('Informe um objeto válido')
    
    }
    }
    function ordenarObjetos() {
    objetos.sort()
    console.log(objetos)
    }
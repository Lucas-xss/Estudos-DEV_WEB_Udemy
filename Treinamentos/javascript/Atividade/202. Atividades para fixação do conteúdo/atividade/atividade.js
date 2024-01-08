function ganha_foco () {
    document.getElementById('modificar').className = 'estilo1'
    //document.getElementById('modificar').style.background = "yellow"
}
function perde_foco () {

    //Seleciona o valor digitado
    var recuperar = document.getElementById('modificar').value
    //limpa o campo de digitação do imput
    document.getElementById('modificar').value = ''
    var minLength = 3
    
    if (recuperar.length < minLength){
        document.getElementById('modificar').className = 'estilo2'
    }else{
        document.getElementById('modificar').className = 'estilo3'
    }
    console.log(recuperar)

   /* var valorCampo = document.getElementById('modificar').value
    if(valorCampo.length < 3) {
    document.getElementById('modificar').style.background = "red"
    } else {
    document.getElementById('modificar').style.background = "green"
    }*/
   

}
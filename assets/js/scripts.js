var numero = 0; 
var verifica ;

function Menos (){
    numero--
    MostraNaTela()

}
function Mais(){
    numero++
    MostraNaTela()
}

function MostraNaTela(){
    const p = document.querySelector("#resultado")
    p.innerText = numero 
    if(numero>0){
        
        document.body.style.backgroundColor = 'green';

    } else if(numero==0){
        document.body.style.backgroundColor = 'black';
    }
    else {
        document.body.style.backgroundColor = 'red';
    }

}








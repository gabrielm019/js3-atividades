function alimento(){
    let ver= document.getElementById("Verificar").value


    cod=0;

    if(ver == 1){

        document.getElementById("mensagem").innerHTML= "Alimento não-perecível"

    }
    
    else if(ver >=2 && ver <=4 ){
        document.getElementById("mensagem").innerHTML= "Alimento perecível"


    }
    else if(ver >=5 && ver <=6){
        document.getElementById("mensagem").innerHTML= "Vestuário"


    }

    else if(ver == 7){
        document.getElementById("mensagem").innerHTML= "Higiene Pessoal"

    }

    else if(ver >= 8 && ver <=10){
        document.getElementById("mensagem").innerHTML= "Utensílios domésticos"

    }

    else{
        document.getElementById("mensagem").innerHTML= "Inválido"

    }
}
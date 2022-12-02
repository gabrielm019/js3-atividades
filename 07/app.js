function ParouImpar(){

    let int = document.getElementById("parimpar").value

    

    if(int % 2 ==0){

        document.getElementById("mensagem").innerHTML = "Par"

    }

    else{
        document.getElementById("mensagem").innerHTML = "Impar"

    }


}
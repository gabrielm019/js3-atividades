function Tanque(){





    let carro = document.getElementById('TC').value



    console.log(carro)



    let capacidade = document.getElementById('capacidade').value





    let litros = 0;

    if (carro == "G") {



        document.getElementById("resultado").innerHTML = parseFloat(capacidade) * 6.80

    }

    else {

        document.getElementById("resultado").innerHTML = parseFloat(capacidade) * 4.00

    }



}
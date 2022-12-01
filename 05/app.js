function Banco() {



    let salario = document.getElementById('numero3').value

    let np = document.getElementById('numero2').value

    let emprestimo = document.getElementById('numero1').value

    let desconto = parseFloat(salario) * 0.30 ;

    let valordasparcelas = parseFloat(emprestimo) / parseFloat(np);



    if(valordasparcelas <= desconto){



        document.getElementById("resultado").innerHTML = "emprestimo aprovado"

    }



    else{

        document.getElementById("resultado").innerHTML = "empréstimo reprovado"

    }

}



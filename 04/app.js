function VerificarSalario(){

    let s1= document.getElementById("salario1").value
    let bonus= parseFloat(s1)*0.20;
    let bonus2= parseFloat(s1)*0.10;
    let tdt= document.getElementById("tdt1").value

    if(tdt >= 5){

        document.getElementById("resultado").innerHTML= parseFloat(bonus)

    }
    else if(tdt <=4){

    document.getElementById("resultado").innerHTML= parseFloat(bonus2)
    }



}
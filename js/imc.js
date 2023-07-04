function submitForm(){
    nome = document.getElementsByName(inputName).value;
    sexo = document.getElementsByName(inputSex).value;
    imc = (document.getElementById(txtWeight).value / (document.getElementById(txtHeight).value * document.getElementById(txtHeight).value));
    console.log(nome);
    console.log(sexo);
    console.log(imc);
    msg = `Nome: ${nome}\nSexo: ${sexo}\nIMC: ${imc}`;
    document.getElementById("txtResult").value = msg;
    return false;
}
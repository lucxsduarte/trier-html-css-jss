function submitForm(){
    nome = document.getElementById("txtName").value;
    sexo = document.querySelector('input[name="inputSex"]:checked').value;
    imc = (document.getElementById("txtWeight").value / (document.getElementById("txtHeight").value * document.getElementById("txtHeight").value));
    const imcFormatado = Math.round(imc * 100) / 100;
    msg = `Nome: ${nome}\nSexo: ${sexo}\nIMC: ${imcFormatado}\n`;
    let status = "";
    if (imcFormatado < 18.5) {
        status = "Status: MAGREZA";
    } else if (imcFormatado >= 18.5 && imcFormatado <= 24.9) {
        status = "Status: NORMAL";
    } else if (imcFormatado > 24.9 && imcFormatado <=30) {
        status = "Status: SOBREPESO";   
    } else if (imcFormatado > 30){
        status = "Status: OBESIDADE";
    }
    msg += status;
    document.getElementById("txtResult").value = msg;
    return false;
}
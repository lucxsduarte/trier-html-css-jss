function submitForm(){
    nome = document.getElementById("txtName").value;
    sexo = document.querySelector('input[name="inputSex"]:checked').value;
    imc = (document.getElementById("txtWeight").value / (document.getElementById("txtHeight").value * document.getElementById("txtHeight").value));
    const imcFormatado = Math.round(imc * 100) / 100;
    msg = `Nome: ${nome}\nSexo: ${sexo}\nIMC: ${imcFormatado}\n`;
    let status = "";
    if (sexo == "Feminino") {
        if (imcFormatado < 19.1 ) {
            status = "Status: MAGREZA";
        } else if (imcFormatado >= 19.1 && imcFormatado <= 25.8) {
            status = "Status: NORMAL";
        } else if (imcFormatado >= 25.9 && imcFormatado <= 27.3 ) {
            status = "Status: POUCO ACIMA DO PESO";   
        } else if (imcFormatado >= 27.4 && imcFormatado <= 32.3){
            status = "Status: SOBREPESO";
        } else if (imcFormatado > 32.3){
            status = "Status: OBESIDADE";
        }
        msg += status;
        document.getElementById("txtResult").value = msg;
        return false;

    } else if (sexo == "Masculino") {
        if (imcFormatado < 20.7 ) {
            status = "Status: MAGREZA";
        } else if (imcFormatado >= 20.7 && imcFormatado <= 26.4) {
            status = "Status: NORMAL";
        } else if (imcFormatado >= 26.5 && imcFormatado <= 27.8 ) {
            status = "Status: POUCO ACIMA DO PESO";   
        } else if (imcFormatado >= 27.9 && imcFormatado <= 31.1){
            status = "Status: SOBREPESO";
        } else if (imcFormatado > 31.2){
            status = "Status: OBESIDADE";
        }
        msg += status;
        document.getElementById("txtResult").value = msg;
        return false;
    }
}
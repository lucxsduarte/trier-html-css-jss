function olaMundo(){
    var nome = "Lucas";
    var peso = 75;
    var altura = 1.84;

    console.log(nome + " " + peso + " " + altura);
    console.log(`O nome é ${nome}, a altura é: ${altura} e o peso é: ${peso}`);

    var imc = peso / (altura * altura);
    console.log("IMC: " + imc);

    var obj = new Object();
        obj.nome = "Mariazinha";
        obj.idade = 9;
        obj.altura = 1.30;
        obj.ehMenina = true;

        console.log(obj);

    var obj2 = {
        nome: "Isa",
        peso: 48,  
        altura: 1.59
    }

    console.log("IMC de " + obj2.nome+ ": " + (obj2.peso / (obj2.altura * obj2.altura)));

    var frutas = [ 'Maça','Laranja','Banana'];

    console.log(frutas[1]);
    frutas.push('Goiaba');
    console.log(frutas);
}

function testandoErros(){
    var teste1;
    console.log(teste1); //valor nao atribuido

    var teste2 = null;
    console.log(teste2); //valor nulo

    var n = 20;
    var str = "Texto";
    console.log(n * str); //erro de conversao

    console.log(2e3);
    console.log(2e4);
    console.log(2e308); //estoura o limite do javascript
}

function tipoDados(){
    console.log("37" - 7); 
    console.log("37" + 7); //não faz a soma pq o sinal de + é concatenação

    console.log("1.1" + "1.1");
    console.log((+"1.1") + (+"1.1"));
    console.log(parseFloat("1.1") + parseFloat("1.1"));

    let numeroComoString = "123.2";
    let numero = parseInt(numeroComoString); //nao da erro, apenas pega a parte INT
    console.log(numero);

    let booleanComoString = "false"
    let b = Boolean(booleanComoString);
    if(b == true)
        console.log("Verdadeiro: "+ b); //quando possui algo é verdadeiro
        else
        console.log("Falso: " + b); //quando é vazio vem como falso
}

function enviaForm(){
    nome = document.getElementById("txtNome").value;
    idade = document.getElementById("txtIdade").value;
    msg = `Nome: ${nome}\nIdade: ${idade}`;
    console.log(nome);
    console.log(idade);

    document.getElementById("txtDados").value = msg;
    return false;
}
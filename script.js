function calcular () {
    
    var copos;
    var ml;

    copos = document.getElementById("copos").value;
    ml = document.getElementById("ml").value;

    console.log(ml);

    var numColheres = 2 * copos;
    var aguaMl =( 0.1429 * ml)*copos;
    var leiteMl = (0.8571 *ml)*copos;

    var ingredientes = ` Ingredientes: ${numColheres} colheres de sopa de pó de cappucino, ${aguaMl}ml de agua, ${leiteMl}ml de leite`;
    
    var receita = ` Receita: esquente ${aguaMl}ml de agua(sem que ferva), adicione ${numColheres} colheres de cappucino, misturem bem! separe em um recipiente e leve a geladeira, até gelar, apos isso, use o liquidificador bara bater, junto coloque ${leiteMl}ml de leite. E está pronto! seu delicioso cappuccino gelado`;

    var dicas = `Segura essas dicas para melhorar seu cappuccino: bata com um pouco de gelo! acrescente granulados de chocolate, bata a mistura de agua e po de cappuccino na batedeira antes da geladeira, pra ficar mais cremoso!`;


    document.getElementById("ingredientes").innerHTML = ingredientes
    document.getElementById("receita").innerHTML = receita
    document.getElementById("dicas").innerHTML = dicas
}
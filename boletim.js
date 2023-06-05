notas = [""];
notas2 = [""];
notas3 = [""];
notas4 = [""];
notas5 = [""];
notas6 = [""];
notas7 = [""];
notas8 = [""];
notas9 = [""];
notas10 = [""];

$("#button").click(function(){
    n1 = Number($("#notas").val());
    n2 = Number($("#notas2").val());
    resultado = (n1 + n2)/2;
    $("#result").val(resultado);
})

$("#button").click(function(){
    n3 = Number($("#notas3").val());
    n4 = Number($("#notas4").val());
    resultado2 = (n3 + n4)/2;
    $("#result2").val(resultado2);
})

$("#button").click(function(){
    n5 = Number($("#notas5").val());
    n6 = Number($("#notas6").val());
    resultado3 = (n5 + n6)/2;
    $("#result3").val(resultado3);
})

$("#button").click(function(){
    n7 = Number($("#notas7").val());
    n8 = Number($("#notas8").val());
    resultado4 = (n7 + n8)/2;
    $("#result4").val(resultado4);
})

$("#button").click(function(){
    n9 = Number($("#notas9").val());
    n10 = Number($("#notas10").val());
    resultado5 = (n9 + n10)/2;
    $("#result5").val(resultado5);
})

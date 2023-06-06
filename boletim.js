var banco = [];

$("#button").click(function(){
    n1 = Number($("#notas").val());
    n2 = Number($("#notas2").val());
    resultado = (n1 + n2)/2;
    materia = [];
    materia['nome'] = "Português";
    materia['nota1'] = n1;
    materia['nota2'] = n2;
    banco.push(materia);
    $("#result").val(resultado);
})

$("#button").click(function(){
    n3 = Number($("#notas3").val());
    n4 = Number($("#notas4").val());
    resultado2 = (n3 + n4)/2;
    materia2 = [];
    materia2['nome'] = "Matemática";
    materia2['nota1'] = n3;
    materia2['nota2'] = n4;
    banco.push(materia2);
    $("#result2").val(resultado2);
})

$("#button").click(function(){
    n5 = Number($("#notas5").val());
    n6 = Number($("#notas6").val());
    resultado3 = (n5 + n6)/2;
    materia3 = [];
    materia3['nome'] = "História";
    materia3['nota1'] = n5;
    materia3['nota2'] = n6;
    banco.push(materia3);
    $("#result3").val(resultado3);
})

$("#button").click(function(){
    n7 = Number($("#notas7").val());
    n8 = Number($("#notas8").val());
    resultado4 = (n7 + n8)/2;
    materia4 = [];
    materia4['nome'] = "Ciências";
    materia4['nota1'] = n7;
    materia4['nota2'] = n8;
    banco.push(materia4);
    $("#result4").val(resultado4);
})

$("#button").click(function(){
    n9 = Number($("#notas9").val());
    n10 = Number($("#notas10").val());
    resultado5 = (n9 + n10)/2;
    materia5 = [];
    materia5['nome'] = "Geografia";
    materia5['nota1'] = n9;
    materia5['nota2'] = n10;
    banco.push(materia5);
    $("#result5").val(resultado5);
})

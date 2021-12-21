let nota = 75;

if(nota > 100 || nota < 0 ){
  console.log("Nota invalida");
    return "Nota invalida";    
}
else if(nota >= 90 ){
  console.log("A");
    return "A";
}
else if(nota >= 80){
  console.log("B");
    return "B";
}
else if(nota >= 70){
  console.log("C");
    return "C";
}
else if(nota >= 60){
  console.log("D");
    return "D";
}
else if(nota >= 50){
  console.log("E");
    return "E";
}
else if(nota < 50){
  console.log("F");
    return "F";
}

let info = [
  {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  },
  {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  }
];
for(let key in info[0]){
  if(key === "recorrente" && info[0].recorrente === info[1].recorrente){
    console.log("Ambos recorrentes");
    break;
  }
  else{
    console.log(info[0][key] + " e " + info[1][key]);
  }    
}
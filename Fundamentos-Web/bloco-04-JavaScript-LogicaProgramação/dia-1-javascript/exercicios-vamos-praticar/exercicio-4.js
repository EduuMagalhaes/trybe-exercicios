const a = 10;

if(a > 0){
  console.log("positive");
  return "positive";
}
else if(a < 0){
  console.log("negative");
  return "negative";
}
else{
  console.log("zero");
  return "zero";
}
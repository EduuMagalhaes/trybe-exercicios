const a = 10;
const b = 3;
const c = 16;

if(a > b && a > c){
  console.log(a);
  return a;
}
else if(b > c){
  console.log(b);
  return b;
}
else{
  console.log(c);
  return c;
}
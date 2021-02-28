let inicio = 9
let primo;
for (let i =0 ; i<=inicio ; i++) {
  for (let j=1; j<=i; j++) {
      if (i % j == 0) {
          primo++;

      }
  }
  if (primo <= 2) {
      console.log(`número ${i} é PRIMO!`);
  }
   primo = 0;
}


let num = 10;
let divisor = 0;
let index;
for (index =1 ; index <=num ; index++) {
     if (num % index ==0) {
          divisor++;

      }
  }
  if (divisor <= 2) {
      console.log(`número ${num} é PRIMO!`);
  }else{
    console.log(`número ${num} Nâo é PRIMO!`);
  }




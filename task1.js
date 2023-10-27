let start = 1;
let end = 100;

const printEventNum = () => {
  for(let i = 0; i < 5 && start <= end; i++) {
    if(start % 2 === 0) {
        console.log(start);
    }
    start++;
  }
  if(start <= end) {
    setTimeout(printEventNum, 5000);
}
}

printEventNum();





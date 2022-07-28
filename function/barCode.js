const large_i = `I`;
const small_l = `l`;
let barCodeArray = new Array(10);

for(let i = 0; i < barCodeArray.length; i++) {
    let random = parseInt(Math.random() * 2);
    if(random === 1) {
        barCodeArray[i] = large_i;
    } else {
        barCodeArray[i] = small_l;
    }
}

let barCode = ``;

for(let i = 0; i < barCodeArray.length; i++) {
    barCode += barCodeArray[i];
}

console.log(barCode);
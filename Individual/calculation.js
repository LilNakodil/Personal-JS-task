function justPlus(a,b){
    return a+b;
}
function plus(a,b){
    if(a.length>b.length){
        let temporary;
        temporary=a;
        a=b;
        b=temporary;
    }
    let storing="";
    let len1=a.length;
    let len2=b.length;
    a=a.split("").reverse().join("");
    b=b.split("").reverse().join("");
    let carry=0;
    for(let i=0;i<len1;i++){
        let sum=Math.round((a[i]-"0")+(b[i]-"0")+carry);
        storing=storing.concat(sum%10);
        carry=Math.round(sum/10);
    }
    for (let i=len1;i<len2;i++){
        let sum=Math.round((b[i]-"0")+carry);
        storing=storing.concat(sum%10);
        carry=Math.round(sum/10);
    }
    if(carry){
        storing=storing.concat(carry);
    }
    storing=storing.split("").reverse().join("");
    return storing;
}
// TEST
console.log(plus("120000000000000000000000000000000000000000000","1"));


function justMinus(a,b){
    return a-b;
}
function minus(a, b) {
    let prefix = '0'.repeat(Math.abs(a.length - b.length));
    let flip = false;
  
    if (prefix.length) {
      if (a.length > b.length) {
        b = `${prefix}${b}`;
      } else if (b.length > a.length) {
        a = `${prefix}${a}`;
  
        // flipped
        a = [b, b = a][0];
        flip = true;
      }
    }
  
    const r_buffer = [];
  
    for (let i = a.length - 1; i >= 0; i--) {
      r_buffer[i] = parseInt(a[i]) - parseInt(b[i]);
    }
  
    for (let i = r_buffer.length - 1; i > 0; i--) {
      if (0 > r_buffer[i]) {
        r_buffer[i] = 10 + r_buffer[i];
        r_buffer[i - 1] = r_buffer[i - 1] - 1;
      }
    }
  
    while (r_buffer[0] === 0) {
      r_buffer.shift();
    }
  
    let c = r_buffer.length ? r_buffer.join('') : '0';
  
    return flip ? -c : c;
}
// TEST
console.log(minus("100000000000000000000000000000000000000000000000000000","1"));



function justDivide(a,b){
    return a/b;
}
class BigDecimal {
    constructor(value) {
        let [ints, decis] = String(value).split(".").concat("");
        decis = decis.padEnd(BigDecimal.decimals, "0");
        this.bigint = BigInt(ints + decis);
    }
    static fromBigInt(bigint) {
        return Object.assign(Object.create(BigDecimal.prototype), { bigint });
    }
    divide(divisor) { // You would need to provide methods for other operations
        return BigDecimal.fromBigInt(this.bigint * BigInt("1" + "0".repeat(BigDecimal.decimals)) / divisor.bigint);
    }
    toString() {
        const s = this.bigint.toString().padStart(BigDecimal.decimals+1, "0");
        return s.slice(0, -BigDecimal.decimals) + "." + s.slice(-BigDecimal.decimals)
                .replace(/\.?0+$/, "");
    }
}
BigDecimal.decimals = 18;
function inputDivide(a,b){
    let one= new BigDecimal(a);
    let two= new BigDecimal(b);
    return(one.divide(two).toString());
}
// TEST
console.log(inputDivide("100000000000000000000000000000000000000000000","2"));



function justMultiply(a,b){
    return a*b;
}
function multiply(a, b) {
    var aa = a.split('').reverse();
    var bb = b.split('').reverse();
  
    var stack = [];
  
    for (var i = 0; i < aa.length; i++) {
      for (var j = 0; j < bb.length; j++) {
        var m = aa[i] * bb[j];
        stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
      }
    }
  
    for (var i = 0; i < stack.length; i++) {
      var num = stack[i] % 10;
      var move = Math.floor(stack[i] / 10);
      stack[i] = num;
  
      if (stack[i + 1])
        stack[i + 1] += move;
      else if (move != 0)
        stack[i + 1] = move;
    }
    return stack.reverse().join('');
}
// TEST
console.log(multiply("100000000000000000000000000000000000000000000000","2"))
class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}
 
String.prototype.contains = String.prototype.includes;
String.prototype.starts = String.prototype.startsWith;
String.prototype.ends = String.prototype.endsWith;
Number.prototype['>'] = function(value) {
    return this > value;
}
Number.prototype['<'] = function(value) {
    return this < value;
}
Number.prototype['='] = function(value) {
    return this == value;
}
Number.prototype['<='] = function(value) {
    return this <= value;
}
Number.prototype['>='] = function(value) {
    return this >= value;
}
function filter(arr, str) {
    const strArr = str.split('&');
    const props = strArr.map(item => ({
      ops: item.split(/(-|>=?|<=?|=)/).filter((v) => v && /[^-]/.test(v))
    }));
 
    const newArr = arr.filter(value => {
        for (let prop of props) {
        if (!value[prop.ops[0]][prop.ops[1]](prop.ops[2]))
               return false;
        }
        return true;
    })
    return newArr;
}
const str = 'name-contains-fd&price-=2&quantity->5&description-ends-abc';
const arr =[new Product("Gofd", 2, 6, "---abc"), new Product("Boosd", 2, 34, "abc"),
new Product("fdCola", 22, 5, "abcdefg"), new Product("Pepsi", 23, 1, " Babc"),
new Product("Jack Danilesdf", 60, 4, "bad while driving")];
const newArr = filter(arr, str);
for(let i=0;i<newArr.length;i++){
    console.log(newArr[i].name+" it`s a "+newArr[i].description);
}

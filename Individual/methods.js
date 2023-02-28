"use strict"

function DownCase(str) {
    let firstLetter = str[0].toUpperCase();
    let otherLetters = str.slice(1);
    otherLetters = otherLetters.toLowerCase();
    return firstLetter + otherLetters;
}
alert(DownCase("oHhehe Hihi"));
function KillSpaces(str) {
    return str.replace(/\s{2,}/g, ' ');
}
function rightPlacement(str) {
    let out = str;
    out=out.replaceAll(",",", ");
    out=out.replaceAll(".",". ");
    out=KillSpaces(out);
    out=out.replace(/\s+(\W)/g, "$1");
    return out;
}

function counterWords(str) {
    let splitedwords = str.split(" ");
    return splitedwords.filter(word => word !== "").length;
}

function uniqueWords(str) {
    const dict={};
    str=KillSpaces(str);
    str=str.toLowerCase();
    out=str.split(" ");
    out=out.forEach(function (x) { dict[x] = (dict[x] || 0) + 1; });
    return dict;
}

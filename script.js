const PREFIXES = ["cheese","cheesy","cheesey","cheg","cheggy","cheggie","chig","chiggy","chiggie","chug","chuggy","chuggie","smeg","smeggy","billy","bunty","boat","boatie","boaty","granny","crawly","crawlie","dandy","dandie","shandy","shandie","doodle","moody","randy","puddle","rolly","rollie","saw","sour","wood","woody","woodly","woodie"];
const SUFFIXES = ["bug","bugger","dude","boy","dude","son","baker","postman","milkman","pig","pog","pug","piggy","piglet","hog","hoglet","louse","shrimp","bob","builder","button","daddy","papa","peg","grunter","slater","pea","menace","beetle","wig","weg","wug","saw","sour","wood","crawler","wibble"];

function generate() {
    document.getElementById("prefix").innerHTML = PREFIXES[Math.floor(Math.random() * PREFIXES.length)];
    document.getElementById("suffix").innerHTML = SUFFIXES[Math.floor(SUFFIXES.length * Math.random())];
}

window.onload = function() {
    generate();
};
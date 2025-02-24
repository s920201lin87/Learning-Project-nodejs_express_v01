//渲染模板練習
const ejs = require('ejs');
const fs = require('fs')
const taiwan = '台灣';
const american = '美國沒有'
// const readHtml = fs.readFileSync('./testEJS.html').toString();
// var result = ejs.render(readHtml,{tailand:taiwan,american});

// console.log(result)
const president = ['馬英九','蔡英文','陳水扁','李登輝','賴清德'];
let str = '<ul>';

president.forEach(item=>{
    str +=`<li>${item}<li>`
})
str += '</ul>';
console.log(str)

var html = fs.readFileSync('./testEJS.html').toString();
var result = ejs.render(html,{president:president,tailand:taiwan,american:american});
console.log(result)


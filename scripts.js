let html = document.documentElement;
let head = document.head;
let body = document.body;

let header = document.querySelector('h1');
let article = document.querySelector('article');
let p = document.querySelectorAll('p:nth-child(even)');
let input = document.querySelector('input');
let exampleParagraph = document.querySelector('#example');
let strong = document.querySelector('p strong');

// console.log(header.textContent);
// console.log(exampleParagraph.outerHTML);
// console.log(exampleParagraph.innerHTML);
// console.log(exampleParagraph.innerText);
console.log(exampleParagraph.id);

header.innerText = "This is DOM example";


let newParagraph = document.createElement('p');
newParagraph.innerText = "lorem zxhjkdj djfdhjdfdf";
// Добавит
article.append(newParagraph);
// article.prepend(newParagraph);
// article.after(newParagraph);
// article.before(newParagraph);
// article.replaceWith(newParagraph);


// .Удалит
newStrong.remove('p strong');
newParagraph.remove();
// let strong = document.remove('p strong');


// for (const paragrap of  evenParagraphs){
//     console.log( paragrap.innerText);
// }
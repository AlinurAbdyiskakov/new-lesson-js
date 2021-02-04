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


// let newParagraph = document.createElement('p');
// newParagraph.innerText = "lorem zxhjkdj djfdhjdfdf";
// // Добавит
// article.append(newParagraph);
let newDiv = document.createElement('div');
newDiv.innerText = "Hello world";
body.append(newDiv);
let newa = document.createElement('a Hello world');
body.append(newa);
let newUl = document.createElement('ul');
body.innerText = ('ul ');
body.append(newUl);




// article.prepend(newParagraph);
// article.after(newParagraph);
// article.before(newParagraph);
// article.replaceWith(newParagraph);


// .Удалит
strong.remove();
newParagraph.remove();
// let strong = document.remove('p strong');


// for (const paragrap of  evenParagraphs){
//     console.log( paragrap.innerText);
// }
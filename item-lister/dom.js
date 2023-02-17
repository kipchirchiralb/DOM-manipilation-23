//console.dir(document)
//check domain
// console.log(document.domain);
//check web URL
//console.log(document.URL)
//check for document title
// console.log(document.title)
// check for DocumentType
// console.log(document.doctype)



/*EXAMINE  SELECTORS  */
// GETELEMENTBYID
    // console.log(document.getElementById('header-title'));
    //output
    // <h1 id="header-title">Item Lister</h1>
    //to change header title
    // var headerTitle=document.getElementById('header-title')
    // headerTitle.textContent= 'New items';
    //use InnerText
    // headerTitle.innerText='hello'
    /*diffrence between innertext and textContent is that one pays attention to the style
*/
// console.log(headerTitle.textContent);
// output <h1 id="header-title">Item Lister<span style="display:none">123</span></h1>
// Item Lister123
// it does not pay attention to style

// innerText
// console.log(headerTitle.innerText);
// output <h1 id="header-title">Item Lister<span style="display:none">123</span></h1>
// Item Lister
// it pays attention to style


// innerHTML
// headerTitle.innerHTML='hello';

// STYLE CHANGES
// headerTitle.style.color='red'
// when styling use Camel case font 
// headerTitle.style.borderBottom='solid 3px #000';


//GET ELEMENTSCLASSNAME

var items=document.getElementsByClassName('item-group');
// console.log(items);
//Youll get an array of Html collection 
// [li.item-group, li.item-group, li.item-group, li.item-group]
// you can acess individual element
// console.log(items[0]);
//output <li class="item-group"> item 1</li>

//style
// items[0].style.backgroundColor='red'
// items[0].style.fontWeight='bold'

// use For loops to manipulate further
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='red';
}
// QUERYSELECTOR
// USED TO GRAB ONE ITEM THE FIRST ONE BUT IF WANT TO GRAB ALL  USE QUERYSELECTORALL
// i.e if its an id use #
//i.e for a class use  .
// i.e for tag use tagname
var header=document.querySelector('#header-title');
console.log(header);
//output <h1 id="header-title">Item Lister<span style="display:none">123</span></h1>
// style an Element
// header.style.borderBottom='4px solid red'

var input=document.querySelector('.control');
input.value="add item";

var submit=document.querySelector('.submit');
submit.value='SEND'

//MANIPULATE LIST ITEM
var lastItem=document.querySelector('.item-group:last-child');
lastItem.style.color='blue';

//change second item using pseudo selectors
var SeconItem=document.querySelector('.item-group:nth-child(2)');
SeconItem.style.color='#fff';



//QUERYSELECTORALL
var title=document.querySelectorAll('.title')
console.log(title);
/* output: [h2.title, h2.title]
0
: 
h2.title
1
: 
h2.title
length
: 
2 */


//change odd values in list
var odd=document.querySelectorAll('.item-group:nth-child(odd)');
for(let j=0;j<odd.length;j++){
    odd[j].style.backgroundColor='yellow'
}
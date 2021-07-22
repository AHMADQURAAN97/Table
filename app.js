'use strict';
let containerEl = document.getElementById('container');
let containerForm = document.getElementById ('container-form');
let containerTable = document.getElementById ('container-table');

let books = [];

function book (bName, nPage, cCategory) {
this.bName = bName;
this.nPage = nPage;
this.cCategory = cCategory;
this.randomPr =[];
books.push(this);
saveTolocalStorage();
};

book.prototype.random=function(){

   let min = Math.ceil(3);
   let max = Math.floor(8);
    let randomP = Math.floor(Math.random() * (max - min) + min);
    this.randomPr.push(randomP);

};


let tableEl = document.createElement('table');


function createTableHeader() {
  

    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    
    

    let thBookNameEl = document.createElement('th');
    thBookNameEl.textContent = "Book Name";
    trEl.appendChild(thBookNameEl);

    let thNumberPagesEl = document.createElement('th');
    thNumberPagesEl.textContent = "Num berof Pages";
    trEl.appendChild(thNumberPagesEl);



    let thPriceEl = document.createElement('th');
    thPriceEl.textContent = "Price";
    trEl.appendChild(thPriceEl);


    let thCategoryEl = document.createElement('th');
    thCategoryEl.textContent = "Category";
    trEl.appendChild(thCategoryEl);

    
    
    tableEl.appendChild(trEl);
    containerTable.appendChild(tableEl);

};
book.prototype.render=function(){

    let trEl = document.createElement('tr');
    
    let tdEl1 = document.createElement('td');
    tdEl1.textContent = this.bName;
    trEl.appendChild(tdEl1);
    
    let tdEl2 = document.createElement('td');
    tdEl2.textContent = this.nPage;
    trEl.appendChild(tdEl2);
    
    let tdEl3 = document.createElement('td');
    tdEl3.textContent = this.randomPr;
    trEl.appendChild(tdEl3);
    
    let tdEl4 = document.createElement('td');
    tdEl4.textContent = this.cCategory;
    trEl.appendChild(tdEl4);
    
    
    tableEl.appendChild(trEl);
    containerTable.appendChild(tableEl);
    }

// =================================Form==============
createTableHeader();
let myForm = document.getElementById ('myform');
myForm.addEventListener('submit' ,addBook);
function addBook(event) {

event.preventDefault();

let bName = event.target.bName.value;
let nPage = event.target.nPage.value;
let cCategory = event.target.cCategory.value;

let newBook =new book(bName,nPage,cCategory);
newBook.random();
newBook.render();
}


function saveTolocalStorage (){

    let saveLocal =JSON.stringify(books);
    localStorage.setItem('boook',saveLocal)

}

function readFromLocalStorage (){

    let stringObj=localStorage.getItem('boook');
    let normalObj=JSON.parse(stringObj);
    if (normalObj !==null) {
        books=normalObj;
        normalObj.render();
    }
    
}
readFromLocalStorage ();
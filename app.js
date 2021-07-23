'use strict';
let containerEl = document.getElementById('container');
let containerForm = document.getElementById ('container-form');
let containerTable = document.getElementById ('container-table');
let tableEl = document.createElement('table');
let books = [];

function book (bName, nPage, cCategory) {
this.bName = bName;
this.nPage = nPage;
this.cCategory = cCategory;
this.randomPr =this.random();

books.push(this);
saveTolocalStorage();
};

book.prototype.random=function(){

   let min = Math.ceil(3);
   let max = Math.floor(8);
    let randomP = Math.floor(Math.random() * (max - min) + min);
    // this.randomPr.push(randomP);
    return randomP;
};





function createTableHeader() {
  

    let trEl = document.createElement('tr');
    // tableEl.appendChild(trEl);
    
    

    let thBookNameEl = document.createElement('th');
    thBookNameEl.textContent = "Book Name";
    trEl.appendChild(thBookNameEl);

    let thNumberPagesEl = document.createElement('th');
    thNumberPagesEl.textContent = "Number of Pages";
    trEl.appendChild(thNumberPagesEl);



    let thPriceEl = document.createElement('th');
    thPriceEl.textContent = "Price";
    trEl.appendChild(thPriceEl);


    let thCategoryEl = document.createElement('th');
    thCategoryEl.textContent = "Category";
    trEl.appendChild(thCategoryEl);

    let thTotalPagesEl = document.createElement('th');
    thTotalPagesEl.textContent = "Total pages";
    trEl.appendChild(thTotalPagesEl);
   
    let thDeleteEl = document.createElement('th');
    thDeleteEl.textContent = "Remove";
    trEl.appendChild(thDeleteEl);
    
    tableEl.appendChild(trEl);
    containerTable.appendChild(tableEl);

};

let sum = 0;

book.prototype.render = function(){

    let trEl = document.createElement('tr');
    
    let tdEl1 = document.createElement('td');
    tdEl1.textContent = this.bName;
    trEl.appendChild(tdEl1);
    
    let tdEl2 = document.createElement('td');
    tdEl2.textContent = this.nPage;
    trEl.appendChild(tdEl2);

     
     sum += parseFloat(this.nPage)
    
    
    let tdEl3 = document.createElement('td');
    tdEl3.textContent = this.randomPr;
    trEl.appendChild(tdEl3);
    
    let tdEl4 = document.createElement('td');
    tdEl4.textContent = this.cCategory;
    trEl.appendChild(tdEl4);
    
    let tdEl5 = document.createElement('td');
    tdEl5.textContent = sum;
    trEl.appendChild(tdEl5);
    
    let tdEl6 = document.createElement('td');
    tdEl6.textContent ="X";
    tdEl6.classList.add('delete')
    tdEl6.setAttribute('onclick','')
    trEl.appendChild(tdEl6);

    tableEl.appendChild(trEl);
    containerTable.appendChild(tableEl);
    }

// =================================Form====================
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

    let stringObj = localStorage.getItem('boook');
    let normalObj = JSON.parse(stringObj);
    if (normalObj !== null) {
        for ( let i=0 ; i < normalObj.length ; i++){

            new book (normalObj[i].bName, normalObj[i].nPage,normalObj[i].cCategory);
            books[i].render();
        }

        
    }
    
}
readFromLocalStorage ();
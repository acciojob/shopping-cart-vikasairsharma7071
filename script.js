//your code here
let itemContent = document.getElementById("item-name-input");
let priceContent = document.getElementById("item-price-input");

let table = document.getElementById("table");

let btn = document.getElementById("add");

let sumVal = document.getElementById("total");

let sum = 0;
// let sumArr = [];

function addItem(){
    let item = itemContent.value;
    let price = priceContent.value;

    
    if(item != '' && price > 0){
        // sumArr.push(price);
        let row = document.createElement("tr");
        row.innerHTML = `<td>${item}</td><td>${price}</td>`;
        table.append(row);

        // for(let i=0;i<sumArr.length;i++){
        //     sum += (Number)(sumArr[i]);
        // }

        sum = sum + Number(price);
        sumVal.innerText = "";
        sumVal.append(sum);

        itemContent.value = '';
        priceContent.value = '';
        
    }
}



btn.addEventListener("click",addItem);
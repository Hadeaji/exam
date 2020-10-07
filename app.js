'use strict'

var table = document.getElementById('table');
var total = document.getElementById('total');

var table_header = ['Device Name','Quantity','Unite Price','Catagory']; 
var totalPrices = 0;
var allDevices = [];



// const 
 function Device (device_name,quantity,catagory){
    this.device_name = device_name;
    this.quantity = quantity;
    this.catagory = catagory;
    this.unite_Price = 0;
 }

 Device.prototype.unitePriceCalculations = function(){
    this.unite_Price = Math.floor(Math.random() * (750 - 350 + 1)) + 350;
 }
//

// render table head
 tableHeader();
 function tableHeader(){
 var row = document.createElement('tr');

    for(var i =0 ; i < table_header.length ; i++){
        var th_cell = document.createElement('th');
        th_cell.textContent = table_header[i];
        row.appendChild(th_cell);
    }
    table.appendChild(row);
 }
//

if (localStorage.getItem('local')){

    allDevices = JSON.parse(localStorage.getItem('local'));

    for(var z =0 ; z<allDevices.length; z++){

        var row = document.createElement('tr');

        var td_cell1 = document.createElement('td');
        td_cell1.textContent = allDevices[z].device_name;
        row.appendChild(td_cell1);
    
        var td_cell2 = document.createElement('td');
        td_cell2.textContent = allDevices[z].quantity;
        row.appendChild(td_cell2);
        
        var td_cell3 = document.createElement('td');
        td_cell3.textContent = allDevices[z].unite_Price;
        row.appendChild(td_cell3);
    
        var td_cell4 = document.createElement('td');
        td_cell4.textContent = allDevices[z].catagory;
        row.appendChild(td_cell4);
    
        totalPrices = totalPrices + (allDevices[z].quantity * allDevices[z].unite_Price);
        total.textContent = 'Total: ' + totalPrices;


        table.appendChild(row);
    };





}








// form info
 var form = document.getElementById('D_form');

 form.addEventListener('submit', addingNewDevice);

 var newDevice;
 function addingNewDevice(event){
    event.preventDefault();

    var new_device_name = event.target[0].value;
    var new_catagory = event.target[1].value;
    var new_quantity = event.target[2].value;

    newDevice = new Device (new_device_name,new_quantity,new_catagory)
    newDevice.unitePriceCalculations();

    allDevices.push(newDevice);
    renderDevice();
    addToTotal();

    localStorage.setItem('local', JSON.stringify(allDevices))
 }
//


// render New Device
 function renderDevice(){
    var row = document.createElement('tr');

    var td_cell1 = document.createElement('td');
    td_cell1.textContent = newDevice.device_name;
    row.appendChild(td_cell1);

    var td_cell2 = document.createElement('td');
    td_cell2.textContent = newDevice.quantity;
    row.appendChild(td_cell2);
    
    var td_cell3 = document.createElement('td');
    td_cell3.textContent = newDevice.unite_Price;
    row.appendChild(td_cell3);

    var td_cell4 = document.createElement('td');
    td_cell4.textContent = newDevice.catagory;
    row.appendChild(td_cell4);


    table.appendChild(row);
 }
//

function addToTotal(){

totalPrices = totalPrices + (newDevice.quantity * newDevice.unite_Price);
total.textContent = 'Total: ' + totalPrices;
}

var table = document.createElement('table');
table.setAttribute('class', 'table');
var thead = document.createElement('thead');
thead.setAttribute('class', 'thead-dark');
 var tr = document.createElement('tr');
var th1 = createelement('th','First');
var th2 = createelement('th','Last');
var th3 = createelement('th', '#');
var th4 = createelement('th', 'Handle')
tr.append(th3,th1,th2,th4);
thead.append(tr);


var tbody = document.createElement('tbody')
var tr1 = document.createElement('tr');
var td1 = createelement('td', 'john');
var td2 = createelement('td', 'elias');
var td3 = createelement('td', '1');
var td4 = createelement('td', '@mdo' )
tr1.append(td3,td1,td2,td4);



var tbody = document.createElement('tbody')
var tr2 = document.createElement('tr');
var td1 = createelement('td', 'Jacob');
var td2 = createelement('td', 'Thornton');
var td3 = createelement('td', '2');
var td4 = createelement('td','@fat')
tr2.append(td3,td1,td2,td4);


var tbody = document.createElement('tbody')
var tr3 = document.createElement('tr');
var td1 = createelement('td', 'Larry');
var td2 = createelement('td', 'The Bird');
var td3 = createelement('td', '3');
var td4 = createelement('td','@twitter')
tr3.append(td3,td1,td2,td4);


tbody.append(tr1,tr2,tr3)
table.append(thead,tbody);
document.body.append(table);



 function createelement(elename, value){
     var element = document.createElement(elename);
     element.innerHTML = value;
     return element;

 }
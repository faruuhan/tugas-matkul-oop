var sendReq = getXmlHttpRequestObject();
var _documentid='content';
function getXmlHttpRequestObject() {
if (window.XMLHttpRequest) {
return new XMLHttpRequest();
} else if(window.ActiveXObject) {
return new ActiveXObject("Microsoft.XMLHTTP");
} else {
alert('Status: Cound not create XmlHttpRequest Object. Consider upgrading your browser.');
}
}
function doSavedokter(){
if (sendReq.readyState == 4 || sendReq.readyState == 0) {
sendReq.open("POST", 'simpansis.php', true);
sendReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
sendReq.onreadystatechange =function() {

if (sendReq.readyState == 4 && sendReq.status == 200) {
//alert(sendReq.responseText);
alert("Data Disimpan Dengan Rapi");
}
}
var param = 'vid=' + document.getElementById('vid').value;
param += '&vnama=' + document.getElementById('vnama').value;
param += '&vjenis=' + document.getElementById('vjenis').value;
param += '&vspe=' + document.getElementById('vspe').value;
param += '&vtelepon=' + document.getElementById('vtelepon').value;
param += '&valamat=' + document.getElementById('valamat').value;

sendReq.send(param);
document.getElementById(_documentid).innerHTML = 'Loading....';
document.getElementById('vid').value='';
document.getElementById('vnama').value='';
document.getElementById('vjenis').value='';
document.getElementById('vspe').value='';
document.getElementById('vtelepon').value='';
document.getElementById('valamat').value='';
}
}

function doUpdokter(){
if (sendReq.readyState == 4 || sendReq.readyState == 0) {
sendReq.open("POST", 'editsis.php', true);
sendReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
sendReq.onreadystatechange =function() {

if (sendReq.readyState == 4 && sendReq.status == 200) {
//alert(sendReq.responseText);
alert("Pengeditan data berhasil");
}
}
var param = 'vid=' + document.getElementById('vid').value;
param += '&vnama=' + document.getElementById('vnama').value;
param += '&vjenis=' + document.getElementById('vjenis').value;
param += '&vspe=' + document.getElementById('vspe').value;
param += '&vtelepon=' + document.getElementById('vtelepon').value;
param += '&valamat=' + document.getElementById('valamat').value;

sendReq.send(param);
document.getElementById(_documentid).innerHTML = 'Loading....';
document.getElementById('vid').value='';
document.getElementById('vnama').value='';
document.getElementById('vjenis').value='';
document.getElementById('vspe').value='';
document.getElementById('vtelepon').value='';
document.getElementById('valamat').value='';
}
}

function doDeldokter(){
if (sendReq.readyState == 4 || sendReq.readyState == 0) {
sendReq.open("POST", 'delete.php', true);
sendReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
sendReq.onreadystatechange =function() {

if (sendReq.readyState == 4 && sendReq.status == 200) {
//alert(sendReq.responseText);
alert("Penghapusan data berhasil");
}
}
var param = 'vid=' + document.getElementById('vid').value;
sendReq.send(param);
document.getElementById(_documentid).innerHTML = 'Loading....';
document.getElementById('vid').value='';
}
}
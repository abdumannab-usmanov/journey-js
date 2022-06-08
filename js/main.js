var journey = +prompt("Money that you have for journey");



var dollar = 750;
var euro = 120;
var usbDol = 11000;
var usbEv = 11800;

var resultDol = (dollar * usbDol );
var resultEvr = (euro * usbEv );

var totalResult = resultDol + resultEvr;



if (journey >= totalResult){
    console.log(`“Oq yo’l, Alisher!” `);
}else{
    console.log(`“Alisher, ozgina sabr qilish kerak bo’lar ekan.”`);
}

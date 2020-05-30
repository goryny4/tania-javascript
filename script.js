function areaRectangle(){
  var a=document.form1.dlina.value;
  var b=document.form1.shirina.value;
  var c=document.form1.visota.value;
	console.log('Длина ' + a);
	console.log('Ширина ' + b);
	console.log('Высота ' + c);


  var s=2*a*b+2*a*c+2*b*c;
  document.getElementById('ploshadi').value=s;
	console.log('Площадь ' + s);

  var v=a*b*c;
  document.getElementById('obiom').value=v;
	console.log('Объём ' + v);

}
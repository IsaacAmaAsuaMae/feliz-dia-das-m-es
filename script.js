let carta = document.getElementById('carta');
let cartabody = document.getElementById('cartabody');
let cartahead = document.getElementById('cartahead');
let cartaheadinside = document.getElementById('cartaheadinside');
let papel = document.getElementById("papel");
cartabody.width = 500; cartabody.height = 250;
cartahead.width = 500; cartahead.height = 150;
cartaheadinside.width = 500; cartaheadinside.height = 150;
let cartabodyctx = cartabody.getContext("2d");
let cartaheadctx = cartahead.getContext("2d");
let cartaheadinsidectx = cartaheadinside.getContext("2d");

cartabodyctx.fillStyle = "beige";
cartabodyctx.strokeStyle = "black";
cartabodyctx.beginPath();
cartabodyctx.lineTo(250,150);
cartabodyctx.lineTo(500,0);
cartabodyctx.lineTo(500,250);
cartabodyctx.lineTo(0,250);
cartabodyctx.lineTo(0,0);
cartabodyctx.closePath();
cartabodyctx.fill();
cartabodyctx.stroke();
cartabodyctx.beginPath();
cartabodyctx.moveTo(200,120);
cartabodyctx.lineTo(0,250);
cartabodyctx.moveTo(500,250);
cartabodyctx.lineTo(300,120);
cartabodyctx.closePath();
cartabodyctx.stroke();
cartabodyctx.fillStyle = "pink";
cartabodyctx.beginPath();
cartabodyctx.lineTo(500,0);
cartabodyctx.lineTo(250,150);
cartabodyctx.lineTo(0,0);
cartabodyctx.closePath();
cartabodyctx.fill();
cartabodyctx.stroke();

cartaheadctx.fillStyle = "beige";
cartaheadctx.beginPath();
cartaheadctx.lineTo(500,0);
cartaheadctx.lineTo(250,150);
cartaheadctx.lineTo(0,0);
cartaheadctx.closePath();
cartaheadctx.fill();
cartaheadctx.stroke();

cartaheadinsidectx.fillStyle = "pink";
cartaheadinsidectx.beginPath();
cartaheadinsidectx.moveTo(0,150);
cartaheadinsidectx.lineTo(250,0);
cartaheadinsidectx.lineTo(500,150);
cartaheadinsidectx.lineTo(0,150);
cartaheadinsidectx.closePath();
cartaheadinsidectx.fill();
cartaheadinsidectx.stroke();

function abrir(){
  carta.style.pointerEvents = "none";
  cartahead.style.transform = "translateY(-50%) scaleY(0)";
  setTimeout(()=>{cartaheadinside.style.transform += "translateY(-100%)"},1500);
  setTimeout(()=>{papel.style.transform = "translateY(-50%)"}, 2250);
}

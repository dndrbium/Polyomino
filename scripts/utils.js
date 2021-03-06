function rFloat(x){return Math.random()*x;}
function rInt(x){return Math.floor(Math.random()*x);}

function randomChoose(myList) {
  var index = Math.floor(Math.random() * myList.length);
  return myList[index];
}

function rgb(r,g,b) {
	// Arguments can be: r, g, b [0, 1]
	//               or: r {r:r, g:g, b:b}
	if(g != undefined){
		gfx.fillStyle = "rgb(" + Math.floor(255 * r) + "," + Math.floor(255 * g) + "," + Math.floor(255 * b) + ")";
	}else{
		gfx.fillStyle = "rgb(" + Math.floor(255 * r.r) + "," + Math.floor(255 * r.g) + "," + Math.floor(255 * r.b) + ")";
	}
}

function rgba(r,g,b,a){
	gfx.fillStyle = "rgba(" + Math.floor(255 * r) + "," + Math.floor(255 * g) + "," + Math.floor(255 * b) + "," + a + ")";
}

function hsv(h,s,v){
	var r,g,b,i,f,p,q,t;
	if (h&&s===undefined&&v===undefined)s=h.s,v=h.v,h=h.h;
	i = Math.floor(h*6);
	f = h*6-i;
	p = v*(1-s);
	q = v*(1-f*s);
	t = v*(1-(1-f)*s);
	switch(i%6){
		case 0:r=v,g=t,b=p;break;
		case 1:r=q,g=v,b=p;break;
		case 2:r=p,g=v,b=t;break;
		case 3:r=p,g=q,b=v;break;
		case 4:r=t,g=p,b=v;break;
		case 5:r=v,g=p,b=q;break;
	}gfx.fillStyle="rgb("+Math.floor(255*r)+","+Math.floor(255*g)+","+Math.floor(255*b)+")";
}

function renderRect(x0,y0,x1,y1){
	gfx.beginPath();
	gfx.moveTo(x0,y0);
	gfx.lineTo(x0,y1);
	gfx.lineTo(x1,y1);
	gfx.lineTo(x1,y0);
	gfx.fill();
}

function shuffle(a) {
  var i = a.length, t, r;
  while (0 !== i) {
    r = Math.floor(Math.random() * i);
    --i;
    t = a[i];
    a[i] = a[r];
    a[r] = t;
  }
  return a;
}

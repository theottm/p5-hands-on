function setup() {
  // put setup code here
}

function draw() {
    for(var i=0; i<10;i++) {
	console.log('miaww...');
	pausecomp(5000);
	console.log('Woups!');
    }
}

function pausecomp(millis)
{
    var date = new Date();
    var curDate = new Date();
    if (curDate - date < millis) {
	curDate = new Date();
    } else {
	console.log('POUIC!');
    };
}



function clicatrate(millis)
{
    for(var i=0; i<inputs.length;i++) {
	inputs[i].click();
	var date = new Date();
	var curDate = null;
	do { curDate = new Date(); }
	while(curDate-date < millis);
	console.log('pouic');
    }
}

var inputs = document.getElementsByClassName('uiButton _1sm');

var warning = document.getElementsByClassName('autofocus layerCancel');

for(var i=0; i<100;i++) {
    inputs[i].click();
}

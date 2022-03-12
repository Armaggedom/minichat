const connection=false;
function connectionTest() {
	//need do create
	if(connection===true) {
		console.log('connection accept')
		document.getElementById('status').textContent ="Status: [Online]"
		document.getElementById('status').style.color="darkgreen"
	}
	else {
		console.log('connection refused')
		document.getElementById('status').textContent ="Status: [Offline]"
		document.getElementById('status').style.color="darkred"	
	}
}
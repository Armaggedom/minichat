const online=true;
function connectionT() {
	//need do create
	if(online===true) {
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
function redirect() {
	if(online===true) {return window.location.href="../pages/chat.html"}
	else {return alert('Cardial: [offline]')}
}
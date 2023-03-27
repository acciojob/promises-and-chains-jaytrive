//your JS code here. If required.
let age=document.getElementById('age')
let name=document.getElementById('name')
function promiseChaining(event){
	event.preventDefault();
	if(!age.value || !name.value){
		alert("Please enter valid details");
		return;
	}
	
	const promise= new Promise((resolve,reject) => {
		setTimeout(() => {
			if(Number(age.value)>=18){
				resolve(`Welcome, ${name.value}. You can vote.`)
			}else{
				reject(`sorry ${name.value}. You aren't old enough.`);
			}
		},4000)
	})
	promise.then((res) => {
		alert(res);
	}).catch((e) => alert(e))
}


//your JS code here. If required.
let age=document.getElementById('age')
let name=document.getElementById('name')
function promiseChaining(event){
	event.preventDefault()
	console.log('check')
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			if(age.value>=18){
				reject("checking")
			}
		},4000)
	})
}

promiseChaining().then((res) => {
	console.log('bhbjk')
	return res
}).catch( (e) => console.log('error',e))
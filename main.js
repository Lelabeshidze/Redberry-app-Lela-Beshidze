const form = document.getElementById('informationform');
const btn = document.querySelector('#btnsubmit');

form.addEventListener('submit', (e) => {
	e.preventDefault()
	const userData = {
		nameVal: userName.value,
		emailVal: email.value,
		lastnameVal: lastname.value,
		mobileVal: mobile.value,
	}

	sendMessage(userData)
		.then((result) => {
			if (!result || result.status !== 'ok') {
				alert('something went wrong on the server')
			} else {
				Object.keys(userData).forEach((idkey) => {
					const element = document.getElementById(idkey)
					element.innerText = userData[idkey]
				})
				alert ('Information saved')
			}
		})
		.catch((error) => console.log(error))
})
function sendMessage(userData) {
	return new Promise((resolve, reject) => {
		const createUserRequest = fetch(
			'https://bootcamp-2022.devtest.ge/api/application',
			{
				method: 'POST',
                token: '5be71e99-3673-4ddb-8e54-4cdbf803beff',
				body: JSON.stringify(userData),
				headers: {
					'Content-type': 'application/json',
				},
			}
		)
		createUserRequest
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				resolve(data)
			})
			.catch((error) => {
				console.log(error)
				reject(error)
			})
	})
}

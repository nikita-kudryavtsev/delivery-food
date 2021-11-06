const renderItems = (data => {
	console.log(data);
  
})

// const renderItems = (data, index, elem) => {
// 	console.log(data);
// 	console.log(elem);
// };

fetch('https://project-6edd7-default-rtdb.firebaseio.com/db/partners.json')
	.then((response) => response.json())
	.then((data) => {
		renderItems(data);
	})
	.catch((error) => {
		console.log(error);
	})

	.finally(console.log('finally'));


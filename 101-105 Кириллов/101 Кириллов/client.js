alert('test');
let div    = document.querySelector('div');
let button = document.querySelector('button');
button.addEventListener('click', function() {
	// тут будем выполнять AJAX запрос
});
button.addEventListener('click', function() {
	let result = fetch('/ajax.html'); 
});
button.addEventListener('click', function() {
	let promise = fetch('/ajax.html'); 
	
	promise.then(function(response) {
		// ответ сервера лежит в переменной response
	});
});
button.addEventListener('click', function() {
	fetch('/ajax.html').then(function(response) {
		// ответ сервера лежит в переменной response
	});
});
button.addEventListener('click', function() {
	fetch('/ajax.html').then(response => {
		// ответ сервера лежит в переменной response
	});
});
button.addEventListener('click', function() {
	fetch('/ajax.html').then(
		response => {
			// ответ сервера лежит в переменной response
		}
	);
});
button.addEventListener('click', function() {
	fetch('/ajax.html').then(response => {
		console.log(response); // объект класса Response
	});
});
button.addEventListener('click', function() {
	fetch('/ajax.html').then(
		response => {
			console.log(response.text()); // выведет Promise
		}
	);
});
button.addEventListener('click', function() {
	fetch('/ajax.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			console.log(text); // текст страницы
		}
	);
});
button.addEventListener('click', function() {
	fetch('/ajax.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});
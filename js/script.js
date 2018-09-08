const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

// Create a request variable
var request = new XMLHttpRequest();

// Open a new connection
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
	// Accessing JSON data
	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		data.forEach(films => {
			const card = document.createElement('div');
			card.setAttribute('class', 'card');

			const h2 = document.createElement('h2');
			h2.textContent = films.title;

			const p = document.createElement('p');
			films.description = films.description.substring(0, 180);
			p.textContent = `${films.description}...`;

			container.appendChild(card);
			card.appendChild(h2);
			card.appendChild(p);
		});
	} else {
		console.log('error');
	}
} 

// Send request
request.send();
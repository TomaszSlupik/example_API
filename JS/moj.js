// Promisy - pobieranie danych z serwera
const test = new Promise((resolve, reject) => {
	if (true) {
		resolve("Wszystko jest ok");
	} else {
		reject("Bład");
	}
});

test.then((info) => console.log(info)).catch((err) => console.error(err));

// Sprawdzenie wieku - PROMISY

const checkYourAge = (age) => {
	return new Promise((resolve, reject) => {
		if (age >= 18) {
			resolve();
		} else {
			reject("Masz za mało lat");
		}
	});
};

const doubleCheckYourAge = () => {
	return new Promise((resolve) => {
		console.log("Sprawdzamy jeszcze raz Twój wiek");
		setTimeout(() => {
			resolve("Wiek się zgadza");
		}, 3000);
	});
};

checkYourAge(50)
	.then(() => {
		console.log("Masz ukończone 18 lat!");
		return doubleCheckYourAge();
	})
	.then((res) => console.log(res))
	.then(() => {
		console.log("Weryfikacja zakończona");
	})
	.catch((error) => console.log(error));

// Funkcja asynchroniczna

const URL = "https://dog.ceo/api/breeds/image/random";

fetch(URL)
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch((error) => console.error(error));

async function testTwo() {
	try {
		const res = await fetch(URL);
		const data = await res.json();

		console.log(data);
	} catch {
		console.error("Błąd");
	}
}
testTwo();

// Pobieranie z API
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

fetch(URL)
	.then((res) => res.json())
	.then((res) => one.setAttribute("src", res.message));

fetch(URL)
	.then((res) => res.json())
	.then((res) => two.setAttribute("src", res.message));

fetch(URL)
	.then((res) => res.json())
	.then((res) => three.setAttribute("src", res.message));


let reviewContainer = document.getElementsByClassName("review-container");


const getReviews = async() => {
	const response = await fetch("../json/reviews.json");
	const data = await response.json();
	return data;
}

const populateReviews = async() => {
	const data = await getReviews();

	data.users.forEach(user => {
		let title = document.createElement("h3");
		title.innerHTML = user.name;
		console.log(user.name);

		let reviewCard = document.createElement("div");
		reviewCard.classList.add("review-card");

		reviewContainer.appendChild(reviewCard)
	});
}

populateReviews();
let reviewCard = "<div class='review-card'></div>";
let h3 = "<h3'></h3>";
let span = "<span></span>";
let p = "<p></p>";
const reviewContainer = document.querySelector(".review-container");


const getReviews = async() => {
	const response = await fetch("../json/reviews.json");
	const data = await response.json();
	return data;
}

const populateReviews = async() => {
	const data = await getReviews();

	data.users.forEach(user => {
		h3.innerHTML += user.name;
		span.innerHTML += user.date;
		p.innerHTML += user.review;

		reviewCard.innerHTML = h3;

		reviewContainer.innerHTML = reviewCard;
	});
}

populateReviews();
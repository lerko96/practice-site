import React from 'react';

// const quoteWrap = document.querySelector("#quoteWrap");

// const quote = document.querySelector('#quote');
// const author = document.querySelector('#author');
// const boon = document.querySelector('#btn');

// quoteWrap.addEventListener('click', getQuote);


const QuoteGenerator = () => (
	<div id='quoteWrap'>
		<p id='quote'>[quote]</p>
		<p id='author'>[author]</p>
		<button id='btn'>New Quote</button>
	</div>
);


// function getQuote() {
// 	fetch('https://reqres.in/api/users')
// 		.then((res) => res.json())
// 		.then((res) => {
// 			res.data.map((user) => {
// 				console.log(`${user.id}: ${user.first_name} ${user.last_name}`);
// 			});
// 		});
// }


export default QuoteGenerator;

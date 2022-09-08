"use strict";

document.addEventListener("DOMContentLoaded", init);


async function init(){
	const exchange = await getExchangeInfo();
	displayOptions(exchange);
	document.addEventListener("click", displayResult);
	document.addEventListener("submit", getCurrencyInfo);
}

function displayOptions(exchange){
	const selectFrom = document.querySelector("#from");
	const selectTo = document.querySelector("#to");
	let html = "";
	exchange.forEach(currency => {
		html += `<option value="${currency}">${currency}</option>`;
	});
	selectFrom.insertAdjacentHTML("beforeend", html);
	selectTo.insertAdjacentHTML("beforeend", html);
}

async function displayResult(e){
	if (!e.target.closest("button")) return;
	const rate = await getCurrencyInfo(e);
	const result = document.querySelector("#result");
	const from = document.querySelector("#from").value;
	const to = document.querySelector("#to").value;
	const amount = document.querySelector("#q").value;
	const exchangeResult = parseFloat(amount) * parseFloat(rate);
	result.innerHTML = "";
	let html =
	`<h2> Converted:</h2>
	<p> ${from} &#8594; ${to} </p>
	<p> ${amount} &#8594; ${exchangeResult} </p>`;
	result.insertAdjacentHTML("beforeend", html);
}
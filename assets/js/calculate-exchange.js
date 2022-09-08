"use strict";

const URL = "https://currency-exchange.p.rapidapi.com/exchange";

async function getCurrencyInfo(e){
	e.preventDefault();
	const fetchInfo = await fetch(`${URL}${objectToQueryParams(getUserInfo())}`, {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': '90afc290a4msh942c639bb0fe563p15afe0jsn7d560927cf10',
    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'}
	});
	const res = await fetchInfo.json();
	return res;
}

function objectToQueryParams(obj) { //from=USD ...
	const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
	return "?" + params.join("&");
}

function getUserInfo(){
	return {
		"from": document.querySelector("#from").value,
		"to": document.querySelector("#to").value,
		"q": document.querySelector("#q").value
	}
}

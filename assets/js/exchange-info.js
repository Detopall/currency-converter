"use strict";

const GET_CURRENCY_INFO_URL = 'https://currency-exchange.p.rapidapi.com/listquotes';

async function getExchangeInfo(){
	const options = {
		method: 'GET',
		headers: {
		  'X-RapidAPI-Key': '90afc290a4msh942c639bb0fe563p15afe0jsn7d560927cf10',
		  'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
		}
	};

	const fetchCur = await fetch(GET_CURRENCY_INFO_URL, options);
	const res = await fetchCur.json();
	return res;
}
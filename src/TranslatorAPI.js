const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function handleFriendlyResponse(endpoint) {
  return response => {
    if (response.status >= 400) {
			throw new Error("Bad response from server");
    }
		return response.json();
  };
}

export const getNumberToRomanNumeralTranslation = (query) =>{
	const url = `http://localhost:8080/translateNumber/${query}`
	const options = {
		headers,
		method: 'GET'
	}

	return fetch(url, options).then(handleFriendlyResponse(url))
}

export const getRomanNumeralToNumberTranslation = (query) =>{
	const url = `http://localhost:8080/translateRomanNumeral/${query}`
	const options = {
		headers,
		method: 'GET'
	};

	return fetch(url, options).then(handleFriendlyResponse(url))
}
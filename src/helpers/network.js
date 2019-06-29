
const BASE_URL = 'http://api.nytimes.com';
const API_KEY= process.env.REACT_APP_API_KEY;

export function getArticles() {
	return  fetch(`${BASE_URL}/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=${API_KEY}`)
    .then((res) => res.json())
}

  
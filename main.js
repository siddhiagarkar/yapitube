
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '90a242a689msh50b950b0ca7e08fp1f7affjsn0bdce8b7b725',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
        'Content-Type': 'application/json'
	}
};

const userinput = document.querySelector('input');
const searchBtn = document.querySelector('button');

let params='';

const callParams = () => {
    params = userinput.value;
    console.log(params);
    
    fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${params}`, options)
        .then(response => response.json())
        .then(data => {
            let output = ''
            data.items.map(item => {
                console.log(item);
                output+= `
                <h1>${item.title}</h1>
                <li><a href = "${item.url}">${item.url}</a></li>
                `;
            })
            document.querySelector(".result").innerHTML = output;
        })
        .catch(err => console.error(err));
}

searchBtn.addEventListener('click', callParams);

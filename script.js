const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = document.getElementById("location").value;
    if (!location) return;
   
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=HR8S9XXXAHULZ9YSAWW3ZC6QM`;
    fetch(url, { mode: 'cors' })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            return response.json();
        }).then(json => {
            const temp = json.currentConditions.temp;
            document.getElementById("temp").value = temp;
        }).catch(error => console.error(error.message));       
})

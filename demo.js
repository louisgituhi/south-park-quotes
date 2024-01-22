const axios = require('axios');


// get 3 quotes at a time
axios.get('https://southparkquotes.onrender.com/v1/quotes/3')
    .then((response) => {
        console.log(response.data);
        
    })
    .catch((e) => {
        console.log(e);
        console.log(e.name)
    })
const API_KEY="RK1BvllGAJWMLKXk7uex7w3cWF62"


// get data of upcomming matches

export const getMatches = () =>{
    const url='https://cricapi.com/api/matches?apikey=${API_KEY}';

    return fetch(url)
    .then((response) => response.json())
    .catch((error)=>console.log("ERROR :", error));

};

// load matches details


export const getMatchDetail=(id)=>{


    const url='https://cricapi.com/api/cricketScore?apikey=${API_KEY} & unique_id=${id}';

    return fetch(url)
    .then((response) => response.json())
    .catch((error)=>console.log("ERROR :", error));


}
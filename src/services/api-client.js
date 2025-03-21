import axios from 'axios';

export async function getSongs(termName){
    const URL = `https://itunes.apple.com/search?term=${termName}&limit=25&country=in`;
    const reponse = await axios.get(URL);
    console.log(reponse.data['results']);
    return reponse.data['results'];
}

import axios from 'axios';

export async function getSongs(termName){
    const URL = `https://itunes.apple.com/search?term=${termName}&limit=25&country=in`;
    const reponse = await axios.get(URL);
    return reponse.data['results'];
}

import { Song } from "./Song";

export const Songs =({fn,allSongs})=>{
    return(<>
           {allSongs.map((currentsong,index)=><Song fn={fn} key={index} song = {currentsong}/>)}
    </>   
    );
}
export const Player = ({fn,song})=>{

    const backToSongs = ()=>{
        fn(false,null);
    }

    return (
        <div>
            <button onClick={backToSongs} className="btn btn-success">Back To Songs</button>
            <p>
                <br />
                <img src= {song.artworkUrl100} alt="" />
                <br />
                Track Name : {song.trackName}
                <br />
                Singer Name : {song.artistName}
            </p>

            <audio controls>
               <source src={song?.previewUrl} type="audio/mp4"/>
            </audio>
        </div>
    );
}
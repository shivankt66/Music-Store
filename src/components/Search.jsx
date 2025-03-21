import { useRef } from "react";

export const Search = ({fn})=>{

    const artist = useRef();
    
    return (
    <div className="row">

        <div className="col-8">
        <input ref={artist} type ='text' className="form-control" placeholder="Search Song OR Artist Name"/>
        </div>

        <div className="col-2">
        <button className="btn btn-success" onClick={()=>{
        fn(artist.current.value);
    }}>Search</button>
        </div>

    </div>
    );
    
}
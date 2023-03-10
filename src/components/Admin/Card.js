import React from 'react'

const Card = ({songs}) => {
    return (
        <div>
            <div className = "row" >
                    {songs.map(song =>{ 
                        return(
                            <div className = "col-md-3" key={song.id}>
                            <div className="card" style={{"width": "17.5rem"}} >
                            <img id="img" src={song.image_path} className="card-img-top" alt={song.name} />
                            <div className="card-body">
                                <h5 className="card-title">{song.name}</h5>
                                <a href={song.website}>{song.website}</a>
                                </div>
                            </div>
                            </div>
                        )})}
                </div>
        </div>
    )
}

export default Card
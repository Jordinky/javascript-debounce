import { ResponseAPI } from "../utils/searchPokemon";

export default function Car ({pokemon}:{pokemon: ResponseAPI | null}){
    if(pokemon && Object.keys(pokemon).length === 0) return <></>;
    return(
        <>
        {
            ! pokemon
                ? <span>no results</span>
                : 
                <div className="card">
                    <img src={pokemon.sprites.front_default} className="card-img-top" alt="green iguana" />
                    <div className="card-body">
                        <h4>{pokemon.id} - {pokemon.name}</h4>
                        <p className="card-text"></p>
                    </div>
                </div>
        }
    </>
    )
}
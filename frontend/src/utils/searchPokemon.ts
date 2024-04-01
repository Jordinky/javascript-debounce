export interface ResponseAPI {
    id: number;
    name: string;
    sprites: { front_default: string }
}

export const searchPokemon = async (pokemon: string, signal?: AbortSignal): Promise<ResponseAPI | null> => {
    try {

        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase().trim()}`
        const res = await fetch(url, { signal });

        if(res.status === 404) return null

        const data: ResponseAPI = await res.json();
        return data

    } catch (error) {
        console.log((error as Error).message);
        return null
    }
}
export const getAllPokemon = async (signal?: AbortSignal): Promise<ResponseAPI | null> => {
    try {

        const url = "https://pokeapi.co/api/v2/pokemon"
        const res = await fetch(url, { signal });

        if(res.status === 404) return null

        const data: ResponseAPI = await res.json();
        return data

    } catch (error) {
        console.log((error as Error).message);
        return null
    }
}
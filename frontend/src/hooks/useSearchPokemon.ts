import { useState, useEffect } from 'react';
import { ResponseAPI } from '../utils/searchPokemon'
import { searchPokemon } from '../utils/searchPokemon';

export const DebounceUseSearchPokemon = (search: string) => {
    const [debouncedPokemon, setPokemon] = useState<ResponseAPI | null>({} as ResponseAPI);
    const [debouncedIsLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController();

        if (search) {

            setIsLoading(true);

            searchPokemon(search, controller.signal)
                .then(data => {
                    setPokemon(data);
                    setIsLoading(false);
                    console.log("debounce "+data?.name)
                });

        }else { setPokemon({} as ResponseAPI) }

        return () => controller.abort();
    }, [search])

    return {
        debouncedPokemon,
        debouncedIsLoading
    }
}
export const ThrottleuseSearchPokemon = (search: string) => {
    const [throttledPokemon, setPokemon] = useState<ResponseAPI | null>({} as ResponseAPI);
    const [throttledIsLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController();

        if (search) {

            setIsLoading(true);

            searchPokemon(search, controller.signal)
                .then(data => {
                    setPokemon(data);
                    setIsLoading(false);
                    console.log("throttle "+data?.name)
                });

        }else { setPokemon({} as ResponseAPI) }

        return () => controller.abort();
    }, [search])

    return {
        throttledPokemon,
        throttledIsLoading
    }
}
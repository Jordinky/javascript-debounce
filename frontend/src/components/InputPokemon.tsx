
type props = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>void;
}

export default function InputPokemon({onChange,value}: props) {

    return (
        <>
            <label htmlFor="exampleDataList" className="form-label">Datalist example</label>
            <input className="form-control" 
                list="datalistOptions" 
                id="exampleDataList"
                placeholder="Pokemon to search: (pikachu, magikarp, pidgey...)"
                value = {value}
                onChange={onChange}
                />
        </>
    );
}

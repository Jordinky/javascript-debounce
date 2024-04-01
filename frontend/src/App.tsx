import './App.css'

import InputPokemon from './components/InputPokemon'
import Card from './components/Card'

import { useInput } from './hooks/useInput';
import { DebounceUseSearchPokemon } from './hooks/useSearchPokemon';
import { ThrottleuseSearchPokemon } from './hooks/useSearchPokemon';
import { useDebounce } from './hooks/useDebounce';
import { useThrottle } from './hooks/useThrottle';
import { memoize} from './utils/fibonacci';

function App() {

  const [value, onChange] = useInput();

  const debouncedValue = useDebounce(value, 3000);  
  const thottledValue = useThrottle(value, 3000)
  
  const { debouncedIsLoading, debouncedPokemon } = DebounceUseSearchPokemon(debouncedValue)
  const { throttledIsLoading, throttledPokemon } = ThrottleuseSearchPokemon(thottledValue)
  
  const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
  const memo = memoize (factorial);
  memo(6)
  console.log(memo.cache);

  return (
    <div className='container'>
      <div className = 'row' >
        <div className='col-sm'>
          <InputPokemon {...{value,onChange}}/>
            {
              debouncedIsLoading 
                ? <>
                <span className="sr-only">Loading...</span>
                  <div className="spinner-border text-primary" role="status">
                  </div>
                </>
                : <Card pokemon={debouncedPokemon}/>
            }
        </div>
        <div className='col-sm'>
          <InputPokemon {...{value,onChange}}/>
            {
              throttledIsLoading 
                ? <>
                <span className="sr-only">Loading...</span>
                  <div className="spinner-border text-primary" role="status">
                  </div>
                </>
                : <Card pokemon={throttledPokemon}/>
            }
          </div>

        </div>
    </div>
  )
}

export default App

import { debounce } from "./debounce";
import { memoize } from "./memoize";

var counter = 0;
const update =()=>{
    counter ++
}
const deb = debounce(update);

test("debounce function testing",()=>{
    expect(deb)

})
const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
const memo = memoize (factorial);

test("memoize function testing",()=>{
    expect(memo(6));
})

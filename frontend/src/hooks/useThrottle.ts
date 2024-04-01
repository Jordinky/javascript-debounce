import { useState, useEffect } from 'react';

export const useThrottle = (value:string, delay?:number) => {
    const [throttledValue, setThrottledValue] = useState(value)

    useEffect(() => {
        const timerId = setTimeout(() => {
          setThrottledValue(value)
        }, delay)
        return () => clearTimeout(timerId)
    }, [value, delay])
  
    return throttledValue
}
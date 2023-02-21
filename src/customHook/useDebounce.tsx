import { useState, useEffect, Dispatch } from 'react';


interface Debounce {
    debouceValue:string,
    setDebouceValue:Dispatch<React.SetStateAction<string>>
    
}


function useDebounce(initialValue: string, delay?:number): Debounce {
  const [debouceValue, setDebouceValue] = useState<string>(initialValue)

  useEffect(() => {
   const timer = setTimeout(() => setDebouceValue(initialValue),delay || 500);

   return (() => {
    clearTimeout(timer)
   })
  }, [initialValue,delay])

  return {debouceValue,setDebouceValue}
  
}

export default useDebounce
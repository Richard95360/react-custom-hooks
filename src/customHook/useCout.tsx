import { Dispatch, SetStateAction, useState } from "react";

interface UseCounter {
  count:number
  onIncrementOne:() => void
  onDecrementOne:() => void
  reset:() => void
  setCount: Dispatch<SetStateAction<number>>
}

export const useCount = (initialValue: number):UseCounter => {
    const [count, setCount] = useState<number>(initialValue || 0);
    const onIncrementOne = () => setCount(c => c +1);
    const onDecrementOne = () =>  setCount(c => c -1);
    const reset = () => setCount(initialValue || 0)
    return {
      count,
      setCount,
      onIncrementOne,
      onDecrementOne,
      reset
    }
  }


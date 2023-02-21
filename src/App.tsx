import { useDarkMode,useDebounce } from 'usehooks-ts';
import { useCount } from './customHook/useCout';
import './App.css'
import useInput from './customHook/useInput';
import { ChangeEvent, useEffect, useState } from 'react';


const App = () => {
    const {count , setCount, onIncrementOne, onDecrementOne, reset} = useCount(1)
    const {isDarkMode, toggle, disable, enable} = useDarkMode()
    const multiplyBy2 = () => setCount((x: number) => x * 2)
    const {value,onChange} = useInput("Je suis le hook input")

    const input1 = useInput("Connard")

    const [values, setValues] = useState<string>("");
    const debouceValue =  useDebounce<string>(values, 500)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

      setValues(event.target.value)
  
    }
  
  

    useEffect(() => {
    
    }, [debouceValue])
    



  return (
    <>
    <div style={{margin : "20px"}}>
      <p>I am Custom hook app</p>
      <hr />
      <div>
        <p>Count : {count}</p>
        <button onClick={onIncrementOne}>Incre</button>
        <button onClick={onDecrementOne}>Decre</button>
        <button onClick={reset}>Reset</button>
         <button onClick={multiplyBy2}>Multiply by 2</button>
      </div>
    </div>
    <hr />
    <div>
      <p className={isDarkMode ? 'dark' : 'light'}>Current theme : {isDarkMode ? 'dark' : 'light'}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={enable}>Enable</button>
      <button onClick={disable}>Disable</button>
    </div>
    <hr />
    <div>
      {value}
      <input type="text" value={value} onChange={onChange}/>
      <input type="text" value={input1.value} onChange={onChange}/>
    </div>
    <hr />
    <div>
    <p>Value real-time: {values}</p>
    <span>Debounced value: {debouceValue}</span>
    <input type="text" value={values} onChange={handleChange} />
    </div>
  
    </>
  );
};

export default App;

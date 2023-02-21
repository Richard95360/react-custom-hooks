import React, {  useState } from 'react';

interface TextInput {
    value:string,
   // setValue:Dispatch<React.SetStateAction<string>>
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const useInput = (initialValue: string):TextInput => {
    const [value, setValue] = useState<string>(initialValue);

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
       setValue(e.target.value)
    }
    return   {value, onChange}
};

export default useInput;
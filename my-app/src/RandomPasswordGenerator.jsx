import React, { useCallback, useEffect, useRef, useState } from 'react'

function RandomPasswordGenerator() {
    const [password,setPassword]=useState('');
    const IntervalId = useRef(null);

    const generatePassword=useCallback(()=>{
        let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?~';
        let newPassword='';
        let passwordLength=10;

        for(let i=0;i<passwordLength;i++){
            let randomIndex = Math.floor(Math.random()*characters.length);
            newPassword +=characters[randomIndex];

        }
        setPassword(newPassword);
    },[]);

  useEffect(()=>{
    generatePassword();
    IntervalId.current=setInterval(generatePassword,2000);

    return ()=>{
        clearInterval(IntervalId.current);
    }
  },[generatePassword]);



  return (
    <div>
      <h1>Random Password Generator</h1>
      <p>Generate-{password}</p>
      <button onClick={generatePassword}>generate</button>
    </div>
  )
}

export default RandomPasswordGenerator

import React, { useState } from 'react'


function LoginPage() {

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  function handleClick(inputEmail:String,inputPassword:String) {
    const data = {
      email: inputEmail,
      password: inputPassword,
    };
    console.log("email- "+inputEmail, "password -"+inputPassword)

    fetch("http://localhost:5050/add", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin' : '*'
      },
      body: JSON.stringify(data),
      
    }).then(res => res.json())
      .then(data => {
        console.log("Got it " + JSON.stringify({data}));
      });
  }

  return (
    <div className='h-screen flex items-center justify-center bg-stone-500 '>
      <div className="p-4 w-1/3 outline outline-offset-2 outline-3 outline-white rounded-md bg-stone-600">
          <div className='flex flex-col'>
            
            <div className='pb-4'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input className='h-10 pl-2 pr-2 w-full rounded-sm focus:outline-none'  value={inputEmail} 
                onChange={(e) => setInputEmail(e.target.value)} />
            </div>
            
            <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                <input className='h-10 pl-2 pr-2 w-full rounded-sm focus:outline-none' value={inputPassword} 
                onChange={(e)=>setInputPassword(e.target.value)} />
            </div>
            
          </div>
          <div className='p-2 pt-6'>
          <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" 
            onClick={()=>handleClick(inputEmail,inputPassword)}>Sign in</button>

                  <p className="pt-4 text-sm font-light text-gray-500 text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-blue-600 hover:underline text-blue-300">Sign up</a>
                  </p>
          </div>
      </div>
    </div>


  )
}

export default LoginPage;
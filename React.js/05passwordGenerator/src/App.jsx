import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [Password, setPassword] = useState("");

  const paassword = () =>
    useCallback(() => {
      let pass = "";
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

      if (numAllow) str += "0123456789";
      if (charAllow) str += "!@#$%^&*()_+";

      for (let i = 1; i <= array.length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }

      setPassword(pass);
    }, [length, numAllow, charAllow, setPassword]);

  return (
    <>
    
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="className='flex shadow rounded-lg  overflow-hidden  mb-4'">
          <input type="text" 
          value={paassword}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>
      </div>
    </>
  );
}

export default App;

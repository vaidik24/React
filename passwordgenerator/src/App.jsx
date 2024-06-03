import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (num) {
      str += "1234567890";
    }
    if (char) {
      str += "!@#$%^&*";
    }

    for (let i = 0; i < length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPass(password);
  }, [length, num, char, setPass]);

  const copyPassToClip = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(passwordGenerator, [length, num, char, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-4 mt-6 text-orange-600 bg-gray-600 ">
        <h1 className=" text-lg text-white text-center ">Password Generator</h1>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            className=" outline-none w-full py-1 px-3 rounded-md "
            type="text"
            value={pass}
            placeholder="password"
            ref={passRef}
            readOnly
          />
          <button
            className="outline-none px-4 rounded-md text-white shadow-lg bg-blue-600 py-1"
            onClick={copyPassToClip}
          >
            Copy
          </button>
        </div>
        <div className="flex justify-between text-sm gap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={7}
              max={15}
              value={length}
              className=" cursor-pointer "
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>

            <input
              type="checkbox"
              value={num}
              className=" cursor-pointer ml-2 "
              onChange={() => setNum((pre) => !pre)}
            />
            <label>Numbers</label>
            <input
              type="checkbox"
              value={char}
              className=" cursor-pointer ml-2 "
              onChange={() => setChar((pre) => !pre)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

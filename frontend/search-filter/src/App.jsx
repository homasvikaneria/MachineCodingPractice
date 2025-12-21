import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([]);
  const [input, setInput] = useState(""); // Initially no input
  const [output, setOutput] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    if (input === "") {
      setOutput(data); // Show all users when input is empty
    } else {
      const filteredData = data.filter(val =>
        val.name.toLowerCase().includes(input.toLowerCase())
      );
      setOutput(filteredData);
    }
  }, [input, data]);

  return (
    <div className="p-5 font-sans">
      <div className="mb-4">
        <input 
          onChange={e => setInput(e.target.value)} 
          type="text" 
          placeholder="Search by name..."
          className="w-full p-3 border border-gray-300 rounded-md text-lg outline-none"
        />
      </div>
      <div>
        {output.map(items => (
          <p key={items.id} className="p-3 border-b border-gray-300 text-lg text-gray-800">
            {items.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;

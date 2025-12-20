import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("todo-data");
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      localStorage.setItem("todo-data", JSON.stringify([]));
    }
  }, []);

  const addnewTodo = () => {
    const newtodo = { text: input, complete: false };
    const updatedtodo = [...data, newtodo];
    setData(updatedtodo);
    localStorage.setItem("todo-data", JSON.stringify(updatedtodo));
    setInput("");
  };

  const completeTodo = (index) => {
    const updatedtodo = [...data];
    updatedtodo[index].complete = !updatedtodo[index].complete;
    setData(updatedtodo);
    localStorage.setItem("todo-data", JSON.stringify(updatedtodo));
  };

  const deleteTodo = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    localStorage.setItem("todo-data", JSON.stringify(updatedData));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center w-full">
          <input
            className="border p-2 rounded-l-md w-3/4 focus:ring-2 focus:ring-blue-400"
            value={input}
            type="text"
            placeholder="Add the item"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition-colors w-full sm:w-1/4"
            onClick={addnewTodo}
          >
            Add New Todo
          </button>
        </div>


        <hr className="my-4" />

        <div>
          {data.length > 0 ? (
            <div>
              <ol className="space-y-2">
                {data.map((todo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4 p-2 bg-gray-50 rounded border"
                  >
                    <p className="flex-1 text-gray-700">
                      {index + 1}. {todo.text}
                    </p>
                    <button
                      onClick={() => deleteTodo(index)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => completeTodo(index)}
                      className="px-2"
                    >
                      {todo.complete ? "✅" : "❌"}
                    </button>
                  </div>
                ))}
              </ol>
            </div>
          ) : (
            <p className="text-gray-500 text-center">Add a new todo</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

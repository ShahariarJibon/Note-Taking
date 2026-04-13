import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");

  const [description, setdescription] = useState("");

  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, description);

    const copyTask = [...task];
    copyTask.push({ title, description });
    settask(copyTask);

    console.log(copyTask);

    settitle("");
    setdescription("");
  };

  const deleteNote=(idx)=>{
    const copyTask=[...task]

    copyTask.splice(idx,1);
    settask(copyTask);
  }

  return (
    <div className="h-screen w-full">
      <div className="h-1/2 bg-cyan-800 text-white flex items-center justify-center font-medium flex-col">
        <div className="flex w-3/4 h-3/4 bg-white rounded-xl overflow-hidden">
          <div className="w-1/2 flex items-center justify-center bg-emerald-200">
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              className="flex flex-col w-full max-w-sm p-6"
            >
              <input
                type="text"
                placeholder="Enter Heading"
                className="px-4 outline-none py-2 m-2 border-2 text-emerald-950 border-cyan-800 rounded-xl"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
              <textarea
                type="text"
                placeholder="Enter details"
                className="px-4 outline-none py-2 m-2 h-25 flex items-start border-2 border-cyan-800 rounded-xl text-emerald-950"
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />
              <button className="bg-cyan-800 active:bg-cyan-600 text-white px-4 py-2 m-2 rounded">
                Add Notes
              </button>
            </form>
          </div>

          <div className="w-1/2 bg-cyan-500">
            <img
              src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5vdGVzfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-full object-cover object-[10%_center]"
            />
          </div>
        </div>
      </div>
      <div className="h-1/2 w-full bg-cyan-700 text-white flex  flex-col">
        <div>
          <h1 className="font-bold m-5 text-3xl">Your Notes</h1>
        </div>
        <div className="flex ml-5 overflow-auto flex-wrap">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="h-80 hover:scale-105 relative transition-transform w-50 rounded-xl bg-cyan-500 m-5 p-3 overflow-auto shadow-lg"
              >
                <h2 className="leading-tight underline underline-offset-4 text-3xl font-semibold">
                  {elem.title}
                </h2>
                <p className="text-xl leading-tight">{elem.description}</p>

                <button className="absolute cursor-pointer active:scale-95 bottom-4 left-1/2 -translate-x-1/2 bg-cyan-400 px-4 py-2 
                rounded font-semibold" onClick={()=>{
                  deleteNote(idx);
                }} >
                  Delete 
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

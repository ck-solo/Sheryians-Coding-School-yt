import React from "react";
import Card from "./Components/Card";

const App = () => {
  return (
    <>
      <div className="h-screen w-full bg-black p-20 flex justify-center items-center  ">
        <Card username="Lucy World" age="20" img="https://images.unsplash.com/photo-1762025501045-17a2541ad84f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D" />
        <Card username="John Doe" age="25" img="https://images.unsplash.com/photo-1762793986935-1a887b59a086?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </>
  );
};

export default App;

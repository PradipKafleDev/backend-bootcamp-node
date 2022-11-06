import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Form from "./components/Form";
import "./App.css";
import axios from "axios";
import Counter2 from "./components/Counter2";

function App() {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    const details = data.results[0];
    setDetails(details);
    console.log(details);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      {/* <Form placeholder="Username" />
      <Form placeholder="Email" />
      <Form placeholder="Fullname" />
      <Form placeholder="s" /> */}
      <Counter2 />
      {/* <Counter /> */}
      {/* <Card details={details} /> */}

      {/* <Card
        name="Pradip"
        imgUrl="https://images.unsplash.com/photo-1665582845126-5d7a17a86430?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Card
        name="Aman"
        imgUrl="https://images.unsplash.com/photo-1665584408048-e5ab457bf4a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      /> */}
    </div>
  );
}

export default App;

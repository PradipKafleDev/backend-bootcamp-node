import React, { useState } from "react";

const Counter = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <form action="">
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your firstname is - {name.firstName}</h2>
      <h2>Your firstname is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
};

export default Counter;

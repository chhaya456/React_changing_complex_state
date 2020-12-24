import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handlechange(event) {
    const { value, name } = event.target;

    // console.log(value);
    // console.log(name);
    // const finput = event.target.value;
    // const linput = event.target.value;
    // const einput = event.target.value;
    //const inputName = event.target.name;
    //console.log(inputName);
    setContact((presvalue) => {
      //console.log(presvalue);
      if (name === "fName") {
        return {
          fName: value,
          lName: presvalue.lName,
          email: presvalue.email
        };
      } else if (name === "lName") {
        return {
          fName: presvalue.fName,
          lName: value,
          email: presvalue.email
        };
      } else if (name === "email") {
        return {
          fName: presvalue.fName,
          lName: presvalue.lName,
          email: value
        };
      }
    });
  }

  const [msg, setMsg] = useState("");

  function submitted(event) {
    setMsg("Thank you");
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName} {msg}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={submitted}>
        <input
          onChange={handlechange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handlechange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handlechange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;

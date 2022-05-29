import React, { useState } from "react";
import Table from "./Table";
const Form = () => {
    const [userdata, setuserdata] = useState([]);
    const [form, setform] = useState({});
  const handleChange = (e) => {
    let { checked, type, name, value, files } = e.target;
    if (type === "checkbox") {
      setform({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setform({
        ...form,
        [name]: files,
      });
    } else {
      setform({
        ...form,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newdata = { ...form, id: new Date().getTime().toString() };
    setuserdata([...userdata, newdata]);
    setform({ username: "", age: "", department: "", address: "", salary: "" });
};



  return (
    <div>
      Form
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your name "
            value={form.username}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={form.age}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={form.address}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Department:</label>
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="computer">computer</option>
            <option value="arts">ARTS</option>
            <option value="science">SCIENCE</option>
          </select>
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            placeholder="Enter your salary"
            value={form.salary}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Unmarried:</label>{" "}
          <input
            type="checkbox"
            name="unmarried"
            checked={form.unmarried}
            onChange={handleChange}
          ></input>
          <label>Married:</label>
          <input
            type="checkbox"
            name="married"
            checked={form.married}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Profile picture:</label>
          <input
            type="file"
            accept="image/jpg ,image/jpeg"
            name="profile"
            files={form.profile}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
          <Table data={userdata}/>
      </div>
    </div>
  );
};

export default Form;

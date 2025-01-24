import { useState } from "react";

function Login({ title, login }) {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.log("Network error", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  return (
    <form
      className="border flex flex-col p-2 gap-1 w-max min-w-80"
      onSubmit={submitForm}
    >
      <div className="text-2xl">{title}</div>
      <input
        name="email"
        onChange={handleChange}
        value={inputData.email}
        type="email"
        placeholder="email"
      />
      <input
        name="password"
        onChange={handleChange}
        value={inputData.password}
        type="text"
        placeholder="password"
      />
      <button className="mt-1" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Login;

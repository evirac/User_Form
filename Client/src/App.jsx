import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "./components/Header";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://placeholder.onrender.com"
    : "http://localhost:5500";

function App() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/users/login`, form);
      const token = response.data.token;
      localStorage.setItem("token", token);

      navigate("/login");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <Header />
      <h2 className="ms-2">User Form</h2>
      <Container>
        <Card className="mx-auto" style={{ maxWidth: "700px" }}>
          <Card.Body>
            <strong className="d-block mb-2">Email:</strong>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your E-mail"
              className="form-control"
              value={form.email}
              onChange={handleInputChange}
            />
            <strong className="d-block mb-2">Password:</strong>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              className="form-control"
              value={form.password}
              onChange={handleInputChange}
            />
            <Button
              className="mt-3 p-2 form-control"
              variant="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default App;

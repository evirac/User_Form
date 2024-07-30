import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://placeholder.onrender.com"
    : "http://localhost:5500";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/users/register`, {
        fullName: form.fullName,
        email: form.email,
        password: form.password,
      });

      alert(response.data.message);
      setForm({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error registering user:", error);
      alert(error.response.data.message || "Error registering user");
    }
  };
  return (
    <>
      <Header />
      <h2 className="ms-2">Register</h2>
      <Container>
        <Card className="mx-auto" style={{ maxWidth: "700px" }}>
          <Card.Body>
            <strong className="d-block mb-2">Full Name:</strong>
            <input
              id="full-name"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              className="form-control"
              value={form.fullName}
              onChange={handleInputChange}
            />
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
            <strong className="d-block mb-2">Confirm Password:</strong>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm your Password"
              className="form-control"
              value={form.confirmPassword}
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
};

export default Register;

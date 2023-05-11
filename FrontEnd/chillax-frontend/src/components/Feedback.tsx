import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

const Feedback: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Here you would typically send the feedback to your backend
    console.log({ name, email, feedback });

    // Clear the form
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <Box
      sx={{
        width: "90%",
        margin: "auto",
        padding: "20px",
        marginTop: 4,
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Feedback"
          variant="outlined"
          multiline
          rows={4}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Feedback;

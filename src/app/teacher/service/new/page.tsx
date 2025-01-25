"use client";

import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useRouter } from "next/navigation";
import addNewService from "./action";

export default function AddServicePage() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [imageLink, setImageLink] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = title && details && imageLink;
    if (!isValid) {
      alert("Please fill all the fields");
      return;
    }
    await addNewService(title, details, imageLink);
    router.push("/");
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="calc(100vh - 32px)">
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Service
        </Typography>
        <Card sx={{ width: "100%", maxWidth: 600 }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Service Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Image Link"
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Service Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                margin="normal"
                multiline
                rows={6}
                required
              />
              <Typography
                variant="caption"
                color="text.secondary"
                onClick={() => window.open("https://readme.so/", "_blank")}
                sx={{ cursor: "pointer", textDecoration: "underline" }}>
                We support Markdown Syntax
              </Typography>
              <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                <Button type="submit" variant="contained" color="primary">
                  Add
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
        <Button sx={{ marginTop: "50px" }} onClick={() => router.back()}>
          Back
        </Button>
      </Box>
    </Container>
  );
}

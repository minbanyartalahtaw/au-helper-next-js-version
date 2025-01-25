"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import { Edit2, Save } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface MenuCardProps {
  title: string;
  details: string;
  imageLink: string;
}

export default function MenuCard({ title, details, imageLink }: MenuCardProps) {
  const router = useRouter();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDetails, setEditedDetails] = useState(details);
  const [editedImageLink, setEditedImageLink] = useState(imageLink);

  const handleSave = () => {
    // Here you would typically save the changes to your backend
    setIsEditMode(false);
  };

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <Button
          variant="outlined"
          sx={{ margin: "10px" }}
          onClick={() => router.back()}>
          Back
        </Button>
        <Card
          sx={{
            maxWidth: 600,
            overflow: "hidden",
            position: "relative",
            padding: 0,
          }}>
          <IconButton
            onClick={() => setIsEditMode(!isEditMode)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            }}>
            {isEditMode ? (
              <Save size={18} onClick={handleSave} color="red" />
            ) : (
              <Edit2 size={25} color="red" />
            )}
          </IconButton>
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%" /* 16:9 aspect ratio */,
            }}>
            <Image
              fill
              src={editedImageLink || "/placeholder.svg"}
              alt={editedTitle}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <CardContent sx={{ p: 3 }}>
            {isEditMode ? (
              <TextField
                fullWidth
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                variant="standard"
                sx={{ mb: 2 }}
              />
            ) : (
              <Typography variant="h5" component="div" gutterBottom>
                {editedTitle}
              </Typography>
            )}
            {isEditMode && (
              <TextField
                fullWidth
                label="Image Link"
                value={editedImageLink}
                onChange={(e) => setEditedImageLink(e.target.value)}
                margin="normal"
                variant="standard"
              />
            )}
            <Box sx={{ mt: 2 }}>
              {isEditMode ? (
                <TextField
                  fullWidth
                  multiline
                  rows={10}
                  value={editedDetails}
                  onChange={(e) => setEditedDetails(e.target.value)}
                  variant="standard"
                />
              ) : (
                <ReactMarkdown>{editedDetails}</ReactMarkdown>
              )}
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

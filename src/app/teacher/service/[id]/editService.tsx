"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  IconButton,
  Button,
  Container,
} from "@mui/material";
import { Edit2, Save } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { updateService } from "./action";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface MenuCardProps {
  id: number;
  title: string;
  details: string;
  imageLink: string;
}

export default function MenuCard({
  id,
  title,
  details,
  imageLink,
}: MenuCardProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDetails, setEditedDetails] = useState(details);
  const [editedImageLink, setEditedImageLink] = useState(imageLink);

  const handleSave = async () => {
    const data = {
      id: id,
      title: editedTitle,
      details: editedDetails,
      imageLink: editedImageLink,
    };
    await updateService(data);
    setIsEditMode(false);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <Card
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: "600px", md: "800px" },
            mx: "auto",
            overflow: "hidden",
            position: "relative",
            padding: 0,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            border: "1px solid #eaeaea",
            borderRadius: "16px",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-4px)",
            },
          }}>
          <IconButton
            onClick={() => setIsEditMode(!isEditMode)}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 1,
              padding: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(4px)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 1)",
                transform: "scale(1.1)",
              },
              transition: "all 0.2s ease-in-out",
            }}>
            {isEditMode ? (
              <Save size={20} onClick={handleSave} color="#666" />
            ) : (
              <Edit2 size={20} color="#666" />
            )}
          </IconButton>
          <Box
            sx={{
              position: "relative",
              height: { xs: 200, sm: 300, md: 400 },
              transition: "height 0.3s ease",
            }}>
            <Image
              fill
              src={editedImageLink || "/placeholder.svg"}
              alt={editedTitle}
              priority
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
          <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            {isEditMode ? (
              <TextField
                fullWidth
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                variant="standard"
                sx={{
                  mb: 2,
                  "& .MuiInput-underline:before": {
                    borderBottom: "2px solid #eaeaea",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottom: "2px solid #666",
                  },
                }}
              />
            ) : (
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "#2c3e50",
                }}>
                {editedTitle}
              </Typography>
            )}
            {isEditMode && (
              <TextField
                fullWidth
                size="small"
                placeholder="Image URL"
                value={editedImageLink}
                onChange={(e) => setEditedImageLink(e.target.value)}
                variant="standard"
                sx={{
                  mb: 2,
                  "& .MuiInput-underline:before": {
                    borderBottom: "2px solid #eaeaea",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottom: "2px solid #666",
                  },
                }}
              />
            )}
            <Box sx={{ mt: 2 }}>
              {isEditMode ? (
                <TextField
                  multiline
                  rows={8}
                  value={editedDetails}
                  onChange={(e) => setEditedDetails(e.target.value)}
                  variant="standard"
                  sx={{
                    width: "90vw",
                    "& .MuiInput-underline:before": {
                      borderBottom: "2px solid #eaeaea",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottom: "2px solid #666",
                    },
                  }}
                />
              ) : (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: "1.1rem",
                  }}>
                  <ReactMarkdown>{editedDetails || ""}</ReactMarkdown>
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      </motion.div>

      <Button
        sx={{
          position: "fixed",
          top: "20px",
          left: "20px",
          minWidth: "40px",
          height: "40px",
          padding: "8px",
          backgroundColor: "white",
          color: "#E63946",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#E63946",
            color: "white",
            transform: "scale(1.05)",
          },
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => router.back()}>
        <ArrowBackIosIcon sx={{ fontSize: "1.2rem", marginLeft: "4px" }} />
      </Button>
    </Container>
  );
}

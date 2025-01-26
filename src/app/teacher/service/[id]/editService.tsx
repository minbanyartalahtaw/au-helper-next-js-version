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
} from "@mui/material";
import { Edit2, Save } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { updateService } from "./action";

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
            maxWidth: 500,
            overflow: "hidden",
            position: "relative",
            padding: 0,
            boxShadow: "none",
            border: "1px solid #eaeaea",
            borderRadius: 2,
          }}>
          <IconButton
            onClick={() => setIsEditMode(!isEditMode)}
            sx={{
              position: "absolute",
              top: 4,
              right: 4,
              zIndex: 1,
              padding: "4px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 1)",
              },
            }}>
            {isEditMode ? (
              <Save size={16} onClick={handleSave} color="#666" />
            ) : (
              <Edit2 size={16} color="#666" />
            )}
          </IconButton>
          <Box
            sx={{
              position: "relative",
              height: 200,
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
          <CardContent sx={{ p: 2 }}>
            {isEditMode ? (
              <TextField
                fullWidth
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                variant="standard"
                sx={{
                  mb: 1,
                  "& .MuiInput-underline:before": {
                    borderBottom: "1px solid #eaeaea",
                  },
                }}
              />
            ) : (
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 500,
                  mb: 1,
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
                  mb: 1,
                  "& .MuiInput-underline:before": {
                    borderBottom: "1px solid #eaeaea",
                  },
                }}
              />
            )}
            <Box sx={{ mt: 1 }}>
              {isEditMode ? (
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  value={editedDetails}
                  onChange={(e) => setEditedDetails(e.target.value)}
                  variant="standard"
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottom: "1px solid #eaeaea",
                    },
                  }}
                />
              ) : (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}>
                  <ReactMarkdown>{editedDetails || ""}</ReactMarkdown>
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

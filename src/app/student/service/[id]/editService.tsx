"use client";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface MenuCardProps {
  title: string;
  details: string;
  imageLink: string;
}

export default function MenuCard({ title, details, imageLink }: MenuCardProps) {
  const router = useRouter();

  return (
    <Box mb={5}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <Button
          variant="text"
          startIcon={<ArrowLeft size={16} />}
          sx={{
            mb: 2,
            color: "#666",
            fontSize: "0.9rem",
            minWidth: "auto",
            p: "6px 12px",
            borderRadius: "8px",
            transition: "all 0.2s ease-in-out",
            backgroundColor: "#f5f5f5",
            "&:hover": {
              transform: "translateX(-2px)",
            },
          }}
          onClick={() => router.back()}>
          Back
        </Button>

        <Card
          sx={{
            width: {
              xs: "100%", // Full width on mobile
              sm: "90%", // 90% width on tablet
              md: 800, // 800px on desktop
              lg: 800, // 1000px on larger screens
            },
            maxWidth: "100%",
            mx: "auto", // Center the card
            overflow: "hidden",
            position: "relative",
            padding: 0,
            borderRadius: { xs: "12px", sm: "16px" },
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            transition:
              "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          }}>
          <Box
            sx={{
              position: "relative",
              paddingTop: { xs: "75%", sm: "56.25%" }, // Taller aspect ratio on mobile
              overflow: "hidden",
            }}>
            <Image
              fill
              src={imageLink || "/placeholder.svg"}
              alt="Image"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </Box>
          <CardContent
            sx={{
              p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
              backgroundColor: "white",
            }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 600,
                color: "#1a1a1a",
                mb: 2,
                letterSpacing: "-0.01em",
                fontSize: { xs: "1.25rem", sm: "1.5rem" }, // Responsive font size
              }}>
              {title}
            </Typography>

            <Box
              sx={{
                mt: 2,
                color: "#4a4a4a",
                lineHeight: 1.6,
                fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive font size
                "& p": {
                  margin: 0,
                },
              }}>
              <ReactMarkdown>{details}</ReactMarkdown>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

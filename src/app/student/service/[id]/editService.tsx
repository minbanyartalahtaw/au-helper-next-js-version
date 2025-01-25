"use client";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
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
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%",
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
              }}
            />
          </Box>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h5" component="div" gutterBottom>
              {title}
            </Typography>

            <Box sx={{ mt: 2 }}>
              <ReactMarkdown>{details}</ReactMarkdown>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

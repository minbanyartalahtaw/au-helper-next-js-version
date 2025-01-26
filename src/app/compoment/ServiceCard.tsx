"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface Props {
  title: string;
  details: string;
  imgLink: string;
}

export default function ServiceCard({ title, details, imgLink }: Props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        width: 345, // Added fixed width
        borderRadius: "16px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        overflow: "hidden", // Added to contain zoomed image
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        },
      }}>
      <CardActionArea>
        <CardMedia
          sx={{
            height: 200, // Fixed height
            width: "100%", // Fixed width
            objectFit: "cover",
            filter: "brightness(0.95)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)", // Add zoom effect on hover
            },
          }}
          component="img"
          image={imgLink}
          alt={title}
        />
        <CardContent sx={{ padding: "20px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "8px",
            }}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: "0.875rem",
              lineHeight: 1.6,
              opacity: 0.8,
            }}>
            {details.length > 88 ? `${details.substring(0, 100)}...` : details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: "200px" }}
          height="140"
          component="img"
          image={imgLink}
          alt="visagreen iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {details.substring(0, 88) + "......"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

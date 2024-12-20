/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/app/libs/prisma";
import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import style from "./page.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default async function Home({ params }: any) {
  const { id } = await params;
  if (!id) return null;
  const service = await prisma.service.findUnique({
    where: { id: Number(id) },
  });
  return (
    <div>
      <div style={{ height: "100px" }}> </div>
      <Box alignItems={"center"} className={style.container}>
        <CardMedia
          sx={{ height: "200px" }}
          height="300px"
          component="img"
          image={service?.imageLink}
          alt="Image_Not_Found"
          className={style.image}
        />
        <Typography variant="h3" className={style.title}>
          {service?.title}
        </Typography>
        <ReactMarkdown className={style.details}>
          {service?.details}
        </ReactMarkdown>
        <Link href={"/student/service"}>
          <CloseIcon className={style.close} fontSize="large" />
        </Link>
      </Box>
    </div>
  );
}

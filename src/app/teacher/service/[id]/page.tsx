/* eslint-disable @typescript-eslint/no-explicit-any */
import getServices from "./action";
import { Box } from "@mui/material";
import React from "react";
import MenuCard from "./editService";

export default async function Home({ params }: any) {
  const { id } = await params;
  const service = await getServices(id);
  if (!service) return null;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        gap: 2,
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}>
      <Box sx={{ width: "100%", height: "10px" }}></Box>

      <Box>
        <MenuCard
          title={service.title}
          details={service.details}
          imageLink={service.imageLink}
        />
      </Box>
    </Box>
  );
}

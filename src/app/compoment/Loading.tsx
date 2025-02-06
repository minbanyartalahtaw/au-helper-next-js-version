"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const pulse = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
      <Box
        sx={{
          animation: `${pulse} 2s ease-in-out infinite`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}>
        <CircularProgress
          size={60}
          thickness={4}
          sx={{
            color: "#FF5030",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            color: "black",
            fontWeight: "light",
            letterSpacing: 2,
          }}>
          Loading...
        </Typography>
      </Box>
    </Box>
  );
};

export default Loading;

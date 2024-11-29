import { Box, CardMedia, Typography } from "@mui/material";
import { prisma } from "../libs/prisma";

interface Prop {
  id: number;
}
export default async function Service({ id }: Prop) {
  if (id) {
    const service = await prisma.service.findUnique({
      where: {
        id: id,
      },
    });
    console.log(service);
  }

  return (
    <div>
      <Box>
        <CardMedia
          sx={{ height: "200px" }}
          height="140"
          component="img"
          image={"#"}
          alt="visagreen iguana"
        />
        <Typography variant="h3">Service Name</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ab
          natus ipsum laudantium facilis adipisci aliquam ullam sint
          reprehenderit autem nulla accusamus recusandae earum aperiam eos
          molestiae, blanditiis harum et.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolore ab natus ipsum laudantium facilis adipisci
          aliquam ullam sint reprehenderit autem nulla accusamus recusandae
          earum aperiam eos molestiae, blanditiis harum et.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolore ab natus ipsum laudantium
          facilis adipisci aliquam ullam sint reprehenderit autem nulla
          accusamus recusandae earum aperiam eos molestiae, blanditiis harum et.
        </Typography>
      </Box>
    </div>
  );
}

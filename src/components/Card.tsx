import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Modal } from "@mui/material";
import { AnimeData } from "@/types/anime.types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Anime = ({ anime }: { anime: AnimeData }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card className="mx-3 h-96" sx={{ maxWidth: 345 }} onClick={handleOpen}>
        <CardActionArea className="h-96">
          <CardMedia
            component="img"
            height="100%"
            image={anime.images.jpg.large_image_url}
            alt={anime.title}
            className="object-cover"
          />
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='bg-slate-800 rounded-xl' sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {anime.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Puntuacion: {anime.score}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Recomendacion: {anime.recomendation}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

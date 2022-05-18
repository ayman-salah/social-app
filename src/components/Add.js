import {
  Avatar,
  Fab,
  Modal,
  Tooltip,
  Typography,
  Box,
  TextField,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  InsertPhoto,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "@emotion/styled";

const Stylemodal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Userbox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 5,
});

function Add() {
  const [open, setopen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add" onClick={(e) => setopen(true)}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Stylemodal
        open={open}
        onClose={(e) => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.default"} color={"text.primary"} borderRadius={5} width={400} height={300} p={3}>
          <Typography variant="h6" textAlign="center" color="grey">
            Create post
          </Typography>
          <Userbox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg"
            />
            <Typography variant="span" fontWeight={500}>
              ahmed salah
            </Typography>
          </Userbox>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="what's in your mind"
            multiline
            rows={3}
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions sx={{ cursor: "pointer" }} color="primary" />
            <InsertPhoto sx={{ cursor: "pointer" }} color="secondary" />
            <VideoCameraBack sx={{ cursor: "pointer" }} color="success" />
            <PersonAdd sx={{ cursor: "pointer" }} color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>post</Button>
            <Button sx={{width:"100px"}}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Stylemodal>
    </>
  );
}

export default Add;

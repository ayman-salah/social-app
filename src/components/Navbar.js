import Pets from "@mui/icons-material/Pets";
import { AppBar,Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import {Mail, Notifications} from '@mui/icons-material';
import { Box } from "@mui/system";
import React, { useState } from "react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "40%",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
}));

const Iconsbox = styled(Box)(({ theme }) => ({
 display:'none',
 alignItems:'center',
 gap:'20px',
 [theme.breakpoints.up('sm')]: {
    display:'flex'
  },
}));
const Userbox = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    [theme.breakpoints.up('sm')]:{
        display:'none'
    },
    textTransform:'capitalize'

}))

function Navbar() {
    const [open,setopen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          ahmed
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search >
          <InputBase placeholder="search..." fullWidth  />
        </Search>
        <Iconsbox>
          <Badge badgeContent={4} color="error" >
            <Mail />
          </Badge>
          <Badge badgeContent={30} color="error" >
            <Notifications />
          </Badge>
          <Avatar sx={{width:30,height:30}}  onClick={e=>setopen(true)} src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg" />
        </Iconsbox>
        <Userbox>
          <Avatar sx={{width:30,height:30}} onClick={e=>setopen(true)} src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg" />
          <Typography>ahmed</Typography>
        </Userbox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={e=>setopen(false)}
        key={open}
        open={open }
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={e=>setopen(false)}>Profile</MenuItem>
        <MenuItem onClick={e=>setopen(false)}>My account</MenuItem>
        <MenuItem onClick={e=>setopen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;

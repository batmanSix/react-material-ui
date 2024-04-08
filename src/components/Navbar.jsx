import {
  Box,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import Pets from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";
import Notification from "@mui/icons-material/Notifications";
import { useState } from "react";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          kangbo dev
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }}></Pets>
        <Search>
          <InputBase placeholder="搜索"></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notification></Notification>
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: "30", height: "30" }}
          ></Avatar>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: "30", height: "30" }}></Avatar>
          <Typography variant="span">kangbo</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-menu"
        aria-labelledby="demo-menu-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>个人中心</MenuItem>
        <MenuItem>我的账号</MenuItem>
        <MenuItem>退出登陆</MenuItem>
      </Menu>
    </AppBar>
  );
}

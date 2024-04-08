import { useState } from "react";
import Navbar from "@/components/Navbar"
import Feed from "@/components/Feed"
import Rightbar from "@/components/Rightbar"
import Sidebar from "@/components/Sidebar"
import { Box, Container, Stack } from "@mui/material";
function App() { 
  const [count, setCount] = useState(0);

  return (
    <>
      <Box >
        <Navbar></Navbar>
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
      
      </Box>
      
    </>
  );
}

export default App;

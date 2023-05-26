import React, { useState } from "react";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
const Navbar = () => {
  const [value, setValue] = useState(1);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <>
            <Tabs
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <NewspaperIcon sx={{margin:"auto"}}/>
              <Tab label="NewsBasket" sx={{marginLeft:"3px"}} />
              <Tab label="About Us" sx={{marginLeft:"3px"}} />
              <Tab label="Contact"  sx={{marginLeft:"3px"}}/>
            </Tabs>
            <Button sx={{ marginLeft: "auto" }} variant="contained">
              Login
            </Button>
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;

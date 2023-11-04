import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import './Header.css'

export const Header = () => {


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      console.log(newValue)
      setValue(newValue);
      console.log(event.target)
    };

    return (
        <Box className="header">
            <Tabs centered value={value} onChange={handleChange}
              sx={{
                "& button": { color: "#FFFFFF54"  },
              }}
            >
                <Tab label="HOME" ></Tab>
                <Tab label="MY PHOTOS"></Tab>
            </Tabs>
        </Box> 
    )
}


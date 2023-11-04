import React from "react";
import { Box, Tabs, Tab} from "@mui/material";
import { NavLink, Navigate } from "react-router-dom";
import './Header.css'

export const Header = (props) => {

    const handleChange = (event, newValue) => {
      console.log(newValue)
      props.setValue(newValue);
      console.log(event.target)
    };

    return (
        <Box className="header">
            <Tabs centered value={props.value} onChange={handleChange}
              sx={{
                "& button": { color: "#FFFFFF54", width: "50%", paddingTop:"23px" },
              }}
            >
                <Tab label="HOME"></Tab>
                <Tab label="MY PHOTOS"></Tab>
            </Tabs>
        </Box> 
    )
}


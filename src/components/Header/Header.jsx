import React, { useEffect } from "react";
import { Box, Tabs, Tab} from "@mui/material";
import { Link } from "react-router-dom";
import './Header.css'

export const Header = () => {

  const [selectTab, setSelectTab] = React.useState();

  console.log(window.location.href);

   useEffect(() => {

    if(window.location.href.includes("/my-photos")){
      setSelectTab(1)
    }else{
      setSelectTab(0)
    }

   }, [])

    const handleChange = (event, newValue) => {
      console.log(newValue)
      setSelectTab(newValue);
      console.log(event.target)
    };
    

    return (
        <Box className="header">
            <Tabs centered value={selectTab} onChange={handleChange}
              sx={{
                ".headerTab ": { color: "#FFFFFF54", width: "50%", paddingTop:"23px", fontSize: "1em", fontFamily: 'Oxanium'},
              }}
            >
                <Tab className="headerTab" label="HOME" to='/' component={Link}></Tab>
                <Tab className="headerTab" label="MY PHOTOS" to='/my-photos' component={Link}></Tab>
            </Tabs>
        </Box> 
    )
}


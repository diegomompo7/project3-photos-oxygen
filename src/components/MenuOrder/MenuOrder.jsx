import { FormControl, InputLabel, Box, Select, MenuItem} from "@mui/material";
import './MenuOrder.css'


const MenuOrder = (props) => {

    return (
        <Box className = "order-container">
            <FormControl fullWidth>
                <InputLabel sx={{
                    color: "#ffffff",
                    "&.Mui-focused": {
                        color: "#ffffff",
                        fontWeight: "bold"
                    },
                    
                }}>Order</InputLabel>

                <Select label="Order"  onChange={(e) =>  props.handleOnChange(e.target.value)} sx={{
                    color:"#FFFFFF",
                    background: "#0F47AF",
                }}
                MenuProps={{
                    sx:{
                        '& .MuiMenu-paper': {
                            color:"#FFFFFF",
                            background: "#0F47AF",
                        }
                    }
                }}>

                <MenuItem value="width" >Width</MenuItem>
                <MenuItem value="height">Height</MenuItem>
                <MenuItem value="likes">Likes</MenuItem>
                <MenuItem value="date">Date</MenuItem>

                </Select>
            </FormControl>
        </Box>
    )
}

export default MenuOrder
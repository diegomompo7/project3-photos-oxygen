import React, { useState }  from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import { Upgrade } from '@mui/icons-material';
import { Textarea } from '@mui/joy';
import './ModalUpdate.css'
import { useDispatch } from 'react-redux';
import { updateFav } from '../../features/favorite/favoriteSlice';

const ModalUpdate = (props) =>{

   const dispatch = useDispatch()
   const [value, setValue] = useState(props.description)


   const handleOnUpgrade = () => {
    dispatch(updateFav({id: props.id, newDesc: value}))

   }

  return (
    <div>
      <Modal open={props.open}>
        <Box className="modal">
        <Textarea
          minRows={5}
          placeholder="Enter a description..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
          sx={{
            width: "50%",
            background: "#FFFFFF",
            color: "#0F47AF",
            fontFamily: "Farro",
            fontSize: "1rem",
            margin: "0 auto"
        }}
        ></Textarea>
        <IconButton type="submit" className="btnUpgrade" sx={{
                background: '#FFFFFF',
                margin: "1.875em 0",
                "&:hover" : {
                background: '#FFFFFF'
                }
            }}>
                <Upgrade  sx={{
                  color: '#0F47AF',
                  fontSize: '2rem',
                   background: '#FFFFFF',
                   borderRadius: '56px'
                }} className="btnUpgrade-icon" onClick={() => handleOnUpgrade()}>
                </Upgrade>
            </IconButton>
        </Box>
      </Modal>
    </div>
  );

}
export default ModalUpdate
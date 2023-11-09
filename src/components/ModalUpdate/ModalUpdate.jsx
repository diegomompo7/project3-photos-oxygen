import React, { useState }  from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton} from '@mui/material';
import { Upgrade } from '@mui/icons-material';
import './ModalUpdate.css'
import { Textarea } from '@mui/joy';
import { useDispatch } from 'react-redux';
import { updateFav } from '../../features/favorite/favoriteSlice';
import { toast } from 'react-toastify';

const ModalUpdate = ({open, setOpen, currDescription}) =>{

   const{
    title
  } = currDescription

   const [newValues, setNewValues] = useState({
    title: title
   })

   const dispatch = useDispatch()

   const handleOnChange = (e) => {
    const {name, value} = e.target;
    setNewValues((prevFav) => ({
      ...prevFav,
      [name]: value
    }))
   }

   const handleOnSave = () => {
      dispatch(updateFav({id: currDescription.id, newValues: newValues}))
      toast.success("Photo edited successful")
      setOpen(false)
   }

   console.log(newValues)


  return (
    <div>
      <Dialog open={open} className="dialog" sx={{

      }}>
        <DialogTitle className='dialog-title' sx={{fontFamily: 'Oxanium', fontWeight: 'bold', color:"#0F47AF"}}>Edit description of the photo</DialogTitle>
        <DialogContent>
          <Textarea
            minRows={5}
            placeholder="Enter a title..."
            value={newValues.title}
            onChange={(event) => handleOnChange(event)}
            autoFocus
            margin="dense"
            type="text"
            name="title"

            sx={{
              marginTop:"1em",
              background:"#0F47AF",
              color: "#FFFFFF",
              fontFamily: "Farro",
              fontSize: "1rem",
            }}
          />
        </DialogContent>
        <DialogActions>
        <IconButton type="submit" className="btnUpgrade" sx={{
                background: '#0F47AF',
                "&:hover" : {
                background: '#0F47AF'
                }
            }}>
                <Upgrade  sx={{
                  color: '#FFFFFF',
                  fontSize: '2rem',
                   background: '#0F47AF',
                   borderRadius: '56px'
                }} className="btnUpgrade-icon" onClick={() => handleOnSave()}>
                </Upgrade>
            </IconButton>
            </DialogActions>
        </Dialog>
    </div>
  );

}
export default ModalUpdate
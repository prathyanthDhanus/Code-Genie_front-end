import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const ShowAllBatch = () => {
    // const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
    const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [batch,setBatch] = useState([]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  //------------------------------fetching batch details from the server---------------------------

  useEffect(()=>{
   const fetchData = async ()=>{
      try{
            const response = await axios.get('http://localhost:3000/admin/batch')
            const data = response.data.data
            console.log((data));
            setBatch(data)
      }catch(error){
        console.log("Error:",error)
      }
   }  
   fetchData()
  },[])



  return (
    <div>

<h2> All Batch Details </h2>
{batch.map((item)=>(

<ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">

    <Button onClick={()=>console.info("batch1")}>{item}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      ))}
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  <MenuItem>
                 Show details of students
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>


    </div>
  )
}

export default ShowAllBatch
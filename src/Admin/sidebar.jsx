
import { Link } from "react-router-dom";
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useNavigate } from "react-router-dom";



import { Outlet } from 'react-router-dom'

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
const navigate = useNavigate()

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className='d-flex'style={{position:"relative",top:'2rem',marginLeft:"2rem" }}>
    <div style={{width:"20%"}}>
   
   <h2>ADMIN PAGE</h2>
     <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         Admin Controls
        </ListSubheader>
      }
    >
     <Link to="/signup">
      <ListItemButton>
        <ListItemIcon>
          <PersonAddAltIcon />
        </ListItemIcon>
        <ListItemText primary="Register a student" />
      </ListItemButton>
      </Link>

      <Link to="/studentDetails">
      <ListItemButton>
        <ListItemIcon>
          <PersonAddAltIcon />
        </ListItemIcon>
        <ListItemText primary="View full student details" />
      </ListItemButton>
      </Link>

      <Link to="/singlestudentdetails">
      <ListItemButton >
        <ListItemIcon>
          <PersonOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="View details of a student" />
      </ListItemButton>
</Link>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>



    </div>
   
    <Outlet />
    </div>
  )
}

export default Sidebar
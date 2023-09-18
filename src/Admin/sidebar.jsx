
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
import SchoolIcon from '@mui/icons-material/School';


import { Outlet } from 'react-router-dom'

const Sidebar = () => {
  const [openStates, setOpenStates] = React.useState({
    studentSection: false,
    batchSection: false,
    topicSection: false,
  });

  const handleClick = (section) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));

  };

  return (
    <div className='d-flex' style={{ position: "relative", top: '2rem', marginLeft: "2rem" }}>
      <div style={{ 
         position: "fixed", // Fixed position to keep it on the left side
        top: '1rem',
        left: 0, // Position it on the left side
        width: "20%", // Set the desired width
        height: "100%", // Set the desired height
        overflowY: "auto", // Enable vertical scrolling when the content overflows
        marginLeft: "2rem",
        marginTop:"5rem"
        
         }}>

        <h2>ADMIN PAGE</h2>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: "ButtonFace" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Admin Controls
            </ListSubheader>
          }
        >
          {/*----------------------------------student section-------------------------------------*/}

          <ListItemButton onClick={() => handleClick('studentSection')}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="STUDENT SECTION" />
            {openStates.studentSection ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openStates.studentSection} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 2 }}>

                <Link to="/signup">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonAddAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Register a student" />
                  </ListItemButton>
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <Link to="/studentDetails">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonAddAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="View full student details" />
                  </ListItemButton>
                </Link>
              </ListItemButton>

            </List>
          </Collapse>
        </List>

        {/*---------------------------------------batch section----------------------------------------*/}

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: "ButtonFace", marginTop: "1rem" }}
          component="nav"
          aria-labelledby="nested-list-subheader"

        >

          <ListItemButton onClick={() => handleClick('batchSection')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="BATCH SECTION" />
            {openStates.batchSection ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openStates.batchSection} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 2 }}>

                <Link to="/showallbatches">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonAddAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Show All Batches" />
                  </ListItemButton>
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <Link to="/showallbatches">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonAddAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="View full student details" />
                  </ListItemButton>
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <Link to="/singlestudentdetails">
                  <ListItemButton >
                    <ListItemIcon>
                      <PersonOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="View details of a student" />
                  </ListItemButton>
                </Link>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        {/*----------------------------------topic section----------------------------------*/}

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: "ButtonFace", marginTop: "1rem" }}
          component="nav"
          aria-labelledby="nested-list-subheader"

        >

          <ListItemButton onClick={() => handleClick('topicSection')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="TOPIC SECTION" />
            {openStates.topicSection ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openStates.topicSection} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 2 }}>

                <Link to="/signup">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonAddAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Register a student" />
                  </ListItemButton>
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <Link to="/studentDetails">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonAddAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="View full student details" />
                  </ListItemButton>
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <Link to="/singlestudentdetails">
                  <ListItemButton >
                    <ListItemIcon>
                      <PersonOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="View details of a student" />
                  </ListItemButton>
                </Link>
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        {/*--------------------------------- quiz secion ----------------------------------*/}

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: "ButtonFace", marginTop: "1rem" }}
          component="nav"
          aria-labelledby="nested-list-subheader"

        >

          <ListItemButton onClick={() => handleClick('topicSection')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="QUIZ SECTION" />
            {openStates.topicSection ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openStates.topicSection} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 2 }}>

                <Link to="/signup">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonAddAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Register a student" />
                  </ListItemButton>
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <Link to="/studentDetails">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonAddAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="View full student details" />
                  </ListItemButton>
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <Link to="/singlestudentdetails">
                  <ListItemButton >
                    <ListItemIcon>
                      <PersonOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="View details of a student" />
                  </ListItemButton>
                </Link>
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        {/*--------------------------------------attendence section----------------------------------*/}

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: "ButtonFace", marginTop: "1rem" }}
          component="nav"
          aria-labelledby="nested-list-subheader"

        >

          <ListItemButton onClick={() => handleClick('topicSection')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="ATTENDANCE SECTION" />
            {openStates.topicSection ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openStates.topicSection} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 2 }}>

                <Link to="/signup">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonAddAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Register a student" />
                  </ListItemButton>
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <Link to="/studentDetails">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonAddAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="View full student details" />
                  </ListItemButton>
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <Link to="/singlestudentdetails">
                  <ListItemButton >
                    <ListItemIcon>
                      <PersonOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="View details of a student" />
                  </ListItemButton>
                </Link>
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
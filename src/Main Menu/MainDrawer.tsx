import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TuneIcon from "@mui/icons-material/Tune";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Vertical Farming
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <AccountMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Dashboard", "Controls"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <EqualizerIcon /> : <TuneIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Manage Profiles"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ManageAccountsIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>{/* Your content goes here */}</Typography>
      </Box>
    </Box>
  );
}

function AccountMenu({ anchorEl, open, onClose }: any) {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={(event) => (anchorEl ? onClose() : onClose(event))}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={onClose}
        onClick={onClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}


// import React, { Component } from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import EqualizerIcon from '@mui/icons-material/Equalizer';
// import TuneIcon from '@mui/icons-material/Tune';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
// import Dashboard from './dashboard-home.tsx'
// import Gauge from './gauge.tsx'

// const drawerWidth = 240;

// class ClippedDrawer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       activePage: 'dashboard',
//       anchorEl: null,
//     };
//   }

//   handlePageChange = (page) => {
//     this.setState({ activePage: page });
//   };

//   handleClick = (event) => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   renderContent = () => {
//     const { activePage } = this.state;

//     switch (activePage) {
//       case 'dashboard':
//         return <Dashboard/>;
        
//       case 'controls':
//         return <Gauge/>;
//       default:
//         return null;
//     }
//   };

//   render() {
//     const { anchorEl, activePage } = this.state;
//     const open = Boolean(anchorEl);

//     return (
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//           <Toolbar>
//             <Typography variant="h6" noWrap component="div">
//               Vertical Farming
//             </Typography>
//             <Box sx={{ flexGrow: 1 }} />
//             <AccountMenu anchorEl={anchorEl} open={open} onClose={this.handleClose} />
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           variant="permanent"
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             [`& .MuiDrawer-paper`]: {
//               width: drawerWidth,
//               boxSizing: 'border-box',
//             },
//           }}
//         >
//           <Toolbar />
//           <Box sx={{ overflow: 'auto' }}>
//             <List>
//               {['dashboard', 'controls'].map((page, index) => (
//                 <ListItem
//                   key={page}
//                   disablePadding
//                   selected={activePage === page}
//                   onClick={() => this.handlePageChange(page)}
//                 >
//                   <ListItemButton>
//                     <ListItemIcon>{index % 2 === 0 ? <EqualizerIcon /> : <TuneIcon />}</ListItemIcon>
//                     <ListItemText primary={page.charAt(0).toUpperCase() + page.slice(1)} />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </List>
//             <Divider />
//             <List>
//               {['Manage Profiles'].map((text, index) => (
//                 <ListItem key={text} disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       <ManageAccountsIcon />
//                     </ListItemIcon>
//                     <ListItemText primary={text} />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </List>
//           </Box>
//         </Drawer>
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <Toolbar />
//           {this.renderContent()}
//         </Box>
//       </Box>
//     );
//   }
// }

// function AccountMenu({ anchorEl, open, onClose }) {
//   return (
//     <React.Fragment>
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           textAlign: 'center',
//         }}
//       >
//         <Typography sx={{ minWidth: 100 }}>Contact</Typography>
//         <Typography sx={{ minWidth: 100 }}>Profile</Typography>
//         <Tooltip title="Account settings">
//           <IconButton
//             onClick={(event) => (anchorEl ? onClose() : onClose(event))}
//             size="small"
//             sx={{ ml: 2 }}
//             aria-controls={open ? 'account-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//           >
//             <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
//           </IconButton>
//         </Tooltip>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={onClose}
//         onClick={onClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: 'visible',
//             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//             mt: 1.5,
//             '& .MuiAvatar-root': {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             '&:before': {
//               content: '""',
//               display: 'block',
//               position: 'absolute',
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: 'background.paper',
//               transform: 'translateY(-50%) rotate(45deg)',
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem>
//           <Avatar /> Profile
//         </MenuItem>
//         <MenuItem>
//           <Avatar /> My account
//         </MenuItem>
//         <Divider />
//         <MenuItem>
//           <ListItemIcon>
//             <PersonAdd fontSize="small" />
//           </ListItemIcon>
//           Add another account
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <Logout fontSize="small" />
//           </ListItemIcon>
//           Logout
//         </MenuItem>
//       </Menu>
//     </React.Fragment>
//   );
// }



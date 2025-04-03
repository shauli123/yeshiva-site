import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu({text, items}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{display:"flex", justifyContent:"center" , alignItems:"center"}}>

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{fontFamily: 'Rubik'}}
      >
        {text}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
         <MenuItem onClick={handleClose}>My account</MenuItem>
         <MenuItem onClick={handleClose}>Logout</MenuItem> */}

         {Object.keys(items).map(
            (key, i) => (
                <MenuItem key={key} href={items.key} onClick={() => {
                    handleClose();
                    console.log(items[key]);
                    
                    window.open(items[key]);
                }}>{key}</MenuItem>
            )
         )}
      </Menu>
    </div>
  );
}

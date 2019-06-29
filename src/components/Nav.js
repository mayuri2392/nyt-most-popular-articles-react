import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import '../scss/Nav.scss';

class Nav extends Component { 
render() {
  return (
    <AppBar position="fixed" color="primary" className="appBar">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="Open drawer">
        <MenuIcon />
      </IconButton>
          <Typography variant="h6" color="inherit">
            NY Times Most Popular Articles
          </Typography>
      <div className="grow"/>
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <IconButton edge="end" color="inherit">
        <MoreIcon />
      </IconButton>
    </Toolbar>
    </AppBar>
  )
}
}

export default Nav;
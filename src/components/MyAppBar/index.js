import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
// import *  as MyIcons from '@material-ui/icons'
// let MyIconButton = MyIcons.IconButton;

class MyAppBar extends Component {

  state = {
    anchorEl: null
  }

  handleOpenMenu = () => {
    // this.props.handleOpenMenu();
    this.setState({anchorEl: event.currentTarget});
  }

  handleCloseMenu = () => {
    // this.props.handleCloseMenu()
    // anchorEl = null
    this.setState({anchorEl: null});
  }

  render() {

    return (
      <AppBar position="absolute">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
          <Button 
            color="inherit"
            onClick={event => this.handleOpenMenu(event)}>
            Asset</Button>
          <Menu
            id="simple-menu"
            anchorEl={ this.state.anchorEl }
            keepMounted
            open={ Boolean(this.state.anchorEl) }
            onClose={ this.handleCloseMenu }
          >
            <MenuItem onClick={ this.handleCloseMenu }>BTC</MenuItem>
            <MenuItem onClick={ this.handleCloseMenu }>ETH</MenuItem>
            <MenuItem onClick={ this.handleCloseMenu }>BCH</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
  }
}

export default MyAppBar
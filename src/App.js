import React, { Component } from "react";
import MyAppBar from "./components/MyAppBar"

class App extends Component {
  // constructor() {
  //   super();
  // }

  state = {
    menuOpen: false,
    appBarTitle: "Crypto Assset App"
  }

  handleOpenMenu = () => {
    console.log("Menu OPEN")
    this.setState({menuOpen: true })
  }

  handleCloseMenu = () => {
    console.log("Menu CLOSED")
    this.setState({menuOpen: false})
  }

  setAppBarTitle(appBarTitle) {
    this.setState({appBarTitle: appBarTitle })
  }

  render() {
    return (
      <MyAppBar
        menuOpen={ this.state.menuOpen }
        // menuEl={ this.state.menuEl }
        appBarTitle={ this.state.appBarTitle }
        handleOpenMenu={ this.handleOpenMenu }
        handleCloseMenu={ this.handleCloseMenu }
      />
    );
  }
}

export default App;
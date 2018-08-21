import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from './appBar.js'
import AppCard from './appCard.js'
import AppDrawer from './appDrawer';

import './App.css';

class App extends Component {
    state = {
        open: false,
    };


    handleClick = () => {
      console.log('clicked')
        this.setState({ open: !this.state.open });
    };


    render() {
      let open = this.state.open;

    return (
      <div className="App">
        <AppBar click={this.handleClick}/>
        <AppDrawer open={open}/>

        <Grid
            container
            direction="row"
            item xs={12}
            justify="center"
            alignItems='center'
        >
          <AppCard/>
        </Grid>

      </div>
    );
  }
}

export default App;

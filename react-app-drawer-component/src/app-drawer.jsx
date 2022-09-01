import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false
    };
  }

  handleClick() {
    this.setState({
      openDrawer: !this.state.openDrawer
    });
  }

  render() {
    const toggleButton = 'fa solid fa-bars drawer-toggle';
    let drawerOverlay = 'app-drawer-overlay hidden';
    let appDrawer = 'app-drawer hidden';

    if (this.openDrawer) {
      drawerOverlay = 'app-drawer-overlay';
      appDrawer = 'app-drawer';
    }

    return (
    <div>
        <div onClick={this.handleClick} className = {toggleButton}>

      </div>
      <div className={drawerOverlay}>
      </div>
      <div className={appDrawer}>
        <div></div>
      </div>
    </div>
    );
  }
}

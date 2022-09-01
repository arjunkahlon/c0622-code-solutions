import React from 'react';
import GameList from './game-list';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      openDrawer: !this.state.openDrawer
    });
  }

  render() {
    const games = [
      { number: '001', name: 'Wand of Gamelon' },
      { number: '002', name: 'Skyward Sword' },
      { number: '003', name: 'Spirit Tracks' },
      { number: '004', name: 'Adventure of Link' },
      { number: '004', name: 'Hyrule Warriors' },
      { number: '005', name: 'Majoras Mask' }
    ];
    const toggleButton = 'fa solid fa-bars drawer-toggle';
    let drawerOverlay = 'app-drawer-overlay hidden';
    let appDrawer = 'app-drawer hidden';

    if (this.state.openDrawer) {
      drawerOverlay = 'app-drawer-overlay';
      appDrawer = 'app-drawer';
    }

    return (
    <div>
        <div>
          <i onClick={this.handleClick} className={toggleButton}></i>
      </div>
        <div onClick={this.handleClick} className={drawerOverlay}>
      </div>
      <div className={appDrawer}>
        <div className='game-list-header-wrapper'>
            <h2 className='game-list-header'>Choose a Game</h2>
        </div>
        <GameList games={games}/>
      </div>
    </div>
    );
  }
}

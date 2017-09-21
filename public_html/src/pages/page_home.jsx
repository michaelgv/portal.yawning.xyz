import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    var style = {
      flex: '1'
    };

    var buttonStyles = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    };

    return (
      <div style={style}>
        <h1 className='centered'>Welcome To The Portal!</h1>
        <p>The Yawning Portal is a popular tavern in the city of Waterdeep, where adventurers from all over the Forgotten Realms and beyond gather to drink, trade stories of epic heroism, and gather intel on various goings on that may lead an adventurer to riches beyond their wildest imaginations.</p>
        <p>This is not The Yawning Portal.</p>
        <p>portal.yawning.xyz is a social media website created by one man in his mother's basement for use by his D&D playgroup. All are welcome here, but please be respectful of others, and don't make a mess on the carpet.</p>
        <div style={buttonStyles}>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/passwordrecovery'>Reset Password</Link>
        </div>
      </div>
    );
  };
}

//redux
PageHome.contextTypes = {
  store: React.PropTypes.object
};

function mapStoreToProps(store) {
  return {
    store: store
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //
  };
}

PageHome = connect(mapStoreToProps, mapDispatchToProps)(PageHome);

export default PageHome;

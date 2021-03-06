import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//include other panels
import PageHome from './pages/page_home.jsx';
import PageLegal from './pages/page_legal.jsx';
import PageLogin from './pages/page_login.jsx';
import PageNotFound from './pages/page_not_found.jsx';
import PagePasswordRecovery from './pages/page_password_recovery.jsx';
import PageProfile from './pages/page_profile.jsx';
import PageSignup from './pages/page_signup.jsx';

import FooterPanel from './panels/footer_panel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='central'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={PageHome} />
            <Route path='/legal' component={PageLegal} />
            <Route path='/login' component={PageLogin} />
            <Route path='/passwordrecovery' component={PagePasswordRecovery} />
            <Route path='/profile/:profileId?' component={PageProfile} />
            <Route path='/signup' component={PageSignup} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        <FooterPanel />
      </div>
    );
  }
}

export default App;

import React from 'react';
import { connect } from 'react-redux';
import { IndexRoute, Router, Route } from 'react-router';
import Footer from 'components/footer/Footer';

// App
import App from 'components/app/App';
// Pages
import HomePage from 'components/pages/HomePage';
import MapPage from 'components/pages/MapPage';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute components={{ main: HomePage, footer: Footer }} />
      <Route path="map">
        <IndexRoute components={{ main: MapPage }} />
      </Route>
    </Route>
  </Router>
);

Routes.propTypes = {
  history: React.PropTypes.object
};

export default connect()(Routes);

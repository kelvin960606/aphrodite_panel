/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Notify from 'containers/Notify';

import HomePage from 'containers/HomePage/Loadable';
import TableListingPage from 'containers/TableListingPage/Loadable';
import LoginForm from 'containers/LoginForm/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import tableSetting from 'utils/globalTableSetting';
import { dataChecking } from 'utils/globalUtils';

import Topbar from 'containers/Topbar';
import Sidebar from 'containers/Sidebar';

import {
    makeSelectAuthenticated,
    makeSelectLocation,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import {
    fetchConfig,
} from './actions';

import PrivateRoute from './PrivateRoute';

const sidebarWidth = '48px';
const topbarHeight = '40px';

export const HershopTopbar = styled.div`
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    position: absolute;
    height: ${topbarHeight};
    background-color: ${(props) => props.theme.main_bg};
`;
const HershopSideBar = styled.div`
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    margin-top: 20px;
    position: absolute;
    background-color: white;
    width: ${sidebarWidth};
    padding-top: ${topbarHeight};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
`;

const HershopContent = styled.div`
    padding: 16px;
    margin-top: ${topbarHeight};
    margin-left: ${sidebarWidth};
`;

const HershopMobileBar = styled.div`
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2000;
    overflow: hidden;
    position: absolute;
    background-color: papayawhip;
`;

const pageReference = {
    home: HomePage,
};

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    componentDidMount() {
        this.props.dispatch(fetchConfig());
    }

    render() {
        const { authenticated } = this.props;
        return (
            <section>
                <HershopTopbar
                    id="hershop-topbar-container"
                    className="visible-sm visible-md visible-lg"
                >
                    <Topbar />
                </HershopTopbar>

                <Notify></Notify>

                <HershopSideBar
                    id="hershop-sidebar-container"
                    className="hide"
                >
                    <Sidebar />
                </HershopSideBar>

                <HershopContent id="hershop-content-container">
                    <Switch>
                        <PrivateRoute exact={true} path="/" auth={authenticated} component={pageReference.home} />
                        {
                            Object.keys(tableSetting).map((key, index) => (
                                <Route
                                    key={index}
                                    exact={true}
                                    path={dataChecking(tableSetting, key, 'href')}

                                    render={(props) => <TableListingPage {...props} pageType={dataChecking(tableSetting, key, 'id')} />}
                                />
                            ))
                        }
                        {/* <Route exact={true} path="/flagship" auth={authenticated} component={Flagship} />
                        <Route exact={true} path="/flagship/:id" auth={authenticated} component={Flagship} /> */}

                        <Route exact={true} path="/login" component={LoginForm} />
                        <Route path="" component={NotFoundPage} />
                    </Switch>
                </HershopContent>

                <HershopMobileBar
                    id="hershop-mobilebar-container"
                    className="d-block d-md-none"
                >
                    This is bottom mobile bar
                </HershopMobileBar>
            </section>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
    // location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
    authenticated: makeSelectAuthenticated(),
    location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'config', reducer });
const withSaga = injectSaga({ key: 'config', saga });

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(App);

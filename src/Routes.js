import React from "react";
import { createBrowserHistory as createHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
export const history = createHistory();

const Routes = () => {
    return (
        <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <Route render={({ location }) => {
                return (
                    <TransitionGroup component={null}>
                        <CSSTransition
                            timeout={300}
                            classNames="page"
                            key={location.key}
                        >
                            <Switch location={location}>
                                <Route path="/" component={Home} exact={true} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>)
            }} />
        </Router>
    )
};
export default Routes;
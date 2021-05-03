import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from "../pages/about-me/AboutMe";
import Shows from '../pages/shows/Shows';

interface RouteInterface {
  path: string;
  component: () => JSX.Element;
  exact?: boolean;
}

function AllRoutes() {
  const allRoutePaths: RouteInterface[] = [
    {
    path: '/info',
    component: AboutMe
    },
    {
      path: '/shows',
      component: Shows
    }
];

  return (
    <Router>
      {
        allRoutePaths.map((route: RouteInterface) => (
          <Route path={route.path} exact={route.exact} component={route.component} key={route.path}></Route>
        ))
      }
    </Router>
  )
}

export default AllRoutes;


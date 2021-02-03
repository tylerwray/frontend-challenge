import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Header from './Header';

import Home from './Home';
import MovieDetails from './MovieDetails';
import Genre from './Genre';

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only on first page load.
 **/
export const trackInitialLoad = () => {
  console.log('First page load');
};

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only once the page has completely
 * loaded.
 **/
export const trackPageCompletedLoading = () => {
  console.log('Page done loading');
};

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies/:movieId" exact component={MovieDetails} />
          <Route path="/genres/:genre" exact component={Genre} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;

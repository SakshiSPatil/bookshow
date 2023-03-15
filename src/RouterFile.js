import React from 'react'
import Home from './Home';
import MovieOneDetails from './MovieOneDetails';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function RouterFile() {
  return (
    <div>
      {/* <MovieOneDetails/> */}
      <Router>
        <Routes>
          <Route exact path='/'
            element={<Home />}>
          </Route>
          <Route exact path='/MovieOneDetails'
            element={<MovieOneDetails />}>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

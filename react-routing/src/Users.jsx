import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import User from './User';

function Users(props) {
  return (
    <>
      <div className="page__content">
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/users/github">Github</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/facebook">Facebook</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/ArDezZz">Vlad</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/yariki23">Yaroslav</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/users/:userId" component={User}></Route>
        </Switch>
      </div>
    </>
  );
}

export default Users;

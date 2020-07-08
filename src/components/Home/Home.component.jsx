import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseAction, decreaseAction, getUsers } from "./Home.actions";
import "./Home.styles.scss";

function Home() {
  const home = useSelector((state) => state.home);
  const dispatch = useDispatch();
  console.log(home);
  return (
    <div className="App">
      <div>{home.count}</div>
      <button onClick={() => dispatch(increaseAction)}>Increase</button>
      <button onClick={() => dispatch(decreaseAction)}>Decrease</button>
      <div>Async Actions</div>
      <button onClick={() => dispatch(getUsers)}>Get Users</button>
      {home.users.map((user) => {
        return (
          <div key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;

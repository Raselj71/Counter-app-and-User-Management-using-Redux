import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./Service/Action";
import User from "./User";

function Home() {
  const count = useSelector((state) => state.count);
  const user = useSelector((state) => state.user);
  console.log(user);

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime().toString(),
      name: username,
    };
    dispatch(addUser(newUser));

    console.log(newUser);
  };

  return (
    <div>
      <div>
        <div>count: {count}</div>
        <button
          onClick={() => {
            dispatch(incrementCounter());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrementCounter());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(resetCounter());
          }}
        >
          Reset
        </button>
      </div>

      <div> User List</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button type="submit">Add user</button>
        </form>
      </div>
      <div>
        {user.map((item) => (
          <User item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;

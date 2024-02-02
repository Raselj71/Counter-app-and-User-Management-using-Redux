import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "./Service/Action";

function User({ item }) {
  const { id, name } = item;
  const dispatch = useDispatch();
  return (
    <div>
      <p> id: {id}</p>
      <p>name: {name}</p>
      <button
        onClick={() => {
          dispatch(removeUser(id));
        }}
      >
        Delete {name}
      </button>
    </div>
  );
}

export default User;

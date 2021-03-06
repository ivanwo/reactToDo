import React from "react";

const ListMeister = ({ list, id, remove }) => {
  return (
    <article>
      <p>{list.text}</p>
      <button
        onClick={_ => {
          return remove(id);
        }}
      >
        {list.btn}
      </button>
    </article>
  );
};

export default ListMeister;

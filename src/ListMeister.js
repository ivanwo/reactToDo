import React from "react";

const ListMeister = ({ list, id, remove }) => {
  return (
    <article>
      <p>{list}</p>
      <button
        onClick={_ => {
          return remove(id);
        }}
      >
        get this shit out of my face
      </button>
    </article>
  );
};

export default ListMeister;

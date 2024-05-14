import React from "react";

function ActivityButton({ buttonObject, queryDocument }) {
  function displayActivity(activity) {
    const display = document.querySelector(queryDocument);
    display.innerHTML = `<h3>${activity.name}</h3><p>${activity.description}
</p>`;
  }

  return (
    <>
      <button
        key={buttonObject.id}
        onClick={() => displayActivity(buttonObject)}
      >
        {buttonObject.name}
      </button>
    </>
  );
}

export default ActivityButton;

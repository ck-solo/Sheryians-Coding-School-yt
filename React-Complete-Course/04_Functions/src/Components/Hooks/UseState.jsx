import React from "react";

const UseState = () => {
  return (
    <div>
      <h1>use state</h1>
      <p>
        use state is a hook that allows you to add state to your components.
        like when we make navbar we use use state to add state to navbar.
        <br />
        <br />
        home is a component that we made to show the use state in action.
        then we use use state to add state to home. then there is a line below the home when we click on it just because we want to show that we can use use state.
      </p>
      <h2>Use Ref</h2>
      <p>Use ref is used if we want to run a command or do something when a component is mounted or unmounted. Access the DOM element directly.</p>
      <h3>useReducer</h3>
      <p>use for complex state management</p>

<h2>useMemo & use callback</h2>
<p>use for optimizing the performance of your application and avoid unnecessary re-renders.</p>

    </div>
  );
};

export default UseState;

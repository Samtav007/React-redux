import React from 'react';
import { createStore } from 'redux';
import reducer from './Components/Reducer'; 
import { Increment, Decrement } from './Components/Action'; 
const store = createStore(reducer);

export default function LikeCounter() {
  const initialState = store.getState().count;
  const [count, setCount] = React.useState(initialState);

  React.useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().count);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => store.dispatch(Increment())}>Like</button>
      <button onClick={() => store.dispatch(Decrement())}>Unlike</button>
    </div>
  );
}
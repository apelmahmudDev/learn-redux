import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, signIn } from './actions';

function App() {

	const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

	return (
		<div className="App">
			<h1>Counter {counter}</h1>
			<button onClick={() => dispatch(increment(5))}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>

			{isLogged ? <h2>Valuable information i shouldn't see</h2> : ''}
      <br/>
      <button onClick={() => dispatch(signIn())}>Sign In</button>
		</div>
	);
}

export default App;

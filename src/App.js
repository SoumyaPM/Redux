import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { action } from "./action";
export default function App() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen! {books}</h2>
      <button onClick={() => dispatch(action())}>Sell</button>
    </div>
  );
}

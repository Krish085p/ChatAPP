import axios from "axios";
import Register from "./Register";

function App() {
  axios.defaults.baseURL = 'https://localhost:4040';
  axios.defaults.withCredentials = true;
  return (
    <Register></Register>
  )
}

export default App

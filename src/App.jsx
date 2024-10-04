import { createBrowserRouter } from "react-router-dom";
import Home from "./";

createBrowserRouter({
  path: "/",
  element: <Home />,
});

function App() {
  return <div>TEST</div>;
}

export default App;

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/common/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>Hello</Layout>
    </BrowserRouter>
  );
}

export default App;

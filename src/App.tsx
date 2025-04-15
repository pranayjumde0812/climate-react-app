import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/common/layout";
import { ThemeProvider } from "./context/theme-provider";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>Hello</Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

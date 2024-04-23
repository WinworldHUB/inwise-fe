import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./lib/constants/app-routes";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

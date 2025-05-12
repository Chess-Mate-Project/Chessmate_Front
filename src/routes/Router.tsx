import { Routes, Route} from "react-router-dom";
import Header from "../components/header/Header";
import Login from "../components/login/Login";

const AppRouter = () => (
  <>
    <Header />
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  </>
);

export default AppRouter;

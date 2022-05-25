import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthState  from "src/components/context/auth/auth.state";

import AuthLayout from "src/components/shared/crossed/AuthLayout";
import HomeLayout from "src/components/shared/crossed/HomeLayout";

import Login  from 'src/pages/auth/login';
import Recover from "src/pages/auth/recover";
import Register from "src/pages/auth/register";
import AppState from "./components/context/app/app.state";
import Checkout from "./pages/checkout";
import Explore from "./pages/explore";
import Home from "./pages/home";
import News from "./pages/news";
import Success from "./pages/success";

function App() {
  return (
    <AuthState>
    <AppState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/news" element={<News />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success/>} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="recover" element={<Recover />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppState>
    </AuthState>
  );
}

export default App;

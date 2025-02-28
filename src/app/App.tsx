import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "@/app/layouts/Layout.tsx";
import Home from "@/pages/home";
import NotFound from "@/pages/notFound";
import Posts from "@/pages/posts";
import { AuthProvider } from "@/app/providers/AuthProvider.tsx";
import Login from "@/pages/login";
import Profile from "@/pages/profile";
import { PrivateRoute } from "@/app/routers/PrivateRoute/PrivateRoute.tsx";
import Converter from "@/pages/converter/ui/Converter.tsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<Posts />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

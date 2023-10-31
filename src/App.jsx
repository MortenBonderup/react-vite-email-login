import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <>
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
        </>
    );
}

export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from './firebase-config';

function App() {

    // Sætter en eventlistener for at registrerer, når brugeren lukker
    // browseren/fanebladet. Hvis det sker, logges brugeren ud.
    useEffect(() => {
        async function handleTabClose() {
          await signOut(auth);
        }
    
        // Sætter eventlistener
        window.addEventListener('beforeunload', handleTabClose);
    
        // Fjerner eventlistener
        return () => {
          window.removeEventListener('beforeunload', handleTabClose);
        };
      }, []);

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

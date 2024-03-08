// Kræver installation "npm install --save react-firebase-hooks"
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function HomePage() {

    const userInSession = sessionStorage.getItem('user');
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        // fetchUserName();
      }, [user, loading, navigate]);

    async function handleLogout() {
        try {
            await signOut(auth);
            sessionStorage.removeItem('user');
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="page">
            <h1>Velkommen til min react løsning</h1>
            <h2>Du er logget på som {userInSession && user.email}</h2>
            <button onClick={handleLogout}>Logout</button>
        </section>
    )

}

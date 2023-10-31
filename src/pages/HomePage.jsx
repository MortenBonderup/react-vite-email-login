import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

export default function HomePage() {

    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('uid');
            localStorage.removeItem('user');
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="page">
            <h1>Velkommen til min react løsning</h1>
            <h2>{user && user.email}</h2>
            <button onClick={handleLogout}>Logout</button>
        </section>
    )

}

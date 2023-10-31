import { useState } from 'react'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('uid', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/home");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1 style={{ marginTop: "155px" }}>Login Page</h1>
            <form onSubmit={handleSubmit} className='login-form'>
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className='login-button'>Login</button>
            </form>
            <p>Need to Signup? <Link to="/">Create Account</Link></p>
        </div>
    )
}
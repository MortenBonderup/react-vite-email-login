import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";

export default function AboutPage() {

    const [tekst, setTekst] = useState("");
    const [uid, setUid] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {
        const tempUid = sessionStorage.getItem("uid");
        const tempuser = JSON.parse(localStorage.getItem('user'));
        setUid(tempUid);
        setUser(tempuser);
    }, []);

    async function opretVare(e) {
        e.preventDefault();

        const nytekst = {
            uid: uid,
            tekst: tekst
        }

        try {
            const tekstRef = await addDoc(collection(db, "tekst"), nytekst);
            console.log("Tekst tilføjet med ID: ", tekstRef.id);
            alert("Tekst blev gemt!");
        } catch (e) {
            console.error("FEJL - Kunne ikke tilføje vare: ", e);
        }
    }


    return (
        <section className="page">
            <h1>Gem information</h1>
            <p>Du er logget på som {user && user.email}</p>

            <form onSubmit={opretVare}>
                <textarea value={tekst} onChange={e => setTekst(e.target.value)}></textarea>
                <button>Gem</button>
            </form>
        </section>
    );
}

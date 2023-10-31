import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";

export default function ContactPage() {
    const [tekster, setTekster] = useState([]);
    const [uid, setUid] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {
        async function fetchData() {
            const forespoergsel = query(collection(db, "tekst"), where("uid", "==", uid));
            const querySnapshot = await getDocs(forespoergsel);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ id: doc.id, ...doc.data() });
            });
            console.log("useEffect");

            setTekster(docs);
        }
        const tempUid = sessionStorage.getItem("uid");
        const tempuser = JSON.parse(localStorage.getItem('user'));
        setUser(tempuser);
        setUid(tempUid);

        fetchData();

    }, [uid]);

    return (
        <section className="page" style={{ marginTop: "25px" }}>
            <p>Du er logget på som {user && user.email}</p>
            {tekster.map(tekst => (
                <p key={tekst.id}>
                    {tekst.tekst}
                    <br />--------------------------------------
                </p>
            ))}

        </section>
    );
}

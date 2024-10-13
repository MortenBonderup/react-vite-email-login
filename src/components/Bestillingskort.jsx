export default function Bestillingskort({ bestilling, handleButton }) {
    return (
        <div style={{ display: "flex", width: "1200px", justifyContent: "space-between" }}>
            <div>Navn: {bestilling.kundenavn}</div>
            <div>Email: {bestilling.kundeemail}</div>
            <div>Mobilnr: {bestilling.kundemobil}</div>
            <div>Pizzaer: {bestilling.pizzaer.join(", ")}</div>
            {bestilling.status === "Ny bestilling" ?
                <div>
                    <span style={{ fontWeight: "bold" }}>{bestilling.status}&nbsp;&nbsp; </span>
                    <button type="button" data-knap="skiftstatus" value={bestilling.id} onClick={handleButton}>Skift status til &ldquo;I gang&ldquo;</button>
                </div>
                :
                <div>
                    <span style={{ fontWeight: "bold" }}>{bestilling.status} </span>
                    <button type="button" data-knap="slet" value={bestilling.id} onClick={handleButton}>Afhentet</button>
                </div>
            }
        </div>
    )
}
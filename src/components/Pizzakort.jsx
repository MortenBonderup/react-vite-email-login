export default function Pizzakort({ pizza, handleInput }) {
    return (
        <p>
            {pizza.nummer}. {pizza.navn} kr.{pizza.pris}
            <br />{pizza.ingredienser} <input type="checkbox" name={pizza.nummer} value={pizza.nummer} onChange={handleInput} />
        </p>
    )
}


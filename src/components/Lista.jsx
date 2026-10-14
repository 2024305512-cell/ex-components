export default function Lista({titulo, elementos}) { //elementos vai ser um array de elementos
    return(
        <>
            <h3>{titulo}</h3>
            <ul>
                {elementos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <main>
            <h1>Home</h1>

            <ul>
                <li> <Link to='/corPrima'> Cor Primária </Link> </li>
                <li> <Link to='/frequencia'> Frequencia </Link> </li>
                <li> <Link to='/ingresso'> Ingresso </Link> </li>
                <li> <Link to='/maior'> Maior Numero </Link> </li>
            </ul>

        </main>
    )
}
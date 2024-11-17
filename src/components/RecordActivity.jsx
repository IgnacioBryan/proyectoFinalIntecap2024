import {ArcElement, BarElement, CategoryScale, Chart as chartJS, Legend, LinearScale, Tooltip} from "chart.js";
import {useState} from "react";
import {Bar, Pie} from "react-chartjs-2";

chartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

export default function RecordActivity() {

    const [sales, setSales] = useState([]);
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    function handleAddSale() {
        const newSale = {
            product,
            quantity: parseInt(quantity),
            price: parseFloat(price)
        }
        setSales([...sales, newSale]);
        setProduct('');
        setQuantity('');
        setPrice('');
    }

    //construir grafico de barras.
    const barData = {
        labels: sales.map(sale => sale.product),
        datasets: [{
            label: 'Cantidad Vendida',
            data: sales.map(sale => sale.quantity), // Datos basados en la cantidad vendida
            backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }, {
            label: "Ventas (Q)",
            data: sales.map(sale => sale.quantity * sale.price),
            backgroundColor: "rgba(153, 102, 255, 0.6)"
        }
        ]
    }

    const pieData = {
        labels: sales.map(sale => sale.product),
        datasets: [
            {
                label: "Ventas (Q)",
                data: sales.map(sale => sale.quantity * sale.price),
                backgroundColor: [
                    "rgba(255,99,132,0.6)",
                    "rgba(54,162,235,0.6)",
                    "rgba(255,206,86,0.6)",
                    "rgba(75,192,192,0.6)"
                ]
            }
        ]
    }

    return <>
        <div className={"contenedor-estadisticas"}>
            <h1 className={"titulo-registro"}>Detalles de Ventas</h1>
            <div>
                <input type="text" placeholder={"Producto"} value={product} onChange={e => setProduct(e.target.value)}/>
                <input type="number" placeholder={"Cantidad"} value={quantity}
                       onChange={e => setQuantity(e.target.value)}/>
                <input type="number" placeholder={"Precio"} value={price} onChange={e => setPrice(e.target.value)}/>
                <button onClick={handleAddSale}>Tabla de Ventas</button>
            </div>
            <h2>Tabla de Ventas</h2>
            <table>
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {
                    sales.map((sale, index) => (
                        <tr key={index}>
                            <td>{sale.product}</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.price}</td>
                            <td>{sale.quantity * sale.price}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <h2>Grafico de Barras</h2>
            <Bar data={barData}/>
            <h2>Grafico de Pie</h2>
            <Pie data={pieData}/>
        </div>
    </>
}
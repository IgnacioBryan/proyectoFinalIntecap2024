import {ArcElement, BarElement, CategoryScale, Chart as chartJS, Legend, LinearScale, Tooltip} from "chart.js";
import {useState} from "react";
import {Bar, Pie} from "react-chartjs-2";

chartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);
export default function RegisterActivity() {

    const [listaRegistros, setListaRegistros] = useState([]);
    const [registro, setRegistro] = useState({tipo: "", duracion: "", distancia: ""});

    // Función para manejar el envío del formulario
    function handleSubmit(e) {
        e.preventDefault();
        // Solo agregar si todos los campos están llenos
        if (registro.tipo && registro.duracion && registro.distancia) {
            setListaRegistros([...listaRegistros, registro]);

            // Limpiar el formulario
            setRegistro({tipo: "", duracion: "", distancia: ""});
        }
    }

    // Funciones para manejar los cambios en los inputs
    function handleTipoChange(e) {
        setRegistro({...registro, tipo: e.target.value});
    }

    function handleDuracionChange(e) {
        setRegistro({...registro, duracion: e.target.value});
    }

    function handleDistanciaChange(e) {
        setRegistro({...registro, distancia: e.target.value});
    }

    //construir grafico de barras.
    const barData = {
        labels: listaRegistros.map(registro => registro.tipo),
        datasets: [{
            label: 'Distancia',
            data: listaRegistros.map(registro => Number(registro.distancia)), // Datos basados en la cantidad vendida
            backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }
        ]
    }

    const pieData = {
        labels: listaRegistros.map(registro => registro.tipo),
        datasets: [
            {
                label: "Distancia",
                data: listaRegistros.map(registro => Number(registro.distancia)),
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
        <div>
            <form className={"contenedor-register"} onSubmit={handleSubmit}>
                <h2 className={"titulo-registro"}>Registrar Actividad</h2>
                <div className="mb-3 ">
                    <label className="form-label">Tipo</label>
                    <input type="text" className="form-control in-register" value={registro.tipo}
                           onChange={handleTipoChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Duracion</label>
                    <input type="text" className="form-control in-register" value={registro.duracion}
                           onChange={handleDuracionChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Distancia</label>
                    <input type="text" className="form-control in-register" value={registro.distancia}
                           onChange={handleDistanciaChange}/>
                </div>
                <button type="submit" className="boton-register btn btn-dark">Agregar
                </button>
            </form>
        </div>

        <div className={"contenedor-actividades"}>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Duracion</th>
                    <th scope="col">Distancia</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">

                {listaRegistros.map((rg, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{rg.tipo}</td>
                            <td>{rg.duracion}</td>
                            <td>{rg.distancia}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
        <div className={"contenedor-graficas"}>{listaRegistros.length > 0 && (
            <>
                <h2 className={"titulo"}>Gráfico de Barras</h2>
                <Bar data={barData}/>
                <h2 className={"titulo"}>Gráfico de Pie</h2>
                <Pie data={pieData}/>
            </>
        )}
        </div>
    </>
}
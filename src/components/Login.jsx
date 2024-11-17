export default function Login() {
    return <>
        <div className={"contenedor"}>
            <div className={"container-form"}>
                <h2>Login</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <button type="submit" className="boton-sub btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
}
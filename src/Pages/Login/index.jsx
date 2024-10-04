import { useContext, useState } from "react";
import { FaKey, FaUser } from "react-icons/fa";
import BodySection from "../../Components/BodySection";
import HeaderSection from "../../Components/HeaderSection";
import { Link, useNavigate } from "react-router-dom";
import { ShopingCartContext } from "../../Context";
import { toast, ToastContainer } from 'react-toastify'; // Importa toast y ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importa el CSS de react-toastify

function Login() {
    const context = useContext(ShopingCartContext);
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    // Manejar el registro o el inicio de sesión
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isRegister) {
            // Registro de nuevo usuario
            if (email && password && name) {
                try {
                    const response = await fetch(context.urlHost + "/api/index.php?data=registro", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            nombre_completo: name,
                            usuario: email,
                            password: password,
                            registro: true
                        }),
                    });

                    const data = await response.json();

                    if (response.ok) {
                        toast.success("Usuario registrado exitosamente."); // Muestra el toast de éxito
                        navigate("/account");
                    } else {
                        toast.error(data.message || "Error al registrar el usuario."); // Muestra el toast de error
                    }
                } catch (error) {
                    toast.error("Ocurrió un error durante el registro."); // Muestra el toast de error
                }
            } else {
                toast.warn("Por favor completa todos los campos para registrarte."); // Muestra el toast de advertencia
            }
        } else {
            // Login de usuario existente
            if (email && password) {
                try {
                    const response = await fetch(context.urlHost + "/api/index.php?login&data=login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            usuario: email,
                            password: password,
                            login: true
                        }),
                    });

                    const data = await response.json();

                    if (data.success) {
                        localStorage.setItem("sesionJWT", JSON.stringify(data.data));
                        toast.success("Inicio de sesión exitoso."); // Muestra el toast de éxito
                        navigate("/account");
                    } else {
                        toast.error(data.response || "Usuario o contraseña incorrectos."); // Muestra el toast de error
                    }
                } catch (error) {
                    toast.error("Ocurrió un error durante el inicio de sesión."); // Muestra el toast de error
                }
            } else {
                toast.warn("Por favor completa todos los campos."); // Muestra el toast de advertencia
            }
        }
    };

    return (
        <>
            <ToastContainer /> {/* Añade el contenedor de toasts aquí */}
            <section className="mt-20 w-full">
                <HeaderSection titulo={isRegister ? "Registro" : "Login"} />
                <BodySection>
                    <div className="flex justify-center items-center">
                        <form onSubmit={handleSubmit} className="w-96 h-auto shadow-lg mt-20 rounded-lg p-4">
                            <h1 className="w-full text-center p-3 underline text-xl">{isRegister ? "Registro" : "Login"}</h1>

                            {isRegister && (
                                <div className="w-full flex flex-col justify-center items-center mb-3">
                                    <label htmlFor="name">Ingresa tu nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full border-2 border-black rounded-lg p-2 focus:outline-green-400"
                                    />
                                </div>
                            )}

                            <div className="w-full flex flex-col justify-center items-center mb-3">
                                <label htmlFor="email">Ingresa tu correo electrónico</label>
                                <div className="flex w-full">
                                    <span className="border-l-2 border-t-2 border-b-2 border-black rounded-s-lg p-2 flex justify-center items-center">
                                        <FaUser />
                                    </span>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full border-r-2 border-t-2 border-b-2 border-black rounded-e-lg p-2 focus:outline-green-400"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-col justify-center items-center mb-3">
                                <label htmlFor="password">Ingresa tu contraseña</label>
                                <div className="flex w-full">
                                    <span className="border-l-2 border-t-2 border-b-2 border-black rounded-s-lg p-2 flex justify-center items-center">
                                        <FaKey />
                                    </span>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full border-r-2 border-t-2 border-b-2 border-black rounded-e-lg p-2 focus:outline-green-400"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-col justify-start items-start">
                                <button type="submit" className="w-full rounded-lg bg-green-600 py-2 hover:bg-green-500">
                                    {isRegister ? "Registrarse" : "Iniciar Sesión"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsRegister(!isRegister)}
                                    className="w-full text-center mt-3 underline text-sm"
                                >
                                    {isRegister ? "¿Ya tienes una cuenta? Iniciar sesión" : "¿No tienes una cuenta? Regístrate"}
                                </button>
                                {!isRegister && <Link to="/forgot-password">Olvidaste tu Password?</Link>}
                            </div>
                        </form>
                    </div>
                </BodySection>
            </section>
        </>
    );
}

export default Login;

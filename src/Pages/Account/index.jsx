import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopingCartContext } from "../../Context";

function Account() {
    const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario
    const navigate = useNavigate();
    const context = useContext(ShopingCartContext);

    // Cargar los datos del usuario desde localStorage
    useEffect(() => {
        const fetchUserData = async () => {
            const sesionJWT = JSON.parse(localStorage.getItem("sesionJWT"));
            if (sesionJWT) {
                try {
                    const response = await fetch(context.urlHost + "/api/index.php?data=user", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            token: sesionJWT,
                        }),
                    });

                    if (response.ok) {
                        const userData = await response.json(); // Espera la respuesta JSON
                        setUser(userData); // Establece los datos del usuario
                    } else {
                        console.error("Error en la respuesta:", response.status);
                        navigate("/login"); // Redirigir al login si hay error
                    }
                } catch (error) {
                    console.error("Error al cargar los datos del usuario:", error);
                    navigate("/login"); // Redirigir al login si hay un error en la red
                }
            } else {
                // Si no hay un usuario en sesión, redirigir al login
                navigate("/login");
            }
        };

        fetchUserData();
    }, [navigate, context.urlHost]); // Asegúrate de incluir context.urlHost como dependencia

    // Cerrar sesión y redirigir al login
    const handleLogout = () => {
        localStorage.removeItem("sesionUsuario"); // Eliminar los datos del usuario de la sesión
        navigate("/login"); // Redirigir al login
    };

    if (!user) {
        return <p>Cargando...</p>; // Muestra esto mientras se cargan los datos del usuario
    }

    return (
        <section className="mt-20 w-full">
            <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center">Mi Cuenta</h1>
                <div className="mt-4">
                    <p><strong>Nombre:</strong> {user.nombre}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
                <div className="mt-6">
                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-500"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Account;

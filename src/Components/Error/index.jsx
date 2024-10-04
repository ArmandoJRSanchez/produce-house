import React from "react";

const LayoutError = ({ errorCode = "404", message = "Oops! The page you're looking for doesn't exist.", redirectPath = "/" }) => {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="text-center">
                {/* Icono de error */}
                <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                {/* Código de error */}
                <h1 className="text-6xl font-bold text-gray-800">{errorCode}</h1>

                {/* Mensaje de error */}
                <p className="text-xl mt-4 text-gray-600">{message}</p>

                {/* Botón de regreso */}
                <div className="mt-6">
                    <a href={redirectPath} className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
                        Reintentar
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LayoutError;

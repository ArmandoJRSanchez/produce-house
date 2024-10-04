<?php
include_once './models/Usuarios.php';
include_once './models/DatosUsuarios.php';
$database = new Database();
$db = $database->getConnection();

$usuario = new Usuario($db);
$helper = new helper();



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($data['registro'])) {
        // Registro de nuevo usuario
        $datosUsuario = new DatosUsuario($db);

        $usuario->usuario = $data['usuario'];
        $usuario->password = $helper->encriptar($data['password']);

        $result = $usuario->registrar();

        if ($result["success"]) {
            // Si el registro es exitoso, también se crean los datos adicionales
            $datosUsuario->id_usuarios_fk_datos_usuarios = $db->lastInsertId();
            $datosUsuario->nombre_completo = $data['nombre_completo'];
            $datosUsuario->direccion = isset($data['direccion']) ? $data['direccion'] : "";
            $datosUsuario->extra = isset($data['extra']) ? $data['extra'] : "";
            $datosUsuario->telefono = isset($data['telefono']) ? $data['telefono'] : "";
            $datosUsuario->empresa = isset($data['empresa']) ? $data['empresa'] : "";
            $datosUsuario->estatus = 'A';

            echo json_encode($datosUsuario->crearDatosUsuario());
        } else {
            echo json_encode($helper->error("No se registro la informacion del usuario.", "Error al registrar usuario."));
        }
    } elseif (isset($data['login'])) {
        // Login de usuario existente
        $usuario = new Usuario($db);
        $usuario->usuario = $data['usuario'];
        $usuario->password = $data['password'];

        $result = $usuario->iniciarSesion();

        if ($result["success"]) {
            session_start();
            $_SESSION['id_usuario'] = $usuario->id_usuario;
            $_SESSION['usuario'] = $usuario->usuario;
            $_SESSION['token'] = $helper->encriptarJWT($usuario->id_usuario, $usuario->usuario);
            
            echo json_encode($helper->success($result["response"], $_SESSION['token']));
        } else {
            echo json_encode($helper->error($result["response"], $result["response"]));
        }
    } elseif (isset($data['token'])){
        echo json_encode($helper->success($helper->desencriptarJWT($data['token'])));
    }
}
?>
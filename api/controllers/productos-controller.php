<?php
include_once './models/Productos.php';
$database = new Database();
$db = $database->getConnection();

$producto = new Producto($db);


switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if (isset($_GET['id'])) {
            $result = $producto->getById($_GET['id']);
            echo json_encode($result);
        } else {
            $result = $producto->getAll();
            echo json_encode($result);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $result = $producto->create($data);
        if ($result) {
            echo json_encode(['success' => true, 'id' => $result]);
        } else {
            echo json_encode(['error' => 'Error al crear el producto']);
        }
        break;

    case 'PUT':
        if (isset($_GET['id'])) {
            $data = json_decode(file_get_contents('php://input'), true);
            if ($producto->update($_GET['id'], $data)) {
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['error' => 'Error al actualizar el producto']);
            }
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            if ($producto->delete($_GET['id'])) {
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['error' => 'Error al eliminar el producto']);
            }
        }
        break;

    default:
        echo json_encode(['error' => 'Método no permitido']);
        break;
}
?>
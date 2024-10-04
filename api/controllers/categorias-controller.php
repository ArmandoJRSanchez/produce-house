<?php
include_once './models/Categorias.php';
$database = new Database();
$db = $database->getConnection();

$categoria = new Categoria($db);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if (isset($_GET['id'])) {
            $result = $categoria->getById($_GET['id']);
            echo json_encode($result);
        } else {
            $result = $categoria->getAll();
            echo json_encode($result);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $result = $categoria->create($data);
        if ($result) {
            echo json_encode(['success' => true, 'id' => $result]);
        } else {
            echo json_encode(['error' => 'Error al crear la categoría']);
        }
        break;

    case 'PUT':
        if (isset($_GET['id'])) {
            $data = json_decode(file_get_contents('php://input'), true);
            if ($categoria->update($_GET['id'], $data)) {
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['error' => 'Error al actualizar la categoría']);
            }
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            if ($categoria->delete($_GET['id'])) {
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['error' => 'Error al eliminar la categoría']);
            }
        }
        break;

    default:
        echo json_encode(['error' => 'Método no permitido']);
        break;
}
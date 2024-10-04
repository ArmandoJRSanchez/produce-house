<?php
class Categoria {
    private $conn;
    private $table_name = "categorias";
    private $helper;

    public function __construct($db) {
        $this->conn = $db;
        $this->helper = new helper();
    }

    // Obtener todas las categorías
    public function getAll() {
        try {
            $query = "SELECT * FROM " . $this->table_name . " WHERE estatus = 1";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            return $this->helper->success("Categorías obtenidas con éxito", $data);
        } catch (PDOException $e) {
            return $this->helper->error($e->getMessage(), "Error al obtener categorías");
        }
    }

    // Obtener una categoría por ID
    public function getById($id) {
        try {
            $query = "SELECT * FROM " . $this->table_name . " WHERE id = ? AND estatus = 1";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(1, $id, PDO::PARAM_INT);
            $stmt->execute();
            $data = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($data) {
                return $this->helper->success("Categoría obtenida con éxito", $data);
            } else {
                return $this->helper->error("Categoría no encontrada", "No se encontró la categoría solicitada");
            }
        } catch (PDOException $e) {
            return $this->helper->error($e->getMessage(), "Error al obtener la categoría");
        }
    }

    // Crear una nueva categoría
    public function create($data) {
        try {
            $query = "INSERT INTO " . $this->table_name . " (nombre, descripcion, fecha_efectiva, estatus, fecha_registro, fecha_actualizacion)
                      VALUES (:nombre, :descripcion, :fecha_efectiva, 1, NOW(), NOW())";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':nombre', $data['nombre']);
            $stmt->bindParam(':descripcion', $data['descripcion']);
            $stmt->bindParam(':fecha_efectiva', $data['fecha_efectiva']);
            
            if ($stmt->execute()) {
                $id = $this->conn->lastInsertId();
                return $this->helper->success("Categoría creada con éxito", ['id' => $id]);
            } else {
                return $this->helper->error("Error al crear la categoría", "No se pudo crear la categoría");
            }
        } catch (PDOException $e) {
            return $this->helper->error($e->getMessage(), "Error al crear la categoría");
        }
    }

    // Actualizar una categoría
    public function update($id, $data) {
        try {
            $query = "UPDATE " . $this->table_name . " 
                      SET nombre = :nombre, descripcion = :descripcion, fecha_efectiva = :fecha_efectiva, estatus = :estatus, fecha_actualizacion = NOW()
                      WHERE id = :id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':nombre', $data['nombre']);
            $stmt->bindParam(':descripcion', $data['descripcion']);
            $stmt->bindParam(':fecha_efectiva', $data['fecha_efectiva']);
            $stmt->bindParam(':estatus', $data['estatus']);
            $stmt->bindParam(':id', $id);

            if ($stmt->execute()) {
                return $this->helper->success("Categoría actualizada con éxito");
            } else {
                return $this->helper->error("Error al actualizar la categoría", "No se pudo actualizar la categoría");
            }
        } catch (PDOException $e) {
            return $this->helper->error($e->getMessage(), "Error al actualizar la categoría");
        }
    }

    // Eliminar (baja lógica) una categoría
    public function delete($id) {
        try {
            $query = "UPDATE " . $this->table_name . " SET estatus = 0, fecha_actualizacion = NOW() WHERE id = :id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':id', $id);

            if ($stmt->execute()) {
                return $this->helper->success("Categoría eliminada con éxito");
            } else {
                return $this->helper->error("Error al eliminar la categoría", "No se pudo eliminar la categoría");
            }
        } catch (PDOException $e) {
            return $this->helper->error($e->getMessage(), "Error al eliminar la categoría");
        }
    }
}
?>
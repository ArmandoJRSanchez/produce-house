<?php
include_once 'Categorias.php';
class Producto {
    private $conn;
    private $table_name = "productos";

    public $id;
    public $nombre;
    public $descripcion;
    public $cantidad;
    public $precio;
    public $categoria_id;
    public $estatus;
    public $fecha_efectiva;
    public $fecha_registro;
    public $fecha_actualizacion;
    private $helper;

    public function __construct($db) {
        $this->conn = $db;

        $this->helper = new helper();
    }

    // Obtener todos los productos
    public function getAll() {
        try {
            $categoria = new Categoria($this->conn);
            
            $query = "SELECT * FROM " . $this->table_name . " WHERE estatus = 1";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

            foreach ($data as $key => $value) {
                $data[$key] = $value;
                $data[$key]["categoria"] = $categoria->getById($value["categoria_id"]);
            }

            if(count($data) > 0){
                return $this->helper->success("Exito en la consulta.", $data);
            }else{
                return $this->helper->success("No hay registros.");
            }
        } catch (PDOException $e) {
            return $this->helper->error("Error: " . $e->getMessage(), "Ocurrio un error al obtener los productos.");
        }
    }

    // Obtener un producto por ID
    public function getById($id) {
        try {
            $query = "SELECT * FROM " . $this->table_name . " WHERE id = ? AND estatus = 1";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(1, $id, PDO::PARAM_INT);
            $stmt->execute();
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if(count($data) > 0){
                return $this->helper->success("Exito en la consulta", $data);
            }else{
                return $this->helper->success("No hay coincidencias para tu busqueda.");
            }
        } catch (PDOException $e) {
            return $this->helper->error("Error: " . $e->getMessage(), "Ocurrio un error al obtener el producto.");
        }
    }

    // Crear un nuevo producto
    public function create($data) {
        try {
            $query = "INSERT INTO " . $this->table_name . " (nombre, descripcion, cantidad, precio, categoria_id, fecha_efectiva, estatus, fecha_registro, fecha_actualizacion)
                      VALUES (:nombre, :descripcion, :cantidad, :precio, :categoria_id, :fecha_efectiva, 1, NOW(), NOW())";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':nombre', $data['nombre']);
            $stmt->bindParam(':descripcion', $data['descripcion']);
            $stmt->bindParam(':cantidad', $data['cantidad']);
            $stmt->bindParam(':precio', $data['precio']);
            $stmt->bindParam(':categoria_id', $data['categoria_id'], PDO::PARAM_INT);
            $stmt->bindParam(':fecha_efectiva', $data['fecha_efectiva']);

            if ($stmt->execute()) {
                return $this->helper->success("Se creo un nuevo producto", $this->conn->lastInsertId());
            }
        } catch (PDOException $e) {
            return $this->helper->error("Error: " . $e->getMessage(), "Ocurrio un error al crear el producto");
        }
    }

    // Actualizar un producto
    public function update($id, $data) {
        try {
            $query = "UPDATE " . $this->table_name . " 
                      SET nombre = :nombre, descripcion = :descripcion, cantidad = :cantidad, precio = :precio, categoria_id = :categoria_id, fecha_efectiva = :fecha_efectiva, estatus = :estatus, fecha_actualizacion = NOW()
                      WHERE id = :id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':nombre', $data['nombre']);
            $stmt->bindParam(':descripcion', $data['descripcion']);
            $stmt->bindParam(':cantidad', $data['cantidad']);
            $stmt->bindParam(':precio', $data['precio']);
            $stmt->bindParam(':categoria_id', $data['categoria_id']);
            $stmt->bindParam(':fecha_efectiva', $data['fecha_efectiva']);
            $stmt->bindParam(':estatus', $data['estatus']);
            $stmt->bindParam(':id', $id);

            if($stmt->execute()){
                return $this->helper->success("Exito en la actualizacion del producto.");
            }else{
                return $this->helper->success("No hubo cambios.");
            }
        } catch (PDOException $e) {
            return $this->helper->error("Error: " . $e->getMessage(), "Ocurrio un error al actualizar el producto.");
        }
    }

    // Eliminar (baja lógica) un producto
    public function delete($id) {
        try {
            $query = "UPDATE " . $this->table_name . " SET estatus = 0, fecha_actualizacion = NOW() WHERE id = :id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':id', $id);

            if($stmt->execute()){
                return $this->helper->success("Se elimino el producto correctamente.");
            }else{
                return $this->helper->success("No se pudo eliminar el producto.");
            }
        } catch (PDOException $e) {
            return $this->helper->error("Error: " . $e->getMessage(), "Ocurrio un error al eliminar el producto.");
        }
    }
}
?>
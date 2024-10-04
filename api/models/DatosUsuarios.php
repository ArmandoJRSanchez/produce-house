<?php
class DatosUsuario {
    private $conn;
    private $table_name = "datos_usuarios";

    public $id_datos_usuario;
    public $nombre_completo;
    public $id_usuarios_fk_datos_usuarios;
    public $direccion;
    public $extra;
    public $telefono;
    public $empresa;
    public $estatus;
    private $helper;

    public function __construct($db) {
        $this->conn = $db;
        $this->helper = new helper();
    }

    // Crear datos de usuario
    public function crearDatosUsuario() {
        try {
            $query = "INSERT INTO " . $this->table_name . " SET 
                nombre_completo=:nombre_completo,
                id_usuarios_fk_datos_usuarios=:id_usuarios_fk_datos_usuarios,
                direccion=:direccion,
                extra=:extra,
                telefono=:telefono,
                empresa=:empresa,
                estatus=:estatus";

            $stmt = $this->conn->prepare($query);

            // Enlazar los valores
            $stmt->bindParam(":nombre_completo", $this->nombre_completo);
            $stmt->bindParam(":id_usuarios_fk_datos_usuarios", $this->id_usuarios_fk_datos_usuarios);
            $stmt->bindParam(":direccion", $this->direccion);
            $stmt->bindParam(":extra", $this->extra);
            $stmt->bindParam(":telefono", $this->telefono);
            $stmt->bindParam(":empresa", $this->empresa);
            $stmt->bindParam(":estatus", $this->estatus);

            if ($stmt->execute()) {
                return $this->helper->success("Usuario creado con éxito");
            }
            return $this->helper->error("No se ejecutó correctamente la consulta.", "Ocurrió un error, inténtalo de nuevo.");
        } catch (PDOException $e) {
            return $this->helper->error("Error en la base de datos", $e->getMessage());
        } catch (Exception $e) {
            return $this->helper->error("Error general", $e->getMessage());
        }
    }

    // Obtener datos del usuario
    public function obtenerDatosUsuario() {
        try {
            $query = "SELECT * FROM " . $this->table_name . " WHERE id_usuarios_fk_datos_usuarios = :id_usuario";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":id_usuario", $this->id_usuarios_fk_datos_usuarios);
            $stmt->execute();

            return $this->helper->success("Datos del usuario cargados con éxito", $stmt);
        } catch (PDOException $e) {
            return $this->helper->error("Error al obtener los datos del usuario", $e->getMessage());
        } catch (Exception $e) {
            return $this->helper->error("Error general", $e->getMessage());
        }
    }
}
?>
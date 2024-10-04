<?php
class Usuario {
    private $conn;
    private $table_name = "usuarios";

    public $id_usuario;
    public $usuario;
    public $password;
    public $estatus;
    private $helper;

    public function __construct($db) {
        $this->conn = $db;
        $this->helper = new helper();
    }

    // Registro de nuevo usuario
    public function registrar() {
        try {
            $query = "INSERT INTO " . $this->table_name . " SET usuario=:usuario, password=:password, estatus=:estatus";

            $stmt = $this->conn->prepare($query);

            $this->estatus = 'A';

            // Enlazar los valores
            $stmt->bindParam(":usuario", $this->usuario);
            $stmt->bindParam(":password", $this->password);
            $stmt->bindParam(":estatus", $this->estatus);

            if ($stmt->execute()) {
                return $this->helper->success("Usuario registrado con éxito");
            }
            return $this->helper->error("Error al ejecutar la consulta", "Ocurrió un error, intenta de nuevo.");
        } catch (PDOException $e) {
            return $this->helper->error("Error en la base de datos", $e->getMessage());
        } catch (Exception $e) {
            return $this->helper->error("Error general", $e->getMessage());
        }
    }

    // Iniciar sesión de usuario
    public function iniciarSesion() {
        try {
            $query = "SELECT * FROM " . $this->table_name . " WHERE usuario = :usuario LIMIT 0,1";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":usuario", $this->usuario);
            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($row && $this->helper->desencriptar($row['password']) == $this->password) {
                // Asignar valores de la base de datos a las propiedades del objeto
                $this->id_usuario = $row['id_usuario'];
                $this->estatus = $row['estatus'];
                return $this->helper->success("Login exitoso");
            }
            
            return $this->helper->error("Falla en el login", "Credenciales inválidas, intenta de nuevo.");
        } catch (PDOException $e) {
            return $this->helper->error("Error en la base de datos", $e->getMessage());
        } catch (Exception $e) {
            return $this->helper->error("Error general", $e->getMessage());
        }
    }
}
?>
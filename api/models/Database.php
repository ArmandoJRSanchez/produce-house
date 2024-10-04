<?php
class Database {
    
    private $host;
    private $db_name;
    private $username;
    private $password;
    public $conn;
    private $mode = 'DEV';

    public function getConnection() {
        $this->conn = null;
        global $ambiente;
        switch ($this->mode) {
            case 'PROD':
                $this->host = "localhost:3306";
                $this->db_name = "produce_house";
                $this->username = "root";
                $this->password = "rosa001206";
                $ambiente = "PROD";
                break;
            default:
                $this->host = "localhost:3306";
                $this->db_name = "produce_house";
                $this->username = "root";
                $this->password = "rosa001206";
                $ambiente = "LOCAL";
                break;
        }

        
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            echo "Error de conexión: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
?>
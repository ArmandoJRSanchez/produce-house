<?php 
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Firebase\JWT\ExpiredException;
class helper 
{

    /**
     * Helper para la api
     *
     * Esta función toma la informacion para procesar la respuesta del servidor.
     *
     * @param array $data array de datos de la consulta.
     * @param string $msgExterno Mensaje que se mostrara cuando estemos en producción
     * @return array El array que se convertira en el json de respuesta.
     */
    function success($msgExterno, $data = null){       
        $data = array(
            'success' => true,
            'response' => $msgExterno,
            'data' => $data,
        );

        return $data;
    }

    
    /**
     * Helper para la api
     *
     * Esta función toma la informacion para procesar la respuesta de error del servidor.
     *
     * @param array $data array de datos de la consulta.
     * @param string $msgInterno Mensaje que se mostrara cuando estemos debugueando
     * @param string $msgExterno Mensaje que se mostrara cuando estemos en producción
     * @return array El array que se convertira en el json de respuesta.
     */
    
    function error($msgInterno, $msgExterno, $data = null){
        $mensaje = ($_SERVER['HTTP_HOST'] == "localhost:8080") ? $msgExterno : $msgInterno;
        
        
        $data = array(
            'success' => false,
            'response' => $mensaje,
            'data' => $data,
        );

        return $data;
    }

    /**
   * Encripta un valor utilizando el algoritmo aes-256-cbc.
   *
   * @param string $valor El valor a encriptar.
   * @return string El valor encriptado.
   */
  public function encriptar($valor)
  {
    $clave = 'produce-house';
    //Metodo de encriptación
    $method = 'aes-256-cbc';
    // Puedes generar una diferente usando la funcion $getIV()
    $iv = base64_decode("ProduceH@use2024IvApp24");
    /*
			Encripta el contenido de la variable, enviada como parametro.
		*/
    $encrypted = openssl_encrypt($valor, $method, $clave, false, $iv);
    $encoded = bin2hex($encrypted);
    return $encoded;
    //echo $encriptar("Mensajerías y Estrategias DEV");
    //echo $desencriptar(urldecode("GZ47aTllazI%2FfbOBOl75%2Bw%3D%3D"));
  }
  /**
   * Desencripta un valor encriptado utilizando el algoritmo aes-256-cbc.
   *
   * @param string $valor El valor encriptado a desencriptar.
   * @return string|null El valor desencriptado, o null si el valor está vacío o nulo.
   */
  public function desencriptar($valor)
  {
    $clave = 'produce-house';
    $method = 'aes-256-cbc';
    $iv = base64_decode("ProduceH@use2024IvApp24");

    // Verificar que el valor no sea nulo y que sea una cadena
    if (is_string($valor)) {
      // Verificar que el valor tenga longitud par y que sea una cadena hexadecimal
      if (strlen($valor) % 2 == 0 && strlen($valor) > 0 && $valor != '0' && ctype_xdigit($valor)) {
        $valor = hex2bin($valor);
        return openssl_decrypt($valor, $method, $clave, false, $iv);
      }
    }

    // En caso contrario, simplemente retornar el valor sin cambios
    return $valor;
  }

 
function encriptarJWT($id, $user) {
    $key = "secretKey-2-produceHouse"; 
    $payload = [
        "iss" => "localhost",
        "aud" => "localhost",
        "iat" => time(),
        "exp" => time() + 3600, // El token expira en 1 hora
        "data" => [
            "id" => $id,
            "email" => $user
        ]
    ];

    // Generar el JWT
    return JWT::encode($payload, $key, 'HS256');
}

function desencriptarJWT($jwt) {
    $key = "secretKey-2-produceHouse";
    
    try {
        // Decodificar el JWT
        $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
        
        // Retornar los datos decodificados
        return (array) $decoded;
    } catch (ExpiredException $e) {
        return "El token ha expirado.";
    } catch (Exception $e) {
        return "Error al decodificar el token: " . $e->getMessage();
    }
}
    
}
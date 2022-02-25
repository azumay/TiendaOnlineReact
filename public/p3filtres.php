<?php
  $taules = ['marca','tipus','emmagatzematge','processador','ram','polzades','grafica'];
  try {
    foreach ($taules as $key => $value){
      $sql = "SELECT * FROM ".$value;
      $dbh = new PDO('mysql:host=localhost;dbname=cataleg;charset=utf8','m8', 'yamuza');
      $sth = $dbh->prepare($sql);
      $sth->execute();
      while($result = $sth->fetch(PDO::FETCH_ASSOC)){
        $data[$value][] = $result;
      }
    }
    $sth = null;
    $dbh = null;
  } catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
  }
    echo json_encode($data,JSON_PRETTY_PRINT);

/*--------------------------------------------------------------
-------------------------------------------------------------*/
    // function mysqlConn () {
    //   $conn = new mysqli('127.0.0.1', 'cataleg', 'Thos*2019', 'cataleg');
    //   if ($conn->connect_errno) {
    //     echo "error 1";
    //     exit;
    //   } else {
    //     return $conn;
    //   }
    // }
    // $conn = mysqlConn();
    // $data = [];
    // foreach ($taules as $key => $value){
    //   if (!$res = $conn->query("SELECT * FROM ".$value)) {
    //     echo "No s\'ha pogut realitzar la consulta";
    //     exit;
    //   }
    //   if ($res->num_rows === 0) {
    //     echo "No s\ha recuperat cap resultat";
    //   }
    //   while ($resultat = $res->fetch_assoc()){
    //      $data[$value][] = $resultat;
    //   }
    // }
    //  echo json_encode($data,JSON_PRETTY_PRINT);
    //  $res->free();
    //  $conn->close();
     //------------------

<?php
require_once('../../../database/connection.php');

$query = "SELECT * FROM users";
$result = mysqli_query($db_connection, $query);
$row = mysqli_fetch_row($result);

foreach ($row as $register) {
    echo $register . "\n";
}

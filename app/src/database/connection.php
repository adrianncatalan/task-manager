<?php
require('./db_config.php');

$db_connection = mysqli_connect(
    $db_host,
    $db_user,
    $db_password,
    $db_name,
    $db_port
);

if (!$db_connection) die('Error connecting to the database!' . mysqli_connect_error());

if (!mysqli_select_db($db_connection, $db_name)) {
    die("Incorrect database name: " . mysqli_error($db_connection));
}

mysqli_set_charset($db_connection, "utf8");

echo 'Successful database connection!';

mysqli_close($db_connection);

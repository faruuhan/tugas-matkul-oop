<?php
include "koneksi.php";

mysql_query("DELETE FROM dokter WHERE id_dokter='$_POST[vid]'");
?>
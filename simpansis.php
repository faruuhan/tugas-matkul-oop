
<?php
include "koneksi.php";

mysql_query("INSERT INTO dokter
(id_dokter,nama_dokter,jenis_dokter,spesialis,telepon,alamat)
	VALUES('$_POST[vid]','$_POST[vnama]','$_POST[vjenis]','$_POST[vspe]',
	'$_POST[vtelepon]','$_POST[valamat]')");
?>

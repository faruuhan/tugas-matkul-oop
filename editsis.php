<?php
include "koneksi.php";

mysql_query("Update dokter set nama_dokter='$_POST[vnama]',jenis_dokter='$_POST[vjenis]',spesialis='$_POST[vspe]',
			telepon='$_POST[vtelepon]',alamat='$_POST[valamat]' 
	  Where id_dokter='$_POST[vid]'");
?>
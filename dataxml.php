<?php
header('Content-Type: text/xml');
include "koneksi.php";
$q=$_GET["q"];
$sql="SELECT * FROM dokter WHERE nama_dokter like '%".$q."%'";
$result = mysql_query($sql);
echo '<?xml version="1.0" encoding="ISO-8859-1"?>';
while($row = mysql_fetch_array($result))
 {
 echo "<biodata>";
 echo "<id_dokter>" . $row['id_dokter'] . "</id_dokter>";
 echo "<nama_dokter>" . $row['nama_dokter'] . "</nama_dokter>";
 echo "<jenis_dokter>" . $row['jenis_dokter'] . "</jenis_dokter>";
 echo "<spesialis>" . $row['spesialis'] . "</spesialis>";
 echo "<telepon>" . $row['telepon'] . "</telepon>";
 echo "<alamat>" . $row['alamat'] . "</alamat>";
 echo "</biodata>";
 }
mysql_close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Data Dokter</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">-->
  <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>-->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="ajaxsis.js"></script> 
<script type="text/javascript" src="responsexml.js"></script>
</head>
<body>

<div class="container">
 <center> <h1>FORM DOKTER</h1></center><br><br>
  <form action="" method="post">
  
  <div class="form-group">
    <label class="control-label col-sm-2">ID Dokter </label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  placeholder="ID Doter" name="vid" id="vid">
	 
    </div>
  </div>
  <br>
  
   <div class="form-group">
    <label class="control-label col-sm-2">Nama Dokter </label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  placeholder="Nama Dokter" name="vnama" id="vnama">
	   <input class="btn btn-danger btn-lg btn-block" type="button" value="cari" onClick="showData(vnama.value)">
    </div>
  </div>
  <br>
  
  <div class="form-group">
	<label class="control-label col-sm-2">Jenis Dokter  </label><br>
      <div class="col-sm-10">
      <select name="vjenis" id="vjenis" class="form-control">
		<option value="umum">Umum</option>
		<option value="spesialis">Spesialis</option>
	  </select>
    </div>
    </div>
  <br>
  
    <div class="form-group">
	<label class="control-label col-sm-2">Spesialis</label><br>
      <div class="col-sm-10">
      <select name="vspe" id="vspe" class="form-control">
		<option value="penyakitdalam">Penyakit Dalam</option>
		<option value="mata">Mata</option>
		<option value="obgent">Obgent</option>
		<option value="kulitdankelamin">Kulit dan Kelamin</option>
		<option value="jantung">Jantung</option>
		<option value="syaraf">Syaraf</option>
	  </select>
    </div>
    </div>
	
		<div class="form-group">
    <label class="control-label col-sm-2">Telepon </label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  placeholder="Telepon" name="vtelepon" id="vtelepon">
    </div>
  </div>
	
	
	<div class="form-group">
     <label class="control-label col-sm-2">Alamat  </label>
	 <div class="col-sm-10">
	 <input type="textarea" class="form-control" rows="2" placeholder="Alamat" name="valamat" id="valamat">
 
</div> 
</div> 
	

    <input type="button" class="btn btn-primary" name="submit" value="Save" onclick="doSavedokter(); return false;" />
  <input type="button" class="btn btn-danger" name="update" value="Update" onclick="doUpdokter(); return false;" />
  <input type="reset" class="btn btn-primary" value="reset">
  <input class= "btn btn-danger"  type = "BUTTON" value = "DELETE" onclick="doDeldokter(); return false;" />
  </form>
</div>

</body>
</html>

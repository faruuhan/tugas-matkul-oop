var xmlHttp;
function showData(str)
 { 
 xmlHttp=GetXmlHttpObject();
 if (xmlHttp==null)
  {
  alert ("Browser does not support HTTP Request");
  return;
  } 
 var url="dataxml.php";
 url=url+"?q="+str;
 //url=url+"&sid="+Math.random();
 xmlHttp.onreadystatechange=stateChanged;
 xmlHttp.open("GET",url,true);
 xmlHttp.send(null);
 }
 function stateChanged() 
{ 
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
{
 xmlDoc=xmlHttp.responseXML;
 try{
     var x=xmlDoc.getElementsByTagName("biodata");
    }
    catch(err)
     {
      document.write("Sorry, an error has occurred");
     }
	 if (x.length==0)
  {
   alert("Tidak ada data untuk ID tsb");
   return false;
  }
 id_dokter= xmlDoc.getElementsByTagName("id_dokter")[0].childNodes[0].nodeValue;
 nama_dokter= xmlDoc.getElementsByTagName("nama_dokter")[0].childNodes[0].nodeValue;
 jenis_dokter= xmlDoc.getElementsByTagName("jenis_dokter")[0].childNodes[0].nodeValue;
 spesialis= xmlDoc.getElementsByTagName("spesialis")[0].childNodes[0].nodeValue;
 telepon= xmlDoc.getElementsByTagName("telepon")[0].childNodes[0].nodeValue;
 alamat= xmlDoc.getElementsByTagName("alamat")[0].childNodes[0].nodeValue;
 document.getElementById("vid").value=id_dokter;
 document.getElementById("vnama").value=nama_dokter;
 document.getElementById("vjenis").value=jenis_dokter;
 document.getElementById("vspe").value=spesialis;
 document.getElementById("vtelepon").value=telepon;
 document.getElementById("valamat").value=alamat;
}
}
function GetXmlHttpObject()
{ 
 var objXMLHttp=null;
 if (window.XMLHttpRequest)
  {
  objXMLHttp=new XMLHttpRequest();
  }
 else if (window.ActiveXObject)
  {
  objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 return objXMLHttp;
}
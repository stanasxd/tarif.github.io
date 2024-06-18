function yeni_nesne(){
    var nesneyarat;
    /*@cc_on @*/
    /*@if (@_jscript_version >= 5) try { nesneyarat = new ActiveXObject("Msxml2.XMLHTTP"); }
    catch (e) {
        try { nesneyarat = new ActiveXObject("Microsoft.XMLHTTP"); }
        catch (E) { nesneyarat = false; }
    }@end @*/
    if (!nesneyarat && typeof XMLHttpRequest!='undefined') {
     try {
      nesneyarat= new XMLHttpRequest();
     } catch (e) {
      nesneyarat=false;
     }
    }
    return nesneyarat;
}

function AoL(id,cikti,hedef) {
    var aktifform  = document.getElementById(id);
    var ekranayaz  = document.getElementById(cikti);
    var ciktiver   = new String("");
    var name, value;
   for(var i = 0; i < aktifform.elements.length; i++){
            name  = aktifform.elements[i].name;
            value = aktifform.elements[i].value;
            ciktiver += escape(name) +'='+ encodeURIComponent(value) +'&';
} 
var nesneiste = new yeni_nesne(); 
nesneiste.open("post", hedef, true); 
nesneiste.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
 nesneiste.send(ciktiver);
document.getElementById('sonuc').innerHTML = '<p align="center"><img src="/img/loading.gif"/></p>';
    var temizle  = document.getElementById('form').reset();  
nesneiste.onreadystatechange = function() { 
if (nesneiste.readyState == 4 && nesneiste.status == 200) { 
ekranayaz.innerHTML = nesneiste.responseText;

} 
else { ekranayaz.innerHTML = ''; } 
} 
return false; 
}
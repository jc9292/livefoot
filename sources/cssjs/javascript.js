function newajx(func1) {
        var ajx=null;
        if (window.XMLHttpRequest) { ajx=new XMLHttpRequest(); }
        else if (window.ActiveXObject) {
                try { ajx=new ActiveXObject("Msxml2.XMLHTTP"); }
                catch (e) { ajx=new ActiveXObject("Microsoft.XMLHTTP"); }
        }
        if (ajx) {
                if (func1!='') {
                        ajx.onreadystatechange = function(){
                        	alert('ready:'+ajx.readyState+' '+ajx.status);
                                if (ajx.readyState==4 && ajx.status==200) { eval(func1+'(ajx);'); }
                        }
                }
                return ajx;
        }
        return false;
}
function getarts() {
	var dat1=new Date();
	var ajx1=newajx('getartsok');
        if (ajx1) {
                ajx1.open("GET", 'http://vps33679.ovh.net/livefoot2/lf.json', true);
                ajx1.send('ts='+dat1.getTime());
        }
        alert('appelok');
}
function getartsok(ajx1) {
		alert('repOK');
	eval('var d=['+ajx1.responseText+'];');
	var c=d[0];
	var txt1='';
	for (i=0; i<c.length; i++) {
	        txt1+='<li><a target=_blank href="'+c[i][3]+'"><time><span class="d">'+c[i][0]+'</span>';
		txt1+='<span class="m">&nbsp;</span><span class="y">'+c[i][1]+'</span></time>';
	        txt1+='<h3 class="title3">'+c[i][2]+'</h3></a></li>';
	}
	txt1+='<li class="more"><a href="index/?pag=2"><p>Plus de Br�ves</p></a></li>';
	document.getElementById('listb').innerHTML=txt1;
}
getarts(); // recuperere les articles
var dat1=new Date();
jembe.http.get({
    url:'http://vps33679.ovh.net/livefoot2/lf.json',
    data : 'ts='+dat1.getTime(),
    callback:getartsok,
    onError:getartsok
});

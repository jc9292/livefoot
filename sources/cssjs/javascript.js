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
                                if (ajx.readyState==4 && ajx.status==200) { eval(func1+'(ajx);'); }
                        }
                }
                return ajx;
        }
        return false;
}

function saklar(params) {
    
    let Lampu1 = document.getElementById ("Lampu1");

    if (params =="on") {
        Lampu1.src="on.gif";
    }
    if (params =="off") {
        Lampu1.src="off.gif";
    }
    return Lampu1
    ;
}



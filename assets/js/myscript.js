function myfun()
{
    var radios = document.forms["formA"].elements["myradio"];
    for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        alert(this.value);
    }
}
    alert($('input[name="name_of_your_radiobutton"]:checked').val());
    Console.log($('input[name="name_of_your_radiobutton"]:checked').val());
}

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

function getCars()
{

    $('input[type="radio"]').each(function(){
        var $this = $(this);
        var val = "";
        var caracteristica = "";
        var text = "";
        var space="<br>"

        if($this.is(":checked")){
            val = $this.attr("value");
            caracteristica = $this.attr("name");
            console.log(caracteristica+ " : "+val);
            text = caracteristica+ " : "+val;
           $('h5[id="Text"]').append(text + space);

        }

    });
}

function getCants()
{
    
    $("input:checkbox").each(function(){
        var $this = $(this);
        var id = 0;
        var cant = 0;
        var text = "";
        var space="<br>"
        
        if($this.is(":checked")){
            id = $this.attr("id");

            cant = $('select[id="'+id+"_dd"+'"]').val();
            console.log(id+ " : "+cant);
            text = id+ " : "+cant;

            $('h5[id="Text"]').append(text + space);

        }
    });
}







var server = 
'https://localhost:44354';
//'http://buildyourgift.ninaserver.com';

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

            cant = $('input[id="'+id+"_dd"+'"]').val();
            console.log(id+ " : "+cant);
            text = id+ " : "+cant;

            $('h5[id="Text"]').append(text + space);

        }
    });
}

function getDeliveryDataSummary() {
    $("input:text").each(function () {
        var text = "";
        var space = "<br>"
        text = $(this).attr("placeholder") + " : " + $(this).val();
        $('h5[id="Text"]').append(text + space);
    });
    $("input[type='tel']").each(function () {
        var text = "";
        var space = "<br>"
        text = $(this).attr("placeholder") + " : " + $(this).val();
        $('h5[id="Text"]').append(text + space);
    });
    $("input[type='email']").each(function () {
        var text = "";
        var space = "<br>"
        text = $(this).attr("placeholder") + " : " + $(this).val();
        $('h5[id="Text"]').append(text + space);
    });
    $("input[type='datetime-local']").each(function () {
        var text = "";
        var space = "<br>"
        text = $(this).attr("placeholder") + " : " + $(this).val();
        $('h5[id="Text"]').append(text + space);
    });
}

function getDeliveryDataSummaryEnhanced(delivery) {
    var text = "";
    var space = "<br>"
    text = key + " : " + value;

    $('h5[id="Text"]').append(text + space);
}

function postDelivery() {
    var today = new Date();
    today.setDate(today.getDate());

    var delivery =
    {
        id: 0,
        submittedDate: today,
        eta: $("#delivery_dateTime").val(),
        productStatus:
        {
            currentStatus: 0
        },
        chocolates:
        {
            listItems: getOrderableList(["Ferrero", "KitKat", "HersheysChocolateConleche30g", "HersheysCookiesNCream30g", "HersheysDark40g", "KinderBueno"]),
            type: 0,
            typeName: "Chocolates"
        },
        flowers:
        {
            listItems: getOrderableList(["Girasoles", "RosaRoja", "RosaCrema", "RosaArcoiris", "RosaAzul", "RosaBlanca", "RosaAmarilla", "RosaSalmon", "GerberaBlanca", "RosaRoja2", "GerberaArcoiris", "RosaRosa2"]),
            type: 0,
            typeName: "Flowers"
        },
        base:
        {
            id: 0,
            name: $("input[name='Base']:checked").val(),
            quantity: 1
        },
        box:
        {
            size:
            {
                id: 0,
                name: $("input[name='Medida']:checked").val(),
                quantity: 1
            },
            model:
            {
                id: 0,
                name: $("input[name='Modelo']:checked").val(),
                quantity: 1
            },
            color:
            {
                id: 0,
                name: $("input[name='Color']:checked").val(),
                quantity: 1
            }
        },
        contact:
        {
            id: 0,
            name: $("#contact_name").val(),
            email: $("#contact_email").val(),
            phone: $("#contact_phone").val(),
            whatsapp: $("#contact_whatsapp").val(),
            address: $("#delivery_address").val()
        }
    };

    //console.log("About to post:");
    //console.log(JSON.stringify(delivery));

    $.ajax({
        type: "POST",
        data: JSON.stringify(delivery),
        url: server + "/api/delivery",
        contentType: "application/json",
        crossDomain: true,
        headers: {
            'Access-Control-Allow-Headers': 'x-requested-with'
        },
        success: function (data) {
            console.log("exito guardando los datos:)");
            console.log(data);

        },
        error: function (data) {
            console.log("nein leyendo los datos :(");
            console.log(data);
        }
    });

}

function getOrderableList(orderableList) {
    var listItems = [];

    orderableList.forEach(
        function (orderable) {
            var item1 =
            {
                id: 0,
                name: "",
                quantity: 3
            };
            console.log(orderable);
            if ($('#' + orderable).is(":checked")) {
                console.log("checked");
                console.log($('input[id="' + orderable + "_dd" + '"]').val());
                item1.id = 0;
                item1.name = orderable;
                item1.quantity = parseInt($('input[id="' + orderable + "_dd" + '"]').val());

                listItems.push(item1);
            }
            else {
                item1.id = 0;
                item1.name = orderable;
                item1.quantity = 0;
                console.log("not checked");
            }
            //move listItems.push(item1) here if wordier json is desired
        }
    );
    return listItems;
}

function validate() {
    return true;
}

function loadListItems(list)
{
    list.listItems.forEach(function (item, indice, array) {
        $("#" + item.name.replace(/ +/g, "")).attr('checked', 'checked');
        $("#" + item.name.replace(/ +/g, "") + "_dd").show();
        $("#" + item.name.replace(/ +/g, "") + "_dd").val(item.quantity);
    });
}

function loadData(data)
{    
    console.log("loading chocolates");
    loadListItems(data.chocolates);
    console.log("loading flowers");
    loadListItems(data.flowers);
}

window.onload = function()
{
    const queryString = window.location.search;
    console.log("qs: " + queryString);
    if(queryString.length == 0)
        return;
    $.ajax({
        type: "GET",
        url: server + "/api/delivery" + queryString,
        contentType: "application/json",
        crossDomain: true,
        headers: {
            'Access-Control-Allow-Headers': 'x-requested-with'
        },
        success: function (data) {
            console.log("exito leyendo los datos :)");
            console.log(data);
            //setTimeout(() => { loadData(data); }, 1000);
            loadData(data); 
        },
        error: function (data) {
            console.log("nein leyendo los datos :(");
            console.log(data);
        }
    });
}
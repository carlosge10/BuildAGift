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

function getDelivery()
{
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
            listItems: getOrderableList(["FerreroRocher", "Raffaellochocolate", "HersheysChocolateConleche30g", "HersheysCookiesNCream30g", "HersheysDark40g", "KinderBueno", "Kindermaxi", "Kinderchocolate", "Huevokinder", "Kinderdelice", "KitKat", "Conejos_turin", "Turin_cerezas", "Turin_baileys", "Turin_1800", "Turin_JW", "Turin_JC", "Miniaturas_herseys", "Kisses_chocolate", "Kisses_almendra", "Kisses_cookies", "Herseys_bites", "Herseys_bites_almendra", "Herseys_bites_cookies", "Mnm_natural", "Mnm_cacahuate", "Mnm_minis", "Snickers", "Milky_way", "Pelon_PP", "Pulparindo", "skwinkles"]),
            type: 0,
            typeName: "Chocolates"
        },
        flowers:
        {
            listItems: getOrderableList(["Girasoles", "RosaRoja", "RosaCrema", "Rosa_rosado_1", "Rosa_rosado_2", "Rosa_rosado_3", "Rosa_rosado_4", "RosaAmarilla", "RosaArcoiris", "RosaBlanca", "RosaAzul", "GerberaArcoiris", "GerberaBlanca", "GerberaAmarilla", "Gerbera_Rosa", "GerberaRoja", "Solidago", "Astromelia_blanco", "Leticia_blanca", "Hortencia_blanca"]),
            type: 0,
            typeName: "Flowers"
        },
        base:
        {
            listItems: getOrderableList(["Chinablanco","Chinarojo","ChinaNaranja1","ChinaNaranja2","Chinaamarillo","ChinaVerde1","ChinaVerde2","Chinaazul1","Chinaazul2","Chinamorado1","Chinamorado2","Chinarosa1","Chinarosa2","Chinarosa3"]),
            type: 0,
            typeName: "Base"
        },
        box:
        {
            size:
            {
                id: 0,
                name: $("input[name='Box']:checked").val(),
                quantity: 1
            },
            model:
            {
                id: 0,
                name: $("input[name='Box']:checked").val(),
                quantity: 1
            },
            color:
            {
                id: 0,
                name: $("input[name='Box']:checked").val(),
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
        },
        photo:  $('input[type="file"]').val().replace(/C:\\fakepath\\/i, ''),
        message: $("#mensaje").val(),
        price: 1000.5 
    };
    return delivery;
}

function getDeliveryDataSummaryEnhanced(delivery) {
    console.log("delivery:")
    console.log(delivery);
    var text = "";
    var space = "<br>";
    var tab = "&nbsp;&nbsp;&nbsp;&nbsp;";
    //text = text + "key : " + delivery.key.value + space;
    text = text + "Fecha de Entrega : " + delivery.eta + space;
    text = text + "Lugar de Entrega : " + delivery.contact.address + space;
    text = text + "Box : " + delivery.box.model.name + space;
    text = text + "Base : " + space;
    if (delivery.base.listItems.length > 0){
        delivery.base.listItems.forEach(function(item)
        {
            text = text + tab + item.name + ": " + item.quantity + space;
        });
    }
    else
    {
        text = text + tab + "--SIN BASE :(--" + space;
    }
    text = text + "Chocolates : " + space;
    if (delivery.chocolates.listItems.length > 0){
        delivery.chocolates.listItems.forEach(function(item)
        {
            text = text + tab + item.name + ": " + item.quantity + space;
        });
    }
    else
    {
        text = text + tab + "--SIN CHOCOLATES :(--" + space;
    }
    text = text + "Flores : " + space;
    if (delivery.flowers.listItems.length > 0){
        delivery.flowers.listItems.forEach(function(item)
        {
            text = text + tab + item.name + ": " + item.quantity + space;
        });
    }
    else
    {
        text = text + tab + "--SIN FLORES :(--" + space;
    }
    text = text + "Contacto : " + delivery.contact.name + space;
    text = text + "Foto : " + delivery.photo + space;
    text = text + "Mensaje : " + delivery.message + space;
    $('h5[id="Text"]').append(text + space);
}

function postDelivery(delivery) {
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
            console.log("nein guardando los datos :(");
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
                quantity: 1
            };
            if ($('#' + orderable).is(":checked")) {
                //if input with orderable id is checked, then, we look for its input for number 
                var e = $('input[id="' + orderable + "_dd" + '"]');
//                console.log(e.val());
                item1.id = 0;
                item1.name = orderable;
                //if input for number is there, then we can retrieve the value, other wise it is only checked and we set it to 1
                item1.quantity = (isNaN(parseInt(e.val()))) ? 1 : parseInt(e.val());
//                console.log(item1);
                listItems.push(item1);
            }
            else {
                item1.id = 0;
                item1.name = orderable;
                item1.quantity = 0;
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
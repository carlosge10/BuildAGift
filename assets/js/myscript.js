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

function postDelivery()
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
            listItems: getOrderableList(["Ferrero", "KitKat", "Hersheys"]),
            type: 0,
            typeName: "Chocolates"
        },
        flowers:
        {
            listItems: getOrderableList(["Rosas", "Girasoles", "Tulipanes"]),
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
        url: "https://localhost:44354/api/delivery",
        contentType: "application/json",
        crossDomain: true,
        headers: {
            'Access-Control-Allow-Headers': 'x-requested-with'
        },
        success: function (data)
        {
            console.log("exito :)");
            console.log(data);
        },
        error: function (data)
        {
            console.log("nein :(");
            console.log(data);
        }
    });

}

function getOrderableList(orderableList) {
    var listItems = [];

    orderableList.forEach(
        function (orderable)
        {
            var item1 =
            {
                id: 0,
                name: "",
                quantity: 3
            };
            console.log(orderable);
            if ($('#' + orderable).is(":checked")) {
                console.log("checked");
                console.log($('select[id="' + orderable + "_dd" + '"]').val());
                item1.id = 0;
                item1.name = orderable;
                item1.quantity = parseInt($('select[id="' + orderable + "_dd" + '"]').val());
                //move listItems.push(item1) here if less wordy json is desired
            }
            else
            {
                item1.id = 0;
                item1.name = orderable;
                item1.quantity = 0;
                console.log("not checked");
            }
            listItems.push(item1);
        }
    );
    return listItems;
}

function validate()
{
    return true;
}


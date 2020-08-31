//Wizard Init

$("#wizard").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "none",
    stepsOrientation: "vertical",
    titleTemplate: '<span class="number">#index#</span>'
});

//Form control

$('.purpose-radio-input').on('change', function(e) {
    $('#business-type').text(e.target.value);
});

$('#firstName').on('change', function(e) {
    $('#enteredFirstName').text(e.target.value || 'Cha');
});

$('#lastName').on('change', function(e) {
    $('#enteredLastName').text(e.target.value || 'Ji-Hun C');
});

$('#phoneNumber').on('change', function(e) {
    $('#enteredPhoneNumber').text(e.target.value || '+230-582-6609');
});

$('#emailAddress').on('change', function(e) {
    $('#enteredEmailAddress').text(e.target.value || 'willms_abby@gmail.com');
});

$('input[name="radioMedida"]').on('change', function(e)
{
    console.log($('input[name="radioMedida"]:checked').val());
});

$('input[name="radioModelo"]').on('change', function(e)
{
    console.log($('input[name="radioModelo"]:checked').val());
});

$('input[name="radioColor"]').on('change', function(e)
{
    console.log($('input[name="radioColor"]:checked').val());
});

$('input[type="checkbox"]').on('change', function(e)
{

    //console.log($(this).attr('id'));
    //console.log(this.checked);
    var dd = $(this).attr('id') + "_dd";
    if(this.checked)
    {
        //console.log("checked");
        $("#"+dd).show();
        $("#"+dd).val(1);
    }
    else
    {
        //console.log("not checked");
        $("#"+dd).hide();
        $("#"+dd).val("");
    }
});


$('button[name=Cancelar]').on('click', function (e) {
    $('h5[id="Text"]').empty();
    $('h5[id="Errors"]').empty();
    $('h5[id="Success"]').empty();
});

$('a[href="#finish"]').on('click', function(e)
{
    $('h5[id="Text"]').empty();
    $('h5[id="Errors"]').empty();
    $('h5[id="Success"]').empty();
    if (isValid()) {
        //        getCars();
        //        getCants();
        //        getDeliveryDataSummary();
        getDeliveryDataSummaryEnhanced(getDelivery());
        $("button[name=Aceptar]").show();
    }
    else
    {
        $("button[name=Aceptar]").hide();
    }
    $('#Modal').modal('show');
});

$('button[name="Aceptar"]').on('click', function (e) {
    console.log("Posting...");
    postDelivery(getDelivery);
    $('#Modal').modal('hide');
    $('h5[id="Success"]').append("Felicidades! Te contactaremos enseguida para cotizar tu arreglo perzonalizado y darle seguimiento a tu pedido!");
    $('#Success').modal('show');
});

$('button[name="Cancelar"]').on('click', function (e) {
    console.log("Borrando");
    $('h5[id="Text"]').empty();
    $('#Modal').modal('hide');
});

$('button[name="Aceptar_"]').on('click', function (e) {
    $('#Success').modal('hide');
    window.location.href = "index.html";
});
//$("button[name=Aceptar]").on('click', function (e) {

//    $('#Modal').modal('hide');
//    $('h5[id="Text"]').empty();
//    $('h5[id="Errors"]').empty();
//    $('h5[id="Success"]').empty();
//    $('#Modal').modal('show');
//});






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


$('a[href="#finish"]').on('click', function(e)
{
    $('h5[id="Text"]').empty();
    if (validate())
    {
//        getCars();
//        getCants();
//        getDeliveryDataSummary();
        getDeliveryDataSummaryEnhanced(getDelivery());
        $('#Modal').modal('show');
    }
});








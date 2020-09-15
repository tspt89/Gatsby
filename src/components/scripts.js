$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});
function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var last = $("#last").val();
    var email = $("#email").val();
    var message = $("#cel").val();

    $.ajax({
        type: "POST",
        url: "process.php",
        data: "name=" + name + "last=" + last + "&email=" + email + "&cel=" + cel,
        success : function(text){
            if (text == "success"){
                //formSuccess();
                var messageAlert = 'alert-' + text.type;
                var messageText = text.message;

                // let's compose Bootstrap alert box HTML
                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                
                 // If we have messageAlert and messageText
                if (messageAlert && messageText) {
                    // inject the alert to .messages div in our form
                    $('#contactForm').find('.msgSubmit').html(alertBox);
                    // empty the form
                    $('#contactForm')[0].reset();
                }
            }
        }
    });
}
function formSuccess(){
    //$( "#msgSubmit" ).removeClass( "hidden" ); 
}
function submitMSG(valid, msg){
    var msgClasses;
if(valid){
    msgClasses = "h3 text-center tada animated text-success";
} else {
    msgClasses = "h3 text-center text-danger";
}
$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
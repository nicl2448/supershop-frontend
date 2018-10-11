function createNewSuit(){

    var Name = $("#createName" ).val();
    var Type = $("#createType" ).val();
    var Price = $( "#createPrice" ).val();
    var Description = $( "#createDescription" ).val();
    var ImageUrl = $( "#createImageUrl" ).val();

    $.ajax({
        url: "https://supersuit3.azurewebsites.net/api/supersuit",
        type: 'POST',
        data: JSON.stringify({
            "Name": Name,
            "Type": Type,
            "Price": Price,
            "Description": Description,
            "ImageUrl": ImageUrl}),
        processData: false,
        contentType: 'application/json',
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}
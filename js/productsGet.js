function getSuits() {
    // Call Web API to get a list of post
    $.ajax({
        url: 'https://supersuit3.azurewebsites.net/api/supersuit',
        type: 'GET',
        dataType: 'json',
        success: function (suits) {
            // onGetOneCustomersSuccess(customers);
            onGetSuitsSuccess(suits);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

function onGetSuitsSuccess(suits) {
    // Iterate over the collection of data
    $.each(suits, function (index, suit) {
        // Add a row to the post table
        addSuitProduct(suit);
    });
}

function addSuitProduct(suit) {
    // Append product to <productbox>
    $("#productbox").append(buildProduct(suit));
}

function buildProduct(suit) {
    var ret =
"<div id=" + "product"+ suit.id +">" +
        "<div class='product_img'>" +
        "<img src=" + suit.imageUrl + " alt=''>" +
        "</div>" +
        "<h2>" + suit.name + "</h2>" +
    "<button class='button'>se mere</button>" +
    "</div>";

    return ret;
}


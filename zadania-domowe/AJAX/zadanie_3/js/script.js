console.log("Warsztat - (jQuery) Pobierz dane po kliknięciu przycisku");

$(document).ready(function () {

    console.log("JQuery ready");


    $("#get-data").click(function () {
        // wariant 1
        //   //  console.log("click get-data");

        //     $.get('https://akademia108.pl/api/ajax/get-post.php')
        //     .done(function (data){
        //     //    console.log(data)

        //         let pID = $('<p></p>').text(`Post ID: ${data.id}`);
        //         let pUserID = $('<p></p>').text(`User ID: ${data.userId}`);
        //         let pTitle = $('<p></p>').text(`Title: ${data.title}`);
        //         let pBody = $('<p></p>').text(`Body: ${data.body}`);
        //         let hr = $('<hr  />');

        //         let jqBody = $('body');
        //         jqBody.append(pID);
        //         jqBody.append(pUserID);
        //         jqBody.append(pTitle);
        //         jqBody.append(pBody);
        //         jqBody.append(hr);
        //     })
        //     .fail(function(error){
        //         console.error(error);
        //     });
        // });

        //wariant 2
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                // console.log(data)

                let pID = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserID = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $('<hr  />');

                let jqBody = $('body');
                jqBody.append(pID);
                jqBody.append(pUserID);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);
            })
            .fail(function (error) {
                console.error(error);
            });
    });
});
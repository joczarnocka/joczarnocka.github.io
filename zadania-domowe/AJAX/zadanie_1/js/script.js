$(document).ready(function () {

    btn_get_data = $("#get-data");

    btn_get_data.click(function(){


    $.ajax({
        url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
        statusCode: {
            200: function() {
                console.log(`OK - wszystko gra :)`);
            }
        },
    })
    .done(function(data) {
    
        // console.log(data);
        var obj = JSON.parse(data);
  
        // console.log(obj ["imie"]);
        // console.log(obj ["nazwisko"]);
        // console.log(obj ["zawod"]);
        // console.log(obj ["firma"]);    
        newDiv = $("<div></div>"); 
        newDiv.attr('id','dane-programisty'); 
        console.log('Dlugosc: ' + $('#dane-programisty').length );
        if ($('#dane-programisty').length === 0){
            btn_get_data.after(newDiv);
        }
        newDiv.text(`imię: ${obj ["imie"]}, nazwisko: ${obj ["nazwisko"]}, zawód: ${obj ["zawod"]}, firma: ${obj ["firma"]}`);
    })
    .fail(function(error) {
        console.error(error);
    })
})
});
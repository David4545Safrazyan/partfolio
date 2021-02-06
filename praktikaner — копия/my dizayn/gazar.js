$(document).ready(function () {

    // $('#korcnrl1').css('display', 'none')

    let users = [];

    if (users.length !== 0) {
        let usersJson = JSON.stringify(users);
        localStorage.setItem('usersStorage', usersJson);
    }

    $("#submit").click(function () {
        let login = $("#login").val();
        let password = $("#pass").val();

        let userStogage = localStorage.getItem('usersStorage');
        let users = JSON.parse(userStogage);
        if (users == null) {
            users = [];
        }

        for (key of users) {
            if (login && password && key.name == login && key.pass == password) {
                $('#korcnrl1').show(1000);
                $('#login12234').hide(1000);
                 $('#loginBlock').hide(1000);
            }
        }

        $("#login").val("");
        $("#pass").val("");
    });

    $("#reg").click(function () {
        let login2 = $("#login2").val();
        let password2 = $("#pass2").val();
        let password3 = $("#pass3").val();

        if (password2 == password3) {

            let userStogage = localStorage.getItem('usersStorage');
            let users = JSON.parse(userStogage);
            if (users == null) {
                users = [];
            }

            users.push({
                name: login2,
                pass: password2
            })

            let usersJson = JSON.stringify(users);
            localStorage.setItem('usersStorage', usersJson);
        }

        $("#login2").val("");
        $("#pass2").val("");
    });

    $("#regBlock").hide();
    $("#toReg").click(function () {
        $("#loginBlock").hide();
        $("#regBlock").show();
    });
    $("#toLogin").click(function () {
        $("#regBlock").hide();
        $("#loginBlock").show();
    });





// let count = 1;

//     $('#plyus').on('click',function(){
//         let price = +($(this).closest('#pr').find('#price').text());
//         price += count;
//         $(this).closest('.pr').find('#price').text(price);
//     });

//     $('#minus').on('click',function(){
//         let price = +($(this).closest('#pr').find('#price').text());
//         if(price != 0){
//             price -= count;
//             $(this).closest('#pr').find('#price').text(price);
//         };
//     });
// })



let count = 1;

    $('.plyus').on('click',function(){
        let price = +($(this).closest('.pr').find('.price').text());
        price += count;
        $(this).closest('.pr').find('.price').text(price);
    });

    $('.minus').on('click',function(){
        let price = +($(this).closest('.pr').find('.price').text());
        if(price != 0){
            price -= count;
            $(this).closest('.pr').find('.price').text(price);
        };
    });


let ttt = 1;

    $('.plyus').on('click',function(){
        let price = +($(this).closest('.pr').find('.price').val());
        price += ttt;
        $(this).closest('.pr').find('.price').val(price);
    });

    $('.minus').on('click',function(){
        let price = +($(this).closest('.pr').find('.price').val());
        if(price != 0){
            price -= ttt;
            $(this).closest('.pr').find('.price').val(price);
        };
    });






});



// $(document).ready(function(){
//     $('.clickable').click(function(){
//         let id  = this.id;
//         $.ajax({
//             url: 'https://jsonplaceholder.typicode.com/users/' + id,
//             success : function(response){
//                 console.log(response);
//             },
//             error: function(error){
//                 console.log(error)
//             }
//     });

// });
// });
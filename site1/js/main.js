$(document).ready(function(){
    $("#header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('#form').submit(function(){
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/users",
            data: $(this).serialize()
        }).done(function(){
            Swal.fire(
                'Good job!',
                'We will call back to you!',
                'success'
              )
        });
        return false;
    });
});
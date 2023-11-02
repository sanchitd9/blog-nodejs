$(function(){
    var current = location.pathname;
    console.log(current);
    $('#header nav a').each(function(){
        if($(this).attr('href').indexOf(current) !== -1){
            $(this).addClass('active');
        }
    })
})

$(".btn-outline-danger").on("click", (event) => {
    var post_id = event.target.id;
    $.ajax({
        url: `/delete_post/${post_id}`,
        type: "DELETE",
        success: (response, status) => {
            window.location.href = "/posts";
            console.log(response);
            console.log(status);
        },
        failure: (response, status) => {

        }
    });
});

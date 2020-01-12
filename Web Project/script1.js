$(".nav-link").click(function(){
    let name="#"+($(this).text());
    $(name).toggleClass("hidden");
});
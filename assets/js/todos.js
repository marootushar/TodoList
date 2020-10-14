$("ul").on("click","li",function(){
    $(this).toggleClass("changeState");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("#addTodo").on("click",function(){
    $("input").fadeToggle(100,function(){
        $("i").toggleClass("fa-plus");
        $("i").toggleClass("fa-minus");
    });
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " +todoText+"</li>")
    }
});

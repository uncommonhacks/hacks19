$(document).ready(function(){
    $('.faqq').click(function() {
        if ($(this).next().css("display") == "block") {
            $(".off").css("display", "none");
        }
        else {
            $(".off").css("display", "none");
            $(this).next().css("display", "block");
        }
    });
 });
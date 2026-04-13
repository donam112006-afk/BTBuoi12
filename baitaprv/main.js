$(document).ready(function() {
    

    $(".banner-section img").hide().fadeIn(2000);


    $(window).scroll(function() {
        $(".tour-card").each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 4;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({'opacity': '1', 'margin-top': '0px'}, 600);
            }
        });
    });


    $(".tour-card").hover(
        function() {
            $(this).find("img").css("transform", "scale(1.1)");
            $(this).find(".view-detail-btn").css("background", "#ff6b6b");
        }, 
        function() {
            $(this).find("img").css("transform", "scale(1)");
            $(this).find(".view-detail-btn").css("background", "linear-gradient(135deg, #2c7a7b, #1f5a5b)");
        }
    );

    $(".view-detail-btn").click(function(e) {
        // Nếu href chưa có link thật (đang để #), sẽ hiện thông báo
        if($(this).attr("href") === "#") {
            e.preventDefault();
            alert("Thông tin chi tiết về tour này đang được cập nhật!");
        }
    });
});
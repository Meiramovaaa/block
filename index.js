

(() => {
    $(".list-wrapper").click(function () {
        if ($(this).children()[1].classList.contains("active")) {
            // $(this).children()[1].style.maxHeight = 0;
            setTimeout(() => {
                $(this).removeClass("active");
                $(this).children()[1].classList.remove("active");
            }, 200);
    
            return;
        }
        $(this).children()[1].classList.add("active");
        $(this).addClass("active");
        // $(this).children()[1].style.maxHeight =
        //     $(this).children()[1].scrollHeight + "px";
    });
    })();
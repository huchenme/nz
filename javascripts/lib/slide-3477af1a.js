!function(){jQuery(function(){return $(".cover-arrow-container").click(function(){return $(".slide-container").moveDown()}),$(window).resize(function(){return $(".slide__style_hvh .aspect_3_2").verticalCenter(".aspect_2_3"),$(".slide__style_1_2 .pright").sameHeight(".pleft")}),$(window).trigger("resize"),$("video").on("play",function(){return $(this).css({"z-index":1}),$(this).closest(".video_container").find(".video-indicator").css({"z-index":20})})}),$.fn.sameHeight=function(e){return $(this).each(function(){var t;return t=$(this).closest(".slide").find(e).outerHeight(),$(this).css({height:t})})},$.fn.verticalCenter=function(e){return $(this).each(function(){var t;return t=$(this).closest(".slide").find(e).outerHeight(),$(this).css({"margin-top":(t-$(this).outerHeight())/2})})}}.call(this);
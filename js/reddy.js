(function ( $ ) {
    $.fn.reddy = function ( options ) {
        var settings = $.extend({
            container: "section"
        }, options);
        $(settings.container).each(function(){
            var sectionHeight = ($(':first-child', this).outerHeight() + $('.navbar').outerHeight());
            if (sectionHeight > $(window).height()) {
                $(this).css('height', 'auto');
            } else {
                $(this).css('height', $(window).innerHeight());
            }
        });
        $(window).resize(function(){
            $(settings.container).css('height', 'auto');
            $(settings.container).each(function(){
                var sectionHeight = ($(':first-child', this).outerHeight() + $('.navbar').outerHeight());
                if (sectionHeight < $(window).innerHeight()) {
                    $(this).css('height', $(window).height());
                } else {
                    $(this).css('height', 'auto');
                }
            });
        });
    };
}( jQuery ));
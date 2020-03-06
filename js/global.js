/**
 * Created by Puneet Sehgal on 20/09/2015.
 */
var global = (function () {
    return {
        resize:function(height){
            height = $(window).height();
            $('.section-wrapper, .after').css({'height':height+'px'});
            return height;
        },
        smoothScroll:function(){
                $('.main-menu').click(function() {
                    $('.header, .hamburger-menu').removeClass('open');
                    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            $('html,body').animate({
                                scrollTop: target.offset().top
                            }, 2000);
                            return false;
                        }
                    }
                });
        },
        typing: {
            lettersLoop:function(textString, conditionTest, className, tag) {
                $.each(textString.split(''), function (i, letter) {
                //we add 100*i ms delay to each letter
                    setTimeout(function () {
                        ((textString===conditionTest)?
                            global.typing.splitTextOne(i,letter): global.typing.splitTextTwo(i,letter, className,tag));
                        //var  range = (100 -(-100)) + 1;
                        //var left = Math.floor((Math.random() * range) +(-20));
                        TweenMax.set('.letter' + i, {top: -50, left: -20, opacity: 0});
                        TweenMax.to('.letter' + i, .1, {delay: .3, top: 0, left: 0, opacity: 1});
                    }, 100 * i);
                });
            },
            splitTextOne: function (i, letter) {
                ((i <= 5) ? $('.name h1').append('<i class="letter' + i + '">' + letter + '</i>') :
                    $('.name h1 span').append('<i  class="letter' + i + '">' + letter + '</i>'));
                if (i === 5) {
                    $('.name h1').append('<span></span>');
                }
            },
            splitTextTwo: function (i, letter, className, tag) {
                $('.'+className+' '+tag).append('<i class="letter' + i + '">' + letter + '</i>');
            }
        },
        animateFog: function ($row) {
            var holder_widths = $(window).width() + 600;
            TweenLite.to($row, 30, {
                x: holder_widths, ease: Linear.easeInOut, scale: .7, opacity: .3,
                onComplete: function () {
                    $row.remove();
                }
            });
        },
        cloudsAnimation : function(){
            var intervalTime = 200, imgPath='_assets/images/';
            var clouds = function() {
                var $row = $(document.createElement('img')); // create image element
                $row.addClass('fogImg'); // add class duck in image tag
                $row.css({'position': 'absolute', 'top': '0', 'height': '85%', 'left': '-45rem', opacity: .5}); // setting up duck initial position
                $row.attr('src', imgPath + 'fog.png');
                $('.fog').append($row);
                global.animateFog($row); // call animate Duck function
                clearInterval(refreshIntervalId); // clear interval function
                intervalTime = 4000; // resetting interval time for different distance between ducks
                refreshIntervalId = setInterval(clouds, intervalTime);
            }
            var refreshIntervalId = setInterval(clouds, intervalTime);
        }
    };
})();
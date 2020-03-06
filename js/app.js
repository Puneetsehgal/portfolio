// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
var app = angular.module("myApp", []);
$(document).foundation();
var App = (function () {
    /*****************************************************************
     Drag Image Disable
     ********************************************************************/
    $('img').mousedown(function () {
        return false;
    });

    var p = global; // set global variable

    var height;
    TweenMax.ticker.useRAF(false);
    TweenMax.lagSmoothing(0);
    /****************************************
     * Set scoll to Top O on refresh page
     */
    $(window).load(function(){
        $(this).scrollTop(0);
    });

    /*****************************************************************
     * Resize page container height when window height changes
     */
        p.resize(height);
       $(window).resize(function(){
           p.resize(height);
       });

    /***********************************************8
     * Smotth Scroll
     */
        p.smoothScroll();

    /*******************************
     * Intro Logo Animation
     */
    TweenMax.to('.logo-container',.5,{blurFilter:{blurX:0, blurY:20},delay:.8, y:0, opacity:1, rotationX:0, ease:Quad.easeOut,
        onComplete:function(){
            var text = "PuneetSehgal", text2 = "Web Developer"
            p.typing.lettersLoop(text,text, 'name','h1');
            p.typing.lettersLoop(text2,text,'name','h3');
        }
    });

    /********************************************************
     * Interval function for clouds
     */
        p.cloudsAnimation();
    /********************************************************
     * Time Zone
     */
       //p.timeZone();
    var blurElement = {a:0};//start the blur at 0 pixels
    /********************************************************
     * Window scroll function
     */
    $(window).scroll(function() {
        if($(document).scrollTop() >= 10) {
                TweenMax.to(blurElement, 0, {a: 11, onUpdate: applyBlur});
                TweenMax.to('.home-nav',.4,{left:0, delay:0.2});
        }
        else {
            TweenMax.to(blurElement, 0, {a: 0, onUpdate: applyBlur});
            TweenMax.to('.home-nav',.4,{left:'-15rem',delay:0.2});
        }
        if($(document).scrollTop() >= p.resize()-200) {
            TweenMax.to('.about-me h1', .4, {delay:0.2,x:0,opacity:1, ease:Linear.easeInOut})
            TweenMax.to('.about-me h3', .4, {delay:0.2, x:0,opacity:1, ease:Linear.easeInOut})
            TweenMax.to('.about-me p', .4, {delay:0.2, y: 0,opacity:1, ease:Linear.easeInOut})
            TweenMax.to('.resume', .2, {delay:.3, x: 0, ease:Linear.easeInOut});
        }
        else{
            TweenMax.to('.about-me h1', .4, {delay:0.2,x:-1200, opacity:0, ease:Linear.easeInOut})
            TweenMax.to('.about-me h3', .4, {delay:0.2, x:1300,opacity:0, ease:Linear.easeInOut})
            TweenMax.to('.about-me p', .4, {delay:0.2, y: 600,opacity:0, ease:Linear.easeInOut})
            TweenMax.to('.resume', .2, {delay: 0.3, x: 3000, ease:Linear.easeInOut});
        }
        if($(document).scrollTop() >= (p.resize()+p.resize())-350 && $(document).scrollTop() <= (p.resize()+p.resize()-330)) {$('#container').mixItUp('sort', 'random');}
    });

    /*******************************88
     * Blur Function
     */
    function applyBlur()
    {
        TweenMax.set(['#home'], {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});
    };
    /********************************************************
     * Call mixItUp function for work page thumbnails
     */
    $(function() {
        $('#container').mixItUp();
        $(' #da-thumbs > li ').each( function() { $(this).hoverdir({
            hoverDelay : 0
        }); } );

    });
    /********************************************************
     * Reveal modal animation on contact button clicked
     */
    $('.contact-button').on('click',function(){
        TweenMax.set('.reveal-modal',{y:'-800'});
        TweenMax.to('.reveal-modal', .3, {y:0});
    });
    /********************************************************
     * Hamburger toggle class on click
     */
    $('.hamburger-menu').on('click',function(){
        $('.header, .hamburger-menu').toggleClass('open');
    })
    /********************************************************
     * Light Box Fix
     */
    $('.category-photoshop a').on('click', function () {
        setTimeout(function () {
            $(window).trigger('resize');
        }, 200);
    });
});

$(document).ready(function () {
    //'use strict';
    new App();
    /**********************
     * TweenMax Set
     */
    TweenMax.to('body',.1,{delay:.1,opacity:1});
    TweenMax.set('.home-nav',{left:'-15rem', delay:0.2});
    TweenMax.set('.about-me h1',{delay:0.2,x:-1200, opacity:0.5, ease:Linear.easeInOut})
    TweenMax.set('.about-me h3',{delay:0.2, x:1300,opacity:0.5, ease:Linear.easeInOut})
    TweenMax.set('.about-me p',{delay:0.2, y: 600,opacity:0.5, ease:Linear.easeInOut})
    TweenMax.set('.resume',{delay: 0.3, x: 700, ease:Linear.easeInOut});
    TweenMax.set('.logo-container',{rotationX:90, y:-27, opacity:0, transformOrigin: '50% 100%',transformPerspective: 600});
});
var $=jQuery.noConflict();$(function(){var screen=$(window);var nav_height=$("#navbar-home[data-height]").data("height");$("#navbar-home[data-height]").css('height',nav_height);$.fn.anibar_menu=function(){var current_dropdown=$(this).next(".dropdown-menu");var item=$('.navbar[data-drop="animate"]').data("item");console.log(item);if(item=='single'){current_dropdown.children(".menu-item").each(function(index){ctr=(index+1)*60;if(nav_animate_mov=='rotatex'){$(this).css("animation",'rotateX 400ms '+ctr+'ms ease-in-out forwards');}
if(nav_animate_mov=='dropy'){$(this).css("animation",'slideDown 300ms '+ctr+'ms ease-in-out forwards');}
if(nav_animate_mov=='translatez'){$(this).css("animation",'rotateZ 300ms '+ctr+'ms ease-in-out forwards');}
if(nav_animate_mov=='scale'){$(this).css("animation",'scaleZ 300ms '+ctr+'ms ease-in-out forwards');}
if(nav_animate_mov=='rampxy'){$(this).css("animation",'translateX 300ms '+ctr+'ms ease-in-out forwards');}});}
if(item=='group'){if(nav_animate_mov=='rotatex'){current_dropdown.css("animation",'rotateMenu 400ms ease-in-out forwards');}
if(nav_animate_mov=='dropy'){current_dropdown.css("animation",'growDown 300ms ease-in-out forwards');}
if(nav_animate_mov=='translatez'){current_dropdown.css("animation",'downOut 300ms ease-in-out forwards');}
if(nav_animate_mov=='scale'){current_dropdown.css("animation",'growOut 300ms ease-in-out forwards');}
if(nav_animate_mov=='rampxy'){current_dropdown.css("animation",'rotateY 300ms ease-in-out forwards');}}}
var nav_animate_hover='.navbar[data-drop="animate"][data-trigger="hover"]';if(document.querySelector(nav_animate_hover)){var nav_animate_mov=$(nav_animate_hover).data("move");$(nav_animate_hover+' .dropdown-item-0').hover(function(e){$(this).anibar_menu();});}
var nav_animate_click='.navbar[data-drop="animate"][data-trigger="click"]';var nav_animate_drop=$(nav_animate_click).data("drop");if(document.querySelector(nav_animate_click)){var nav_animate_mov=$(nav_animate_click).data("move");$(nav_animate_click+' .dropdown-item-0').removeAttr("href");$(nav_animate_click+' .dropdown-item-0').click(function(e){var current_dropdown=$(this).next(".dropdown-menu");$(".dropdown-menu").not(current_dropdown).removeClass("shown");current_dropdown.toggleClass("shown");$(this).anibar_menu();return false});$(document).click(function(e){var target=e.target;if(nav_animate_drop=='animate'){$('.dmenu-0').removeClass("shown");}});}
var normal_click='.navbar[data-trigger="click"]';var normal_click_drop=$(normal_click).data("drop");if(document.querySelector(normal_click)){if(normal_click_drop!='animate'){$(normal_click+' .dropdown-item-0').removeAttr("href");$(normal_click+' .dropdown-item-0').click(function(e){var en=normal_click_drop;var current_dropdown=$(this).next(".dropdown-menu");if(en=='default'){$(".dropdown-menu").not(current_dropdown).hide();current_dropdown.toggle();}
if(en=='slide'){$(".dropdown-menu").not(current_dropdown).slideUp();current_dropdown.slideToggle();}
if(en=='fade'){$(".dropdown-menu").not(current_dropdown).fadeOut();current_dropdown.fadeToggle();}
return false;});$(document).click(function(e){var target=e.target;if(normal_click_drop=='default'){$('.dmenu-0').hide();}
if(normal_click_drop=='slide'){$('.dmenu-0').slideUp();}
if(normal_click_drop=='fade'){$('.dmenu-0').fadeOut();}});}}
var normal_hover='.navbar[data-trigger="hover"]';var normal_hover_drop=$(normal_hover).data("drop");if(document.querySelector(normal_hover)){if(normal_hover_drop!='animate'){$(normal_hover+' .dropdown').hover(function(e){if(normal_hover_drop=='default'){}
if(normal_hover_drop=='slide'){$(this).children(".dmenu-0").stop().slideToggle();}
if(normal_hover_drop=='fade'){$(this).children(".dmenu-0").stop().fadeToggle();}});}}
var navfloat=document.querySelector("#navbar-float");if(navfloat){$(window).scroll(function(){if($(this).scrollTop()>nav_height){$('#navbar-float').addClass("float-menu-show");}else{$('#navbar-float').removeClass("float-menu-show");}});}
var stickyhead=document.querySelector('header[data-sticky="sticky"]');if(stickyhead){if(!navfloat){$(window).scroll(function(){if($(this).scrollTop()>nav_height){$('.header-menu').addClass("sticky-head");$('.header-menu').removeClass("ontop");}else{$('.header-menu').removeClass("sticky-head");$('.header-menu').addClass("ontop");}});}}
$('.menu-oc-right').click(function(){$('body').toggleClass('remove_scroll');});$('.menu-oc-right.opener').click(function(){$('#menu-oc-right').addClass('active');$('#menu-oc-right').removeClass('inactive');});$('.menu-oc-right.closer').click(function(){$('#menu-oc-right').addClass('inactive');$('#menu-oc-right').removeClass('active');});var chev_right='<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-3x"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>';$(".mobile-menu .dropdown-menu").before('<a class="m-toggler">'+chev_right+'</a>');$(".mobile-menu .m-toggler").click(function(e){e.stopPropagation();$(this).toggleClass("active");$(this).siblings(".dropdown-menu").slideToggle();$(this).siblings(".dropdown-menu").toggleClass("active");});$('.mobile-menu a.dropdown-item, .mobile-menu .nav-link').each(function(){var mobtitle='Mobile '+$(this).attr("title");$(this).attr("title",mobtitle);});$('.mobile-menu .dropdown-toggle[href="#"]').each(function(e){$(this).removeAttr("href");$(this).click(function(e){e.stopPropagation();$(this).toggleClass("active");$(this).siblings(".dropdown-menu").slideToggle();$(this).siblings(".dropdown-menu").toggleClass("active");});});$(window).scroll(function(){if($(this).scrollTop()>80){$('.scroll-up').fadeIn();}else{$('.scroll-up').fadeOut();}});$('.scroll-up a').click(function(){$('html, body').animate({scrollTop:0},800);return false;});$('.top-search a').click(function(e){e.preventDefault();$(this).toggleClass('active');$(this).parent().children('.show-search').fadeToggle(function(){$('html').bind('click',function(){$('.show-search').fadeOut(function(){$('html').unbind('click');});$('.top-search a').removeClass('active');});$('.show-search').bind('click',function(e){e.stopPropagation();});});});if(!$.fn.modal){console.log("Bootstrap is NOT loaded");}else{console.log("Bootstrap is loaded");$('.dropdown-item-0.dropdown-toggle').removeAttr("data-toggle");}});
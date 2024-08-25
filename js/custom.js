(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
		
		  $("#Layer_1 > g > g > g:nth-child(1) > path").hover(function(){
			
		  $("#Layer_1 > g > g > g:nth-child(1) > g > g  path.st2").toggleClass("svg-hover");
		  
		  });
		  
		  
		  $("#Layer_1 > g > g > g:nth-child(2) > path").hover(function(){
			 
		  $("#Layer_1 > g > g > g:nth-child(2) > g > g  path.st2").toggleClass("svg-hover");
		  
		  });
		  
		  $("#Layer_1 > g > g > g:nth-child(3) > path").hover(function(){
			 
		  $("#Layer_1 > g > g > g:nth-child(3) > g > g  path.st2").toggleClass("svg-hover");
		  
		  });
  
			  $("#Layer_1 > g > g > g:nth-child(1) > path").click(function(){
	 
  window.open("https://strateos.com/strateos-control-our-lab/","_self");
  
  });
  
  
  
  
  
  $("#Layer_1 > g > g > g:nth-child(2) > path").click(function(){
	 
   window.open("https://strateos.com/strateos-control-your-lab/","_self");
  
  });
  
  $("#Layer_1 > g > g > g:nth-child(3) > path").click(function(){
	 
	 window.open("https://strateos.com/strateos-build-your-lab/","_self");
  
  });
  
		
		
				
					/*hide div on scroll 
					
					function hideScroller() {
						var div1 = $('#form');
						var div2 = $('#scroll-to-contacts');

						var div1FromTop = div1.offset().top;
						var div2FromTop = $(window).scrollTop()+$(window).height();

						if (div1FromTop <= div2FromTop) div2.hide(2000); 
						else div2.show(2000);
					}
					
					
						
					$(window).scroll(function () {
						
						hideScroller();
					});
					

					/*End hide div on scroll */

		
		
		
		
				if (window.location.hash) {
					
					var hash = window.location.hash;
					
					

					if ($(hash).length) {
						
						
						$('html, body').animate({
							scrollTop: $(hash).offset().top-200
						}, 1000);
					}
				}
				
				var $root = $('html, body');

				//$('li.vc_tta-tab > a').css("background","red");

				
				$('a[href^="#"]').not( 'li.vc_tta-tab > a[href^="#"]').not('.vc_tta-panel-title > a').not('a.right').not('a.left').not('li.videobox>a').not('a.videobox').click(function (e) {
					
					 e.preventDefault();
					//alert("hashssas"+window.location.hash);
					$root.animate({
						scrollTop: $( $.attr(this, 'href') ).offset().top-150
					}, 1000);

					return false;
				});
				//alert(window.location.hash);
				
				
				
								
											
		
		//set here the speed to change the slides in the carousel
				$('#myCarousel').carousel({
						interval: 500000,
						 pause: "hover"
				});
						
				//Loads the html to each slider. Write in the "div id="slide-content-x" what you want to show in each slide
				$('#carousel-text').html($('#slide-content-0').html());
		 
				//Handles the carousel thumbnails
			   $('[id^=carousel-selector-]').click( function(){
					var id = this.id.substr(this.id.lastIndexOf("-") + 1);
					var id = parseInt(id);
					$('#myCarousel').carousel(id);
				});
		 
				// When the carousel slides, auto update the text
				$('#myCarousel').on('slid.bs.carousel', function (e) {
						 var id = $('.item.active').data('slide-number');
						$('#carousel-text').html($('#slide-content-'+id).html());
				});
		
		
		 
		
		
		$(document).on("click", ".video1", function () {
			var vid1 = document.getElementById("video1"); 
			vid1.play();
			 
		});
		
		$(document).on("click", ".video2", function () {
			var vid2 = document.getElementById("video2"); 
			vid2.play();
			 
		});
		
		$(document).on("click", ".video3", function () {
			var vid3 = document.getElementById("video3"); 
			vid3.play();
			 
		});
		
		$(document).on("click", ".video4", function () {
			
			$("#video_modal4").modal("show");
			var vid4 = document.getElementById("video4"); 
			vid4.play();
			 
		});
		
		
		$(document).on("click", ".video5 > a", function () {
			
			$("#video_modal4").modal("show");
			var vid4 = document.getElementById("video4"); 
			vid4.play();
			 
		});
		
		$("#video_modal4").on("hide.bs.modal", function () {
			
			
			
			
			 document.getElementById("video4").pause(); 
			
		});
		
		$("#video_modal3").on("hide.bs.modal", function () {
			
			 document.getElementById("video3").pause(); 
			
		});
		
		$("#video_modal2").on("hide.bs.modal", function () {
			
			 document.getElementById("video2").pause(); 
			
		});
		$("#video_modal").on("hide.bs.modal", function () {
			
			 document.getElementById("video1").pause(); 
			
		});
		
		$("#video_modal").on("show.bs.modal", function () {
			
			 document.getElementById("v1src").src="https://f.hubspotusercontent10.net/hubfs/3391010/Website%20URLs/Videos/Employee%20Spotlight%20Videos/Ash/EmployeeSpotlightVideo%20Strateos%20_%20Ash%20Jogalekar.mp4";
			 document.getElementById("video1").load();
			
		});
		
		
		$("#video_modal2").on("show.bs.modal", function () {
			
			 document.getElementById("v2src").src="https://f.hubspotusercontent10.net/hubfs/3391010/Website%20URLs/Videos/Employee%20Spotlight%20Videos/Kendall/HD_1080_CS49%20_%20Strateos%20_%20Kendall%20Gebhardt.mp4";
			 document.getElementById("video2").load();; 
			
		});
		
		
		$("#video_modal3").on("show.bs.modal", function () {
			
			 document.getElementById("v3src").src="https://f.hubspotusercontent10.net/hubfs/3391010/Website%20URLs/Videos/Employee%20Spotlight%20Videos/Dan%20S/CS60%20_%20Strateos%20_%20Daniel%20Sipes.mp4";
			 document.getElementById("video3").load();; 
			
		});
		
		
		$("#video_modal4").on("show.bs.modal", function () {
			
			 document.getElementById("v4src").src="https://go.strateos.com/hubfs/Website%20URLs/Videos/Site%20Videos/San%20Diego%20Matterport%20Walkthrough%20SEP%202021%20V2.mp4";
			 document.getElementById("video4").load();; 
			
		});
		
		
		
		 
		
		$(document).on("click", "#footerlinksmodal", function () {
			$('#footermodal').modal('show');
			 
		});
		
		/*video pop up js */
		
		$("#video_popup_modal").on("hide.bs.modal", function () {
			
			 $(this).find("video").get(0).pause();
			
		});
		
		function playFile() {
            $(".stopvideo").not(this).each(function () {
                $(this ).get(0).pause();
            });
            this[this.get(0).paused ? "play" : "pause"]();
        }
		
				
		$(document).on("click", ".video_fire_popup", function (event) {
			
			event.preventDefault();
			
			//alert("ss");
			var videourl = $(this).data('url');
			 document.getElementById("videopop").src=videourl;
			 document.getElementById("mainvideopop").load();
			 document.getElementById("mainvideopop").play();
			 playFile.call(document.getElementById("mainvideopop"));
			});
		/*video pop up end */
		
		
		/*video Embeed Code js */
				
		$(document).on("click", ".video_popup_embeed", function (event) {
			
			event.preventDefault();
			
			//alert("video_popup_embeed");
			var videourl = $(this).data('url');
			var videoid = $(this).data('id');
			 $("#vf"+videoid).hide();
			
			 
			  document.getElementById("embedmainvideo"+videoid).style="display:block";
			  
			  document.getElementById("embedvideopop"+videoid).src=videourl;
			 
			  document.getElementById("embedmainvideo"+videoid).load();
			  document.getElementById("embedmainvideo"+videoid).play();
			 
			  playFile.call(document.getElementById("embedmainvideo"+videoid));
			
			 
			});
		/*video Embeed Code end */
		
		$(document).on("click","#carousel-text > div.st-text > p:nth-child(2) > span", function(){
	 
	 console.log("ss");
  $(this).hide(10);
  
  
  $(this).parent().parent().css("cssText", "overflow: auto !important;");
  $(this).parent().parent().css("cssText", "height: fit-content !important;");
  });
		
		
		/* modal box hubpsot form render */
		$(document).on("click", ".pouter", function (event) {
			
			event.preventDefault();
			
			//alert("ss");
			var postId = $(this).data('url');
			//var postId = 1;
			 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=resourcemodal&id="+postId,
			cache: false,
			
				beforeSend: function(){
					jQuery("#product-details").html("<center><img src='https://strateos.com/wp-content/uploads/2019/09/1_CsJ05WEGfunYMLGfsT2sXA.gif' id='loading-image' /> </center>");
				},
			
			success: function (response) {
				
			   console.log(response);
			   jQuery("#product-details").html(response.slice(0,-1));
				
				
			},
			complete: function(){
				//$('#product-details').hide();
			  }
		});
			});
		/*end */
		
		
		/* team ajax call */
		jQuery(".stafflink").on("click", function (event ) {
		event.preventDefault();
		
		 var postId = $(this).data('id');
		 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=my_ajax_action&id="+postId,
			cache: false,
				beforeSend: function(){
					jQuery("#team-details").html("<center><img src='https://strateos.com/wp-content/uploads/2019/09/1_CsJ05WEGfunYMLGfsT2sXA.gif' id='loading-image' /> </center>");
				},
			
			success: function (response) {
				
			   console.log(response);
			   jQuery("#team-details").html(response);
				
				
			},
			complete: function(){
				$('#loading-image').hide();
			  }
		});
		
		$('#loading-image').show();
		
		});
		/*end */
		
		
		
		/* productsheets ajax call */
		jQuery("#productsheets").on("click", function (event ) {
		event.preventDefault();
		
		 var postId =  document.querySelector('#productsheets').getAttribute('data-value');

		
		 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=my_ajax_action1&id="+postId,
			cache: false,
			
										
			success: function (response) {
				
			  // console.log(response);
			  response=response.trim();
			  var lastChar = response[response.length -1];
			  
			  jQuery("#productsheetsloadmore").append(response.slice(0,-1));
			  
			   //alert(lastChar);
			  $("#productsheets").attr('data-value',lastChar);
			  if(lastChar==0)
			  {
				 
				  jQuery("#productsheets").remove();
			  }

			   
				
				
			},
			
		});
		
		
		
		});
		/*end */
		
		
		
		/* events ajax call */
		jQuery("#strateosevents").on("click", function (event ) {
		event.preventDefault();
		
		 var postId =  document.querySelector('#strateosevents').getAttribute('data-value');

		
		 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=my_ajax_action9&id="+postId,
			cache: false,
			
										
			success: function (response) {
				
			  // console.log(response);
			  response=response.trim();
			  var lastChar = response[response.length -1];
			  
			  jQuery("#strateos-events").append(response.slice(0,-1));
			  
			   //alert(lastChar);
			  $("#strateosevents").attr('data-value',lastChar);
			  if(lastChar==0)
			  {
				 
				  jQuery("#strateosevents").remove();
			  }

			   
				
				
			},
			
		});
		
		
		
		});
		/*end */
		
		
		
		/* casestudy ajax call */
		jQuery("#casestudy").on("click", function (event ) {
		event.preventDefault();
		
		 var postId =  document.querySelector('#casestudy').getAttribute('data-value');

		 
		 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=my_ajax_action2&id="+postId,
			cache: false,
			
										
			success: function (response) {
				
			  // console.log(response);
			  response=response.trim();
			  var lastChar = response[response.length -1];
			  
			  jQuery("#casestudiesloadmore").append(response.slice(0,-1));
			  
			   //alert(lastChar);
			  $("#casestudy").attr('data-value',lastChar);
			  if(lastChar==0)
			  {
				 
				  jQuery("#casestudy").remove();
			  }

			   
				
				
			},
			
		});
		
		
		
		});
		/*end */
		
		
		
		/* featureblogloadmore ajax call */
		jQuery("#featureblog").on("click", function (event ) {
		event.preventDefault();
		
		 var postId =  document.querySelector('#featureblog').getAttribute('data-value');

		 
		 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=my_ajax_action3&id="+postId,
			cache: false,
			
										
			success: function (response) {
				
			  // console.log(response);
			  response=response.trim();
			  var lastChar = response[response.length -1];
			  
			  jQuery("#featureblogloadmore").append(response.slice(0,-1));
			  
			   //alert(lastChar);
			  $("#featureblog").attr('data-value',lastChar);
			  if(lastChar==0)
			  {
				 
				  jQuery("#featureblog").remove();
			  }

			   
				
				
			},
			
		});
		
		
		
		});
		/*end */
		
		
		
		/* postersmore ajax call */
		jQuery("#posters").on("click", function (event ) {
		event.preventDefault();
		
		 var postId =  document.querySelector('#posters').getAttribute('data-value');

		
		 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=my_ajax_action4&id="+postId,
			cache: false,
			
										
			success: function (response) {
				
			  // console.log(response);
			  response=response.trim();
			  var lastChar = response[response.length -1];
			  
			  jQuery("#postersloadmore").append(response.slice(0,-1));
			  
			   //alert(lastChar);
			  $("#posters").attr('data-value',lastChar);
			  if(lastChar==0)
			  {
				 
				  jQuery("#posters").remove();
			  }

			   
				
				
			},
			
		});
		
		
		
		});
		/*end */
		
		
		/* publications ajax call */
		jQuery("#publications").on("click", function (event ) {
		event.preventDefault();
		
		 var postId =  document.querySelector('#publications').getAttribute('data-value');

		 //alert("publicationsloadmore"+postId);
		 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=my_ajax_action5&id="+postId,
			cache: false,
			
										
			success: function (response) {
				
			  // console.log(response);
			  response=response.trim();
			  var lastChar = response[response.length -1];
			  
			  jQuery("#publicationsloadmore").append(response.slice(0,-1));
			  
			   //alert(lastChar);
			  $("#publications").attr('data-value',lastChar);
			  if(lastChar==0)
			  {
				 
				  jQuery("#publications").remove();
			  }

			   
				
				
			},
			
		});
		
		
		
		});
		/*end */
		
		
		
		
		
		/* pressrelease ajax call */
		jQuery("#pressrelase").on("click", function (event ) {
		event.preventDefault();
		
		 var postId =  document.querySelector('#pressrelase').getAttribute('data-value');

		 //alert("pressrelase"+postId);
		 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=my_ajax_action11&id="+postId,
			cache: false,
			
										
			success: function (response) {
				
			   console.log(response);
			  response=response.trim();
			  response= response.split("-##count##-")
			  var lastChar = response[1];
			  
			  jQuery("#pressrelaseloadmore").append(response[0]);
			  
			   //alert(lastChar);
			  $("#pressrelase").attr('data-value',lastChar);
			  if(lastChar==0)
			  {
				 
				  jQuery("#pressrelase").remove();
			  }

			   
				
				
			},
			
		});
		
		
		
		});
		/*end */
		
		
		
		/* technicalnotes ajax call */
		jQuery("#technicalnotes").on("click", function (event ) {
		event.preventDefault();
		
		 var postId =  document.querySelector('#technicalnotes').getAttribute('data-value');

		
		 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=my_ajax_action6&id="+postId,
			cache: false,
			
										
			success: function (response) {
				
			  // console.log(response);
			  console.log(response);
			  response=response.trim();
			  response= response.split("-##count##-")
			  var lastChar = response[1];
			  
			  jQuery("#technicalnotesloadmore").append(response[0]);
			  
			   //alert(lastChar);
			  $("#technicalnotes").attr('data-value',lastChar);
			  if(lastChar==0)
			  {
				 
				  jQuery("#technicalnotes").remove();
			  }

			   
				
				
			},
			
		});
		
		
		
		});
		/*end */
		
		
		/* videos ajax call */
		jQuery("#videos").on("click", function (event ) {
		event.preventDefault();
		
		 var postId =  document.querySelector('#videos').getAttribute('data-value');

		
		 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=my_ajax_action7&id="+postId,
			cache: false,
			
										
			success: function (response) {
				
			  // console.log(response);
			  response=response.trim();
			  var lastChar = response[response.length -1];
			  
			  jQuery("#videosloadmore").append(response.slice(0,-1));
			  
			   //alert(lastChar);
			  $("#videos").attr('data-value',lastChar);
			  if(lastChar==0)
			  {
				 
				  jQuery("#videos").remove();
			  }

			   
				
				
			},
			
		});
		
		
		
		});
		/*end */
		
		
		/* newandmedialoadmore ajax call */
		jQuery("#newandmedia").on("click", function (event ) {
		event.preventDefault();
		
		 var postId =  document.querySelector('#newandmedia').getAttribute('data-value');

		 //alert("publicationsloadmore"+postId);
		 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=my_ajax_action8&id="+postId,
			cache: false,
			
										
			success: function (response) {
				
			  // console.log(response);
			  response=response.trim();
			  var lastChar = response[response.length -1];
			  
			  jQuery("#newandmedialoadmore").append(response.slice(0,-1));
			  
			   //alert(lastChar);
			  $("#newandmedia").attr('data-value',lastChar);
			  if(lastChar==0)
			  {
				 
				  jQuery("#newandmedia").remove();
			  }

			   
				
				
			},
			
		});
		
		
		
		});
		/*end */
		
		
		/* team ajax call 
		jQuery(".productlink").on("click", function (event ) {
		event.preventDefault();
		
		// var postId = $(this).data('id');
		 jQuery.ajax({
			type: "post",
			dataType: "text",
			url: "https://strateos.com/wp-admin/admin-ajax.php",
			data: "action=my_ajax_action1",
			cache: false,
				beforeSend: function(){
					//jQuery("#product-details").html("<center><img src='https://strateos.com/wp-content/uploads/2019/09/1_CsJ05WEGfunYMLGfsT2sXA.gif' id='loading-image' /> </center>");
				},
			
			success: function (response) {
				
			   console.log(response);
			   jQuery("#product-details").html(response);
				
				
			},
			complete: function(){
				//$('#loading-image').hide();
			  }
		});
		
		
		
		});
		/*end */
		
		
		
		
		

        var windowSize = $(window).width();
        l18W();
        stm_services_carousel();

        $(window).on( "resize", function() {
            l18W();
            stm_stretch_column();
            full_height_columns();
        });

        $.fn.is_on_screen = function () {
            var win = $(window);
            var viewport = {
                top: win.scrollTop(),
                left: win.scrollLeft()
            };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();

            var bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();

            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
        };

        $(".stm-register-form form").on( "submit", function(e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: ajaxurl,
                dataType: 'json',
                context: this,
                data: $(this).serialize() + '&action=stm_custom_register&security=' + stm_custom_register,
                beforeSend: function () {
                    $(this).find('input').removeClass('form-error');
                    $('.stm-validation-message').empty();
                },
                success: function (data) {

                    for (var err in data.errors) {
                        $(this).find('input[name=' + err + ']').addClass('form-error');
                    }

                    if (data.message) {
                        var message = $('<div class="stm-message-ajax-validation heading-font">' + data.message + '</div>').hide();

                        $(this).find('.stm-validation-message').append(message);
                        message.slideDown('fast');
                    }
                }
            });
        });

        $(document).on("click", ".load_more_btn", function (e) {
            e.preventDefault();
            var page = $(this).attr("data-page");
            var load_by = $(this).attr("data-load");
            var filter = $(this).attr("data-filter");
            var category = $(this).attr('data-category');
            $.ajax({
                url: ajaxurl,
                type: "POST",
                dataType: "json",
                data: "&page=" + page + "&load_by=" + load_by + "&category=" + category + "&filter=" + filter + "&action=stm_ajax_load_events&security=" + stm_ajax_load_events,
                context: this,
                beforeSend: function (data) {
                    $(this).parent().addClass("event_posts_loading");
                },
                success: function (data) {
                    $(this).parent().removeClass("event_posts_loading");
                    $(".stm_events_modern_list ").append(data.html);
                    $(this).attr("data-page", data.new_page);
                    if (!data.load_more) {
                        $(this).remove();
                    }
                }
            });
        });

        $('.scroll_to_event_form').on('click', function (e) {
            event.preventDefault();
            $('html,body').animate({scrollTop: $(this.hash).offset().top-100}, 500);
        });

        $('.show_popup').on('click', function (e) {
            $(this).parents().find('#video').addClass('video_popup_box')
        });

        stm_stretch_column();

        function stm_stretch_column() {
            $('.wpb_column[data-stretch]').each(function () {
                var stretch = $(this).data('stretch');
                var xPos = $(this).offset().left;
                var wW = $(window).width();
                var xW = $(this).width();

                var value = wW - (xW + xPos);
                if (stretch == 'left') {
                    value = xPos;
                }

                $(this).find('.vc_column-inner').css('width', xW + value + 'px');
                $(this).find('.vc_column-inner').css('margin-' + stretch, '-' + value + 'px');
            });
        };

        //Full height
        full_height_columns();

        function full_height_columns() {

            $(".full_height_columns").each(function () {
                var full_height_columns = $(this).find(".wpb_column:first").height();
                $(this).find("iframe").css("height", full_height_columns);
            });
        };

        stm_ajax_add_event_member();

        function stm_ajax_add_event_member() {
            $("#event-members-form").on("submit", function (event) {
                event.preventDefault();

                var $this = $(this),
                    eventID = parseInt($($this).find('input[name="event_member_id"]').val()),
                    addedEvents = localStorage.getItem('addedEvents'),
                    eventAdded = false;

                if (addedEvents) {
                    addedEvents = JSON.parse(addedEvents);
                    eventAdded = $.inArray(eventID, addedEvents) > -1;
                }
                if (!eventAdded) {
                    $.ajax({
                        url: ajaxurl,
                        type: "POST",
                        dataType: "json",
                        context: this,
                        data: $(this).serialize() + "&action=stm_ajax_add_event_member&security=" + stm_ajax_add_event_member_sc,
                        beforeSend: function () {
                            $(".alert-modal").remove();
                            $(this).closest("form").find("input").removeClass("form-error");
                            $(this).closest("form").find(".stm-ajax-loader").addClass("loading");
                        },
                        success: function (data) {
                            $(this).closest("form").find(".stm-ajax-loader").removeClass("loading");

                            $(this).closest("form").find(".event-members-box").append('<div class="alert-modal alert alert-' + data.status + ' text-left">' + data.response + '</div>');
                            for (var key in data.errors) {
                                $('#event-members-form input[name="' + key + '"]').addClass("form-error");
                            }
                            if (!$('#event-members-form input[name="' + key + '"]').hasClass('form-error')) {
                                $(".event-members-box-table .event-attended-count").text(parseInt($(".event-members-box-table .event-attended-count").text()) + 1);
                                $(".event-attended-count.event-new-count").text(parseInt($(".event-attended-count.event-new-count").text()) + 1);
                                if (addedEvents) {
                                    addedEvents.push(eventID);
                                } else {
                                    addedEvents = [eventID];
                                }
                                localStorage.setItem('addedEvents', JSON.stringify(addedEvents));
                                $($this).find(".form__notice_success").fadeIn(300);
                            }
                            $("#event-members-form button").addClass("disabled").prop('disabled', true);
                        },
                        complete: function (data) {
                            $("#event-members-form")[0].reset();
                        }
                    });
                    $(this).closest("form").find(".form-error").on("hover", function () {
                        $(this).removeClass("form-error");
                    });
                } else {
                    $($this).find(".form__notice_information").fadeIn(300);
                }
                return false;
            });
        }

        $(".event_terms_conditions #event_terms_conditions").on("click", function (e) {
            if ($(this).is(':checked')) {
                $("#event-members-form button").removeClass("disabled").prop('disabled', false);
            } else {
                $("#event-members-form button").addClass("disabled").prop('disabled', true);
            }
        });

        $(".event_joining .show_event_list_form").on("click", function (e) {
            var eventItemValId = $(this).parents(".item").find(".event-item-id").val();
            $(".stm_events_classic #event-members-form .event_member_id").val(eventItemValId);
            $(".stm_events_list_form").show();
            $(this).parents(".item").find(".event-attended-count").addClass("event-new-count");
        });
        $(".notice__hide").on("click", function (e) {
            $(".stm_events_list_form").hide();
            $("#event-members-form")[0].reset();
            $("#event-members-form .alert-modal").hide();
            $("#event-members-form .form__notice_information").hide();
            $(".stm_events_classic .item").find(".event-attended-count").removeClass("event-new-count");
        });

        $(".events_lessons_box .event_lesson_tabs:first-child").addClass("active");
        $('.events_lessons_box .event_lesson_tabs a').each(function (e) {
            if ($(this).parent().hasClass("active")) {
                $($(this).attr('href')).show();
            }
        });
        $('.events_lessons_box .event_lesson_tabs a').on('click', function (e) {
            $(this).parents(".events_lessons_box").find(".event_lesson_info").hide();
            $(this).parents(".events_lessons_box").find(".event_lesson_tabs").removeClass("active");
            $(this).parent().addClass("active");
            $($(this).attr("href")).show();
            return false;
        });

        $(document).on("click", ".js-open-search-box", function () {
            $(this).closest(".header_search").toggleClass("active");
            return false;
        });

        if ($(".wpb_revslider_element").length && $('body').hasClass("header_style_7")) {
            $(".wpb_revslider_element").closest(".vc_row-no-padding").addClass("stm-revslider-wrapper");
        }

        $(document).on("click", "body", function (e) {
            if (!$(e.target).closest(".header_search").length) {
                $(".header_search").removeClass("active");

            }
        });

        $("body .wpb_video_widget .wpb_wrapper .wpb_video_wrapper .play_video").on('click', function () {
            $(this).parent().find('iframe').attr('allow', 'autoplay');
            $(this).parent().addClass('active');
            $(this).parent().find('iframe').attr('src', $(this).parent().find('iframe').attr('src') + '?autoplay=1').delay();
            $(this).hide();
            $(this).parent().find('img').hide();
            $(this).parent().find('.video').show();
            $(this).parent().addClass('show_video');
            return false;
        });

        $(".staff_read_more").on('click', function () {
            $(this).closest('.stm_staff_2').find('.full_description').slideToggle(150);
            return false;
        });

        $("select:not(.stm_not_select2,.wpcf7-form-control)").each(function () {
            if (!$(this).closest(".gfield").hasClass("stm_not_select2")) {
                $(this).select2({width: '100%', minimumResultsForSearch: '-1'});
            }
        });
        if ($("#rating").length) {
            $("#rating").select2('destroy');
        }

        if ($("#demos_switcher").length) {
            $("#demos_switcher").select2("destroy");

            $("#demos_switcher").select2({
                templateResult: demosItemTemplate,
                width: '100%',
                minimumResultsForSearch: '-1'
            });

        }

        if ($('body').hasClass('customizer_page')) {
            $(".customizer_page .ui-tabs").remove();
        }

        $('#menu_toggle').on('click', function () {
            $(this).toggleClass('open');
            $('.mobile_header .top_nav_mobile').slideToggle(300);
            return false;
        });
        $('#menu_toggle_button').on('click', function () {
            $(this).toggleClass('open');
            $('.header_side').each(function () {
                if (!$(this).hasClass('show')) {
                    $(this).addClass('show');
                    if ($('body').hasClass('rtl')) {
                        $(this).animate({right: "0"}, 300);
                    } else {
                        $(this).animate({left: "0"}, 300);
                    }
                } else {
                    $(this).removeClass('show');
                    if ($('body').hasClass('rtl')) {
                        $(this).animate({right: "-100%"}, 600);
                    } else {
                        $(this).animate({left: "-100%"}, 600);
                    }
                }
            });

            return false;
        });

        $(".mobile_header .top_nav_mobile .main_menu_nav > li.menu-item-has-children > a").after('<span class="arrow"><i></i></span>');
        $(".mobile_header .top_nav_mobile .main_menu_nav > li.menu-item-has-children > .sub-menu > .menu-item-has-children > a").after('<span class="arrow"><i class="fa fa-chevron-down"></i></span>');

        $(".mobile_header .top_nav_mobile .main_menu_nav > li.menu-item-has-children .arrow").on('click', function () {
            $(this).toggleClass('active');
            $(this).closest('li').find('ul').first().slideToggle(300);
        });

        $(".mobile_header .top_nav_mobile .main_menu_nav > li.menu-item-has-children > a").on('click', function () {
            if ($(this).attr('href') == '#') {
                $(this).closest('li').find('ul').slideToggle(300);
                $(this).closest('li').find('.arrow').toggleClass('active');
            }
        });

        // Quantity actions
        $('body').on('click', '.quantity_actions span', function () {
            var quantityContainer = $(this).closest('.quantity'),
                quantityInput = quantityContainer.find('.qty'),
                quantityVal = quantityInput.attr('value');

            $('.shop_table.cart .button').removeAttr("disabled")

            if ($(this).hasClass('plus')) {
                quantityInput.attr('value', parseInt(quantityVal) + 1);
            } else if ($(this).hasClass('minus')) {
                if (quantityVal > 1) {
                    quantityInput.attr('value', parseInt(quantityVal) - 1);
                }
            }
        });

        // Stiky Header
        var headerHeight = $("#header").height();
        var headerTop = $(".header_top").height();
        var topBar = $(".top_bar").height();

        $("#header .top_nav, #header .header_top").affix({
            offset: {
                top: headerHeight
            }
        });

        $("#menu_toggle_button").affix({
            offset: {
                top: topBar
            }
        });

        $("#wrapper").on( "scroll", function() {
            if ($(".sticky_menu .header_top, .sticky_menu .top_nav").hasClass('affix')) {
                $("#header").css("paddingBottom", headerTop);
            } else {
                $("#header").css("paddingBottom", 0);
            }
        });

        $(".top_bar_info_switcher .active").on('click', function () {

            if ($(".top_bar_info_switcher ul").is(':visible')) {
                $(".top_bar_info_switcher ul").slideUp(100);
            } else {
                $(".top_bar_info_switcher ul").slideDown(100);
            }

            return false;
        });

        $(".top_bar_info_switcher a").on('click', function () {
            var id = $(this).attr('href');
            var title = $(this).text();
            $(".top_bar_info").hide();
            $(id).show();
            $(".top_bar_info_switcher .active span").text(title);
            $(".top_bar_info_switcher ul").slideUp(100);
            return false;
        });

        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            stm_animate_block();
        } else {
            $(".stm_animation").css('opacity', 1);
        }

        jQuery(window).on( "scroll", function() {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                stm_animate_block();
            } else {
                $(".stm_animation").css('opacity', 1);
            }
        });

        $('.single-product .product-type-variable table.variations select').on("change", function () {
            $(this).parent().find('.select2-selection__rendered').text($(this).find('option[value="' + $(this).val() + '"]').text());
        });

        /*Adds*/
        if (typeof($.fancybox) !== 'undefined') {
            $('.stm_fancy-iframe').fancybox({
                type: 'iframe',
                padding: 0,
                maxWidth: '800px',
                width: '100%',
                fitToView: false,
                beforeLoad: function () {
                    var url = $(this.element).data('url');
                    this.href = url;
                }
            });

            $('.stm_fancybox').fancybox({
                fitToView: false,
                padding: 30,
                maxWidth: '500px',
                autoSize: true,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none'
            });
        }

        $('[data-scroll-to]').on('click', function (e) {
            var url = $(this).attr('data-scroll-to');
            if (typeof(url) !== 'undefined') {
                var url_parsed = url.split('#');
                if (typeof(url_parsed[1]) !== 'undefined' && $('#' + url_parsed[1]).length > 0) {
                    $('html, body').stop().animate({
                        scrollTop: $('#' + url_parsed[1]).offset().top-100
                    }, 700);
                } else {
                    window.location.href = url;
                }
            }
        });

        if ($('body').hasClass('site_layout_19')) {
            $('.top_nav li a').on('click', function (e) {
                e.preventDefault();
                var url = $(this).attr('href');
                if (typeof(url) !== 'undefined') {
                    var url_parsed = url.split('#');
                    if (typeof(url_parsed[1]) !== 'undefined' && $('#' + url_parsed[1]).length > 0) {
                        $('html, body').stop().animate({
                            scrollTop: $('#' + url_parsed[1]).offset().top - 100
                        }, 700);
                    } else {
                        window.location.href = url;
                    }
                }
            });
        }
		
		
		if ($('body').hasClass('site_layout_miami')) {
			
			
            $('.top_nav li a').on('click', function (e) {
				
				
                e.preventDefault();
                var url = $(this).attr('href');
                if (typeof(url) !== 'undefined') {
                    var url_parsed = url.split('#');
                    if (typeof(url_parsed[1]) !== 'undefined' && $('#' + url_parsed[1]).length > 0) {
                        $('html, body').stop().animate({
                            scrollTop: $('#' + url_parsed[1]).offset().top - 100
                        }, 1000);
                    } else {
                        window.location.href = url;
                    }
                }
            });
        }

        $('.stm_top_bar_l13-search button').on('click', function (e) {
            var $wr = $(this).closest('.stm_top_bar_l13-search');
            if ($wr.hasClass('active')) {
                if ($wr.find('input').val() == '') {
                    e.preventDefault();
                    $wr.removeClass('active active-focus');
                }
            } else {
                e.preventDefault();
                $wr.addClass('active active-focus');
                setTimeout(function () {
                    $wr.find('input').focus();
                }, 300);
            }
        });

        $('body').on('click', function (e) {
            if ($(e.target).closest('.stm_top_bar_l13-search').length === 0) {
                var $wr = $('.stm_top_bar_l13-search');
                $wr.find('input').focusout();
                $wr.removeClass('active active-focus');
            }
        });

    });

    jQuery(window).on( "load", function() {
        l18W();
        if ($('html').hasClass('stm-site-preloader')) {
            $('html').addClass('stm-site-loaded');

            setTimeout(function () {
                $('html').removeClass('stm-site-preloader stm-site-loaded');
            }, 250);

            $(window).on('onbeforeunload', function (e) {
                $('html').addClass('stm-site-preloader stm-after-hidden');
            });

            if ($('a[href^=mailto], a[href^=skype], a[href^=tel]').on('click', function (e) {
                    setTimeout(function () {
                        $('html').removeClass('stm-site-preloader stm-site-loaded');
                    });
                })) ;
        }
    });

    function stm_animate_block() {
        jQuery('.stm_animation').each(function () {
            if (jQuery(this).attr('data-animate')) {
                var animation_blocks = jQuery(this).children('*');
                var animationName = jQuery(this).attr('data-animate'),
                    animationDuration = jQuery(this).attr('data-animation-duration') + 's',
                    animationDelay = jQuery(this).attr('data-animation-delay');
                var style = 'opacity:1;-webkit-animation-delay:' + animationDelay + 's;-webkit-animation-duration:' + animationDuration + '; -moz-animation-delay:' + animationDelay + 's;-moz-animation-duration:' + animationDuration + '; animation-delay:' + animationDelay + 's;';
                var container_style = 'opacity:1;-webkit-transition-delay: ' + (animationDelay) + 's; -moz-transition-delay: ' + (animationDelay) + 's; transition-delay: ' + (animationDelay) + 's;';
                if (isAppear(jQuery(this))) {
                    jQuery(this).attr('style', container_style);
                    jQuery.each(animation_blocks, function (index, value) {
                        jQuery(this).attr('style', style);
                        jQuery(this).addClass('animated').addClass(animationName);
                    });
                }
            }
        });
    }

    function isAppear(id) {
        var window_scroll = jQuery(window).scrollTop();
        var window_height = jQuery(window).height();

        if (jQuery(id).hasClass('stm_viewport')) {
            var start_effect = jQuery(id).data('viewport_position');
        }

        if (typeof(start_effect) === 'undefined' || start_effect == '') {
            var percentage = 2;
        } else {
            var percentage = 100 - start_effect;
        }
        var element_top = jQuery(id).offset().top;
        var position = element_top - window_scroll;

        var cut = window_height - (window_height * (percentage / 100));
        if (position <= cut) {
            return true;
        } else {
            return false;
        }
    }

    function demosItemTemplate(state) {
        if (!state.id) {
            return state.text;
        }
        var $state = jQuery(
            '<span class="' + state.element.value + '"> ' + state.text + '</span>'
        );
        return $state;
    }

    function l18W() {
        var $ = jQuery;
        if ($('body').hasClass('site_layout_18')) {
            var contentW = $('#fullpage').outerWidth();
            var contentArea = $('.content-area').outerWidth();
            var fullWleft = contentW / 2;

            var marginArea = (contentW - contentArea) / 2;
            //$('.stm_bg_right').css('width', contentW + 'px');
            $('.stm_fullwidth_left').css({
                'width': fullWleft + 'px'
            });

            $('.stm_fullwidth_content').css({
                'width': contentW + 'px',
                'margin-right': '-' + marginArea + 'px'
            })

        }
    }

    function stm_services_carousel() {
        $('.stm_services.style_3').each(function () {
            var perRow = $(this).attr('data-per-row');
            $(this).owlCarousel({
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1024: {
                        items: perRow
                    },
                    1110: {
                        items: perRow
                    }
                }
            });
        });

        $('.stm_services.style_7').each(function () {
            $(this).owlCarousel({
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
        })
    }
	
	
	$(document).on("click", ".whitepaperbtn", function () {
     var postId = $(this).data('id');
     var posttitle = $(this).data('title');
     //alert(posttitle);
	        $(".postid").val( postId );
			$(".posttitle").val( posttitle );
    
		});
	
	

})(jQuery);	



function _(el){

return document.getElementById(el);

}



function regvalidate(event)

{
	//alert("this");

	

	//event.preventDefault();

	var count=0;

	var name=document.main.name.value.trim();
	var mobilenumber=document.main.phone.value.trim();
	var email=document.main.email.value.trim();
	var country=document.main.country.value.trim();
	var intrested=document.main.intrested.value.trim();
	if(!validatenamewithspacenumber(name,"#errorname"))

	{

		document.main.name.style.cssText="border-color:#f76c6c !important";

		count++;

		return false;

	}

	else

	{

		document.main.name.style.cssText="border-color:#396d02 !important";

	}

	
	if(!validateemail(email,"#erroremail"))

	{

		document.main.email.style.cssText="border-color:#f76c6c !important";

		count++;

		return false;

	}

	else

	{

		document.main.email.style.cssText="border-color:#396d02 !important";

	}

	

	if(!validatenamewithspacenumber(country,"#errorcountry"))

	{

		document.main.country.style.cssText="border-color:#f76c6c !important";

		count++;

		return false;

	}

	else

	{

		document.main.country.style.cssText="border-color:#396d02 !important";

	}
	
	if(intrested=="")
	{
		document.main.intrested.style.cssText="border-color:#f76c6c !important";

		count++;

		return false;
	}
	else

	{

		document.main.intrested.style.cssText="border-color:#396d02 !important";

	}

	
	if(count==0)

	{

		

		document.main.submit();

		return true;

	}
	
		return false;
	

}









// VALIDATE CHECK NAME WITH SPACE 

function validatenamewithspacenumber(name,id)

{	

	var namereg = /^([a-zA-Z0-9- _]+)$/;

	if(name!="" && name!=null)

	{

		if(name.length <=100)

		{

			if( name.length  < 2)

			{

				jQuery(id).html("Please Enter Minimum 2 Characters");

				return false;

			}

			else

			{

				if(name.match(namereg)!=null)

				{

					//alert(name.match(namereg));

					jQuery(id).html("");

					return true;	

				}

				else

				{

					jQuery(id).html("Please Enter Alphabets & Numeric");

					return false;

				}

			}

		}

		else

		{

			jQuery(id).html("Name Must Be Below 100 ");

			return false;

		}

		

	}

	else

	{

		

		jQuery(id).html("Please Enter Name");

		return false;

	}

}





// VALIDATE CHECK NAME WITH OUT SPACE



function validatename(name,id)

{	

	var namereg = /^([a-zA-Z0-9-]+)$/;

	if(name!="" && name!=null)

	{

		if(name.length <=100)

		{

			if( name.length  < 4)

			{

				jQuery(id).html("Please Enter Minimum 4 Characters");

				return false;

			}

			else

			{	

				if(namereg.test(name))

				{

					jQuery(id).html("");

					return true;	

				}

				else

				{

					jQuery(id).html("UserName Must Have Alphabets & Numeric");

					return false;

				}

			}

		}

		else

		{

			jQuery(id).html("School Name Must Be Below 100 ");

			return false;

		}

		

	}

	else

	{

		

		jQuery(id).html("Please Enter School Name");

		return false;

	}

}





// VALIDATE NUMBER 



function validatephone(name,id)
{

	

	var phonereg = /^((\+91|0)?[6-9][0-9]{9})$/

	

	

	if(name!="" && name!=null)

	{

		if(name.length <=13)

		{

			

				if(name.match(phonereg)!=null)

				{

					//alert(name.match(phonereg));

					jQuery(id).html("");

					return true;	

				}

				else

				{

					jQuery(id).html("Please Enter Valid Mobile Number");

					return false;

				}

			

		}

		else

		{

			jQuery(id).html("Mobile Number Must be 10 characters  ");

			return false;

		}

		

	}

	else

	{

		

		jQuery(id).html("Please Enter Mobile Name");

		return false;

	}

	

}

function isBlockedEmail(str) {
  var blocked = ["gmail.com", "hotmail.com", "yahoo.com"];
  for(var i = 0; i< blocked.length; i++) {
    if(str.indexOf(blocked[i]) != -1) {
       return true;
    }
  }
  return false;
}



// VALIDATE EMAIL 



function validateemail(name,id)

{

	

	

	

	

	

	var emailreg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	

	

	if(name!="" && name!=null)

	{

			

			

				if(name.match(emailreg)!=null)

				{
					if(isBlockedEmail(name))
					{
						jQuery(id).html("Please Enter Company Email");
						return false ;
					}
					else
					{
				
					//alert(name.match(phonereg));

					jQuery(id).html("");

					return true;	
					}

				}

				else

				{

					jQuery(id).html("Please Enter Valid Email");

					return false;

				}

			

		

		

		

	}

	else

	{

		

		jQuery(id).html("Please Enter Email");

		return false;

	}

	

}


/* testimonials */

( function( $) {
	$( document ).ready( function() {
		//alert("hello");
		window['conclave']=Conclave;
    Conclave.init();
		
	} );
	
	var Conclave=(function(){
    var buArr =[],arlen;
    return {
      init:function(){
        this.addCN();this.clickReg();
      },
      addCN:function(){
        var buarr=["holder_bu_awayL2","holder_bu_awayL1","holder_bu_center","holder_bu_awayR1","holder_bu_awayR2"];
        for(var i=1;i<=buarr.length;++i){
          $("#bu"+i).removeClass().addClass(buarr[i-1]+" holder_bu");
        }
      },
      clickReg:function(){
        $(".holder_bu").each(function(){
          buArr.push($(this).attr('class'))
        });
        arlen=buArr.length;
        for(var i=0;i<arlen;++i){
          buArr[i]=buArr[i].replace(" holder_bu","")
        };
        $(".holder_bu").click(function(buid){
          var me=this,id=this.id||buid,joId=$("#"+id),joCN=joId.attr("class").replace(" holder_bu","");
          var cpos=buArr.indexOf(joCN),mpos=buArr.indexOf("holder_bu_center");
          if(cpos!=mpos){
              tomove=cpos>mpos?arlen-cpos+mpos:mpos-cpos;
              while(tomove){
                var t=buArr.shift();
                buArr.push(t);
                for(var i=1;i<=arlen;++i){
                  $("#bu"+i).removeClass().addClass(buArr[i-1]+" holder_bu");
                }
                --tomove;
              }
          }
        })
      },
      auto:function(){
        for(i=1;i<=1;++i){
          $(".holder_bu").delay(4000).trigger('click',"bu"+i).delay(4000);
          console.log("called");
        }
      }
    };
})();

	$(".cpointer").click(function(){
    $(".section--dark").hide(1000);
  });
	
	
}(jQuery) );
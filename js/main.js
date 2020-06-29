$(window).ready(function(){
	
	/*visual,header*/
	
			var sid=setInterval(animation,0)
			
			function animation(){
				
			$('.visual_back').animate({
				left:'-3800px'
			},15000,'linear',function(){
				$('.visual_back').append($('.visual_back li:first'))
				$('.visual_back').css('left','0px')
			})
			}
	
		$('.lang').on('click',function(){
			if($('.lang_list').is(':animated')==false){
			$(this).toggleClass('on')
			if($(this).hasClass('on')==true){
			$('.lang_list').slideDown(500)
			}else{$('.lang_list').slideUp(500)}
			}
		})
	
		/*info*/
		
	$('.info_right_ti:first').show();
	
	$('.info_btn li a').on('click',function(e){
		e.preventDefault();
		var num=$(this).parent().index();
		$('.info_btn li a').removeClass('on');
		$(this).addClass('on');
		
		$('.info_right_ti').hide();
		$('.info_right_ti:eq('+num+')').show();
		
	})
	
	$('.info_right_ti').each(function(){
		$(this).find('.info_list_btn .prev').on('click',function(e){
			 	e.preventDefault();
		 	var infoLi=$(this).parent().prev();
			
			if(infoLi.is(':animated')==false){
				infoLi.prepend(infoLi.find('li:last'))
				infoLi.css('left','-422px')
			
				infoLi.animate({
				left:'0px'
			},500)
		}
		})
		$(this).find('.info_list_btn .next').on('click',function(e){
				e.preventDefault();
			var infoLi=$(this).parent().prev();
			
			if(infoLi.is(':animated')==false){
			infoLi.animate({
				left:'-422px'
			},500,function(){
				infoLi.append(infoLi.find('li:first'))
				infoLi.css('left','0px')
			})
			}
		})
	})
	
	/*rule*/
	$('.rule_btn a').hide();
	
	$('.rule').on({
		mouseenter:function(){
//			$('.rule_list').on('mouseenter',function(){
			$(this).mousemove(function(list){
			var pageCords=list.pageX-$('.rule_list').offset().left;
			if(pageCords<640){
				$('.rule_btn .prev').fadeIn(300);
				$('.rule_btn .next').hide();
			}else{
				$('.rule_btn .next').fadeIn(300);
				$('.rule_btn .prev').hide();
			}
			})
//			})
		},
		mouseleave:function(){
			$('.rule_btn a').hide();
		}
		})
	
		$('.rule_btn .prev').on('click',function(e){
			e.preventDefault();
		$('.rule_list').prepend($('.rule_list li:last'))
	})
	
	$('.rule_btn .next').on('click',function(e){
		 e.preventDefault();
		$('.rule_list').append($('.rule_list li:first'))
	})
	
	/*rental*/
	
	var rentalSid
	
	rentalSid=setInterval(rentalAuto,1300)
	
	function rentalAuto(){
	$('.map_info').animate({backgroundPositionY:'110px'},600)
	$('.map_info').animate({backgroundPositionY:'130px'},600)
	}
	
	/*faq*/
	$('.faq_list dt.on').next().show()
	
	$('.faq_list dt').on('click',function(){
		if($(this).hasClass('on')==false){
		if($(this).next().is(':animated')==false){
		$('.faq_list dt').removeClass('on');
		$('.faq_list dd').stop().slideUp(300);
		$(this).addClass('on');
		$(this).next('dd').slideDown(300);
		}
		}else{
			$('.faq_list dt').removeClass('on');
		$('.faq_list dd').stop().slideUp(300);
		}
	})
	
			
		})








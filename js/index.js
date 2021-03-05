$(document).ready(function() {
	$('#fullpage').fullpage({
		navigation:true,
		anchors:['firstPage','secondPage','thirdPage','fourthPage',],
		menu:".header__list",
		navigationTooltips:['В начало','Описание','Об авторе','Пройти тест',],
		onLeave:function(orig,dest,dir){
			if(dest!=1){
				$(".header__logo").addClass("header__logo_hide");
			}else{
				$(".header__logo").removeClass("header__logo_hide");
			}
			if(dest!=4){
				$(".footer__copy-rights").addClass("footer__copy-rights_hide");
			}else{
				$(".footer__copy-rights").removeClass("footer__copy-rights_hide");
			}
		}
	});
	$('#callback-form-btn').click(function(event){
		$(".callback").addClass('show');
	});
	$('#callback-form-close-btn').click(function(event){
		console.log('callback');
		event.preventDefault();
		$(".callback").removeClass('show');
	});
	$('.callback__submit').click(function(event){
		console.log('callback__submit');
		$(".callback").removeClass('show');
	});

});

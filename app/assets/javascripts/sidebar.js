$(document).on('turbolinks:load',function(){
	
	$('.ranks a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.ranks a').removeClass('active');
		$('.tab-content').removeClass('current');

		$(this).addClass('active');
		$("#"+tab_id).addClass('current');

    if($("#"+tab_id).hasClass('current')) {
    	$("#btn").attr("href", tab_id+"/players");
  }

	})
})

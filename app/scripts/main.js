'use strict';

console.log('ready!');

$('#btn-show-more').on('click', function(event){
	console.log($(this).text());
	if ($('#more').css('display') == 'none')
	{
		$(this).text('Show less');
		$('#more').slideDown();
	}
	else
	{
		$(this).text('Show more');
		$('#more').slideUp();
	}
});
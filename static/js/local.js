$(document).ready(function() {	
	var $messages = $('.messages-content'),
		d, h, m, id,
		i = 0,
		socket = io.connect('http://127.0.0.1:5000');
		
	socket.on('connect', function(){
		id = getRandomInt(1000);
		socket.send('Anon_' + id + ' has connected!');
	});
	
	socket.on('message', function(msg) {
		setDate();
		updateScrollbar();
		$('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
	});			
	
	$(window).load(function() {
		$messages.mCustomScrollbar();
	});
	
	function updateScrollbar() {
		$messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
			scrollInertia: 10,
			timeout: 0
		});
	}

	function setDate(){
		d = new Date()
		if (m != d.getMinutes()) {
			m = d.getMinutes();
			$('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
		}
	}
	
	$('.message-submit').click(function() {
		insertMessage();
	});
	
	function insertMessage() {
		setDate();
		updateScrollbar();
		$('<div class="message new"><figure class="avatar"><img src="static/images/anon.png" /></figure>' + $('#message-input').val() + '</div>').appendTo($('.mCSB_container')).addClass('new');
		socket.send('Anon_' + id + ': ' + $('#message-input').val());
		$('#message-input').val('');
	}

	$(window).on('keydown', function(e) {
		if (e.which == 13) {
			insertMessage();
			return false;
		}
	})
	
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}	
});
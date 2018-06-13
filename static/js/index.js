var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
	$messages.mCustomScrollbar();
	setTimeout(function() {
	fakeMessage();
	}, 100);
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

function insertMessage() {
	msg = $('.message-input').val();
	if ($.trim(msg) == '') {
		return false;
	}
	$('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
	setDate();
	$('.message-input').val(null);
	updateScrollbar();
	setTimeout(function() {
		fakeMessage();
	}, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
	insertMessage();
});

$(window).on('keydown', function(e) {
	if (e.which == 13) {
		insertMessage();
		return false;
	}
})

var Fake = [
	'Hi there, I\'m Cortana.',
	'Command accepted, executing order 66.',
	'We\'re no strangers to love..',
	'A full commitment\'s what I\'m thinking of',
	'I just wanna tell you how I\'m feeling',
	'Never gonna give you up ',
	'Never gonna run around and desert you',
	'Never gonna say goodbye',
	'Shutting down...'
]

function fakeMessage() {
	if ($('.message-input').val() != '') {
		return false;
	}
	$('<div class="message loading new"><figure class="avatar"><img src="static/images/Cortana.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
	updateScrollbar();

	setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="static/images/Cortana2.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
		setDate();
		updateScrollbar();
		i++;
	}, 1000 + (Math.random() * 20) * 100);
}
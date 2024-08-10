$(function (e) {
    var $messageInput = $(' .main-container .mc-right footer input');

    $messageInput.on('keyup', function (e) {
        var $this = $(this),
            value = $this.val(),
            valueLen = value.length,
            $actionSend = $('.icon-action-send');

        if (valueLen > 0) {
            $actionSend
                .removeClass('fa-microphone')
                .addClass('fa-share');
        } else {
            $actionSend
            .removeClass('fa-share')
            .addClass('fa-microphone');
        }

    });
});
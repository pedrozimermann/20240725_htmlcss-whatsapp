$(function (e) {
    var $messageInput = $(' .main-container .mc-right footer input'),
        $actionSend = $('.icon-action-send'),
        messageTemplate = `
    <div class="message">
      <span data-time="_time">_message</span>
    </div>`;

    $actionSend.on('click', function (e) {
        var $this = $(this),
            myMessage = messageTemplate,
            $mt,
            value = $messageInput.val();

            if(value.length > 0){
        myMessage = myMessage
            .replace('_message', value)
            .replace('_time', '21:53');

        $mt = $(myMessage);
        $mt.addClass('message-right');

        $('.messages-container').append($mt);
    }

    });

    $messageInput.on('keyup', function (e) {
        var $this = $(this),
            value = $this.val(),
            valueLen = value.length

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
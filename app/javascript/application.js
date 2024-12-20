// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import * as jquery from "jquery"
import "semantic-ui"
import "channels"

var scroll_bottom = function() {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
}

var submit_message = function() {
    $('#messages_body').on('keydown', function(e) {
        if(e.keyCode == 13) {
            $('button').click();
            e.target.value = "";
        };
    });
};

$(document).on('turbo:load', function () {
    console.log('loaded turbo links');
    $('.ui.dropdown').dropdown();
    submit_message();
    scroll_bottom();
});

// Use event delegation for the flash message close button
$(document).on('click', '.message .close', function () {
    console.log('Close button clicked');
    $(this).closest('.message').transition('fade');
});



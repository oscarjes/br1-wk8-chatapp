function setupRoom(roomId) {
  // first argument can be a string or object
  // here we use an object to specify the extra params
  App.chat = App.cable.subscriptions.create(
    {channel: "ChatChannel", id: roomId},
    {
      connected: function(){
        console.log('#ChatChannel connected', this);
      },
      disconnceted: function() {
        console.log('#ChatChannel disconnected');
      },
      received: function(data) {
        console.log('#ChatChannel received:', data);
        $('.js-chat-messages').append(data.html);
      }
    }
  );
}
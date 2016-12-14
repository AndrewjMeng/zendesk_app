$(function() {
  var client = ZAFClient.init();
  client.get('ticket').then(
  function(data) {
    var user_id = data.ticket.id;
    requestUserInfo(client, user_id);
  });
  showInfo();
});



function requestUserInfo(client, id) {
  var settings = {
    url: '/api/v2/tickets/1/tags.json',
    secure: true,
    type: 'PUT',
    contentType: 'application/json',
    data: '{ "tags": "dance party why"}',
  };

  client.request(settings).then(
    function(data){
      console.log('it worked', data)
    },
    function(response) {
      showError(response);
    }
  );
}

function showInfo(data) {
  var requester_data = {
  'name': "andy",
  'tags': ["awesome","cool"],
  'tilts_started' : "10",
  'tilts_contributed' : "10",
  'tilts_location' : "canada",
  'tilts_phone_number' : "123 123 1234"
  };

  var source = $("#requester-template").html();
  var template = Handlebars.compile(source);
  var html = template(requester_data);
  $("#content").html(html);
}

// external api
// var settings = {
//   url:'https://www.example.com/api/resource.json',
//   type:'GET',
//   dataType: 'json'
// };

// client.request(settings).then(
//   function(data) {
//     console.dir(data);
//   },
//   function(response) {
//     console.error(response.responseText);
//   }
// );

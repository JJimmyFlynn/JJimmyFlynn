// Error Functions
function displayError(message) {
  $('.artistsList').empty();
  $('.artistsList').append("<p class='error'>" +
                            message +
                            "</p>");
}
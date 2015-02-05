// UI Functions

function appendArtists(relatedArtists) { //Adds Artist to container
  $.get('templates/artistBlock.mst', function(template) {
    $('.artistsList').empty();
    for(var i=0; i<relatedArtists.length; i++){
      var rendered = Mustache.render(template, {
        name: relatedArtists[i].name,
        imageURL: relatedArtists[i].images[0].url,
        genres: relatedArtists[i].genres,
        spotifyLink: relatedArtists[i].external_urls.spotify,
        encodedArtist: encodeURIComponent(relatedArtists[i].name)
      });
      $('.artistsList').append(rendered);
    }
  });
}

function revealResults() {
  $('.resultsWrapper').delay(500).fadeIn(500);
}

function hideResults() {
  $('.resultsWrapper').hide();
}

function searchError(message) {
  $('#errorBalloon').html(message).addClass("shown");
}

function removeSearchError() {
  $('#errorBalloon').removeClass("shown");
}
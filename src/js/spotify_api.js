//Request Functions
function getRelatedArtists(query) {
  var artistIDEndpoint = "https://api.spotify.com/v1/search";
  var searchQuery = "q=" + escape(query) + "&type=artist";
  var artistID;

  function getArtistID() {
    $.ajax({
      url: artistIDEndpoint,
      data: searchQuery,
      success: function(data) {
        if(data.artists.items.length > 0) {
          artistID = data.artists.items[0].id;
          relatedRequest(artistID);
        } else {
          displayError("Sorry, could not find the artist" + query);
        }
      }
    });
  }

  function relatedRequest(ID) {
    var relatedArtistEndpoint = "https://api.spotify.com/v1/artists/" + artistID + "/related-artists";
    $.ajax({
      url: relatedArtistEndpoint,
      success: function(data) {
        relatedArtists = [];
        if(data.artists.length > 0) {
          for(var i=0; i<data.artists.length; i++) {
            relatedArtists.push(data.artists[i]);
          }
          appendArtists(relatedArtists);
          revealResults();
        } else {
          displayError("No related artists found.");
          revealResults();
        }
      },
      error: function() {
        displayError("Having trouble contacting Spotify. Please try again.")
      }
    });
  }

  //Begin Requests
  getArtistID();

}
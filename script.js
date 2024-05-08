// External JavaScript for handling the dynamic functionality
function search(site) {
  var searchTerm = document.getElementById("searchInput").value;
  
  // Redirect to the specific website based on the selected option
  if (site === 'google') {
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
  } else if (site === 'twitter') {
    window.location.href = "https://twitter.com/search?q=" + encodeURIComponent(searchTerm);
  } else if (site === 'youtube') {
    window.location.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent(searchTerm);
  } else if (site === 'instagram') {
    window.location.href = "https://www.instagram.com/explore/tags/" + encodeURIComponent(searchTerm);
  } else if (site === 'facebook') {
    window.location.href = "https://www.facebook.com/search/top/?q=" + encodeURIComponent(searchTerm);
  }
}
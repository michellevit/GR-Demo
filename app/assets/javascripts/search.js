// app/assets/javascripts/search.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("search-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const query = document.getElementById("search-input").value;
      fetch(`/products/search?query=${query}`, {
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      })
      .then(response => response.text())
      .then(html => {
        const searchResults = document.getElementById("search-results");
        searchResults.innerHTML = html;
      })
      .catch(error => console.error("Error fetching search results:", error));
    });
  });
  
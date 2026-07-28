// Filter London spots using the search bar
const searchInput = document.getElementById('searchInput');

if (searchInput) {
  searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();

      // Show card if search matches title or description
      if (title.includes(filter) || description.includes(filter)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}
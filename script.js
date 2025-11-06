// Function to filter font cards based on a category
function filterFonts(filter) {
  const cards = document.querySelectorAll('#fontGrid .card');
  cards.forEach(card => {
    const tags = card.dataset.tags || '';
    const show = filter === 'all' ? true : tags.includes(filter);
    card.style.display = show ? '' : 'none';
  });
}

// Setup filtering when a chip is clicked
const chips = document.querySelectorAll('#categoryChips .chip');
if (chips.length > 0) {
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filterFonts(chip.dataset.filter);
    });
  });

  // Ensure all fonts are displayed on initial page load
  filterFonts('all');
}

// Simple dark/light toggle
const themeToggle = document.getElementById('themeToggle');
let light = false;
themeToggle.addEventListener('click', () => {
  light = !light;
  document.documentElement.style.setProperty('--bg', light ? '#ffffff' : '#0f1115');
  document.documentElement.style.setProperty('--panel', light ? '#f5f7fb' : '#141821');
  document.documentElement.style.setProperty('--text', light ? '#0b0d11' : '#e9edf1');
  document.documentElement.style.setProperty('--muted', light ? '#606976' : '#9aa3ad');
  document.documentElement.style.setProperty('--card', light ? '#ffffff' : '#10131a');
  document.body.style.background = light ? '#ffffff' : 'linear-gradient(180deg, var(--bg), #0b0d11)';
});

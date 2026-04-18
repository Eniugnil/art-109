// Total number of images in the gallery.
const imageCount = 16;

// References to key DOM elements used by the preview overlay.
const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const overlayCaption = document.getElementById('overlayCaption');
const overlayClose = document.getElementById('overlayClose');
const overlayPrev = document.getElementById('overlayPrev');
const overlayNext = document.getElementById('overlayNext');

// Store which image is currently visible in the preview overlay.
let currentIndex = 0;

// Create a human-friendly label for an image based on its index.
function formatLabel(index) {
  return `Image ${index.toString().padStart(2, '0')}`;
}

// Show the overlay preview for the image at the given index.
function showPreview(index) {
  currentIndex = (index + imageCount) % imageCount; // wrap around before/after the ends
  const filename = `${(currentIndex + 1).toString().padStart(2, '0')}.png`;
  const label = formatLabel(currentIndex + 1);

  overlayImage.src = `images/${filename}`;
  overlayImage.alt = label;
  overlayCaption.textContent = label;
  overlay.classList.add('show');
  overlay.setAttribute('aria-hidden', 'false');
}

// Close the overlay preview and clear the displayed image.
function closePreview() {
  overlay.classList.remove('show');
  overlay.setAttribute('aria-hidden', 'true');
  overlayImage.src = '';
}

// Move to the previous or next image by a delta of -1 or +1.
function navigateImage(delta) {
  showPreview(currentIndex + delta);
}

// Build the gallery grid dynamically from the image files.
for (let i = 1; i <= imageCount; i += 1) {
  const filename = `${i.toString().padStart(2, '0')}.png`;
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'card';

  // When the user clicks a card, open the preview overlay for that image.
  card.addEventListener('click', () => showPreview(i - 1));

  const img = document.createElement('img');
  img.src = `images/${filename}`;
  img.alt = formatLabel(i);
  img.loading = 'lazy';

  const label = document.createElement('div');
  label.className = 'card-label';
  label.textContent = formatLabel(i);

  card.appendChild(img);
  card.appendChild(label);
  gallery.appendChild(card);
}

// Wire up the overlay controls.
overlayClose.addEventListener('click', closePreview);
overlayPrev.addEventListener('click', () => navigateImage(-1));
overlayNext.addEventListener('click', () => navigateImage(1));

// Close overlay when user clicks outside the image content.
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    closePreview();
  }
});

// Support keyboard navigation while the overlay is open.
document.addEventListener('keydown', (event) => {
  if (!overlay.classList.contains('show')) {
    return;
  }

  if (event.key === 'Escape') {
    closePreview();
  }

  if (event.key === 'ArrowLeft') {
    navigateImage(-1);
  }

  if (event.key === 'ArrowRight') {
    navigateImage(1);
  }
});

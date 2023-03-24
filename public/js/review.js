// Braden
const createReview = async (event) => {
    event.preventDefault();
    
    // artist_name
    const artist_name = document.querySelector('#artist').value.trim();
    // album_name
    const album_name = document.querySelector('#album').value.trim();
    // review
    const review = document.querySelector('#review').value.trim();
    // review_rating (1-5) .5 are good
    const review_rating = document.querySelector('#rating').value.trim();
    // cover_url
    const cover_url = document.querySelector('#cover').value.trim();
  
    if (artist_name && album_name && review && review_rating && cover_url) {
      const response = await fetch(`/api/review`, {
        method: 'POST',
        body: JSON.stringify({ artist_name, album_name, review, review_rating, cover_url }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create review');
      }
    }
  };
  
  document
    .querySelector('.create-review-form')
    .addEventListener('submit', createReview);
// Handler for creating the review forms, collects the given info and pushes to backend, where data is saved in db
const createReview = async (event) => {
    event.preventDefault();
    
    const artist_name = document.querySelector('#artist').value.trim();
    const album_name = document.querySelector('#album').value.trim();
    const review = document.querySelector('#review').value.trim();
    const review_rating = document.querySelector('#rating').value.trim();
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
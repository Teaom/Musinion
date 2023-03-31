// const url = window.location.pathname
// const filterNumber = url.match(/(\d+)/)
// const id = filterNumber[1]

// // Frontend request to delete a blog post
// const deleteHandler = async (event) => {
//     event.preventDefault()

//     const response = await fetch(`/api/review/${id}`, {
//         method: 'DELETE'
//     })

//     if (response.ok) {
//         document.location.replace('/profile')
//     } else {
//         alert('Blog post could not be deleted')
//     }
    
// }

// document
//     .querySelector('#delete-review-button')
//     .addEventListener('click', deleteHandler)
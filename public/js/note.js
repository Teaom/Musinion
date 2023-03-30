// Variables to grab id out of the url to use for form id
const url = window.location.pathname
const filterNumber = url.match(/(\d+)/)
const id = filterNumber[1]

const createNoteHandler = async (event) => {
    event.preventDefault()

    const noteContents = document.querySelector('#note-form').value

    if (noteContents) {
        const response = await fetch('/api/note', {
            method: 'POST',
            body: JSON.stringify({ review_id: id, contents: noteContents }),
            headers: { 'Content-type': 'application/json' }
        })

        if (response.ok) {
            document.location.reload()
        } else {
            alert('Note could not be created at this time')
        }
    }
}

document
    .querySelector('.create-note-form')
    .addEventListener('submit', createNoteHandler)
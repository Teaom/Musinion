const rating = [...document.querySelectorAll('.rating-container')]
console.log(rating)
function star() {
    console.log('hi')

    rating.forEach(rate => {
        console.log(rate)
        const starOne = rate.querySelector('#star1')
const starTwo = rate.querySelector('#star2')
const starThree = rate.querySelector('#star3')
const starFour = rate.querySelector('#star4')
const starFive = rate.querySelector('#star5')

        if (rate.classList.contains('rating-5')) {
            starFive.classList.add('checked')
            starFour.classList.add('checked')
            starThree.classList.add('checked')
            starTwo.classList.add('checked')
            starOne.classList.add('checked')
        } else if (rate.classList.contains('rating-4')) {
            starFour.classList.add('checked')
            starThree.classList.add('checked')
            starTwo.classList.add('checked')
            starOne.classList.add('checked')
        } else if (rate.classList.contains('rating-3')) {
            starThree.classList.add('checked')
            starTwo.classList.add('checked')
            starOne.classList.add('checked')
        } else if (rate.classList.contains('rating-2')) {
            starTwo.classList.add('checked')
            starOne.classList.add('checked')
        }
        else if (rate.classList.contains('rating-1')) {
            starOne.classList.add('checked')
        } 
    })
}
   
    
    star();
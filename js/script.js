const advice_no = document.querySelector('.title')
const advice = document.querySelector('.advice')

const apiURL = 'https://api.adviceslip.com/advice'
const APIKey = ''

const btn = document.querySelector('.btn')

btn.addEventListener('click', displayAdvice)

async function getAdvice() {
    try {
        const response = await fetch(apiURL)
        const data = await response.json()

        return data.slip.advice

    }
    catch (error) {
        console.error('Error loading advice bro...', error)
        return ('An error occured while fetching advice. Please try again later.')
    }
}
async function getAdviceId() {
    try {
        const response = await fetch(apiURL)
        const data = await response.json()

        return data.slip.slip_id

    }
    catch (error) {
        console.error('Error loading advice bro...', error)
        return ('An error occured whhile fetching advice. Please try again later.')
    }
}

async function displayAdvice() {
    const adviceText = await getAdvice()
    const adviceId = await getAdviceId(); console.log(adviceId)
    advice.innerHTML = adviceText
    // advice_no.innerHTML = adviceId
}
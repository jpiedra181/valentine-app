const buttonYes = document.querySelector('button.yes')
const buttonNo = document.querySelector('button.no')
const image = document.querySelector('img')
const question = document.querySelector('div.question')
const answer = document.querySelector('article.answers')

let scaleYes = 1
let scaleNo = 1
buttonNo.addEventListener('click', (e) => {
    e.preventDefault()
    image.src = './img/avatar-sad.webp'
    scaleNo -= 0.1
    scaleYes += 0.2
    buttonYes.style.scale = scaleYes 
    buttonNo.style.scale = scaleNo 
})
buttonYes.addEventListener('click', (e) => {
    e.preventDefault()
    image.src = './img/avatar-happy.webp'
    question.innerHTML = 'CONGRATULATIONS!!!!!'
    question.style.fontSize = '40px'
    question.style.fontWeight = 'bold'
    answer.style.display = 'none'

    // for (let i = 0; i < 10; i++) {
    //     createHeart()
    // }
    setInterval(createHeart, 300) // Create heart every 300ms indefinitely
})

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 2 + "s"; // Random speed
  
    document.getElementById("heartsContainer").appendChild(heart);
  
    setTimeout(() => {
      heart.remove(); // Remove after animation ends
    }, 3000);
  }
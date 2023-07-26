const btn = document.querySelector('.runnawayButton')
let position = 0

const moveButton = () => {
  btn.style.transform = `translate(${generateRandomNumber()}px, ${generateRandomNumber()}px)`
  btn.style.transition = 'all 0.2s ease'
}

btn.addEventListener('click', moveButton)
btn.addEventListener('mouseover', moveButton)

const accepted = document.getElementById('yes')

accepted.addEventListener('click', () => {
  let timerInterval
  Swal.fire({
    title: 'Obrigado por aceitar! 💖',
    html: 'Se prepara para o melhor date da sua vida',
    timer: 4000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
})

function generateRandomNumber() {
  return Math.floor(Math.random() * 150)
}

// new bootstrap.Modal("#movie-modal", {
//     keyboard: false,
//   });

const growcastContainer = document.querySelector('#growcast-spisodes')
const webinarContainer = document.querySelector('#webinar-episodes')
const jornadaContainer = document.querySelector('#jornada-ux-episodes')
const diversosContainer = document.querySelector('#diversos-episodes')
const btnHead = document.querySelector('#btn-head')
const iframeVideo = document.querySelector('#iframe-video')

function renderVideoCards(){
  movies.forEach(video =>{

    const divCol = document.createElement('div')
    divCol.classList.add('col-lg-3','col-md-6', 'col-12' , 'px-2', 'bg-black', 'p-0','cursor-pointer')

    divCol.addEventListener('mouseover', ()=>{
      divCol.classList.add('episode-details')
      btnWatch.classList.replace('d-none', 'd-block')

    })

    divCol.addEventListener('mouseleave', ()=>{
      divCol.classList.remove('episode-details')
      btnWatch.classList.replace('d-block', 'd-none')
    })

    const imgCard = document.createElement('img')
    imgCard.classList.add('img-fluid')
    imgCard.src = video.img

    const btnWatch = document.createElement('button')
    btnWatch.classList.add('btn', 'btn-black', 'd-none')
    btnWatch.setAttribute('type', 'button')
    btnWatch.setAttribute('data-bs-toggle', 'modal')
    btnWatch.setAttribute('data-bs-target', '#modal-episode')
    btnWatch.addEventListener('click', ()=>{
      iframeVideo.src = video.link
    })

    const pTitle = document.createElement('p')
    pTitle.classList.add('fs-5', 'p-2', 'episode-play')
    pTitle.innerHTML = `<i class="bi bi-play-circle fs-4"></i> ${video.title}`

    btnWatch.appendChild(pTitle)
    divCol.appendChild(imgCard)
    divCol.appendChild(btnWatch)


    if(video.category == 'growcast') growcastContainer.appendChild(divCol)
    if(video.category == 'webinar') webinarContainer.appendChild(divCol)
    if(video.category == 'ux-ui') jornadaContainer.appendChild(divCol)
    if(video.category == 'geral') diversosContainer.appendChild(divCol)
  
  })
}

btnHead.addEventListener('click', () =>{
  iframeVideo.src = movies[1].link
})

renderVideoCards()
import './style.css'

const contents = document.querySelector('.container__contents') as HTMLElement
const imgLists = document.querySelectorAll('.container--item') as NodeListOf<HTMLElement>
const next = document.getElementById('next') as HTMLButtonElement
const prev = document.getElementById('prev') as HTMLButtonElement
const listsOfLi = document.querySelectorAll('.dots li') as NodeListOf<HTMLElement>


let active: number = 0
const imagesLength: number = imgLists.length - 1;

let intervalImgs: number = setInterval(() => { next?.click() }, 3000)


// function for image slider
function imageSlider() {
  contents.style.left = -imgLists[active].offsetLeft + 'px';
  console.log(active)

  let lastActive = document.querySelector('li.active') as HTMLLIElement
  lastActive?.classList.remove('active')
  listsOfLi[active].classList.add('active')

  // if button click first clear the interval
  clearInterval(intervalImgs)

  // again start interval after 3 seconds
  intervalImgs = setInterval(() => {
    next?.click()
  }, 3000);

}


next?.addEventListener('click', () => {
  if (active < imagesLength) {
    active++;
  } else {
    active = 0
  }
  imageSlider()
})

prev?.addEventListener('click', () => {
  if (active > 0) {
    active--;
  } else {
    active = imagesLength;
  }
  imageSlider()
})



listsOfLi.forEach((li: HTMLElement, index: number) => {
  li.addEventListener('click', () => {
    // pass index which you click
    active = index
    imageSlider()
  })
})


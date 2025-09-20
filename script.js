const spreads = [
  { title: 'Whispered Imprints', img: 'images/Illus.jpg', text: 'A mix of small sketches and words. Some come from real days, others from the little pictures in my mind. Full of soft illustrations and little stories. Each page holds soft moments, gentle traces of thought and feeling.', bg: '#fde2e2' },
  { img: 'images/photo1.png', title: 'Our Second Meet', text: 'The day still stays in my memory. That evening, under the lights, it felt like the world slowed down. Just us, walking together, wrapped in a quiet kind of magic, even though neither of us expected it would turn out this way.', bg: '#fde2e2' },
  { img: 'images/photo2.png', title: 'Sunset by the sea', text: 'Maybe just this—watching the sky change colors, standing side by side, without needing to say anything.', bg: '#e2f0cb' },
  { img: 'images/photo3.png', title: 'Night sky with glowing streak', text: 'Somewhere under this sky, our wishes met. That’s how serendipity feels—unexpected, yet eternal.', bg: '#cbe7fd' },
  { img: 'images/photo4.png', title: 'Café Quiet Moments', text: 'Though we didn’t speak much, the silence made it a pleasant time.', bg: '#fce2fd' },
  { img: 'images/photo5.png', title: 'Under Moonlight', text: 'Even in silence, even in the dark, being with you feels like the safest place.', bg: '#fff0cb' },
  { img: 'images/photo6.png', title: 'Mountain View', text: 'With you, even faraway places feel closer, as if the world itself wants us to see its beauty together.', bg: '#ffd8cb' },
  { img: 'images/photo7.png', title: 'Sunflower Field', text: 'Just like sunflowers follow the sun, my heart finds its way back to you, always.', bg: '#d8cbff' },
  { img: 'images/photo8.png', title: 'Beneath the Tree', text: 'Sometimes, it is nothing but sitting quietly together, letting the moment hold us.', bg: '#cbf0fd' },
  { img: 'images/photo9.png', title: 'Among the Lilies', text: 'Across the water floating among the lilies, being with you feels calm and gentle.', bg: '#cbfdd8' },
  { title: 'Until the Next Page, <br> And so these quiet imprints stay with us.', text: '', bg: 'sparkles' }
];

const book = document.getElementById('book');
const mobileBook = document.getElementById('mobileBook');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const pageCounter = document.getElementById('pageCounter');

let desktopCurrent = 0;
let mobileCurrent = 0;

function buildDesktop() {
  if (!book) return;
  book.innerHTML = '';

  const cover = document.createElement('div');
  cover.className = 'sheet';
  cover.setAttribute('data-index', 0);
  cover.style.background = 'linear-gradient(to bottom, #fef9e4 0%, #fff 100%)';
  cover.innerHTML = `
    <div class="text-wrap"><h3>Magic in Strokes ✨</h3></div>
    <img src="images/cover.jpg" alt="cover">
    <div class="text-wrap"><p></p></div>
  `;
  book.appendChild(cover);

  spreads.forEach((s, i) => {
    const sheet = document.createElement('div');
    sheet.className = 'sheet';
    sheet.setAttribute('data-index', i + 1);

    if (s.bg === 'sparkles') {
      sheet.classList.add('sparkle-page');
      sheet.innerHTML = `
        <div class="sparkles"></div>
        <div class="text-wrap"><h3>${s.title}</h3></div>
        <div class="text-wrap"><p>${s.text}</p></div>
      `;
      const sparkleContainer = sheet.querySelector('.sparkles');
      for (let j = 0; j < 50; j++) {
        const star = document.createElement('span');
        star.className = 'sparkle';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        const dx = (Math.random() * 20 - 10) + 'px';
        const dy = (Math.random() * 20 - 10) + 'px';
        star.style.setProperty('--dx', dx);
        star.style.setProperty('--dy', dy);
        star.style.animationDelay = (Math.random() * 5) + 's';
        sparkleContainer.appendChild(star);
      }
    } else {
      sheet.style.background = `linear-gradient(to bottom, ${s.bg} 0%, #ffffff 100%)`;
      sheet.innerHTML = `
        <div class="text-wrap"><h3>${s.title}</h3></div>
        <img src="${s.img}" alt="">
        <div class="text-wrap"><p>${s.text}</p></div>
      `;
    }

    book.appendChild(sheet);
  });

  const allSheets = document.querySelectorAll('.book .sheet');
  allSheets.forEach((el, idx) => el.style.zIndex = spreads.length + 1 - idx);

  cover.addEventListener('click', () => {
    if (desktopCurrent === 0) next();
  });

  updateCounter();
}

function buildMobile() {
  if (!mobileBook) return;
  mobileBook.innerHTML = '';

  const coverPage = document.createElement('div');
  coverPage.className = 'mobile-page';
  coverPage.style.background = 'linear-gradient(to bottom, #fef9e4 0%, #fff 100%)';
  coverPage.innerHTML = `
    <div class="text-wrap"><h3>Magic in Strokes ✨</h3></div>
    <img src="images/cover.jpg" alt="cover">
    <div class="text-wrap"><p>Tap next to begin</p></div>
  `;
  mobileBook.appendChild(coverPage);

  spreads.forEach((s) => {
    const page = document.createElement('div');
    page.className = 'mobile-page';

    if (s.bg === 'sparkles') {
      page.classList.add('sparkle-page');
      page.innerHTML = `
        <div class="sparkles"></div>
        <div class="text-wrap"><h3>${s.title}</h3></div>
        <div class="text-wrap"><p>${s.text}</p></div>
      `;
      const sparkleContainer = page.querySelector('.sparkles');
      for (let j = 0; j < 50; j++) {
        const star = document.createElement('span');
        star.className = 'sparkle';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        const dx = (Math.random() * 20 - 10) + 'px';
        const dy = (Math.random() * 20 - 10) + 'px';
        star.style.setProperty('--dx', dx);
        star.style.setProperty('--dy', dy);
        star.style.animationDelay = (Math.random() * 5) + 's';
        sparkleContainer.appendChild(star);
      }
    } else {
      page.style.background = `linear-gradient(to bottom, ${s.bg} 0%, #ffffff 100%)`;
      page.innerHTML = `
        <div class="text-wrap"><h3>${s.title}</h3></div>
        <img src="${s.img}" alt="">
        <div class="text-wrap"><p>${s.text}</p></div>
      `;
    }

    mobileBook.appendChild(page);
  });

  updateCounter();
}

function isMobile() {
  return window.matchMedia('(max-width:768px)').matches;
}

function updateCounter() {
  if (!pageCounter) return;
  if (isMobile()) {
    const total = mobileBook.querySelectorAll('.mobile-page').length;
    pageCounter.textContent = `${mobileCurrent + 1} / ${total}`;
    mobileBook.style.transform = `translateX(-${mobileCurrent * 100}%)`;
  } else {
    const total = book.querySelectorAll('.sheet').length;
    pageCounter.textContent = `${desktopCurrent + 1} / ${total}`;
  }
}

function next() {
  if (isMobile()) {
    const total = mobileBook.querySelectorAll('.mobile-page').length;
    if (mobileCurrent < total - 1) mobileCurrent++;
  } else {
    const sheets = document.querySelectorAll('.book .sheet');
    if (desktopCurrent < sheets.length - 1) {
      sheets[desktopCurrent].classList.add('flipped');
      desktopCurrent++;
    }
  }
  updateCounter();
}

function prev() {
  if (isMobile()) {
    if (mobileCurrent > 0) mobileCurrent--;
  } else {
    const sheets = document.querySelectorAll('.book .sheet');
    if (desktopCurrent > 0) {
      desktopCurrent--;
      sheets[desktopCurrent].classList.remove('flipped');
    }
  }
  updateCounter();
}

let startX = 0;
if (mobileBook) {
  mobileBook.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  mobileBook.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff < -40) next();
    if (diff > 40) prev();
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});

if (nextBtn) nextBtn.addEventListener('click', ev => { ev.stopPropagation(); next(); });
if (prevBtn) prevBtn.addEventListener('click', ev => { ev.stopPropagation(); prev(); });

buildDesktop();
buildMobile();
updateCounter();

window.addEventListener('resize', () => {
  buildDesktop();
  buildMobile();
  updateCounter();
});

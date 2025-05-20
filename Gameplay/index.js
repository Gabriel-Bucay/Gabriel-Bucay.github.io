const slides = [
    {
      img: '/Images/gp-1.jpg',
      title: 'PvP Encounters',
      text: 'Board other crews vessels and engange on some adrenaline filled combat.',
      extra: 'Master different weapons and playstyle against other players.'
    },
    {
      img: '/Images/gp-2.jpg',
      title: 'Naval Combat',
      text: 'Prepare yourself with tactical and highstakes Pvp Naval battles.',
      extra: 'Deal damage, repair, and sail through rough seas while enganging other ships.'
    },
    {
      img: '/Images/gp-3.jpg',
      title: 'Sail the Seas',
      text: 'Set sail on your own ships with your crew and sea what lies instore for you in this adventure.',
      extra: 'Costumize and personalize your own ships.'
    },
    {
      img: '/Images/gp-4.jpg',
      title: 'Explore the story of these waters',
      text: 'Play through Tall Tales to experience Sea of Thieves unique take on a story-driven campaign.',
      extra: 'Learn every piece of lore of this mysterious place.'
    },
    {
      img: '/Images/gp-5.jpg',
      title: 'Hunt bounties',
      text: 'Hunt bounties for each factions and earn reputations.',
      extra: 'Raise your reputation for each faction for rewards.'
    },
    {
      img: '/Images/gp-6.jpg',
      title: 'Fishing',
      text: 'Take breaks from high octane adventures with some laid back fishing.',
      extra: 'Master this to earn hidden commendations.'
    }
  ];
  
  let currentIndex = 0;
  
  function updateSlide(index) {
    const slide = slides[index];
    document.getElementById('carousel-img').src = slide.img;
    document.getElementById('carousel-title').innerText = slide.title;
    document.getElementById('carousel-text').innerText = slide.text;
    document.getElementById('carousel-extra').innerText = slide.extra;
  
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
  
  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateSlide(currentIndex);
  }
  
  function createDots() {
    const dotContainer = document.getElementById('carousel-dots');
    dotContainer.innerHTML = ''; // clear old
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'dot';
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlide(currentIndex);
      });
      dotContainer.appendChild(dot);
    });
  }
  
  // Initialize
  createDots();
  updateSlide(0);  
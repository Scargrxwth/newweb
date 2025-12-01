// Бургер-меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
    });
  });
}

// Плавный скролл по data-scroll
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const targetSelector = btn.getAttribute('data-scroll');
    const target = document.querySelector(targetSelector);
    if (target) {
      e.preventDefault();
      const headerOffset = 72;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Фейковая отправка формы
const form = document.getElementById('form');
const success = document.getElementById('form-success');

if (form && success) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    success.classList.add('form__success--visible');
    form.reset();

    setTimeout(() => {
      success.classList.remove('form__success--visible');
    }, 4000);
  });
}

// Слайдер отзывов
const reviews = [
  {
    text: '«Очень деликатный подход: после чистки нет желания прятаться под тональный, кожа спокойная и живая.»',
    author: '— Дарья, 29 лет'
  },
  {
    text: '«После курса пилингов ушла тусклость, тон стал ровнее, а пост-акне заметно осветлились.»',
    author: '— Екатерина, 26 лет'
  },
  {
    text: '«Нравится, что всё объясняют простым языком и не навязывают лишних процедур, только то, что реально нужно.»',
    author: '— Ольга, 35 лет'
  },
  {
    text: '«Кожа стала спокойнее, ушло ощущение стянутости, наконец-то комфортно без плотного макияжа.»',
    author: '— Анна, 32 года'
  },
  {
    text: '«Каждое посещение — как маленький ритуал заботы, и результат виден в зеркале уже через пару недель.»',
    author: '— Мария, 31 год'
  }
];

const reviewsText = document.getElementById('reviews-text');
const reviewsAuthor = document.getElementById('reviews-author');
const prevBtn = document.getElementById('reviews-prev');
const nextBtn = document.getElementById('reviews-next');

let currentReview = 0;

function renderReview(index) {
  if (!reviewsText || !reviewsAuthor) return;
  const review = reviews[index];
  reviewsText.textContent = review.text;
  reviewsAuthor.textContent = review.author;
}

if (reviews.length && reviewsText && reviewsAuthor) {
  renderReview(currentReview);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentReview = (currentReview - 1 + reviews.length) % reviews.length;
      renderReview(currentReview);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentReview = (currentReview + 1) % reviews.length;
      renderReview(currentReview);
    });
  }
}


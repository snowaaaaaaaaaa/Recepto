// ===========================
// блок констант і налаштувань
// ===========================

/**кКлюч для зберігання рецептів в localStorage */
const STORAGE_KEY = 'recipe_book_recipes';

const ADMIN_PASSWORD = 'admin123';

/** доступні категорії рецептів */
const CATEGORIES = ['Сніданки', 'Обіди', 'Вечері', 'Десерти', 'Салати', 'Супи', 'Закуски', 'Напої'];

// ===========================
// тут знаходяться рецепти, зараз ще додам побільше нових
// ===========================

const SAMPLE_RECIPES = [
  {
    id: 'recipe_1',
    title: 'Вівсяна каша з ягодами та медом',
    description: 'Поживна та корисна вівсяна каша з свіжими ягодами, медом та горіхами. Ідеальний початок дня — приготується за 10 хвилин і зарядить вас енергією!',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800&fit=crop&q=80',
    category: 'Сніданки',
    difficulty: 1,
    time: 10,
    ingredients: [
      'Вівсяні пластівці — 100 г',
      'Молоко — 250 мл',
      'Мед — 1 ст. л.',
      'Свіжа малина — 50 г',
      'Чорниця — 50 г',
      'Волоські горіхи — 30 г',
      'Щіпка солі',
      'Кориця — за бажанням'
    ],
    steps: [
      'Залийте вівсяні пластівці молоком у невеликій каструлі.',
      'Поставте на середній вогонь і доведіть до кипіння, постійно помішуючи.',
      'Зменшіть вогонь до мінімуму, додайте щіпку солі та варіть 5 хвилин до загустіння.',
      'Перекладіть кашу в тарілку і залиште на 1–2 хвилини.',
      'Прикрасьте ягодами та подрібненими волоськими горіхами.',
      'Полийте медом та, за бажанням, посипте корицею. Подавайте одразу!'
    ],
    createdAt: Date.now() - 5 * 86400000
  },
  {
    id: 'recipe_2',
    title: 'Борщ з пампушками',
    description: 'Традиційний український борщ — гордість нашої кухні! Насичений бульйон на яловичині з буряком, капустою та сметаною. Подається з пишними часниковими пампушками.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&fit=crop&q=80',
    category: 'Обіди',
    difficulty: 4,
    time: 120,
    ingredients: [
      'Яловичина на кістці — 500 г',
      'Буряк — 2 середніх',
      'Свіжа капуста — 300 г',
      'Морква — 2 шт.',
      'Цибуля ріпчаста — 2 шт.',
      'Картопля — 3 шт.',
      'Томатна паста — 2 ст. л.',
      'Олія соняшникова — 2 ст. л.',
      'Оцет (9%) — 1 ч. л.',
      'Лавровий лист — 2 шт.',
      'Сіль, чорний перець — за смаком',
      'Сметана та зелень — для подачі'
    ],
    steps: [
      'Залийте яловичину 2 літрами холодної води. Доведіть до кипіння, знімаючи піну. Варіть на малому вогні 1,5 години з лавровим листям.',
      'Дістаньте м\'ясо, охолодіть і відокремте від кісток. Бульйон процідіть.',
      'Буряк очистіть і натріть на великій терці. Обсмажте на олії з додаванням оцту 5–7 хвилин.',
      'Цибулю і моркву дрібно покришіть. Обсмажте до золотистого кольору, додайте томатну пасту.',
      'У киплячий бульйон додайте порізану кубиками картоплю. Варіть 10 хвилин.',
      'Додайте нашатковану капусту та моркву з цибулею. Варіть ще 7 хвилин.',
      'Додайте буряк і порізане м\'ясо. Посоліть, поперчіть. Варіть ще 5 хвилин.',
      'Дайте борщу настоятися 15 хвилин. Подавайте зі сметаною, зеленню та пампушками!'
    ],
    createdAt: Date.now() - 4 * 86400000
  },
  {
    id: 'recipe_3',
    title: 'Шоколадний брауні',
    description: 'Ніжний і вологий шоколадний брауні з хрусткою скоринкою зверху і тягучою серединкою. Справжнє задоволення для шоколадних гурманів! Просто та швидко.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&fit=crop&q=80',
    category: 'Десерти',
    difficulty: 2,
    time: 40,
    ingredients: [
      'Темний шоколад (70%) — 200 г',
      'Вершкове масло — 150 г',
      'Цукор — 200 г',
      'Яйця — 3 шт.',
      'Пшеничне борошно — 80 г',
      'Какао-порошок — 2 ст. л.',
      'Ванільний цукор — 1 ч. л.',
      'Щіпка солі',
      'Горіхи (пекан або волоські) — 60 г (за бажанням)'
    ],
    steps: [
      'Розігрійте духовку до 175°C. Форму 20×20 см застеліть пергаментом.',
      'Розтопіть шоколад разом із вершковим маслом на водяній бані або в мікрохвильовці, помішуючи кожні 30 секунд.',
      'Зніміть з вогню, додайте цукор та ванільний цукор. Ретельно перемішайте.',
      'По одному вбивайте яйця, кожного разу добре збиваючи до однорідності.',
      'Просійте борошно, какао та сіль. Обережно введіть у шоколадну масу лопаткою.',
      'Якщо використовуєте горіхи — додайте їх зараз.',
      'Перелийте тісто у форму та запікайте 23–25 хвилин. Центр має ледь тремтіти!',
      'Охолодіть повністю перед нарізанням. Зберігайте при кімнатній температурі до 5 днів.'
    ],
    createdAt: Date.now() - 3 * 86400000
  },
  {
    id: 'recipe_4',
    title: 'Паста Карбонара',
    description: 'Класична італійська паста з шовковим соусом на основі яєць і пармезану та хрусткими шматочками бекону. Готується менш ніж за 30 хвилин — ідеально для швидкого обіду!',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&fit=crop&q=80',
    category: 'Обіди',
    difficulty: 3,
    time: 25,
    ingredients: [
      'Спагеті — 300 г',
      'Бекон або панчетта — 150 г',
      'Яйця — 2 шт.',
      'Жовтки — 2 шт.',
      'Пармезан (тертий) — 80 г',
      'Часник — 2 зубки',
      'Чорний перець (мелений) — за смаком',
      'Сіль — для варіння пасти',
      'Свіжа петрушка — для подачі'
    ],
    steps: [
      'Відваріть спагеті у великій кількості підсоленої води за інструкцією на упаковці до стану al dente.',
      'Бекон наріжте кубиками або смужками. Обсмажте на середньому вогні без олії 4–5 хвилин до хрусткого стану.',
      'Додайте роздавлений часник, обсмажте ще 1 хвилину. Зніміть з вогню.',
      'У мисці збийте яйця та жовтки з тертим пармезаном та щедрою кількістю чорного перцю.',
      'Злийте воду від варіння пасти, ЗБЕРЕЖІТЬ 1 склянку цієї води.',
      'Гарячі спагеті додайте до бекону (без вогню!). Швидко перемішайте.',
      'Влийте яєчну суміш і перемішуйте, поступово додаючи воду від пасти, доки соус не стане кремовим.',
      'Подавайте одразу, посипавши пармезаном та чорним перцем. Не нагрівайте повторно!'
    ],
    createdAt: Date.now() - 2 * 86400000
  },
  {
    id: 'recipe_5',
    title: 'Млинці з ванільним кремом',
    description: 'Ніжні тонкі млинці з ароматним ванільним кремом зі збитих вершків та свіжими фруктами. Ідеальний недільний сніданок для всієї родини — смачно і красиво!',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&fit=crop&q=80',
    category: 'Сніданки',
    difficulty: 2,
    time: 30,
    ingredients: [
      'Пшеничне борошно — 200 г',
      'Молоко — 500 мл',
      'Яйця — 2 шт.',
      'Вершкове масло (розтоплене) — 30 г',
      'Цукор — 1 ст. л.',
      'Ванільний цукор — 1 ч. л.',
      'Щіпка солі',
      '--- Ванільний крем ---',
      'Жирні вершки (33%) — 200 мл',
      'Цукрова пудра — 2 ст. л.',
      'Ваніль — 1 ч. л.',
      'Свіжі ягоди або фрукти — для подачі'
    ],
    steps: [
      'Просійте борошно в миску. Зробіть ямку і вбийте яйця.',
      'Поступово вливайте молоко, збиваючи вінчиком до однорідного тіста без грудочок.',
      'Додайте розтоплене масло, цукор, ванільний цукор та сіль. Перемішайте.',
      'Залиште тісто відпочити 15 хвилин при кімнатній температурі.',
      'Добре розігрійте сковорідку (24 см), злегка змастіть маслом.',
      'Влийте ~50 мл тіста, розподіліть тонким шаром. Смажте по 1–1,5 хвилини з кожного боку.',
      'Для крему: збийте холодні вершки з пудрою та ваніллю до пишних піків.',
      'Подавайте млинці з кремом та свіжими ягодами. Можна згорнути конвертиком або рулетиком!'
    ],
    createdAt: Date.now() - 1 * 86400000
  }
];

// ===========================
// блок про роботу з нашим сховищем
// ===========================

/** отримуємо всі рецепти зі сховища */
function getRecipes() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Помилка читання рецептів:', e);
    return [];
  }
}

/** зберігаємо масив рецептів */
function saveRecipes(recipes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
    return true;
  } catch (e) {
    console.error('Помилка збереження:', e);
    return false;
  }
}

/** отримуємо рецепт по айдішке */
function getRecipeById(id) {
  return getRecipes().find(r => r.id === id) || null;
}

/** додаємо новий рецепт */
function addRecipe(recipeData) {
  const recipes = getRecipes();
  const newRecipe = {
    ...recipeData,
    id: 'recipe_' + Date.now(),
    createdAt: Date.now()
  };
  recipes.unshift(newRecipe);
  saveRecipes(recipes);
  return newRecipe;
}

/** оновлюємо існуючий рецепт */
function updateRecipe(id, recipeData) {
  const recipes = getRecipes();
  const idx = recipes.findIndex(r => r.id === id);
  if (idx === -1) return false;
  recipes[idx] = { ...recipes[idx], ...recipeData, id, updatedAt: Date.now() };
  saveRecipes(recipes);
  return true;
}

/** видаляємо рецепт за ID */
function deleteRecipe(id) {
  const recipes = getRecipes().filter(r => r.id !== id);
  saveRecipes(recipes);
}

/** ініціалізуємо зразкові дані (якшо база порожня) */
function initSampleData() {
  if (getRecipes().length === 0) {
    saveRecipes(SAMPLE_RECIPES);
  }
}

// ===========================
// блок з допоміжними функціями
// ===========================

/**
 * генеруємо зірки для відображення складності
 * @param {number} rating  рейтинг від 1 до 5
 * @param {number} [max=5] максимальне значення
 * @returns {string} хтмл рядок з зірками
 */
function renderStars(rating, max = 5) {
  let html = '<div class="stars">';
  for (let i = 1; i <= max; i++) {
    html += `<span class="star ${i <= rating ? 'filled' : ''}">★</span>`;
  }
  html += '</div>';
  return html;
}

/**
 * форматуємо час приготування
 * @param {number} minutes к-сть хвилин
 * @returns {string} відформатований рядок
 */
function formatTime(minutes) {
  if (minutes < 60) return `${minutes} хв`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h} год ${m} хв` : `${h} год`;
}

/**
 * генеруємо картку рецепту
 * @param {Object} recipe об'єкт рецепту
 * @returns {string} рядок картки
 */
function renderRecipeCard(recipe) {
  return `
    <article class="recipe-card animate-fade-up" 
             onclick="openRecipe('${recipe.id}')" 
             role="button" 
             tabindex="0"
             aria-label="Відкрити рецепт: ${recipe.title}"
             onkeydown="if(event.key==='Enter') openRecipe('${recipe.id}')">
      <div class="card-image-wrap">
        <img 
          src="${escapeHtml(recipe.image)}" 
          alt="${escapeHtml(recipe.title)}"
          onerror="this.src='https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&fit=crop'"
          loading="lazy"
        />
        <span class="card-category">${escapeHtml(recipe.category)}</span>
        <span class="card-time-badge">⏱ ${formatTime(recipe.time)}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(recipe.title)}</h3>
        <p class="card-desc">${escapeHtml(recipe.description)}</p>
        <div class="card-footer">
          ${renderStars(recipe.difficulty)}
          <span class="card-time-text">🍴 Складність: ${recipe.difficulty}/5</span>
        </div>
      </div>
    </article>
  `;
}

/**
 * відкриває сторінку конкретного рецепту по айдішке
 * @param {string} id айдішка рецепту
 */
function openRecipe(id) {
  window.location.href = `recipe.html?id=${id}`;
}

/**
 * захист від xss, екранування хтмл символів
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * отримуємо параметр з юрл
 * @param {string} name назва параметра
 * @returns {string|null}
 */
function getUrlParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// ===========================
// тоаст повідомлення
// ===========================

/** контейнер для тоаст повідомлень, але створюється лише раз */
let toastContainer = null;

/**
 * показати коротке повідомлення 
 * @param {string} message текст
 * @param {'success'|'error'|'info'} [type='info'] тип
 * @param {number} [duration=3000] тривалість у мілісекундах
 */
function showToast(message, type = 'info', duration = 3000) {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const icons = { success: '✅', error: '❌', info: '💡' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;

  toastContainer.appendChild(toast);

  // авто діліт
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.4s ease forwards';
    toast.addEventListener('animationend', () => toast.remove());
  }, duration);
}

// ===========================
// меню на мобілках
// ===========================

/** ініціалізація бургер меню на мобілках */
function initMobileMenu() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.site-nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  // закрити при кліку поза меню
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
}

// ===========================
// блок про ініціалізацію при завантаженні
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  initSampleData();

  initMobileMenu();

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPage.includes(href.replace('./', ''))) {
      link.classList.add('active');
    }
  });
});

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
    image: 'https://volyngid.com/wp-content/uploads/vivsyana-kasha-yaki-pobichni-efekty-maye-ta-yak-chasto-mozhna-yiyi-vzhyvaty.jpeg',
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
    description: 'Традиційний український борщ — гордість нашої кухні!',
    image: 'https://kolobok.ua/i/81/39/86/813986/903e0db8ac0c24f9a068c8480b99fc17-quality_70Xresize_crop_1Xallow_enlarge_0Xw_698Xh_465.jpg',
    category: 'Обіди',
    difficulty: 4,
    time: 120,
    ingredients: ['Яловичина — 500 г'],
    steps: ['Готуємо борщ'],
    createdAt: Date.now() - 4 * 86400000
  },
  {
    id: 'recipe_3',
    title: 'Шоколадний брауні',
    description: 'Смачний шоколадний десерт.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800',
    category: 'Десерти',
    difficulty: 2,
    time: 40,
    ingredients: ['Шоколад'],
    steps: ['Готуємо'],
    createdAt: Date.now() - 3 * 86400000
  },
  {
    id: 'recipe_4',
    title: 'Паста Карбонара',
    description: 'Італійська класика.',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800',
    category: 'Обіди',
    difficulty: 3,
    time: 25,
    ingredients: ['Спагеті'],
    steps: ['Готуємо'],
    createdAt: Date.now() - 2 * 86400000
  },
  {
    id: 'recipe_5',
    title: 'Млинці з ванільним кремом',
    description: 'Сніданок.',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800',
    category: 'Сніданки',
    difficulty: 2,
    time: 30,
    ingredients: ['Борошно'],
    steps: ['Готуємо'],
    createdAt: Date.now() - 1 * 86400000
  },

  {
    id: 'recipe_6',
    title: 'Швидке печиво',
    description: 'Просте печиво.',
    image: 'https://plyashka.com/wp-content/uploads/2022/04/screenshot_20220413-223229_chrome-702x1024.jpg',
    category: 'Десерти',
    difficulty: 1,
    time: 25,
    ingredients: ['Цукор'],
    steps: ['Готуємо'],
    createdAt: Date.now()
  },
  {
    id: 'recipe_7',
    title: 'Печиво "Тріщинка"',
    description: 'Шоколадне печиво.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.TG_DTUiAA_rWzSo4fowPpgHaFv',
    category: 'Десерти',
    difficulty: 2,
    time: 60,
    ingredients: ['Какао'],
    steps: ['Готуємо'],
    createdAt: Date.now()
  },
  {
    id: 'recipe_8',
    title: 'Крафін',
    description: 'Випічка.',
    image: 'https://images.unian.net/photos/2021_04/thumb_files/1000_545_1619423693-2950.jpg',
    category: 'Десерти',
    difficulty: 4,
    time: 180,
    ingredients: ['Борошно'],
    steps: ['Готуємо'],
    createdAt: Date.now()
  },
  {
    id: 'recipe_9',
    title: 'Мурашник',
    description: 'Десерт.',
    image: 'https://www.photorecept.ru/wp-content/uploads/2021/11/pirozhnye-muravejnik',
    category: 'Десерти',
    difficulty: 2,
    time: 90,
    ingredients: ['Згущене молоко'],
    steps: ['Готуємо'],
    createdAt: Date.now()
  },
  {
    id: 'recipe_10',
    title: 'Медовик',
    description: 'Торт.',
    image: 'https://www.prodottitipicitoscani.it/images/biscotti',
    category: 'Десерти',
    difficulty: 3,
    time: 90,
    ingredients: ['Мед'],
    steps: ['Готуємо'],
    createdAt: Date.now()
  },
  {
    id: 'recipe_11',
    title: 'Лимонний пиріг',
    description: 'Пиріг.',
    image: 'https://lafoy.ru/photo_l/limonnyy-pirog',
    category: 'Десерти',
    difficulty: 3,
    time: 90,
    ingredients: ['Лимон'],
    steps: ['Готуємо'],
    createdAt: Date.now()
  },
  {
    id: 'recipe_12',
    title: 'Малиновий пиріг',
    description: 'Пиріг.',
    image: 'https://www.nyamburg.ru/wp-content/uploads/malinovyy-pirog',
    category: 'Десерти',
    difficulty: 2,
    time: 60,
    ingredients: ['Малина'],
    steps: ['Готуємо'],
    createdAt: Date.now()
  },
  {
    id: 'recipe_13',
    title: 'Печиво "Ракушки"',
    description: 'Сирне печиво.',
    image: 'https://tse4.mm.bing.net/th/id/OIP.qtWc_B7xdtubG6sYCKA-MgAAAA',
    category: 'Десерти',
    difficulty: 2,
    time: 40,
    ingredients: ['Творог'],
    steps: ['Готуємо'],
    createdAt: Date.now()
  }
];
    createdAt: Date.now()
  }

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

// ===========================
// блок констант і налаштувань
// ===========================

const STORAGE_KEY = 'recipe_book_recipes';
const ADMIN_PASSWORD = 'admin123';

const CATEGORIES = ['Сніданки', 'Обіди', 'Вечері', 'Десерти', 'Салати', 'Супи', 'Закуски', 'Напої'];

// ===========================
// тестові рецепти
// ===========================

const SAMPLE_RECIPES = [
  {
    id: 'recipe_1',
    title: 'Вівсяна каша',
    description: 'Простий сніданок',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800',
    category: 'Сніданки',
    difficulty: 1,
    time: 10,
    ingredients: ['Вівсянка'],
    steps: ['Зварити'],
    createdAt: Date.now() - 500000
  },
  {
    id: 'recipe_2',
    title: 'Борщ',
    description: 'Українська класика',
    image: 'https://images.unsplash.com/photo-1604908176997-431b6f4caa91?w=800',
    category: 'Обіди',
    difficulty: 4,
    time: 120,
    ingredients: ['Буряк'],
    steps: ['Готувати'],
    createdAt: Date.now() - 400000
  },
  {
    id: 'recipe_3',
    title: 'Брауні',
    description: 'Шоколадний десерт',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800',
    category: 'Десерти',
    difficulty: 2,
    time: 40,
    ingredients: ['Шоколад'],
    steps: ['Пекти'],
    createdAt: Date.now() - 300000
  },
  {
    id: 'recipe_4',
    title: 'Паста',
    description: 'Італія',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800',
    category: 'Обіди',
    difficulty: 3,
    time: 25,
    ingredients: ['Спагеті'],
    steps: ['Готувати'],
    createdAt: Date.now() - 200000
  },
  {
    id: 'recipe_5',
    title: 'Млинці',
    description: 'Сніданок',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800',
    category: 'Сніданки',
    difficulty: 2,
    time: 30,
    ingredients: ['Борошно'],
    steps: ['Смажити'],
    createdAt: Date.now() - 100000
  }
];

// ===========================
// localStorage
// ===========================

function getRecipes() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Помилка читання:', e);
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

function saveRecipes(recipes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
  } catch (e) {
    console.error('Помилка збереження:', e);
  }
}

function getRecipeById(id) {
  return getRecipes().find(r => r.id === id);
}

function addRecipe(data) {
  const recipes = getRecipes();
  const newRecipe = {
    ...data,
    id: 'recipe_' + Date.now(),
    createdAt: Date.now()
  };
  recipes.unshift(newRecipe);
  saveRecipes(recipes);
  return newRecipe;
}

function updateRecipe(id, data) {
  const recipes = getRecipes();
  const i = recipes.findIndex(r => r.id === id);
  if (i === -1) return false;

  recipes[i] = { ...recipes[i], ...data };
  saveRecipes(recipes);
  return true;
}

function deleteRecipe(id) {
  saveRecipes(getRecipes().filter(r => r.id !== id));
}

function initSampleData() {
  if (getRecipes().length === 0) {
    saveRecipes(SAMPLE_RECIPES);
  }
}

function renderStars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

function formatTime(min) {
  if (min < 60) return min + ' хв';
  return Math.floor(min / 60) + ' год';
}

function escapeHtml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;');
}

// ===========================
// навігація
// ===========================

function renderRecipeCard(r) {
  return `
    <div class="recipe-card" onclick="openRecipe('${r.id}')">
      <img src="${escapeHtml(r.image)}">
      <h3>${escapeHtml(r.title)}</h3>
      <p>${escapeHtml(r.description)}</p>
      <div>${renderStars(r.difficulty)}</div>
      <div>${formatTime(r.time)}</div>
    </div>
  `;
}

function openRecipe(id) {
  window.location.href = 'recipe.html?id=' + id;
}

// ===========================
// моб меню
// ===========================

function initMobileMenu() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.site-nav');
  if (!burger) return;

  burger.onclick = () => nav.classList.toggle('open');
}

// ===========================
// ініціалізація
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  initSampleData();
  initMobileMenu();
});

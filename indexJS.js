// 헤더 숨김/보이기
let prevScrollPos = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;
  header.style.top = currentScrollPos > prevScrollPos && currentScrollPos > 100 ? "-80px" : "0";
  prevScrollPos = currentScrollPos;
});

// 필터 버튼
function filterBlogs(category) {
  const blogItems = document.querySelectorAll('.RecentItem');
  const buttons = document.querySelectorAll('.category-buttons button');

  buttons.forEach(btn => btn.classList.remove('active'));
  const clickedButton = Array.from(buttons).find(btn => btn.innerText.includes(category) || (category === 'all' && btn.innerText === '전체'));
  if (clickedButton) clickedButton.classList.add('active');

  blogItems.forEach(item => {
    const itemCategory = item.querySelector('.RecentItem_Category').innerText;
    item.style.display = (category === 'all' || itemCategory.includes(category)) ? '' : 'none';
  });
}

// 맨 위로 버튼
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const topBtn = document.getElementById('topBtn');
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// 테마 전환 버튼
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
let isDark = false;

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('darkmode', isDark);
  themeIcon.src = isDark
    ? 'https://img.icons8.com/ios-filled/50/f9f9f9/moon-symbol.png'
    : 'https://img.icons8.com/ios-filled/50/f9f9f9/sun.png';
});

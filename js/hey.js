const items = [
    { id: 1, name: "商品1", img: "https://media.wepg.online/public/images/user_51282/1632556209_25092115095009000000614ed4b1a5994.jpg" },
    { id: 2, name: "商品2", img: "https://tshop.r10s.com/20f/d3f/8b25/4070/2098/cb1a/701a/11e5ecb3a50242ac110003.jpg?_ex=486x486" },
    { id: 3, name: "商品3", img: "https://media.wepg.online/public/images/user_51282/1632555987_25092115094627000000614ed3d3d0e23.jpg" },
    { id: 4, name: "商品4", img: "https://media.wepg.online/public/images/user_51282/1632556067_25092115094747000000614ed4237131e.jpg" },
    { id: 5, name: "商品5", img: "https://media.wepg.online/public/images/user_51282/1632556116_25092115094836000000614ed45404d37.jpg" }
];

let activeIndex = 0;

function generateItems() {
    const container = document.getElementById('items-container');
    container.innerHTML = items.map(item => `
        <div class="item">
            <img src="${item.img}" alt="${item.name}">
            <div>${item.name}</div>
        </div>
    `).join('');
}

function moveLeft() {
    activeIndex = (activeIndex > 0) ? activeIndex - 1 : items.length - 1;
    updateCarousel();
}

function moveRight() {
    activeIndex = (activeIndex + 1) % items.length;
    updateCarousel();
}

function updateCarousel() {
    const container = document.getElementById('items-container');
    const itemWidth = document.querySelector('.item').offsetWidth;
    const margin = 15; // 左右边距
    const offset = (itemWidth + margin * 2) * activeIndex;
    container.style.transform = `translateX(-${offset}px)`;
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    generateItems();
    updateCarousel();
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const newTransform = `translateX(-${index * 100}%)`;
    slides.forEach(slide => {
        slide.style.transform = newTransform;
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    setInterval(nextSlide, 3000); // 每3秒切換一次幻燈片
});

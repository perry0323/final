document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('main-image');
    const flexImages = document.querySelectorAll('.flex_image');
    const stars = document.querySelectorAll('.rating input');

    // 變更圖片事件
    flexImages.forEach(images => {
        images.addEventListener('mouseover', function () {
            mainImage.src = this.getAttribute('data-image');
        });

        images.addEventListener('mouseout', function () {
            mainImage.src = '../images/胖胖水豚1.jpg'; // 恢复为初始图片
        });
    });

    // 評分事件
    stars.forEach(star => {
        star.addEventListener('change', function () {
            const rating = this.value;
            const starLabels = this.parentElement.querySelectorAll('label');
            starLabels.forEach((label, index) => {
                if (index < 5 - rating) {
                    label.style.color = '#ccc';
                } else {
                    label.style.color = '#ffcc00';
                }
            });
            console.log(`評分: ${rating} 星`);
        });
    });
});



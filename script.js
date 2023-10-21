const images = [
    'assets/StarRail_Image_1696141531.png',
    'assets/StarRail_Image_1697858717.png',
    'assets/StarRail_Image_1697858971.png',
];

const text = [
    'This is the Trailblazer.',
    'This is Lynx.',
    'This is Sushang.',
];

let currentIndex = 0;

function changeContent(direction) {
    if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length;
    }

    const changeableImg = document.getElementById('changeable_img');
    const changeableText = document.getElementById('changeable_text');

    changeableImg.src = images[currentIndex];
    changeableText.textContent = text[currentIndex];
}

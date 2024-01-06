const container = document.querySelector('.container');
// Icons for each circle
const icons = [
    'https://www.svgrepo.com/show/447394/html.svg',
    'https://www.svgrepo.com/show/424849/css-file-type.svg',
    'https://www.svgrepo.com/show/339301/javascript.svg',
    'https://www.svgrepo.com/show/333590/react.svg',
    'https://www.svgrepo.com/show/353724/express.svg',
    'https://www.svgrepo.com/show/473729/mongodb.svg',
    'https://www.svgrepo.com/show/314392/node.svg',
    'https://www.svgrepo.com/show/473818/unity.svg',
    'https://www.svgrepo.com/show/473563/blender.svg',
    'https://www.svgrepo.com/show/508906/cplusplus.svg',

]


function generateCircles(){

    const existingCircles = document.querySelectorAll('.circle');
    existingCircles.forEach(circle => circle.remove());

    for (let i = 10; i < 175; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        const containerRect = container.getBoundingClientRect();
        const initialX = containerRect.width / 2;
        const initialY = containerRect.height / 2;

        anime({
            targets: circle,
            opacity: 1,
            duration: 1000, // Adjust the duration as needed
            easing: 'easeInOutQuad' // Use a different easing function if desired
        });
        // Decide whether to add an image or not
        const addImage = Math.random() > 0.5;

        if (addImage) {
            const icon = document.createElement('img');
            icon.classList.add('icon');
            const randomIndex = Math.floor(Math.random() * icons.length);
            icon.src = icons[randomIndex];
            circle.appendChild(icon);
        }

        const circleSize = anime.random(20, 50);
        circle.style.width = `${circleSize}px`;
        circle.style.height = `${circleSize}px`;

        container.appendChild(circle);

        setTimeout(() => {
            circle.style.opacity = 1;
        }, 0);

        circle.addEventListener('click', () => {
            circle.classList.toggle('clicked');
        });
}

    anime({
        targets: '.circle',
        translateX: function(){
            return anime.random(-window.innerWidth / 2, window.innerWidth / 2)
        },
        translateY: function(){
            return anime.random(-window.innerHeight/2, window.innerHeight/2)
        },
        scale: function(){
            return anime.random(1,6)
        },
        
    });
}

function preloadImages(array) {
    return Promise.all(array.map((src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = src;
        });
    }));
}
preloadImages(icons).then(() => {
    generateCircles();
});
setInterval(generateCircles, 5000);
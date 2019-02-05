(() => {
    setTimeout(() => {
        const rating = document.getElementsByTagName('rating-component')[0];
        rating.setAttribute('value', '5');
    }, 3000);
})();
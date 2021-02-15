const shareBtn = document.getElementById('share');

shareBtn.addEventListener('click', () => {
    if(navigator.canShare) {
        navigator.share({
            url: 'https://www.gambardella.eng.br',
            title: 'PWA is the future of the Web!',
            text: 'I learned how to build a PWA today.'
        })
    } else {
        alert("Sharing is not supported");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element.active');
    const infoPanel = document.getElementById('info-panel');
    const closeBtn = document.getElementById('close-btn');

    elements.forEach(el => {
        el.addEventListener('click', () => {
            const name = el.getAttribute('data-name');
            const desc = el.getAttribute('data-desc');
            const img = el.getAttribute('data-img');

            document.getElementById('info-title').textContent = name;
            document.getElementById('info-desc').textContent = desc;
            const imgElement = document.getElementById('info-img');
            
            if(img) {
                imgElement.src = img;
                imgElement.style.display = 'block';
            }

            infoPanel.classList.add('visible');

            if (window.innerWidth <= 1024) {
                setTimeout(() => {
                    infoPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        infoPanel.classList.remove('visible');
    });
});
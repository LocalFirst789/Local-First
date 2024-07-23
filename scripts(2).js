<script>
    const menuButton = document.querySelector('.menu-button');
    const body = document.querySelector('body');

    menuButton.addEventListener('click', () => {
        body.classList.toggle('menu-open');
    });
</script>

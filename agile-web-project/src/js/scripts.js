// filepath: /agile-web-project/agile-web-project/src/js/scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const agileSections = document.querySelectorAll('.agile-section');
    const buttons = document.querySelectorAll('.toggle-info');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-target');
            const section = document.getElementById(sectionId);
            section.classList.toggle('hidden');
        });
    });

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    document.querySelectorAll('a.scroll-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});
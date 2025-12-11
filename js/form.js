document.addEventListener('DOMContentLoaded', function() {
    const fieldHints = {
        'input[type="text"]': {
            normal: "Введите имя",
            focus: "Петр Петров"
        },
        'input[type="tel"]': {
            normal: "Введите телефон", 
            focus: "+7 (___) ___-__-__"
        },
        'textarea': {
            normal: "Введите комментарий",
            focus: "Что Вас интересует?"
        }
    };
    Object.keys(fieldHints).forEach(selector => {
        const fields = document.querySelectorAll(selector);
        const hints = fieldHints[selector];
        fields.forEach(field => {
            field.placeholder = hints.normal;          
            field.addEventListener('focus', function() {
                this.placeholder = hints.focus;
            });
            field.addEventListener('blur', function() {
                this.placeholder = hints.normal;
            });
        });
    });
});
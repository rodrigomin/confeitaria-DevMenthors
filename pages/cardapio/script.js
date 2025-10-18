// Funções utilitárias
function debounce(fn, wait) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.apply(context, args);
        }, wait);
    };
}

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.card-button');
    var searchInput = document.getElementById('search-input');
    var cards = document.querySelectorAll('.content .card');

    // Redirecionamento ao clicar em "Pedir agora"
    if (buttons && buttons.length) {
        buttons.forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = '../pedido/index.html';
            });
        });
    }

    // Filtrar cards em tempo real com debounce
    function filterCards() {
        if (!searchInput) return;
        var q = searchInput.value.trim().toLowerCase();

        // Se query vazia, mostra todos
        if (q === '') {
            cards.forEach(function (c) {
                c.style.display = '';
            });
            // esconder mensagem de nenhum resultado se existir
            var nr = document.querySelector('.no-results');
            if (nr) nr.classList.remove('show');
            return;
        }

        cards.forEach(function (c) {
            var title = (c.querySelector('h2') && c.querySelector('h2').textContent) || '';
            var descr = (c.querySelector('.descri') && c.querySelector('.descri').textContent) || '';
            var price = (c.querySelector('p') && c.querySelector('p').textContent) || '';

            var hay = (title + ' ' + descr + ' ' + price).toLowerCase();
            if (hay.indexOf(q) !== -1) {
                c.style.display = '';
            } else {
                c.style.display = 'none';
            }
        });

        // verificar se algum card está visível
        var anyVisible = Array.prototype.slice.call(cards).some(function (c) {
            return c.style.display !== 'none';
        });
        var noResultsEl = document.querySelector('.no-results');
        if (!noResultsEl) {
            noResultsEl = document.createElement('div');
            noResultsEl.className = 'no-results';
            noResultsEl.textContent = 'Nenhum produto com esse nome';
            document.body.appendChild(noResultsEl);
        }

        if (!anyVisible) {
            noResultsEl.classList.add('show');
        } else {
            noResultsEl.classList.remove('show');
        }
    }

    var debouncedFilter = debounce(filterCards, 180);

    if (searchInput) {
        searchInput.addEventListener('input', debouncedFilter);
        // Permite busca ao pressionar Enter
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                filterCards();
            }
        });
    }
});


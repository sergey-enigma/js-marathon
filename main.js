(function() {
    const $buttonKick = document.getElementById('btn-kick');
    const $buttonHealing = document.getElementById('btn-healing');

    const character = {
        name: document.getElementById('name-character').innerText,
        hp: {
            default: 100,
            damage: 100,
            text: document.getElementById('health-character'),
            progress: document.getElementById('progressbar-character')
        }
    };

    const enemy = {
        name: document.getElementById('name-enemy').innerText,
        hp: {
            default: 100,
            damage: 100,
            text: document.getElementById('health-enemy'),
            progress: document.getElementById('progressbar-enemy')
        }
    };

    $buttonKick.addEventListener('click', function() {
        changeHP(character, random(20));
        changeHP(enemy, random(20));
    });
    $buttonHealing.addEventListener('click', function() {
        changeHP(character, -random(20));
        changeHP(enemy, -random(20));
    });

    function init() {
        character.hp.damage = 100;
        enemy.hp.damage = 100;
        render();
    }

    function render() {
        renderHP(character);
        renderHP(enemy);
    }

    function renderHP(pokemon) {
        renderHPLife(pokemon);
        renderHPProgressbar(pokemon);
    }

    function renderHPLife(pokemon) {
        pokemon.hp.text.innerText = pokemon.hp.damage + ' / ' + pokemon.hp.default;
    }

    function renderHPProgressbar(pokemon) {
        pokemon.hp.progress.style.width = pokemon.hp.damage + '%';
    }

    function changeHP(pokemon, count) {
        pokemon.hp.damage = Math.max(pokemon.hp.damage - count, 0);
        if (pokemon.hp.damage === 0) {
            alert('Looser ' + pokemon.name + '. Restart the Game');
            init();
        }
        renderHP(pokemon);
    }

    function random(num) {
        return Math.ceil(Math.random() * num);
    }

    init();
}());

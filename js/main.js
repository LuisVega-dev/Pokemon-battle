const damege_10 = document.querySelector('.attack-1')
const damege_20 = document.querySelector('.attack-2')
const damege_30 = document.querySelector('.attack-3')
const damege_40 = document.querySelector('.attack-4')

const damage_life = document.querySelector('.life-meter-1');
let life = 100;

damege_10.addEventListener('click', () => {
    life = life - 10;
    damage_life.innerHTML = `${life}%`;
    
    if (life == 0 || life < 0) {
        window.location.reload()
        alert('Haz ganado.')
        life = 100
    };
});

damege_20.addEventListener('click', () => {
    life = life - 20;
    damage_life.innerHTML = `${life}%`;
    if (life == 0 || life < 0) {
        window.location.reload()
        alert('Haz ganado.')
        life = 100
    };
});

damege_30.addEventListener('click', () => {
    life = life - 30;
    damage_life.innerHTML = `${life}%`;
    if (life == 0 || life < 0) {
        window.location.reload()
        alert('Haz ganado.')
        life = 100
    };
});

damege_40.addEventListener('click', () => {
    life = life - 40;
    damage_life.innerHTML = `${life}%`;
    if (life == 0 || life < 0) {
        window.location.reload()
        alert('Haz ganado.')
        life = 100
    };
});

damage_life.innerHTML = `${life}%`;
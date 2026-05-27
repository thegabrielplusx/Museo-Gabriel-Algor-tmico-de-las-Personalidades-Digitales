// logica js basicas amigo 
document.addEventListener('pointerdown', (e) => {
    if (e.target.matches('.censor-bar')) {
        e.target.style.backgroundColor = '#444';
        e.target.style.color = '#fff';
    }
});

document.addEventListener('pointerup', (e) => {
    if (e.target.matches('.censor-bar')) {
        e.target.style.backgroundColor = '#000';
        e.target.style.color = ''; 
    }
});

document.addEventListener('pointerout', (e) => {
    if (e.target.matches('.censor-bar')) {
        e.target.style.backgroundColor = '#000';
        e.target.style.color = ''; 
    }
});

const characterList = document.querySelectorAll('.character');
let imgDict = {
    'cyclop': './src/imgs/card-ciclope.png',
    'jean-grey': './src/imgs/card-jean-grey.png',
    'shadowcat': './src/imgs/card-lince-negra.png',
    'magneto': './src/imgs/card-magneto.png',
    'nightcrawler': './src/imgs/card-noturno.png',
    'rogue': './src/imgs/card-vampira.png',
    'storm': './src/imgs/card-tempestade.png',
    'wolverine': './src/imgs/card-wolverine.png'
}

characterList.forEach(character => 
    character.addEventListener('mouseenter', () => {

        smallWindowFix();

        removeCharacterSelection();

        character.classList.add('selected');

        updateSelectedCharacterImg(character);
        
        updateSelectedCharacterName(character);

        updateSelectedCharacterDesc(character);
}));

function smallWindowFix() {
    if (window.innerWidth < 450) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateSelectedCharacterDesc(character) {
    const characterSelectedDesc = document.getElementById('character-description');
    characterSelectedDesc.innerText = character.getAttribute('data-description');
}

function updateSelectedCharacterName(character) {
    const characterSelectedName = document.getElementById('character-name');
    characterSelectedName.innerText = character.getAttribute('data-name');
}

function updateSelectedCharacterImg(character) {
    const characterSelectedPhoto = document.querySelector('.character-photo');
    characterSelectedPhoto.src = imgDict[character.id];
}

function removeCharacterSelection() {
    const prevCharacter = document.querySelector('.selected');
    prevCharacter.classList.remove('selected');
}


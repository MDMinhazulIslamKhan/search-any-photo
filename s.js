const photo = () => {
    const input = document.getElementById('input').value;
    fetching(input);
}

const fetching = p => {
    fetch(`https://pixabay.com/api/?key=15674931-a9d714b6e9d654524df198e00&q=${p}&image_type=photo&pretty=true`)
        .then(response => response.json())
        .then(data => looping(data.hits))
}

const looping = (url) => {
    const div = document.getElementById('ssss');
    div.innerHTML = '';
    for (x of url) {
        makeImage(x.largeImageURL)
    }
}


const makeImage = (sasas) => {
    const div = document.getElementById('ssss');
    const img = document.createElement('img');
    const br = document.createElement('br');
    img.setAttribute("src", `${sasas}`);
    img.setAttribute("style", `width: 100%;;margin: auto;`);
    img.classList.add('img');
    div.appendChild(img);
}
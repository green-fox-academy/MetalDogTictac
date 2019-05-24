window.onload = () => {
    let songsReq = new XMLHttpRequest();
    songsReq.open("GET", "http://localhost:3007/songs");
    songsReq.send();
    songsReq.onload = (response) => {
        if (response.target.status === 200) {
            let resultObject = JSON.parse(response.target.response);
            resultObject.forEach(song => {
                document.querySelector('.mainContainer').appendChild(createTitle(song));
                document.querySelector('.mainContainer').appendChild(createSongIframe(song));
            })
        }
    }
}

const createTitle = (song) => {
    let currentTitle = document.createElement('div');
    let currentHeader = document.createElement('h1');
    currentHeader.textContent = song.singer;
    let currentParagraph = document.createElement('p');
    currentParagraph.textContent = song.title;
    currentTitle.appendChild(currentHeader);
    currentTitle.appendChild(currentParagraph);
    currentTitle.classList.add('title');
    return currentTitle;
}

const createSongIframe = (songObject) => {
    let currentIframe = document.createElement('iframe');
    currentIframe.width = '500';
    currentIframe.height = '500';
    currentIframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    currentIframe.src = songObject.url;
    currentIframe.classList.add('video');
    return currentIframe;
}
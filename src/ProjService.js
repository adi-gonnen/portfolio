const projects = [
    {
        id: 'swap',
        name: 'Swap & Play ',
        subName: '(final project)',
        desc: 'This project is a single page app built from scratch with server and front side. It has 3 collections of data, users and full CRUD.' ,
        labels: ['Vue-cli', 'Node.js', 'SCSS', 'MongoDB', 'Cloudinary'],
        src: 'img/swap.png',
        href: 'https://swapandplay.herokuapp.com',
        code: 'https://github.com/adi-gonnen/swap-and-play'
        
    },
    {
        id: 'meme',
        name: 'Meme Generator ',
        subName: '(mid project)',
        desc: 'A nice app to build memes. Still without framework- just pure JS, CSS and canvas' ,
        labels: ['js', 'CSS', 'canvas', 'git-hub'],
        src: 'img/meme.jpg',
        href: 'https://adi-gonnen.github.io/meme-generator/',
        code: 'https://github.com/adi-gonnen/meme-generator'
    },
    {
        id: 'mine',
        name: 'Mine Sweeper',
        desc: 'This famouse game was my first test at Coding Academy: built it from scratch with all the rulls and 3 levels. It has a pure JS (no framework yet) and a very basic CSS' ,
        labels: ['js'],
        src: 'img/mine.png',
        href: 'https://adi-gonnen.github.io/mine-sweeper/',
        code: 'https://github.com/adi-gonnen/mine-sweeper'
    },
    {
        id: 'weather',
        name: 'Weather Update',
        desc: 'A small app to render weather and map location with API. Pure JS and very basic CSS' ,
        labels: ['js', 'rest-API', 'axios'],
        src: 'img/weather.png',
        href: 'https://adi-gonnen.github.io/travel-tip/',
        code: 'https://github.com/adi-gonnen/travel-tip'
    },
    {
        id: 'movie',
        name: 'Movies',
        desc: 'A small app to render movies with some data from API. Built with React' ,
        labels: ['React', 'rest-API', 'axios', 'CSS', 'CRUD'],
        src: 'img/movie.png',
        // href: 'https://adi-gonnen.github.io/cinema/#/',
        code: 'https://github.com/adi-gonnen/cinema'
    },
    {
        id: 'psd',
        name: 'psd-to-html',
        desc: 'Practice some real job- get a psd page, turn it into an html page' ,
        labels: ['js', 'CSS'],
        src: 'img/psd.png',
        href: 'https://adi-gonnen.github.io/psd-to-html/',
        code: 'https://github.com/adi-gonnen/psd-to-html'
    },

     
]

function getProjects() {
    return projects
}

export default {
    getProjects 
}
const users = [
    { username: "user", password: "0123456789" },
    { username: "lanhuong", password: "mo09112403" }
];


const genres = [
    {
        imgSrc: 'assets/img/rock.jpg',
        altText: 'Rock Music',
        title: 'Rock',
        description: 'Experience the raw energy and electrifying riffs of rock music. From classic to modern rock, find your favorite bands and songs.',
        link: 'https://en.wikipedia.org/wiki/Rock_music'
    },
    {
        imgSrc: 'assets/img/pop.jpg',
        altText: 'Pop Music',
        title: 'Pop',
        description: 'Discover the catchy beats and infectious melodies of pop music. Explore chart-topping hits and the latest trends in the genre.',
        link: 'https://en.wikipedia.org/wiki/Pop_music'
    },
    {
        imgSrc: 'assets/img/jazz.webp',
        altText: 'Jazz Music',
        title: 'Jazz',
        description: 'Dive into the smooth and sophisticated world of jazz. Enjoy improvisational rhythms and timeless classics from legendary artists.',
        link: 'https://en.wikipedia.org/wiki/Jazz'
    },
    {
        imgSrc: 'assets/img/hiphop.jpg',
        altText: 'Hip Hop Music',
        title: 'Hip Hop',
        description: 'Get into the groove with hip hop music. Explore the beats, rhythms, and lyrical prowess of one of the most dynamic genres.',
        link: 'https://en.wikipedia.org/wiki/Hip_hop_music'
    },
    {
        imgSrc: 'assets/img/classical.jpg',
        altText: 'Classical Music',
        title: 'Classical',
        description: 'Immerse yourself in the elegant and timeless world of classical music. From Beethoven to Bach, experience the beauty of orchestral compositions.',
        link: 'https://en.wikipedia.org/wiki/Classical_music'
    },
    {
        imgSrc: 'assets/img/electronic.jpg',
        altText: 'Electronic Music',
        title: 'Electronic',
        description: 'Explore the innovative and dynamic world of electronic music. Discover the latest in EDM, house, techno, and more.',
        link: 'https://en.wikipedia.org/wiki/Electronic_music'
    }
];

const carouselData = [
    {
        src: 'assets/img/a1.webp',
        alt: 'Album 1'
    },
    {
        src: 'assets/img/a2.jpg',
        alt: 'Album 2'
    },
    {
        src: 'assets/img/a3.webp',
        alt: 'Album 3'
    },
    {
        src: 'assets/img/a4.jpg',
        alt: 'Album 4'
    },
    {
        src: 'assets/img/a5.jpeg',
        alt: 'Album 5'
    }
];
const playlists = [
    {
        title: "Sad Songs",
        image: "assets/img/sadsongs.jpg",
        songs: [
            { title: "Cheer Up", audio: "assets/songs/cheerup.mp3",image:"assets/img/twice.jpg" },
            { title: "Flower", audio: "assets/songs/flower.mp3",image:"assets/img/kpop.jpg" },
            { title: "Ditto", audio: "assets/songs/ditto.mp3",image:"assets/img/kpop.jpg" }
        ]
    },
    {
        title: "Chill Vibes",
        image: "assets/img/chill.jpg",
        songs: [
            { title: "Cheer Up", audio: "assets/songs/cheerup.mp3",image:"assets/img/twice.jpg" },
            { title: "Flower", audio: "assets/songs/flower.mp3",image:"assets/img/kpop.jpg" },
            { title: "Ditto", audio: "assets/songs/ditto.mp3",image:"assets/img/kpop.jpg" }
        ]
    },
    {
        title: "Top Hits",
        image: "assets/img/tophits.jpg",
        songs: [
            { title: "Cheer Up", audio: "assets/songs/cheerup.mp3",image:"assets/img/twice.jpg" },
            { title: "Flower", audio: "assets/songs/flower.mp3",image:"assets/img/kpop.jpg" },
            { title: "Ditto", audio: "assets/songs/ditto.mp3",image:"assets/img/kpop.jpg" }
        ]
    },
    {
        title: "Workout",
        image: "assets/img/workout.jpg",
        songs: [
            { title: "Cheer Up", audio: "assets/songs/cheerup.mp3",image:"assets/img/twice.jpg" },
            { title: "Flower", audio: "assets/songs/flower.mp3",image:"assets/img/kpop.jpg" },
            { title: "Ditto", audio: "assets/songs/ditto.mp3",image:"assets/img/kpop.jpg" }
        ]
    },
    {
        title: "Party",
        image: "assets/img/party.png",
        songs: [
            { title: "Cheer Up", audio: "assets/songs/cheerup.mp3",image:"assets/img/twice.jpg" },
            { title: "Flower", audio: "assets/songs/flower.mp3",image:"assets/img/kpop.jpg" },
            { title: "Ditto", audio: "assets/songs/ditto.mp3",image:"assets/img/kpop.jpg" }
        ]
    },
    {
        title: "Study",
        image: "assets/img/study.jpeg",
        songs: [
            { title: "Cheer Up", audio: "assets/songs/cheerup.mp3",image:"assets/img/twice.jpg" },
            { title: "Flower", audio: "assets/songs/flower.mp3",image:"assets/img/kpop.jpg" },
            { title: "Ditto", audio: "assets/songs/ditto.mp3",image:"assets/img/kpop.jpg" }
        ]
    },
    {
        title: "Focus",
        image: "assets/img/focus.jpg",
        songs: [
            { title: "Cheer Up", audio: "assets/songs/cheerup.mp3",image:"assets/img/twice.jpg" },
            { title: "Flower", audio: "assets/songs/flower.mp3",image:"assets/img/kpop.jpg" },
            { title: "Ditto", audio: "assets/songs/ditto.mp3",image:"assets/img/kpop.jpg" }
        ]
    },
    {
        title: "Sleep",
        image: "assets/img/sleep.jpg",
        songs: [
            { title: "Cheer Up", audio: "assets/songs/cheerup.mp3",image:"assets/img/twice.jpg" },
            { title: "Flower", audio: "assets/songs/flower.mp3",image:"assets/img/kpop.jpg" },
            { title: "Ditto", audio: "assets/songs/ditto.mp3",image:"assets/img/kpop.jpg" }
        ]
    }
];

const videoData = [
    {
        videoSrc: 'assets/video/cheerup.mp4',
        imgSrc: 'assets/img/twice.jpg',
        altText: 'Video 1',
        title: 'Cheer Up'
    },
    {
        videoSrc: 'assets/video/abcd.mp4',
        imgSrc: 'assets/img/nayeon.webp',
        altText: 'Video 1',
        title: 'ABCD'
    },
    {
        videoSrc: 'assets/video/runaway.mp4',
        imgSrc: 'assets/img/tzuyu.jpg',
        altText: 'Video 1',
        title: 'Run Away'
    },
    {
        videoSrc: 'assets/video/whatislove.mp4',
        imgSrc: 'assets/img/twice.jpg',
        altText: 'Video 1',
        title: 'What Is Love'
    },
    {
        videoSrc: 'assets/video/killingmegood.mp4',
        imgSrc: 'assets/img/jihyo.jpg',
        altText: 'Video 1',
        title: 'Killing Me Good'
    },
    {
        videoSrc: 'assets/video/dynamite.mp4',
        imgSrc: 'assets/img/bts.webp',
        altText: 'Video 1',
        title: 'Dynamite'
    }
];
const albums = [
    {
        title: "V-POP",
        image: "assets/img/vpop.jpg",
        songs: [
            { title: "ABCD", audio: "assets/songs/abcd.mp3",image:"assets/img/nayeon.webp" },
            { title: "POP", audio: "assets/songs/pop.mp3",image:"assets/img/nayeon.webp" },
            { title: "Yes Or Yes", audio: "assets/songs/yesoryes.mp3",image:"assets/img/twice.jpg" }
        ]
    },
    {
        title: "K-POP",
        image: "assets/img/kpop.jpg",
        songs: [
            { title: "Cheer Up", audio: "assets/songs/cheerup.mp3",image:"assets/img/twice.jpg" },
            { title: "Flower", audio: "assets/songs/flower.mp3",image:"assets/img/kpop.jpg" },
            { title: "Ditto", audio: "assets/songs/ditto.mp3",image:"assets/img/kpop.jpg" }
        ]
    },
    {
        title: "US-UK",
        image: "assets/img/usuk.png",
        songs: [
            { title: "ABCD", audio: "assets/songs/abcd.mp3",image:"assets/img/nayeon.webp" },
            { title: "POP", audio: "assets/songs/pop.mp3",image:"assets/img/nayeon.webp" },
            { title: "Yes Or Yes", audio: "assets/songs/yesoryes.mp3",image:"assets/img/twice.jpg" }
        ]
    },
    {
        title: "J-POP",
        image: "assets/img/jpop.jpg",
        songs: [
            { title: "Cheer Up", audio: "assets/songs/cheerup.mp3",image:"assets/img/twice.jpg" },
            { title: "Flower", audio: "assets/songs/flower.mp3",image:"assets/img/kpop.jpg" },
            { title: "Ditto", audio: "assets/songs/ditto.mp3",image:"assets/img/kpop.jpg" }
        ]
    },
    {
        title: "C-POP",
        image: "assets/img/cpop.jpg",
        songs: [
            { title: "ABCD", audio: "assets/songs/abcd.mp3",image:"assets/img/nayeon.webp" },
            { title: "POP", audio: "assets/songs/pop.mp3",image:"assets/img/nayeon.webp" },
            { title: "Yes Or Yes", audio: "assets/songs/yesoryes.mp3",image:"assets/img/twice.jpg" }
        ]
    }
];



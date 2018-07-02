const path = require('path')

const seed = {
  projects: [
    {
      id: 10,
      title: "Pok'em!",
      description:
        'Simple e-commerce (well, sort-of) application where you can capture your favorite pokemons! Browse and filter through the collection and add what you like to the shopping cart.',
      tools: ['React', 'Sass'],
      link: 'https://github.com/leemun1/react-pokemon-app',
      live: 'https://pokemon-leemun1.herokuapp.com/',
      img: 'pokem.png',
    },
    {
      id: 9,
      title: 'Devlink',
      description:
        'A full-stack social network service tailored for developers. Connect and collaborate with other developers on a single platform.',
      tools: ['React', 'Express', 'MongoDB', 'Sass'],
      link: 'https://github.com/leemun1/devlink-app',
      live: 'https://devlink-leemun1.herokuapp.com',
      img: 'devlink.png',
    },
    {
      id: 7,
      title: 'Melon',
      description:
        "Can't decide on what to listen to? Melon makes it easy to find the right music for the right moments.",
      tools: ['React', 'Redux', 'Sass', 'Spotify API'],
      link: 'https://github.com/leemun1/react-spotify-client',
      live: 'https://spotify-leemun1-client.herokuapp.com/',
      img: 'melon.png',
    },
    {
      id: 8,
      title: 'Paperplane',
      description:
        "A real-time chat application made with Pusher's Chatkit API. Start connecting with your friends right away with a single click.",
      tools: ['React', 'Express', 'Sass', 'Chatkit API'],
      link: 'https://github.com/leemun1/react-chat-app',
      live: 'https://slack-leemun1.herokuapp.com/',
      img: 'paperplane.png',
    },
    {
      id: 6,
      title: 'Notes',
      description:
        "What's on your mind today? A simple note application to capture your thoughts and inspirations.",
      tools: ['React', 'Redux', 'Firebase', 'Sass'],
      link: 'https://github.com/leemun1/react-notes-app',
      live: 'https://notes-leemun1.herokuapp.com/',
      img: 'notes.png',
    },
    {
      id: 1,
      title: 'Yet another Todo App',
      description:
        'Simple Todo application with CRUD functionalities. Created as an attempt to clone the example on todoMVC.com',
      tools: ['React', 'Sass'],
      link: 'https://github.com/leemun1/react-todo-app',
      live: 'https://todos-leemun1.herokuapp.com/',
      img: 'todo.png',
    },
    {
      id: 4,
      title: 'Weather Please',
      description:
        'A minimalistic widget to display real-time weather condition at current location.',
      tools: ['React', 'Sass', 'OpenWeatherMap API'],
      link: 'https://github.com/leemun1/react-weather-app',
      img: 'weather.png',
    },
    // {
    //   id: 2,
    //   title: 'Hackernews',
    //   description:
    //     'An application to search for stories from Hackernews. Created to understand the basics of React.js and how to work with external API.',
    //   tools: ['React', 'Sass', 'Hackernews API'],
    //   link: 'https://github.com/leemun1/react-hackernews-app',
    //   img: 'hackernews.png',
    // },
    // {
    //   id: 3,
    //   title: 'La Villa',
    //   description:
    //     'Website for a boutique real estate agency. Originally started while taking the "Advanced CSS and Sass" by Jonas Schmedtmann on Udemy. I then converted the static website into a React application.',
    //   tools: ['React', 'Sass'],
    //   link: 'https://github.com/leemun1/react-lavilla-app',
    //   img: 'lavilla.png',
    // },
    // {
    //   id: 5,
    //   title: 'Getaway',
    //   description: 'An application for looking up hotels for vacations',
    //   tools: ['React', 'Sass'],
    //   link: 'https://github.com/leemun1/react-getaway-app',
    //   img: 'getaway.png',
    // },
  ],
}

export default seed

import toutes from '../assets/images/toutes.jpeg';
import portfolio from '../assets/images/portfolio.jpeg';
import thelink2 from '../assets/images/thelink2.png';
import coucou from '../assets/images/coucou.png';

import EN from '../pdfs/tbENCV.pdf';
import FR from '../pdfs/tbFRCV.pdf';

const sections = [
  {
    name: 'foreword',
    content: {
      text: `I’m a fullstack web & mobile developper intersted in giving users the best experience and design possible, while keeping them as simple as possible. 
I have a creative mind and like to keep it always active with new ideas to realize.`,
    },
  },
  {
    name: 'skills',
    content: {
      text: 'tamed skills',
      icons: [
        {
          img: 'https://img.icons8.com/color/480/000000/javascript--v1.png',
          skillName: 'JavaScript',
        },
        {
          img: 'https://img.icons8.com/color/480/000000/react-native.png',
          skillName: 'React',
        },
        {
          img: 'https://img.icons8.com/nolan/512/react-native.png',
          skillName: 'React Native',
        },
        {
          img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjZjBmMGYwIj48cGF0aCBkPSJNODUuOTY4NTEsMTYuMTI1Yy0xLjk2MTg3LDAgLTMuOTIzMzMsMC40ODEyMyAtNS42MTY0NiwxLjQ0ODczbC01My4yNjcwOSwzMC43NDg3OGMtMy40NCwxLjk4ODc1IC01LjU4NDk2LDUuNzU0MTkgLTUuNTg0OTYsOS43MzE2OXY1NS43ODY2M2MwLDQuMDMxMjUgMi4xNDQ5Niw3Ljc0MjkzIDUuNTg0OTYsOS43MzE2OGwxMy45ODM0LDguMDYyNWM2Ljc3MjUsMy4zMzI1IDkuMTg3NDcsMy4zMjc4OCAxMi4yNTEyMiwzLjMyNzg4YzEwLjA1MTI1LDAgMTUuNzk5NTYsLTYuMDcyOTEgMTUuNzk5NTYsLTE2LjYwNzkxdi01Ny41NjA3OWMwLC0wLjg2IC0wLjY5MzcxLC0xLjU2NDIxIC0xLjU1MzcxLC0xLjU2NDIxaC02LjcxODc1Yy0wLjkxMzc0LDAgLTEuNTY0MjEsMC43MDQyMSAtMS41NjQyMSwxLjU2NDIxdjU3LjUwODNjMCw0LjczIC00Ljg4NTM3LDkuMzUxMjQgLTEyLjc4NjYyLDUuNDI3NDlsLTE0LjYyMzc4LC04LjQ0MDQzYy0wLjUzNzUsLTAuMjY4NzUgLTAuODYwODQsLTAuODU3NDggLTAuODYwODQsLTEuNDQ4NzN2LTU1LjczNDEzYzAsLTAuNjQ1IDAuMzIzMzQsLTEuMTg5MjIgMC44NjA4NCwtMS41MTE3Mmw1My4yNjcwOSwtMzAuNzM4MjhjMC40ODM3NSwtMC4zMjI1IDEuMTMxNjksLTAuMzIyNSAxLjY2OTE5LDBsNTMuMjY3MDksMzAuNzM4MjhjMC41Mzc1LDAuMzIyNSAwLjg2MDg0LDAuODY3OTggMC44NjA4NCwxLjQ1OTIzdjU1Ljc4NjYzYzAsMC41OTEyNCAtMC4zMjQ2LDEuMTc5OTggLTAuODA4MzUsMS40NDg3M2wtNTMuMzE5NTgsMzAuODAxMjdjLTAuNDgzNzUsMC4yNjg3NSAtMS4xODU0NCwwLjI2ODc1IC0xLjY2OTE5LDBsLTEzLjcxMDQ1LC04LjExNDk5Yy0wLjM3NjI1LC0wLjI2ODc1IC0wLjkwNDUxLC0wLjMxOTk4IC0xLjI4MDc2LC0wLjEwNDk4Yy0zLjgxNjI1LDIuMTUgLTQuNTE1LDIuNDE3MDcgLTguMDYyNSwzLjY1MzMyYy0wLjg2LDAuMjY4NzUgLTIuMjA0NTksMC44MDQ1NyAwLjQ4MjkxLDIuMzA5NTdsMTcuNzgzNjksMTAuNTQwMDRjMS43MiwwLjk2NzUgMy42NjA0NiwxLjUwMTIyIDUuNTk1NDYsMS41MDEyMmMxLjk4ODc1LDAgMy45MTc0NSwtMC41MzM3MiA1LjYzNzQ1LC0xLjUwMTIybDUzLjMzMDA4LC0zMC44MDEyN2MzLjQ0LC0xLjk4ODc1IDUuNTg0OTYsLTUuNzAwNDMgNS41ODQ5NiwtOS43MzE2OHYtNTUuNzM0MTNjMCwtNC4wMzEyNSAtMi4xNDQ5NiwtNy43NDI5NCAtNS41ODQ5NiwtOS43MzE2OWwtNTMuMzMwMDgsLTMwLjgwMTI3Yy0xLjY5MzEyLC0wLjk2NzUgLTMuNjU0NTgsLTEuNDQ4NzMgLTUuNjE2NDUsLTEuNDQ4NzN6TTEwMC4yOTgzNCw1OS4xNTY0OWMtMTUuMjExMjUsMCAtMjQuMjkyNDgsNi40NDU4IC0yNC4yOTI0OCwxNy4xOTU4YzAsMTEuNjYzNzUgOS4wMjE2LDE0Ljg4MzcxIDIzLjY0MTYsMTYuMzM0OTZjMTcuNDY4NzUsMS43MiAxOC44MTI1LDQuMzA3NTYgMTguODEyNSw3Ljc0NzU2YzAsNS45MTI1IC00Ljc3NTc3LDguNDQwNDMgLTE2LjAwOTUyLDguNDQwNDNjLTE0LjEzNjI1LDAgLTE3LjI1NTg1LC0zLjU1MjU0IC0xOC4yNzcxLC0xMC41NDAwNGMtMC4xMDc1LC0wLjc1MjUgLTAuNzQ4NzIsLTEuMjkxMjYgLTEuNTAxMjIsLTEuMjkxMjZoLTYuOTM5MjFjLTAuODYsMCAtMS41MDEyMiwwLjcwNTQ3IC0xLjUwMTIyLDEuNTExNzJjMCw4Ljk3NjI0IDQuODkxMjUsMTkuNjYyODQgMjguMjE4NzUsMTkuNjYyODRjMTYuODc3NSwwIDI2LjU0OTU2LC02LjY1NjYgMjYuNTQ5NTYsLTE4LjI2NjZjMCwtMTEuNTAyNSAtNy43OTUwMSwtMTQuNTcyMTMgLTI0LjEzNTAxLC0xNi43NzU4OGMtMTYuNjA4NzUsLTIuMTUgLTE4LjI3NzEsLTMuMjc5MTcgLTE4LjI3NzEsLTcuMTQ5MTdjMCwtMy4yMjUgMS40NTU0NSwtNy40NjQxMSAxMy43MTA0NSwtNy40NjQxMWMxMC45MTEyNSwwIDE0Ljk5NDE1LDIuMzU3NDQgMTYuNjYwNCw5LjcyMTE5YzAuMTYxMjUsMC42OTg3NSAwLjc0ODcyLDEuMjM4NzcgMS41MDEyMiwxLjIzODc3aDYuOTM5MjFjMC40MywwIDAuODAwNzksLTAuMjEyOSAxLjEyMzI5LC0wLjUzNTRjMC4yNjg3NSwtMC4yNjg3NCAwLjQzMTY4LC0wLjcwMjUzIDAuMzc3OTMsLTEuMTg2MjhjLTEuMDc1LC0xMi42ODUgLTkuNTA5NTUsLTE4LjY0NDUzIC0yNi42MDIwNSwtMTguNjQ0NTN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=',
          skillName: 'node.js',
        },
        {
          img: 'https://img.icons8.com/color/480/000000/redux.png',
          skillName: 'Redux',
        },
        {
          img: 'https://img.icons8.com/color/480/000000/sass.png',
          skillName: 'Sass',
        },
        {
          img: 'https://img.icons8.com/color/480/000000/firebase.png',
          skillName: 'Firebase',
        },
        {
          img: 'https://img.icons8.com/color/480/000000/html-5--v1.png',
          skillName: 'html 5',
        },
        {
          img: 'https://img.icons8.com/color/480/000000/css3.png',
          skillName: 'css 3',
        },
        {
          img: 'https://img.icons8.com/color/480/000000/typescript.png',
          skillName: 'TypeScript',
        },
      ],
      subText: 'in sight',
      subIcons: [
        {
          img: 'https://img.stackshare.io/service/5883/preview.png',
          skillName: 'three.js',
        },
      ],
    },
  },
  {
    name: 'realizations',
    content: {
      text: 'Here are some of the realizations I\'ve done and I\'ve decided to put online for you to see.',
      projects: [
        {
          title: 'the link',
          text: `the link is a simple app I’ve created on my own to store web links in a user-friendly interface.

The goal with the link is to be able to store links people share with you or links you want to keep by organizing them in a nice viewable way, with a preview of the link itself, and to store each link inside customisable lists within categories created by users to fit their needs.

The app is written with JavaScript (back and front).
Back side is using node.js and the database is created with SQL using sequelize.
Front is created with React and Redux.
Other dependencies can be found in package.json files.
For the link previews app is using linkpreview.net API.
For drag and drop functions, I’ve used the react-beautiful-dnd package created by atlassian (Trello).

Finally, the name of the app, the link, is a tribute to the French metal band Gojira who’s a great inspiration for me since their album the link and it’s powerful sound and lyrics, with its deep connection to the human spirit, to the earth and the natural elements.

This app will be updated. You can access public github repository here https://github.com/theodorebing/Discovery`,
          img: thelink2,
          link: 'https://github.com/theodorebing/Discovery',
        },
        {
          title: 'Coucou!',
          text: `Coucou! is a social network dedicated to every family, whether small, large, blended, etc ... Coucou! allows everyone to reconnect with their family history, to share their own memories and anecdotes, but also to share the different stages of life with their closest ones, and to share the future together.

The goal is therefore to provide a simple way to keep track of family history and family tree.

The application is by definition for everyone, so it is also aimed at people less comfortable with computers (the elderly and children).`,
          img: coucou,
          link: 'https://github.com/theodorebing/projet-coucou',
        },
        {
          title: '18 Toutes',
          text: `This is a simple website, made to share organization '18 Toutes' principles about French linguistic. I created the entire site, with the aim of creating a harmonious whole simbolizing the two genres of the French language, where everything is fluid. Everything is done by hand.

Technology involved : JavaScript, React, Sass, React Reveal & human mind (with proven efficiency since 2.5 million years)`,
          img: toutes,
          link: 'https://18toutes.surge.sh/',
        },
        {
          title: 'this website - my personnal portfolio',
          text: `The intention behind this webside was to show my skills and projects with a minimalist website done in only one day and coded entirely by hand, as a challenge from myself to myself. No Wordpress or any other CMS involved, and no back end at all either.
There are some animations and stuffs, so if you want to see all the work done on the site, use a computer instead ;-).

Technology involved : JavaScript, React, CSS, HTML`,
          img: portfolio,
          link: 'https://theodorebing.com/',
        },
      ],
    },
  },
  {
    name: 'education',
    content: {
      text: `My curriculum regarding programmation, or web and mobile development, call it as you want, is as simple as that : 

I began creating my first websites at 13 and never stopped until I decided 20 years later that this part of my life was to be my daily job and that I attend intensive training at O'clock School, France.`,
      link: 'https://oclock.io/',
      img: 'https://21douze.fr/wp-content/uploads/2018/10/Logo-noir-vert-800x400.png',
    },
  },
  {
    name: 'cv',
    content: {
      text: 'Feel free to have a look and download my pdf CV, I\'m just a click away from you:',
      links: [
        {
          href: EN,
          lang: 'English',
        },
        {
          href: FR,
          lang: 'French',
        },
      ],
    },
  },
];

export default sections;

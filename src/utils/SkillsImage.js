

import html from '../Assets/svg/skills/html.svg'
import docker from '../Assets/svg/skills/docker.svg'
import css from '../Assets/svg/skills/css.svg'
import javascript from '../Assets/svg/skills/javascript.svg'
import nextJS from '../Assets/svg/skills/nextJS.svg'
import react from '../Assets/svg/skills/react.svg'
import vue from '../Assets/svg/skills/vue.svg'
import vuetifyjs from '../Assets/svg/skills/vuetifyjs.svg'
import bootstrap from '../Assets/svg/skills/bootstrap.svg'
import mongoDB from '../Assets/svg/skills/mongoDB.svg'
import mysql from '../Assets/svg/skills/mysql.svg'
import postgresql from '../Assets/svg/skills/postgresql.svg'
import tailwind from '../Assets/svg/skills/tailwind.svg'
import vitejs from '../Assets/svg/skills/vitejs.svg'
import python from '../Assets/svg/skills/python.svg'
import django from '../Assets/svg/skills/django.svg'
import postman from '../Assets/svg/skills/postman.svg'
import insomnia from '../Assets/svg/skills/insomnia.svg'
import git from '../Assets/svg/skills/git.svg'
import wordpress from '../Assets/svg/skills/wordpress.svg'
import figma from '../Assets/svg/skills/figma.svg'




export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'docker':
            return docker;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vite':
            return vitejs;
        case 'vuetify':
            return vuetifyjs;
        case 'python':
            return python;
        case 'django':
            return django;
        case 'postman':
            return postman;
        case 'insomnia':
            return insomnia;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'wordpress':
            return wordpress;
        case 'figma':
            return figma;
        default:
            break;
    }
}
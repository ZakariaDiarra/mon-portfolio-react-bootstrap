

import html from '../assets/svg/skills/html.svg'
import docker from '../assets/svg/skills/docker.svg'
import css from '../assets/svg/skills/css.svg'
import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import vue from '../assets/svg/skills/vue.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import vitejs from '../assets/svg/skills/vitejs.svg'
import vuetifyjs from '../assets/svg/skills/vuetifyjs.svg'
import python from '../assets/svg/skills/python.svg'
import django from '../assets/svg/skills/django.svg'
import git from '../assets/svg/skills/git.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import wordpress from '../assets/svg/skills/wordpress.svg'
import figma from '../assets/svg/skills/figma.svg'
import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'docker':
            return docker;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
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
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'python':
            return python;
        case 'django':
            return django;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'wordpress':
            return wordpress;
        case 'figma':
            return figma;
        case 'canva':
            return canva;
        default:
            break;
    }
}
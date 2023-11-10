

import html from '../Assets/svg/skills/html.svg'
import docker from '../Assets/svg/skills/docker.svg'
import css from '../Assets/svg/skills/css.svg'
import angular from '../Assets/svg/skills/angular.svg'
import javascript from '../Assets/svg/skills/javascript.svg'
import nextJS from '../Assets/svg/skills/nextJS.svg'
import react from '../Assets/svg/skills/react.svg'
import typescript from '../Assets/svg/skills/typescript.svg'
import vue from '../Assets/svg/skills/vue.svg'
import bootstrap from '../Assets/svg/skills/bootstrap.svg'
import mongoDB from '../Assets/svg/skills/mongoDB.svg'
import mysql from '../Assets/svg/skills/mysql.svg'
import postgresql from '../Assets/svg/skills/postgresql.svg'
import tailwind from '../Assets/svg/skills/tailwind.svg'
import vitejs from '../Assets/svg/skills/vitejs.svg'
import vuetifyjs from '../Assets/svg/skills/vuetifyjs.svg'
import python from '../Assets/svg/skills/python.svg'
import django from '../Assets/svg/skills/django.svg'
import git from '../Assets/svg/skills/git.svg'
import materialui from '../Assets/svg/skills/materialui.svg'
import wordpress from '../Assets/svg/skills/wordpress.svg'
import figma from '../Assets/svg/skills/figma.svg'
import canva from '../Assets/svg/skills/canva.svg'


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
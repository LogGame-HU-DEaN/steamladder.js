'use strict'

const Docma = require('docma')
const Package = require('./package')

Docma.create().build({
  app: {
    title: Package.name,
    base: '/',
    entrance: 'content:readme',
    routing: 'query',
    server: Docma.ServerType.STATIC
  },
  markdown: {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: false,
    smartypants: false,
    tasks: false,
    emoji: true
  },
  src: [
    { readme: './README.md' },
    { steamladder: './lib/*.js' }
  ],
  dest: './docs',
  template: {
    options: {
      title: Package.name,
      navItems: [
        {
          label: 'Home',
          href: '?content=readme'
        },
        {
          label: 'Documentation',
          href: '?api=steamladder',
          iconClass: 'fas fa-book'
        },
        {
          iconClass: 'fab fa-lg fa-github',
          label: 'GitHub',
          href: 'https://github.com/SwitchbladeBot/steamladder.js',
          target: '_blank'
        }
      ]
    }
  }
})

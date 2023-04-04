import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
export default defineConfig({
  base:'/firstrepository/',
  ignoreDeadLinks: true, 
  title: '宏五中医',
  description: '阮一峰的技术周刊',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/element-plus@2.3.1/dist/index.css' }]],
  markdown: {
    headers: {
      level: [0, 0]
    }
  },
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/简介'
      },
      {
        text: 'External',
        link: 'https://google.com'
      },
    ],
    sidebar: {
      '/weekly/': getFiles(path.join(__dirname, '../weekly'))
    },
    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/plantree/ruanyf-weekly'
    }, ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Plantree'
    },
    algolia: {
      appId: 'ZQ8EJL0206',
      apiKey: '6be1afac8180986bfdbd6631c53f2995',
      indexName: 'lnn-zhongyi'
    },
  },
  plugins:[
    {
      name: 'element-plus',
      // You can import any ElementUI component here
      // For example, to import the ElButton component:
      // component: 'ElButton',
      // Or to import all components:
      component: 'element-plus'
    }
  ]
});

// const path1 = path.join(__dirname, '../weekly');
function getFiles(filePath,parentFile) {
  let config = []
  fs.readdirSync(filePath).forEach(file => {
    const path = `${filePath}/${file}`;
    const stat = fs.statSync(path);
    if (stat.isFile()) {
      config.push({
        text: file.split('.')[0],
        link: parentFile?`/weekly/${parentFile}/${file}`:`/weekly/${file}`
      });
    } else if (stat.isDirectory()) {
      config.push({
        text: file,
        collapsed: true,
        items: getFiles(path,parentFile?`${parentFile}/${file}`:file)
      })
    }
  });
  return config
}
// let res = getFiles(path1)



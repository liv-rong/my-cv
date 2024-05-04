<script setup lang="ts">
import { useDataStore } from '@/store/data'
import { ResumeFrontMatter, ResumeHeaderItem } from '@/types/index'

import MarkdownIt from 'markdown-it'
import LinkAttributes from 'markdown-it-link-attributes'
import { frontmatter } from './preview'

const { data } = useDataStore()

const markdown = (() => {
  const md = new MarkdownIt({ html: true })

  // md.use(MarkdownItDeflist)
  // md.use(MarkdownItKatex)
  // md.use(MarkdownItCite)
  // md.use(MarkdownItLatexCmds)
  //markdown-it markdown 解析器的链接属性插件
  md.use(LinkAttributes, {
    matcher: (link: string) => /^https?:\/\//.test(link),
    attrs: {
      target: '_blank',
      rel: 'noopener'
    }
  })

  return md
})()

const resolveDeflist = (html: string) => {
  // debugger
  const dlReg = /<dl>([\s\S]*?)<\/dl>/g
  const dlList = html.match(dlReg)

  if (dlList === null) return html

  for (const dl of dlList) {
    const newDl = dl.replace(/<\/dd>\n<dt>/g, '</dd>\n</dl>\n<dl>\n<dt>')
    html = html.replace(dl, newDl)
  }

  return html
}

const resolveHeader = (html: string, frontmatter: ResumeFrontMatter) => {
  let header = ''

  if (frontmatter.name) header += `<h1>${frontmatter.name}</h1>\n`

  if (frontmatter.header) {
    const n = frontmatter.header.length

    for (let i = 0; i < n; i++) {
      const item = frontmatter.header[i]
      if (!item) continue

      header += item.newLine ? '<br>\n' : ''

      header += `<span class="resume-header-item${
        i === n - 1 || frontmatter.header[i + 1].newLine ? ' no-separator' : ''
      }">`

      if (item.link)
        header += `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.text}</a>`
      else header += item.text

      header += `</span>\n`
    }
  }

  return (
    `<div class="resume-header" style="color: red; font-size: 16px;">${header}</div>` +
    html
  )
}

const renderMarkdown = (md: string) => {
  const { header } = frontmatter(md)
  console.log(header)
  // const frontmatter = {
  //   name: '张三',
  //   header: [
  //     { text: '男', newLine: true },
  //     { text: '1990-01-01' },
  //     { text: '13800000000', newLine: true },
  //     { text: 'email@example.com', newLine: true },
  //     { text: 'Github', link: 'https://github.com/', newLine: true },
  //     { text: 'Blog', link: 'https://example.com/' }
  //   ]
  // }

  let html = markdown.render(md)
  html = resolveDeflist(html)
  html = resolveHeader(html, header)

  return html
}
</script>

<template>
  <div
    id="preview"
    :innerHTML="renderMarkdown(data.mdContent)"
    :css="data.cssContent"
  />
</template>

<style scoped></style>
./preview.ts

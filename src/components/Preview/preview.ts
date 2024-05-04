import { ResumeFrontMatter, ResumeHeaderItem } from '@/types/index'

/**
 * 处理头部字符串解析事件 tsString
 * return  ResumeFrontMatter 类型
 */

export const frontmatter = (md: string) => {
  // 解析TS字符串
  const parsedData = md.split('---')[1].trim()

  // 创建目标对象
  const targetObject: ResumeFrontMatter = {
    name: '',
    header: []
  }

  // 解析name字段
  const nameRegex = /name:\s*(.*)/
  const nameMatch = parsedData.match(nameRegex)
  if (nameMatch) {
    targetObject.name = nameMatch[1].trim()
  }

  // 解析header字段
  const headerRegex =
    /text:\s*<span.*?>(.*?)<\/span>\s*(?:\((.*?)\))?\s*\nlink:\s*(.*?)\s*(?:\n|$)/g
  let headerMatch
  while ((headerMatch = headerRegex.exec(parsedData)) !== null) {
    const text = headerMatch[1].trim()
    const link = headerMatch[3].trim()
    const newLine = headerMatch[2] === 'true'

    const headerItem: ResumeHeaderItem = {
      text,
      link
    }

    if (newLine) {
      headerItem.newLine = true
    }

    targetObject.header?.push(headerItem)
  }

  return {
    body: '',
    header: targetObject
  }
}

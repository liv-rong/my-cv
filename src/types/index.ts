export type SystemData = {
  mdContent: string
  cssContent: string
  mdFlag: boolean
  cssFlag: boolean
  curResumeId: string | null
  curResumeName: string
}

export type ResumeFrontMatter = {
  name?: string
  header?: Array<ResumeHeaderItem>
}
export type ResumeHeaderItem = {
  text: string
  link?: string
  newLine?: boolean
}

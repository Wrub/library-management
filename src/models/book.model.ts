export default interface Book {
  id: number
  title: string
  author: string
  ISBN: string
  publishDt: Date
  publisher?: string
}

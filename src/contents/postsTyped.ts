import posts from 'src/contents/posts.json'
import postData from 'src/contents/postData.json'

type posts = { href: keyof typeof postData }[]

const postsTyped = posts as posts

export default postsTyped

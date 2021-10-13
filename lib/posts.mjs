import fs from 'fs'
import grayMatter from 'gray-matter'
import path from 'path'

const POSTS_DIR = 'posts'
const POSTS_PATH = path.join(process.cwd()
, POSTS_DIR) 

export function getPosts() {
    // get filenames
    const fileNames = fs.readdirSync(POSTS_DIR)
    console.log("fileNames: ", fileNames)    
    
    const posts = []

    // read each file
    fileNames.forEach(fileName => {
        // generate id
        const id = fileName.replace('.md', '')

        const filePath = path.join(POSTS_PATH, fileName)
        const fileContent = fs.readFileSync(filePath)

        const parsed = grayMatter(fileContent)

        const metadata = parsed.data
        const content = parsed.content

        console.log("metaData.data: ", metadata)
        // console.log("metaData.content: ", content)

        posts.push({
            id: id,
            title: metadata.title,
            date: metadata.date
        })
    })

    return posts
}


const a = getPosts()
console.log(a)
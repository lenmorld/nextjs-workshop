import fs from 'fs'
import grayMatter from 'gray-matter'
import path from 'path'

// blog posts in /posts directory
const POSTS_DIR = 'posts'
const POSTS_PATH = path.join(process.cwd()
, POSTS_DIR) 

export function getPosts() {
    // get filenames
    const fileNames = fs.readdirSync(POSTS_DIR)
    console.log("fileNames: ", fileNames)    
    
    const postsData = []

    // gather posts data from each file
    fileNames.forEach(fileName => {
        // crete id from filename - remove .md extension
        const id = fileName.replace('.md', '')
        
        // read file
        const filePath = path.join(POSTS_PATH, fileName)
        const fileContents = fs.readFileSync(filePath)

        // parse file contents
        const parsed = grayMatter(fileContents)
        const metadata = parsed.data
        const body = parsed.content

        console.log("metaData.data: ", metadata)
        // TODO: we'll use the body after when we generate the page
        // console.log("metaData.content: ", body)

        // get id, title, date for each
        postsData.push({
            id: id,
            title: metadata.title,
            date: metadata.date
        })
    })

    return postsData
}


const allPostsData = getPosts()
console.log(allPostsData)
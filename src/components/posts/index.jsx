import { useState, useEffect } from "react"
import { loadPosts } from "../../utils/loadPosts"
import { PostCard } from "../postCard"

export const Posts = () => {
    const [posts, setPosts] = useState([])

    const dataFetching = async () => {
        const photosAndPosts = await loadPosts() //está importando o retorno (photoAndPosts) da função loadPosts
        setPosts(photosAndPosts)
    }
    
    useEffect(() => { dataFetching() }, [])

    return (
        <main className="p-5 flex flex-wrap gap-10 bg-gray-100 max-w-[75%] justify-center mx-auto">
            {posts.map((post) => <PostCard post={post} />)}
        </main>   
    )
}
import { useState, useEffect } from "react"
import { loadPosts } from "../../utils/loadPosts"
import { PaginationNumbers } from "../paginationNumbers"
import { PostCard } from "../postCard"

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const [allPosts, setAllPosts] = useState([])
    const [page, setPage] = useState(1)
    const [sliceStartPoint, setSliceStartPoint] = useState(0)
    const [sliceEndPoint, setSliceEndPoint] = useState(10)

    const dataFetching = async () => {
        const photosAndPosts = await loadPosts() //está importando o retorno (photoAndPosts) da função loadPosts
        setPosts(photosAndPosts.slice(sliceStartPoint, sliceEndPoint)) //o primeiro valor do .slice é o ponto de partida e o último valor é o primeiro que não irá ser retornado
        setAllPosts(photosAndPosts)
    }

    useEffect(() => { //por causa da paginação deve ser atualizado constantemente
        dataFetching() 
    })
    
    const loadMorePosts = (number) => {
        setPage(number)
    }

    useEffect(() => {
        if (page !== 1) {
            setSliceStartPoint((page - 1) * 10)
            if (sliceEndPoint <= 100) {
                setSliceEndPoint(page * 10)
            }
        }
    }, [page])

    return (
        <>
            <main className="p-5 bg-gray-100 max-w-[75%] mx-auto">
                <div className="flex flex-wrap gap-10 justify-center">
                    {posts.map((post) => <PostCard key={post.id} post={post} />)}
                </div>
                <PaginationNumbers onClick={(number) => loadMorePosts(number)} />
            </main>
        </>
    )
}
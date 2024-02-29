export const PostCard = ({ post }) => ( //pode fazer um destruct diretamente daqui sem precisar criar uma const para isso
    //const { post } = props        //por ser o mesmo nome do obj recebido por props pode somente fazer um destruct
        <div
            key={post.id}
            className="max-w-[400px] border bg-white min-h-[250px] transition cursor-pointer hover:scale-[1.05]"
        >
            <img src={post.url} alt={post.title} />
            <div className="p-4">
                <h1 className="font-bold text-xl mb-2">
                    {post.title}
                </h1>
                <p>
                    {post.body}
                </p>
            </div>
        </div>
)
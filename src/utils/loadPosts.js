export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts') //deve ter o mesmo nome declarado no array de Promise.all
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    const [posts, photos] = await Promise.all([postsResponse, photoResponse])
    const postsJson = await posts.json()
    const photosJson = await photos.json()
    const photosAndPosts = postsJson.map((post) => { return { ...post, url: photosJson[post.id].url } }) //retorna um novo array //coloca os urls dentro de posts e pega para cada id de posts uma photo, diminuindo as 5000 photos para a mesma quantidade de posts que seria 100 //linkei pelos ids

    return photosAndPosts
}
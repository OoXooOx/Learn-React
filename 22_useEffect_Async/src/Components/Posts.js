import { useEffect, useState } from "react";
import Post from "./Post"

function Posts() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url)
                const posts = await response.json()
                setPosts(posts)
            }
            catch (error) {
                setError(error.message)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [])


    //СТРЕЛОЧНАЯ ФУНКЦИЯ
    // useEffect(() => {
    //     const fetchData = async () =>{
    //         try {
    //             const response = await fetch(url)
    //             const posts = await response.json()
    //             setPosts(posts)
    //         }
    //         catch (error) {
    //             setError(error.message)
    //         }
    //         setIsLoading(false)
    //     }
    //     fetchData()
    // }, [])









    // useEffect(() => {
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((json) => setPosts(json))
    //         .catch((error) => setError(error.message))
    //         .finally(() => setIsLoading(false))
    // }, [])

    if (error) {
        return (
            <h1>Error: {error}</h1>
        )
    }
    // if(isLoading) {
    //     return (
    //         <h1>Loading ... </h1>
    //     )
    // }

    return (
        <>
            <h1>Posts</h1>
            <hr />
            {isLoading
                &&
                <h1>Loading ... </h1>}
            {posts.map((el) => <Post key={el.id} {...el} />)}

        </>
    )
}
export default Posts;

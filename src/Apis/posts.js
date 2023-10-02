export async function fetchPosts(){
    const response = await fetch('http://localhost:8080/posts');
    return response.json();
}
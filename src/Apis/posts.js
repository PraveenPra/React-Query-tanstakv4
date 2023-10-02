export async function fetchPosts(){
    const response = await fetch('http://localhost:8080/posts');
    return response.json();
}

export async function fetchPost(id){
    const response = await fetch(`http://localhost:8080/post/${id}`);
    return response.json();
}
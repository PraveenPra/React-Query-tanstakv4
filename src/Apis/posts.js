export async function fetchPosts(){
    const response = await fetch('http://localhost:8080/posts');
    return response.json();
}

export async function fetchPost(id){
    const response = await fetch(`http://localhost:8080/post/${id}`);
    return response.json();
}

export async function createPost(newPost){
    const response = await fetch(`http://localhost:8080/create-post`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newPost)
    });
    return response.json();
}

export async function updatePost(updatedPost){
    const response = await fetch(`http://localhost:8080/update-post/${updatedPost.id}`,{
        method:'PUT',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updatedPost)
    });
    return response.json();
}

export async function deletePost(id){
    const response = await fetch(`http://localhost:8080/destroy-post/${id}`,{
        method:'DELETE'
    });
    return response.json();
}
export async function fetchPosts(){
    const response = await fetch('http://192.168.192.1:8080/db.json');
    return response.json();
}
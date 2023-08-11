const API_KEY="012aa2d194ea43b3a609441a82953ea8";
const url="https://newsapi.org/v2/everything?q";
window.addEventListener('load',()=> fetchNews("india"));
async function FetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data=await res.json();
    console.log(data);

}
FetchNews();
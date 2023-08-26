const accesskey="YroOi0ZIkol6Z0-Jf-dq0uVDBGkSiD9Mi2M4Cnt2f7E";
const formele=document.querySelector("form")
const inputele=document.getElementById("search-input")
const searchresult=document.querySelector("search-results")
const showmore=document.getElementById("show-more-btn")
let inputdata="";
let page=1;
async function searchimages(){
    inputdata=inputele.value;
    const url=`https://api.unsplash.com/search/photo?page=${page}&query=${inputdata}&client_id=${accesskey}`
    const response=await fetch(url);
    const data=await response.json();
    const result=data.results
    if(page==1){
        searchresult.innerHTML=""
    }
    results.map((result)=>{
const imageswrapper=document.createElement('div')
imageswrapper.classList.add("search-res")
const image=document.createElement('img')
image.src=result.urls.small    
image.alt=result.alt_description
const imageLink=document.createElement('a')
imageLink.href=result.links.html
imageLink.target="_blank";
imageLink.textContent=result.alt_description
imageswrapper.appendChild(image)
imageswrapper.appendChild(imageLink)
searchresult.appendChild(imageswrapper)
})
page++;
if(page>1){
    showmore.style.display="block";
}
 }
 formele.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchimages()

 })
 showmore.addEventListener("click",()=>{
   
    searchimages()

 })
const query = document.querySelector('.query')
function search(){
    const url = "https://www.google.com/search?q="+query.value
    window.open(url,"_self")
}
query.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
      search();
    }
})

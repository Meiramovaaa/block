const pages = $(".pagination-item")
console.log(pages);

$(document).on("click", function(event){
    for(item of pages){
        item.classList.remove("active")
    }
    event.target.classList.add('active')
})
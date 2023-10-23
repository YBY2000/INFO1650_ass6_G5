document.addEventListener("DOMContentLoaded", function () {
    var attractionID=-1;
    attractionID=window.location.search.split("=")[1];
    if (!localStorage.getItem("comments")|| 1===1) {
        fetch("/mock/comments.json")
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("comments", JSON.stringify(data));
            })
            .catch((error) => {
                console.error("Error fetching attraction data:", error);
            });
    }
    let comments = JSON.parse(localStorage.getItem("comments"));
    let tarcomment=[];
    comments.forEach(function (element) {
        if (element.id.toString()===attractionID.toString()){
            tarcomment.push(element);
        }
    })
    console.log(tarcomment);
    var app = new Vue({
        el: '#app',
        data: {
            attractions: JSON.parse(localStorage.getItem('attractions')),
            comments:JSON.parse(localStorage.getItem('comments')),
            tarcomments:tarcomment
        },
        mounted: function() {
            console.log(this.attractions)
        }
    })
})

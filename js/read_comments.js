document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("comments")) {
        fetch("/mock/comments.json")
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("comments", JSON.stringify(data));
            })
            .catch((error) => {
                console.error("Error fetching attraction data:", error);
            });
    }
<<<<<<< Updated upstream
})

var comments_vue = new Vue({
    el: '#comments',
    data: {
        attractions: JSON.parse(localStorage.getItem('attractions')),
        comments: JSON.parse(localStorage.getItem('comments')),
        currentAttractionID: window.location.search.split("=")[1]
    },
    computed: {
        tarcomments() {
            var result = this.comments.filter(element => element.id === this.currentAttractionID);
            return (result.length > 0 && result[0].reviews) ? result[0].reviews: [];
        }
    }
=======
    let comments = JSON.parse(localStorage.getItem("comments"));
    let tarcomment=[];
    comments.forEach(function (element) {
        if (element.id.toString()==attractionID.toString()){
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
>>>>>>> Stashed changes
})

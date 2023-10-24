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
})

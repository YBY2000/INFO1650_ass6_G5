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
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    data: {
        windowWidth : window.innerWidth,
        attractions: JSON.parse(localStorage.getItem('attractions')),
        comments: JSON.parse(localStorage.getItem('comments')),
        currentAttractionID: window.location.search.split("=")[1],
        loading: true
    },
    computed: {
        tarcomments() {
            var result = this.comments.filter(element => element.id === this.currentAttractionID);
            console.log(result);
            var tar=[];
            for (var i=0;i<result.length;i++){
                tar.push(result[i].reviews[0]);
            }
            return tar;
        },
        displayedReviewTime() {
            timelist=[]
            for (let comment of this.comments){

                if(this.windowWidth>800){
                    timelist.push(comment.reviews[0].review_time);
                }
                else {
                    timelist.push(comment.reviews[0].review_time.split(" ")[0]);
                }
            }
            //console.log(timelist);
            return timelist;
        }
    },
    methods: {
        updateLocalStorage(newData) {
            localStorage.setItem('comments', JSON.stringify(newData));
            this.comments = newData;
        },
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    },
    created() {
        setTimeout(() => {
            this.loading = false;
        },1500)
    }
})

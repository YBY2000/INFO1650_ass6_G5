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
        windowWidth: window.innerWidth,
        attractions: JSON.parse(localStorage.getItem('attractions')),
        comments: JSON.parse(localStorage.getItem('comments')),
        currentAttractionID: window.location.search.split("=")[1],
        loading: true,
        form: {
            review_title: '',
            review_content: ''
        },
        user: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : {}
    },
    computed: {
        tarcomments() {
            let result = this.comments.filter(element => element.id === this.currentAttractionID);
            return (result.length > 0 && result[0].reviews) ? result[0].reviews: [];
        },
        displayedReviewTime() {
            timelist = []
            for (let comment of this.comments) {

                if (this.windowWidth > 800) {
                    timelist.push(comment.reviews[0].review_time);
                }
                else {
                    timelist.push(comment.reviews[0].review_time.split(" ")[0]);
                }
            }
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
        },
        getTime() {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;  // 月份是从0开始的，所以+1
            let day = date.getDate();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            return formattedDate;
        },
        // submit button 
        // check if the user has logged in
        // if not, redirect to login page
        // if yes, submit the comment
        handleSubmit() {
            if(!window.localStorage.getItem("user")){
                alert("Please login first!");
                window.location.href = "login.html";
            }
            var time = this.getTime()
            var st_rating = starvalue.toString();
            var name = "";
            var email = "";
            var avatar = "";
            let comments = JSON.parse(localStorage.getItem("comments"));
            var id = (comments.length + 1).toString();
            if (window.localStorage.getItem("user")) {
                var user = JSON.parse(localStorage.getItem("user"))
                name = user.user_name;
                email = user.account;
                avatar = user.avatar;
            }
            var attractionID = window.location.search.split("=")[1];
            var curattracttion = JSON.parse(localStorage.getItem("attractions"))[attractionID - 1];
            var new_review = {
                "review_id": id,
                "reviewer_name": this.user.name,
                "reviewer_email": this.user.email, // user_info.email
                "review_title": this.form.review_title,
                "review_time": time, // js get time format
                "star_rating": st_rating,// star rating
                "avatar": avatar,
                "detailed_review": this.form.review_content
            }
            var newcomment = {
                "id": attractionID,
                "name": curattracttion.name,
                "reviews": [new_review]
            }
            comments.push(newcomment);
            this.updateLocalStorage(comments);
        }

    },
    created() {
        setTimeout(() => {
            this.loading = false;
        }, 1500)
    }
})

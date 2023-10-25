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
        startindex:0,
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

        PreviousDisabled(){
            return this.startindex===0;
        },
        tarcomments() {
            let result = this.comments.filter(element => element.id === this.currentAttractionID);
            return (result.length > 0 && result[0].reviews) ? result[0].reviews: [];
        },
        slicecomments(){
            return this.tarcomments.slice(this.startindex,this.startindex+4);
        },
        NextDisabled(){
            return this.startindex===Math.ceil(this.tarcomments.length/4.0-1.0)*4;
        }
        ,

        displayedReviewTime() {
            timelist = []
            for (let comment of this.tarcomments) {

                if (this.windowWidth > 800) {
                    timelist.push(comment.review_time);
                }
                else {
                    timelist.push(comment.review_time.split(" ")[0]);
                }
            }
            return timelist;
        }
    },
    methods: {
        updateLocalStorage(newData) {
            localStorage.setItem('comments', JSON.stringify(newData));
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
        isCurrentPage(num){
            return (num-1)*4===this.startindex;
        },
        // submit button 
        // check if the user has logged in
        // if not, redirect to login page
        // if yes, submit the comment
        handleSubmit() {
            if(!this.user){
                alert("Please login first!");
                window.location.href = "login.html";
            }
            var time = this.getTime();
            var st_rating = starvalue.toString();
            var new_review = {
                "review_id": "999",
                "reviewer_name": this.user.name,
                "reviewer_email": this.user.account, // user_info.email
                "review_title": this.form.review_title,
                "review_time": time, // js get time format
                "star_rating": st_rating,// star rating
                "avatar": this.user.avatar,
                "detailed_review": this.form.review_content
            }
            this.comments[this.currentAttractionID-1].reviews.push(new_review);
            this.updateLocalStorage(this.comments);
        },
        handlePagnitionClick(num){
            this.startindex=(num-1)*4;
        }
    },
    created() {
        setTimeout(() => {
            this.loading = false;
        }, 1500)
    }
})

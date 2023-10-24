var screenWidth = screen.width;
var detailbody=document.querySelector(".detail_main_container");
//detailbody.style.setProperty('--screenwith',screenWidth+'px');
var starvalue=4;
stars=document.querySelectorAll(".detail_input_start_container span")
console.log(stars);
stars.forEach(function (element) {
    element.addEventListener('mouseover',function (event) {
        var value=event.target.getAttribute('data-value');
        starvalue=value;
        console.log(value);
        for (var i=1; i<=5;i++){
            if (i<=value){
                stars[i-1].textContent='★';
                stars[i-1].classList.add('active');
            }
            else{
                stars[i-1].textContent='☆';
                stars[i-1].classList.remove('active');
            }
        }
    })
})


// submit button 
// check if the user has logged in
// if not, redirect to login page
// if yes, submit the comment
function getTime(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;  // 月份是从0开始的，所以+1
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedDate;
}
function submitcomment(){
    var time=getTime();
    var st_rating=starvalue.toString();
    var name="";
    var email="";
    var avatar="";
    let comments = JSON.parse(localStorage.getItem("comments"));
    var id=(comments.length+1).toString();
    if(window.localStorage.getItem("user")){
        var user=JSON.parse(localStorage.getItem("user"))
        name=user.user_name;
        email=user.account;
        avatar=user.avatar;
    }
    var attractionID= window.location.search.split("=")[1];
    var curattracttion=JSON.parse(localStorage.getItem("attractions"))[attractionID-1];
    var new_review = {
        "review_id": id,
        "reviewer_name": name,
        "reviewer_email": email, // user_info.email
        "review_title": "default title",// title
        "review_time": time, // js get time format
        "star_rating": st_rating,// star rating
        "avatar": avatar,
        "detailed_review": document.querySelector(".detail_comment_textarea").value.toString()
    }
    var newcomment={
        "id": attractionID,
        "name": curattracttion.name,
        "reviews":[new_review]
    }
    comments.push(newcomment);
    comments_vue.updateLocalStorage(comments);
    console.log(JSON.parse(window.localStorage.getItem("comments")));
}


// console.log(JSON.parse(window.localStorage.getItem("comments"))[attraction_id].reviews.push(new_review));
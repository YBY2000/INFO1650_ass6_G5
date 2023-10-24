const allElements = document.body.getElementsByTagName('*');
for (let element of allElements) {
    element.classList.add('Detail0');
}

var screenWidth = screen.width;
var detailbody=document.querySelector(".detail_main_container");
//detailbody.style.setProperty('--screenwith',screenWidth+'px');
var starvalue;
stars=document.querySelectorAll(".detail_input_start_container span")
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
        name=user.user;

    }
}
var new_review = {
    "review_id": "9",
    "reviewer_name": user_info.user_name,
    "reviewer_email": "", // user_info.email
    "review_title": "Historic Site",// title
    "review_time": "2018-06-25 08:20:00", // js get time format
    "star_rating": "4",// star rating
    "avatar": user_info.avatar,
    "detailed_review": "" // input
}

// console.log(JSON.parse(window.localStorage.getItem("comments"))[attraction_id].reviews.push(new_review));
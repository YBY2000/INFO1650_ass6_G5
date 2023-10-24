const allElements = document.body.getElementsByTagName('*');
for (let element of allElements) {
    element.classList.add('Detail0');
}

var screenWidth = screen.width;
var detailbody=document.querySelector(".detail_main_container");
//detailbody.style.setProperty('--screenwith',screenWidth+'px');

stars=document.querySelectorAll(".detail_input_start_container span")
stars.forEach(function (element) {
    element.addEventListener('mouseover',function (event) {
        var value=event.target.getAttribute('data-value');
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
var user_info = window.localStorage.getItem("user");
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
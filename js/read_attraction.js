document.addEventListener("DOMContentLoaded", function () {
    // 读取评论数据
    if (!localStorage.getItem("attractions") || 1===1) {
        fetch("/mock/attractions.json")
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("attractions", JSON.stringify(data));
            })
            .catch((error) => {
                console.error("Error fetching attraction data:", error);
            });
    }
    const attractions = JSON.parse(localStorage.getItem('attractions'));
    console.log(localStorage.getItem("attractions"));
    var curattraction=attractions[2];
    var ul=document.querySelector(".list-group.Detail0");
    var title=ul.querySelector(".title");
    title.textContent=curattraction['name'];
    var rating=curattraction['rating'];
    console.log(rating);
    var stars=document.querySelectorAll(".detail_rating span");
    var showscorespan=document.querySelector(".detail_score .detail_yellow_bold");
    for(var i=1;i<=5;i++){
        if (i<=rating){
            stars[i-1].textContent='★';
            stars[i-1].classList.add('active');
        }
        else{
            stars[i-1].textContent='☆';
            stars[i-1].classList.remove('active');
        }
    }
    showscorespan.textContent=rating;
    var locspan=document.querySelector(".detail_list_content.loc h6");
    var timespan=document.querySelector(".detail_list_content.time h6");
    var telspan=document.querySelector(".detail_list_content.tel h6");
    var tels=curattraction['official_tel'].split(" ");
    if(tels.length>=2){
        telspan.textContent="+1 "+tels[0];
        var node=document.createElement('span');
        node.textContent="+1 "+tels[1];
        document.querySelector(".detail_list_content.tel").appendChild(node);
    }
    else{
        telspan.textContent="+1 "+tels[0];
    }
    locspan.textContent=curattraction['location'];
    timespan.textContent=curattraction['opening_hours'];

    var intro=document.querySelector(".accordion-body.Detail0.intro");
    var time=document.querySelector(".accordion-body.Detail0.time");
    var tips=document.querySelector(".accordion-body.Detail0.tips");
    intro.textContent=curattraction['detailed_description'];
    time.textContent=curattraction['opening_hours'];
    tips.textContent=curattraction['tips'];

});
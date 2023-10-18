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
        var score=document.querySelector(".detail_score h2")
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
        score.innerHTML="<span class='detail_yellow_bold'>"+value+".0"+"</span><span style='font-size: 20px'>/5.0</span>";
    })
})


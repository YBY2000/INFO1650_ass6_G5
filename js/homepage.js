
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
  let attractions = JSON.parse(localStorage.getItem("attractions"));

  var myApp = new Vue({
      el: '#myApp',
      data: {
          attractions: JSON.parse(localStorage.getItem('attractions')),
      },
      mounted: function() {
          console.log(this.attractions)
      }
  })



  window.onload=function displayContent(){
    let placeholders = document.getElementsByClassName("card-placeholder");
    let myCards = document.getElementsByClassName("my-card");
    console.log(placeholders.length);
    setTimeout(function(){
      for (let index = 0; index < placeholders.length; index++) {
      myCards[index].style.display = "block";
      placeholders[index].style.display = "none";
    }
    }, 3000);
  }
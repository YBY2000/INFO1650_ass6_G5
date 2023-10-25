
if (!localStorage.getItem("attractions")) {
    fetch("/mock/attractions.json")
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("attractions", JSON.stringify(data));
        })
        .catch((error) => {
            console.error("Error fetching attraction data:", error);
        });
}

var myApp = new Vue({
    el: '#app',
    data: {
        attractions: JSON.parse(localStorage.getItem('attractions')),
        isLoggedIn: window.localStorage.getItem("user") ? true : false,
        user: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : null,
        title: '',
        lazyloading: true
    },
    computed: {
        filteredAttractions: function () {
            return this.attractions.filter((attraction) => {
                return attraction.name.toLowerCase().includes(this.title.toLowerCase());
            });
        }
    },
    methods: {
        pageSwitch(id) {
            window.location.href = 'detail.html?id=' + id;
        },
        handleSearch() {
            this.title = document.getElementById("searchInput").value;
            this.lazyloading = true;
            this.handleLazyLoading();
        },
        handleLazyLoading() {
            setTimeout(() => {
                this.lazyloading = false;
            }, 1000);
        },
        Getimage(attraction){
            if(Array.isArray(attraction.image)){
                return attraction.image[0];
            }
            else{
                return attraction.image
            }
        }
    },
    created() {
        this.handleLazyLoading();
    }
})

function handleLogOut() {
    window.localStorage.removeItem("user");
    window.location.href = 'login.html';
}


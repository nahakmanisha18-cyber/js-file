let images = [
     {
        name: "Movie Banner 1",
        image: "https://static.vecteezy.com/system/resources/thumbnails/002/236/321/small_2x/movie-trendy-banner-vector.jpg"
     },
    {
        name: "Movie Banner 2",
        image: "https://live.staticflickr.com/4038/4686112993_efe13b4937_h.jpg"
    },
    {
        name: "Movie Banner 3",
        image: "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_926,h_462/https://li-img-cdn-lb.lionsgateplay.com/mvp/TRAINTOBUSAN0Y2016MEN/TRAINTOBUSAN0Y2016MEN-lgi-landscape-poster-1920X1080-PSTL.jpg"
    },
    {
        name: "Movie Banner 4",
        image: "https://webneel.com/wnet/file/images/11-16/8-xmen-movie-poster-design.jpg"
    },
    {
        name: "Movie Banner 5",
        image: "https://host.trivialbeing.org/up/tdk-apr30-hong-kong-banner.jpg"
    }
];

let index = 0;

document.getElementById("banner").src = images[index].image;

document.getElementById("title").innerHTML = images[index].name;

function nextSlide() {
    index++;
   
    if (index == images.length) {
        index = 0;
    }
    document.getElementById("banner").src = images[index].image;
    document.getElementById("title").innerHTML = images[index].name;
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    document.getElementById("banner").src = images[index].image;
    document.getElementById("title").innerHTML = images[index].name;
}


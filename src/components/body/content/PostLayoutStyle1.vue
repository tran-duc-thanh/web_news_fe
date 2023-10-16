<template>
    <!-- Post Items Start -->
    <div class="post--items post--items-1 pd--30-0">
        <div class="row gutter--15">
            <div class="col-md-6">
                <!-- Post Item Start -->
                <div class="post--item post--layout-1 post--title-larger">
                    <div class="post--img">
                        <a href="news-single.html" class="thumb"><img src="img/home-img/banner-01.jpg" alt=""></a>
                        <a href="#" class="cat">Politics</a>
                        <a href="#" class="icon"><i class="fa fa-flash"></i></a>

                        <div class="post--map">
                            <p class="btn-link"><i class="fa fa-map-o"></i>Location in Google Map</p>

                            <div class="map--wrapper">
                                <div data-map-latitude="23.790546" data-map-longitude="90.375583" data-map-zoom="6"
                                    data-map-marker="[[23.790546, 90.375583]]"></div>
                            </div>
                        </div>

                        <div class="post--info">
                            <ul class="nav meta">
                                <li><a href="#">Norma R. Hogan</a></li>
                                <li><a href="#">20 April 2017</a></li>
                            </ul>

                            <div class="title">
                                <h2 class="h4"><a href="#" @click="handleClick" class="btn-link">Siriyan civil war getting
                                        righteous indignation and dislike men who are so beguiled and demoralized by the
                                        sure.</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Post Item End -->
            </div>

            <div class="col-md-6">
                <div class="row gutter--15">
                    <div class="col-xs-6 col-xss-12">
                        <!-- Post Item Start -->
                        <div class="post--item post--layout-1 post--title-large">
                            <div class="post--img">
                                <a href="news-single.html" class="thumb"><img src="img/home-img/banner-02.jpg" alt=""></a>
                                <a href="#" class="cat">Travel</a>
                                <a href="#" class="icon"><i class="fa fa-flash"></i></a>

                                <div class="post--info">
                                    <ul class="nav meta">
                                        <li><a href="#">Corey I. Dean</a></li>
                                        <li><a href="#">20 April 2017</a></li>
                                    </ul>

                                    <div class="title">
                                        <h2 class="h4"><a href="news-single.html" class="btn-link">Lorem Ipsum is simply
                                                dummy text of the printing</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Post Item End -->
                    </div>

                    <div class="col-xs-6 hidden-xss">
                        <!-- Post Item Start -->
                        <div class="post--item post--layout-1 post--title-large">
                            <div class="post--img">
                                <a href="news-single.html" class="thumb"><img src="img/home-img/banner-03.jpg" alt=""></a>
                                <a href="#" class="cat">Education</a>
                                <a href="#" class="icon"><i class="fa fa-flash"></i></a>

                                <div class="post--map">
                                    <p class="btn-link"><i class="fa fa-map-o"></i>Location in Google Map</p>

                                    <div class="map--wrapper">
                                        <div data-map-latitude="23.790546" data-map-longitude="90.375583" data-map-zoom="6"
                                            data-map-marker="[[23.790546, 90.375583]]"></div>
                                    </div>
                                </div>

                                <div class="post--info">
                                    <ul class="nav meta">
                                        <li><a href="#">Leraje</a></li>
                                        <li><a href="#">20 April 2017</a></li>
                                    </ul>

                                    <div class="title">
                                        <h2 class="h4"><a href="news-single.html" class="btn-link">Lorem Ipsum is simply
                                                dummy text of the printing</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Post Item End -->
                    </div>

                    <div class="col-sm-12 hidden-sm hidden-xs">
                        <!-- Post Item Start -->
                        <div class="post--item post--layout-1 post--title-larger">
                            <div class="post--img">
                                <a href="news-single.html" class="thumb"><img src="img/home-img/banner-04.jpg" alt=""></a>
                                <a href="#" class="cat">Politics</a>
                                <a href="#" class="icon"><i class="fa fa-fire"></i></a>

                                <div class="post--info">
                                    <ul class="nav meta">
                                        <li><a href="#">Balam</a></li>
                                        <li><a href="#">20 April 2017</a></li>
                                    </ul>

                                    <div class="title">
                                        <h2 class="h4"><a href="news-single.html" class="btn-link">On the other hand, we
                                                denounce with righteous indignation and dislike men who are so beguiled and
                                                demoralized by the sure.</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Post Item End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Post Items End -->
</template>

<script>
export default {
    name: 'PostLayoutStyle1',
    methods: {
        handleClick(event) {
            event.preventDefault();
            this.$emit("detail-news-clicked");
            console.log("click detail")
        },
    },
}
</script>
<template>
    <!-- Main Content Section Start -->
    <div class="main-content--section pbottom--30">
        <div class="container">
            <!-- Main Content Start -->
            <div class="main--content">
                <!-- Post Items Start -->
                <div class="post--items post--items-1 pd--30-0">
                    <div class="row gutter--15">
                        <div class="col-md-6">
                            <!-- Post Item Start -->
                            <div class="post--item post--layout-1 post--title-larger">
                                <div class="post--img">
                                    <a href="news-single-v1.html" class="thumb">
                                        <img v-if="articles.length === 0" src="img/home-img/banner-01.jpg" alt="">
                                        <img v-else :src="articles[0].imageBase64" width="562.500" height="389.062" alt="">
                                    </a>
                                    <a href="#" class="cat">Politics</a>
                                    <a href="#" class="icon"><i class="fa fa-flash"></i></a>

                                    <div class="post--map">
                                        <p class="btn-link"><i class="fa fa-map-o"></i>Location in Google Map</p>

                                        <div class="map--wrapper">
                                            <div data-map-latitude="23.790546" data-map-longitude="90.375583"
                                                data-map-zoom="6" data-map-marker="[[23.790546, 90.375583]]"></div>
                                        </div>
                                    </div>

                                    <div class="post--info">
                                        <ul class="nav meta">
                                            <li><a href="#">Norma R. Hogan</a></li>
                                            <li v-if="articles.length === 0"><a href="#">Không có dữ liệu</a></li>
                                            <li v-else><a href="#">{{ articles[0].publicationDate }}</a></li>
                                        </ul>

                                        <div v-if="articles.length === 0" class="title">
                                            <h2 class="h4">Không có dữ liệu</h2>
                                        </div>

                                        <div v-else class="title">
                                            <router-link :to="{ name: 'detail', params: { id: articles[0].articleID } }"
                                                class="btn-link">
                                                <h2 class="h4">{{ getTruncatedString(articles[0].title) }}</h2>
                                            </router-link>
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
                                            <a href="news-single-v1.html" class="thumb">
                                                <img v-if="articles.length === 0" src="img/home-img/banner-01.jpg" alt="">
                                                <img v-else :src="articles[1].imageBase64" width="273.750" height="187.512"
                                                    alt="">
                                            </a>
                                            <a href="#" class="cat">Travel</a>
                                            <a href="#" class="icon"><i class="fa fa-flash"></i></a>

                                            <div class="post--info">
                                                <ul class="nav meta">
                                                    <li><a href="#">Corey I. Dean</a></li>
                                                    <li v-if="articles.length === 0"><a href="#">Không có dữ liệu</a></li>
                                                    <li v-else><a href="#">{{ articles[1].publicationDate }}</a></li>
                                                </ul>
                                                <div v-if="articles.length === 0" class="title">
                                                    <h2 class="h4">Không có dữ liệu</h2>
                                                </div>
                                                <div v-else class="title">
                                                    <router-link
                                                        :to="{ name: 'detail', params: { id: articles[1].articleID } }"
                                                        class="btn-link">
                                                        <h2 class="h4">{{ getTruncatedString(articles[1].title) }}</h2>
                                                    </router-link>
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
                                            <a href="news-single-v1.html" class="thumb">
                                                <img v-if="articles.length === 0" src="img/home-img/banner-01.jpg" alt="">
                                                <img v-else :src="articles[2].imageBase64" width="273.750" height="187.512"
                                                    alt="">
                                            </a>
                                            <a href="#" class="cat">Education</a>
                                            <a href="#" class="icon"><i class="fa fa-flash"></i></a>

                                            <div class="post--map">
                                                <p class="btn-link"><i class="fa fa-map-o"></i>Location in Google Map</p>

                                                <div class="map--wrapper">
                                                    <div data-map-latitude="23.790546" data-map-longitude="90.375583"
                                                        data-map-zoom="6" data-map-marker="[[23.790546, 90.375583]]"></div>
                                                </div>
                                            </div>

                                            <div class="post--info">
                                                <ul class="nav meta">
                                                    <li><a href="#">Leraje</a></li>
                                                    <li v-if="articles.length === 0"><a href="#">Không có dữ liệu</a></li>
                                                    <li v-else><a href="#">{{ articles[2].publicationDate }}</a></li>
                                                </ul>

                                                <div v-if="articles.length === 0" class="title">
                                                    <h2 class="h4">Không có dữ liệu</h2>
                                                </div>
                                                <div v-else class="title">
                                                    <router-link
                                                        :to="{ name: 'detail', params: { id: articles[2].articleID } }"
                                                        class="btn-link">
                                                        <h2 class="h4">{{ getTruncatedString(articles[2].title) }}</h2>
                                                    </router-link>
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
                                            <a href="news-single-v1.html" class="thumb">
                                                <img v-if="articles.length === 0" src="img/home-img/banner-01.jpg" alt="">
                                                <img v-else :src="articles[3].imageBase64" width="562.500" height="186.325"
                                                    alt="">
                                            </a>
                                            <a href="#" class="cat">Politics</a>
                                            <a href="#" class="icon"><i class="fa fa-fire"></i></a>

                                            <div class="post--info">
                                                <ul class="nav meta">
                                                    <li><a href="#">Balam</a></li>
                                                    <li v-if="articles.length === 0"><a href="#">Không có dữ liệu</a></li>
                                                    <li v-else><a href="#">{{ articles[3].publicationDate }}</a></li>
                                                </ul>

                                                <div v-if="articles.length === 0" class="title">
                                                    <h2 class="h4">Không có dữ liệu</h2>
                                                </div>
                                                <div v-else class="title">
                                                    <router-link
                                                        :to="{ name: 'detail', params: { id: articles[3].articleID } }"
                                                        class="btn-link">
                                                        <h2 class="h4">{{ getTruncatedString(articles[3].title) }}</h2>
                                                    </router-link>
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
            </div>
            <!-- Main Content End -->

            <div class="row">
                <!-- Main Content Start -->
                <div class="main--content col-md-8 col-sm-7" data-sticky-content="true">
                    <div class="sticky-content-inner">
                        <div class="row">
                            <!-- World News Start -->
                            <div class="col-md-6 ptop--30 pbottom--30">
                                <!-- Post Items Title Start -->
                                <div class="post--items-title" data-ajax="tab">
                                    <h2 v-if="categories.length > 0" class="h4">{{ categories[1].name }}</h2>

                                    <div class="nav">
                                        <a href="#" class="prev btn-link" data-ajax-action="load_prev_world_news_posts">
                                            <i class="fa fa-long-arrow-left"></i>
                                        </a>

                                        <span class="divider">/</span>

                                        <a href="#" class="next btn-link" data-ajax-action="load_next_world_news_posts">
                                            <i class="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <!-- Post Items Title End -->

                                <!-- Post Items Start -->
                                <div class="post--items post--items-2" data-ajax-content="outer">
                                    <ul class="nav row gutter--15" data-ajax-content="inner">
                                        <li class="col-xs-12">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb">
                                                        <img v-if="articles1.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles1[0].imageBase64" width="360"
                                                            height="175.200" alt="">
                                                    </a>
                                                    <a href="#" class="cat">War</a>
                                                    <a href="#" class="icon"><i class="fa fa-flash"></i></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles1.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles1[0].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles1.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles1[0].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles1[0].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-12">
                                            <!-- Divider Start -->
                                            <hr class="divider">
                                            <!-- Divider End -->
                                        </li>
                                        <li class="col-xs-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb">
                                                        <img v-if="articles1.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles1[1].imageBase64" width="172.500"
                                                            height="95.825" alt="">
                                                    </a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Hantu Raya</a></li>
                                                            <li v-if="articles1.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles1[1].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles1.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles1[1].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles1[1].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles1.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles1[2].imageBase64" width="172.500"
                                                            height="95.825" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles1.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles1[2].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles1.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles1[2].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles1[2].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-12">
                                            <!-- Divider Start -->
                                            <hr class="divider">
                                            <!-- Divider End -->
                                        </li>
                                        <li class="col-xs-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles1.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles1[3].imageBase64" width="172.500"
                                                            height="95.825" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles1.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles1[3].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles1.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles1[3].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles1[3].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles1.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles1[4].imageBase64" width="172.500"
                                                            height="95.825" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Hantu Raya</a></li>
                                                            <li v-if="articles1.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles1[4].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles1.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles1[4].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles1[4].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                    </ul>

                                    <!-- Preloader Start -->
                                    <div class="preloader bg--color-0--b" data-preloader="1">
                                        <div class="preloader--inner"></div>
                                    </div>
                                    <!-- Preloader End -->
                                </div>
                                <!-- Post Items End -->
                            </div>
                            <!-- World News End -->

                            <!-- Technology Start -->
                            <div class="col-md-6 ptop--30 pbottom--30">
                                <!-- Post Items Title Start -->
                                <div class="post--items-title" data-ajax="tab">
                                    <h2 v-if="categories.length > 0" class="h4">{{ categories[2].name }}</h2>

                                    <div class="nav">
                                        <a href="#" class="prev btn-link" data-ajax-action="load_prev_technology_posts">
                                            <i class="fa fa-long-arrow-left"></i>
                                        </a>

                                        <span class="divider">/</span>

                                        <a href="#" class="next btn-link" data-ajax-action="load_next_technology_posts">
                                            <i class="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <!-- Post Items Title End -->

                                <!-- Post Items Start -->
                                <div class="post--items post--items-3" data-ajax-content="outer">
                                    <ul class="nav" data-ajax-content="inner">
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles2.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles2[0].imageBase64" width="360" height="175"
                                                            alt=""></a>
                                                    <a href="#" class="cat">Computer</a>
                                                    <a href="#" class="icon"><i class="fa fa-heart-o"></i></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bathin</a></li>
                                                            <li v-if="articles2.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles2[0].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles2.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles2[0].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles2[0].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles2.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles2[1].imageBase64" width="100" height="70"
                                                            alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bune</a></li>
                                                            <li v-if="articles2.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles2[1].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles2.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles2[1].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles2[1].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles2.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles2[2].imageBase64" width="100" height="70"
                                                            alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bune</a></li>
                                                            <li v-if="articles2.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles2[2].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles2.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles2[2].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles2[2].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles2.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles2[3].imageBase64" width="100" height="70"
                                                            alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bune</a></li>
                                                            <li v-if="articles2.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles2[3].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles2.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles2[3].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles2[3].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles2.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles2[4].imageBase64" width="100" height="70"
                                                            alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bune</a></li>
                                                            <li v-if="articles2.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles2[4].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles2.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles2[4].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles2[4].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                    </ul>

                                    <!-- Preloader Start -->
                                    <div class="preloader bg--color-0--b" data-preloader="1">
                                        <div class="preloader--inner"></div>
                                    </div>
                                    <!-- Preloader End -->
                                </div>
                                <!-- Post Items End -->
                            </div>
                            <!-- Technology End -->

                            <!-- Ad Start -->
                            <div class="col-md-12 ptop--30 pbottom--30">
                                <!-- Advertisement Start -->
                                <div class="ad--space">
                                    <a href="#">
                                        <img src="img/ads-img/ad-728x90-01.jpg" alt="" class="center-block">
                                    </a>
                                </div>
                                <!-- Advertisement End -->
                            </div>
                            <!-- Ad End -->

                            <!-- Finance Start -->
                            <div class="col-md-12 ptop--30 pbottom--30">
                                <!-- Post Items Title Start -->
                                <div class="post--items-title" data-ajax="tab">
                                    <h2 v-if="categories.length > 0" class="h4">{{ categories[3].name }}</h2>

                                    <div class="nav">
                                        <a href="#" class="prev btn-link" data-ajax-action="load_prev_finance_posts">
                                            <i class="fa fa-long-arrow-left"></i>
                                        </a>

                                        <span class="divider">/</span>

                                        <a href="#" class="next btn-link" data-ajax-action="load_next_finance_posts">
                                            <i class="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <!-- Post Items Title End -->

                                <!-- Post Items Start -->
                                <div class="post--items post--items-2" data-ajax-content="outer">
                                    <ul class="nav row" data-ajax-content="inner">
                                        <li class="col-md-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles3.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles3[0].imageBase64" width="360"
                                                            height="243.350" alt=""></a>
                                                    <a href="#" class="cat">Business</a>
                                                    <a href="#" class="icon"><i class="fa fa-star-o"></i></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Vassago</a></li>
                                                            <li v-if="articles3.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles3[0].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles3.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles3[0].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles3[0].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>

                                        <li class="col-md-6">
                                            <ul class="nav row">
                                                <li class="col-xs-12 hidden-md hidden-lg">
                                                    <!-- Divider Start -->
                                                    <hr class="divider">
                                                    <!-- Divider End -->
                                                </li>

                                                <li class="col-xs-6">
                                                    <!-- Post Item Start -->
                                                    <div class="post--item post--layout-2">
                                                        <div class="post--img">
                                                            <a href="news-single-v1.html" class="thumb"><img
                                                                    v-if="articles3.length === 0"
                                                                    src="img/home-img/banner-01.jpg" alt="">
                                                                <img v-else :src="articles3[1].imageBase64" width="165"
                                                                    height="97.162" alt=""></a>

                                                            <div class="post--info">
                                                                <ul class="nav meta">
                                                                    <li><a href="#">Zepar</a></li>
                                                                    <li v-if="articles3.length === 0"><a href="#">Không có
                                                                            dữ
                                                                            liệu</a></li>
                                                                    <li v-else><a href="#">{{ articles3[1].publicationDate
                                                                    }}</a></li>
                                                                </ul>

                                                                <div v-if="articles3.length === 0" class="title">
                                                                    <h2 class="h4">Không có dữ liệu</h2>
                                                                </div>
                                                                <div v-else class="title">
                                                                    <router-link
                                                                        :to="{ name: 'detail', params: { id: articles3[1].articleID } }"
                                                                        class="btn-link">
                                                                        <h2 class="h4">{{
                                                                            getTruncatedString(articles3[1].title) }}</h2>
                                                                    </router-link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Post Item End -->
                                                </li>

                                                <li class="col-xs-6">
                                                    <!-- Post Item Start -->
                                                    <div class="post--item post--layout-2">
                                                        <div class="post--img">
                                                            <a href="news-single-v1.html" class="thumb"><img
                                                                    v-if="articles3.length === 0"
                                                                    src="img/home-img/banner-01.jpg" alt="">
                                                                <img v-else :src="articles3[2].imageBase64" width="165"
                                                                    height="97.162" alt=""></a>

                                                            <div class="post--info">
                                                                <ul class="nav meta">
                                                                    <li><a href="#">Demiurge</a></li>
                                                                    <li v-if="articles3.length === 0"><a href="#">Không có
                                                                            dữ
                                                                            liệu</a></li>
                                                                    <li v-else><a href="#">{{ articles3[2].publicationDate
                                                                    }}</a></li>
                                                                </ul>

                                                                <div v-if="articles3.length === 0" class="title">
                                                                    <h2 class="h4">Không có dữ liệu</h2>
                                                                </div>
                                                                <div v-else class="title">
                                                                    <router-link
                                                                        :to="{ name: 'detail', params: { id: articles3[2].articleID } }"
                                                                        class="btn-link">
                                                                        <h2 class="h4">{{
                                                                            getTruncatedString(articles3[2].title) }}</h2>
                                                                    </router-link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Post Item End -->
                                                </li>

                                                <li class="col-xs-12">
                                                    <!-- Divider Start -->
                                                    <hr class="divider">
                                                    <!-- Divider End -->
                                                </li>

                                                <li class="col-xs-6">
                                                    <!-- Post Item Start -->
                                                    <div class="post--item post--layout-2">
                                                        <div class="post--img">
                                                            <a href="news-single-v1.html" class="thumb"><img
                                                                    v-if="articles3.length === 0"
                                                                    src="img/home-img/banner-01.jpg" alt="">
                                                                <img v-else :src="articles3[3].imageBase64" width="165"
                                                                    height="97.162" alt=""></a>

                                                            <div class="post--info">
                                                                <ul class="nav meta">
                                                                    <li><a href="#">Demiurge</a></li>
                                                                    <li v-if="articles3.length === 0"><a href="#">Không có
                                                                            dữ
                                                                            liệu</a></li>
                                                                    <li v-else><a href="#">{{ articles3[3].publicationDate
                                                                    }}</a></li>
                                                                </ul>

                                                                <div v-if="articles3.length === 0" class="title">
                                                                    <h2 class="h4">Không có dữ liệu</h2>
                                                                </div>
                                                                <div v-else class="title">
                                                                    <router-link
                                                                        :to="{ name: 'detail', params: { id: articles3[3].articleID } }"
                                                                        class="btn-link">
                                                                        <h2 class="h4">{{
                                                                            getTruncatedString(articles3[3].title) }}</h2>
                                                                    </router-link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Post Item End -->
                                                </li>

                                                <li class="col-xs-6">
                                                    <!-- Post Item Start -->
                                                    <div class="post--item post--layout-2">
                                                        <div class="post--img">
                                                            <a href="news-single-v1.html" class="thumb"><img
                                                                    v-if="articles3.length === 0"
                                                                    src="img/home-img/banner-01.jpg" alt="">
                                                                <img v-else :src="articles3[4].imageBase64" width="165"
                                                                    height="97.162" alt=""></a>

                                                            <div class="post--info">
                                                                <ul class="nav meta">
                                                                    <li><a href="#">Zepar</a></li>
                                                                    <li v-if="articles3.length === 0"><a href="#">Không có
                                                                            dữ
                                                                            liệu</a></li>
                                                                    <li v-else><a href="#">{{ articles3[4].publicationDate
                                                                    }}</a></li>
                                                                </ul>

                                                                <div v-if="articles3.length === 0" class="title">
                                                                    <h2 class="h4">Không có dữ liệu</h2>
                                                                </div>
                                                                <div v-else class="title">
                                                                    <router-link
                                                                        :to="{ name: 'detail', params: { id: articles3[4].articleID } }"
                                                                        class="btn-link">
                                                                        <h2 class="h4">{{
                                                                            getTruncatedString(articles3[4].title) }}</h2>
                                                                    </router-link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Post Item End -->
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <!-- Preloader Start -->
                                    <div class="preloader bg--color-0--b" data-preloader="1">
                                        <div class="preloader--inner"></div>
                                    </div>
                                    <!-- Preloader End -->
                                </div>
                                <!-- Post Items End -->
                            </div>
                            <!-- Finance End -->

                            <!-- Politics Start -->
                            <div class="col-md-6 ptop--30 pbottom--30">
                                <!-- Post Items Title Start -->
                                <div class="post--items-title" data-ajax="tab">
                                    <h2 v-if="categories.length > 0" class="h4">{{ categories[4].name }}</h2>

                                    <div class="nav">
                                        <a href="#" class="prev btn-link" data-ajax-action="load_prev_politics_posts">
                                            <i class="fa fa-long-arrow-left"></i>
                                        </a>

                                        <span class="divider">/</span>

                                        <a href="#" class="next btn-link" data-ajax-action="load_next_politics_posts">
                                            <i class="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <!-- Post Items Title End -->

                                <!-- Post Items Start -->
                                <div class="post--items post--items-2" data-ajax-content="outer">
                                    <ul class="nav row gutter--15" data-ajax-content="inner">
                                        <li class="col-xs-12">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles4.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles4[0].imageBase64" width="360"
                                                            height="175.200" alt=""></a>
                                                    <a href="#" class="cat">Election</a>
                                                    <a href="#" class="icon"><i class="fa fa-fire"></i></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles4.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles4[0].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles4.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles4[0].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles4[0].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-12">
                                            <!-- Divider Start -->
                                            <hr class="divider">
                                            <!-- Divider End -->
                                        </li>
                                        <li class="col-xs-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles4.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles4[1].imageBase64" width="172.500"
                                                            height="95.825" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Hantu Raya</a></li>
                                                            <li v-if="articles4.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles4[1].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles4.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles4[1].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles4[1].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles4.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles4[2].imageBase64" width="172.500"
                                                            height="95.825" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles4.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles4[2].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles4.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles4[2].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles4[2].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-12">
                                            <!-- Divider Start -->
                                            <hr class="divider">
                                            <!-- Divider End -->
                                        </li>
                                        <li class="col-xs-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles4.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles4[3].imageBase64" width="172.500"
                                                            height="95.825" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles4.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles4[3].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles4.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles4[3].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles4[3].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles4.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles4[4].imageBase64" width="172.500"
                                                            height="95.825" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Hantu Raya</a></li>
                                                            <li v-if="articles4.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles4[4].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles4.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles4[4].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles4[4].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                    </ul>

                                    <!-- Preloader Start -->
                                    <div class="preloader bg--color-0--b" data-preloader="1">
                                        <div class="preloader--inner"></div>
                                    </div>
                                    <!-- Preloader End -->
                                </div>
                                <!-- Post Items End -->
                            </div>
                            <!-- Politics End -->

                            <!-- Sports Start -->
                            <div class="col-md-6 ptop--30 pbottom--30">
                                <!-- Post Items Title Start -->
                                <div class="post--items-title" data-ajax="tab">
                                    <h2 v-if="categories.length > 0" class="h4">{{ categories[5].name }}</h2>

                                    <div class="nav">
                                        <a href="#" class="prev btn-link" data-ajax-action="load_prev_sports_posts">
                                            <i class="fa fa-long-arrow-left"></i>
                                        </a>

                                        <span class="divider">/</span>

                                        <a href="#" class="next btn-link" data-ajax-action="load_next_sports_posts">
                                            <i class="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <!-- Post Items Title End -->

                                <!-- Post Items Start -->
                                <div class="post--items post--items-3" data-ajax-content="outer">
                                    <ul class="nav" data-ajax-content="inner">
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles5.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles5[0].imageBase64" width="360"
                                                            height="175.200" alt=""></a>
                                                    <a href="#" class="cat">Basketball</a>
                                                    <a href="#" class="icon"><i class="fa fa-eye"></i></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bathin</a></li>
                                                            <li v-if="articles5.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles5[0].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles5.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles5[0].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles5[0].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles5.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles5[1].imageBase64" width="100" height="70"
                                                            alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bune</a></li>
                                                            <li v-if="articles5.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles5[1].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles5.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles5[1].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles5[1].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles5.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles5[2].imageBase64" width="100" height="70"
                                                            alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bune</a></li>
                                                            <li v-if="articles5.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles5[2].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles5.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles5[2].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles5[2].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles5.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles5[3].imageBase64" width="100" height="70"
                                                            alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bune</a></li>
                                                            <li v-if="articles5.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles5[3].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles5.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles5[3].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles5[3].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles5.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles5[4].imageBase64" width="100" height="70"
                                                            alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bune</a></li>
                                                            <li v-if="articles5.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles5[4].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles5.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles5[4].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles5[4].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                    </ul>

                                    <!-- Preloader Start -->
                                    <div class="preloader bg--color-0--b" data-preloader="1">
                                        <div class="preloader--inner"></div>
                                    </div>
                                    <!-- Preloader End -->
                                </div>
                                <!-- Post Items End -->
                            </div>
                            <!-- Sports End -->
                        </div>
                    </div>
                </div>
                <!-- Main Content End -->

                <!-- Main Sidebar Start -->
                <div class="main--sidebar col-md-4 col-sm-5 ptop--30 pbottom--30" data-sticky-content="true">
                    <div class="sticky-content-inner">
                        <!-- Widget Start -->
                        <div class="widget">
                            <!-- Ad Widget Start -->
                            <div class="ad--widget">
                                <a href="#">
                                    <img src="img/ads-img/ad-300x250-1.jpg" alt="">
                                </a>
                            </div>
                            <!-- Ad Widget End -->
                        </div>
                        <!-- Widget End -->

                        <!-- Widget Start -->
                        <div class="widget">
                            <div class="widget--title">
                                <h2 class="h4">Stay Connected</h2>
                                <i class="icon fa fa-share-alt"></i>
                            </div>

                            <!-- Social Widget Start -->
                            <div class="social--widget style--1">
                                <ul class="nav">
                                    <li class="facebook">
                                        <a href="#">
                                            <span class="icon"><i class="fa fa-facebook-f"></i></span>
                                            <span class="count">521</span>
                                            <span class="title">Likes</span>
                                        </a>
                                    </li>
                                    <li class="twitter">
                                        <a href="#">
                                            <span class="icon"><i class="fa fa-twitter"></i></span>
                                            <span class="count">3297</span>
                                            <span class="title">Followers</span>
                                        </a>
                                    </li>
                                    <li class="google-plus">
                                        <a href="#">
                                            <span class="icon"><i class="fa fa-google-plus"></i></span>
                                            <span class="count">596282</span>
                                            <span class="title">Followers</span>
                                        </a>
                                    </li>
                                    <li class="rss">
                                        <a href="#">
                                            <span class="icon"><i class="fa fa-rss"></i></span>
                                            <span class="count">521</span>
                                            <span class="title">Subscriber</span>
                                        </a>
                                    </li>
                                    <li class="vimeo">
                                        <a href="#">
                                            <span class="icon"><i class="fa fa-vimeo"></i></span>
                                            <span class="count">3297</span>
                                            <span class="title">Followers</span>
                                        </a>
                                    </li>
                                    <li class="youtube">
                                        <a href="#">
                                            <span class="icon"><i class="fa fa-youtube-square"></i></span>
                                            <span class="count">596282</span>
                                            <span class="title">Subscriber</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- Social Widget End -->
                        </div>
                        <!-- Widget End -->

                        <!-- Widget Start -->
                        <div class="widget">
                            <div class="widget--title">
                                <h2 class="h4">Get Newsletter</h2>
                                <i class="icon fa fa-envelope-open-o"></i>
                            </div>

                            <!-- Subscribe Widget Start -->
                            <div class="subscribe--widget">
                                <div class="content">
                                    <p>Subscribe to our newsletter to get latest news, popular news and exclusive updates.
                                    </p>
                                </div>

                                <form
                                    action="https://themelooks.us13.list-manage.com/subscribe/post?u=79f0b132ec25ee223bb41835f&id=f4e0e93d1d"
                                    method="post" name="mc-embedded-subscribe-form" target="_blank"
                                    data-form="mailchimpAjax">
                                    <div class="input-group">
                                        <input type="email" name="EMAIL" placeholder="E-mail address" class="form-control"
                                            autocomplete="off" required>

                                        <div class="input-group-btn">
                                            <button type="submit" class="btn btn-lg btn-default active"><i
                                                    class="fa fa-paper-plane-o"></i></button>
                                        </div>
                                    </div>

                                    <div class="status"></div>
                                </form>
                            </div>
                            <!-- Subscribe Widget End -->
                        </div>
                        <!-- Widget End -->

                        <!-- Widget Start -->
                        <div class="widget">
                            <div class="widget--title">
                                <h2 class="h4">Featured News</h2>
                                <i class="icon fa fa-newspaper-o"></i>
                            </div>

                            <!-- List Widgets Start -->
                            <div class="list--widget list--widget-1">
                                <div class="list--widget-nav" data-ajax="tab">
                                    <ul class="nav nav-justified">
                                        <li>
                                            <a href="#" data-ajax-action="load_widget_hot_news">Hot News</a>
                                        </li>
                                        <li class="active">
                                            <a href="#" data-ajax-action="load_widget_trendy_news">Trendy News</a>
                                        </li>
                                        <li>
                                            <a href="#" data-ajax-action="load_widget_most_watched">Most Watched</a>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Post Items Start -->
                                <div class="post--items post--items-3" data-ajax-content="outer">
                                    <ul class="nav" data-ajax-content="inner">
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            src="img/widgets-img/news-widget-01.jpg" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Ninurta</a></li>
                                                            <li><a href="#">16 April 2017</a></li>
                                                        </ul>

                                                        <div class="title">
                                                            <h3 class="h4"><a href="news-single-v1.html"
                                                                    class="btn-link">Long established fact that a reader
                                                                    will be distracted</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            src="img/widgets-img/news-widget-02.jpg" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Orcus</a></li>
                                                            <li><a href="#">16 April 2017</a></li>
                                                        </ul>

                                                        <div class="title">
                                                            <h3 class="h4"><a href="news-single-v1.html"
                                                                    class="btn-link">Long established fact that a reader
                                                                    will be distracted</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            src="img/widgets-img/news-widget-03.jpg" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Rahab</a></li>
                                                            <li><a href="#">16 April 2017</a></li>
                                                        </ul>

                                                        <div class="title">
                                                            <h3 class="h4"><a href="news-single-v1.html"
                                                                    class="btn-link">Long established fact that a reader
                                                                    will be distracted</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            src="img/widgets-img/news-widget-04.jpg" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Tannin</a></li>
                                                            <li><a href="#">16 April 2017</a></li>
                                                        </ul>

                                                        <div class="title">
                                                            <h3 class="h4"><a href="news-single-v1.html"
                                                                    class="btn-link">Long established fact that a reader
                                                                    will be distracted</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                    </ul>

                                    <!-- Preloader Start -->
                                    <div class="preloader bg--color-0--b" data-preloader="1">
                                        <div class="preloader--inner"></div>
                                    </div>
                                    <!-- Preloader End -->
                                </div>
                                <!-- Post Items End -->
                            </div>
                            <!-- List Widgets End -->
                        </div>
                        <!-- Widget End -->

                        <!-- Widget Start -->
                        <div class="widget">
                            <div class="widget--title">
                                <h2 class="h4">Advertisement</h2>
                                <i class="icon fa fa-bullhorn"></i>
                            </div>

                            <!-- Ad Widget Start -->
                            <div class="ad--widget">
                                <a href="#">
                                    <img src="img/ads-img/ad-300x250-2.jpg" alt="">
                                </a>
                            </div>
                            <!-- Ad Widget End -->
                        </div>
                        <!-- Widget End -->
                    </div>
                </div>
                <!-- Main Sidebar End -->
            </div>

            <!-- Advertisement Start -->
            <div class="ad--space pd--30-0">
                <a href="#">
                    <img src="img/ads-img/ad-970x90.jpg" alt="" class="center-block">
                </a>
            </div>
            <!-- Advertisement End -->

            <div class="row">
                <!-- Main Content Start -->
                <div class="main--content col-md-8 col-sm-7" data-sticky-content="true">
                    <div class="sticky-content-inner">
                        <div class="row">
                            <!-- Health and fitness Start -->
                            <div class="col-md-6 ptop--30 pbottom--30">
                                <!-- Post Items Title Start -->
                                <div class="post--items-title" data-ajax="tab">
                                    <h2 v-if="categories.length > 0" class="h4">{{ categories[6].name }}</h2>

                                    <div class="nav">
                                        <a href="#" class="prev btn-link" data-ajax-action="load_prev_health_fitness_posts">
                                            <i class="fa fa-long-arrow-left"></i>
                                        </a>

                                        <span class="divider">/</span>

                                        <a href="#" class="next btn-link" data-ajax-action="load_next_health_fitness_posts">
                                            <i class="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <!-- Post Items Title End -->

                                <!-- Post Items Start -->
                                <div class="post--items post--items-3" data-ajax-content="outer">
                                    <ul class="nav" data-ajax-content="inner">
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles6.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles6[0].imageBase64" width="360" height="175"
                                                            alt=""></a>
                                                    <a href="#" class="cat">Business</a>
                                                    <a href="#" class="icon"><i class="fa fa-star-o"></i></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bathin</a></li>
                                                            <li v-if="articles6.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles6[0].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles6.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles6[0].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ articles6[0].title }}</h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles6.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles6[1].imageBase64" width="100" height="70"
                                                            alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Maclaan John</a></li>
                                                            <li v-if="articles6.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles6[1].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles6.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles6[1].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles6[1].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles6.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles6[2].imageBase64" width="100" height="70"
                                                            alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Ziminiar</a></li>
                                                            <li v-if="articles6.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles6[2].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles6.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles6[2].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles6[2].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles6.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles6[3].imageBase64" width="100" height="70"
                                                            alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Vanth</a></li>
                                                            <li v-if="articles6.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles6[3].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles6.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles6[3].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles6[3].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles6.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles6[4].imageBase64" width="100" height="70"
                                                            alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Vanth</a></li>
                                                            <li v-if="articles6.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles6[4].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles6.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles6[4].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles6[4].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                    </ul>

                                    <!-- Preloader Start -->
                                    <div class="preloader bg--color-0--b" data-preloader="1">
                                        <div class="preloader--inner"></div>
                                    </div>
                                    <!-- Preloader End -->
                                </div>
                                <!-- Post Items End -->
                            </div>
                            <!-- Health and fitness End -->

                            <!-- Lifestyle Start -->
                            <div class="col-md-6 ptop--30 pbottom--30">
                                <!-- Post Items Title Start -->
                                <div class="post--items-title" data-ajax="tab">
                                    <h2 v-if="categories.length > 0" class="h4">{{ categories[7].name }}</h2>

                                    <div class="nav">
                                        <a href="#" class="prev btn-link" data-ajax-action="load_prev_lifestyle_posts">
                                            <i class="fa fa-long-arrow-left"></i>
                                        </a>

                                        <span class="divider">/</span>

                                        <a href="#" class="next btn-link" data-ajax-action="load_next_lifestyle_posts">
                                            <i class="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <!-- Post Items Title End -->

                                <!-- Post Items Start -->
                                <div class="post--items post--items-2" data-ajax-content="outer">
                                    <ul class="nav row gutter--15" data-ajax-content="inner">
                                        <li class="col-xs-12">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles7.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles7[0].imageBase64" width="360" height="175"
                                                            alt=""></a>
                                                    <a href="#" class="cat">Fashion</a>
                                                    <a href="#" class="icon"><i class="fa fa-heart-o"></i></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles7.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles7[0].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles7.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles7[0].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ articles7[0].title }}</h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-12">
                                            <!-- Divider Start -->
                                            <hr class="divider">
                                            <!-- Divider End -->
                                        </li>
                                        <li class="col-xs-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles7.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles7[1].imageBase64" width="172.500"
                                                            height="95.825" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles7.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles7[1].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles7.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles7[1].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles7[1].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles7.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles7[2].imageBase64" width="172.500"
                                                            height="95.825" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles7.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles7[2].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles7.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles7[2].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles7[2].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-12">
                                            <!-- Divider Start -->
                                            <hr class="divider">
                                            <!-- Divider End -->
                                        </li>
                                        <li class="col-xs-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles7.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles7[3].imageBase64" width="172.500"
                                                            height="95.825" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles7.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles7[3].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles7.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles7[3].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles7[3].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-6">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles7.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles7[4].imageBase64" width="172.500"
                                                            height="95.825" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles7.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles7[4].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles7.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles7[4].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles7[4].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                    </ul>

                                    <!-- Preloader Start -->
                                    <div class="preloader bg--color-0--b" data-preloader="1">
                                        <div class="preloader--inner"></div>
                                    </div>
                                    <!-- Preloader End -->
                                </div>
                                <!-- Post Items End -->
                            </div>
                            <!-- Lifestyle End -->

                            <!-- Foods and Recipes Start -->
                            <div class="col-md-12 ptop--30 pbottom--30">
                                <!-- Post Items Title Start -->
                                <div class="post--items-title" data-ajax="tab">
                                    <h2 v-if="categories.length > 0" class="h4">{{ categories[8].name }}</h2>

                                    <div class="nav">
                                        <a href="#" class="prev btn-link" data-ajax-action="load_prev_food_resturent_posts">
                                            <i class="fa fa-long-arrow-left"></i>
                                        </a>

                                        <span class="divider">/</span>

                                        <a href="#" class="next btn-link" data-ajax-action="load_next_food_resturent_posts">
                                            <i class="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <!-- Post Items Title End -->

                                <!-- Post Items Start -->
                                <div class="post--items" data-ajax-content="outer">
                                    <ul class="nav row gutter--15" data-ajax-content="inner">
                                        <li class="col-md-4 col-xs-6 col-xxs-12">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles8.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles8[0].imageBase64" width="239.988"
                                                            height="194.512" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles8.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles8[0].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles8.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles8[0].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ articles8[0].title }}</h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-xs-12 hidden shown-xxs">
                                            <!-- Divider Start -->
                                            <hr class="divider">
                                            <!-- Divider End -->
                                        </li>
                                        <li class="col-md-4 col-xs-6 col-xxs-12">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles8.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles8[1].imageBase64" width="239.988"
                                                            height="194.512" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles8.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles8[1].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles8.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles8[1].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles8[1].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-md-4 hidden-sm hidden-xs">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles8.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles8[2].imageBase64" width="239.988"
                                                            height="194.512" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles8.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles8[2].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles8.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles8[2].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles8[2].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                    </ul>

                                    <!-- Preloader Start -->
                                    <div class="preloader bg--color-0--b" data-preloader="1">
                                        <div class="preloader--inner"></div>
                                    </div>
                                    <!-- Preloader End -->
                                </div>
                                <!-- Post Items End -->
                            </div>
                            <!-- Foods and Recipes End -->

                            <!-- Photo Gallery Start -->
                            <div class="col-md-12 ptop--30 pbottom--30">
                                <!-- Post Items Title Start -->
                                <div class="post--items-title" data-ajax="tab">
                                    <h2 v-if="categories.length > 0" class="h4">{{ categories[9].name }}</h2>

                                    <div class="nav">
                                        <a href="#" class="prev btn-link" data-ajax-action="load_prev_photo_gallery_posts">
                                            <i class="fa fa-long-arrow-left"></i>
                                        </a>

                                        <span class="divider">/</span>

                                        <a href="#" class="next btn-link" data-ajax-action="load_next_photo_gallery_posts">
                                            <i class="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <!-- Post Items Title End -->

                                <!-- Post Items Start -->
                                <div class="post--items post--items-1" data-ajax-content="outer">
                                    <ul class="nav row gutter--15" data-ajax-content="inner">
                                        <li class="col-md-12">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1 post--title-large">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles9.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles9[0].imageBase64" width="750"
                                                            height="292.300" alt=""></a>
                                                    <a href="#" class="cat">Serfer</a>
                                                    <a href="#" class="icon"><i class="fa fa-eye"></i></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles9.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles9[0].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles9.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles9[0].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ articles9[0].title }}</h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-md-4 col-xs-6 col-xxs-12">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles9.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles9[1].imageBase64" width="239.988"
                                                            height="194.575" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles9.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles9[1].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles9.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles9[1].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles9[1].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-md-4 col-xs-6 col-xxs-12">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles9.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles9[2].imageBase64" width="239.988"
                                                            height="194.575" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles9.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles9[2].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles9.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles9[2].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles9[2].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li class="col-md-4 hidden-sm hidden-xs">
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            v-if="articles9.length === 0" src="img/home-img/banner-01.jpg"
                                                            alt="">
                                                        <img v-else :src="articles9[3].imageBase64" width="239.988"
                                                            height="194.575" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li v-if="articles9.length === 0"><a href="#">Không có dữ
                                                                    liệu</a></li>
                                                            <li v-else><a href="#">{{ articles9[3].publicationDate }}</a>
                                                            </li>
                                                        </ul>

                                                        <div v-if="articles9.length === 0" class="title">
                                                            <h2 class="h4">Không có dữ liệu</h2>
                                                        </div>
                                                        <div v-else class="title">
                                                            <router-link
                                                                :to="{ name: 'detail', params: { id: articles9[3].articleID } }"
                                                                class="btn-link">
                                                                <h2 class="h4">{{ getTruncatedString(articles9[3].title) }}
                                                                </h2>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                    </ul>

                                    <!-- Preloader Start -->
                                    <div class="preloader bg--color-0--b" data-preloader="1">
                                        <div class="preloader--inner"></div>
                                    </div>
                                    <!-- Preloader End -->
                                </div>
                                <!-- Post Items End -->
                            </div>
                            <!-- Photo Gallery End -->
                        </div>
                    </div>
                </div>
                <!-- Main Content End -->

                <!-- Main Sidebar Start -->
                <div class="main--sidebar col-md-4 col-sm-5 ptop--30 pbottom--30" data-sticky-content="true">
                    <div class="sticky-content-inner">
                        <!-- Widget Start -->
                        <div class="widget">
                            <div class="widget--title" data-ajax="tab">
                                <h2 class="h4">Voting Poll (Checkbox)</h2>

                                <div class="nav">
                                    <a href="#" class="prev btn-link" data-ajax-action="load_prev_poll_widget">
                                        <i class="fa fa-long-arrow-left"></i>
                                    </a>

                                    <span class="divider">/</span>

                                    <a href="#" class="next btn-link" data-ajax-action="load_next_poll_widget">
                                        <i class="fa fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <!-- Poll Widget Start -->
                            <div class="poll--widget" data-ajax-content="outer">
                                <ul class="nav" data-ajax-content="inner">
                                    <li class="title">
                                        <h3 class="h4">Which was the best Football World Cup ever in your opinion?</h3>
                                    </li>

                                    <li class="options">
                                        <form action="#">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" name="option-1">
                                                    <span>Brazil 2014</span>
                                                </label>

                                                <p>65%<span style="width: 65%;"></span></p>
                                            </div>

                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" name="option-2">
                                                    <span>South Africa 2010</span>
                                                </label>

                                                <p>28%<span style="width: 28%;"></span></p>
                                            </div>

                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" name="option-2">
                                                    <span>Germany 2006</span>
                                                </label>

                                                <p>07%<span style="width: 07%;"></span></p>
                                            </div>

                                            <button type="submit" class="btn btn-primary">Vote Now</button>
                                        </form>
                                    </li>
                                </ul>

                                <!-- Preloader Start -->
                                <div class="preloader bg--color-0--b" data-preloader="1">
                                    <div class="preloader--inner"></div>
                                </div>
                                <!-- Preloader End -->
                            </div>
                            <!-- Poll Widget End -->
                        </div>
                        <!-- Widget End -->

                        <!-- Widget Start -->
                        <div class="widget">
                            <div class="widget--title" data-ajax="tab">
                                <h2 class="h4">Voting Poll (Radio)</h2>

                                <div class="nav">
                                    <a href="#" class="prev btn-link" data-ajax-action="load_prev_poll_widget">
                                        <i class="fa fa-long-arrow-left"></i>
                                    </a>

                                    <span class="divider">/</span>

                                    <a href="#" class="next btn-link" data-ajax-action="load_next_poll_widget">
                                        <i class="fa fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <!-- Poll Widget Start -->
                            <div class="poll--widget" data-ajax-content="outer">
                                <ul class="nav" data-ajax-content="inner">
                                    <li class="title">
                                        <h3 class="h4">Do you think the cost of sending money to mobile phone should be
                                            reduced?</h3>
                                    </li>

                                    <li class="options">
                                        <form action="#">
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="option-1">
                                                    <span>Yes</span>
                                                </label>

                                                <p>65%<span style="width: 65%;"></span></p>
                                            </div>

                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="option-1">
                                                    <span>No</span>
                                                </label>

                                                <p>28%<span style="width: 28%;"></span></p>
                                            </div>

                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="option-1">
                                                    <span>Average</span>
                                                </label>

                                                <p>07%<span style="width: 07%;"></span></p>
                                            </div>

                                            <button type="submit" class="btn btn-primary">Vote Now</button>
                                        </form>
                                    </li>
                                </ul>

                                <!-- Preloader Start -->
                                <div class="preloader bg--color-0--b" data-preloader="1">
                                    <div class="preloader--inner"></div>
                                </div>
                                <!-- Preloader End -->
                            </div>
                            <!-- Poll Widget End -->
                        </div>
                        <!-- Widget End -->

                        <!-- Widget Start -->
                        <div class="widget">
                            <!-- Ad Widget Start -->
                            <div class="ad--widget">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <a href="#">
                                            <img src="img/ads-img/ad-150x150-1.jpg" alt="">
                                        </a>
                                    </div>

                                    <div class="col-sm-6">
                                        <a href="#">
                                            <img src="img/ads-img/ad-150x150-2.jpg" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- Ad Widget End -->
                        </div>
                        <!-- Widget End -->

                        <!-- Widget Start -->
                        <div class="widget">
                            <div class="widget--title" data-ajax="tab">
                                <h2 class="h4">Readers Opinion</h2>

                                <div class="nav">
                                    <a href="#" class="prev btn-link" data-ajax-action="load_prev_readers_opinion_widget">
                                        <i class="fa fa-long-arrow-left"></i>
                                    </a>

                                    <span class="divider">/</span>

                                    <a href="#" class="next btn-link" data-ajax-action="load_next_readers_opinion_widget">
                                        <i class="fa fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <!-- List Widgets Start -->
                            <div class="list--widget list--widget-2" data-ajax-content="outer">
                                <!-- Post Items Start -->
                                <div class="post--items post--items-3">
                                    <ul class="nav" data-ajax-content="inner">
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <span class="thumb"><img src="img/widgets-img/readers-opinion-01.png"
                                                            alt=""></span>

                                                    <div class="post--info">
                                                        <div class="title">
                                                            <h3 class="h4">Long established fact that a reader will be
                                                                distracted</h3>
                                                        </div>

                                                        <ul class="nav meta">
                                                            <li><span>by Ninurta</span></li>
                                                            <li><span>16 April 2017</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <span class="thumb"><img src="img/widgets-img/readers-opinion-02.png"
                                                            alt=""></span>

                                                    <div class="post--info">
                                                        <div class="title">
                                                            <h3 class="h4">Long established fact that a reader will be
                                                                distracted</h3>
                                                        </div>

                                                        <ul class="nav meta">
                                                            <li><span>by Ninurta</span></li>
                                                            <li><span>16 April 2017</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <span class="thumb"><img src="img/widgets-img/readers-opinion-03.png"
                                                            alt=""></span>

                                                    <div class="post--info">
                                                        <div class="title">
                                                            <h3 class="h4">Long established fact that a reader will be
                                                                distracted</h3>
                                                        </div>

                                                        <ul class="nav meta">
                                                            <li><span>by Ninurta</span></li>
                                                            <li><span>16 April 2017</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                    </ul>

                                    <!-- Preloader Start -->
                                    <div class="preloader bg--color-0--b" data-preloader="1">
                                        <div class="preloader--inner"></div>
                                    </div>
                                    <!-- Preloader End -->
                                </div>
                                <!-- Post Items End -->
                            </div>
                            <!-- List Widgets End -->
                        </div>
                        <!-- Widget End -->

                        <!-- Widget Start -->
                        <div class="widget">
                            <div class="widget--title" data-ajax="tab">
                                <h2 class="h4">Editors Choice</h2>

                                <div class="nav">
                                    <a href="#" class="prev btn-link" data-ajax-action="load_prev_editors_choice_widget">
                                        <i class="fa fa-long-arrow-left"></i>
                                    </a>

                                    <span class="divider">/</span>

                                    <a href="#" class="next btn-link" data-ajax-action="load_next_editors_choice_widget">
                                        <i class="fa fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <!-- List Widgets Start -->
                            <div class="list--widget list--widget-1" data-ajax-content="outer">
                                <!-- Post Items Start -->
                                <div class="post--items post--items-3">
                                    <ul class="nav" data-ajax-content="inner">
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            src="img/widgets-img/editors-choice-01.jpg" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Ninurta</a></li>
                                                            <li><a href="#">16 April 2017</a></li>
                                                        </ul>

                                                        <div class="title">
                                                            <h3 class="h4"><a href="news-single-v1.html"
                                                                    class="btn-link">Long established fact that a reader
                                                                    will be distracted</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            src="img/widgets-img/editors-choice-02.jpg" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Orcus</a></li>
                                                            <li><a href="#">16 April 2017</a></li>
                                                        </ul>

                                                        <div class="title">
                                                            <h3 class="h4"><a href="news-single-v1.html"
                                                                    class="btn-link">Long established fact that a reader
                                                                    will be distracted</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            src="img/widgets-img/editors-choice-03.jpg" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Rahab</a></li>
                                                            <li><a href="#">16 April 2017</a></li>
                                                        </ul>

                                                        <div class="title">
                                                            <h3 class="h4"><a href="news-single-v1.html"
                                                                    class="btn-link">Long established fact that a reader
                                                                    will be distracted</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                        <li>
                                            <!-- Post Item Start -->
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="news-single-v1.html" class="thumb"><img
                                                            src="img/widgets-img/editors-choice-04.jpg" alt=""></a>

                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Tannin</a></li>
                                                            <li><a href="#">16 April 2017</a></li>
                                                        </ul>

                                                        <div class="title">
                                                            <h3 class="h4"><a href="news-single-v1.html"
                                                                    class="btn-link">Long established fact that a reader
                                                                    will be distracted</a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Post Item End -->
                                        </li>
                                    </ul>

                                    <!-- Preloader Start -->
                                    <div class="preloader bg--color-0--b" data-preloader="1">
                                        <div class="preloader--inner"></div>
                                    </div>
                                    <!-- Preloader End -->
                                </div>
                                <!-- Post Items End -->
                            </div>
                            <!-- List Widgets End -->
                        </div>
                        <!-- Widget End -->
                    </div>
                </div>
                <!-- Main Sidebar End -->
            </div>
        </div>
    </div>
    <!-- Main Content Section End -->
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'HomePage',
    data() {
        return {
            categories: [],
            categories1: [],
            articles: [],
            articles1: [],
            articles2: [],
            articles3: [],
            articles4: [],
            articles5: [],
            articles6: [],
            articles7: [],
            articles8: [],
            articles9: [],
            articles10: [],
            error: null,
        };
    },
    methods: {
        check() {
            const user = localStorage.getItem('user');
            if (user) {
                return true
            } else return false
        },
        getTruncatedString(str) {
            return str.substring(0, 50) + "...";
        }
    },
    mounted() {
        // Gọi API khi thành phần được nạp
        axios.get(`http://localhost:8082/api/category/`)
            .then(response => {
                // Gán dữ liệu từ API vào biến data
                this.categories.push(...response.data);
                const user = localStorage.getItem('user');
                if (user) {
                    this.user = JSON.parse(user);
                    axios.get(`http://localhost:8082/api/category/favorite-genre?username=${this.user.username}`)
                        .then(response => {
                            // Gán dữ liệu từ API vào biến data
                            if (response.data.length > 0) {
                                this.categories1.push(...response.data);
                            } else {
                                this.categories1 = this.categories
                            }
                            if (this.categories1.length < 11) {
                                this.categories.forEach(category => {
                                    this.categories1.forEach(category1 => {
                                        if (category.categoryID !== category1.categoryID && this.categories1.length < 11) {
                                            this.categories1.push(category)
                                        }
                                    })
                                })
                            }
                            this.categories = []
                            this.categories = this.categories1
                            this.articles = []
                            this.articles1 = []
                            this.articles2 = []
                            this.articles3 = []
                            this.articles4 = []
                            this.articles5 = []
                            this.articles6 = []
                            this.articles7 = []
                            this.articles8 = []
                            this.articles9 = []
                            this.articles10 = []
                            axios.get(`http://localhost:8082/api/articles/category/${this.categories[0].categoryID}?page=0&size=4&sort=PublicationDate`)
                                .then(res => {
                                    this.articles.push(...res.data.content);
                                })
                                .catch(error => {
                                    // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                                    this.error = 'Lỗi: ' + error.message;
                                });
                            axios.get(`http://localhost:8082/api/articles/category/${this.categories[1].categoryID}?page=0&size=5&sort=PublicationDate`)
                                .then(res => {
                                    this.articles1.push(...res.data.content);
                                })
                                .catch(error => {
                                    // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                                    this.error = 'Lỗi: ' + error.message;
                                });
                            axios.get(`http://localhost:8082/api/articles/category/${this.categories[2].categoryID}?page=0&size=5&sort=PublicationDate`)
                                .then(res => {
                                    this.articles2.push(...res.data.content);
                                })
                                .catch(error => {
                                    // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                                    this.error = 'Lỗi: ' + error.message;
                                });
                            axios.get(`http://localhost:8082/api/articles/category/${this.categories[3].categoryID}?page=0&size=5&sort=PublicationDate`)
                                .then(res => {
                                    this.articles3.push(...res.data.content);
                                })
                                .catch(error => {
                                    // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                                    this.error = 'Lỗi: ' + error.message;
                                });
                            axios.get(`http://localhost:8082/api/articles/category/${this.categories[4].categoryID}?page=0&size=5&sort=PublicationDate`)
                                .then(res => {
                                    this.articles4.push(...res.data.content);
                                })
                                .catch(error => {
                                    // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                                    this.error = 'Lỗi: ' + error.message;
                                });
                            axios.get(`http://localhost:8082/api/articles/category/${this.categories[5].categoryID}?page=0&size=5&sort=PublicationDate`)
                                .then(res => {
                                    this.articles5.push(...res.data.content);
                                })
                                .catch(error => {
                                    // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                                    this.error = 'Lỗi: ' + error.message;
                                });
                            axios.get(`http://localhost:8082/api/articles/category/${this.categories[6].categoryID}?page=0&size=5&sort=PublicationDate`)
                                .then(res => {
                                    this.articles6.push(...res.data.content);
                                })
                                .catch(error => {
                                    // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                                    this.error = 'Lỗi: ' + error.message;
                                });
                            axios.get(`http://localhost:8082/api/articles/category/${this.categories[7].categoryID}?page=0&size=5&sort=PublicationDate`)
                                .then(res => {
                                    this.articles7.push(...res.data.content);
                                })
                                .catch(error => {
                                    // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                                    this.error = 'Lỗi: ' + error.message;
                                });
                            axios.get(`http://localhost:8082/api/articles/category/${this.categories[8].categoryID}?page=0&size=5&sort=PublicationDate`)
                                .then(res => {
                                    this.articles8.push(...res.data.content);
                                })
                                .catch(error => {
                                    // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                                    this.error = 'Lỗi: ' + error.message;
                                });
                            axios.get(`http://localhost:8082/api/articles/category/${this.categories[9].categoryID}?page=0&size=5&sort=PublicationDate`)
                                .then(res => {
                                    this.articles9.push(...res.data.content);
                                })
                                .catch(error => {
                                    // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                                    this.error = 'Lỗi: ' + error.message;
                                });
                            axios.get(`http://localhost:8082/api/articles/category/${this.categories[10].categoryID}?page=0&size=5&sort=PublicationDate`)
                                .then(res => {
                                    this.articles10.push(...res.data.content);
                                })
                                .catch(error => {
                                    // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                                    this.error = 'Lỗi: ' + error.message;
                                });
                        })
                        .catch(error => {
                            // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                            this.error = 'Lỗi: ' + error.message;
                        });
                } else {
                    this.articles = []
                    this.articles1 = []
                    this.articles2 = []
                    this.articles3 = []
                    this.articles4 = []
                    this.articles5 = []
                    this.articles6 = []
                    this.articles7 = []
                    this.articles8 = []
                    this.articles9 = []
                    this.articles10 = []
                    axios.get(`http://localhost:8082/api/articles/category/${this.categories[0].categoryID}?page=0&size=4&sort=PublicationDate`)
                        .then(res => {
                            this.articles.push(...res.data.content);
                        })
                        .catch(error => {
                            // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                            this.error = 'Lỗi: ' + error.message;
                        });
                    axios.get(`http://localhost:8082/api/articles/category/${this.categories[1].categoryID}?page=0&size=5&sort=PublicationDate`)
                        .then(res => {
                            this.articles1.push(...res.data.content);
                        })
                        .catch(error => {
                            // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                            this.error = 'Lỗi: ' + error.message;
                        });
                    axios.get(`http://localhost:8082/api/articles/category/${this.categories[2].categoryID}?page=0&size=5&sort=PublicationDate`)
                        .then(res => {
                            this.articles2.push(...res.data.content);
                        })
                        .catch(error => {
                            // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                            this.error = 'Lỗi: ' + error.message;
                        });
                    axios.get(`http://localhost:8082/api/articles/category/${this.categories[3].categoryID}?page=0&size=5&sort=PublicationDate`)
                        .then(res => {
                            this.articles3.push(...res.data.content);
                        })
                        .catch(error => {
                            // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                            this.error = 'Lỗi: ' + error.message;
                        });
                    axios.get(`http://localhost:8082/api/articles/category/${this.categories[4].categoryID}?page=0&size=5&sort=PublicationDate`)
                        .then(res => {
                            this.articles4.push(...res.data.content);
                        })
                        .catch(error => {
                            // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                            this.error = 'Lỗi: ' + error.message;
                        });
                    axios.get(`http://localhost:8082/api/articles/category/${this.categories[5].categoryID}?page=0&size=5&sort=PublicationDate`)
                        .then(res => {
                            this.articles5.push(...res.data.content);
                        })
                        .catch(error => {
                            // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                            this.error = 'Lỗi: ' + error.message;
                        });
                    axios.get(`http://localhost:8082/api/articles/category/${this.categories[6].categoryID}?page=0&size=5&sort=PublicationDate`)
                        .then(res => {
                            this.articles6.push(...res.data.content);
                        })
                        .catch(error => {
                            // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                            this.error = 'Lỗi: ' + error.message;
                        });
                    axios.get(`http://localhost:8082/api/articles/category/${this.categories[7].categoryID}?page=0&size=5&sort=PublicationDate`)
                        .then(res => {
                            this.articles7.push(...res.data.content);
                        })
                        .catch(error => {
                            // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                            this.error = 'Lỗi: ' + error.message;
                        });
                    axios.get(`http://localhost:8082/api/articles/category/${this.categories[8].categoryID}?page=0&size=5&sort=PublicationDate`)
                        .then(res => {
                            this.articles8.push(...res.data.content);
                        })
                        .catch(error => {
                            // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                            this.error = 'Lỗi: ' + error.message;
                        });
                    axios.get(`http://localhost:8082/api/articles/category/${this.categories[9].categoryID}?page=0&size=5&sort=PublicationDate`)
                        .then(res => {
                            this.articles9.push(...res.data.content);
                        })
                        .catch(error => {
                            // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                            this.error = 'Lỗi: ' + error.message;
                        });
                    axios.get(`http://localhost:8082/api/articles/category/${this.categories[10].categoryID}?page=0&size=5&sort=PublicationDate`)
                        .then(res => {
                            this.articles10.push(...res.data.content);
                        })
                        .catch(error => {
                            // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                            this.error = 'Lỗi: ' + error.message;
                        });
                }
            })
            .catch(error => {
                // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                this.error = 'Lỗi: ' + error.message;
            });




    },
}
</script>
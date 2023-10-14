<template>
    <!-- Post Items Title Start -->
    <div class="post--items-title" data-ajax="tab">
        <h2 class="h4">Photo Gallery</h2>

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
                        <a href="news-single.html" class="thumb"><img src="img/home-img/photo-gallery-01.jpg" alt=""></a>
                        <a href="#" class="cat">Serfer</a>
                        <a href="#" class="icon"><i class="fa fa-eye"></i></a>

                        <div class="post--info">
                            <ul class="nav meta">
                                <li><a href="#">Astaroth</a></li>
                                <li><a href="#">Today 05:52 pm</a></li>
                            </ul>

                            <div class="title text-xxs-ellipsis">
                                <h2 class="h4"><a href="news-single.html" class="btn-link">Standard chunk of Lorem Ipsum
                                        used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
                                        1.10.33 from "de Finibus Bonorum</a></h2>
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
                        <a href="news-single.html" class="thumb"><img src="img/home-img/photo-gallery-02.jpg" alt=""></a>

                        <div class="post--info">
                            <ul class="nav meta">
                                <li><a href="#">Astaroth</a></li>
                                <li><a href="#">Today 03:52 pm</a></li>
                            </ul>

                            <div class="title">
                                <h2 class="h4"><a href="news-single.html" class="btn-link">It is a long established fact
                                        that a reader will be distracted by</a></h2>
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
                        <a href="news-single.html" class="thumb"><img src="img/home-img/photo-gallery-03.jpg" alt=""></a>

                        <div class="post--info">
                            <ul class="nav meta">
                                <li><a href="#">Astaroth</a></li>
                                <li><a href="#">Today 03:52 pm</a></li>
                            </ul>

                            <div class="title">
                                <h2 class="h4"><a href="news-single.html" class="btn-link">It is a long established fact
                                        that a reader will be distracted by</a></h2>
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
                        <a href="news-single.html" class="thumb"><img src="img/home-img/photo-gallery-04.jpg" alt=""></a>

                        <div class="post--info">
                            <ul class="nav meta">
                                <li><a href="#">Astaroth</a></li>
                                <li><a href="#">Today 03:52 pm</a></li>
                            </ul>

                            <div class="title">
                                <h2 class="h4"><a href="news-single.html" class="btn-link">It is a long established fact
                                        that a reader will be distracted by</a></h2>
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
</template>

<script>
export default {
    name: 'PostLayoutStyle11'
}
</script>
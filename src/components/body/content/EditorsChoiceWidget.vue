<template>
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
                                <a href="news-single.html" class="thumb"><img src="img/widgets-img/editors-choice-01.jpg"
                                        alt="" data-rjs="2"></a>

                                <div class="post--info">
                                    <ul class="nav meta">
                                        <li><a href="#">Ninurta</a></li>
                                        <li><a href="#">16 April 2017</a></li>
                                    </ul>

                                    <div class="title">
                                        <h3 class="h4"><a href="news-single.html" class="btn-link">Long established fact
                                                that a reader will be distracted</a></h3>
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
                                <a href="news-single.html" class="thumb"><img src="img/widgets-img/editors-choice-02.jpg"
                                        alt="" data-rjs="2"></a>

                                <div class="post--info">
                                    <ul class="nav meta">
                                        <li><a href="#">Orcus</a></li>
                                        <li><a href="#">16 April 2017</a></li>
                                    </ul>

                                    <div class="title">
                                        <h3 class="h4"><a href="news-single.html" class="btn-link">Long established fact
                                                that a reader will be distracted</a></h3>
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
                                <a href="news-single.html" class="thumb"><img src="img/widgets-img/editors-choice-03.jpg"
                                        alt="" data-rjs="2"></a>

                                <div class="post--info">
                                    <ul class="nav meta">
                                        <li><a href="#">Rahab</a></li>
                                        <li><a href="#">16 April 2017</a></li>
                                    </ul>

                                    <div class="title">
                                        <h3 class="h4"><a href="news-single.html" class="btn-link">Long established fact
                                                that a reader will be distracted</a></h3>
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
                                <a href="news-single.html" class="thumb"><img src="img/widgets-img/editors-choice-04.jpg"
                                        alt="" data-rjs="2"></a>

                                <div class="post--info">
                                    <ul class="nav meta">
                                        <li><a href="#">Tannin</a></li>
                                        <li><a href="#">16 April 2017</a></li>
                                    </ul>

                                    <div class="title">
                                        <h3 class="h4"><a href="news-single.html" class="btn-link">Long established fact
                                                that a reader will be distracted</a></h3>
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
    <!-- Widget End --></template>

<script>
export default {
    name: 'EditorsChoiceWidget'
}
</script>
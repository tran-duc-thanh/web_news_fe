<template>
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
                                <span class="thumb"><img src="img/widgets-img/readers-opinion-01.png" alt=""
                                        data-rjs="2"></span>

                                <div class="post--info">
                                    <div class="title">
                                        <h3 class="h4">Long established fact that a reader will be distracted</h3>
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
                                <span class="thumb"><img src="img/widgets-img/readers-opinion-02.png" alt=""
                                        data-rjs="2"></span>

                                <div class="post--info">
                                    <div class="title">
                                        <h3 class="h4">Long established fact that a reader will be distracted</h3>
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
                                <span class="thumb"><img src="img/widgets-img/readers-opinion-03.png" alt=""
                                        data-rjs="2"></span>

                                <div class="post--info">
                                    <div class="title">
                                        <h3 class="h4">Long established fact that a reader will be distracted</h3>
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
</template>

<script>
export default {
    name: 'ReadersOpinionWidget'
}
</script>
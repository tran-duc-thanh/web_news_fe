<template>
    <!-- Main Content Section Start -->
    <div class="main-content--section pbottom--30">
        <div class="container">
            <!-- Main Content Start -->
            <div class="main--content">
                <PostLayoutStyle1 @detail-news-clicked="handleClick" />
            </div>
            <!-- Main Content End -->
            <div class="row">
                <!-- Main Content Start -->
                <div class="main--content col-md-8 col-sm-7" data-sticky-content="true">
                    <div class="sticky-content-inner">
                        <div class="row">
                            <div class="col-md-6 ptop--30 pbottom--30">
                                <PostLayoutStyle3 />
                            </div>

                            <div class="col-md-6 ptop--30 pbottom--30">
                                <PostLayoutStyle5 />
                            </div>

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

                            <div class="col-md-12 ptop--30 pbottom--30">
                                <PostLayoutStyle6 />
                            </div>

                            <div class="col-md-6 ptop--30 pbottom--30">
                                <PostLayoutStyle3 />
                            </div>

                            <div class="col-md-6 ptop--30 pbottom--30">
                                <PostLayoutStyle5 />
                            </div>
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

                        <SocialWidget />
                        <SubscribeWidget />
                        <FeaturedNewsWidget />

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
            </div>

            <!-- Main Content Start -->
            <div class="main--content pd--30-0">
                <PostLayoutStyle9 />
            </div>
            <!-- Main Content End -->
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
                                <PostLayoutStyle5 />
                            </div>
                            <!-- Health and fitness End -->

                            <!-- Lifestyle Start -->
                            <div class="col-md-6 ptop--30 pbottom--30">
                                <PostLayoutStyle3 />
                            </div>
                            <!-- Lifestyle End -->

                            <!-- Foods and Recipes Start -->
                            <div class="col-md-12 ptop--30 pbottom--30">
                                <PostLayoutStyle10 />
                            </div>
                            <!-- Foods and Recipes End -->

                            <!-- Photo Gallery Start -->
                            <div class="col-md-12 ptop--30 pbottom--30">
                                <PostLayoutStyle11  />
                            </div>
                            <!-- Photo Gallery End -->
                        </div>
                    </div>
                </div>
                <!-- Main Content End -->

                <!-- Main Sidebar Start -->
                <div class="main--sidebar col-md-4 col-sm-5 ptop--30 pbottom--30" data-sticky-content="true">
                    <div class="sticky-content-inner">
                        <PollWidgetCheckbox />
                        <PollWidgetRadio />
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
                        <ReadersOpinionWidget />
                        <EditorsChoiceWidget />
                    </div>
                </div>
                <!-- Main Sidebar End -->
            </div>
        </div>
    </div>
    <!-- Main Content Section End -->
</template>
  
<script>

import PostLayoutStyle1 from './body/content/PostLayoutStyle1.vue'
import PostLayoutStyle3 from './body/content/PostLayoutStyle3.vue'
import PostLayoutStyle5 from './body/content/PostLayoutStyle5.vue'
import PostLayoutStyle6 from './body/content/PostLayoutStyle6.vue'
import SocialWidget from './body/content/SocialWidget.vue'
import SubscribeWidget from './body/content/SubscribeWidget.vue'
import FeaturedNewsWidget from './body/content/FeaturedNewsWidget.vue'
import PostLayoutStyle9 from './body/content/PostLayoutStyle9.vue'
import PostLayoutStyle10 from './body/content/PostLayoutStyle10.vue'
import PostLayoutStyle11 from './body/content/PostLayoutStyle11.vue'
import PollWidgetCheckbox from './body/content/PollWidgetCheckbox.vue'
import PollWidgetRadio from './body/content/PollWidgetRadio.vue'
import ReadersOpinionWidget from './body/content/ReadersOpinionWidget.vue'
import EditorsChoiceWidget from './body/content/EditorsChoiceWidget.vue'

export default {
    name: 'ContainerPage',
    methods: {
        handleClick() {
            this.$emit("detail-news-clicked");
        },
    },
    components: {
        PostLayoutStyle1,
        PostLayoutStyle3,
        PostLayoutStyle5,
        PostLayoutStyle6,
        SocialWidget,
        SubscribeWidget,
        FeaturedNewsWidget,
        PostLayoutStyle9,
        PostLayoutStyle10,
        PostLayoutStyle11,
        PollWidgetCheckbox,
        PollWidgetRadio,
        ReadersOpinionWidget,
        EditorsChoiceWidget,
    }
}
</script>
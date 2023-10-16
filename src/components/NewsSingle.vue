<template>
    <!-- Main Breadcrumb Start -->
    <div class="main--breadcrumb">
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="home-1.html" class="btn-link"><i class="fa fm fa-home"></i>Home</a></li>
                <li><a href="travel.html" class="btn-link">Travel</a></li>
                <li class="active"><span>It is a long established fact that a reader will be distracted by</span></li>
            </ul>
        </div>
    </div>
    <!-- Main Breadcrumb End -->

    <!-- Main Content Section Start -->
    <div class="main-content--section pbottom--30">
        <div class="container">
            <div class="row">
                <NewsSingleContent />
                <NewsSingleSidebar />
            </div>
        </div>
    </div>
    <!-- Main Content Section End -->
</template>

<script>
import NewsSingleContent from './body/content/NewsSingleContent.vue'
import NewsSingleSidebar from './body/content/NewsSingleSidebar.vue'

export default {
    name: 'NewsSinglePage',
    components: {
        NewsSingleContent,
        NewsSingleSidebar,
    }
}
</script>
<template>
    <div id="preloader">
        <div class="preloader bg--color-1--b" data-preloader="1">
            <div class="preloader--inner"></div>
        </div>
    </div>
    <div class="wrapper">
        <router-view name="header"></router-view>
        <router-view name="postsFilterBar"></router-view>
        <router-view name="newsTicker"></router-view>
        <router-view name="container"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>
  
<script>

export default {
    name: 'HomePage',
}
</script>
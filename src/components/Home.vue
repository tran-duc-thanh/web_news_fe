<template>
    <div id="preloader">
        <div class="preloader bg--color-1--b" data-preloader="1">
            <div class="preloader--inner"></div>
        </div>
    </div>
    <div class="wrapper">
        <HeaderPage />
        <PostsFilterBar />
        <NewsTicker />
        <ContainerPage />
        <FooterPage />
    </div>
</template>
  
<script>

import HeaderPage from './Headers.vue'
import FooterPage from './Footer.vue'
import PostsFilterBar from './body/PostsFilterBar'
import NewsTicker from './body/NewsTicker'
import ContainerPage from './Container.vue'

export default {
    name: 'HomePage',
    components: {
        HeaderPage,
        FooterPage,
        PostsFilterBar,
        NewsTicker,
        ContainerPage,
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style> -->
  
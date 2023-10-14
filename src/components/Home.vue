<template>
<!-- Preloader Start -->
<div id="preloader">
        <div class="preloader bg--color-1--b" data-preloader="1">
            <div class="preloader--inner"></div>
        </div>
    </div>
    <!-- Preloader End -->
    <HeaderSection />
</template>
  
<script>

import HeaderSection from './Headers.vue'

export default {
    name: 'HomePage',
    components: {
        HeaderSection
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
  
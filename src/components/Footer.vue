<template>
    <footer class="footer--section">
        <FooterWidgets />
        <FooterCopyright />
    </footer>
</template>
  
<script>

import FooterWidgets from './footer/FooterWidgets.vue'
import FooterCopyright from './footer/FooterCopyright.vue'

export default {
    name: 'FooterPage',
    components: {
        FooterWidgets,
        FooterCopyright,
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
</style>
   -->
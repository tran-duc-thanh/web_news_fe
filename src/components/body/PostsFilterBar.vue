<template>
    <!-- Posts Filter Bar Start -->
    <div class="posts--filter-bar style--1 hidden-xs">
        <ul class="nav">
            <li>
                <router-link to="/categorys">
                    <i class="fa fa-star-o"></i>
                    <span>Featured News</span>
                </router-link>
            </li>
            <li>
                <router-link to="/categorys">
                    <i class="fa fa-heart-o"></i>
                    <span>Most Popular</span>
                </router-link>
            </li>
            <li>
                <router-link to="/categorys">
                    <i class="fa fa-fire"></i>
                    <span>Hot News</span>
                </router-link>
            </li>
            <li>
                <router-link to="/categorys">
                    <i class="fa fa-flash"></i>
                    <span>Trending News</span>
                </router-link>
            </li>
            <li>
                <router-link to="/categorys">
                    <i class="fa fa-eye"></i>
                    <span>Most Watched</span>
                </router-link>
            </li>
        </ul>
    </div>
    <!-- Posts Filter Bar End -->
</template>

<script>
export default {
    name: 'PostsFilterBar'
}
</script>
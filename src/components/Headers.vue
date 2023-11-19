<template>
    <!-- Header Section Start -->
    <header class="header--section header--style-1">
        <!-- Header Topbar Start -->
        <div class="header--topbar bg--color-2">
            <div class="container">
                <div class="float--left float--xs-none text-xs-center">
                    <!-- Header Topbar Info Start -->
                    <ul class="header--topbar-info nav">
                        <li><i class="fa fm fa-map-marker"></i>New York</li>
                        <li><i class="fa fm fa-mixcloud"></i>21<sup>0</sup> C</li>
                        <li><i class="fa fm fa-calendar"></i>Today (Sunday 19 April 2017)</li>
                    </ul>
                    <!-- Header Topbar Info End -->
                </div>

                <div class="float--right float--xs-none text-xs-center">
                    <!-- Header Topbar Action Start -->
                    <ul v-if="user === null" class="header--topbar-action nav">
                        <li><router-link to="/login"><i class="fa fm fa-user-o"></i>Login/Register</router-link></li>
                        <!-- <li v-else><i class="fa fm fa-user-o"></i>{{ user.username }}</li> -->
                    </ul>
                    <!-- Header Topbar Action End -->

                    <!-- Header Topbar Language Start -->
                    <ul v-else class="header--topbar-lang nav">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fm fa-user-o"></i>{{
                                user.username }}<i class="fa flm fa-angle-down"></i></a>

                            <ul class="dropdown-menu">
                                <li><a href="#">Detail</a></li>
                                <li><router-link to="/home" @click="logout">Logout</router-link></li>
                            </ul>
                        </li>
                    </ul>
                    <!-- Header Topbar Language End -->

                    <!-- Header Topbar Social Start -->
                    <ul class="header--topbar-social nav hidden-sm hidden-xxs">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-rss"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                    </ul>
                    <!-- Header Topbar Social End -->
                </div>
            </div>
        </div>
        <!-- Header Topbar End -->

        <!-- Header Mainbar Start -->
        <div class="header--mainbar">
            <div class="container">
                <!-- Header Logo Start -->
                <div class="header--logo float--left float--sm-none text-sm-center">
                    <h1 class="h1">
                        <router-link to="/home" class="btn-link">
                            <span class="hidden">USNews Logo</span>
                        </router-link>
                    </h1>
                </div>
                <!-- Header Logo End -->

                <!-- Header Ad Start -->
                <div class="header--ad float--right float--sm-none hidden-xs">
                    <a href="#">
                        <img src="img/ads-img/ad-728x90-01.jpg" alt="Advertisement">
                    </a>
                </div>
                <!-- Header Ad End -->
            </div>
        </div>
        <!-- Header Mainbar End -->

        <!-- Header Navbar Start -->
        <div class="header--navbar style--1 navbar bd--color-1 bg--color-1" data-trigger="sticky">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#headerNav"
                        aria-expanded="false" aria-controls="headerNav">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>

                <div id="headerNav" class="navbar-collapse collapse float--left">
                    <!-- Header Menu Links Start -->
                    <ul class="header--menu-links nav navbar-nav" data-trigger="hoverIntent">
                        <li><router-link to="/home">Trang chủ</router-link></li>
                        <li v-for="category in categories" :key="category.categoryID"><router-link
                                :to="{ name: 'category', params: { id: category.categoryID } }">{{ category.name
                                }}</router-link></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Thể loại<i
                                    class="fa flm fa-angle-down"></i></a>

                            <ul class="dropdown-menu">
                                <li v-for="category in categories" :key="category.categoryID" class="dropdown">
                                    <router-link :to="{ name: 'category', params: { id: category.categoryID } }"
                                        class="dropdown-toggle" data-toggle="dropdown">{{ category.name }}</router-link>
                                </li>
                            </ul>
                        </li>
                        <li v-if="checkAdmin" class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Quản lý<i
                                    class="fa flm fa-angle-down"></i></a>

                            <ul class="dropdown-menu">
                                <li class="dropdown">
                                    <router-link to="/manager/news" class="dropdown-toggle" data-toggle="dropdown">Bài
                                        viết</router-link>
                                </li>
                                <li class="dropdown">
                                    <router-link to="/manager/category" class="dropdown-toggle" data-toggle="dropdown">Thể
                                        loại</router-link>
                                </li>
                                <li class="dropdown">
                                    <router-link to="/manager/tag" class="dropdown-toggle"
                                        data-toggle="dropdown">Thẻ</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <!-- Header Menu Links End -->
                </div>

                <!-- Header Search Form Start -->
                <form action="#" class="header--search-form float--right" data-form="validate">
                    <input type="search" name="search" placeholder="Search..." class="header--search-control form-control"
                        required>

                    <button type="submit" class="header--search-btn btn"><i
                            class="header--search-icon fa fa-search"></i></button>
                </form>
                <!-- Header Search Form End -->
            </div>
        </div>
        <!-- Header Navbar End -->
    </header>
    <!-- Header Section End -->
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'HeaderPage',
    data() {
        return {
            categories: null,
            error: null,
            user: null,
        };
    },
    methods: {
        reloadComponent(id) {
            // Gọi navigation guard để điều hướng lại cùng một route
            this.$router.push({ path: `/category/${id}` }).catch(() => { });
            this.$forceUpdate;
            console.log(`/category/${id}`)
        },
        logout() {
            localStorage.removeItem('user');
            window.location.reload();
        },

    },
    mounted() {
        // Gọi API khi thành phần được nạp
        axios.get(`http://localhost:8082/api/category/`)
            .then(response => {
                // Gán dữ liệu từ API vào biến data
                this.categories = response.data;
            })
            .catch(error => {
                // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                this.error = 'Lỗi: ' + error.message;
            });
        const user = localStorage.getItem('user');
        if (user) {
            this.user = JSON.parse(user);
        }
        // console.log(this.user)
    },
    computed: {
        checkAdmin() {
            const user = JSON.parse(localStorage.getItem('user'));
            let check = false;
            if (user) {
                user.roles.forEach(role => {
                    console.log(role)
                    if (role.code === 'ADMIN') {
                        console.log(role.code)
                        check = true
                    }
                })
            }
            return check
        }
    }
}
</script>
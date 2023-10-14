<template>
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
                <ul class="header--topbar-action nav">
                    <li><a href="login.html"><i class="fa fm fa-user-o"></i>Login/Register</a></li>
                </ul>
                <!-- Header Topbar Action End -->

                <!-- Header Topbar Language Start -->
                <ul class="header--topbar-lang nav">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i
                                class="fa fm fa-language"></i>English<i class="fa flm fa-angle-down"></i></a>

                        <ul class="dropdown-menu">
                            <li><a href="#">English</a></li>
                            <li><a href="#">Spanish</a></li>
                            <li><a href="#">French</a></li>
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
</template>

<script>
export default {
    name: 'HeaderTopbar',
}
</script>
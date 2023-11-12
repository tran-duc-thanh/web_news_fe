<template>
    <!-- Preloader Start -->
    <!-- <div id="preloader">
        <div class="preloader bg--color-1--b" data-preloader="1">
            <div class="preloader--inner"></div>
        </div>
    </div> -->
    <!-- Preloader End -->

    <!-- Wrapper Start -->
    <div class="wrapper">
        <!-- Login Section Start -->
        <div class="login--section pd--100-0 bg--overlay" data-bg-img="img/login-img/bg.jpg">
            <div class="container">
                <!-- Login Form Start -->
                <div class="login--form">
                    <div class="title">
                        <h1 class="h1">Login</h1>
                        <p>Login into account by fillup the below form</p>
                    </div>

                    <form onsubmit="return false;" action="#" data-form="validate">
                        <div class="form-group">
                            <label>
                                <span>Username or Email Address</span>
                                <input type="email" name="email" class="form-control" v-model="username" required>
                            </label>
                        </div>

                        <div class="form-group">
                            <label>
                                <span>Password</span>
                                <input type="password" name="password" class="form-control" v-model="password" required>
                            </label>
                        </div>

                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="rememberme">
                                <span>Remember me</span>
                            </label>
                        </div>

                        <button @click="login" class="btn btn-lg btn-block btn-primary">Log in</button>

                        <p class="help-block clearfix">
                            <a href="#" class="btn-link pull-left">Forgot Username or Password?</a>
                            <a href="#" class="btn-link pull-right">Create An Account</a>
                        </p>
                    </form>
                </div>
                <!-- Login Form End -->
            </div>
        </div>
        <!-- Login Section End -->
    </div>
    <!-- Wrapper End -->
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginPage',
    data() {
        return {
            username: '',
            password: '',
            token: null,
        };
    },
    methods: {
        login() {

            const loginData = {
                username: this.username,
                password: this.password,
            };

            axios.post(`http://localhost:8082/api/login`, loginData, {
                withCredentials: false
            })
                .then(response => {
                    this.token = response.data.token;
                    localStorage.setItem('token', this.token);
                    localStorage.setItem('username', response.data.username);
                    console.log(response)
                    this.$router.push('/home')
                })
                .catch(error => {
                    console.error('Đăng nhập thất bại:', error);
                });
        },
    },
};
</script>
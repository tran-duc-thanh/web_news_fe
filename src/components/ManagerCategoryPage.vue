<template>
    <!-- Main Breadcrumb Start -->
    <div class="main--breadcrumb">
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="home-1.html" class="btn-link"><i class="fa fm fa-home"></i>Home</a></li>
                <li class="active"><span>Quản lý</span></li>
                <li class="active"><span>Thể loại</span></li>
            </ul>
        </div>
    </div>
    <!-- Main Breadcrumb End -->

    <div class="main-content--section pbottom--30">
        <div class="container">
            <div class="main--content">
                <button @click="showPopupCategory" style="margin-top: 20px;" type="button" class="btn btn-warning">Sửa thể
                    loại</button>
                <PopupEditCategory :is-visible="isPopupVisibleCategory" :popup-content="popupTextC"
                    @close="closePopupCategory" />

                <div style="margin-top: 20px">Tên thể loại</div>
                <input v-if="categoryEdit === null" style="width: 100%; height: 50px; margin-top: 5px;" v-model="name" placeholder="Tên thể loại" />
                <input v-else style="width: 100%; height: 50px; margin-top: 5px;" v-model="categoryEdit.name" placeholder="Tên thể loại" />

                <div style="margin-top: 20px">Mã thể loại</div>
                <input v-if="categoryEdit === null" style="width: 100%; height: 50px; margin-top: 5px;" v-model="code" placeholder="Mã thể loại" />
                <input v-else style="width: 100%; height: 50px; margin-top: 5px;" v-model="categoryEdit.code" placeholder="Mã thể loại" />

                <div style="margin-top: 20px">
                    <button @click="save" class="btn btn-lg btn-block btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PopupEditCategory from './popup/PopEditCategory.vue';
// import axios from 'axios';

export default {
    name: 'ManagerCategoryPage',
    components: {
        PopupEditCategory,
    },
    data() {
        return {
            categories: null,
            categoryEdit: null,
            isPopupVisibleCategory: false,
            popupTextC: "Chọn thể loại",
        };
    },
    methods: {
        showPopupCategory() {
            this.isPopupVisibleCategory = true;
        },
        closePopupCategory() {
            this.isPopupVisibleCategory = false;
        },
    },
    
}
</script>
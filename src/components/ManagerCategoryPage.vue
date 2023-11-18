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
                <input v-if="popupData === null" style="width: 100%; height: 50px; margin-top: 5px;"
                    @input="updateInputName($event.target.value)" placeholder="Tên thể loại" />
                <input v-else style="width: 100%; height: 50px; margin-top: 5px;" :value="popupData.name"
                    @input="updateInputName($event.target.value)" placeholder="Tên thể loại" />

                <div style="margin-top: 20px">Mã thể loại</div>
                <input v-if="popupData === null" style="width: 100%; height: 50px; margin-top: 5px;"
                    @input="updateInputCode($event.target.value)" placeholder="Mã thể loại" />
                <input v-else style="width: 100%; height: 50px; margin-top: 5px;" :value="popupData.code"
                    @input="updateInputCode($event.target.value)" placeholder="Mã thể loại" />

                <div style="margin-top: 20px">
                    <button @click="save" class="btn btn-lg btn-block btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PopupEditCategory from './popup/PopEditCategory.vue';
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
    name: 'ManagerCategoryPage',
    components: {
        PopupEditCategory,
    },
    data() {
        return {
            categories: null,
            isPopupVisibleCategory: false,
            popupTextC: "Chọn thể loại",
            category: {
                categoryID: null,
                name: null,
                code: null
            }
        };
    },
    methods: {
        showPopupCategory() {
            this.isPopupVisibleCategory = true;
        },
        closePopupCategory() {
            this.isPopupVisibleCategory = false;
        },
        save() {
            console.log(this.$store.state.popupData)
            if (this.$store.state.popupData !== null) { this.category.categoryID = this.$store.state.popupData.categoryID; }
            if (this.category.name === null) { this.category.name = this.$store.state.popupData.name }
            if (this.category.code === null) { this.category.code = this.$store.state.popupData.code }
            console.log(this.category)
            axios.post(`http://localhost:8082/api/category/`, this.category);
        },
        updateInputName(value) {
            this.category.name = value; // Cập nhật giá trị vào biến
        },
        updateInputCode(value) {
            this.category.code = value; // Cập nhật giá trị vào biến
        },
    },
    computed: {
        ...mapGetters(['getPopupData']),
        popupData() {
            return this.getPopupData;
        }
    }
}
</script>
<template>
    <!-- Main Breadcrumb Start -->
    <div class="main--breadcrumb">
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="home-1.html" class="btn-link"><i class="fa fm fa-home"></i>Home</a></li>
                <li class="active"><span>Quản lý</span></li>
                <li class="active"><span>Thẻ</span></li>
            </ul>
        </div>
    </div>
    <!-- Main Breadcrumb End -->

    <div class="main-content--section pbottom--30">
        <div class="container">
            <div class="main--content">
                <button @click="showPopupTag" style="margin-top: 20px;" type="button" class="btn btn-warning">Sửa
                    thẻ</button>
                <PopupEditTag :is-visible="isPopupVisibleTag" :popup-content="popupTextT" @close="closePopupTag" />
                <div style="margin-top: 20px">Tên thẻ</div>
                <input v-if="popupData === null" style="width: 100%; height: 50px; margin-top: 5px;"
                    @input="updateInputName($event.target.value)" placeholder="Tên thể loại" />
                <input v-else style="width: 100%; height: 50px; margin-top: 5px;" :value="popupData.name"
                    @input="updateInputName($event.target.value)" placeholder="Tên thể loại" />

                <div style="margin-top: 20px">Mã thẻ</div>
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
import PopupEditTag from './popup/PopEditTag.vue';
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
    name: 'ManagerTagPage',
    components: {
        PopupEditTag,
    },
    data() {
        return {
            tags: null,
            isPopupVisibleTag: false,
            popupTextT: "Chọn thẻ",
            tag: {
                tagID: null,
                name: null,
                code: null
            }
        };
    },
    methods: {
        showPopupTag() {
            this.isPopupVisibleTag = true;
        },
        closePopupTag() {
            this.isPopupVisibleTag = false;
        },
        save() {
            if (this.$store.state.popupData !== null) { this.tag.tagID = this.$store.state.popupData.tagID; }
            if (this.tag.name === null) { this.tag.name = this.$store.state.popupData.name }
            if (this.tag.code === null) { this.tag.code = this.$store.state.popupData.code }
            console.log(this.tag)
            axios.post(`http://localhost:8082/api/tag/`, this.tag);
        },
        updateInputName(value) {
            this.tag.name = value; // Cập nhật giá trị vào biến
        },
        updateInputCode(value) {
            this.tag.code = value; // Cập nhật giá trị vào biến
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
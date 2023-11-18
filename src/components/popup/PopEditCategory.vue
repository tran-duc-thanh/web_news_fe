<!-- Popup.vue -->
<template>
    <div v-if="isVisible" class="popup">
        <div class="popup-content">
            <!-- Nội dung của popup -->
            <H4>{{ popupContent }}</H4>
            <select v-model="inCategory">
                <option v-for="category in categories" :key="category.code" :value="category">
                    {{ category.name }}
                </option>
            </select>
            <button @click="sendDataToParent" style="margin-right: 10px; margin-left: 10px;">Sửa</button>
            <button @click="closePopup">Đóng</button>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
    name: 'PopupEditCategory',
    data() {
        return {
            categories: [],
        }
    },
    props: {
        isVisible: Boolean, // Prop để điều khiển hiển thị của popup
        popupContent: String // Prop để truyền nội dung của popup
    },
    methods: {
        closePopup() {
            this.$emit('close'); // Khi nút "Đóng Popup" được nhấn, phát sự kiện để đóng popup
        },

        save() {
            const category = {
                // categoryID: 
                name: this.name,
                code: this.code
            };

            axios.post(`http://localhost:8082/api/category/`, category);
            this.$emit('close');
        },

        ...mapActions(['updatePopupData']),
        sendDataToParent() {
            this.updatePopupData(this.inCategory);
            // console.log(this.inTag)
            // this.$store.dispatch('updatePopupStatus', false);
            this.$emit('close');
        }
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
    },
};
</script>
  
<style scoped>
/* CSS cho thiết kế của popup */
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* Màu nền đen mờ */
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
}

input {
    color: black;
}
</style>
  
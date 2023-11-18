<!-- Popup.vue -->
<template>
    <div v-if="isVisible" class="popup">
        <div class="popup-content">
            <!-- Nội dung của popup -->
            <H4>{{ popupContent }}</H4>
            <select v-model="inCategory">
                <option v-for="tag in tags" :key="tag.code" :value="tag.tagID">
                    {{ tag.name }}
                </option>
            </select>
            <button @click="save" style="margin-right: 10px; margin-left: 10px;">Sửa</button>
            <button @click="closePopup">Đóng</button>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
    name: 'PopupEditTag',
    data() {
        return {
            tags: null,
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
            const tag = {
                // tagID: 
                name: this.name,
                code: this.code
            };

            axios.post(`http://localhost:8082/api/tag/`, tag);
            this.$emit('close');
        },

        ...mapActions(['updatePopupData']),
        sendDataToParent() {
            this.updatePopupData('Your data here');
        }
    },
    mounted() {
        // Gọi API khi thành phần được nạp
        axios.get(`http://localhost:8082/api/tag/`)
            .then(response => {
                // Gán dữ liệu từ API vào biến data
                this.tags = response.data;
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
  
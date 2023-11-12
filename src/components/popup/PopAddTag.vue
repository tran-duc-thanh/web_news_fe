<!-- Popup.vue -->
<template>
  <div v-if="isVisible" class="popup">
    <div class="popup-content">
      <!-- Nội dung của popup -->
      <H4>{{ popupContent }}</H4>
      <input type="text" v-model="name" style="margin-right: 10px;" placeholder="Tên thẻ" />
      <input type="text" v-model="code" style="margin-right: 10px;" placeholder="Mã thẻ" />
      <button @click="save" style="margin-right: 10px;">Lưu</button>
      <button @click="closePopup">Đóng</button>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'PopupAddTag',
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
        name: this.name,
        code: this.code
      };

      axios.post(`http://localhost:8082/api/tag/`, tag);
      this.$emit('close');
    }
  }
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
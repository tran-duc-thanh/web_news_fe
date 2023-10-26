<template>
    <!-- Main Breadcrumb Start -->
    <div class="main--breadcrumb">
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="home-1.html" class="btn-link"><i class="fa fm fa-home"></i>Home</a></li>
                <li class="active"><span>World News</span></li>
                <li class="active"><span>Manager news</span></li>
            </ul>
        </div>
    </div>
    <!-- Main Breadcrumb End -->

    <div class="main-content--section pbottom--30">
        <div class="container">
            <div class="main--content">
                <div style="margin-top: 20px">Tiêu đề</div>
                <input style="width: 100%; height: 50px; margin-top: 5px;" v-model="message" placeholder="News title." />
                <div style="margin-top: 20px">Thể loại: {{ selected }}</div>
                <select style="width: 100%; margin-top: 5px;" v-model="selected" multiple>
                    <option v-for="option in options" :key="option.value" :value="option.value">
                        {{ option.text }}
                    </option>
                </select>
                <div style="margin-top: 20px">Thẻ: {{ selected }}</div>
                <select style="width: 100%; margin-top: 5px;" v-model="selected" multiple>
                    <option v-for="option in options" :key="option.value" :value="option.value">
                        {{ option.text }}
                    </option>
                </select>
                <div style="margin-top: 20px">Nội dung</div>
                <div style="margin-top: 5px">
                    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: 'ManagerNewsPage',
    data() {
        return {
            editor: ClassicEditor,
            editorData: 'News content.',
            editorConfig: {
                // The configuration of the editor.
            },
            selected: [],
            options: [
                { text: 'Văn hóa', value: 'VAN_HOA' },
                { text: 'Chính trị', value: 'CHINH_TRI' },
                { text: 'Khoa học', value: 'KHOA_HOC' },
                { text: 'Thể thao', value: 'THE_THAO' },
                { text: 'Thế giới', value: 'THE_GIOI' },
                { text: 'Xã hội', value: 'XA_HOI' }
            ]
        };
    }
}
</script>
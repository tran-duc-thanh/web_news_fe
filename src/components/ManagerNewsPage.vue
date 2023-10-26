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
                <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
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
            editorData: '',
            editorConfig: {
                // The configuration of the editor.
            }
        };
    }
}
</script>
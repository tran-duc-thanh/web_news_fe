<template>
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
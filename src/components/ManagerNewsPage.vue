<template>
    <!-- Main Breadcrumb Start -->
    <div class="main--breadcrumb">
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="home-1.html" class="btn-link"><i class="fa fm fa-home"></i>Home</a></li>
                <li class="active"><span>Quản lý</span></li>
                <li class="active"><span>Bài viết</span></li>
            </ul>
        </div>
    </div>
    <!-- Main Breadcrumb End -->

    <div class="main-content--section pbottom--30">
        <div class="container">
            <div class="main--content">
                <div style="margin-top: 20px">Tiêu đề</div>
                <input style="width: 100%; height: 50px; margin-top: 5px;" v-model="title" placeholder="News title." />

                <div style="margin-top: 20px">Thể loại:</div>
                <button @click="showPopupCategory" type="button" class="btn btn-success">Thêm</button>
                <PopupAddCategory :is-visible="isPopupVisibleCategory" :popup-content="popupTextC"
                    @close="closePopupCategory" />
                <select style="width: 100%; margin-top: 5px;" v-model="inCategory">
                    <option v-for="category in categories" :key="category.code" :value="category.categoryID">
                        {{ category.name }}
                    </option>
                </select>

                <div style="margin-top: 20px">Thẻ:</div>
                <button @click="showPopupTag" type="button" class="btn btn-success">Thêm</button>
                <PopupAddTag :is-visible="isPopupVisibleTag" :popup-content="popupTextT" @close="closePopupTag" />
                <select style="width: 100%; margin-top: 5px;" v-model="inTags" multiple>
                    <option v-for="tag in tags" :key="tag.code" :value="tag.tagID">
                        {{ tag.name }}
                    </option>
                </select>

                <div style="margin-top: 20px">Nội dung</div>
                <div style="margin-top: 5px">
                    <ckeditor :editor="editor" v-model="inContent" :config="editorConfig"></ckeditor>
                </div>

                <div style="margin-top: 20px">
                    <button @click="save" class="btn btn-lg btn-block btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PopupAddCategory from './popup/PopAddCategory.vue';
import PopupAddTag from './popup/PopAddTag.vue';
import axios from 'axios';

export default {
    name: 'ManagerNewsPage',
    components: {
        PopupAddCategory,
        PopupAddTag,
    },
    data() {
        return {
            editor: ClassicEditor,
            editorData: 'News content.',
            editorConfig: {
                // The configuration of the editor.
            },
            categories: null,
            tags: null,
            article: null,
            isPopupVisibleCategory: false,
            isPopupVisibleTag: false,
            popupTextC: "Thêm mới thể loại",
            popupTextT: "Thêm mới thẻ",
        };
    },
    methods: {
        save() {

            const today = new Date();

            const year = today.getFullYear();
            const month = (today.getMonth() + 1).toString().padStart(2, '0'); // +1 vì tháng bắt đầu từ 0
            const day = today.getDate().toString().padStart(2, '0');

            // Định dạng ngày theo dạng "YYYY-MM-DD"
            const formattedDate = `${year}-${month}-${day}`;

            const articles = {
                title: this.title,
                content: this.inContent,
                authorID: 1,
                categoryID: this.inCategory,
                publicationDate: formattedDate
            };

            axios.post(`http://localhost:8082/api/articles/`, articles)
                .then(response => {
                    // Gán dữ liệu từ API vào biến data
                    this.article = response.data;
                    const mapTagsArticle = [];
                    for (let i = 0; i < this.inTags.length; i++) {
                        const item = {
                            articleID: response.data.articleID,
                            tagID: this.inTags[i]
                        }
                        mapTagsArticle.push(item)
                    }
                    axios.post(`http://localhost:8082/api/tag/save/tagsArticle`, mapTagsArticle);
                })
                .catch(error => {
                    // Xử lý lỗi nếu có lỗi trong quá trình gọi API
                    this.error = 'Lỗi: ' + error.message;
                });

        },
        showPopupCategory() {
            this.isPopupVisibleCategory = true;
        },
        closePopupCategory() {
            this.isPopupVisibleCategory = false;
        },
        showPopupTag() {
            this.isPopupVisibleTag = true;
        },
        closePopupTag() {
            this.isPopupVisibleTag = false;
        },
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
}
</script>
<template>
<div class="file">
    <input type="file" @change="changedFiles" accept="image/*" multiple/>
    <img :src="imgPath" alt="unko" />
</div>
</template>

<script>
export default {
    data(){
        return {
            imgPath: null
        };
    },
    methods: {
        changedFiles(e){
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imgPath = reader.result;
            };
            //メモリ肥大化するやり方
            /*
            const imageURL = window.URL.createObjectURL(file);
            this.imgPath = imageURL;
            window.URL.revokeObjectURL(imageURL);
            */
        }
    }
}
</script>
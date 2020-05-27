<template>
    <div class="items">
        <h1>商品一覧</h1>
        <ul>
            <li>
                <img src="../assets/icon.gif" alt class="photo" />
                <div class="info">
                    <div class="title">画像</div>
                    <div class="description">こんにちは</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        getBooks() {
            fetch(
                "https://www.googleapis.com/books/v1/volumes?q=intitle:unko"
            ).then(res =>{
                if(res.ok) {
                    return res.json()
                }
            }).then(data => {
                resolve(data);
            })
        }
    }
};
</script>

<style scoped>
.items img{
    width: 200px;
    margin-right: 10px;
}
.items li{
    display: flex;
    align-items: center;
}
.items .title {
    font-weight: bold;
    font-size: 120%;
}
</style>
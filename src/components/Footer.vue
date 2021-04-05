<template>
    <div class="footer">
        Get in touch with me!
        <table>
            <tr>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <td class="image"><img src="../assets/github.png"></td>
                <td class="link"><a href="https://github.com/MarkLorens">https://github.com/MarkLorens</a></td>
            </tr>
            <tr>
                <td class="image"><img src="../assets/linkedin.png"></td>
                <td class="link"><a href="https://www.linkedin.com/in/mark-pardede-08a7b6182/">https://www.linkedin.com/in/mark-pardede-08a7b6182/ </a></td>
            </tr>
            <tr>
                <td class="image"><img src="../assets/search.png"></td>
                <td class="link"><a href="mailto:marklorens0705@gmail.com">marklorens0705@gmail.com</a></td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.footer{
    position:fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: black;
    color: white;
    text-align: center;
}
img {
    margin-top: 5px;
    width: 5%;
}
.image {
    text-align: right;
}
.link {
    text-align: left;
}
table {
    margin-left: 100px;
}
a {
    color: white;
}
</style>
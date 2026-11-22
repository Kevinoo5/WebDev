<template>
<div id= "comp-list-two">
<h1> Book list two</h1>
<p class="item" v-for="product in productList" :key="product.id">
<span class="author"> <b>Author:</b> {{product.author}} </span>
<span class="book"> <b>Book:</b> {{product.book}} </span> <br>
<span class="goodreads"> <b>Goodreads:</b> {{product.goodreads}} </span>
<span class="price"> Price: € {{product.price}} </span> 
</p>
</div>
</template>


<script>
export default {
    name: "ProductCompoTwo",
        props: ["productList"],
    data: function() {
return {

}},
computed: {

}
}
</script>

<style scoped>
.item{
background: rgb(128, 183, 235);
margin-bottom: 5px;
padding: 3px 5px;}
#comp-list-two{
background: #1862c9;
box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
margin-bottom: 30px;
padding: 10px 20px;
}
#comp-list-two ul{
padding: 0;
list-style-type: none;
}
#comp-list-two li{
margin-right: 10px;
margin-top: 10px;
padding: 20px;
background: rgba(255,255,255,0.7);
}
.price{
font-weight: bold;
color: #860CE8;
display: block;
}
span{
margin-right: 10px;
}
</style>
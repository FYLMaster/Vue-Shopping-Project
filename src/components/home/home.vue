<template>
	<div>		
		<div class="mpdd-banner">
            <img alt="banner" src="//mcdn.pinduoduo.com/assets/img/mpdd_banner_2.png">
        </div>
        <div class="mpdd-cat">
                <div class="mpdd-act-head">
                    <p>精彩活动</p>
                    <p class="see-more-content" @click="$goRoute('/navlist/special/subject/999')">查看更多</p>
                </div>
                <div class="mpdd-act-content">
                    <div class="mpdd-act-left">
                        <img src="//mcdn.pinduoduo.com/assets/img/mpdd_global.png" alt="global" @click="$goRoute('/navlist/special/operation/12')">
                        <img class="mal-you" src="//mcdn.pinduoduo.com/assets/img/mpdd_you.png" alt="you" @click="$goRoute('/navlist/special/spike_list/0')">
                    </div>
                    <div class="mpdd-act-right">
                        <img src="//mcdn.pinduoduo.com/assets/img/mpdd_brand_sale.jpg" alt="super" @click="$goRoute('/navlist/special/subject/999')">
                        <img class="mal-sale" src="//mcdn.pinduoduo.com/assets/img/mpdd_sale.png" alt="sale" @click="$goRoute('/navlist/special/subject/922')">
                        <img class="mal-itry" src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit.jpg" alt="itry" @click="$goRoute('/navlist/special/subject/502')">
                    </div>
                </div>
            </div>
        <div class="mpdd-cat">
                <div class="mpdd-act-head mpdd-cat-head">
                    <p>精选专题</p>
                    <p class="see-more-content" @click="$goRoute('/navlist/activity/operation/14')">查看更多</p>
                </div>
                <ul class="mpdd-cat-list">
                    <li class="mpdd-cat-item" id="cat-clothes" v-for="item in goodsImg" style="padding-bottom:.08rem" @click="$goRoute('/navlist/activity/operation/'+item.id)">
                        <div class="pdd-index-glist" avalonctrl="cat-clothes">
                            <div class="glist-banner-wrapper">
                                <img alt="banner" :src="item.img">
                            </div>
                            <!-- <ul>
                                repeat8075873623194<li class="pi-glist-item">
                                    <img alt="goods" src="http://omsproductionimg.yangkeduo.com/images/2017-09-05/aac7b0a633b5cdff55b10085989bd78e.jpeg@750w_1l_50Q.src">
                                    <p class="index-goods-name">【正品幸福狐狸内衣】【假一赔十防伪码验证】【拍下即送精美加长扣】08经典款超舒适无痕无钢圈性感聚拢内衣女文胸</p>
                                    <span class="index-goods-price">￥<span>35</span></span>
                                    <span class="index-goods-mprice">￥<span>48</span></span>
                                </li>repeat8075873623194<li class="pi-glist-item">
                                    <img alt="goods" src="http://omsproductionimg.yangkeduo.com/images/2017-09-04/fd245ba5aff638a11a76fba1751b23f0.jpeg@750w_1l_50Q.src">
                                    <p class="index-goods-name">2017秋冬新款长袖打底衫圆领短款毛衣女套头宽松韩版针织衫秋冬季外套</p>
                                    <span class="index-goods-price">￥<span>26.8</span></span>
                                    <span class="index-goods-mprice">￥<span>35</span></span>
                                </li>repeat8075873623194<li class="pi-glist-item">
                                    <img alt="goods" src="http://omsproductionimg.yangkeduo.com/images/2017-09-10/09dbabc88c336ece3f7564abfe593529.jpeg@750w_1l_50Q.src">
                                    <p class="index-goods-name">【时尚女装三件套】2017秋装新款两件套时尚套装女潮时髦套装套装裙百搭连衣裙</p>
                                    <span class="index-goods-price">￥<span>118</span></span>
                                    <span class="index-goods-mprice">￥<span>128</span></span>
                                </li>repeat8075873623194repeat8075873623194:end
                            </ul> -->
                        </div>
                    </li>
                </ul>
            </div>
	</div>

</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                goodsImg:[
                        {id:14,img:"//mcdn.pinduoduo.com/assets/img/cat_clothes.jpg"},
                        {id:18,img:"//mcdn.pinduoduo.com/assets/img/cat_girlshoes.jpg"},
                        {id:1135,img:"//mcdn.pinduoduo.com/assets/img/cat_boyshirt.jpg"},
                        {id:15,img:"//mcdn.pinduoduo.com/assets/img/cat_home.jpg"},
                        {id:1,img:"//mcdn.pinduoduo.com/assets/img/cat_food.jpg"},
                        {id:18,img:"//mcdn.pinduoduo.com/assets/img/cat_3c.jpg"},
                        {id:818,img:"//mcdn.pinduoduo.com/assets/img/cat_house.jpg"},
                        {id:13,img:"//mcdn.pinduoduo.com/assets/img/cat_fresh.jpg"},
                        {id:4,img:"//mcdn.pinduoduo.com/assets/img/cat_baby.jpg"},
                        {id:12,img:"//mcdn.pinduoduo.com/assets/img/cat_overseas.jpg"},
                        {id:16,img:"//mcdn.pinduoduo.com/assets/img/cat_beauty.jpg"},
                        {id:43,img:"//mcdn.pinduoduo.com/assets/img/cat_sports.jpg"}
                    ]
            }
        }
         /*data(){
            return {
                data:{
                    goodsImg:[
                        {src:"//mcdn.pinduoduo.com/assets/img/cat_clothes.jpg"},
                        {src:"//mcdn.pinduoduo.com/assets/img/cat_girlshoes.jpg"},
                        {src:"//mcdn.pinduoduo.com/assets/img/cat_boyshirt.jpg"},
                        {src:"//mcdn.pinduoduo.com/assets/img/cat_home.jpg"},
                        {src:"//mcdn.pinduoduo.com/assets/img/cat_food.jpg"},
                        {src:"//mcdn.pinduoduo.com/assets/img/cat_3c.jpg"},
                        {src:"//mcdn.pinduoduo.com/assets/img/cat_house.jpg"},
                        {src:"//mcdn.pinduoduo.com/assets/img/cat_fresh.jpg"},
                        {src:"//mcdn.pinduoduo.com/assets/img/cat_baby.jpg"},
                        {src:"//mcdn.pinduoduo.com/assets/img/cat_overseas.jpg"},
                        {src:"//mcdn.pinduoduo.com/assets/img/cat_beauty.jpg"},
                        {src:"//mcdn.pinduoduo.com/assets/img/cat_sports.jpg"}
                    ],
                    goodslist:[],
                },
                items:[
                    {name:'服饰箱包', id:14, active:true},
                    {name:'当季女鞋', id:18, active:false},
                    {name:'品牌男装', id:1135, active:false},
                    {name:'家居百货', id:15, active:false},
                    {name:'环球美食', id:1, active:false},
                    {name:'数码家电', id:18, active:false},
                    {name:'家纺家具', id:818, active:false},
                    {name:'水果生鲜', id:13, active:false},
                    {name:'母婴呵护', id:4, active:false},
                    {name:'全球海淘', id:12, active:false},
                    {name:'美妆护肤', id:16, active:false},
                    {name:'运动户外', id:43, active:false}
                ]
            }
        },
        created:function(){
            var navid=this.items.length;
            console.log(navid)
            var that=this;
            for(var i=0;i<navid;i++){
                var url="/api/operation/"+this.items[i].id+"/groups?opt_type=1&offset=0&size=50";
                that.$http.get(url)
                .then(function(response){
                    that.data.goodslist.push(response.data.goods_list);
                    console.log(that.goodslist)
                },function(){
                  alert("error")
                })
            }

        }*/
    }
</script>
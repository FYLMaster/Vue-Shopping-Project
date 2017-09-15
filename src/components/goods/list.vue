<template>
	<div id="mpdd-house"><div class="mpdd-double-glist" avalonctrl="mpdd-house" style="visibility: visible;">
    <ul class="pd-goods-list">
        <li class="pd-glist-item" v-for="goods in goodslist">
            <div class="pd-goods-img">
                <img alt="goods"  v-bind:src="goods.hd_thumb_url">
            </div>
            <div class="pd-goods-txt">
                <span class="pd-goods-name">{{goods.goods_name}}</span>
                <span class="pd-goods-price">￥<span>{{goods.normal_price/100}}</span></span>
                <span class="pd-goods-mprice">￥<span>{{goods.market_price/100}}</span></span>
            </div>
        </li>
    </ul>
</div></div>
</template>

<script type="text/javascript">
import bus from '../goods/eventBus'
    export default {
        data(){
            return {
                uId:'operation',
                navindex:14,
                goodslist:''
            }
        },
        ready: function(){
            console.log('deviceid: ' + this.$route.params.num);
        },
    	created:function(){
            document.body.scrollTop=0;
            this.navindex=this.$route.params.num;
            this.uId=this.$route.params.uid;
            var navid=this.navindex;
            var uId=this.uId;
            //console.log(navid)
            var that=this;
            var url="";
            if(uId=="operation"){
	            url="/api/"+uId+"/"+navid+"/groups?opt_type=1&offset=0&size=50";
            }else if(uId=="subject"){
                url="/api/"+uId+"/"+navid+"/sorted_goods?sort_type=PRIORITY&page=1&size=50";
            }else{
                url="/api/spike_list?page=1&size=50";
            }
	        that.$http.get('https://bird.ioliu.cn/v1/?url='+url)
            .then(function(response){
                //console.log(response.data.goods_list)
                if(uId=="spike_list"){
                    that.goodslist=response.data.goods;
                }else{
                    that.goodslist=response.data.goods_list;
                }

            },function(){
              alert("error")
            })
    	},
        mounted(){
            var that=this;
            bus.$on('listFun', function(data) {
                    that.goodslist = data;
                    //console.log(that.goodslist)
            })
                 
        }
    }
</script>
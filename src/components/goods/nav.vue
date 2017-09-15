<template>
    <div class="subject-nav-wrapper">
        <ul class="subject-nav-list">
            <li class="subject-nav-item" v-for="(item,index) in items" :class="{'cur-subject-nav-item': item.active}" @click='navbtn(item.uid,item.id,index)'>
                <span>{{item.name}}</span>
            </li>           
        </ul>
        <div class="subject-nav-btn">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_cat_arrow.png">
        </div>
        <div class="subject-nav-gradient"></div>
    </div>
</template>

<script type="text/javascript">
import bus from '../goods/eventBus'
    export default {
        data(){
            return {
                items:'',
                nav:[
                    {
                        Id:'activity',
                        navlist:[
                            {name:'服饰箱包', id:14, active:true, uid:'operation'},
                            {name:'当季女鞋', id:18, active:false, uid:'operation'},
                            {name:'品牌男装', id:1135, active:false, uid:'operation'},
                            {name:'家居百货', id:15, active:false, uid:'operation'},
                            {name:'环球美食', id:1, active:false, uid:'operation'},
                            {name:'数码家电', id:18, active:false, uid:'operation'},
                            {name:'家纺家具', id:818, active:false, uid:'operation'},
                            {name:'水果生鲜', id:13, active:false, uid:'operation'},
                            {name:'母婴呵护', id:4, active:false, uid:'operation'},
                            {name:'全球海淘', id:12, active:false, uid:'operation'},
                            {name:'美妆护肤', id:16, active:false, uid:'operation'},
                            {name:'运动户外', id:43, active:false, uid:'operation'}
                        ]
                    },
                    {
                        Id:'special',
                        navlist:[
                            {name:'品牌清仓', id:999, active:true, uid:'subject'},
                            {name:'限时秒杀', id:0, active:false, uid:'spike_list'},
                            {name:'海淘专场', id:12, active:false, uid:'operation'},
                            {name:'品质水果', id:502, active:false, uid:'subject'},   
                            {name:'9.9特卖', id:922, active:false, uid:'subject'}
                        ]
                    }
                ]
            }
        },
        created:function(){
            var navId = this.$route.params.num;
            var uId = this.$route.params.uid;
            var nav = this.$route.params.nav;
            this.uId=uId;
            console.log(navId)
            //this.items[navId].active = true;
            for(var i=0;i<this.nav.length;i++){
                if(nav==this.nav[i].Id){
                    this.items=this.nav[i].navlist;
                    for(var j=0;j<this.items.length;j++){
                        if(this.items[j].id==navId){
                            this.navbtn(uId,navId,j);
                        }
                    }
                }
            }
        },
        methods:{
            navbtn:function(uId,navid,index){
                //console.log(navid)
                for(var i=0; i<this.items.length;i++){
                    this.items[i].active = false;
                }
                this.items[index].active = true;
                var that=this;
                //var url="/api/"+uId+"/"+navid+"/groups?opt_type=1&offset=0&size=50";
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
                    bus.$emit("listFun",response.data.goods_list)
                },function(){
                  alert("error")
                })
            }
        }
    }
</script>
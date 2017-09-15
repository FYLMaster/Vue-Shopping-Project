<template>
<div>
	<div class="mpdd-head-wrapper">
	    <ul class="mph-tab">
	        <li v-for="item in links">
	        <span @click="$goRoute(item.route)" class="mph-tab-item">{{item.text}}</span>
	        </li>
	    </ul>
	</div>
	<router-view></router-view>  
</div>
</template>

<script type="text/javascript">
	export default {
	 	name: 'app',
	    data () {
	      return {
	        links: [
	          {
	            text: '首页',
	            route: '/home'
	          },
	          {
	            text: '商家入驻',
	            route: '/shop'
	          },
	          {
	            text: '帮助中心',
	            route: '/help'
	          }
	        ]
	      }
	    }
	}
</script>
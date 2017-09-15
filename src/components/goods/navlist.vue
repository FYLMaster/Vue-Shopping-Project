<template>
	<div>
		<navindex></navindex>
	    <recommendindex></recommendindex>
	    <listindex></listindex>
	</div>
</template>

<script>
	import navindex from '@/components/goods/nav'
	import recommendindex from '@/components/goods/Recommend'
	import listindex from '@/components/goods/list'

	export default {
	  components: {
	    navindex,
	    recommendindex,
	    listindex
	  }
	}
</script>
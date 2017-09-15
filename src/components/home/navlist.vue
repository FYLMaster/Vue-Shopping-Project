<template>
	<div>
		<navindex></navindex>
	    <recommendindex></recommendindex>
	    <listindex></listindex>
	</div>
</template>

<script>
	import navindex from './components/home/nav'
	import recommendindex from './components/home/Recommend'
	import listindex from './components/home/list'

	export default {
	  name: 'app',
	  components: {
	    navindex,
	    recommendindex,
	    listindex
	  }
	}
</script>
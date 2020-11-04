<template>
	<img alt="Vue logo" src="../../assets/logo.png" />
	<Hello :msg="msg" />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Hello from './components/Hello.vue'
interface ComplexMessage
{
	message: string;
	tsMessage: string;
}

export default defineComponent({
	name: 'App',
	components: {
		Hello
	},
	data()
	{
		return {
			// 复杂类型断言
			msg: {
				message: 'Welcome to Your Vue.js',
				tsMessage: ' + TypeScript App!',
			} as ComplexMessage,
		}
	}
})
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>

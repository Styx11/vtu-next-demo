<template>
	<div class="hello">
		<Rate :value="5" />
		<h1>{{ totalMessage }}</h1>
	</div>
</template>

<script lang='ts'>
// import { Rate } from 'ant-design-vue';
import Rate from 'ant-design-vue/lib/rate/index';
import 'ant-design-vue/lib/rate/style/css';
import { defineComponent, PropType, toRefs, computed } from 'vue'
interface ComplexMessage
{
	message: string;
	tsMessage: string;
}

export default defineComponent({
	name: 'HelloWorld',
	components: {
		Rate,
	},
	props: {
		msg: {
			// 对 Prop 的额外断言，需要注意默认的 undefined
			type: Object as PropType<ComplexMessage>,
			required: true,
		}
	},
	setup(props)
	{
		const { message, tsMessage } = toRefs(props.msg)
		const totalMessage = computed(() => message.value + tsMessage.value)
		return {
			totalMessage,
		}
	}
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		margin: 0 auto;
	}
</style>

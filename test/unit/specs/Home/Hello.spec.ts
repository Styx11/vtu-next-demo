import { mount } from '@vue/test-utils'
import Hello from '@/views/Home/components/Hello.vue'

test('Hello.vue', () =>
{
	const wrapper = mount(Hello, {
		props: {
			msg: {
				message: 'Welcome to Your Vue.js',
				tsMessage: ' + TypeScript App!',
			}
		}
	})
	expect(wrapper.find('h1').text()).toContain('Welcome to Your Vue.js + TypeScript App!')
})
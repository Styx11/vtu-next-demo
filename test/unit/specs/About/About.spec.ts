import { mount, shallowMount } from '@vue/test-utils'
import About from '@/views/About/About.vue'
import Hello from '@/views/About/components/Hello.vue'

test('uses mounts', async () =>
{
  const wrapper = mount(About)
  expect(wrapper.html()).toContain('Vue app')
  expect(wrapper.html()).toContain('Hello world')
  expect(wrapper.html()).toContain('Count: 0')

  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('Count: 1')
})

test('uses shallowMount', async () =>
{
  const wrapper = shallowMount(About)
  expect(wrapper.html()).toContain('Vue app')
  expect(wrapper.html()).not.toContain('Hello world')
  expect(wrapper.html()).toContain('Count: 0')

  // @ts-ignore TODO: Improve types for `findComponent`
  await wrapper.findComponent(Hello).vm.$emit('greet')
  expect(wrapper.html()).toContain('Count: 1')
})

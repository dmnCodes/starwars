import { shallowMount } from "@vue/test-utils";
import UiPagination from './UiPagination'

const previous = ''
const next = ''
const factory = () => {
  return shallowMount(UiPagination, {
    propsData: {
      previous,
      next
    },
    stubs: ['NuxtLink']
  })
}

describe('UiCharactersListItem.vue', () => {
  describe('displaying', () => {
    it('should be a Vue instance', () => {
      const wrapper = factory()
      expect(wrapper.vm).toBeTruthy()
    })

    it('should render `previous` & `next` buttons', () => {
      const wrapper = factory()
      expect(wrapper.find(`[data-cy='previous']`).exists()).toBe(true)
      expect(wrapper.find(`[data-cy='next']`).exists()).toBe(true)
    })

    it('should pass `disabled` attribute if link does NOT exist', () => {
      const wrapper = factory()
      expect(wrapper.find(`[data-cy='previous']`).attributes('disabled')).toBeTruthy()
      expect(wrapper.find(`[data-cy='next']`).attributes('disabled')).toBeTruthy()
    })

    it('should remove `disabled` attribute if link does exist', async () => {
      const wrapper = factory()
      await wrapper.setProps({
        previous: 'previous',
        next: 'next',
      })
      expect(wrapper.find(`[data-cy='previous']`).attributes('disabled')).toBeFalsy()
      expect(wrapper.find(`[data-cy='next']`).attributes('disabled')).toBeFalsy()
    })
  });
})

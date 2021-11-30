import { shallowMount } from "@vue/test-utils";
import UiCharactersListItem from './UiCharactersListItem'

const url = 'https://swapi.dev/api/people/1/'
const name = 'Luke Skywalker'
const factory = () => {
  return shallowMount(UiCharactersListItem, {
    propsData: {
      url,
      name
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

    it('should render name', () => { 
      const wrapper = factory()
      expect(wrapper.text()).toBe('Luke Skywalker')
    })    
  });

  describe('computed: linkTo', () => {
    it('should return proper link', () => {
      const wrapper = factory()
      expect(wrapper.vm.linkTo).toEqual('/characters/1')
    });
  });
})

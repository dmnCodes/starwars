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

  describe('methods', () => {
    describe('addToFavourites', () => {
      const component = factory()
      it('should emit "add" event', () => {
        component.vm.addToFavourites()
        expect(component.emitted('add')).toBeTruthy()
        expect(component.emitted('add')[0]).toEqual([{
          id: "1",
          name,
          url
        }])
      })
    })

    describe('removeFromFavourites', () => {
      const component = factory()
      it('should emit "remove" event', () => {
        component.vm.removeFromFavourites()
        expect(component.emitted('remove')).toBeTruthy()
        expect(component.emitted('remove')[0]).toEqual([{
          id: "1",
          name,
          url
        }])
      })
    })
  })
})

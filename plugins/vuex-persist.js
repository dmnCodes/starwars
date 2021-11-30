import VuexPersist from 'vuex-persist'

export default ({ store }) => {
  new VuexPersist({
    key: 'starwars',
    modules: ['favourites']
  }).plugin(store);
}
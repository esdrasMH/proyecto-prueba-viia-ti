<template>
  <div class="" id="app">
    <div class="row">

      <div class="col-12">
        <div class="row">
          <div class="col-2 bg-primary">
            <div class="text-white text-center mt-3" v-if="!responsive"><strong>NANE_CORPORATION</strong></div>
            <div class="text-white text-center mt-3" v-if="responsive"><strong>NC</strong></div>
          </div>

          <div class="col-10">
            <nav class="navbar bg-primary">
              <form class="form-inline" style="float: left;">
                <input class="form-control" type="search" placeholder="Buscar" :size="!responsive ? '100px' : '25px'"/>
              </form>
              <div style="float: right;">
                <button class="btn btn-secondary mr-2" type="button"><i class="fas fa-cog"></i></button>
                <button class="btn btn-secondary" type="button"><i class="fas fa-sign-out-alt"></i></button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div class="col-2">
        <div class="row list-group list-group-flush">
          <a
            v-for="(i, index) in links"
            :key="index"
            :href="i.to"
            class="list-group-item list-group-item-action"
            :class="$router.app._route.name === i.name? 'bg-secondary text-white' : ''"
          >
            <div :class="responsive ? 'text-center' : ''">
              <i :class="i.icon" class="ml-3 mr-4" id="icon"></i>
              <span v-text="i.name" v-if="!responsive"></span>
            </div>

          </a>
        </div>
      </div>

      <div class="col-10" id="router-view">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script>
import mixin from './mixin';
export default {
  mixins: [
    mixin
  ],
  data() {
    return {
      links: [
        {name: 'Inicio', to: '#/main-menu', icon: 'fas fa-home'},
        {name: 'Perfil', to: '#/user-profile', icon: 'fas fa-user'},
      ]
    }
  },
}
</script>

<style>
#app {
  overflow-x: hidden;
}

#icon {
  align-content: center
}

#router-view {
background: #F1F1F0;
min-height: 100vh;
}
</style>
<template>
  <div v-if="user" class="dashboard">
    <div class="header">
      <div class="home__nav"><NavMenu /></div>
      <div class="dashboard__bg"></div>
    </div>
    <div class="main">
      <div class="main__bg">
        <div class="main__nav">
          <router-link
            v-for="subpage in subpages"
            :key="subpage.route"
            :to="{ name: subpage.route }"
            class="nav__item"
          >
            {{ subpage.label }}
          </router-link>
        </div>
      </div>
    </div>
    <template v-if="!user.choosenCar">
      <ModalChooseCar @openModalAddCar="modalAddCar = !modalAddCar" />
      <ModalAddCar v-if="modalAddCar" />
    </template>
  </div>
  <!-- <div v-if="user" class="alert alert-success" role="alert">
      </div> -->
</template>

<script>
import NavMenu from "../Header/NavMenu.vue";

import { mapGetters } from "vuex";
import ModalChooseCar from "../Modals/ModalChooseCar.vue";
import ModalAddCar from "../Modals/ModalAddCar.vue";

export default {
  name: "Dashboard",
  components: {
    NavMenu,
    ModalChooseCar,
    ModalAddCar
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  data() {
    return {
      subpages: [
        {
          route: "investments-smartDeposit",
          label: "Dane auta"
        },
        {
          route: "investments-buyTokens",
          label: "Serwis"
        },
        {
          route: "investments-oneClickMasternode",
          label: "Średnie spalanie"
        }
      ],
      modalAddCar: false
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.dashboard {
  width: 100%;
  height: 100%;
  margin: 0;
}
.dashboard__bg {
  width: 100%;
  height: 500px;
  background-image: url("../../assets/images/dashboard-bg.jpg");
  background-position: center;
  background-size: cover;
}

.main {
  position: relative;
  width: 100%;
  height: 1000px;
  background-color: silver;
}
.main__bg {
  position: absolute;
  width: 92%;
  top: -8%;
  margin: 0 4% 0 4%;
  height: 1000px;
  background-color: white;
}
.main__nav {
  height: 60px;
  border-bottom: 1px solid rgba(15, 32, 108, 0.15);
  display: flex;

  .nav__item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgba(15, 32, 108, 0.65);
    letter-spacing: 0;
    margin-left: 40px;

    &:hover,
    &.router-link-exact-active {
      color: #0f206c;
      position: relative;

      &::after {
        position: absolute;
        content: "";
        background-color: red;
        display: block;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
    }
  }
}
</style>

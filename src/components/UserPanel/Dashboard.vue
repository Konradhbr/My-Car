<template>
  <div v-if="user" class="dashboard">
    <div class="header">
      <div class="home__nav"><NavMenu /></div>
    </div>
    <div class="main">
      <div class="main_content">
        <div class="main__nav--desktop">
          <router-link
            v-for="subpage in subpages"
            :key="subpage.route"
            :to="{ name: subpage.route }"
            class="nav__item"
          >
            {{ subpage.label }}
          </router-link>
        </div>
        <div class="main__nav--mobile">
          <router-link
            v-for="subpage in subpages.slice(0, 2)"
            :key="subpage.route"
            :to="{ name: subpage.route }"
            class="nav__item"
          >
            {{ subpage.label }}
          </router-link>
        </div>
        <div class="main__nav--mobile">
          <router-link
            v-for="subpage in subpages.slice(Math.max(subpages.length - 1, 0))"
            :key="subpage.route"
            :to="{ name: subpage.route }"
            class="nav__item"
          >
            {{ subpage.label }}
          </router-link>
        </div>
        <div
          @click="modalChooseCar = !modalChooseCar"
          class="chooseCar underline--red container"
        >
          <h5>Wybierz auto</h5>
        </div>
        <div
          @click="modalUpdateData = !modalUpdateData"
          class="chooseCar underline--red container"
        >
          <h5>zaktualizuj dane</h5>
        </div>
        <router-view :key="$route.fullPath"></router-view>

        <ModalChooseCar
          v-if="modalChooseCar === true"
          @openModalAddCar="modalAddCar = !modalAddCar"
          @close="CloseModals()"
        />
        <ModalAddCar
          v-if="modalAddCar === true"
          @opensuccess="modalAddCarSuccess = !modalAddCarSuccess"
          @openfailed="modalAddCarFailed = !modalAddCarFailed"
          @close="CloseModals()"
        />
        <ModalAddCarSuccess
          v-if="modalAddCarSuccess == true"
          @close="CloseModals()"
        />
        <ModalAddCarFailed
          v-if="modalAddCarFailed == true"
          @close="CloseModals()"
        />
        <ModalUpdateData
          v-if="modalUpdateData == true"
          @close="CloseModals()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from '../Header/NavMenu.vue';

import { mapGetters } from 'vuex';
import ModalChooseCar from '@/components/Modals/ModalChooseCar.vue';
import ModalAddCar from '@/components/Modals/ModalAddCar.vue';
import ModalAddCarSuccess from '@/components/Modals/ModalAddCarSuccess.vue';
import ModalAddCarFailed from '@/components/Modals/ModalAddCarFailed.vue';
import ModalUpdateData from '@/components/Modals/ModalUpdateData.vue';

export default {
  name: 'Dashboard',
  components: {
    NavMenu,
    ModalChooseCar,
    ModalAddCar,
    ModalAddCarSuccess,
    ModalAddCarFailed,
    ModalUpdateData,
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: 'user',
    }),
  },
  data() {
    return {
      modalAddCar: false,
      modalChooseCar: false,
      modalAddCarSuccess: false,
      modalAddCarFailed: false,
      modalUpdateData: false,

      subpages: [
        {
          route: 'Dashboard-CarInfo',
          label: 'Dane auta',
        },
        {
          route: 'Dashboard-Service',
          label: 'Serwis',
        },
        {
          route: 'Dashboard-FuelConsumption',
          label: 'Zużycie paliwa',
        },
      ],
    };
  },
  mounted() {
    this.firstOpen();
  },
  methods: {
    CloseModals() {
      this.modalAddCar = false;
      this.modalAddCarSuccess = false;
      this.modalAddCarFailed = false;
      this.modalChooseCar = false;
      this.modalUpdateData = false;
    },
    async firstOpen() {
      if (this.user.firstOpenDashboard === true) {
        this.modalChooseCar = true;
        //this.user.firstOpenDashboard = false;
      } else {
        this.modalChooseCar = false;
      }
    },
  },
};
</script>

<style lang="scss">
.dashboard {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: rgb(225, 221, 221);
  // overflow-x: hidden;
}
.header {
  width: 100%;
  height: 500px;
  background-image: url('/src/assets/images/dashboard-bg.jpg');
  background-position: center;
  background-size: cover;
}

.main {
  width: 100%;
  height: 70%;
  //background-color: #e1dddd;
  position: relative;
}
.main_content {
  position: absolute;
  width: 90%;
  top: -8%;
  margin: -81px 5% 0 5%;
  padding-bottom: 39px;
  height: auto;
  background-color: white;
}
.main__nav--mobile {
  display: flex;
  height: 80px;
  border-bottom: 1px solid rgba(15, 32, 108, 0.15);
}
.main__nav--desktop {
  height: 80px;
  border-bottom: 1px solid rgba(15, 32, 108, 0.15);
  display: none;
}

.nav__item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: $color-purple2;
  letter-spacing: 0;
  margin: 0 30px;

  &:hover,
  &.router-link-exact-active {
    color: black;
    position: relative;

    &::after {
      content: '';
      height: 2px;
      width: 100%;
      background: $color-red;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: width 1s ease;
    }
  }
}

.chooseCar {
  margin-top: 20px;
  cursor: pointer;
  h5 {
    color: black;
  }
}

@media screen and (min-width: 768px) {
  .main__nav--desktop {
    display: flex;
  }
  .main__nav--mobile {
    display: none;
  }
}

@media screen and (min-width: 1010px) {
  .nav__item {
    margin: 0 45px;
  }
}
</style>

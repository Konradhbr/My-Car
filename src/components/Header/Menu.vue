<template>
  <nav :class="{ overlay__menu: isMobile }">
    <ul class="menu">
      <li class="list__item" @click="reloadHome">
        <router-link :to="{ name: 'Home' }">
          <a href="#">Strona główna</a>
        </router-link>
      </li>
      <li class="list__item">
        <a
          class="link-off"
          :class="{ disable: user.loggedIn, active: !user.loggedIn }"
          @click="$emit('showLoginAlert')"
          >panel użytkownika</a
        >
        <router-link
          :to="{ name: 'Dashboard-CarInfo' }"
          :class="{ disable: !user.loggedIn, active: user.loggedIn }"
        >
          <a>panel użytkownika</a>
        </router-link>
      </li>
      <li class="list__item" @click="reloadNews()">
        <router-link :to="{ name: 'News', reloadNews }">
          <a href="#news">Newsy</a>
        </router-link>
      </li>
      <!-- <li>
        <a href="#">subpage3</a>
      </li> -->

      <li class="list__item">
        <router-link :to="{ name: 'Calculators' }">
          <a href="#">kalkulatory</a>
        </router-link>
      </li>
      <template v-if="user.loggedIn">
        <div
          class="user"
          :class="{ 'user-mobile': isMobile, 'user-desktop': isDesktop }"
        >
          <User />
          <div class="user-info">
            <!-- <li class="nav-item"> -->
            <p class="nav-item">{{ user.data.email }}</p>
            <!-- </li> -->
            <!-- <li class="nav-item"> -->
            <p class="nav-link nav-item uppercase" @click.prevent="signOut">
              Wyloguj
            </p>
            <!-- </li> -->
          </div>
        </div>
      </template>
      <template v-else>
        <div
          class="user margin-top"
          :class="{ 'user-mobile': isMobile, 'user-desktop': isDesktop }"
          @click="$emit('openlogin')"
        >
          <User />
          <p class="uppercase">zaloguj</p>
        </div>
      </template>
    </ul>
  </nav>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
import User from "../Icons/User.vue";

export default {
  name: "Menu",
  components: { User }, //ModalAlertLogin },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  data() {
    return {
      isMobile: false,
      isDesktop: false,
      modalAlertLogin: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);

      this.getWindowWidth();
    });
  },

  methods: {
    reloadHome() {
      if (this.$route.name === "Home") {
        this.$router.go(0);
        //window.scrollTo(0, 0);
      } else {
        return true;
      }
    },
    reloadNews() {
      this.$router.go();
    },
    // eslint-disable-next-line no-unused-vars
    getWindowWidth(event) {
      const windowWidth = document.documentElement.clientWidth;
      if (windowWidth < 1280) {
        this.isMobile = true;
        this.isDesktop = false;
      } else {
        this.isMobile = false;
        this.isDesktop = true;
      }
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home"
          });
        });

      this.user.firstOpenDashboard = true;
      this.user.activeCar = null;
    }
    // showAlertLogin() {
    //   this.modalAlertLogin = true;
    // }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.getWindowWidth);
    window.removeEventListener("resize", this.getWindowHeight);
  }
};
</script>

<style lang="scss" scoped>
.overlay__menu {
  position: relative;
  background: rgba(0, 0, 0, 0.95);
  color: white;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 50px 0;
  opacity: 0;
  text-align: center;
  transform: translateY(-100%);
  transition: all 0.5s;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    top: 84px;
    height: 2px;
    width: 100%;
    background-color: $color-red;
  }
  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 190px;
    height: 2px;
    width: 100%;
    background-color: $color-red;
  }
  .main__menu {
    transition: all 0.7s;
    transition-delay: 0.7s;
    opacity: 1;
    transform: translateY(0%);
    &:nth-child(2) {
      transition-delay: 1.25s;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    list-style: none;
    margin-top: 150px;
    padding: 0px;
    li {
      padding: 30px 0px;
      position: relative;
      // &:hover {
      //   &::after {
      //     content: "";
      //     height: 2px;
      //     width: 100px;
      //     background: red;
      //     position: absolute;
      //     bottom: 0;
      //     left: 10px;
      //     transition: width 1s ease;
      //   }
      // }
      a {
        position: relative;
        font-size: 24px;
        color: white;
        text-decoration: none;
        transition: all 0.5s;
      }
    }
  }
}
.-open {
  opacity: 1;
  transform: translateY(0%);
  padding-top: 83px;

  .main-menu {
    transition: all 0.7s;
    transition-delay: 0.7s;
    opacity: 1;
    transform: translateY(0%);
    &:nth-child(2) {
      transition-delay: 1.25s;
    }
  }
  .nav {
    border-bottom: 3px solid white;
  }
}
.user {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;

  &-info {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 12px;
  }
  // p {
  //   color: white;
  // }

  .nav-link {
    text-transform: uppercase;
  }
  p,
  a {
    margin: 6px 20px 0 20px;
    text-align: left;
    color: white;
  }
}
.list__item {
  position: relative;
  &:hover {
    &::after {
      content: "";
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

.user-mobile {
  top: 110px;
  left: 26px;
}

.link-off {
  opacity: 0.5;
}
.active {
  display: static;
}
.disable {
  display: none;
}

.uppercase {
  text-transform: uppercase;
}

@media screen and (min-width: 1280px) {
  @keyframes line {
    0% {
      background-position-x: 390px;
    }
  }

  * {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    letter-spacing: 1.1px;
    &:before {
      box-sizing: inherit;
      padding: 0;
      margin: 0;
      letter-spacing: 1.1px;
    }
    &:after {
      box-sizing: inherit;
      padding: 0;
      margin: 0;
      letter-spacing: 1.1px;
    }
  }
  .menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    height: 80px;
    list-style: none;
    padding-left: 100px;
    li {
      margin: 0 20px;
      display: flex;
      align-items: center;
      height: 100%;
      a {
        color: white;
        font-size: 15px;
        letter-spacing: -1px;
      }
    }
  }
  .margin-top {
    margin-top: 10px;
  }
  .user-desktop {
    top: 9px;
    right: 28px;
  }
  .user-info {
    p {
      font-size: 15px;
    }
  }
}
@media screen and (min-width: 1550px) {
  .menu {
    padding-left: 350px;
  }
}
@media screen and (min-width: 1920px) {
  .menu {
    padding-left: 450px;
  }
}
</style>

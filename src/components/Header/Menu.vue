<template>
  <nav :class="{ overlay__menu: isMobile }">
    <ul class="menu">
      <li>
        <router-link :to="{ name: 'Home' }">
          <a href="#">Strona startowa</a>
        </router-link>
      </li>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="#">subpage3</a>
      </li>

      <li>
        <router-link :to="{ name: 'Calculators' }">
          <a href="#">kalkulatory</a>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Dashboard' }">
          <a href="#">panel użytkownika</a>
        </router-link>
      </li>
      <template v-if="user.loggedIn">
        <li class="nav-item">
          <p>{{ user.data.email }}</p>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="signOut">Sign out</a>
        </li>
      </template>
      <template v-else>
        <div
          class="user"
          :class="{ 'user-mobile': isMobile, 'user-desktop': isDesktop }"
          @click="$emit('openlogin')"
        >
          <User />
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
  components: { User },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  data() {
    return {
      isMobile: false,
      isDesktop: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);

      this.getWindowWidth();
    });
  },

  methods: {
    // eslint-disable-next-line no-unused-vars
    getWindowWidth(event) {
      const windowWidth = document.documentElement.clientWidth;
      if (windowWidth < 1024) {
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
    }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.getWindowWidth);
    window.removeEventListener("resize", this.getWindowHeight);
  }
};
</script>

<style lang="scss" scoped>
.overlay__menu {
  background: rgba(0, 0, 0, 0.95);
  color: white;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 50px 0;
  opacity: 0;
  text-align: center;
  transform: translateY(-100%);
  transition: all 0.5s;
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
    margin-top: 80px;
    padding: 0px;
    li {
      padding: 15px 0px;
      a {
        font-size: 24px;
        font-weight: 300;
        color: red;
        text-decoration: none;
        transition: all 0.5s;
        &:hover {
          color: red;
        }
      }
    }
  }
  p {
    margin-top: 60px;
    font-size: 13px;
    text-transform: uppercase;
    color: red;
    font-weight: 200;
    letter-spacing: 0.5px;
    text-align: center;
  }
}
.-open {
  opacity: 1;
  transform: translateY(0%);
  padding-top: 50px;
  .main-menu {
    transition: all 0.7s;
    transition-delay: 0.7s;
    opacity: 1;
    transform: translateY(0%);
    &:nth-child(2) {
      transition-delay: 1.25s;
    }
  }
}
.user {
  position: absolute;
}

.user-mobile {
  top: 80px;
  left: 26px;
}

@media screen and (min-width: 1024px) {
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
    justify-content: center;
    align-items: center;
    max-width: 720px;
    margin: 0 auto;
    height: 80px;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      width: 125px;
      height: 50px;
      transition: background-position-x 0.9s linear;
      text-align: center;
      a {
        font-size: 22px;
        color: white;
        text-decoration: none;
        transition: all 0.45s;
      }
      & {
        &:hover {
          // eslint-disable-next-line max-len
          animation: line 1s;
          a {
            color: red;
          }
        }
        &:not(:last-child) {
          margin-right: 30px;
        }
      }
    }
  }
  .user-desktop {
    top: 26px;
    right: 60px;
  }
}
</style>

<template>
  <nav class="nav" :class="{ 'nav--black': isBlack }">
    <div class="nav__logo">
      <router-link :to="{ name: 'Home' }">
        <img src="@/assets/images/logo.png" alt="" />
      </router-link>
    </div>
    <div class="nav__menu">
      <Menu @openlogin="modalLogin = true" />
    </div>
    <div class="nav__hamburger" @click="Open">
      <span></span>
    </div>
    <ModalLogin
      v-if="modalLogin"
      @close="CloseModals"
      @openregister="
        modalRegister = true;
        modalLogin = false;
      "
      @openrecover="modalRecoverPassword = true"
    />
    <ModalRegister
      v-if="modalRegister"
      @opensuccess="modalRegisterSuccess = true"
      @close="CloseModals"
    />
    <ModalRegisterSuccess v-if="modalRegisterSuccess" @close="CloseModals" />
    <ModalRecoverPassword v-if="modalRecoverPassword" @close="CloseModals" />
  </nav>
</template>

<script>
import ModalLogin from "@/components/Modals/ModalLogin.vue";
import ModalRegister from "@/components/Modals/ModalRegister.vue";
import ModalRegisterSuccess from "@/components/Modals/ModalRegisterSuccess.vue";
import ModalRecoverPassword from "@/components/Modals/ModalRecoverPassword.vue";
import Menu from "./Menu.vue";

export default {
  name: "NavMenu",
  components: {
    Menu,
    ModalLogin,
    ModalRegister,
    ModalRegisterSuccess,
    ModalRecoverPassword
  },
  props: {
    blackBG: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      modalLogin: false,
      modalRegister: false,
      modalRegisterSuccess: false,
      modalRecoverPassword: false,
      isBlack: this.blackBG
    };
  },
  methods: {
    OpenHamburger() {
      const value = document.querySelector(".nav__hamburger");
      value.classList.toggle("nav__hamburger-active");
    },
    Open() {
      const value = document.querySelector(".overlay__menu");
      const element = document.querySelector(".nav__hamburger");

      value.classList.toggle("-open");
      element.classList.toggle("nav__hamburger-active");
    },
    CloseModals() {
      this.modalLogin = false;
      this.modalRegister = false;
      this.modalRegisterSuccess = false;
      this.modalRecoverPassword = false;
    },
    ChangeBlack() {
      if (this.bgColor == "black") {
        this.isBlack = true;
      }
    }
  }
};
// mounted() {
//   if (this.bgColor == "black") {
//     this.isBlack = true;
//   }
// },
// created() {
//   if (this.bgColor == "black") {
//     this.isBlack = true;
//   }
// }
</script>

<style lang="scss" scoped>
//$background_color_1: transparent;

.nav {
  background: rgba(250, 250, 250, 0.2);
  height: 80px;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);
  z-index: 2;

  &--black {
    background-color: black;
  }
}
.nav__logo {
  display: flex;
  float: left;
  margin-left: 30px;
  z-index: 100;

  a {
    display: flex;
    z-index: 101;
    font-size: 28px;
    line-height: 80px;
    text-transform: uppercase;
    color: red;
    text-decoration: none;
    letter-spacing: 0.5px;
  }
  em {
    font-style: normal;
    font-weight: 200;
  }
  img {
    height: 80px;
  }
}
.nav__hamburger {
  background: transparent;
  border: 1px solid red;
  width: 50px;
  height: 50px;
  margin: 15px 39px 0 auto;
  position: relative;
  cursor: pointer;
  //transition: background 0.5s;
  border-radius: 5px;
  span {
    cursor: pointer;
    border-radius: 1px;
    height: 2px;
    width: 35px;
    background: red;
    position: absolute;
    left: 15%;
    top: 50%;
    display: block;
    content: "";
    transition: all 0.5s ease-in-out;
    &:before {
      cursor: pointer;
      border-radius: 1px;
      height: 2px;
      width: 35px;
      background: red;
      position: absolute;
      left: 15%;
      top: 50%;
      display: block;
      content: "";
      transition: all 0.5s ease-in-out;
      left: 0;
      top: -10px;
    }
    &:after {
      cursor: pointer;
      border-radius: 1px;
      height: 2px;
      width: 35px;
      background: red;
      position: absolute;
      left: 15%;
      top: 50%;
      display: block;
      content: "";
      transition: all 0.5s ease-in-out;
      left: 0;
      top: 10px;
    }
  }
}
.nav__hamburger-active {
  background: rgba(250, 250, 250, 0.2);
  span {
    //background-color: $background_color_1;
    &:before {
      top: 0;
      transform: rotate(135deg);
    }
    &:after {
      top: 0;
      transform: rotate(-135deg);
    }
  }
}
.nav__hamburger {
  z-index: 99999;
}

.nav__logo {
  z-index: 99999;
}
@media screen and (min-width: 1024px) {
  .nav__hamburger {
    display: none;
  }
}
</style>

<template>
  <button class="button" :class="{ 'button--full': fullWidth }" type="submit">
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'dark',
    },
    label: {
      type: String,
      required: true,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  font-family: 'calibre-semibold', sans-serif;
  font-size: 17px;
  text-transform: uppercase;
  position: relative;
  height: 48px;
  display: inline-flex;
  border: none;
  cursor: pointer;

  &[disabled='disabled'] {
    span {
      background: rgba(15, 32, 108, 0.2);
    }

    &:hover {
      span {
        background: rgba(15, 32, 108, 0.2);
        box-shadow: none;
      }
      &::after {
        opacity: 0;
      }
    }
  }

  & > span {
    position: relative;
    z-index: 1;
    height: 48px;
    display: inline-flex;
    align-items: center;
    color: $white;
    background-color: $bright-light-blue;
    padding: 0 30px;
    border-radius: 24px;
    line-height: 1;
    transition: all 300ms ease;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 10px;
    z-index: 0;
    width: calc(100% - 20px);
    height: 28px;
    content: '';
    background-color: $bright-light-blue;
    box-shadow: 0 10px 50px 0 $bright-light-blue;
    border-radius: 24px;
    opacity: 0;
    pointer-events: none;
    transition: all 300ms ease;
  }

  &:hover {
    text-decoration: none;

    // span {
    //   background-color: $white;
    //   color: $color-navy-blue-100;
    // }

    span {
      background-color: $color-navy-blue-100;
    }

    &::after {
      // opacity: 1;
    }
  }
}

.button--outlined {
  &:hover {
    span {
      border-color: $color-navy-blue-100;
      background-color: $color-navy-blue-100;
      color: $white;
    }

    g {
      stroke: $white;
    }

    &::after {
      opacity: 0;
    }
  }

  span {
    border: solid 1.6px rgb(191, 195, 214);
    background-color: $white;
    color: $color-navy-blue-100;
  }
}

.button--small {
}

.button--full {
  display: flex;
  width: 100%;

  span {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
}

.button--orange {
  span {
    background-color: $color-orange-100;
    color: $white;
  }
}

.button--navy {
  span {
    background-color: $color-navy-blue-100;
    color: $white;
  }
}

.button--white {
  span {
    background-color: $white;
    color: $color-navy-blue-100;
  }
}

.button--bordered {
  &:hover {
    span {
      border-color: $color-navy-blue-100;
      background-color: $color-navy-blue-100;
      color: $white;
    }

    path {
      stroke: $white;
    }

    &::after {
      opacity: 0;
    }
  }

  span {
    border: solid 1.6px rgb(191, 195, 214);
    background-color: $white;
    color: $color-navy-blue-100;
  }
}

@media screen and (min-width: $screen-sm) {
  .button {
    height: 48px;
    & > span {
      font-size: 15px;
      height: 48px;
      text-align: center;
    }
  }

  .button--small {
    height: 48px;
    & > span {
      height: 48px;
      padding: 0 20px;
    }
  }
}

@media screen and (min-width: $screen-md) {
  .button {
    & > span {
      font-size: 16px;
    }
  }

  .button--small {
    & > span {
      padding: 0 20px;
    }
  }
}

@media screen and (min-width: $screen-lg) {
  .button {
    & > span {
      font-size: 17px;
      padding: 0 40px;
    }
  }

  .button--small {
    & > span {
      padding: 0 20px;
    }
  }
}
</style>

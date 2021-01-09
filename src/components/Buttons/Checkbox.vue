<template>
  <div class="form-field" :class="{ 'has-error': v.$error }">
    <div class="form-checkbox">
      <label :for="name">
        <div class="checkbox">
          <input
            :id="name"
            :name="name"
            :data-cy="name"
            type="checkbox"
            :checked="$attrs.value"
            @change="$emit('input', $event.target.checked)"
          />
          <div></div>
        </div>
        <div class="checkbox-label"><slot></slot><span v-if="v">*</span></div>
      </label>
    </div>

    <div class="errors">
      <div v-if="v && !v.sameAs">Field is required</div>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    v: {
      type: [Boolean, Object],
      default: () => {
        return false;
      }
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text"
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 22px;
  height: 22px;
  margin-right: 10px;

  &:hover {
    & > div {
      background-image: url("../../assets/Icons/check.svg");
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
}

.checkbox input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}

.checkbox > div {
  border: 1px solid rgba(15, 32, 108, 0.45);
  border-radius: 8px;
  background-color: white;
  flex-shrink: 0;
  position: relative;
  border-radius: 8px;
  box-shadow: inset 0 3px 0 0 rgba(15, 32, 108, 0.15);
  width: 22px;
  min-width: 22px;
  flex: 0 0 22px;
  height: 22px;
  margin-right: 20px;
}

.checkbox input[type="checkbox"]:checked ~ div,
.checkbox--checked > div {
  background-image: url("../../assets/Icons/check.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-color: forestgreen;
  border-color: forestgreen;
  box-shadow: none;
}

.checkbox input[aria-invalid="true"] ~ div {
  border-color: red;
}

.checkbox-label {
  a {
    color: blue;
    text-decoration: underline;
  }
}

.checkbox.-small {
  align-items: flex-start;

  span {
    font-size: 12px;
  }

  a {
    color: green;
  }
}

.checkboxes {
  display: flex;
  flex-wrap: wrap;

  & > label {
    width: 50%;
    flex: 0 0 50%;
    margin-bottom: 20px;
  }
}

.label-checkbox:hover {
  .checkbox > div {
    background-image: url("../../assets/Icons/check.svg");
    background-repeat: no-repeat;
    background-position: center center;
  }
}

.form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.errors > div {
  color: #ff0000;
  font-size: 11px;
  margin-top: 10px;
  display: none;
}

.has-error {
  input {
    border-color: #ff0000;
  }
  .errors > div {
    display: block;
  }
}

.form-checkbox {
  display: flex;
  align-items: center;

  label {
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
}
</style>

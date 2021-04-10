<template>
  <modal @close="$emit('close')">
    <div class="modal__info">
      <span class="decor">Dodaj raport</span>

      <div class="modal__text">
        <div v-if="error" class="alert alert-danger">{{ error }}</div>

        <form action="#" @submit.prevent="submit">
          <label for="brand">Spalone paliwo</label><br />
          <input
            id="fuelConsumption"
            type="number"
            class="form-control"
            name="fuelConsumption"
            placeholder="np. 40"
            step="0.1"
            value
            autofocus
            required
            v-model="form.fuelConsumption"
          />
          <br />

          <label for="model">Przejechane kilometry</label><br />
          <input
            id="kilometers"
            type="number"
            class="form-control"
            name="kilometers"
            placeholder="np. 100"
            step="0.1"
            required
            v-model="form.kilometers"
          />
          <br /><br />
          <label for="year">Typ trasy</label><br /><br />
          <div class="row">
            <div class="col">
              <label class="radio radio-gradient">
                <span class="radio__input">
                  <input
                    type="radio"
                    name="radio"
                    id="miasto"
                    value="Miasto"
                    v-model="form.roadType"
                  />
                  <span class="radio__control"></span>
                </span>
                <span class="radio__label">Miasto</span>
              </label>
            </div>
            <div class="col">
              <label class="radio radio-gradient">
                <span class="radio__input">
                  <input
                    type="radio"
                    name="radio"
                    id="trasa"
                    value="Trasa"
                    v-model="form.roadType"
                  />
                  <span class="radio__control"></span>
                </span>
                <span class="radio__label">Trasa</span>
              </label>
            </div>
            <div class="col">
              <label class="radio radio-gradient">
                <span class="radio__input">
                  <input
                    type="radio"
                    name="radio"
                    id="cyklMieszany"
                    value="Cykl mieszany"
                    v-model="form.roadType"
                  />
                  <span class="radio__control"></span>
                </span>
                <span class="radio__label">Cykl mieszany</span>
              </label>
            </div>
          </div>

          <label for="mileage">Cena paliwa</label><br />
          <input
            id="fuelPrice"
            type="number"
            class="form-control"
            name="fuelPrice"
            step="0.01"
            placeholder="np. 4.10"
            required
            v-model="form.fuelPrice"
          />
          <br />
          <button type="submit" class="button button--full">
            <span>Dodaj</span>
          </button>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modals/Modal.vue";
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  name: "ModalAddFuelRaport",
  components: { Modal },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  data() {
    return {
      form: {
        fuelPrice: "",
        roadType: undefined,
        kilometers: "",
        fuelConsumption: ""
      },
      error: null
    };
  },
  props: {},
  methods: {
    submit() {
      firebase
        .database()
        .ref(
          `${this.user.data.email.replace(".", ",")}/` +
            "cars/" +
            `${this.user.activeCar}/` +
            "fuel-raport/" +
            `${this.form.kilometers}`
        )
        .set({
          fuelPrice: this.form.fuelPrice,
          roadType: this.form.roadType,
          kilometers: this.form.kilometers,
          fuelConsumption: this.form.fuelConsumption
        });
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 20px;
}
input {
  margin-bottom: 10px;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.col {
  display: flex;
  flex-direction: column;
}

:root {
  --color: rebeccapurple;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.radio {
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 1.1rem;
  color: var(--color);

  &:focus-within {
    .radio__label {
      transform: scale(1.15);
      opacity: 1;
    }
  }
}

.radio__label {
  line-height: 1;
  transition: 180ms all ease-in-out;
  opacity: 0.8;
}

.radio__input {
  display: flex;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:focus + .radio__control {
      box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
    }
  }
}

.radio-gradient input:checked + .radio__control {
  background: radial-gradient(currentcolor 50%, rgba(255, 0, 0, 0) 51%);
}

.radio-before {
  .radio__control {
    display: grid;
    place-items: center;
  }

  input + .radio__control::before {
    content: "";
    width: 0.5em;
    height: 0.5em;
    box-shadow: inset 0.5em 0.5em currentColor;
    border-radius: 50%;
    transition: 180ms transform ease-in-out;
    transform: scale(0);
  }

  input:checked + .radio__control::before {
    transform: scale(1);
  }
}

.radio__control {
  display: block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 0.1em solid currentColor;
  transform: translateY(-0.05em);
}
</style>

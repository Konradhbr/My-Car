<template>
  <div class="service container">
    <div class="service__title">
      <h3>Dziennik serwisowy</h3>
      <h4>
        Odwiedziłeś/aś ostatnio mechanika lub wymieniłeś/aś samemu jakąś część?
        Dodaj ją do swojego dzienniczka online
      </h4>
    </div>
    <div class="service__content">
      <div class="service__content__top">
        <div class="service__content__sum">
          <h4>Całkowity koszt wydatków</h4>
          <h3>{{ result }} zł</h3>
        </div>
        <div class="service__content__button">
          <button class="button button--full" @click="modalAddService = true">
            <span>Dodaj</span>
          </button>
        </div>
      </div>
      <div class="service__content__bottom">
        <div class="service__content__table">
          <Table />
        </div>
      </div>
    </div>
    <ModalAddService v-if="modalAddService" @close="modalAddService = false" />
  </div>
</template>

<script>
import ModalAddService from "../Modals/ModalAddService.vue";
import Table from "./Table.vue";
import { mapGetters } from "vuex";
import firebase from "firebase";


export default {
  components: { Table, ModalAddService },
  name: "Service",
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  data() {
    return {
      modalAddService: false,
			result: null,
    };
  },
	created() {
		this.setResult();
		console.log(this.result)
	},
	methods: {
 async setResult() {
      var service = firebase
        .database()
        .ref(
          `${this.user.data.email.replace(".", ",")}/` +
            "cars/" +
            `${this.user.activeCar}/` +
            "service/"
        );
      service.on("value", snapshot => {
        const data = snapshot.val();

        for (var i in data) {
					this.result += parseInt(data.[i].price)
        }
      });
    },
	}
};
</script>

<style lang="scss" scoped>
.service {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 40px;

  h3,
  h4 {
    color: black;
    margin-bottom: 20px;
  }
}
.service__title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
}
.service__content {
  margin-top: 40px;
}
.service__content__top {
  display: flex;
  flex-direction: column;
}
.service__content__sum {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.service__content__button {
  margin: 40px 0;
}
@media screen and (min-width: 1010px) {
  .service__content__top {
    flex-direction: row;
    justify-content: space-between;
  }
  .service__title {
    width: 70%;
  }
}
</style>

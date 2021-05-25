<template>
  <section id="carousel">
    <div class="container">
      <div class="carousel-wrap" ref="carouselWrap">
        <div class="carousel-list" ref="carouselList">
          <carousel-item
            v-for="(item, index) in carouselList"
            :key="item.id"
            :item="item"
            :index="index"
            ref="carouselItem"
          ></carousel-item>
        </div>
      </div>
      <div class="carousel__navigation">
        <div class="carousel__pagination">
          <span
            v-for="(item, index) in carouselList"
            :key="item.id"
            :class="{
              'pagination-bullet pagination-bullet--active': index === 0,
              'pagination-bullet': index !== 0,
            }"
            ref="paginationItem"
            @click="moveCarouselOnPaginationHandler(index)"
          ></span>
        </div>
        <div class="carousel__buttons">
          <button
            type="button"
            class="btn carousel-prev"
            @click="moveCarouselHandler('back')"
            :disabled="setAtrDisabledToBack"
          ></button>
          <button
            type="button"
            class="btn carousel-next"
            @click="moveCarouselHandler('forward')"
            :disabled="setAtrDisabledToFoeward"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import t from "vue-types";
import CarouselItem from "./CarouselListItem.vue";
export default {
  props: {
    carouselList: t.Array,
  },
  components: {
    CarouselItem,
  },

  data() {
    return {
      carouselItemsActiveIndex: 0,
      isResizing: false,
    };
  },
  computed: {
    setAtrDisabledToBack() {
      return true === this.isFirstItemActive;
    },
    setAtrDisabledToFoeward() {
      return true === this.isLastItemActive;
    },
    carouselItemsCount() {
      return this.carouselList.length;
    },
    addTransition() {
      return (this.$refs.carouselList.style.transition = this.isResizing
        ? ""
        : "transform 0.5s ease-in-out");
    },
    carouselWrapWidth() {
      return this.$refs.carouselWrap.offsetWidth;
    },
    addActiveToItem() {
      return this.$refs.carouselItem.forEach((item, index) => {
        if (index === this.carouselItemsActiveIndex) {
          item.$el.classList.add("carousel-list__item--active");
        } else {
          item.$el.classList.remove("carousel-list__item--active");
        }
      });
    },
    setActivePagination() {
      return this.$refs.paginationItem.forEach((item, index) => {
        if (index === this.carouselItemsActiveIndex) {
          item.classList.add("pagination-bullet--active");
        } else {
          item.classList.remove("pagination-bullet--active");
        }
      });
    },
    isFirstItemActive() {
      return this.carouselItemsActiveIndex === 0;
    },

    isLastItemActive() {
      return this.carouselItemsActiveIndex === this.carouselItemsCount - 1;
    },
    onWindowResize() {
      this.carouselWrapWidth;
      this.isResizing = true;
      this.$refs.carouselList.style.transition = "";
      this.moveCarousel();
    },
  },
  methods: {
    moveCarouselHandler(direction) {
      if (direction === "forward" && !this.isLastItemActive) {
        this.carouselItemsActiveIndex += 1;
        console.log(this.carouselItemsActiveIndex);
      } else if (direction === "back" && !this.isFirstItemActive) {
        this.carouselItemsActiveIndex -= 1;
      }

      this.isResizing = false;
      this.moveCarousel();
    },
    moveCarousel() {
      const transformValue =
        this.carouselItemsActiveIndex * this.carouselWrapWidth;
      this.$refs.carouselList.style.transform =
        "translate3d(-" + transformValue + "px, 0px, 0px)";
      this.addActiveToItem;
      this.addTransition;
      this.setActivePagination;
    },
    moveCarouselOnPaginationHandler(index) {
      this.carouselItemsActiveIndex = index;
      this.moveCarousel();
    },
  },
  mounted() {
    window.addEventListener("resize", () => this.onWindowResize);
  },
};
</script>

<template>
  <section id="carousel">
    <div class="container">
      <div class="carousel-wrap" ref="carouselWrap">
        <div class="carousel-list" ref="carouselList">
          <carousel-item
            v-for="(item, index) in carouselList"
            :key="item.id"
            :item="item"
            :class="{ 'carousel-list__item--active': index === activeIndex }"
            ref="carouselItem"
          />
        </div>
      </div>
      <div class="carousel__navigation">
        <div class="carousel__pagination">
          <span
            v-for="(item, index) in carouselList"
            :key="'pag-' + item.id"
            class="pagination-bullet"
            :class="{ 'pagination-bullet--active': index === activeIndex }"
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
    carouselList: t.array.def([]),
  },
  components: {
    CarouselItem,
  },

  data() {
    return {
      activeIndex: 0,
      isResizing: false,
      windowWidth: 0,
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

    isFirstItemActive() {
      return this.activeIndex === 0;
    },

    isLastItemActive() {
      return this.activeIndex === this.carouselItemsCount - 1;
    },
  },
  methods: {
    moveCarouselHandler(direction) {
      if (direction === "forward" && !this.isLastItemActive) {
        this.activeIndex += 1;
      } else if (direction === "back" && !this.isFirstItemActive) {
        this.activeIndex -= 1;
      }

      this.moveCarousel();
    },

    moveCarouselOnPaginationHandler(index) {
      this.activeIndex = index;
      this.moveCarousel();
    },
    carouselWrapWidth() {
      this.windowWidth = this.$refs.carouselWrap.offsetWidth;
    },
    onWindowResize() {
      this.carouselWrapWidth();
      this.isResizing = true;
      this.$refs.carouselList.style.transition = "";
      this.moveCarousel();
    },
    moveCarousel() {
      const transformValue = this.activeIndex * this.windowWidth;
      this.$refs.carouselList.style.transform =
        "translate3d(-" + transformValue + "px, 0px, 0px)";
      this.addTransition;
      this.isResizing = false;
    },
  },
  mounted() {
    window.addEventListener("resize", this.onWindowResize);
    this.carouselWrapWidth();
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },
};
</script>

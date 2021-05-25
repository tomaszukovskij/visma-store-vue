<template>
  <div class="form-group">
    <label>{{ title }}</label>
    <slot></slot>
  </div>
</template>
<script>
import t from "vue-types";
export default {
  props: {
    title: t.string,
  },
};
</script>

<template>
  <div class="d-flex">
    <div ref="list" class="w-100 position-relative">
      <vue-drag-resize
        v-for="(rect, index) in rects"
        :key="index"
        :grid-x="20"
        :grid-y="20"
        :w="rect.width"
        :h="rect.height"
        :x="rect.left"
        :y="rect.top"
        :parent-w="listWidth"
        :parent-h="listHeight"
        :axis="rect.axis"
        :is-active="rect.active"
        :minw="rect.minw"
        :minh="rect.minh"
        :is-draggable="rect.draggable"
        :is-resizable="rect.resizable"
        :parent-limitation="rect.parentLim"
        :snap-to-grid="rect.snapToGrid"
        :aspect-ratio="rect.aspectRatio"
        :z="rect.zIndex"
        :content-class="rect.class"
        @activated="activateEv(index)"
        @deactivated="deactivateEv(index)"
        @dragging="changePosition($event, index)"
        @resizing="changeSize($event, index)"
      >
        <div class="filler" :style="{ backgroundColor: rect.color }">
          <h3>Hello World!</h3>
          <p>{{ rect.top }} х {{ rect.left }}</p>
          <p>{{ rect.width }} х {{ rect.height }}</p>
        </div>
      </vue-drag-resize>
    </div>
    <!--    <toolbar></toolbar>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      listWidth: 0,
      listHeight: 0,
    }
  },

  computed: {
    rects() {
      return this.$store.state.rect.rects
    },
  },

  mounted() {
    const listEl = this.$refs.list
    this.listWidth = listEl.clientWidth
    this.listHeight = listEl.clientHeight

    window.addEventListener('resize', () => {
      this.listWidth = listEl.clientWidth
      this.listHeight = listEl.clientHeight
    })
  },

  methods: {
    activateEv(index) {
      this.$store.dispatch('rect/setActive', { id: index })
      this.$store.dispatch('rect/changeZToTop', { id: index })
    },

    deactivateEv(index) {
      this.$store.dispatch('rect/unsetActive', { id: index })
    },

    changePosition(newRect, index) {
      this.$store.dispatch('rect/setTop', { id: index, top: newRect.top })
      this.$store.dispatch('rect/setLeft', { id: index, left: newRect.left })
      this.$store.dispatch('rect/setWidth', { id: index, width: newRect.width })
      this.$store.dispatch('rect/setHeight', {
        id: index,
        height: newRect.height,
      })
    },

    changeSize(newRect, index) {
      this.$store.dispatch('rect/setTop', { id: index, top: newRect.top })
      this.$store.dispatch('rect/setLeft', { id: index, left: newRect.left })
      this.$store.dispatch('rect/setWidth', { id: index, width: newRect.width })
      this.$store.dispatch('rect/setHeight', {
        id: index,
        height: newRect.height,
      })
    },
  },
}
</script>

<style>
.filler {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: absolute;
}
</style>

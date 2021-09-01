<template>
  <div class="flex-column">
    <div class="d-flex bg-light">
      <b-dd
        id="dropdown-1"
        text="Файл"
        class="m-1 dropdown-tools"
        toggle-class="text-dark"
        variant="outline-light"
        disabled
      >
        <b-dd-item>Для наполненности =)</b-dd-item>
      </b-dd>

      <b-dd
        id="dropdown-1"
        text="Окна"
        class="m-1 dropdown-tools"
        toggle-class="text-dark"
        variant="outline-light"
      >
        <b-dd-item class="text-center" @click="openAllWindows()">
          Открыть все окна
        </b-dd-item>
        <b-dd-divider></b-dd-divider>
        <template v-for="itemWindow in getCheckWindows">
          <b-dd-form :key="itemWindow.id">
            <b-form-checkbox
              v-model="itemWindow.isView"
              @change="changeWindowStatus(itemWindow)"
            >
              {{ itemWindow.title }}
            </b-form-checkbox>
          </b-dd-form>
        </template>
        <b-dd-divider></b-dd-divider>
        <b-dd-item class="text-center" @click="closeAllWindows()">
          Закрыть все окна
        </b-dd-item>
      </b-dd>

      <b-dd
        id="dropdown-1"
        text="Настройки"
        class="m-1 dropdown-tools"
        toggle-class="text-dark"
        variant="outline-light"
        disabled
      >
        <b-dd-item>Настроек нет, но все может измениться</b-dd-item>
      </b-dd>
    </div>
    <div ref="list" class="w-100 h-100 position-relative">
      <vue-drag-resize
        v-for="(rect, index) in rects"
        :key="rect.id"
        :w="rect.width"
        :h="rect.height"
        :x="rect.left"
        :y="rect.top"
        :z="rect.zIndex"
        :is-active="rect.active"
        :grid-x="setting.gridX"
        :grid-y="setting.gridY"
        :parent-w="listWidth"
        :parent-h="listHeight"
        :axis="setting.axis"
        :minw="setting.minw"
        :minh="setting.minh"
        :is-draggable="setting.draggable"
        :is-resizable="setting.resizable"
        :parent-limitation="setting.parentLim"
        :snap-to-grid="setting.snapToGrid"
        :aspect-ratio="setting.aspectRatio"
        :content-class="setting.class"
        @activated="activateEv(rect.id)"
        @deactivated="deactivateEv(rect.id)"
        @dragging="changePosition($event, index)"
        @resizing="changeSize($event, index)"
      >
        <div class="rect-block d-flex flex-column shadow bg-white">
          <div
            class="d-flex bg-secondary text-white rounded"
            :class="{ 'bg-blue': rect.active }"
          >
            <b-dd
              dropright
              variant="danger"
              toggle-class="text-decoration-none px-2 py-0 m-1"
              no-caret
              class="dropdown-confirm"
              menu-class="shadow"
            >
              <template #button-content> X </template>
              <b-dd-item-btn
                variant="danger"
                @click="removeWindowBlock(rect.id)"
              >
                Да
              </b-dd-item-btn>
              <b-dd-item-btn variant="secondary" size="lg"> Нет </b-dd-item-btn>
            </b-dd>
            <div class="flex-fill text-center pt-1">{{ rect.title }}</div>
          </div>
          <div class="overflow-hidden h-100 p-1">
            <template v-if="rect.id === 1">
              <item-favorite-table></item-favorite-table>
            </template>
            <template v-if="rect.id === 2">
              <item-history-table filter-event="added"></item-history-table>
            </template>
            <template v-if="rect.id === 3">
              <item-history-table filter-event="removed"></item-history-table>
            </template>
          </div>
          <div class="border-top border-secondary bg-light text-secondary px-1">
            <span>x{{ rect.left }} - y{{ rect.top }}</span>
            <span> | </span>
            <span>{{ rect.width }} х {{ rect.height }}</span>
          </div>
        </div>
      </vue-drag-resize>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOwn: true,
      selectedOwn2: false,
      setting: {
        // id: null,
        // width: 300,
        // height: 100,
        // top: 0,
        // left: 0,
        // zIndex: 1,
        // active: false,
        // --- --- ---
        gridX: 20,
        gridY: 20,
        draggable: true,
        resizable: true,
        minw: 200,
        minh: 80,
        axis: 'both',
        parentLim: true,
        snapToGrid: true,
        aspectRatio: false,
        color: '#f8f9fa',
        class: '',
      },
      windows: [
        {
          id: 1,
          title: 'Окно избранное',
          isView: false,
          isDefault: true,
        },
        {
          id: 2,
          title: 'Окно история добавлений',
          isView: false,
          isDefault: true,
        },
        {
          id: 3,
          title: 'Окно история удалений',
          isView: false,
          isDefault: true,
        },
        {
          id: 4,
          title: 'Окно четыре',
          isView: false,
          isDefault: false,
        },
        {
          id: 5,
          title: 'Окно пять',
          isView: false,
          isDefault: false,
        },
        {
          id: 6,
          title: 'Окно шесть',
          isView: false,
          isDefault: false,
        },
        {
          id: 7,
          title: 'Окно семь',
          isView: false,
          isDefault: false,
        },
      ],
      listWidth: 0,
      listHeight: 0,
    }
  },

  computed: {
    rects() {
      return this.$store.state.rect.rects
    },
    getRectItems() {
      return this.$store.getters['rect/getRectItems']
    },
    getCheckWindows() {
      return this.windows.map((itemWindow) => {
        const check = _.find(this.getRectItems, ['id', itemWindow.id])
        itemWindow.isView = !!check
        return itemWindow
      })
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
    if (!this.isAnyOpenWindow()) {
      this.openDefaultWindows()
    }
  },

  methods: {
    isAnyOpenWindow() {
      const index = _.findIndex(this.windows, ['isView', true])
      return index > -1
    },
    openDefaultWindows() {
      for (const itemWindow of this.getCheckWindows) {
        if (itemWindow.isDefault) {
          this.openWindowBlock(itemWindow)
        }
      }
    },
    openAllWindows() {
      for (const itemWindow of this.getCheckWindows) {
        if (!itemWindow.isView) {
          this.openWindowBlock(itemWindow)
        }
      }
    },
    closeAllWindows() {
      for (const itemWindow of this.getCheckWindows) {
        if (itemWindow.isView) {
          this.removeWindowBlock(itemWindow.id)
        }
      }
    },
    changeWindowStatus(itemWindow) {
      if (itemWindow.isView) {
        this.openWindowBlock(itemWindow)
      } else {
        this.removeWindowBlock(itemWindow.id)
      }
    },
    openWindowBlock(itemWindow) {
      const rectBlank = _.merge({}, this.$store.getters['rect/getRectBlank'])
      rectBlank.id = itemWindow.id
      rectBlank.top = itemWindow.id * 50
      rectBlank.left = itemWindow.id * 50
      rectBlank.title = itemWindow.title
      this.$store.commit('rect/setRect', rectBlank)
      this.$store.dispatch('rect/changeZToTop', { rectId: rectBlank.id })
    },
    removeWindowBlock(rectId) {
      this.$store.commit('rect/removeRect', rectId)
    },
    activateEv(rectId) {
      this.$store.dispatch('rect/setActive', { rectId })
      this.$store.dispatch('rect/changeZToTop', { rectId })
    },

    deactivateEv(rectId) {
      this.$store.dispatch('rect/unsetActive', { rectId })
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
.rect-block {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: absolute;
}
</style>

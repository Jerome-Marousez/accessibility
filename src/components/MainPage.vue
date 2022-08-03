<template>

  <div class="main-page">

    <Component v-if="tab.length" :is="tab" :data="tabData"/>

    <div v-for="(item, id) in items" :key="id">
      <Item @click="tab = item.component; tabData = item.options">
        <template v-slot:icon>
          <i :class="item.icon"/>
        </template>
        <template v-slot:label>
          {{ item.label }}
        </template>
      </Item>
    </div>

    <div class="bottom">
      <Theme />
      <button class="back" @click="tab = ''; tabData = null">
        <div>BACK</div>
        <i class="fas fa-backward"/>
      </button>
    </div>

  </div>


</template>


<script>
import Item from "@/components/Item";
import Options from "@/components/Options";
import Theme from '@/components/Theme'

export default {
  name: "MainPage",

  inject: [],

  components: {
    Item,
    Options,
    Theme,
  },

  props: {},

  emits: [],

  data() {
    return {
      tab: '',
      tabData: null,

      items: {

        position: {
          component: 'Options',
          icon: 'fas fa-bed',
          label: 'Position',
          options: {
            layingDown: {
              label: 'Laying down',
              icon: 'fas fa-bed',
            },
            inclineBed: {
              label: 'Incline bed',
              icon: 'fas fa-bed',
              angle: '12deg'
            },
            sitUp: {
              label: 'Sit up',
              icon: 'fas fa-bed',
              angle: '24deg'
            },
          }
        },

        medical: {
          component: 'Options',
          icon: 'fas fa-pills',
          label: 'Medical',
          options: {
            medicine: {
              label: 'Medicine',
              icon: 'fas fa-pills',
            },
            nurse: {
              label: 'Nurse',
              icon: 'fas fa-user-nurse',
            },
            pain: {
              component: 'Pain',
              label: 'Pain',
              icon: 'fas fa-diagnoses',
            },
          }
        },

        hygiene: {
          component: 'Options',
          icon: 'fas fa-bath',
          label: 'Hygiene',
          options: {
            bathroom: {
              label: 'Bathroom',
              icon: 'fas fa-toilet-paper'
            },
            shower: {
              label: 'Bath',
              icon: 'fas fa-bath'
            },
            bed: {
              label: 'Change bed',
              icon: 'fas fa-bed'
            }
          }
        },

        food: {
          component: 'Options',
          icon: 'fas fa-apple-alt',
          label: 'Food',
          options: {
            solid: {
              label: 'Food',
              icon: 'fas fa-apple-alt'
            },
            liquid: {
              label: 'Water',
              icon: 'fas fa-water'
            },
          }

        },

        entertainment: {
          component: 'Options',
          icon: 'fas fa-tv',
          label: 'TV',
          options: {
            tv: {
              label: 'TV',
              icon: 'fas fa-tv'
            },
            radio: {
              label: 'Radio',
              icon: 'fas fa-music'
            },
            game: {
              label: 'Game',
              icon: 'fas fa-dice'
            },
          }

        },

        communication : {
          component: 'Options',
          icon: 'far fa-comment-dots',
          label: 'Chat',
          options: {
            yes: {
              label: 'Yes',
              icon: 'fas fa-check'
            },
            no: {
              label: 'No',
              icon: 'fas fa-times'
            },
          }

        }
      }
    }
  },

  provide() {
    return {}
  },

  computed: {},

  methods: {},

  unmounted() {
  },

  mounted() {
  },

  created() {
  },

}
</script>


<style scoped>
.main-page {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
}
.bottom {
  width: 100vw;
  height: 8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.bottom > * {
  height: 100%;
  flex: 1;
  font-size: max(2rem, 2vw);
}
.bottom > button {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
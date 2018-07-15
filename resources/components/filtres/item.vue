<template>
<div>
    <div class="dropdown" v-for="(item, i) in items" :key="i">
        <div class="top" @click="item.isStatus = !item.isStatus">
            <span class="title">
        {{item.title}}
      </span>
            <arrow :class="{'active': item.isStatus}" />
        </div>
        <ul class="filters-content" v-show="item.isStatus">
            <li v-for="(child, j) in item.childs" :key="j" v-if="item.type === 'default'" :class="item.type">
                {{child.title}}
                <hr />
            </li>
            <div v-if="item.type === 'range'" :class="item.type">
                <div class="price">
                    <input type="number" v-model="item.value[0]" />
                    <input type="number" v-model="item.value[1]" />
                </div>
                <no-ssr>
                    <vue-slider :min="item.min" :max="item.max" width="100%" :disabled="false" :show="true" :useKeyboard="true" :tooltip="false" v-model="item.value" />
                </no-ssr>
                <p>Вы можете указать диапозон вручную</p>
            </div>
            <li v-for="(child, k) in item.childs" :key="k" v-if="item.type === 'checkbox'" :class="item.type" @click="child.isStatus = !child.isStatus">
                <span> <checkbox :class="{'active': child.isStatus}"/> {{child.title}}</span>
            </li>
            <li v-for="(child, l) in item.childs" :key="l" v-if="item.type === 'radio'" :class="item.type" @click="item.active = l">
                <span> <radio :class="{'active': item.active === l}"/> {{child.title}}</span>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import arrow from '~/assets/svg/arrow.svg'
import checkbox from '~/assets/svg/checkbox.svg'
import radio from '~/assets/svg/radiobutton.svg'

export default {
    props: {
        items: {
            type: Array
        },
    },
    methods: {
        // radioChange(i, l) {
        //   this.items[i].childs.forEach(element => {
        //     element.isStatus = false
        //   });
        //   this.items[i].childs[l].isStatus = true
        // }
    },
    components: {
        arrow,
        checkbox,
        radio
    }
}
</script>

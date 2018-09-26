import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

import { DropDownTree, DropDownTreeInstaller } from '@progress/kendo-dropdowntree-vue-wrapper'

Vue.use(DropDownTreeInstaller)

new Vue({
    el: '#app',
    components: {
        DropDownTree
    }
})
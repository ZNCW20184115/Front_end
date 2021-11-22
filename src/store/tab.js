export default {
    state:{
        isCollapse: false,
        currentMenu: null
    },
    mutations:{
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val){
            val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
        }
    }
}
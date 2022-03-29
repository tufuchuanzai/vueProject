import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store(

    {
        state: {

            tablist: [
                {

                    name: "home",
                    label: '首页',
                    icon: 'home',
                    path: '/Main'
                },

            ],
            currentMenu: null,
            tabledata: [

            ],
            isshow: false,
            SubmitOrEdit: 1,
            selectedname: '',
            selectedclass: '',
            selectedage: '',
            selectedsex: '',
            selectedroom: '',
            selectedphone: '',
            currentRouterName: 'home',
            user: {
                token: ''
            }





        },
        mutations: {
            selectMenu(state, val) {
                if (val.name !== 'home') {
                    state.currentMenu = val;
                    const result = state.tablist.findIndex(item => item.name === val.name)

                    if (result === -1) {

                        state.tablist.push(val)
                    }

                }
                else {
                    state.currentMenu = null;
                }
            },
            closeTag(state, val) {
                const result = state.tablist.findIndex(item => item.name === val.name);
                state.tablist.splice(result, 1)
            },
            dataPush(state, val) {
                state.tabledata.push(val);

            },
            getToken() {

            }


        }



    }

)
export default store;

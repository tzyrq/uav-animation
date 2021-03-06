import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/Map'
import Slide from '@/components/slide'
import TestTable from '@/components/testTable'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/:index',
            name: 'Map',
            props: true,
            components: {
                main: Map,
                sidepanel: Slide,
                testTable: TestTable
            },
            props: {
                main: true,
                sidepanel: false
            },
        },
        {
            path: '/',
            name: 'Map',
            components: {
                main: Map,
                sidepanel: Slide,
                testTable: TestTable
            }
        },
    ]
})

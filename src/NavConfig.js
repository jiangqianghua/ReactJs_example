import Index from './pages/Index'
import Video from './pages/Video'
import WorkPlace from './pages/WorkPlace'
let routeConfig = [
    {
        path:'/', title: '博客首页', exact: true, component: Index
    },
    {
        path:'/video/', title: '视频教程', exact: false, component: Video
    },
    {
        path:'/workplace/', title: '职场技能', exact: false, component: WorkPlace
    }
]

export default routeConfig
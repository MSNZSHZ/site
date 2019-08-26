
const data = {
    locale: 'zh-cn',
    products: {
        g2: {
            version: '3.0.0',
            name: 'G2',
            href: '${base}zh-cn/g2/3.x/index.html',
            icon: '${assets}/image/icon/g2.svg',
            links: {
                about: { text: '${resource.translate.about} G2', href: '${base}zh-cn/g2/3.x/index.html'},
                demo: { text: '${resource.translate.demo}', href: '${base}zh-cn/g2/3.x/demo/index.html' },
                api: { text: '${resource.translate.api}', href: 'https://www.yuque.com/antv/g2-docs/api-g2', newTab: true },
                tutorial: { text: '${resource.translate.tutorial}', href: 'https://www.yuque.com/antv/g2-docs/get-started', newTab: true },
                English: { text: 'English', href: 'https://www.yuque.com/antv/g2-docs-en?language=en-us', newTab: true },
                // history: { text: '${resource.translate.history}', href: '${base}zh-cn/g2/3.x/tutorial/history.html' },
                // changelog: { hideFromNav: true, text: '${resource.translate.changelog}', href: '${base}zh-cn/g2/3.x/tutorial/changelog.html' },
            }
        },
        g6: {
            version: '3.0.0',
            name: 'G6',
            href: '${base}zh-cn/g6/3.x/index.html',
            icon: '${assets}/image/icon/g6.svg',
            links: {
                about: { text: '${resource.translate.about} G6', href: '${base}zh-cn/g6/3.x/index.html'},
                demo: { text: '${resource.translate.demo}', href: '${base}zh-cn/g6/3.x/demo/index.html' },
                api: { text: '${resource.translate.api}', href: 'https://www.yuque.com/antv/g6/graph', newTab: true },
                tutorial: { text: '${resource.translate.tutorial}', href: 'https://www.yuque.com/antv/g6/intro', newTab: true },
                oldVersion: { text: '${resource.translate.oldVersion}', href: '${base}zh-cn/g6/2.x/demo/index.html', newTab: true }
                // English: { text: 'English', href: 'https://www.yuque.com/antv/g6-en?language=en-us', newTab: true },
                // history: { text: '${resource.translate.history}', href: '${base}zh-cn/g6/2.x/tutorial/history.html' },
                // toolbox: { text: '${resource.translate.toolbox}', href: '${base}zh-cn/g6/2.x/toolbox.html' },
                // changelog: { hideFromNav: true, text: '${resource.translate.changelog}', href: '${base}zh-cn/g6/2.x/tutorial/changelog.html' },
            }
        },
        f2: {
            version: '1.0.0',
            name: 'F2',
            href: '${base}zh-cn/f2/3.x/index.html',
            icon: '${assets}/image/icon/f2.svg',
            qrCode: { text: '${resource.translate.scanCode}', href: '${base}zh-cn/f2/3.x/demo/mobile-index.html' },
            getStarted: { text: '${resource.translate.getStarted}', href: 'https://www.yuque.com/antv/f2/getting-started' },
            links: {
                about: { text: '${resource.translate.about} F2', href: '${base}zh-cn/f2/3.x/index.html'},
                demo: { text: '${resource.translate.demo}', href: '${base}zh-cn/f2/3.x/demo/index.html' },
                api: { text: '${resource.translate.api}', href: 'https://www.yuque.com/antv/f2/api-index', newTab: true },
                tutorial: { text: '${resource.translate.tutorial}', href: 'https://www.yuque.com/antv/f2/grammar', newTab: true },
                English: { text: 'English', href: 'https://www.yuque.com/antv/f2-en?language=en-us', newTab: true },
                // history: { text: '${resource.translate.history}', href: 'https://www.yuque.com/antv/f2/changelog' },
                // changelog: { hideFromNav: true, text: '${resource.translate.changelog}', href: '${base}zh-cn/f2/3.x/tutorial/changelog.html' },
            }
        },
        l7: {
            version: '1.0.0',
            name: 'L7',
            href: '${base}zh-cn/l7/1.x/index.html',
            icon: '${assets}/image/icon/l7.svg',
            getStarted: { text: '${resource.translate.getStarted}', href: 'https://www.yuque.com/antv/l7/wyb66y' },
            links: {
                about: { text: '${resource.translate.about} L7', href: '${base}zh-cn/l7/1.x/index.html' },
                demo: { text: '${resource.translate.demo}', href: '${base}zh-cn/l7/1.x/demo/index.html' },
                api: { text: '${resource.translate.api}', href: 'https://www.yuque.com/antv/l7/vgo25g', newTab: true },
                tutorial: { text: '${resource.translate.tutorial}', href: 'https://www.yuque.com/antv/l7/wyb66y', newTab: true },

            }
        },
        // gallery: {
        //     name: '${resource.translate.gallery}',
        //     href: '${base}zh-cn/gallery/index.html',
        //     icon: '${assets}/image/icon/gallery.svg',
        //     links: {
        //         // publications: { text: '经典文献', href: '' },
        //     }
        // },
        vis: {
            name: '${resource.translate.vis}',
            href: '${base}zh-cn/vis/index.html',
            icon: '${assets}/image/icon/vis.svg',
            links: {
                index: { text: '${resource.translate.index}', href: 'https://www.yuque.com/mo-college' },
                design: { text: '${resource.translate.visDesign}', href: 'https://www.yuque.com/mo-college/vis-design'  },
                tutorial: { text: '${resource.translate.visTutorial}', href: 'https://www.yuque.com/mo-college/beginner-tutorial' },
                solution: { text: '${resource.translate.visSolution}', href: 'https://www.yuque.com/mo-college/f2-fund-course' },
                // resource: { text: '${resource.translate.visResource}', href: '${base}zh-cn/vis/resource/index.html' },
                // publications: { text: '经典文献', href: '' },
            }
        }
    },
    resource: {
        translate: {
            aboutUs: '关于我们',
            about: '关于',
            api: 'API 文档',
            back2oldVersion: '返回旧版',
            changelog: '更新日志',
            chartDetail: '了解更多',
            fullScreen: '全屏',
            copy: '复制',
            copyFail: '复制失败',
            copySuccess: '复制成功',
            customerDeclaration: '权益保障承诺书',
            demo: '图表示例',
            download: '下载',
            downloadAndUse: '下载使用',
            execute: '运行',
            feedback: '立即反馈',
            gallery: 'Gallery',
            getStarted: '开始使用',
            history: '更新日志',
            index: '首页',
            inputKeyWord: '输入关键字',
            intro: '介绍',
            joinUs: '立即加入',
            plotDescription: '图表简介',
            privacyDeclaration: '隐私权政策',
            product: '产品',
            referenceLinks: '相关链接',
            relativePlots: '关联图表',
            search: '搜索',
            sourceCode: '源码',
            sortBy: '排序方式',
            recommended: '推荐',
            latest: '最新',
            tag: '标签',
            themeSwitching: '主题切换',
            toolbox: '工具箱',
            tutorial: '使用教程',
            usage: '图表用法',
            variation: '变形',
            viewDetail: '查看详情',
            viewMore: '查看更多',
            vis: '墨者学院',
            visTutorial: '可视化教程',
            visSolution: '行业可视化方案',
            visBlog: '博客',
            visChart: '图表用法',
            visDesign: '设计原则',
            visResource: '资源',
            scanCode: '扫码演示',
            oldVersion: '返回旧版'
        },
        cssFiles: [
        ],
        jsFiles: [
        ],
    },
    header: {
    },
    previous: {
        href: '/old/index.html',
        text: '返回旧版'
    },
    keywords: [
        // 'Ant',
        // 'AntV',
        // 'Data Visualization',
        // 'Visualization',
        // '可视化',
        // '数据可视化',
    ],
    title: '蚂蚁数据可视化',
    siteMap: [
        '${products.g2}',
        '${products.g6}',
        '${products.f2}',
        '${products.l7}',
        '${products.vis}',
        {
            name: '更多产品',
            href: 'https://xcloud.alipay.com/',
            external: true,
            links: {
                antd: { text: 'Ant Design', href: 'https://ant.design/index-cn', description: 'UI 设计体系' },
                egg:  { text: 'Egg', href: 'https://eggjs.org/', description: 'Node Web开发框架' },
            }
        },
    ],
    teamMembers: [
        { name: '巴思'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/basi.png'     , weibo: 'https://weibo.com/145643593'        , github: ''                                } ,
        { name: '沉鱼'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/chenyu.png'   , weibo: ''                                   , github: ''                                } ,
        { name: '董珊珊', jobTitle: '设计师'     , avatar: '${assets}/image/members/shanshan.png' , weibo: ''                                   , github: ''                                } ,
        { name: '顾己'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/guji.png'   , weibo: ''                                   , github: 'https://github.com/Esorakouki'                                } ,
        { name: '顾倾'  , jobTitle: '设计师'     , avatar: '${assets}/image/members/guqing.jpg'   , weibo: ''                                   , github: ''                                } ,
        { name: '画康'  , jobTitle: '设计师'     , avatar: '${assets}/image/members/huakang.png'  , weibo: 'https://weibo.com/u/1985143287'     , github: ''                                } ,
        { name: '尽白'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/jinbai.jpg'   , weibo: 'https://www.weibo.com/u/1736341270' , github: 'https://github.com/aa1011372655' } ,
        { name: '绝云'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/jueyun.png'   , weibo: 'https://weibo.com/omosirovincent'   , github: 'https://github.com/leungwensen'  } ,
        { name: '聚则'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/juze.png'     , weibo: ''                                   , github: 'https://github.com/baizn'        } ,
        { name: '珂甫'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/kefu.png'     , weibo: ''                                   , github: 'https://github.com/pddpd'  } ,
        { name: '陆沉'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/luchen.jpeg'  , weibo: ''                                   , github: ''                                } ,
        { name: '罗宪'  , jobTitle: '动效设计师' , avatar: '${assets}/image/members/luoxian.png'  , weibo: ''                                   , github: ''                                 } ,
        { name: '米法'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/mifa.png'     , weibo: ''                                   , github: 'https://github.com/paleface001'  } ,
        { name: '芈乐'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/mile.jpg'     , weibo: ''                                   , github: 'https://github.com/weepy3641'    } ,
        { name: '青湳'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/qingnan.png'  , weibo: ''                                   , github: 'https://github.com/elaine1234'   } ,
        { name: '轻声'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/qingsheng.png', weibo: ''                                   , github: 'https://github.com/laispace'     } ,
        { name: '十吾'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/shiwu.jpg'    , weibo: 'https://weibo.com/u/2844988612'     , github: 'https://github.com/Yanyan-Wang'  } ,
        { name: '完白'  , jobTitle: '设计师'     , avatar: '${assets}/image/members/wanbai.png'   , weibo: ''                                   , github: ''                                } ,
        { name: '象数'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/xiangshu.png' , weibo: 'https://weibo.com/1707284737'       , github: 'https://github.com/lzxue'        } ,
        { name: '萧庆'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/xiaoqing.jpg' , weibo: ''                                   , github: 'https://github.com/dxq613'       } ,
        { name: '亦叶'  , jobTitle: '设计师'     , avatar: '${assets}/image/members/yiye.png'     , weibo: ''                                   , github: ''                                } ,
        { name: '有田'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/youtian.jpg'  , weibo: 'https://weibo.com/u/1869365461'     , github: 'https://github.com/TomHuangCN'   } ,
        { name: '玉伯'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/yubo.png'     , weibo: 'https://weibo.com/lifesinger'       , github: 'https://github.com/lifesinger'   } ,
        { name: '御术'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/yushu.png'    , weibo: 'https://weibo.com/kenerlinfeng'     , github: 'https://github.com/kener'        } ,
        { name: '再飞'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/zaifei.jpg'   , weibo: 'https://weibo.com/simaoohappy'      , github: 'https://github.com/simaQ'        } ,
        { name: '张初尘', jobTitle: '产品经理'   , avatar: '${assets}/image/members/chuchen.png'  , weibo: 'https://weibo.com/u/1824917073'     , github: 'https://github.com/lilyal'        } ,
        { name: '祯逸'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/zhenyi.png'   , weibo: ''                                   , github: ''                                } ,
        { name: '杍鱼'  , jobTitle: '工程师'     , avatar: '${assets}/image/members/ziyu.png'     , weibo: ''                                   , github: 'https://github.com/cycgit'       } ,
    ],
    showFooter: true,
    footer: {
        isFixed: false,
        isDark: true,
        resources: [
            { text: '关于我们', href: '' },
            { text: '版权说明', href: '' },
            { text: 'GitHub', href: 'https://github.com/antvis/' }
        ],
        copyright: 'ICP 证浙 B2-2-100257  Copyright © 蚂蚁金融服务集团',
    }
};

data.homepageNavs = {
    g2: data.products.g2,
    g6: data.products.g6,
    f2: data.products.f2,
    l7: data.products.l7,
    vis: data.products.vis
    /*visChart: {
        name: '${resource.translate.visChart}',
        href: '${base}zh-cn/vis/chart/index.html'
    },
    visDesign: {
        name: '${resource.translate.visDesign}',
        href: '${base}zh-cn/vis/design/index.html'
    },*/
};

module.exports = data;

'use strict';

var path = require('path');
var resolve = path.resolve;
var pkg = require('./package.json');
const g6Url = 'https://gw.alipayobjects.com/os/antv/pkg/_antv.g6-';
const g6EditorUrl = 'https://gw.alipayobjects.com/os/antv/pkg/_antv.g6-editor-';
const g6OldVersion = '2.2.6';
const g6Version = '3.0.0';
const g6EditorVersion = '1.2.0';
module.exports = {
    url: {
        g2: 'https://gw.alipayobjects.com/os/antv/pkg/_antv.g2-3.5.1/dist/g2.min.js',
        'g2-brush': 'https://gw.alipayobjects.com/os/antv/assets/g2-brush/0.0.2/g2-brush.min.js',
        'g2-plugin-slider': 'https://gw.alipayobjects.com/os/antv/pkg/_antv.g2-plugin-slider-2.1.0/dist/g2-plugin-slider.min.js',
        d3: 'https://gw.alipayobjects.com/os/antv/assets/lib/d3-4.13.0.min.js',
        dataSet: 'https://gw.alipayobjects.com/os/antv/pkg/_antv.data-set-0.10.1/dist/data-set.min.js',
        f2: 'https://gw.alipayobjects.com/os/antv/assets/f2/3.3.7/f2.min.js',
        l7:'https://gw.alipayobjects.com/os/antv/pkg/_antv.l7-1.0.0/dist/l7.min.js',
        'l7-map':'https://webapi.amap.com/maps?v=1.4.8&key=15cd8a57710d40c9b7c0e3cc120f1200&plugin=Map3D',
        'l7-css':'https://gw.alipayobjects.com/os/rmsportal/PqLCOJpqoOUfuPRacUzE.css',
        'turf':'https://npmcdn.com/@turf/turf/turf.min.js',
        'l7-tiff':'https://gw.alipayobjects.com/os/rmsportal/IZjNFjhPTLlgucewdgAi.js',
        'f2-all': 'https://gw.alipayobjects.com/os/antv/assets/f2/3.3.7/f2-all.min.js',
        g6: g6Url + g6Version + '/build/g6.js',
        g6Minimap: g6Url + g6Version + '/build/minimap.js',
        'g6-plugins': g6Url + g6OldVersion + '/build/plugins.js',
        'g6-editor-flow': g6EditorUrl + g6EditorVersion+'/build/flow.js',
        'g6-editor-flow-css': g6EditorUrl + g6EditorVersion+'/build/flow.css',
        'g6-editor-mind': g6EditorUrl + g6EditorVersion+'/build/mind.js',
        'g6-editor-modelFlow': g6EditorUrl + g6EditorVersion+'/build/modelFlow.js',
        'g6-editor-modelFlow-css': g6EditorUrl + g6EditorVersion+'/build/modelFlow.css',
        'g6-editor-modelGraph': g6EditorUrl + g6EditorVersion+'/build/koni.js',
        'g6-editor-modelGraph-css': g6EditorUrl + g6EditorVersion+'/build/koni.css',
        jquery:   'https://gw.alipayobjects.com/os/antv/assets/lib/jquery-3.2.1.min.js',
        katex:    'https://gw.alipayobjects.com/os/antv/assets/lib/katex-0.8.3/katex.min.js',
        katexCss: 'https://gw.alipayobjects.com/os/antv/assets/lib/katex-0.8.3/katex.min.css',
        lodash:   'https://gw.alipayobjects.com/os/antv/assets/lib/lodash-4.17.4.min.js',
        react: 'https://gw.alipayobjects.com/os/antv/assets/lib/react-16.4.0/react.production.min.js',
        'react-dom': 'https://gw.alipayobjects.com/os/antv/assets/lib/react-16.4.0/react-dom.production.min.js',
        hierarchy:   'https://gw.alipayobjects.com/os/antv/pkg/_antv.hierarchy-0.4.0/build/hierarchy.js'
    },
    assets: '/assets',
    base: '/',
    dest: resolve(process.cwd(), './_site'),
    dist: '${assets}/dist/${pkg.version}',
    home: 'zh-cn/index.html',
    pkg: pkg,
    port: 2047,
    src: resolve(process.cwd(), './site'),
    brand: {
        logo: '${assets}/image/logo.svg',
        name: 'AntV'
    },
    screenshots: [
        {
            src: 'zh-cn/g2/3.x/demo',
            dest: '${assets}/dist/${pkg.version}/g2/3.x',
            template: 'g2-demo-standalone'
        },
        {
            src: 'zh-cn/f2/3.x/demo',
            dest: '${assets}/dist/${pkg.version}/f2/3.x',
            template: 'f2-demo-standalone'
        },
        {
            src: 'zh-cn/g6/1.x/demo',
            dest: '${assets}/dist/${pkg.version}/g6/1.x',
            template: 'g6-demo-standalone'
        },
    ],
    indices: [{
        src: 'zh-cn',
        meta: require('./site/zh-cn/data'),
        dest: '${assets}/dist/${pkg.version}/_indexing.zh-cn.json'
    }],
    theme: {
        root: resolve(__dirname, './theme/default'),
        assets: './assets',
        templates: './templates'
    }
};

<!--
template: home
title: G6
keywords:
  - G6
  - Graph
  - Tree
  - Net
  - 图
  - 树
  - 网
description: G6 是专注于图数据的可视化引擎。
featuresCards:
  - img: ${assets}/image/home/features-professional.svg
    title: 专注关系，完备基建
    description: G6 是一个专注于关系数据的、完备的图可视化引擎
  - img: ${assets}/image/home/features-simple.svg
    title: 领域深钻，顶尖方案
    description: 扎根实际具体业务场景、结合业界领先成果，沉淀顶尖解决方案
  - img: ${assets}/image/home/features-powerful.svg
    title: 简单易用，扩展灵活
    description: 精心设计的简单、灵活、高可拓展的接口，满足你的无限创意。
usecases:
  - img: ${assets}/image/home/g6/g6-editor.png
    title: G6-Editor
    description: G6-Editor 是 G6 的上层建筑，是一款具备极致体验的图编辑器。开发者基于它可轻松搭建流程建模、拓扑建模、脑图建模等编辑器。
    relate: true
    name: 文档仓库
    link: https://www.yuque.com/antv/g6-editor
clients:
  - img: ${assets}/image/home/g6/alipay.png
  - img: ${assets}/image/home/g6/aliyun.png
  - img: ${assets}/image/home/g6/cainiao.png
  - img: ${assets}/image/home/g6/dianping.png
  - img: ${assets}/image/home/g6/didi.png
  - img: ${assets}/image/home/g6/geabase.png
  - img: ${assets}/image/home/g6/hema.png
  - img: ${assets}/image/home/g6/tianmao.png
resource:
  jsFiles:
    - ${url.g6}
    - ${url['g6-plugins']}
    - ${url.d3}
-->

<!-- 第一屏，产品简介 -->
<section class="intro">
  <div class="container">
    <div class="header row">
      <div class="col-md-5">
        <h1>G6 图可视化引擎</h1>
        <p class="main-info">G6 是一个简单、易用、完备的图可视化引擎，它在高定制能力的基础上，提供了一系列设计优雅、便于使用的图可视化解决方案。能帮助开发者搭建属于自己的图 图分析 应用或是 图编辑器 应用。</p>
        <a href="{{ products.g6.links.demo.href }}" class="btn btn-primary btn-lg btn-round-link">{{ resource.translate.demo }}</a>
        <a href="https://www.yuque.com/antv/g6/quick-start#_%E5%AE%89%E8%A3%85" class="btn btn-light border btn-lg btn-round-link">{{ resource.translate.downloadAndUse }}</a>
        <iframe class="btn-round-link btn btn-light btn-lg github-btn" src="https://ghbtns.com/github-btn.html?user=antvis&repo=g6&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
      </div>
      <div class="col-md-7">
        <div class="demo-container" id="mountNode" style="background-image: none;padding: 0"></div>
      </div>
    </div>
  </div>
</section>

<!-- 第二屏：产品特性 -->
<section class="features text-center">
  <div class="container">
    <div class="row">
    {% for card in featuresCards %}
      <div class="feature col-md-4 text-center">
        <img src="{{ card.img }}" alt="" width="120" height="120">
        <h5>{{ card.title }}</h5>
        <div class="detail">{{ card.description }}</div>
      </div>
    {% endfor %}
    </div>
  </div>
</section>

<!-- 第三屏：使用案例 -->
<section class="use-cases">
  <div class="container slider">
    {% for card in usecases %}
    <div class="row test">
      <div class="col-md-7">
        <img class="case-image" src="{{ card.img }}" />
      </div>
      <div class="col-md-5 case-content">
        <div class="logo">
          <img src="{{ card.icon }}" />
        </div>
        <div class="title">{{ card.title }}</div>
        <div class="description">{{ card.description }}</div>
        {% if card.relate %}
        <div class="relate">
          <div class="flex">
            <div class="item name">{{ card.name }}</div>
            <div class="item link">
              <a href="{{ card.link }}" target="_blank">查看详情></a>
            </div>
          </div>
        </div>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<!-- 第四屏 使用 app -->
<section class="clients-container">
  <div class="container">
    <div class="title text-center">感谢一路合作的伙伴</div>
    <div class="row">
      {% for card in clients %}
      <div class="col-md-3">
        <img class="client-icon" src="{{ card.img }}" height=67 style="max-height: 67px"/>
      </div>
      {% endfor %}
    </div>
  </div>
</section>



```js-
$.getJSON('/assets/data/g6-index.json', data => {
    const { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } = d3;
      const Template = G6.Plugins['template.maxSpanningForest'];
      const Mapper = G6.Plugins['tool.d3.mapper'];
      const nodeSizeMapper = new Mapper('node', 'weight', 'size', [8, 20], {
        legendCfg: null
      });
      const edgeSizeMapper = new Mapper('edge', 'weight', 'size', [1, 8], {
        legendCfg: null
      });
      const nodeColorMapper = new Mapper('node', 'weight', 'color', ['#E0F5FF', '#BAE7FF', '#91D5FF', '#69C0FF', '#3DA0F2', '#1581E6', '#0860BF'], {
        legendCfg: null
      });
      const force = {
        execute() {
          const nodes = this.nodes;
          const edges = this.edges;
          const graph = this.graph;
          const width = graph.getWidth();
          const height = graph.getHeight();
          const simulation = forceSimulation(nodes)
          .force('charge', forceManyBody().distanceMax(width * 3))
          .force('link', forceLink(G6.Util.clone(edges))
            .id(model => {
              return model.id;
            })
            .strength(1)
          )
          .force('center', forceCenter(width / 2, height / 2))
          .force('collision', forceCollide().radius(model => {
            return model.width / 2 * 1.2;
          }));
          simulation.stop();
          for (let i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
            simulation.tick();
          }
          nodes.forEach(node => {
            delete node.vx;
            delete node.vy;
          });
        }
      };
      const template = new Template({
        fisheye: false,
        interactive: false,
        textDisplay: false,
        node_label: null,
        edgeStyle(model) {
          return {
            stroke: graph.find(model.target).getModel().color,
            strokeOpacity: 0.8
          };
        }
      });
      const graph = new G6.Graph({
        id: 'mountNode',             // dom id
        height: 400,
        layout: {
          processer: force
        },
        plugins: [nodeSizeMapper, nodeColorMapper, edgeSizeMapper, template],
        animate: true,
      });
      const circle = new G6.Layouts['Circle']({
        sort(a, b) {
          return a.weight - b.weight;
        }
      });
      const grid = new G6.Layouts['Grid']({
        sort(a, b) {
          return b.weight - a.weight;
        }
      });
      const dagre = new G6.Layouts['Dagre']({
        nodesep() {
          return graph.getWidth() / 50;
        },
        ranksep() {
          return graph.getHeight() / 25;
        },
        marginx() {
          return graph.getWidth() / 8;
        },
        marginy() {
          return graph.getHeight() / 8;
        },
        useEdgeControlPoint: false,
      });
      const spiral = new G6.Layouts['ArchimeddeanSpiral']({
        sort(a, b) {
          return b.weight - a.weight;
        }
      });
      graph.read(data);
      setInterval(() => {
        if (document.visibilityState === 'visible') {
          let layouts = [circle, dagre, force, grid, spiral];
          layouts = layouts.filter(layout => {
            return layout !== graph.getLayout();
          });
          const layout = layouts[parseInt(layouts.length * Math.random())];
          graph.changeLayout(layout);
        }
      }, 2000);
});
```

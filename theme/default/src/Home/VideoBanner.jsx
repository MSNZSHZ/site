import React from 'react';
import PropTypes from 'prop-types';

class Banner extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
  }
  static defaultProps = {
    className: 'banner',
  }

  constructor(props) {
    super(props);
    this.state = {height: window.innerHeight};
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  onWindowResize() {
    this.setState({ height: window.innerHeight });
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  render() {
    return (
      <div>
      <section id="video-container" style={{ height: this.state.height }}>
        <video
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          controls={false}
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
          src="https://mdn.alipayobjects.com/afts/file/A*grJPTKqmP9QAAAAAAAAAAABjAQAAAQ?bz=antv_site">
        </video>
        <div className="overlay">
          <div className="homepage-title">
            <div style={{fontSize: 52, fontWeight: 'bolder'}}>让数据栩栩如生</div>
            <p style={{marginTop: 20, color: 'rgba(255,255,255,.85)'}}>
              AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单<br />方便、专业可靠、无限可能的数据可视化最佳实践。
            </p>
            <a href="#__products">
              <button className="btn-more">继续了解</button>
            </a>
            <br />
            <div className="yuque-link"> 
              <a href='https://www.yuque.com/?chInfo=ch_antv'  target='_blank' rel='noopener noreferrer' style={{display: 'flex', position: 'relative', left: '-50%'}}>
                <img src='https://gw.alipayobjects.com/zos/basement_prod/14425752-e94c-4644-a60d-ad2c3d688b4a.svg' alt="" style={{marginTop: '-2px', width: '25px'}}/>
                <p style={{color: 'rgba(255,255,255,.85)'}}>&nbsp;&nbsp;语雀，我们都喜欢的文档工具&nbsp;&nbsp;</p>
                <img src='https://gw.alipayobjects.com/zos/basement_prod/fdabf7ad-5452-490b-958a-bb7a752e2a87.svg' alt="" style={{marginBottom: 1}}/>
              </a>
            </div>
          </div>
          <img id="arrow" src="https://gw.alipayobjects.com/zos/rmsportal/cfUeahyjXCvoeUHrZDcE.svg" width="64" height="64" />
        </div>
      </section>
      </div>
    );
  }
}

export default Banner;

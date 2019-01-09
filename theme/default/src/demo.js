import CodeMirror from 'codemirror';
import Clipboard from 'clipboard';
import getQueryVariable from './utils/get-query-variable';
import inView from './utils/in-view';
import './drawer';
import './demo.less';

const $code = $('#code');
const $codeDefault = $('#code-default');
const $codeDark = $('#code-dark');
const $demoPreview = $('#demo-preview');

const theme = getQueryVariable('theme');
const isDark = theme === 'dark';
const $iframeContainer = $('#preview');

if (isDark) {
  $code.val($codeDark.val());
} else {
  $code.val($codeDefault.val());
}

// 顶部走马灯相关
const $prevSlider = $('#slider-prev');
const $nextSlider = $('#slider-next');
const sliderCount = $('#slider .slider-img').length;
let currentSlider  = 0;

function displaySliderNav() {
  if (currentSlider < 7) {
    $prevSlider.hide();
  } else if (currentSlider + 7 > sliderCount) {
    $nextSlider.hide();
  } else {
    $prevSlider.show();
    $nextSlider.show();
  }
}

if ($iframeContainer.hasClass('g2')) {
  $('#slider .slider-img').each(function(index) {
    if ($(this).hasClass('active')) {
      currentSlider = parseInt(index / 7) * 7;
    }
  });
  const slider = $('#slider').lightSlider({
    item: 7,
    slideMove: 7,
    autoWidth: false,
    slideMargin: 20,
    controls: false,
    onSliderLoad: function() {
      $('.lSPager.lSpg').remove();
    }
  });
  if (slider && slider.goToSlide) {
    slider.goToSlide(currentSlider);
    displaySliderNav();
    if (sliderCount > 7) {
      $prevSlider.show();
      $nextSlider.show();
      displaySliderNav();

      $prevSlider.click(function() {
        slider.goToPrevSlide();
        currentSlider -= 7;
        displaySliderNav();
      });

      $nextSlider.click(function() {
        slider.goToNextSlide(true);
        currentSlider += 7;
        displaySliderNav();
      });
    }
  }
}

$('.theme-switching .btn').each(function () {
    const $btn = $(this);
    if (isDark) {
        if ($btn.data('theme') === 'dark') {
            $btn.removeClass('btn-light').addClass('btn-primary');
            $demoPreview.addClass('dark');
        } else {
            $btn.removeClass('btn-primary').addClass('btn-light');
            $demoPreview.removeClass('dark');
        }
    }
});

const htmlEditor = CodeMirror.fromTextArea($code[0], {
    mode: "text/html",
    extraKeys: {
        'Ctrl-Space': 'autocomplete'
    },
    foldGutter: true,
    gutters: [
        'CodeMirror-linenumbers',
        'CodeMirror-foldgutter'
    ],
    lineNumbers: true,
    lineWrapping: false
});

function syncCode() {
    $iframeContainer.html('<iframe></iframe>');
    const iframe = $iframeContainer.find('iframe')[0];
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(htmlEditor.getValue());
    iframeDoc.close();
}

$('header').headroom({
    offset: 0,
    tolerance: 0,
    classes: {
        initial: 'animated',
        pinned: 'slideDown',
        unpinned: 'slideUp'
    }
});

function resizePreview() {
    if (!$iframeContainer.hasClass("f2") && !$iframeContainer.hasClass('g2')) {
      $iframeContainer.height($iframeContainer.width() / 16 * 9);
    }
    syncCode();
}

function resizeG2() {
  if($iframeContainer.hasClass('g2')) {
    var height = window.innerHeight - 310;
    $demoPreview.height(height - 50);
    $('#preview').height(height - 120);
    $('#resize-handler').height(height);
    $('.code-panel').height(height);
    $('.demo-container .border-secondary').height('auto');
  }
  syncCode();
}

resizePreview();
resizeG2();

const $execute = $('#btn-execute');
$execute.click(syncCode);

const $copy = $('#btn-copy');
const $alertCopySuccess = $('#alert-copy-success');
const $alertCopyFail = $('#alert-copy-fail');
const clipboard = new Clipboard($copy[0], {
    text() {
        return htmlEditor.getValue();
    }
});
clipboard.on('success', e => {
    e.clearSelection();
    $alertCopySuccess.fadeIn();
    $alertCopySuccess.fadeOut();
});

clipboard.on('error', e => {
    e.clearSelection();
    $alertCopyFail.fadeIn();
    $alertCopyFail.fadeOut();
});

const $activeListGroupItem = $('.list-group-item.active');
if (!$activeListGroupItem.is(':visible')) {
    $activeListGroupItem[0].scrollIntoView();
}

$(window).resize(resizePreview);

// resizable
const $detail = $('.detail');
const $codePanel = $('.code-panel');
const $menu = $('.menu');

/**
 * 设置代码编辑区的宽度
 * @param codePanelWidth
 */
function setCodePanelWidth(codePanelWidth) {
    $codePanel.css('flex', `0 0 ${codePanelWidth < 300 ? 300 : codePanelWidth}px`);
}

/**
 * 缓存代码编辑区的宽度到本地存储中，方便下次刷新页面后复用，以提升体验
 * @param codePanelWidth
 */
function cacheCodePanelWidth(codePanelWidth) {
    localStorage.setItem('codePanelWidth', codePanelWidth);
}

/**
 * 获取本地存储中的代码编辑区的宽度
 * @returns {string | null | number}
 */
function getCacheCodePanelWidth() {
    const defaultWidth = 432;
    return localStorage.getItem('codePanelWidth') || defaultWidth;
}

const codePanelWidthFromCache = getCacheCodePanelWidth();
setCodePanelWidth(codePanelWidthFromCache);

$detail.resizable({
    handleSelector: '#resize-handler',
    resizeWidthFrom: 'right',
    resizeHeight: false,
    onDragStart() {
        $detail.css('pointer-events', 'none');
        $detail.css('cursor', 'col-resize');
        $codePanel.find('.CodeMirror-gutter-elt').css('cursor', 'col-resize');
    },
    onDrag(e, $el, newWidth) {
        const winWidth = $(window).width();
        if (newWidth < 486) {
            newWidth = 486;
        }
        const codePanelWidth = winWidth - $menu.width() - newWidth;
        setCodePanelWidth(codePanelWidth);
        cacheCodePanelWidth(codePanelWidth);
        $codePanel.css('flex', `0 0 ${codePanelWidth < 300 ? 300 : codePanelWidth}px`);
    },
    onDragEnd() {
        $detail.css('pointer-events', 'auto');
        $detail.css('cursor', 'default');
        $codePanel.find('.CodeMirror-gutter-elt').css('cursor', 'default');
        resizePreview();
    },
});

const $collapseExpand = $('.collapse-expand');
$collapseExpand.click(() => {
    if ($menu.hasClass('collapsed')) {
        $menu.removeClass('collapsed');
        $collapseExpand.find('.iconfont').removeClass('icon-right').addClass('icon-left');
    } else {
        $menu.addClass('collapsed');
        $menu.find('.collapse.show').removeClass('show');
        $menu.find('.menu-header').addClass('collapsed');
        $collapseExpand.find('.iconfont').removeClass('icon-left').addClass('icon-right');
    }
    resizePreview();
});
$menu.find('.menu-inner').click(() => {
    if ($menu.hasClass('collapsed')) {
        // e.preventDefault();
        // e.stopPropagation();
        $menu.removeClass('collapsed');
        $collapseExpand.find('svg').html('<use xlink:href="#_si-left"></use>');
        resizePreview();
    }
});
const $currentMenuItem = $('.list-group-item.active');
if (!inView($currentMenuItem)) {
    $currentMenuItem[0].scrollIntoView();
}


const userAgent = navigator.userAgent;
const mobile = !!userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);

if ($iframeContainer.hasClass('f2')) {
    if (mobile) {
        $('.mobile-wrapper').height(265);
        $('.mobile-wrapper .content').hide();
        $iframeContainer.css('top', -30);
    } else {
        $('.mobile-wrapper').height(590);
        $('.mobile-wrapper .content').show();
        $iframeContainer.css('top', 82);
    }
}

$('#btn-fullscreen').click(function() {
  const text = $(this).text();
  if (~text.indexOf('全屏')) {
    $(this).html('<span class="iconfont icon-exitfullscreen"></span> 还原');
    $('#code-container').css({
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 10,
    });
    const height = window.innerHeight;
    $demoPreview.css({
      height: height,
      marginLeft: 0
    });
    $('#preview').height(height - 60);
    $('#resize-handler').height(height);
    $('.code-panel').css({
      height: height,
      paddingRight: 0,
    });
  } else {
    $(this).html('<span class="iconfont icon-fullscreen"></span> 全屏');
    $('#code-container').css({ position: 'relative', zIndex: 0 });
    if ($iframeContainer.hasClass('g2')) {
      $demoPreview.css({ marginLeft: 48 });
      $('.code-panel').css({ paddingRight: 48 });
    }
    resizeG2();
  }
  syncCode();
});




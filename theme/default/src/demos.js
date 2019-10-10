import $ from 'jquery';
import tocbot from 'tocbot';
import getQueryVariable from './utils/get-query-variable';
import './demos.less';

const theme = getQueryVariable('theme');
const isDark = theme === 'dark';
const RECOMMEND = '仅看推荐';
const SHOW_SEARCH = '展开筛选';
const HIDE_SEARCH = '收起筛选';
const selectedTags = {};
const $search = $('#search-container');
const tags = {};
let expansion = false;
let recommendOnly = false;

function showRecommend($card) {
  if (recommendOnly) {
    if ($card.attr('data-recommend') === 'true') {
      $card.show();
    } else {
      $card.hide();
      return false;
    }
  } else {
    $card.show();
  }
  return true;
}

function filterCategory(cards, keywords) {
  let flag = false, hasMatch = false, $card, tags;
  cards.each(function () {
    $card = $(this);
    if (keywords.length == 0) {
      hasMatch = showRecommend($card) || hasMatch;
    } else {
      tags = $card.attr('data-tags') === '' ? null : $card.attr('data-tags').split(',');
      if (!tags) {
        $card.hide();
      } else {
        for (var i = 0; i < tags.length; i++) {
          for (var j = 0; j < keywords.length; j++) {
            if (tags[i] === keywords[j]) {
              flag = true;
              break;
            }
          }
          if (flag) {
            break;
          }
        }
        if (flag) {
          hasMatch = showRecommend($card) || hasMatch;
        } else {
          $card.hide();
        }
        flag = false;
      }
    }
  });
  return hasMatch;
}

function filterDemos(keywords) {
  let $card, tags, flag = false, hasMatch = false;
  $('#categories h5').each(function () {
    const $cat = $(this);
    const cards = $cat.next('.row').find('.card-container');
    flag = filterCategory(cards, keywords);
    hasMatch = flag || hasMatch;
    if (!flag) {
      $cat.hide();
    } else {
      $cat.show();
    }
  });
  $('.card-container').each(function () {
    $card = $(this);
    if (keywords.length == 0) {
      hasMatch = showRecommend($card) || hasMatch;
    } else {
      tags = $card.attr('data-tags') === '' ? null : $card.attr('data-tags').split(',');
      if (!tags) {
        $card.hide();
      } else {
        for (var i = 0; i < tags.length; i++) {
          for (var j = 0; j < keywords.length; j++) {
            if (tags[i] === keywords[j]) {
              flag = true;
              break;
            }
          }
          if (flag) {
            break;
          }
        }
        if (flag) {
          hasMatch = showRecommend($card) || hasMatch;
        } else {
          $card.hide();
        }
        flag = false;
      }
    }
  });
  if (!hasMatch) {
    $('#noResult').show();
  } else {
    $('#noResult').hide();
  }
}

$('.theme-switching .btn').each(function () {
  const $btn = $(this);
  if (isDark) {
    if ($btn.data('theme') === 'dark') {
      $btn.removeClass('btn-light').addClass('btn-primary');
      $('a.screenshot-container').each(function () {
        const $link = $(this);
        const href = $link.attr('href');
        $link.attr('href', `${href}?theme=dark`);
      });
    } else {
      $btn.removeClass('btn-primary').addClass('btn-light');
      $('a.screenshot-container').each(function () {
        const $link = $(this);
        const href = $link.attr('href');
        $link.attr('href', href.replace('?theme=dark', ''));
      });
    }
  }
});

tocbot.init({
  tocSelector: '.toc',
  contentSelector: '.demos .content',
  headingSelector: 'h1, h2, h3, h4, h5, h6',
  collapseDepth: 4
});

$('.demos').css({ minHeight: window.innerHeight - 64 });

const $tocContainer = $('.toc-container');
$('header').headroom({
  offset: 0,
  tolerance: 0,
  classes: {
    initial: 'animated',
    pinned: 'slideDown',
    unpinned: 'slideUp'
  },
  onPin() {
    $tocContainer.css({
      height: 'calc(100% - 120px)',
    });
  },
  onUnpin() {
    $tocContainer.css({
      height: 'calc(100% - 48px)',
    });
  }
});

$('header').css({ position: 'fixed', width: '100%' });
// 获取
if ($search.length) {
  let currentTag = '';
  $('#search-container>div').each(function() {
    $(this).find('.tag').each(function() {
      const $tag = $(this);
      if ($tag.hasClass('root-tag')) {
        currentTag = $tag.attr('data-text');
        tags[currentTag] = [currentTag];
      } else {
        tags[currentTag].push($tag.attr('data-text'));
      }
    });
  });
  $('#toggleSearch').click(function () {
    if (expansion) {
      $search.addClass('mini');
      $('#toggleSearch').text(SHOW_SEARCH);
      $('.hide-search').removeClass('hide-search').addClass('show-search');
    } else {
      $search.removeClass('mini');
      $('#toggleSearch').text(HIDE_SEARCH);
      $('.show-search').removeClass('show-search').addClass('hide-search');
    }
    expansion = !expansion;
  });
}

$('.tag').on('click', function (e) {
  var ele = e.target;
  if (ele.classList.value.indexOf('tag') < 0) {
    ele = ele.parentNode;
  }
  const tag = $(ele);
  const data = tag.attr('data-text');
  if (data === RECOMMEND) {
    recommendOnly = !recommendOnly;
  }
  if (tag.hasClass('selected')) {
    tag.removeClass('selected');
    if (data !== RECOMMEND) {
      delete selectedTags[data];
      if (tag.hasClass('root-tag')) {
        tags[tag.attr('data-text')].forEach(function(item) {
          delete selectedTags[item];
        });
      }
    }
  } else {
    tag.addClass('selected');
    if (data !== RECOMMEND) {
      selectedTags[data] = true;
      if (tag.hasClass('root-tag')) {
        tags[tag.attr('data-text')].forEach(function(item) {
          selectedTags[item] = true;
        });
      }
    }
  }
  filterDemos(Object.keys(selectedTags));
});


$('.screenshot').each(function () {
  const $img = $(this);
  if (isDark) {
    $('.demos').addClass('dark');
    $img.attr('data-src', $img.data('dark'));
    $img.attr('src', `${__meta.assets}/image/screenshot-placeholder-dark.png`);
  } else {
    $img.attr('data-src', $img.data('default'));
    $img.attr('src', `${__meta.assets}/image/screenshot-placeholder.png`);
  }
});

$('.lazyload').lazyload();

function adjustScreenshotsSize() {
  $('.screenshot').each(function () {
    const $screenshot = $(this);
    if (!$('.demos').hasClass('f2')) {
      if ($screenshot.attr('data-recommend') === 'true') {
        $screenshot.height($screenshot.width() / 16 * 9);
      } else {
        $screenshot.height($screenshot.width() / 16 * 9 + 38);
      }
    } else {
      $screenshot.height($screenshot.width() * 0.535);
    }
  });
  $tocContainer.height($('.demos').height());
}

adjustScreenshotsSize();
$('.toc-link').each(function () {
  const $cat = $(this);
  const style = 'iconfont ' + $('#_' + $cat.text()).attr('data-icon');
  $cat.append('<span class="' + style + '"/>');
});
$(window).resize(adjustScreenshotsSize);


(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/zh-CN', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {};
    global.ELEMENT.lang.zhCN = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: '纭畾',
        clear: '娓呯┖'
      },
      datepicker: {
        now: '姝ゅ埢',
        today: '浠婂ぉ',
        cancel: '鍙栨秷',
        clear: '娓呯┖',
        confirm: '纭畾',
        selectDate: '閫夋嫨鏃ユ湡',
        selectTime: '閫夋嫨鏃堕棿',
        startDate: '寮€濮嬫棩鏈�',
        startTime: '寮€濮嬫椂闂�',
        endDate: '缁撴潫鏃ユ湡',
        endTime: '缁撴潫鏃堕棿',
        prevYear: '鍓嶄竴骞�',
        nextYear: '鍚庝竴骞�',
        prevMonth: '涓婁釜鏈�',
        nextMonth: '涓嬩釜鏈�',
        year: '骞�',
        month1: '1 鏈�',
        month2: '2 鏈�',
        month3: '3 鏈�',
        month4: '4 鏈�',
        month5: '5 鏈�',
        month6: '6 鏈�',
        month7: '7 鏈�',
        month8: '8 鏈�',
        month9: '9 鏈�',
        month10: '10 鏈�',
        month11: '11 鏈�',
        month12: '12 鏈�',
        // week: '鍛ㄦ',
        weeks: {
          sun: '鏃�',
          mon: '涓€',
          tue: '浜�',
          wed: '涓�',
          thu: '鍥�',
          fri: '浜�',
          sat: '鍏�'
        },
        months: {
          jan: '涓€鏈�',
          feb: '浜屾湀',
          mar: '涓夋湀',
          apr: '鍥涙湀',
          may: '浜旀湀',
          jun: '鍏湀',
          jul: '涓冩湀',
          aug: '鍏湀',
          sep: '涔濇湀',
          oct: '鍗佹湀',
          nov: '鍗佷竴鏈�',
          dec: '鍗佷簩鏈�'
        }
      },
      select: {
        loading: '鍔犺浇涓�',
        noMatch: '鏃犲尮閰嶆暟鎹�',
        noData: '鏃犳暟鎹�',
        placeholder: '璇烽€夋嫨'
      },
      cascader: {
        noMatch: '鏃犲尮閰嶆暟鎹�',
        loading: '鍔犺浇涓�',
        placeholder: '璇烽€夋嫨'
      },
      pagination: {
        goto: '鍓嶅線',
        pagesize: '鏉�/椤�',
        total: '鍏� {total} 鏉�',
        pageClassifier: '椤�'
      },
      messagebox: {
        title: '鎻愮ず',
        confirm: '纭畾',
        cancel: '鍙栨秷',
        error: '杈撳叆鐨勬暟鎹笉鍚堟硶!'
      },
      upload: {
        deleteTip: '鎸� delete 閿彲鍒犻櫎',
        delete: '鍒犻櫎',
        preview: '鏌ョ湅鍥剧墖',
        continue: '缁х画涓婁紶'
      },
      table: {
        emptyText: '鏆傛棤鏁版嵁',
        confirmFilter: '绛涢€�',
        resetFilter: '閲嶇疆',
        clearFilter: '鍏ㄩ儴',
        sumText: '鍚堣'
      },
      tree: {
        emptyText: '鏆傛棤鏁版嵁'
      },
      transfer: {
        noMatch: '鏃犲尮閰嶆暟鎹�',
        noData: '鏃犳暟鎹�',
        titles: ['鍒楄〃 1', '鍒楄〃 2'],
        filterPlaceholder: '璇疯緭鍏ユ悳绱㈠唴瀹�',
        noCheckedFormat: '鍏� {total} 椤�',
        hasCheckedFormat: '宸查€� {checked}/{total} 椤�'
      }
    }
  };
  module.exports = exports['default'];
});
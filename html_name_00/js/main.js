// jsを記述する際はここに記載していく
function ScrollWindow(elem) {
    var element = document.getElementById(elem);
    var rect = element.getBoundingClientRect();
    var elemtop = rect.top + window.pageYOffset;
    document.documentElement.scrollTop = elemtop - 150;
  }

function submitbtn() {
    // 「OK」ボタン押下時
    if (confirm('入力内容を送信しますか？')) {
        alert('OK');
    }
    // 「キャンセル」ボタン押下時
    else {
        alert('キャンセル');
    }
}
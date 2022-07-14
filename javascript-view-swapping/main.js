var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', clickTab);

function clickTab(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabList.length; i++) {
      if (event.target === $tabList[i]) {
        $tabList[i].setAttribute('class', 'tab active');
      } else {
        $tabList[i].setAttribute('class', 'tab');
      }
    }

    var dataView = event.target.getAttribute('data-view');
    for (let i = 0; i < $viewList.length; i++) {
      if (dataView === $viewList[i].getAttribute('data-view')) {
        $viewList[i].setAttribute('class', 'view');
      } else {
        $viewList[i].setAttribute('class', 'view hidden');
      }
    }
  }
}

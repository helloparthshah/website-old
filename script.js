var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function () {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function ($el) {
  $el.addEventListener('click', function () {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function ($btn) {
  console.log($btn);
  $btn.addEventListener('click', function (e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});

div = document.getElementById("projects");

fetch('https://api.github.com/users/helloparthshah/repos?per_page=100')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].has_pages) {
        // add at the end of div
        div.innerHTML += `<a href="https://helloparthshah.github.io/${data[i].name}" style="text-decoration: none;">
        <div class="el__text">
          ${data[i].name}
        </div>
    </a>`;
      }
    }
  });
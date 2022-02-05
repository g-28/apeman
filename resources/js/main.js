/*Main discord alert*/
const delay = 5000;
$('#discord').click(function(){
  $('.alert').addClass("show");
  $('.alert').removeClass("hide");
  $('.alert').addClass("showAlert");
  setTimeout(function(){
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
  },delay);
});
$('.close-btn').click(function(){
  $('.alert').removeClass("show");
  $('.alert').addClass("hide");
});


/*test alert */
$('').click(function(){
  
  $('.alert1').addClass("show1");
  $('.alert1').removeClass("hide1");
  $('.alert1').addClass("showAlert1");
  setTimeout(function(){
    $('.alert1').removeClass("show1");
    $('.alert1').addClass("hide1");
  },delay);
});
$('.close-btn1').click(function(){
  $('.alert1').removeClass("show1");
  $('.alert1').addClass("hide1");
});


/*Footer alert and drags up */
$('#footer').click(function(){
  window.scrollTo({top: 0, behavior: 'smooth'});
  $('.alert').addClass("show");
  $('.alert').removeClass("hide");
  $('.alert').addClass("showAlert");
  setTimeout(function(){
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
  },delay);
});
$('.close-btn').click(function(){
  $('.alert').removeClass("show");
  $('.alert').addClass("hide");
});


/*Darkmode */
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);


/*Table sorter */
function reverseTable() {
  $('tbody').each(function(elem, index) {
    const arr = $.makeArray($('tr', this).detach());
    arr.reverse();
    $(this).append(arr);
  });
};

/*popup msg */
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block";
    }, 500)
}

close.addEventListener('click', () => {
    popup.style.display = "none";
})

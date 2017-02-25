// /stripe_drawer.onclick = function() {
	
  // stripe.classList.add('animate');
  // stripe_kol04_kol05.classList.add('animate');
  
	  
// };


/ включение и выключение кнопки stripe_drawer - сддвигает при нажатии и при повторном снова обратно / 
  stripe_drawer.onclick = function() {
  if (stripe.classList.contains("animate"))
    stripe.classList.remove("animate");
  else
    stripe.classList.add("animate");

if (stripe_kol04_kol05.classList.contains("animate"))
    stripe_kol04_kol05.classList.remove("animate");
  else
    stripe_kol04_kol05.classList.add("animate");
}

// <!-- Скрипт, вызывающий модальное окно после загрузки страницы -->

  $(document).ready(function() {
    $("#myModalBox").modal('show');
  });
/*===========================================
= Mobile Menu
============================================*/

// SubMenu Dropdown Toggle
if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
  $('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
}

// Mobile Nav Hide Show
if ($('.tgmobile__menu').length) {
  var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
  $('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);

  // Dropdown Button
  $(document).on('click', '.tgmobile__menu li.menu-item-has-children .dropdown-btn', function () {
    $(this).toggleClass('open');
    $(this).prev('ul').slideToggle(300);
  });

  // Menu Toggle Btn
  $(document).on('click', '.mobile-nav-toggler', function () {
    $('body').addClass('mobile-menu-visible');
  });

  // Menu Toggle Btn
  $(document).on('click', '.tgmobile__menu-backdrop, .tgmobile__menu .close-btn', function () {
    $('body').removeClass('mobile-menu-visible');
  });
}


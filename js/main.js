// =========================================================
// Green Fredericton — shared scripts
// Only uses JavaScript and jQuery from Chapter 14:
//   $(document).ready(), click(), attr(), css(), html(),
//   var, if / else, functions, return false
// =========================================================

$(document).ready(function() {

  // ---------- 1. Mobile burger menu ----------
  // Bulma opens the mobile menu when the burger and the menu
  // both have the "is-active" class. We swap the class with attr().
  $('.navbar-burger').click(function() {
    if ($('#mainNav').attr('class') == 'navbar-menu') {
      $('.navbar-burger').attr({ class: 'navbar-burger is-active' });
      $('#mainNav').attr({ class: 'navbar-menu is-active' });
    } else {
      $('.navbar-burger').attr({ class: 'navbar-burger' });
      $('#mainNav').attr({ class: 'navbar-menu' });
    }
    return false;
  });

  // ---------- 2. Shop details modal (shops.html) ----------
  // Each "View details" link copies that shop's hidden details
  // into the modal, then opens the modal.
  $('#riverbend-btn').click(function() {
    $('#shop-modal-title').html('Riverbend Roasters');
    $('#shop-modal-body').html($('#riverbend-info').html());
    $('#shop-modal').attr({ class: 'modal is-active' });
    return false;
  });
  $('#secondspin-btn').click(function() {
    $('#shop-modal-title').html('Second Spin Thrift');
    $('#shop-modal-body').html($('#secondspin-info').html());
    $('#shop-modal').attr({ class: 'modal is-active' });
    return false;
  });
  $('#hillside-btn').click(function() {
    $('#shop-modal-title').html('Hillside Greens');
    $('#shop-modal-body').html($('#hillside-info').html());
    $('#shop-modal').attr({ class: 'modal is-active' });
    return false;
  });
  $('#refill-btn').click(function() {
    $('#shop-modal-title').html('The Refill Station');
    $('#shop-modal-body').html($('#refill-info').html());
    $('#shop-modal').attr({ class: 'modal is-active' });
    return false;
  });
  $('#maple-btn').click(function() {
    $('#shop-modal-title').html('Maple &amp; Mend');
    $('#shop-modal-body').html($('#maple-info').html());
    $('#shop-modal').attr({ class: 'modal is-active' });
    return false;
  });
  $('#cedar-btn').click(function() {
    $('#shop-modal-title').html('Cedar Loaf Bakery');
    $('#shop-modal-body').html($('#cedar-info').html());
    $('#shop-modal').attr({ class: 'modal is-active' });
    return false;
  });

  // Close the modal: dark background, X button, or Close button
  $('.modal-background').click(function() {
    $('#shop-modal').attr({ class: 'modal' });
  });
  $('.modal-close-btn').click(function() {
    $('#shop-modal').attr({ class: 'modal' });
  });

  // ---------- 3. Shop category filter (shops.html) ----------
  $('#filter-all').click(function() {
    $('.shop').css('display', 'block');
    return false;
  });
  $('#filter-cafe').click(function() {
    $('.shop').css('display', 'none');
    $('.cafe').css('display', 'block');
    return false;
  });
  $('#filter-thrift').click(function() {
    $('.shop').css('display', 'none');
    $('.thrift').css('display', 'block');
    return false;
  });
  $('#filter-market').click(function() {
    $('.shop').css('display', 'none');
    $('.market').css('display', 'block');
    return false;
  });
  $('#filter-refill').click(function() {
    $('.shop').css('display', 'none');
    $('.refill').css('display', 'block');
    return false;
  });
  $('#filter-bakery').click(function() {
    $('.shop').css('display', 'none');
    $('.bakery').css('display', 'block');
    return false;
  });

  // ---------- 4. Close button on the form's success message ----------
  $('#form-success .delete').click(function() {
    $('#form-success').css('display', 'none');
  });

}); // end ready


// ---------- 5. Contact form handling (contact.html) ----------
// Called by: <form onsubmit="return validateForm();">  (Section 14.9)
// The browser checks the "required" fields and the email format
// first (HTML5 form controls, Chapter 9).
function validateForm() {
  if (document.forms[0].userName.value == "") {
    alert("Name field cannot be empty.");
    return false;
  } // end if

  if (document.forms[0].userMessage.value == "") {
    alert("Please write a message.");
    return false;
  } // end if

  // There's no server-side script yet, so instead of submitting
  // we show a Bulma success notification.
  $('#success-name').html(document.forms[0].userName.value);
  $('#form-success').css('display', 'block');
  return false;
} // end function validateForm

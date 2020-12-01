var element = document.getElementById('form-header__phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);

var elem = document.getElementById('aplication__phone-inp');
var maskOptionsTwo = {
  mask: '+{7}(000)000-00-00'
};
var maskTwo = IMask(elem, maskOptionsTwo);

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


const cols  = document.querySelector('.aplication__room-inp');

const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');
const calcItem = document.querySelector('.cal-extra__main');
const calcList = document.querySelector('.cal-extra__list');
const roomMobSelect = document.querySelector('.type_uporki');
const typeMobSelect = document.querySelector('.sel-room');
const includPlace = document.querySelector('.includes__place');
const includBlock = document.querySelector('.includes__block');
const includBtn = document.querySelector('.includes__mob-btn');
const includList = document.querySelector('.includes__list');
const includTitle = document.querySelector('.includes__title');

const includStandart = document.querySelector('.includes__standart');
const includGeneral = document.querySelector('.includes__general');
const includAfter = document.querySelector('.includes__after');
const includChemic = document.querySelector('.includes__che');
const includesInp = document.querySelectorAll('.includes__inp');

const incKitchen = document.getElementById('includes__kitchen');
const incBbathroom = document.getElementById('includes__bathroom');
const incRooms = document.getElementById('includes__rooms');
const placeInp = document.querySelectorAll('.includes__place-inp');
const lists = document.querySelectorAll('.includes__list');
const calculatorInr = document.querySelector('.calculator__inr');
const calTtype = document.querySelector('.cal-type');
const areal = document.querySelector(".apartment__area-inp");
const arealqq = document.querySelector('.apartment__quantity-inp');



const stk = document.querySelector('.stk');
const stb = document.querySelector('.stb');
const str = document.querySelector('.str');

const gnk = document.querySelector('.gnk');
const gnb = document.querySelector('.gnb');
const gnr = document.querySelector('.gnr');

const chk = document.querySelector('.chk');
const chb = document.querySelector('.chb');
const chr = document.querySelector('.chr');

const prk = document.querySelector('.prk');
const prb = document.querySelector('.prb');
const prr = document.querySelector('.prr');

const openBurgerMenu = () => {
  headerNav.classList.toggle('active-menu');
  burger.classList.toggle('active-burger');
};
const openList = () => {
  calcList.classList.toggle('active-calc__list');
  calcItem.classList.toggle('active-calc__item');
};
function opp(){
  calTtype.classList.toggle('active-cal-type');
  calculatorInr.classList.toggle('active-ccc');
}

function opp2(){
  document.querySelector('.calculator__sel').classList.toggle('active-drop2header');
  document.querySelector('.calculator__sel-list').classList.toggle('active-drop2');
}

const openSelectType = () => {
  includBlock.classList.toggle('active-includBlock');
  roomMobSelect.classList.toggle('active-room');
};
const openSelectRoom = () => {
  includPlace.classList.toggle('active-includPlace');
  typeMobSelect.classList.toggle('active-type');
};
const openincludBtn = () => {
  includList.classList.toggle('active-includList');
  includTitle.classList.toggle('active-includTitle');  
  
};


const clickPlace = (e) => {    
  if (e.target.classList.contains('includes__inp')) {
    setFirstPlace();
  }
  
  var places =  $('.includes__place');

  if (includesInp[0].checked) {
    checkRadioStandart(stk,stb,str); 
    includTitle.innerHTML = 'Стандартная уборка:';   
    roomMobSelect.innerHTML = 'Стандартная уборка';   
    places.show();
  } else if (includesInp[1].checked){
    checkRadioStandart(gnk,gnb,gnr); 
    includTitle.innerHTML = 'Генеральная уборка:'; 
    roomMobSelect.innerHTML = 'Генеральная уборка'; 
    places.show();
  } else if (includesInp[2].checked){
    checkRadioStandart(prk,prb,prr); 
    includTitle.innerHTML = 'Уборка после ремонта:'; 
    roomMobSelect.innerHTML = 'Уборка после ремонта'; 
    places.show();
  }else if (includesInp[3].checked){
    checkRadioStandart(chk,chb,chr); 
    includTitle.innerHTML = 'Химичистка мебели:'; 
    roomMobSelect.innerHTML = 'Химичистка мебели'; 
    places.hide();
  }
};

const setFirstPlace = () => {
  $(placeInp[0]).prop('checked', true);
}

$('.includes__place-label').click(function(){
  $('.includes__place ').removeClass('active-includPlace');
  $('.sel-room').removeClass('active-type');
})
$('.includes__label').click(function() {
  $('.includes__block ').removeClass('active-includBlock');
  $('.sel-type').removeClass('active-room');
})

function checkRadioStandart (a,b,c) {
  if (placeInp[0].checked ) {
    includActive(a);    
    typeMobSelect.innerHTML = 'Кухня'; 
  } else if (placeInp[1].checked ){   
    includActive(b);
    typeMobSelect.innerHTML = 'Санузел'; 
  } else if (placeInp[2].checked) {
    includActive(c);  
    typeMobSelect.innerHTML = 'Комнаты и коридоры';  
  }
}
function includActive(e) {
  for (let list of lists){
    list.classList.remove('active');
    list.classList.remove('active-includList');
    e.classList.add('active');
    e.classList.add('active-includList');
  }  
}
let screen = window.matchMedia("(max-width:460px)");
if (screen.matches){ 
  // cols.value= null;
}


ymaps.ready(initFooterMap);

function initFooterMap(){
    var myMap = new ymaps.Map('footer-map', {
        center: [55.763713, 37.520211],
        zoom: 12,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark([55.770081, 37.605104], {
      balloonContent: 'Телефон: <a href="tel:89295238752" style="color: #59B130;">8 (929) 523-87-52</a>',
      iconCaption: 'Clever - уборка квартир и домов!'
    }, {
      preset: 'islands#greenIcon',
    });

  myMap.geoObjects.add(myPlacemark); 
}



$(document).ready(function() {
  $('[data-add-count]').on('click', function() {
      var input =  $(this).parent().find('[data-count-input]')
        , num = parseInt(input.val());

      num ? input.val(num + 1) : '';
  });

  $('[data-remove-count]').on('click', function() {
      var input =  $(this).parent().find('[data-count-input]')
        , num = parseInt(input.val());

      num && num > 1 ? input.val(num - 1) : '';
  });

  $('#form-header__area').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
  });

  function calculator() {
    var cleaningTotal = $('#cleaning-total')
      , roomsTotal = $('#calc-from__quantity')
      , cleaningArea = $('#calc-from__area')
      , cleaningType = $('#calc-from__type')
      , cleaningTypeValue = 'general'
      , servicesList = $('.calc-form__services-list')
      , finishTotal = $('.calc-from__totle');

    function getPrice(num) {
      return num ? num + 'руб.' : '0 руб.';
    }

    function getService(id, name, prices, autoCount) {
      let quantity = !autoCount ? '<div class="cover__quantity"><span class="rem"></span><input type="text" name="cover_input' + id + '" class="cover__input" value="1"><span class="add"></span></div>' : '<div class="cover__quantity"></div>',
      countData = autoCount ? 'data-cover-count-area="' + prices.startPrice + '"' : '';
      let price = prices.price;

      if ((cleaningTypeValue == 'general' || cleaningTypeValue == 'afterRepair') && ids.indexOf(id) != -1) {
        price = 'Включено';
      }

      return '<div class="calc-from__cover" data-id="' + id + '"' + countData + '>'+
      '<div class="cover__ok"></div>'+
      '<p class="cover__name">' + name + '</p>'+ quantity + 
      '<p class="cover__price">' + price + '</p>'+
    '</div>';
    }

    var prices = {
      standard: {
        studio: 4000,
        1: 5000,
        2: 6000,
        3: 7000,
        4: 8000,
        5: 9000
      },
      general: {
        studio: 6000,
        1: 8000,
        2: 10000,
        3: 12000,
        4: 14000,
        5: 16000
      },
      afterRepair: {
        studio: 7000,
        1: 9000,
        2: 11000,
        3: 13000,
        4: 15000,
        5: 17000
      }
    };

    var ids = ['cl2', 'cl3', 'cl5', 'cl8', 'cl9', 'cl10', 'cl11'];

    function calc() {
      var rooms = $('.apartment__quantity-inp').val()
        , type = $('.cal-type').find('input:checked').val()
        , services = servicesList.find('.calc-from__cover');

      var price = prices[type][rooms] ? prices[type][rooms] : '0';

      if (price) {
        cleaningTotal.text(getPrice(price));
        roomsTotal.val(rooms);
      }

      for (var i = 0; i < services.length; i++) {
        var item = $(services[i])
          , itemPrice = parseInt(item.find('.cover__price').text())
          , id = item.data('id');

        if (cleaningTypeValue == 'general' || cleaningTypeValue == 'afterRepair') {
            if (ids.indexOf(id) != -1) {
              itemPrice = 0;
            }
        }

        if (itemPrice) {
          price = price + itemPrice;
        }
      }

      finishTotal.html(getPrice(price));
    }

    function serviceItemActions(item) {
      var input = item.find('.cover__input')
        , price = item.find('.cover__price')
        , priceValue = parseInt(price.text());

        item.find('.add').on('click', function() {
            var num = parseInt(input.val());

            if (num) {
              let quantity = num + 1;

              input.val(quantity);
              if (priceValue) {
                price.html(getPrice(priceValue * quantity));
                calc();
              }
            }
        });

        item.find('.rem').on('click', function() {
            var num = parseInt(input.val());

            if (num && num > 1) {
              let quantity = num - 1;

              input.val(quantity);
              if (priceValue) {
                price.html(getPrice(priceValue * quantity));
                calc();
              }
            }
        });
    }

    function updateAutoCount(num) {
      var items = servicesList.find('[data-cover-count-area]');

      for (var i = 0; i < items.length; i++) {
        var item = $(items[i])
          , price = item.data('cover-count-area');

        if (price && num) {
          price = price * num;
          item.find('.cover__price').html(getPrice(price));
        }
      }
    }

    function setRooms(e, num) {
      if (e && num) {
        num < 1 ? num = 1 : '';
        num > 5 ? num = 5 : '';
        !num ? num = 1 : '';

        e.val(num);

        calc();
      }
    }
    
    $('.apartment__quantity-inp').on('input', function() { 
      var input = $(this)
        , num = parseInt(input.val());

      setRooms(input, num);
    });

    $('.calculator__sel-list').find('input[type=radio]').on('input', function() {
      var input = $('.apartment__quantity-inp')
        , num = parseInt($(this).val());

      $('.calculator__sel').html(num + ' комнатная');

      setRooms(input, num);
      opp2();
    });

    $('.apartment__area-inp').on('input', function() { 
      var num = parseInt($(this).val());

      if (num) {
        if (num < 100) {
          cleaningArea.val(num);
          updateAutoCount(num);
        } else {
          $(this).val(99);
          cleaningArea.val(99);
          updateAutoCount(num);
        }
        calc();
      }

    });

    function clearServices() {
      servicesList.html('');
      $('.cal-extra__list').find('li.cal-extra__item input[type=checkbox]').prop('checked', false);
    }

    function setStandartServices() {
      var list = $('.cal-extra__list');

      for (var i = 0; i < ids.length; i++) {
          var input = list.find('li.cal-extra__item #' + ids[i]);
          
          input.prop('checked', true);

          selectService(input);
      }
    }

    function selectService(e) {
      var t = e.parent()
        , name = t.find('.cal-extra__text_name').text()
        , price = parseInt(t.find('.cal-extra__text_price').text())
        , startPrice = price
        , id = e.attr('id')
        , countArea = e.data('count-area');

        if (countArea) {
          let area = cleaningArea.val();
          price = area ? price * area : price;
        }

      if (name) {
        if (e.is(':checked')) {
          
          if (!servicesList.find('[data-id=' + id + ']').length) {
            var prices = {
              'price': price ? getPrice(price) : 'Договорная',
              'startPrice': startPrice
            };
            var service = getService(id, name, prices, countArea ? true : false);
  
            servicesList.append(service);

            if (!countArea) {
              var serviceItem = servicesList.find('[data-id=' + id + ']');

              serviceItemActions(serviceItem);
            }
          }

        } else {
          var item = servicesList.find('[data-id=' + id + ']');

          if (item.length) {
            item.remove();
          }

        }
        calc();
      }
    }

    $(document).on('click', '.cal-extra__list > li.cal-extra__item input[type=checkbox]', function() {
      selectService($(this));
    });

    $('.cal-type').find('input[type=radio]').on('input', function() {
      if ($(this).is(':checked')) {
        var type = $(this).val()
          , name = false;

        switch (type) {
          case 'standard':
            name = 'Стандартная';
            break;
          case 'general':
            name = 'Генеральная';
            break;
          case 'afterRepair':
            name = 'После ремонта';
            break;
          default:
            break;
        }

        $(calculatorInr).html(name);

        cleaningTypeValue = type;

        if (name) {
          clearServices();
          if (type == 'general' || type == 'afterRepair') {
            setStandartServices();
          }
          cleaningType.val(name);
          calc();
        }

        opp();
      }
    });

    function initType() {
      let input = $('.cal-type').find('input[type=radio]:checked');

      if (input) {
        var type = input.val();

        clearServices();
        if (type == 'general' || type == 'afterRepair') {
          setStandartServices();
        }

        calc();
      }
    }

    initType();

    // calc first time
    calc();
  }

  calculator();

  function sendForm(e) {
    if (!e || !e.length)
      return !1;
      
    $.ajax({
        url: '/send.php',
        type: 'POST',
        data: e.find('input, select'),
        success: function (response) {
          new alertTop('Сообщение успешно отправлено!').show();
        }, 
        error: function(e, t, r) {
          console.log(r + "\r\n" + e.statusText + "\r\n" + e.responseText)
        }
    });
  }

  function sendCalculator() {
    var services = $('.calc-form__services-list').find('.calc-from__cover')
      , allServices = [];

    for (var i = 0; i < services.length; i++) {
        var item = $(services[i])
          , itemName = item.find('.cover__name').text()
          , itemPrice = item.find('.cover__price').text()
          , itemQuantity = item.find('.cover__input').val();

      allServices.push({
        item: {
          name: itemName,
          price: itemPrice,
          quantity: itemQuantity ? itemQuantity : 'auto',
        }
      });
    }

    var data = {
      calculator: true,
      total: $('.calc-from__totle').text(),
      rooms: $('#calc-from__quantity').val(),
      area: $('#calc-from__area').val(),
      type: $('#calc-from__type').val(),
      cleaning: $('#cleaning-total').text(),
      services: allServices,
      name: $('.modal-buy__form input[name=calculator__name]').val(),
      phone: $('.modal-buy__form input[name=calculator__phone]').val()
    };
      
    $.ajax({
        url: '/send.php',
        type: 'POST',
        data: data,
        success: function (response) {
          $('.modal').removeClass('open');
          new alertTop('Ваш заказ отправлен!').show();
        }, 
        error: function(e, t, r) {
          console.log(r + "\r\n" + e.statusText + "\r\n" + e.responseText)
        }
    });
  }

  function validateForm(form) {
    var inputs = form.find('.form-header__input')
      , errors = 0;

    if (!inputs.length) {
      inputs = form.find('.aplication__inp');
    }

    form.find('input').removeClass('has-error');
    
    for (var i = 0; i < inputs.length; i++) {
      var input = $(inputs[i]);

      if (input.attr('name') == 'aplication__phone' || input.attr('name') == 'calculator__phone') {
        if (input.val() < 15) {
          input.addClass('has-error');
          errors++;
        }
      } else {
        if (input.val() < 1) {
          input.addClass('has-error');
          errors++;
        }
      }

    }

    if (!errors) {
      return true;
    }

    return false;
  }

  $('[data-send-calculator]').on('click', function(e) {
    e.preventDefault();

    var validate = validateForm($('.modal-buy__form'));

    if (validate) {
      sendCalculator();
    }
  });

  $('[data-send-form]').on('click', function(e) {
    e.preventDefault();

    var form = $(this).closest('form');
    var validate = validateForm(form);

    if (validate) {
      sendForm(form);
    }
  });

  $('[data-open-modal]').on('click', function(e) {
    e.preventDefault();
    $('.calc-modal__totle').html($('.calc-from__totle').text());
    $('.modal').addClass('open');
  });
  $('[data-close-modal]').on('click', function(e) {
    $('.modal').removeClass('open');
  });
});

function alertTop(e) {
  this.show = function() {
      $('alert').remove(),
      $('body').append('<div class="alert alert-success"><p>' + e + "</p></div>"),
      setTimeout(function() {
          $('.alert').addClass('show')
      }, 20),
      setTimeout(function() {
          t()
      }, 2e3)
  },
  this.hide = function() {
      $('.alert').removeClass('show'),
      setTimeout(function() {
          $('.alert').remove()
      }, 200)
  };
  var t = this.hide
}

burger.addEventListener('click', openBurgerMenu);
roomMobSelect.addEventListener('click', openSelectType);
typeMobSelect.addEventListener('click', openSelectRoom);
calcItem.addEventListener('click', openList);
includBtn.addEventListener('click', openincludBtn);
includPlace.addEventListener('click', clickPlace);
// calculatorInr.addEventListener('click', opType);


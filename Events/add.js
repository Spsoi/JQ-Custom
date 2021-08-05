    
// каждую секунду проверять на класс, нет? Навешать!
let timer = setTimeout(function tick() {
    if ($('#lead_main_user-users_select_holder').hasClass('cmdf5-responsible-company_list')) {
        console.log('Класса есть');
    }else{
        $('#lead_main_user-users_select_holder').addClass('cmdf5-responsible-company_list');
    }
    timer = setTimeout(tick, 1000); // (*)
}, 1000);

// мышкой залезаем на класс и бац бац бац, навешиваем эвенты на каждый класс
// на даёт повесить эвент 'click'
let block = document.querySelectorAll('.js-card-main-fields');
block.forEach(function(item, index, value){
    console.log('sadfgsdfgsdfgsdfgdsfg');
    item.addEventListener("mouseenter", function() {
        console.log('mouseenter');
    });
});

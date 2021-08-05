    
// каждую секунду навешиваем класс
let timer = setTimeout(function tick() {
            if ($('#lead_main_user-users_select_holder').hasClass('cmdf5-responsible-company_list')) {
                console.log('Класса есть');
            }else{
                $('#lead_main_user-users_select_holder').addClass('cmdf5-responsible-company_list');
            }
            timer = setTimeout(tick, 1000); // (*)
          }, 1000);

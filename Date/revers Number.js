// Меняем даты dd/mm/YY меcтами
// 30.06.2021
    const timeFrom = row.find('.shipment_time_from').val();
    const timeTo = row.find('.shipment_time_to').val();
    let from = null;
    let to = null;
    if (timeFrom) {
        const splitedFrom   =  timeFrom.split('.');
        const dataFrom = [splitedFrom[2], splitedFrom[1], splitedFrom[0]];
        from = dataFrom.join('.');
    }

    if (timeTo) {
        const splitedTo   =  timeTo.split('.');
        const dataTo = [splitedTo[2], splitedTo[1], splitedTo[0]];
        to = dataTo.join('.');
    }

// 2021.06.30

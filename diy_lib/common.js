export function formatCurrency(amount){
    return Number(amount)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
export function formatDate(rawDate){
    var date = String(rawDate).split(' ');
    var subDate = String(date[0]).split('-');
    var monthTxt='';
    switch (parseInt(subDate[1]))
    {
        case 1:
        monthTxt = "Januari"
        break;
        case 2:
        monthTxt = "Februari"
        break;
        case 3:
        monthTxt = "Maret"
        break;
        case 4:
        monthTxt = "April"
        break;
        case 5:
        monthTxt = "Mei"
        break;
        case 6:
        monthTxt = "Juni"
        break;
        case 7:
        monthTxt = "Juli"
        break;
        case 8:
        monthTxt = "Agustus"
        break;
        case 9:
        monthTxt = "September"
        break;
        case 10:
        monthTxt = "Oktober"
        break;
        case 11:
        monthTxt = "November"
        break;
        case 12:
        monthTxt = "Desember"
        break;
        default:
        monthTxt = ""
        break;
    }
    var newDate = parseInt(subDate[2])+" "+monthTxt+" "+subDate[0]
    // console.log(newDate);
    return newDate;
}

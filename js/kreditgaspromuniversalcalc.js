let monthsArray = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]

function addSpacesToNumbers(numbers){
    return numbers.toString().replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');
}

function removeSpacesFromNumbers(numbers){
    return parseInt(numbers.replace(/ (?=\d{3})/g, ''));
}

$(document).ready(function(){

    // input radio add class function

    // $(".kredit_form-label").each(function (label) {
    //     $(this).on("click", () => {
    //         $(this).addClass("active");
    //         $(".kredit_form-label").not($(this)).removeClass("active");

    //         let creditSum =  removeSpacesFromNumbers($('input[name=credit_sum]').val());
    //         let creditDuration = +$('select[name=credit_duration]').val();
    //         let creditPercenetage = $('input[name=credit_percentage]').val();

    //         calculateCredit(creditSum,creditDuration,creditPercenetage);
            
    //     });
    // });

    $('#formControlRange').on('input',function(e){
        
        let newVal = addSpacesToNumbers($(this).val())
        $('input[name=credit_sum]').val(newVal);

    })

    $('#formControlRange').on('input',function(e){

        let creditSum =  removeSpacesFromNumbers($('input[name=credit_sum]').val());
        let creditDuration = +$('select[name=credit_duration]').val();
        let creditPercenetage = $('input[name=credit_percentage]').val();

        calculateCredit(creditSum,creditDuration,creditPercenetage);
        
    })

    IMask(document.querySelector('[name=credit_sum]'), {
        mask: Number,
        thousandsSeparator: ' ',
    })

    $('[name=credit_duration],[name=credit_percentage],[name=credit_sum]').on('input',function(e){

        let creditSum =  removeSpacesFromNumbers($('input[name=credit_sum]').val());
        let creditDuration = +$('select[name=credit_duration]').val();
        let creditPercenetage = $('input[name=credit_percentage]').val();

        calculateCredit(creditSum,creditDuration,creditPercenetage);
        
    })

    $('.table__show-full-table-btn').on('click',function(e){
        e.preventDefault();
        $('.kredit-graf .table tbody tr').css('display','table-row')
    })
})

function calculateCredit(sum, months, percentage){

    $('.kredit-graf').addClass('show');
    $('.info_sum').text(addSpacesToNumbers(sum.toString()) + ' ₽');
    $('.info_duration').text($("select[name=credit_duration] option[value="+ months +"]").text());
    $('.info_percentage').text(percentage + '%');
    $('#formControlRange').val(sum);
    $('#formControlRange').css({"background-size": (sum / $('[name=credit_sum]').attr('max'))*100 + '% 100%'});
    let creditRange = $(".kredit-calc__range .kredit-calc__range-green");

    let i = (percentage / 12) / 100; // Месячная процентная ставка
    let K = (i * Math.pow((1 + i),months)) / (Math.pow(1+i,months) - 1); //  Коэффициент аннуитета
    let returnByMonth = parseInt(K * sum); // Аннуитетный взнос
    let overPayment = parseInt(returnByMonth - (sum / months));
    let totalSum = returnByMonth * months;
    let maxOverPayment = totalSum - sum;
    let rangePercentage = ((sum / totalSum) * 100);

    creditRange.css("width", rangePercentage + "%");

    $('.kredit-monthly-price').text(addSpacesToNumbers(returnByMonth.toString()) + " ₽")
    $('.kredit-overprice').text(addSpacesToNumbers(maxOverPayment.toString()) + " ₽")
    $('.kredit-calc__bottom-price').text(addSpacesToNumbers(totalSum.toString())+ " ₽")

    let template = ""; 
    let totalSumForTable = totalSum ;
    let mainLoanSum = returnByMonth - overPayment;
    for(let i = 1; i <= months; i++){

        const givenDay = new Date();            
        const result = new Date(givenDay.setMonth(givenDay.getMonth() + i));


        template += `<tr>
            <td scope="col"><span class="table-numb">${i} платеж<span class="kredit-graf__month">${monthsArray[result.getMonth()]} ${result.getFullYear()} г.</span></span></td>
            <td class="kredit-graf__remain1" scope="col">${totalSumForTable}</td>
            <td class="kredit-graf__interest-balance1" scope="col">${overPayment}</td>
            <td class="kredit-graf__redeemed1" scope="col">${mainLoanSum}</td>
            <td class="kredit-graf__mothly-payment1" scope="col">${returnByMonth}</td>
        </tr>`;

        totalSumForTable -= returnByMonth;
    }

    $('.kredit-graf__table-side tbody').html(template);
};

function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}

//get all of the calculator inputs
const input = document.querySelectorAll("[name='qty']");

//evlaluate all of the calculator inputs
input.forEach(function (input) {
    //for each individual input, listen for change
    input.addEventListener("change", function (e) {
        const this_input = e.target;
            const qty = parseFloat(e.target.value);
            const this_row = this_input.closest(".row");

            //here is where we are adding diesel
            const diesel = this_row.querySelector(".diesel");
            const diesel_span = diesel.querySelector("span");
            const diesel_price = parseFloat(diesel.dataset.price);
            const diesel_cost = qty * diesel_price;
            
            diesel_span.innerHTML = round_number(diesel_cost);
            diesel.classList.add("active");
            //here is where we are adding diesel

            const premium = this_row.querySelector(".premium");
            const premium_span = premium.querySelector("span");
            const premium_price = parseFloat(premium.dataset.price);
            const premium_cost = qty * premium_price;
            
            premium_span.innerHTML = round_number(premium_cost);
            premium.classList.add("active");

            const midgrade = this_row.querySelector(".midgrade");
            const midgrade_span = midgrade.querySelector("span");
            const midgrade_price = parseFloat(midgrade.dataset.price);
            const midgrade_cost = qty * midgrade_price;

            midgrade_span.innerHTML = round_number(midgrade_cost);
            midgrade.classList.add("active");

            const regular = this_row.querySelector(".regular");
            const regular_span = regular.querySelector("span");
            const regular_price = parseFloat(regular.dataset.price);
            const regular_cost = qty * regular_price;
            
            regular_span.innerHTML = round_number(regular_cost);
            regular.classList.add("active");

            let cheap = false;
            //here is where we are adding diesel

              if (diesel_cost < premium_cost && diesel_cost < midgrade_cost && diesel_cost < regular_cost) {
                cheap = diesel;
            }

            //here is where we are adding diesel

            if (premium_cost < diesel_cost && premium_cost < midgrade_cost && premium_cost < regular_cost) {
                cheap = premium;
            }

            if (midgrade_cost < diesel_cost && midgrade_cost < premium_cost && midgrade_cost < regular_cost) {
                cheap = midgrade;
            }

            if (regular_cost < diesel_cost && regular_cost < premium_cost && regular_cost < midgrade_cost) {
                cheap = regular;
            }

           const current_cheap = this_row.querySelector(".cheap");

           if (current_cheap) {
               current_cheap.classList.remove("cheap");
           }
           
           if (cheap) { 
           cheap.classList.add("cheap");
           }


    });
});
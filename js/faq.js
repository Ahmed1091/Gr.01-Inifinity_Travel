let faqs = [
    {
        "id": "One",
        "question": "Do i have to pay you up front for my vacation ?",
        "response": `No! The deposit requirements are set by the resorts and the tour operators we book through. Deposit rates
        vary based on the resort or package you select, and the time you are traveling.

        The deposit is made via Susan Peavey Travel directly with the resort or tour operator. At no time does
        Susan Peavey Travel ever charge your credit card. This way, you are assured that your deposit is applied
        directly to your vacation at the time of booking.

        Most vacation packages require that you pay the balance 45 days prior to your arrival. Again, that payment
        is made directly to the supplier.`,
    },
    {
        "id": "Two",
        "question": "what guarantees do i have doing business with you ?",
        "response": `Because you don't pay Susan Peavey Travel for your vacation, their is no risk of losing your vacation
        through us.

        When making your reservations, you provide us with your credit card information for booking. In turn, we
        provide that information to the vacation vendors (resorts, airlines, etc.). They charge your card.

        This way, you are assured that every payment you make towards your vacation is applied directly to your
        reservation.`,
    },
    {
        "id": "Three",
        "question": "what is susan peavey travel’s greatest strength ?",
        "response": `The agents in our office work as a team. Each agent has their specialty area, ie: Disney, Cruising,
        All-Inclusive, Destination Weddings, Luxury Travel.

        We work together as a team with the client to ensure our customers have the best information and resources
        before, during, and after their vacation.

        All of the agents are familiar with Susan Peavey Travel clients' vacation ensuring there's always someone
        available to assist you.`,
    },
    {
        "id": "Four",
        "question": "what guarantees do i have doing business with you ?",
        "response": `Because you don't pay Susan Peavey Travel for your vacation, their is no risk of losing your vacation
        through us.

        When making your reservations, you provide us with your credit card information for booking. In turn, we
        provide that information to the vacation vendors (resorts, airlines, etc.). They charge your card.

        This way, you are assured that every payment you make towards your vacation is applied directly to your
        reservation.`,
    },
    {
        "id": "Five",
        "question": "What`s the mission of learapress ?",
        "response": `No. We have access to all the same pricing for resorts as the online booking sites do and we can
        price-match online booking engine pricing when comparing apples to apples.

        In many cases, we can find discounts and other promotional offerings that are not offered to the general
        public.`,
    },
    {
        "id": "Six",
        "question": "Can I go on a cruise to Alaska or the Caribbean without having a passport ?",
        "response": `Technically, yes, you may be able to cruise round trip from a US port to your destination. However, we
        must always highly recommend that you carry a valid passport. If something went wrong, like a health
        issue, and you have to be taken to a medical facility, you may encounter challenges re-entering the USA.`,
    },
    {
        "id": "Seven",
        "question": "How can i get your service ?",
        "response": `Yes, you may get married in selected countries in which you are not a citizen. However, there are certain
        requirements you must meet. Most countries have a residence requirement and the length of time varies. We
        are happy to coordinate a marriage ceremony and destination wedding. Let us handle the details and take
        that stress off your shoulders.`,
    },
    // {
    //     "id": 8,
    //     "question": `I require special accommodations. Can you accommodate my needs?`,
    //     "response": `JOY Tour & Travel will do everything possible to accommodate your requests and needs. Please indicate on
    //     you reservation form your specific requests. The sooner that we know that you have a special request, the
    //     better we can prepare and accommodate. If you have any mobility challenges, we suggest you bring a
    //     travel-mate that can best assist you in the way that you need.`,
    // },
    // {
    //     "id": 9,
    //     "question": "I have to cancel the trip I booked with JOY Tour & Travel. What do I do ?",
    //     "response": `We understand that cancellations happen, which is why we highly suggest that you purchase travel
    //     protection with your tour reservation. As soon as you know that you have to cancel, please call the office
    //     at 513-777-8221 or 1-800-875-4569 Monday through Friday, from 9:00AM to 5:30PM or you can leave a message
    //     after hours with a phone number where we can reach you during business hours. We will submit your claim
    //     and provide you the information you need to return with your paperwork to the travel protection company.

    //     Most travel protection policies cover cancellations for medical reasons for you, your travel-mate, or
    //     immediate family, and for unforeseen circumstances while you are traveling. If you have any questions
    //     about your travel protections policy, please call the JOY office for assistance. If you have to cancel the
    //     day of the tour, please contact the tour director on their cell phone number as listed on your travel
    //     documents before the time you are supposed to meet the motor coach so that the group is not waiting for
    //     you.

    //     If you do not have travel protection, please refer to our cancellation policy page for more information
    //     pertaining to the type of the tour (motor coach to your destination or flying to your destination) that
    //     you have registered for.`,
    // },
    // {
    //     "id": 10,
    //     "question": "The tour I’m interested in leaves in a few days, is it too late to join?",
    //     "response": `Be aware that our tours sell out very quickly. However, occasionally we will have last minute
    //     cancellations that open up some availability closure to the departure date. If you would liek to join a
    //     tour that is departing soon, please call the office at 513-777-8221 or 1-800-875-4569 Monday through
    //     Friday, from 9:00AM to 5:30PM and we will check on availability for you.`,
    // },


]


let content = "";

// for (let item of faqs) {
//     content += `
//     <div class="panel">
//     <div class="panel-heading" role="tab" id="title${item.id}">
//       <h4 class="panel-title">
//         <a data-toggle="collapse" data-parent="#accordion" href="#collapse${item.id}" aria-expanded="false"
//           aria-controls="collapse${item.id}" class="collapsed">
//           ${item.question}</a>
//       </h4>
//     </div>
//     <div id="collapse${item.id}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="title${item.id}"
//       aria-expanded="false" style="height: 0px;">
//       <div class="panel-content">
//       ${item.response}
//       </div>
//     </div>
//   </div>
//     `
// }


for (let item of faqs) {
    content += `
    <div class="card">
    <div class="card-header" id="heading${item.id}">
      <h5 class="mb-0">
        <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${item.id}" aria-expanded="false" aria-controls="collapse${item.id}">
        ${item.question}</a>
        </a>
      </h5>
    </div>
    <div id="collapse${item.id}" class="collapse" aria-labelledby="heading${item.id}" data-parent="#accordion">
      <div class="card-body">
      ${item.response}
      </div>
    </div>
  </div>
    `
}





document.getElementsByClassName("accordion")[0].innerHTML = content;


$(document).ready(function() {

    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('activeLink');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('activeLink');
    });

    $('.card-header').click(function() { 
        $(this).find('i').toggleClass('fas fa-plus-circle fas fa-minus-circle'); 
    });

});



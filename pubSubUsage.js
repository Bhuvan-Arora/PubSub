/**
 * This file will show the usage of publisher subscriber design pattern of javascript
 */
const ps = pubSub()

// Code for **Card 1** started

/**
* This function will publish a custom event after every 5 second
*/
setInterval(function () {
    const data = null; //Data if any data you want to send to call back functions of subscribers. 
    ps.publish('my-custom-event', data);
    $("#eventFiredAlert").append("<span class='small-text'>Event Fired</span>");
}, 5000);

// Code for **Card 2** started

/**
* This below code is to subscribe the custom event for card 2, and its callback will show the count of published events
*/
ps.subscribe('my-custom-event', function(){
    var oldCount = $("#eventCounter").text();
    var newCount = parseInt(oldCount) + 1;
    $("#eventCounter").text(newCount);
});

// Code for **Card 3** started

//This variable will store the subscription for card 3
var subscription = null;

/**
 * On click on subscribe button.
 * It will show the subscribed message.
 * It will subscribe the event if its already not subscribed
 */
$("#subscribe").click(function(){
    $("#state-subscribe").addClass("d-flex");
    $("#state-unsubscribe").removeClass("d-flex");
    if(subscription == null)    //If already not subscribed
    {
        //subscribing the custom event
        subscription = ps.subscribe('my-custom-event', function(){
            //Toggling background color of card, on each event published
            $("#card-3").toggleClass("change-bg-color");
        });
    }
});

/**
 * On click on unsubscribe button.
 * It will show the unsubscribed message.
 * It will subscribe the event if its already not unsubscribed
 */
$("#unsubscribe").click(function(){
    $("#state-subscribe").removeClass("d-flex");
    $("#state-unsubscribe").addClass("d-flex");
    
    if(subscription != null) //If already not unsubscribed
        subscription.unsubscribe(); //Unsubscribing the custom event
        subscription = null;
});
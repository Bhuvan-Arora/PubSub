/**
 * Publisher Subscriber javascript design patter.
 * @author : Bhuvan Arora 
 * @CreatedOn : 30-10-2019
 * @LastModifiedOn : 30-10-2019
 */

function pubSub() {

    //Object to store event names and their callback array
    const subscribers = {};

    /**
     * This function is a publisher function, which let us publish a custom event
     * @argument eventName : This is a string argument which will accept custom event name.
     * @argument data : This is a data object which will accept arguments for callback function.
     */
    function publish(eventName, data) {
        if (!Array.isArray(subscribers[eventName])) {
            return; //If event doesn't exist then return.
        }

        //If event exist then trigger all its callback functions in loop
        subscribers[eventName].forEach((callback) => {
            callback(data)
        })
    }

    /**
     * This function is a subscriber function, which let us subscribe to any custom event
     * @argument eventName : This is a string argument which will accept custom event name.
     * @argument callback : This is a function argument which will accept callback function for particular event.
     */
    function subscribe(eventName, callback) {
        //If array of callbacks not already exist for this event, then create the array.
        if (!Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = []
        }
        //Push the callback into callbacks array for particular event into subscribers object
        subscribers[eventName].push(callback);

        //Storing the index of callback into a constant it will help us to unsubscribe a single callback from particular custom event.
        const index = subscribers[eventName].length - 1;

        return {
            //Return a method to unsubscribe that recently subscribed event.
            unsubscribe() {
                subscribers[eventName].splice(index, 1)
            },
        }
    }

    return {
        publish,
        subscribe,
    }
}
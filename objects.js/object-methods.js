let restaurant = {
    name: 'Joe Skwiat',
    guestCapacity: '75',
    guestCount:'0',
    checkAvaility: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
         this.guestCount =  this.guestCount + partySize
    },
    removeParty: function (partySize){
        this.guestCount = this.guestCapacity - partySize
    }
}
restaurant.seatParty(72)
console.log(restaurant.checkAvaility(72))
restaurant.removeParty(5)
console.log(restaurant.checkAvaility(4))

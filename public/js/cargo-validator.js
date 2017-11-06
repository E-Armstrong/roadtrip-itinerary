var mainVM = new Vue({
    el: "#app",
    data: {
        totalWeight: 0,
        totalCost: 0,
        totalBeer: 0,
        totalGatorade: 0,
        totalSoup: 0,
        totalTP: 0,
    },
    methods: {
        makeAMouse: function($event) {
            //create marker at x and y
            this.markers.push({
                pageX: event.offsetX-10 + 'px',
                pageY: event.offsetY-30 + 'px',
            })
            // return this.marker
            // console.log($event)
            // $event.pageX
            // $event.page
            // $event.bubbles: false
        },
        mouseTrap: function(mouse, index, event) {
            event.stopPropagation()
            this.markers.splice(index, 1)

        }
    }
})

//weights
// beer 18 lb $20
// soup 6 lb $15
// T.P. 14 lb $16
// Gatorade 35 lb $13
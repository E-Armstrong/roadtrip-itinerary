var mainVM = new Vue({
    el: "#app",
    data: {
        totalBeer: 0,
        totalGatorade: 0,
        totalSoup: 0,
        totalTP: 0,
    },
    //weights
    // beer 18 lb $20
    // soup 6 lb $15
    // T.P. 14 lb $16
    // Gatorade 35 lb $13
    methods: {
        moreBeer: function($event) {
            this.totalBeer++
        },
        lessBeer: function($event) {
            this.totalBeer--
            if (this.totalBeer < 0) {
                this.totalBeer = 0
            }
        },
        moreGatorade: function($event) {
            this.totalGatorade++
        },
        lessGatorade: function($event) {
            this.totalGatorade--
            if (this.totalGatorade < 0) {
                this.totalGatorade = 0
            }
        },
        moreSoup: function($event) {
            this.totalSoup++
        },
        lessSoup: function($event) {
            this.totalSoup--
            if (this.totalSoup < 0) {
                this.totalSoup = 0
            }
        },
        moreTP: function($event) {
            this.totalTP++
        },
        lessTP: function($event) {
            this.totalTP--
            if (this.totalTP < 0) {
                this.totalTP = 0
            }
        },
    },
    computed : {
        totalWeight: function () {
            return (this.totalBeer * 18) + (this.totalGatorade * 35) + (this.totalSoup * 6) + (this.totalTP * 14)
        },
        totalCost: function () {
            return (this.totalBeer * 20) + (this.totalGatorade * 13) + (this.totalSoup * 15) + (this.totalTP * 16)
        },
    }
})

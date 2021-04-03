let app = new Vue({
    el: '#app',
    data: {
        seen: true,
        fishSeen: false,
        buttonSeen: false,
        name: '',
        message: 'Fishes',
        score: 0,
        seenFish1: true, 
        seenFish2: true, 
        seenFish3: true, 
        seenFish4: true, 
        seenFish5: true,
        time: 20,

    },
    methods: {
        hiden: function() {
            if(this.name === '') {
                alert('Enter name')
            }
            else {
                this.seen = !this.seen
                this.buttonSeen = true;
            }
        },
        start: function() {
            this.fishSeen = true;
            this.buttonSeen = false;
            setTimeout(() => alert('You earn '+ this.score +' points'), 20000)
            let time = setInterval(() => this.time--, 1000);
            if(this.time === 0){
                alert('You earn '+ this.score +' points'), 20000
                clearInterval(this.time)
            }
        },

        fish1: function() {
            this.score += 15;
            this.seenFish1 = false;
            setInterval(() => this.seenFish1 = true, 2000)
        },
        fish2: function() {
            this.score += 25;
            this.seenFish2 = false;
            setInterval(() => this.seenFish2 = true, 2000)
        },
        fish3: function() {
            this.score += 25;
            this.seenFish3 = false;
            setInterval(() => this.seenFish3 = true, 2000)            
        },
        fish4: function() {
            this.score += 10;
            this.seenFish4 = false;
            setInterval(() => this.seenFish4 = true, 2000)
        },
        fish5: function() {
            this.score += 10;
            this.seenFish5 = false;
            setInterval(() => this.seenFish5 = true, 2000)
        },
    }
})
/* global Vue, axios */

Vue.component('member', {
   template:
    `<div class="row border-bottom pb-1 mb-1">
        <div v-html="rank" class="col-3"></div>
        <div v-html="member.name" class="col-3"></div>
        <div v-html="last" class="col-3"></div>
        <div v-html="days" class="col-3" v-bind:class="{ 'text-success': green, 'text-warning': orange, 'text-danger': red }"></div>
    </div>`,
    
    props: ['member', 'rank'],
    
    data: function () {
        return {
            last: null,
            name: null,
            days: null,
            today: null,
            red: false,
            green: false,
            orange: false
        }
    },
    
    mounted: function () {
        this.name = this.member.name;
        
        function formatDate(date) {
            let d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) {
                month = '0' + month;
            }
            
            if (day.length < 2) {
                day = '0' + day;
            }

            return [year, month, day].join('-');
        }
        
        this.today = formatDate(new Date());
        
        axios
            .get('https://api.tibiadata.com/v2/characters/' + this.name.replace(' ', '+') + '.json')
            .then(response => {
                this.last = response.data.characters.data.last_login[0].date.substring(0, 10);
                this.days = (new Date(this.today) - new Date(this.last)) / (1000 * 60 * 60 * 24);

                if (this.days > 13) {
                    this.red = true;
                } else if (this.days > 6) {
                    this.orange = true;
                } else {
                    this.green = true;
                }
            })
    }
});

var app = new Vue({
    el: '#app',
    data: {
        guildName: '',
        guild: null
    },
    methods: {
        check: function () {
            this.guild = null;
            
            if (this.guildName.length > 2) {
                axios
                    .get('https://api.tibiadata.com/v2/guild/' + this.guildName.replace(' ', '+') + '.json')
                    .then(response => {
                        this.guild = response.data.guild.members;
                    
                        if (response.data.guild.error) {
                            alert(response.data.guild.error);
                        }
                    })
            }
        }
    }
})

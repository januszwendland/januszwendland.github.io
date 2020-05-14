/* global Vue, axios */

Vue.component('member', {
    template:
        `<div v-bind:class="{ 'text-success': green, 'text-warning': orange, 'text-danger': red }" class="row border-bottom pb-1 mb-1">
            <div v-html="rank" class="col-3"></div>
            <div v-html="member.name" class="col-3"></div>
            <div v-html="last" class="col-3"></div>
            <div v-html="days" class="col-3"></div>
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

    template:
        `<div class="container">
            <h1 class="mt-3 mb-3">Check guild activity!</h1>
            <form v-on:submit.prevent="check" class="d-block">
                <div class="row">
                    <div class="col-md-9">
                        <input v-model="guildName" placeholder="Guild name" class="form-control form-control-lg">
                    </div>
                    <div class="col-md-3">
                        <button v-on:click="check" type="button" class="btn btn-lg btn-outline-primary btn-block mt-3 mt-md-0">Submit</button>
                    </div>
                </div>
            </form>
            <div class="mt-3 mb-3">
                <div class="row">
                    <div class=col-3><strong>Rank</strong></div>
                    <div class=col-3><strong>Name</strong></div>
                    <div class=col-3><strong>Last login</strong></div>
                    <div class=col-3><strong>Days from last login</strong></div>
                </div>
                <template v-for="rank in guild">
                    <template v-for="character in rank.characters">
                        <member :member="character" :rank="rank.rank_title"></member>
                    </template>
                </template>
            </div>
        </div>`,
  
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

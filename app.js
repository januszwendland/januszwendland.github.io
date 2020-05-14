/*global Vue, axios*/

Vue.component('member', {
   template:
    `<div class="row border-bottom pb-1 mb-1">
        <div v-html="rank" class="col-4"></div>
        <div v-html="member.name" class="col-4"></div>
        <div v-html="last" class="col-4"></div>
    </div>`,
    
    props: ['member', 'rank'],
    
    data: function () {
        return {
            last: null,
            name: null
        }
    },
    
    mounted: function () {
        this.name = this.member.name;
        
        axios
            .get('https://api.tibiadata.com/v2/characters/' + this.name.replace(' ', '+') + '.json')
            .then(response => {
                this.last = response.data.characters.data.last_login[0].date.replace('.000000', '');
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

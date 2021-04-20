<template>
    <div v-bind:class="{ 'text-success': green, 'text-warning': orange, 'text-danger': red }" class="row border-bottom pb-1 mb-1">
        <div v-html="rank" class="col-2 d-none d-md-block"></div>
        <div class="col-4 col-md-3">
            <a v-bind:href="href" v-html="member.name" target="_blank"></a>
        </div>
        <div v-html="vocation" class="col-2"></div>
        <div v-html="level" class="col-2 col-md-1"></div>
        <div v-html="last" class="col-4 col-md-2"></div>
        <div v-html="days" class="col-2 d-none d-md-block"></div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'member',

        props: ['member', 'rank'],

        data: function () {
            return {
                last: null,
                name: null,
                level: null,
                vocation: null,
                days: null,
                today: null,
                href: null,
                red: false,
                green: false,
                orange: false
            }
        },

        mounted: function () {
            this.name = this.member.name;
            this.level = this.member.level;
            this.href = "https://www.tibia.com/community/?subtopic=characters&name=" + this.name.replace(' ', '+');

            if (this.member.vocation.indexOf("Druid") != -1) {
                this.vocation = 'ED';
            }

            if (this.member.vocation.indexOf("Knight") != -1) {
                this.vocation = 'EK';
            }

            if (this.member.vocation.indexOf("Paladin") != -1) {
                this.vocation = 'RP';
            }

            if (this.member.vocation.indexOf("Sorcerer") != -1) {
                this.vocation = 'MS';
            }

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
    }
</script>

<template>
    <tr class="member"
        v-bind:class="{ 'green': green, 'orange': orange, 'red': red }">
        <td class="hide-on-mobile">{{ member.rank }}</td>
        <td>
            <a target="_blank"
                v-bind:href="href">{{ name }}</a>
        </td>
        <td>{{ vocation }}</td>
        <td>{{ level }}</td>
        <td class="hide-on-mobile">{{ last }}</td>
        <td class="hide-on-mobile">{{ days }}</td>
    </tr>
</template>

<script>
    import axios from 'axios';
    import he from 'he';

    export default {
        name: 'Member',

        props: ['member'],

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
            this.name = he.decode(this.member.name);
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

            this.$emit('loader', true);

            axios
                .get('https://api.tibiadata.com/v4/character/' + this.name.replace(' ', '+'))
                .then(response => {
                    if (response.data.character.character.last_login) {
                        this.last = response.data.character.character.last_login.substring(0, 10);
                        this.days = (new Date(this.today) - new Date(this.last)) / (1000 * 60 * 60 * 24);

                        if (this.days > 13) {
                            this.red = true;
                        } else if (this.days > 6) {
                            this.orange = true;
                        } else {
                            this.green = true;
                        }
                    }

                    this.$emit('loader', false);
                });
        }
    }
</script>

/*
 * zippyDate - Just another crappy date library.
 *
 * Copyright 2011 Justin Dearing
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Please don't use this library. Please use something like Datejs http://www.datejs.com/
 */
(function () {
    function pad(n) { return n < 10 ? '0' + n : n }

    Date.prototype.getISODateTime = function () {

        return this.getUTCFullYear() + '-'
                        + pad(this.getUTCMonth() + 1) + '-'
                        + pad(this.getUTCDate()) + 'T'
                        + pad(this.getUTCHours()) + ':'
                        + pad(this.getUTCMinutes()) + ':'
                        + pad(this.getUTCSeconds()) + 'Z'
    }

    Date.prototype.getDayAbbrev = function () {
        switch (this.getDay()) {
            case 0: return 'Sun';
            case 1: return 'Mon';
            case 2: return 'Tues';
            case 3: return 'Wed';
            case 4: return 'Thurs';
            case 5: return 'Fri';
            case 6: return 'Sat';
        }
    }

    Date.prototype.getMonthAbbrev = function () {
        switch (this.getMonth()) {
            case 0: return 'Jan';
            case 1: return 'Feb';
            case 2: return 'Mar';
            case 3: return 'Apr';
            case 4: return 'May';
            case 5: return 'Jun';
            case 6: return 'Jul';
            case 7: return 'Aug';
            case 8: return 'Sep';
            case 9: return 'Oct';
            case 10: return 'Nov';
            case 11: return 'Dec';
        }
    }

    Date.prototype.getDateShort = function () {
        return this.getDayAbbrev() + " " + this.getMonthAbbrev() + " " + this.getDate() + " " + this.getFullYear();
    }

    Date.prototype.getDateTimeShort = function () {
        return this.getDateShort() + " " + this.getHours() + ":" + pad(this.getMinutes());
    }
})();
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        console.log('Received Event: ' + id);
    }
};

var bookingSystem = {

    tableGenerator: {
        kayaks: 50,

        init: function () {
            var stringToAppend = "<tr><th></th>";
            for(i=0;i<bookingSystem.tableGenerator.kayaks;i++) {
                if(i<9)
                    stringToAppend += "<th>&nbsp;"+(i+1)+"&nbsp;</th>";
                else
                    stringToAppend += "<th>"+(i+1)+"</th>";

            }
            $("#content > table > thead").append(stringToAppend+"</tr>");
            bookingSystem.tableGenerator.initContent();
        },
        initContent: function () {

            var startTime = new Date("10-10-1980 06:00:00");
            var endTime = new Date("10-10-1980 20:00:00");
            var iterator = 3;

            for (var d = startTime; d <= endTime; d.setMinutes(d.getMinutes() + 5)) {
                if(iterator%3 == 0)
                    stringToAppend = "<tr><td><span>"+d.getHours()+":"+d.getMinutes()+"</span></td>";
                else
                    stringToAppend = "<tr><td><span>&nbsp</span></td>";
                iterator++;
                for(j=0;j<bookingSystem.tableGenerator.kayaks;j++) {
                    stringToAppend += "<td></td>"
                }

                stringToAppend += "</tr>";
                $("#content > table > tbody").append(stringToAppend);
            }
            window.scrollTo(0,1000);
        }
    }
}

bookingSystem.tableGenerator.init();
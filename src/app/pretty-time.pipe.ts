import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "prettyTime"
})
export class PrettyTimePipe implements PipeTransform {
  transform(time: any, type: string): any {
    time = time
      .toString()
      .replace(/,/g, ".")
      .replace(/;/g, ":");

      
    if (time != "") {
      if (type == "decimal") {
        if (time == "0") {
          time = "0:00";
        }
        if (time.indexOf(".") == -1) {
          // van 'hour' naar 'decimal'
          var colon = time.indexOf(":");
          if (colon == 0) {
            time = "0" + time;
          }
          var timeArray = time.split(":");
          var hours = parseInt(timeArray[0], 10);
          var minutes = timeArray[1] ? parseInt(timeArray[1], 10) : 0;
          if (isNaN(hours) || isNaN(minutes)) {
            return "";
          } else {
            time = hours + minutes / 60;
          }
        }
        time = Math.round(time * 100) / 100;
        if (time == parseInt(time)) {
          time = time + ".00";
        }
        var timeArray = time.toString().split(".");
        if (timeArray[1].length == 1) {
          time = time + "0";
        }
      } else if (type == "hour") {
        if (time.indexOf(":") == -1) {
          // van 'decimal' naar 'hour'
          var point = time.indexOf(".");
          if (point == 0) {
            time = "0" + time;
          }
          var timeArray = time.split(".");
          var hours = parseInt(timeArray[0], 10);
          var minutes = Math.round((time - hours) * 100);
          minutes = Math.round(minutes * 0.6);
          if (isNaN(hours) || isNaN(minutes)) {
            return "";
          } else {
            if (minutes == 60) {
              hours++;
              minutes = 0;
            }
            if (minutes.toString().length == 0) {
              minutes = 0;
            } else if (minutes.toString().length == 1) {
              minutes = 0 + minutes;
            }
            time = hours + ":" + minutes;
          }
        } else {
          var timeArray = time.split(":");
          var hours = parseInt(timeArray[0], 10);
          if (isNaN(hours)) {
            hours = 0;
          }
          var minutes = timeArray[1] ? parseInt(timeArray[1], 10) : 0;

          if (minutes == 60) {
            hours++;
            minutes = 0;
          }
          if (minutes.toString().length == 0) {
            minutes = 0;
          } else if (minutes.toString().length == 1) {
            minutes = 0 + minutes;
          }
          time = hours + ":" + minutes;
        }
      }
    }
    // if ((time == '0.00' || time == '0:00')) {
    //   time = '';
    // }
    return time;
  }
}

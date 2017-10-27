define(function (require) {
    var React = require('react/react');
    var WeatherApp = require('./WeatherApp);

    var TogBox= React.createFactory(React.createClass({

	$.get(weatherApiUrl, function(weather) {
      
      var unitLabel = "&deg;C"
      tempC = Math.round(temperature);
      tempF = Math.round(tempC * 1.8 + 32);
      temperature = parseFloat((temperature).toFixed(0));

      console.log(weather);

     
  };

  $(".button").on("click", function() {
    if (toggleC == true) {
      toggleC = false;
      $("#temp").html(tempF + "&deg;F");
    } else if (toggleC == false) {
      toggleC = true;
      $("#temp").html(tempC + "&deg;C");
    }
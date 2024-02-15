function updateClock(clockId, timezone) {
    const now = new Date().toLocaleString('en-US', { timeZone: timezone });
    document.getElementById(clockId).textContent = now;
  }

  // Update clock time based on selected country
  document.getElementById('countrySelect').addEventListener('change', function() {
    const selectedCountry = this.value;
    const selectedCountryName = this.options[this.selectedIndex].text;
    document.getElementById('countryName').textContent = selectedCountryName;
    updateClock('clock-' + this.selectedIndex, selectedCountry);
    // Trigger slide to corresponding country
    $('#carouselExampleControls').carousel(this.selectedIndex);
  });

  // Update clock time on page load
  window.addEventListener('load', function() {
    const selectedCountry = document.getElementById('countrySelect').value;
    updateClock('clock-0', selectedCountry); // Update first clock on page load
  });

  // Update clock times every second
  setInterval(function() {
    const selectedCountry = document.getElementById('countrySelect').value;
    updateClock('clock-0', selectedCountry); // Update first clock every second
  }, 1000);
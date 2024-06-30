document.querySelector('.topnav input[type=text]').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    var searchText = this.value.trim();
    if (searchText !== 'is') {
      window.location.href = 'desired.html?search=' + searchText;
    }
  }
});
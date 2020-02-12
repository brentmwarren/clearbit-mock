$(document).ready(function() {
  var data
  $.ajax({
    dataType: 'json',
    url: 'http://interview.plaid.com/data/footer.json',
    data: data,
    success: populateFooter,
  })
})

const populateFooter = (response) => {
  $.each(response, function(k, obj) {
    $.each(obj, function(title,items) { 
      var listHTML = `<div id=${title}>
      <h5 class="title">${title}</h5>
      </div>`
      $('.footer-row').append(listHTML)
        $.each(items, function(idx, item) {
          var listItemHTML = `<a href=# class="item">${item}</a></br>`
          $(`#${title}`).append(listItemHTML)
        })
    })});
}

$("button").on("click", () => {
	var photo = $('#picture_URL').val();
  	$('#photo').append('<img src=' + photo + '>')
});
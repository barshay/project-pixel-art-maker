// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
	$("#pixel_canvas").append("<tbody class='grid'></tbody>");
	for (var row = 0; row < height; row++) {
		$("tbody.grid").append("<tr class='grid'></tr>");
		for(var column = 0; column < width; column++) {
			$("tbody.grid > tr:last").append("<td class='grid'></td>");
		}
	}
}

function clearGrid() {
	$(".grid").remove();
};

var height, width;
var color = $("#colorPicker").val();

$(document).ready(function() {
	$("form").submit( function(event) {
		event.preventDefault();
		height = $("#input_height").val();
		width = $("#input_width").val();
		clearGrid();
		makeGrid(height, width);

		$("td").click(function() {
			$(this).css("background-color", color);
		});
	});

	$("#colorPicker").on('change', function() {
		color = $(this).val();
	});

	
});
//var instance = M.Collapsible.getInstance(document.querySelectorAll('#abrir-check'));
//instance.open(0);
$(document).ready(function () {
	$("#hidden").hide();


	$('#btn-check-list').click(function () {
		var clicks = $(this).data('clicks');
		if (clicks) {
			$("#hidden").hide();
			$("#btn-check-list").attr("class", "waves-effect grey lighten-3 btn-small colored-blue");
		} else {
			$("#hidden").show();
			$("#btn-check-list").attr("class", "waves-effect grey lighten-3 btn-small colored-orange");
		}
		$(this).data("clicks", !clicks);
	});



});

function trocaCorIcon() {
	/** 
	$("#label-curso").mouseover(function () {
		//$("#icon-curso").attr("class", "colored-blue");
		//$("#icon-curso").css("color", "red");
		alert("grab thing");
	});
	*/
}


function myFunction() {
	// Declare variables 
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}


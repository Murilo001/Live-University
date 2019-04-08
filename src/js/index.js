//var instance = M.Collapsible.getInstance(document.querySelectorAll('#abrir-check'));
//instance.open(0);
$(document).ready(function () {
	$("#hidden").hide();
	$("#tr-hidden").hide();

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

function myFunction() {
	// Declare variables 
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("txt-input");
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

// FUNÇÕES DE ADICIONAR COLABORADOR

// Adiciona os campos preenchidos à tabela
// 		- Verifica se os campos foram preenchidos
//	 	- Adiciona na tabela
// 		- Limpa os registros
// 		- Exibe pop-up de registro inserido
function adicaoTabela() {
	let htmlToInsert = "<td>" +	"<td>";
	$("#").val(htmlToInsert);
	$("#");A
}

// Cancela a adição de um novo colaborador
// 		- Limpa os campos de inserção
//	 	- Esconde os campos de inserção
function cancelarAdicaoTabela() {
	limparCampos();
	esconderCampos();
}

// Processo de adicionar um novo colaborador à tabela 
// 		- Mostra os campos de inserção
function mostrarCampos() {
	$("#row-hidden-colaborado").show();
}

// Esconde os campos de input
// 		- Esconde os campos de inserção
function esconderCampos() {
	$("#row-hidden-colaborado").hide();
}

// Limpa todos os inputs após realizar a adição ou cancelamento
function limparCampos() {
	$("#txt-nome").val("");
	$("#txt-email").val("");
	$("#txt-cargo").val("");
	$("#txt-empresa").val("");
}

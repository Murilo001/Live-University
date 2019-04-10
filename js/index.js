/**
 * Funções utilizadas na página index.
 * - Manipulação de campos.
 * - Manipulação do DOM.
 * - Inicializações.
 * - Bind de funções.
 */


/**
 * Inicialização de métodos quando carrega a página.
 * 
 * - Inicializa o modal para inspecionar o colaborador.
 * - Esconde os campos de checklist e cadastro de colaborador.
 * - Esconde os campos de input do cadastro de colaborador.
 * - Adiciona a função de click para o checklist.
 * 
 */
$(document).ready(function () {
	$('.modal').modal();
	$("#hidden").hide();
	$("#tr-hidden").hide();
	esconderCampos();

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

/**
 * Função de pesquisa para a tabela de colaboradores.
 * - Ao realizar qualquer interação com o campo de pesquisa 
 * é realizado a busca na tabela, excluindo aqueles que não se
 * comparam ao campo buscado.
 */
function pesquisar() {
	// Declare variables 
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("txt-pesquisa");
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

/**
 * Adiciona a função remover ao botão na tabela de colaboradores.
 */
$(".btn-remove").click( () => {
	$(this).parent().parent().remove();
});

/**
 * Adiciona a função adicionar ao botão na tabela de colaboradores.
 */
$(".btn-add").click( () => {
	let trHtml = $(this).parent().parent().html();
	trHtml.replace("</td>", "");
	trHtml.trim();
	let quebraEmColunas = trHtml.split("<td>");
	const htmlTratado = quebraEmColunas[1] + "<br><br>" + quebraEmColunas[2];
	let instance = M.Modal.getInstance($('.modal'));
	$("#modal-body").html(htmlTratado);
	instance.open();
	
});

/**
 * FUNÇÕES DE ADICIONAR COLABORADOR
 */

/**
 * Adiciona os campos preenchidos à tabela.
 * - Verifica se os campos foram preenchidos
 * - Adiciona na tabela
 * - Limpa os registros
 * - Exibe pop-up de registro inserido
 */
function adicaoTabela() {
	if (validaCampos()) {
		$("#tbody-colaboradores").prepend(montarRegisto());
		limparCampos();
	}
}

/**
 * Valida se todos os campos obrigatórios foram preenchidos.
 */
function validaCampos() {
	let validado = true;
	if ($("#txt-nome").val() == "") {
		$(".helper-text-nome").html("* Campo Obrigatório.");
		validado = false;
	}
	if ($("#txt-email").val() == "") {
		$(".helper-text-email").html("* Campo Obrigatório.");
		validado = false;
	}
	if ($("#txt-cargo").val() == "") {
		$(".helper-text-cargo").html("* Campo Obrigatório.");
		validado = false;
	}
	if ($("#txt-empresa").val() == "") {
		$(".helper-text-empresa").html("* Campo Obrigatório.");
		validado = false;
	}
	return validado;
}

/**
 * Estrutura o html do registro que será inserido na tabela.
 */
function montarRegisto() {
	return htmlToInsert =
		'<tr>' +
		'<td>' +
		'<strong>' + $("#txt-nome").val() + '</strong>' +
		'<br>' +
		'<span class="grey-text">' + $("#txt-email").val() + '</span>' +
		'</td>' +
		'<td>' +
		'<span> Cargo:</span>' +
		'<br>' +
		'<span>' + $("#txt-cargo").val() + '</span>' +
		'</td>' +
		'<td>' +
		'<span>Empresa:</span>' +
		'<br>' +
		'<span>' + $("#txt-empresa").val() + '</span>' +
		'</td>' +
		'<td class="right">' +
		'<a class="waves-effect grey lighten-3 btn-small colored-blue btn-width-fixed btn-add">Abrir</a>' +
		'<a class="waves-effect grey lighten-3 btn-small colored-orange btn-width-fixed btn-remove">Remover</a>' +
		'</td>' +
		'</tr>';
}
	 	
/**
 * Cancela a adição de um novo colaborador.
 * - Limpa os campos de inserção
 * - Esconde os campos de inserção
 */
function cancelarAdicaoTabela() {
	limparCampos();
	esconderCampos();
}
		
/**
 * Processo de adicionar um novo colaborador à tabela.
 * - Mostra os campos de inserção
 */
function mostrarCampos() {
	$("#row-hidden-colaborador").show();
}
		
/**
 * Esconde os campos de input.
 * - Esconde os campos de inserção
 */
function esconderCampos() {
	$("#row-hidden-colaborador").hide();
}

/**
 * Limpa todos os inputs após realizar a adição ou cancelamento.
 */
function limparCampos() {
	$("#txt-nome").val("");
	$("#txt-email").val("");
	$("#txt-cargo").val("");
	$("#txt-empresa").val("");
	$( ".text-campo-obrigatorio" ).each(function() {
		$(this).html("");
	});	
}
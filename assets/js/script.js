
// Operaciones numéricas

const valor = (num) => {
    $('.calculadora').val($('.calculadora').val() + num);
}

// Resultado de las operaciones

const esIgualA = () => {
	$('.calculadora').val(eval($('.calculadora').val()));
}

// Eliminar operaciones

const eliminar = () => {
	value = $('.calculadora').val();
	$('.calculadora').val(value.substring(0, value.length - 1));
}

// Limpiar operaciones

const limpiar = () => {
	$('.calculadora').val('');
}

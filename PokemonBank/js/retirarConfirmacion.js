$(document).ready(function() {
	
    $("#descargarComprobante").click(function(event) {
        event.preventDefault();

        const { jsPDF } = window.jspdf; // Asegúrate de que jsPDF está cargado
        const doc = new jsPDF();

        // Obtener los valores del depósito
        const numeroCuenta 	= document.getElementById("numeroCuenta").textContent;
        const numeroReferencia = document.getElementById("numeroReferencia").textContent;
        const montoRetiro 	= document.getElementById("montoRetiro").textContent;
        const montoSaldo 	= document.getElementById("montoSaldo").textContent;
        const fechaRetiro 	= document.getElementById("fechaRetiro").textContent;

        // Agregar contenido al PDF
        doc.setFontSize(20);
        doc.text("Confirmación de Retiro", 105, 20, { align: "center" });

        doc.setFontSize(12);
        doc.text(`Número de Cuenta: ${numeroCuenta}`, 20, 40);
        doc.text(`Número referencia: ${numeroReferencia}`, 20, 50);
        doc.text(`Monto Retirado: ${montoRetiro}`, 20, 60);
        doc.text(`Saldo actual: ${montoSaldo}`, 20, 70);
        doc.text(`Fecha: ${fechaRetiro}`, 20, 80);

        // Guardar el PDF con un nombre
        doc.save("confirmacion_retiro.pdf");
    });
    
});

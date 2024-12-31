function openWhatsApp() {
    var phoneNumber = "5566992634123"; // Substitua com o seu número de WhatsApp
    var message = encodeURIComponent("Olá! Gostaria de saber mais sobre os planos de IPTV.");
    
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    
}


document.getElementById("btn-laguna69").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Ancash/laguna69.jpg");
    localStorage.setItem("imagen1", "../img/Ancash/laguna69/laguna691.jpg");
    localStorage.setItem("imagen2", "../img/Ancash/laguna69/laguna692.jpg");
    localStorage.setItem("imagen3", "../img/Ancash/laguna69/laguna693.jpg");
    
    let precioViaje = document.getElementById("laguna69-precio").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Laguna 69");
    localStorage.setItem("TituloTicket", "Huaraz: Laguna 69 - Trekking en el corazón de la Cordillera Blanca");
    localStorage.setItem("descripcionViaje", "Este viaje te llevará a la famosa Laguna 69, un destino imperdible en la Cordillera Blanca. Durante el trekking, disfrutarás de impresionantes paisajes y montañas.");
    localStorage.setItem("descripcion-2", "La Laguna 69 se encuentra a más de 4,000 metros de altura, rodeada de cumbres nevadas. Es un destino perfecto para los amantes del trekking y la naturaleza.");
    localStorage.setItem("descripcion-3", "Durante el trekking a la Laguna 69, tendrás la oportunidad de admirar paisajes espectaculares y disfrutar de la tranquilidad de la montaña.");
    localStorage.setItem("dia1", "Iniciaremos nuestro recorrido con una salida temprano desde Huaraz, dirigiéndonos al Parque Nacional Huascarán. Al llegar al inicio del trekking, comenzaremos la caminata hacia la Laguna 69, una de las más bellas del país. La caminata dura aproximadamente 3-4 horas, subiendo por un paisaje montañoso de impresionante belleza. En el camino, podremos disfrutar de vistas espectaculares de glaciares y cascadas.");
    localStorage.setItem("dia2", "Una vez que lleguemos a la Laguna 69, tendrás tiempo para descansar, tomar fotografías y disfrutar del entorno. Después de un tiempo en la laguna, regresaremos al punto de inicio del trekking y tomaremos el transporte de vuelta a Huaraz.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda y ligera</li>
            <li>Chaqueta de abrigo</li>
            <li>Zapatos para trekking</li>
            <li>Protector solar</li>
            <li>Sombrero o gorra</li>
            <li>Botella de agua</li>
            <li>Snacks</li>
            <li>Cámara fotográfica</li>
            <li>Medicamentos personales (si es necesario)</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-Huascaran").addEventListener("click", function() {
    localStorage.setItem("imagen",  "../img/Ancash/huascaran.jpg");
    localStorage.setItem("imagen1", "../img/Ancash/Huascaran/huascaran1.jpg");
    localStorage.setItem("imagen2", "../img/Ancash/Huascaran/huascaran2.jpg");
    localStorage.setItem("imagen3", "../img/Ancash/Huascaran/huascaran3.jpg");
    
    let precioViaje = document.getElementById("precioViajeHuascaran").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Parque Nacional Huascarán");
    localStorage.setItem("TituloTicket", "Áncash: Parque Nacional Huascarán - Un paraíso natural en los Andes");
    localStorage.setItem("descripcionViaje", "Visita el Parque Nacional Huascarán, el cual alberga el pico más alto de Perú y una biodiversidad única en la región de los Andes.");
    localStorage.setItem("descripcion-2", "Recorrerás glaciares, lagunas y hermosos paisajes andinos en un entorno natural impresionante.");
    localStorage.setItem("descripcion-3", "El Parque es ideal para los amantes del senderismo, la naturaleza y la aventura.");
    localStorage.setItem("dia1", "Iniciaremos el recorrido en Huaraz y nos dirigiremos al Parque Nacional Huascarán, donde disfrutaremos de caminatas en la zona de las lagunas de Llanganuco. Contaremos con vistas espectaculares de los picos nevados.");
    localStorage.setItem("dia2", "Seguiremos explorando los glaciares y las zonas de mayor altitud del Parque, con tiempo para tomar fotografías y disfrutar de la tranquilidad de la naturaleza.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa de abrigo</li>
            <li>Zapatos para caminatas</li>
            <li>Cámara fotográfica</li>
            <li>Protector solar</li>
            <li>Botella de agua</li>
            <li>Sombrero o gorra</li>
            <li>Snacks</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});


document.getElementById("btn-canonColca").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Arequipa/colca.jpg");
    localStorage.setItem("imagen1", "../img/Arequipa/Colca/colca1.jpg");
    localStorage.setItem("imagen2", "../img/Arequipa/Colca/colca2.jpg");
    localStorage.setItem("imagen3", "../img/Arequipa/Colca/colca3.jpg");
    
    let precioViaje = document.getElementById("precioViajeColca").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Cañón del Colca");
    localStorage.setItem("TituloTicket", "Arequipa: Cañón del Colca - La aventura de explorar el cañón más profundo");
    localStorage.setItem("descripcionViaje", "Descubre el majestuoso Cañón del Colca, el segundo cañón más profundo del mundo, hogar del cóndor andino.");
    localStorage.setItem("descripcion-2", "En este tour disfrutarás de vistas espectaculares, avistamiento de cóndores y visitas a los pueblos de los alrededores.");
    localStorage.setItem("descripcion-3", "La ruta incluye caminatas por senderos naturales y visitas a fuentes termales para relajarte.");
    localStorage.setItem("dia1", "Partiremos de Arequipa y nos dirigiremos al Cañón del Colca. Durante el recorrido, disfrutaremos de vistas panorámicas, pueblos típicos y podremos observar cóndores en vuelo.");
    localStorage.setItem("dia2", "Visitaremos los miradores del cañón, tomaremos tiempo para disfrutar del paisaje y regresaremos a Arequipa por la tarde.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda y ligera</li>
            <li>Zapatos para caminatas</li>
            <li>Protector solar</li>
            <li>Cámara fotográfica</li>
            <li>Botella de agua</li>
            <li>Sombrero o gorra</li>
            <li>Snacks</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-santaCatalina").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Arequipa/santacatalina.png");
    localStorage.setItem("imagen1", "../img/Arequipa/santacatalina/santacatalina1.jpg");
    localStorage.setItem("imagen2", "../img/Arequipa/santacatalina/santacatalina2.jpg");
    localStorage.setItem("imagen3", "../img/Arequipa/santacatalina/santacatalina3.jpg");
    
    let precioViaje = document.getElementById("precioViajeSantaCatalina").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Monasterio de Santa Catalina");
    localStorage.setItem("TituloTicket", "Arequipa: Monasterio de Santa Catalina - Un recorrido por la historia religiosa");
    localStorage.setItem("descripcionViaje", "Visita el Monasterio de Santa Catalina, una de las principales atracciones históricas de Arequipa.");
    localStorage.setItem("descripcion-2", "El Monasterio de Santa Catalina es un complejo religioso impresionante que combina historia, arquitectura colonial y vistas panorámicas.");
    localStorage.setItem("descripcion-3", "Durante el recorrido aprenderás sobre la vida de las monjas en el monasterio y la historia del lugar.");
    localStorage.setItem("dia1", "Iniciaremos el recorrido con una visita guiada por el Monasterio de Santa Catalina. Descubriremos sus calles y plazas interiores, además de su rica historia y arquitectura colonial.");
    localStorage.setItem("dia2", "Tendrás tiempo libre para explorar el monasterio a tu ritmo o disfrutar de la gastronomía local en los alrededores.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda</li>
            <li>Zapatos cómodos</li>
            <li>Cámara fotográfica</li>
            <li>Protector solar</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-ciudadAyacucho").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Ayacucho/huamanga.jpg");
    localStorage.setItem("imagen1", "../img/Ayacucho/ciudaddeayacucho/ciudaddeayacucho1.jpg");
    localStorage.setItem("imagen2", "../img/Ayacucho/ciudaddeayacucho/ciudaddeayacucho2.jpg");
    localStorage.setItem("imagen3", "../img/Ayacucho/ciudaddeayacucho/ciudaddeayacucho3.jpg");
    
    let precioViaje = document.getElementById("precioViajeHuamanga").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Ciudad de Ayacucho");
    localStorage.setItem("TituloTicket", "Ayacucho: Ciudad de Huamanga - Tradición y Cultura Andina");
    localStorage.setItem("descripcionViaje", "Descubre la ciudad de Ayacucho, cuna de la cultura andina y lugar de gran relevancia histórica.");
    localStorage.setItem("descripcion-2", "Explora su arquitectura colonial, iglesias y mercados. Además, podrás conocer las tradiciones y costumbres de la región.");
    localStorage.setItem("descripcion-3", "Ayacucho es famosa por su Semana Santa y su arte textil, y ofrece un vistazo único a la vida andina.");
    localStorage.setItem("dia1", "Llegaremos a Ayacucho y realizaremos un recorrido por el centro histórico de la ciudad. Visitaremos algunas de sus iglesias más importantes, así como el Mercado de Artesanías.");
    localStorage.setItem("dia2", "Exploraremos los alrededores y aprenderemos más sobre la historia de Ayacucho, con un enfoque especial en su rol durante la independencia del Perú.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda</li>
            <li>Zapatos cómodos</li>
            <li>Cámara fotográfica</li>
            <li>Protector solar</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-pampaAyacucho").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Ayacucho/pampaayacucho.jpeg");
    localStorage.setItem("imagen1", "../img/Ayacucho/pampadeayacucho/pampadeayacucho1.jpg");
    localStorage.setItem("imagen2", "../img/Ayacucho/pampadeayacucho/pampadeayacucho2.jpg");
    localStorage.setItem("imagen3", "../img/Ayacucho/pampadeayacucho/pampadeayacucho3.jpg");
    
    let precioViaje = document.getElementById("precioViajePampaAyacucho").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Pampa de Ayacucho");
    localStorage.setItem("TituloTicket", "Ayacucho: Pampa de Ayacucho - Escenario de la batalla");
    localStorage.setItem("descripcionViaje", "Conoce la histórica Pampa de Ayacucho, donde tuvo lugar la última batalla por la independencia del Perú.");
    localStorage.setItem("descripcion-2", "Visita el monumento histórico y aprende sobre los hechos cruciales que marcaron el destino del país.");
    localStorage.setItem("descripcion-3", "Además de su importancia histórica, la pampa ofrece impresionantes paisajes de la sierra peruana.");
    localStorage.setItem("dia1", "Recorreremos el campo de batalla, visitaremos el monumento a la independencia y exploraremos las zonas cercanas.");
    localStorage.setItem("dia2", "Tendrás tiempo libre para disfrutar del paisaje y reflexionar sobre la importancia de este sitio histórico.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda</li>
            <li>Zapatos cómodos</li>
            <li>Cámara fotográfica</li>
            <li>Protector solar</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-BanosInca").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Cajamarca/bañosdelinca.jpg");
    localStorage.setItem("imagen1", "../img/Cajamarca/banosdelinca/banosdelinca1.jpg");
    localStorage.setItem("imagen2", "../img/Cajamarca/banosdelinca/banosdelinca2.jpg");
    localStorage.setItem("imagen3", "../img/Cajamarca/banosdelinca/banosdelinca3.jpg");
    
    let precioViaje = document.getElementById("precioViajeBanosInca").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Baños del Inca");
    localStorage.setItem("TituloTicket", "Cajamarca: Baños del Inca - Relájate en las aguas termales");
    localStorage.setItem("descripcionViaje", "Disfruta de las relajantes aguas termales de los Baños del Inca, un destino turístico lleno de historia.");
    localStorage.setItem("descripcion-2", "Las aguas termales de Baños del Inca fueron utilizadas por los Incas y están rodeadas de hermosos paisajes.");
    localStorage.setItem("descripcion-3", "En este viaje podrás relajarte y aprender sobre la historia de esta famosa zona termal.");
    localStorage.setItem("dia1", "Nos dirigiremos a Baños del Inca para disfrutar de sus aguas termales y descansar en el entorno natural. Luego, podrás recorrer el área y conocer su historia.");
    localStorage.setItem("dia2", "Tendrás tiempo libre para relajarte en las piscinas termales o explorar los alrededores antes de regresar a Cajamarca.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda</li>
            <li>Ropa de baño</li>
            <li>Sandalias</li>
            <li>Protector solar</li>
            <li>Cámara fotográfica</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-VentanillasOtuzco").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Cajamarca/otuzco.jpg");
    localStorage.setItem("imagen1", "../img/Cajamarca/ventanillas/ventanilla1.jpg");
    localStorage.setItem("imagen2", "../img/Cajamarca/ventanillas/ventanilla2.jpg");
    localStorage.setItem("imagen3", "../img/Cajamarca/ventanillas/ventanilla3.jpg");
    
    let precioViaje = document.getElementById("precioViajeVentanillasOtuzco").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Ventanillas de Otuzco");
    localStorage.setItem("TituloTicket", "Cajamarca: Ventanillas de Otuzco - Un vistazo al pasado funerario");
    localStorage.setItem("descripcionViaje", "Visita las Ventanillas de Otuzco, un sitio arqueológico donde podrás observar tumbas en acantilados.");
    localStorage.setItem("descripcion-2", "Este lugar fue usado como cementerio por los antiguos cajamarquinos y es un destino fascinante.");
    localStorage.setItem("descripcion-3", "Durante el recorrido aprenderás sobre la cultura preincaica de la región.");
    localStorage.setItem("dia1", "Visitaremos las Ventanillas de Otuzco, un sitio arqueológico donde se encuentran tumbas construidas en los acantilados.");
    localStorage.setItem("dia2", "Tras la visita guiada, tendrás tiempo para explorar el área y disfrutar de las vistas panorámicas.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda</li>
            <li>Zapatos cómodos</li>
            <li>Cámara fotográfica</li>
            <li>Protector solar</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});


document.getElementById("btn-machuPicchu").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Cusco/machuPicchu-slider2.jpg");
    localStorage.setItem("imagen1", "../img/Cusco/machupicchu/machupiccu1.jpg");
    localStorage.setItem("imagen2", "../img/Cusco/machupicchu/machupiccu2.jpg");
    localStorage.setItem("imagen3", "../img/Cusco/machupicchu/machupiccu3.jpg"); //regresalo como estaba uwu
    
    let precioViaje = document.getElementById("precioViajeMachuPicchu").innerText;
    let precio = precioViaje.replace(/\D/g, ''); //Con esto se quita cualquier caracter que no sea número
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Machu Picchu");
    localStorage.setItem("TituloTicket", "Cusco:Machu Picchu - 2 días para explorar una maravilla del mundo")
    localStorage.setItem("descripcionViaje", "Este es un viaje emocionante a Machu Picchu, la ciudadela inca más famosa de Perú. Incluye guía, transporte y estadía.");
    localStorage.setItem("descripcion-2", "Recorre el pintoresco valle de Urubamba, descubre joyas arqueológicas ocultas y disfruta de la grandeza de Machu Picchu. Este viaje inmersivo ofrece tiempo suficiente para saborear la mística y las maravillas de esta antigua maravilla.");
    localStorage.setItem("descripcion-3", "Machu Picchu en autobús es una de las soluciones más populares y económicas para visitar el sitio sagrado de Machu Picchu.");
    localStorage.setItem("dia1", "De 6:00 a 7:00 am iniciaremos con el recojo de nuestros pasajeros de sus hoteles, luego partiremos con dirección a Hidroeléctrica por aproximadamente 6 horas.<br><br>En el camino, haremos una parada en Santa Teresa para tener un delicioso almuerzo en los restaurantes locales. Desde aquí descenderemos al valle de Santa Teresa, y llegaremos a la estación Hidroeléctrica.<br><br>En Hidroeléctrica, iniciamos una caminata de 2h30mn (mayormente plana) para llegar a Aguas Calientes. También tienes la opción de tomar un tren si no quieres caminar (No incluido).<br><br>A su llegada a Aguas Calientes, reúnase con nuestro guía en la Plaza de Armas. El guía le brindará detalles adicionales del recorrido y lo dirigirá a su alojamiento. Le recomendamos utilizar el resto de su día para relajarse en las aguas termales locales.<br><br>Por la noche, disfrute de una cena grupal donde tendrá la oportunidad de socializar y relajarse. Durante este tiempo, el guía también le proporcionará toda la información necesaria para las actividades del día siguiente.");
    localStorage.setItem("dia2", "Despertarse temprano para desayunar en el hotel para llegar a Machu Picchu a tiempo para ver las construcciones incas más icónicas casi sin gente.<br><br>Desde Aguas Calientes, hay dos formas de llegar a la entrada principal de Machu Picchu: caminando o en autobús (no incluido). Cualquiera que sea la opción que elija, la idea es llegar a Machu Picchu por la mañana cuando lo abran.<br><br>Caminar hasta Machu Picchu toma 1:20 horas a un ritmo regular. Comience a caminar a las 4:00 am de la mañana desde Aguas Calientes hasta el primer punto de control ubicado justo en la base de Machu Picchu que abre a las 5:00. Este puesto de control es solo para los excursionistas, donde debe mostrar su entrada a Machupicchu y su pasaporte, luego debe caminar por las escaleras hasta Machu Picchu, que toma 45 minutos y debe hacer casi 1700 escalones incas. La idea de subir a Machu Picchu caminando es ganarle a los autobuses para ser los primeros en llegar a Machupicchu. Una vez en el puesto de control principal, ingresa a Machupicchu.<br><br>Una vez dentro, tendrá tiempo para disfrutar de las increíbles vistas y tomar fotografías, luego le brindaremos 2 horas de visita guiada a Machupicchu.<br><br>Luego tendrá tiempo libre para explorar Machupicchu por su cuenta.<br><br>Después de algunas horas en Machupicchu, debe regresar caminando.");
    localStorage.setItem("listaEquipaje", `
                                            <ul>
                                                <li>Pasaporte original</li>
                                                <li>Gorra</li>
                                                <li>Traje de Baño y Toalla</li>
                                                <li>Zapatos para caminata</li>
                                                <li>Chaqueta impermeable</li>
                                                <li>Lentes de Sol</li>
                                                <li>Botella de Agua</li>
                                                <li>Protector Solar</li>
                                                <li>Repelente de Insectos</li>
                                                <li>Snacks</li>
                                                <li>Dinero en soles</li>
                                            </ul>
                                        `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-ValleSagrado").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Cusco/Valle Sagrado de los Incas.jpg");
    localStorage.setItem("imagen1", "../img/Cusco/vallesagrado/vallesagrado1.jpg");
    localStorage.setItem("imagen2", "../img/Cusco/vallesagrado/vallesagrado2.jpg");
    localStorage.setItem("imagen3", "../img/Cusco/vallesagrado/vallesagrado3.jpg");
    
    let precioViaje = document.getElementById("precioViajeValleSagrado").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Valle Sagrado de los Incas");
    localStorage.setItem("TituloTicket", "Cusco: Valle Sagrado de los Incas - Un viaje a la cuna de la civilización Inca");
    localStorage.setItem("descripcionViaje", "Explora el Valle Sagrado de los Incas, un lugar lleno de historia, paisajes naturales y ruinas arqueológicas.");
    localStorage.setItem("descripcion-2", "Visita los sitios más emblemáticos del Valle, como Ollantaytambo, Pisac y otros puntos arqueológicos.");
    localStorage.setItem("descripcion-3", "Este es un destino único para los amantes de la historia y el senderismo.");
    localStorage.setItem("dia1", "Recorreremos el Valle Sagrado, explorando los sitios arqueológicos más importantes y disfrutando de la belleza del paisaje.");
    localStorage.setItem("dia2", "Disfrutaremos de una caminata por el valle y visitaremos los mercados locales para conocer más sobre las tradiciones de la región.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda y ligera</li>
            <li>Zapatos para caminatas</li>
            <li>Cámara fotográfica</li>
            <li>Protector solar</li>
            <li>Botella de agua</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-Huacachina").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Ica/huacachina.jpg");
    localStorage.setItem("imagen1", "../img/Ica/huacachina/huacachina1.jpg");
    localStorage.setItem("imagen2", "../img/Ica/huacachina/huacachina2.jpg");
    localStorage.setItem("imagen3", "../img/Ica/huacachina/huacachina3.jpg");
    
    let precioViaje = document.getElementById("precioViajeHuacachina").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Huacachina de Ica");
    localStorage.setItem("TituloTicket", "Ica: Huacachina - Oasis en el desierto");
    localStorage.setItem("descripcionViaje", "Visita Huacachina, un oasis natural en el desierto de Ica, famoso por sus impresionantes dunas y deportes de aventura.");
    localStorage.setItem("descripcion-2", "Realiza paseos en buggies, practica sandboarding y disfruta del entorno único de este oasis.");
    localStorage.setItem("descripcion-3", "Es un destino perfecto para los amantes de la aventura y los paisajes desérticos.");
    localStorage.setItem("dia1", "Comenzaremos nuestra aventura en Huacachina, disfrutando de las vistas del oasis y realizando un paseo en buggy por las dunas.");
    localStorage.setItem("dia2", "Tendrás tiempo para practicar sandboarding y explorar la zona antes de regresar a Ica.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda</li>
            <li>Protector solar</li>
            <li>Gafas de sol</li>
            <li>Cámara fotográfica</li>
            <li>Botella de agua</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-islasBallestas").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Ica/islasballestas.jpg");
    localStorage.setItem("imagen1", "../img/Ica/islasBallestas/islasballestas1.jpg");
    localStorage.setItem("imagen2", "../img/Ica/islasBallestas/islasballestas2.jpg");
    localStorage.setItem("imagen3", "../img/Ica/islasBallestas/islasballestas3.jpg");
    
    let precioViaje = document.getElementById("precioViajeIslasBallestas").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Islas Ballestas");
    localStorage.setItem("TituloTicket", "Paracas: Islas Ballestas - Un viaje al paraíso natural");
    localStorage.setItem("descripcionViaje", "Embárcate en un recorrido por las Islas Ballestas, hogar de una gran variedad de fauna marina.");
    localStorage.setItem("descripcion-2", "Observa lobos marinos, aves guaneras, pingüinos de Humboldt y otras especies en su hábitat natural.");
    localStorage.setItem("descripcion-3", "Una experiencia única para los amantes de la naturaleza y la vida silvestre.");
    localStorage.setItem("dia1", "Tomaremos un bote para recorrer las Islas Ballestas, observando la fauna y aprendiendo sobre el ecosistema marino.");
    localStorage.setItem("dia2", "Después de la visita, regresaremos a Paracas, donde podrás disfrutar de la playa o explorar los alrededores.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda y ligera</li>
            <li>Protector solar</li>
            <li>Cámara fotográfica</li>
            <li>Gafas de sol</li>
            <li>Binoculares (opcional)</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});


document.getElementById("btn-lagoJunin").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Junin/lagojunin.jpg");
    localStorage.setItem("imagen1", "../img/Junin/lagoJunin/lagoJunin1.jpg");
    localStorage.setItem("imagen2", "../img/Junin/lagoJunin/lagoJunin2.jpg");
    localStorage.setItem("imagen3", "../img/Junin/lagoJunin/lagoJunin3.jpg");
    
    let precioViaje = document.getElementById("precioViajeLagoJunin").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Lago Junín");
    localStorage.setItem("TituloTicket", "Junín: Lago Junín - Un paraíso natural en los Andes");
    localStorage.setItem("descripcionViaje", "Visita el Lago Junín, un lugar rodeado de naturaleza y fauna, ideal para el ecoturismo y la observación de aves.");
    localStorage.setItem("descripcion-2", "Este es un destino tranquilo para relajarse y disfrutar del paisaje montañoso y las aves migratorias.");
    localStorage.setItem("descripcion-3", "Un sitio perfecto para los amantes de la naturaleza y el ecoturismo.");
    localStorage.setItem("dia1", "Visitaremos el Lago Junín, donde podrás disfrutar de un paseo en bote y observar la increíble fauna local.");
    localStorage.setItem("dia2", "Tendrás tiempo para caminar alrededor del lago, explorar sus alrededores y disfrutar del paisaje.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda y abrigada</li>
            <li>Botas o zapatos para caminar</li>
            <li>Cámara fotográfica</li>
            <li>Protector solar</li>
            <li>Binoculares (opcional)</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-chanchan").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/La Libertad/ChanChan.jpg");
    localStorage.setItem("imagen1", "../img/La Libertad/chanchan/chanchan1.jpg");
    localStorage.setItem("imagen2", "../img/La Libertad/chanchan/chanchan2.jpg");
    localStorage.setItem("imagen3", "../img/La Libertad/chanchan/chanchan3.jpg");
    
    let precioViaje = document.getElementById("precioViajeChanChan").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Chan Chan");
    localStorage.setItem("TituloTicket", "La Libertad: Chan Chan - La ciudad de adobe más grande de América");
    localStorage.setItem("descripcionViaje", "Descubre la ciudad de Chan Chan, una antigua ciudad preincaica de la cultura Chimú, famosa por sus enormes estructuras de adobe.");
    localStorage.setItem("descripcion-2", "Un lugar lleno de historia y arquitectura, donde podrás explorar los palacios y murallas construidos con adobe.");
    localStorage.setItem("descripcion-3", "Este destino es ideal para los interesados en la arqueología y la historia antigua.");
    localStorage.setItem("dia1", "Exploraremos las ruinas de Chan Chan, visitando los diferentes palacios y observando las impresionantes paredes de adobe.");
    localStorage.setItem("dia2", "Tendrás tiempo para seguir aprendiendo sobre la cultura Chimú y disfrutar de los alrededores de la ciudad.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda</li>
            <li>Zapatos cómodos</li>
            <li>Cámara fotográfica</li>
            <li>Protector solar</li>
            <li>Sombrero o gorra</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-huacaLuna").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/La Libertad/huacadelaluna.jpg");
    localStorage.setItem("imagen1", "../img/La Libertad/huacaDeLaLuna/huacaDeLaLuna1.jpg");
    localStorage.setItem("imagen2", "../img/La Libertad/huacaDeLaLuna/huacaDeLaLuna2.jpg");
    localStorage.setItem("imagen3", "../img/La Libertad/huacaDeLaLuna/huacaDeLaLuna3.jpg");
    
    let precioViaje = document.getElementById("precioViajeHuacaLuna").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Huaca de la Luna");
    localStorage.setItem("TituloTicket", "La Libertad: Huaca de la Luna - Templo de los Moche");
    localStorage.setItem("descripcionViaje", "Visita la Huaca de la Luna, un sitio arqueológico de la cultura Moche, famosa por sus impresionantes relieves y templos.");
    localStorage.setItem("descripcion-2", "Recorrerás los templos, conocerás la historia de la cultura Moche y verás las fascinantes excavaciones arqueológicas.");
    localStorage.setItem("descripcion-3", "Ideal para los interesados en las culturas preincaicas y la historia de Perú.");
    localStorage.setItem("dia1", "Recorreremos la Huaca de la Luna, con un guía experto que te explicará la historia y el significado de las pinturas y relieves.");
    localStorage.setItem("dia2", "Disfrutaremos de una caminata alrededor del sitio y exploraremos otros templos cercanos.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa cómoda</li>
            <li>Zapatos cómodos</li>
            <li>Cámara fotográfica</li>
            <li>Protector solar</li>
            <li>Sombrero o gorra</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-iquitos").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Loreto/iquitos.jpg");
    localStorage.setItem("imagen1", "../img/Loreto/iquitos/iquitos1.jpg");
    localStorage.setItem("imagen2", "../img/Loreto/iquitos/iquitos2.jpg");
    localStorage.setItem("imagen3", "../img/Loreto/iquitos/iquitos3.jpg");
    
    let precioViaje = document.getElementById("precioViajeIquitos").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Iquitos");
    localStorage.setItem("TituloTicket", "Loreto: Iquitos - Aventura en la selva amazónica");
    localStorage.setItem("descripcionViaje", "Iquitos es la puerta de entrada al Amazonas peruano. Vive una experiencia única explorando la selva y su biodiversidad.");
    localStorage.setItem("descripcion-2", "Realiza un recorrido por el río Amazonas, observa fauna exótica y disfruta de la cultura amazónica.");
    localStorage.setItem("descripcion-3", "Un destino perfecto para los aventureros y amantes de la naturaleza.");
    localStorage.setItem("dia1", "Comenzaremos nuestra aventura en el Amazonas con un recorrido por el río y visitas a las comunidades nativas.");
    localStorage.setItem("dia2", "Pasaremos el día explorando la selva, avistando animales y aprendiendo sobre las plantas medicinales.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa ligera y cómoda</li>
            <li>Botas o zapatos para caminatas</li>
            <li>Repelente de insectos</li>
            <li>Protector solar</li>
            <li>Cámara fotográfica</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-pacaya").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Loreto/pacayasamiria.jpg");
    localStorage.setItem("imagen1", "../img/Loreto/pacaya/pacayaSamiria1.jpg");
    localStorage.setItem("imagen2", "../img/Loreto/pacaya/pacayaSamiria2.jpg");
    localStorage.setItem("imagen3", "../img/Loreto/pacaya/pacayaSamiria3.jpg");
    
    let precioViaje = document.getElementById("precioViajePacayaSamiria").innerText;
    let precio = precioViaje.replace(/\D/g, '');
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Reserva Nacional Pacaya Samiria");
    localStorage.setItem("TituloTicket", "Loreto: Reserva Nacional Pacaya Samiria - Un santuario en la selva");
    localStorage.setItem("descripcionViaje", "La Reserva Nacional Pacaya Samiria es una de las áreas naturales protegidas más grandes del Perú, ideal para los amantes de la naturaleza.");
    localStorage.setItem("descripcion-2", "Recorre el Amazonas, observa la fauna silvestre y disfruta de una experiencia única en la selva.");
    localStorage.setItem("descripcion-3", "Un destino único para ecoturistas y aventureros.");
    localStorage.setItem("dia1", "Visitaremos la Reserva Pacaya Samiria, navegando por el río Amazonas y aprendiendo sobre el ecosistema local.");
    localStorage.setItem("dia2", "Pasaremos el día explorando los canales y observando la fauna en su hábitat natural.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa ligera y cómoda</li>
            <li>Botas o zapatos para caminatas</li>
            <li>Repelente de insectos</li>
            <li>Protector solar</li>
            <li>Cámara fotográfica</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});


document.getElementById("btn-islaTaquile").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Puno/islataquile.jpg");
    localStorage.setItem("imagen1", "../img/Puno/islaTaquile/islataquile1.jpg");
    localStorage.setItem("imagen2", "../img/Puno/islaTaquile/islataquile2.jpg");
    localStorage.setItem("imagen3", "../img/Puno/islaTaquile/islataquile3.jpg");
    
    let precioViaje = document.getElementById("precioViajeIslaTaquile").innerText;
    let precio = precioViaje.replace(/\D/g, ''); 
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Isla de Taquile");
    localStorage.setItem("TituloTicket", "Puno: Isla de Taquile - Un viaje cultural en el Lago Titicaca");
    localStorage.setItem("descripcionViaje", "Visita la Isla de Taquile, famosa por sus tradiciones textiles. En este viaje cultural interactuarás con la comunidad local y conocerás la vida en el Lago Titicaca.");
    localStorage.setItem("descripcion-2", "Taquile es conocida por sus hermosos paisajes y sus habitantes, quienes siguen preservando sus costumbres ancestrales, como el tejido manual. Disfruta de la tranquilidad del lago y el contacto directo con la cultura local.");
    localStorage.setItem("descripcion-3", "Un recorrido único para conocer las tradiciones vivas de los pueblos del Titicaca, rodeado de impresionantes paisajes lacustres.");
    localStorage.setItem("dia1", "Partiremos de Puno y tomaremos un bote hacia la Isla de Taquile. Durante el recorrido por el Lago Titicaca, podrás disfrutar de impresionantes vistas de las islas flotantes de los Uros. Al llegar a la isla, caminaremos por sus senderos para conocer más sobre la vida local, su historia y sus tradiciones textiles.");
    localStorage.setItem("dia2", "En la Isla de Taquile, tendrás tiempo para explorar el pueblo, interactuar con los habitantes y aprender sobre sus famosas técnicas de tejido. Regresaremos por la tarde a Puno.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa ligera</li>
            <li>Gorra o sombrero</li>
            <li>Zapatos cómodos</li>
            <li>Cámara fotográfica</li>
            <li>Protector solar</li>
            <li>Botella de agua</li>
            <li>Ropa de abrigo (por la tarde puede hacer frío)</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-lagoTiticaca").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/Puno/lagotiticaca.jpg");
    localStorage.setItem("imagen1", "../img/Puno/lagoTiticaca/lagotiticaca1.jpg");
    localStorage.setItem("imagen2", "../img/Puno/lagoTiticaca/lagotiticaca2.jpg");
    localStorage.setItem("imagen3", "../img/Puno/lagoTiticaca/lagotiticaca3.jpg");
    
    let precioViaje = document.getElementById("precioViajeLagoTiticaca").innerText;
    let precio = precioViaje.replace(/\D/g, ''); 
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Lago Titicaca");
    localStorage.setItem("TituloTicket", "Puno: Lago Titicaca - Navega en el lago navegable más alto del mundo");
    localStorage.setItem("descripcionViaje", "Este viaje te lleva a conocer el Lago Titicaca, el lago navegable más alto del mundo, hogar de las islas flotantes de los Uros y la Isla de Taquile.");
    localStorage.setItem("descripcion-2", "En este tour, disfrutarás de paseos en bote por el lago, explorando sus islas flotantes y la comunidad tradicional de Taquile. ¡Una experiencia única!");
    localStorage.setItem("descripcion-3", "El Lago Titicaca es un lugar lleno de mitos y leyendas, además de ofrecer vistas impresionantes que no te puedes perder.");
    localStorage.setItem("dia1", "Iniciaremos el viaje con un paseo en bote por el Lago Titicaca. Visitaremos las islas flotantes de los Uros, donde aprenderás sobre sus técnicas de construcción y vida cotidiana. Luego, continuaremos hacia la Isla de Taquile para explorar su cultura y tradiciones.");
    localStorage.setItem("dia2", "Al regresar de Taquile, tendrás tiempo libre para explorar la ciudad de Puno o disfrutar de la tranquilidad del lago antes de regresar al hotel.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa ligera</li>
            <li>Chaqueta para el viento</li>
            <li>Zapatos cómodos</li>
            <li>Cámara fotográfica</li>
            <li>Protector solar</li>
            <li>Sombrero o gorra</li>
            <li>Botella de agua</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-rioAbiseo").addEventListener("click", function() {
    localStorage.setItem("imagen", "../img/San Martin/rioabiseo.jpg");
    localStorage.setItem("imagen1", "../img/San Martin/rioabiseo/rioabiseo1.jpg");
    localStorage.setItem("imagen2", "../img/San Martin/rioabiseo/rioabiseo2.jpg");
    localStorage.setItem("imagen3", "../img/San Martin/rioabiseo/rioabiseo3.jpg");
    
    let precioViaje = document.getElementById("precioViajeRioAbiseo").innerText;
    let precio = precioViaje.replace(/\D/g, ''); 
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Reserva Nacional Río Abiseo");
    localStorage.setItem("TituloTicket", "San Martín: Reserva Nacional Río Abiseo - Ecoturismo en la Amazonía Peruana");
    localStorage.setItem("descripcionViaje", "Descubre la biodiversidad única de la Reserva Nacional Río Abiseo. Esta área protegida es hogar de especies endémicas y ofrece una experiencia de ecoturismo incomparable.");
    localStorage.setItem("descripcion-2", "En este viaje explorarás las ruinas arqueológicas y la fauna silvestre que habita en el corazón de la Amazonía peruana.");
    localStorage.setItem("descripcion-3", "Disfruta de caminatas en la selva y observa especies raras en un entorno único y protegido.");
    localStorage.setItem("dia1", "Partiremos hacia la Reserva Nacional Río Abiseo, donde realizaremos un recorrido a pie por la selva para observar flora y fauna endémica, y exploraremos las ruinas arqueológicas que se encuentran en la zona. Durante la caminata, aprenderemos sobre los ecosistemas locales y la biodiversidad de la región.");
    localStorage.setItem("dia2", "Continuaremos explorando las diferentes rutas de ecoturismo, observando más de cerca la vida silvestre y terminando el día con una charla sobre la importancia de la conservación del medio ambiente.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa ligera y de secado rápido</li>
            <li>Botas o zapatos para caminatas</li>
            <li>Sombrero o gorra</li>
            <li>Repelente de insectos</li>
            <li>Protector solar</li>
            <li>Botella de agua</li>
            <li>Cámara fotográfica</li>
            <li>Snacks energéticos</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});

document.getElementById("btn-Tarapoto").addEventListener("click", function() {
    localStorage.setItem("imagen","../img/San Martin/tarapoto.jpg");
    localStorage.setItem("imagen1","../img/San Martin/tarapoto/tarapoto1.jpg");
    localStorage.setItem("imagen2","../img/San Martin/tarapoto/tarapoto2.jpg");
    localStorage.setItem("imagen3","../img/San Martin/tarapoto/tarapoto3.jpg");
    
    let precioViaje = document.getElementById("precioViajeTarapoto").innerText;
    let precio = precioViaje.replace(/\D/g, ''); 
    localStorage.setItem("precioViaje", precio);

    localStorage.setItem("viajeSeleccionado", "Tarapoto");
    localStorage.setItem("TituloTicket", "San Martín: Tarapoto - Naturaleza, Aventura y Cultura");
    localStorage.setItem("descripcionViaje", "En este viaje a Tarapoto explorarás la belleza de la selva alta, las cascadas y las comunidades locales. Una mezcla de naturaleza, aventura y cultura.");
    localStorage.setItem("descripcion-2", "Visitarás las famosas Cataratas de Ahuashiyacu y podrás interactuar con las comunidades indígenas que habitan la región.");
    localStorage.setItem("descripcion-3", "Una oportunidad para explorar los senderos de la selva y disfrutar de la tranquilidad de la Amazonía peruana.");
    localStorage.setItem("dia1", "Iniciaremos el viaje con una visita a las Cataratas de Ahuashiyacu, una de las más impresionantes de la región. Continuaremos con un recorrido por las comunidades locales, donde aprenderás sobre su vida cotidiana y sus tradiciones.");
    localStorage.setItem("dia2", "Por la mañana, realizaremos una caminata por la selva para conocer más sobre la flora y fauna local. Regresaremos por la tarde a Tarapoto.");
    localStorage.setItem("listaEquipaje", `
        <ul>
            <li>Pasaporte original</li>
            <li>Ropa ligera</li>
            <li>Botas para caminatas</li>
            <li>Repelente de insectos</li>
            <li>Protector solar</li>
            <li>Botella de agua</li>
            <li>Cámara fotográfica</li>
            <li>Snacks</li>
        </ul>
    `);
    window.location.href = "../html/viaje.html";
});


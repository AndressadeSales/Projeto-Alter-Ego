// Variável que controla se a transformação está ativa
let sc_andressa_heroi = false;

// Função responsável pela transformação
function sc_andressa_transformar(){

    // Captura os elementos do HTML
    const nome = document.getElementById("sc_andressa_nome");

    const foto = document.getElementById("sc_andressa_foto");

    const desc = document.getElementById("sc_andressa_desc");

    const idade = document.getElementById("sc_andressa_idade");

    const hobby = document.getElementById("sc_andressa_hobby");

    const comida = document.getElementById("sc_andressa_comida");

    const sonho = document.getElementById("sc_andressa_sonho");

    const objetivo = document.getElementById("sc_andressa_objetivo");

    const body = document.getElementById("sc_andressa_body");

    // Verifica se está na versão normal
    if(sc_andressa_heroi === false){

        nome.innerHTML = "Mulher-Gato";

        foto.src = "img/heroi.webp";

        desc.innerHTML =
        "Uma anti-heroína inteligente, ágil e misteriosa que vive nas sombras de Gotham City.";

        idade.innerHTML =
        "Desconhecida";

        hobby.innerHTML =
        "Escalar prédios e agir silenciosamente pela cidade";

        comida.innerHTML =
        "Salmão";

        sonho.innerHTML =
        "Ser totalmente livre e independente.";

        objetivo.innerHTML =
        "Usar suas habilidades para sobreviver e enfrentar criminosos.";

        // Adiciona a classe da versão heroína
        body.classList.add("sc_andressa_hero");

        sc_andressa_heroi = true;
    }

    // Volta para versão civil
    else{

        nome.innerHTML = "Andressa Sales";

        foto.src = "img/eu.jpg";

        desc.innerHTML =
        "Sou dentista e estudante de ADS, gosto de academia e amo gatos.";

        idade.innerHTML =
        "26 anos";

        hobby.innerHTML =
        "Academia e programação";

        comida.innerHTML =
        "Não consigo escolher uma única comida favorita";

        sonho.innerHTML =
        "Trabalhar com tecnologia, ter estabilidade financeira e conhecer o mundo.";

        objetivo.innerHTML =
        "Ter qualidade de vida e viver ao lado das pessoas que eu amo.";

        // Remove a classe da versão heroína
        body.classList.remove("sc_andressa_hero");

        sc_andressa_heroi = false;
    }

}
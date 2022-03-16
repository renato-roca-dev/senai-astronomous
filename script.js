gsap.registerPlugin(ScrollTrigger);
// Gsap from index.html
gsap.from("#header-socials-media", {
    duration: 0.7,
    opacity: 0,
    x: -150,
    stagger: 0.7
});
gsap.from("nav", {
    duration: 0.7,
    opacity: 0,
    x: 150,
});
gsap.from("#introduction-texts", {
    duration: 0.7,
    opacity: 0,
    y: -150,
    stagger: 1
});
gsap.from("#introduction-button", {
    duration: 0.7,
    opacity: 0,
    y: -150,
});
// Gsap from planets.html
gsap.from("#planet-name-side", {
    delay: 0.2,
    duration: 0.7,
    opacity: 0,
    x: -150,
});
gsap.from(".planet-card-top", {
    delay: 0.2,
    duration: 0.7,
    opacity: 0,
    y: -100,
});
gsap.from(".planet-card-bottom", {
    delay: 0.2,
    duration: 0.7,
    opacity: 0,
    y: 50,
});
gsap.from("#main-texts-planet-name", {
    duration: 0.7,
    opacity: 0,
    y: -150,
});
// Gsap from more.html
gsap.from("#planets-cards", {
    delay: 0.3,
    duration: 0.7,
    opacity: 0,
    y: -150,
});
// button next and previous with content change
var planetName = document.getElementById("planet-name");
var planetCategory = document.getElementById("planet-category");
var planetImage = document.getElementById("planet-image");
var btnNext = document.getElementById("btn_next");
var btnNext = document.getElementById("btn_previous");
var planetsImages = ['sun-image.png', 'mercury-image.png', 'venus-image.png', 'earth-image.png', 'moon-image.png', 'mars-image.png', 'jupiter-image.png', 'saturn-image.png', 'uranos-image.png', 'netune-image.png'];
var planetsNames = ['Sol', 'Mercúrio', 'Vênus', 'Terra', 'Lua', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']
var planetsCategorys = ['Estrela anã', 'Planeta rochoso', 'Planeta rochoso', 'Planeta rochoso', 'Satélite natural', 'Planeta rochoso', 'Planeta gasoso', 'Planeta gasoso', 'Planeta gasoso', 'Planeta gasoso'];
// Planets information [p and a]
// First top card
var curiosityOne = document.getElementById("curiosityOne");
var curiosityTwo = document.getElementById("curiosityTwo");
var curiosityThree = document.getElementById("curiosityThree");
var curiosityFour = document.getElementById("curiosityFour");
var curiosityListOne = ['Estrela central do nosso Sistema solar;', 'As primeiras observações com telescópio datam de 1610, de Galileu Galilei;', 'Considerado o planeta mais parecido com a terra. Os dois são quase do mesmo tamanho e composição;', 'Cerca de 70% da superfície do planeta é coberta por água em estado líquido, elemento essencial para a existência de formas de vida;', 'É o segundo corpo celeste mais iluminado, mas não possui luz própria;', 'Um dia em Marte tem duração de 24 horas e 37 minutos, enquanto o ano possui 687 dias;', 'O planeta conta com o campo magnético mais poderoso do Sistema Solar;', 'Saturno poderia flutuar no oceano por ser menos denso;', 'A cor azulada característica do planeta é resultado da absorção de luz realizada pelo gás metano, presente na composição do planeta;', 'Netuno tem os ventos mais fortes do Sistema Solar a 2.100km/h;'];
var curiosityListTwo = ['Todos os planetas, asteroides, cometas e poeira giram ao seu redor;', 'As temperaturas no planeta podem atingir 420 ºC e -173 ºC;', 'Ele poderia ser mais fácil de colonizar do que Marte;', 'A Terra não é exatamente redonda. A rotação e a gravidade causaram um leve achatamento. Essa forma é chamada geoide;', 'Foi originada provavelmente de uma colisão;', 'Existem diversas feições na superfície de Marte que indicam a existência pretérita de água líquida naquele planeta;', 'Em algumas regiões de sua atmosfera, ele chega a ser 20 vezes mais forte do que o da Terra;', 'Saturno gira tão rápido que ficou achatado;', 'Um dia em Urano tem duração de 17 horas terrestres;', 'A gravidade da superfície de Netuno é quase semelhante à da Terra;'];
var curiosityListThree = ['Possui 99,86% de toda a massa do Sistema Solar;', 'A velocidade de rotação de Mercúrio pode atingir 180 mil km/hora;', 'Um dia em Vênus dura mais que um ano no planeta Terra;', 'Os cientistas calculam que a Terra tem cerca de 4,5 bilhões de anos.', 'Há água nela;', '', 'Júpiter é um dos cinco planetas que podem ser vistos a olho nu aqui da Terra;', 'Saturno foi visitado por apenas 4 espaçonaves;', 'Urano possui 13 aneis formados por partículas que variam de tamanho entre grãos de poeira à pequenos pedregulhos.', ''];
var curiosityListOFour = ['Formado principalmente por hidrogênio e hélio.', 'Mesmo próximo do Sol, sondas espaciais encontraram gelo em Mercúrio.', 'É o planeta mais brilhante do céu.', '', 'A Lua também é responsável pelas marés.', 'Marte possui uma fina camada atmosférica, composta principalmente por dióxido de carbono, nitrogênio e argônio.', '', 'Saturno tem 82 luas, e uma delas talvez possa abrigar vida.', '', 'Netuno tem uma atmosfera incrivelmente espessa composta de 74% de hidrogênio, 25% de hélio e aproximadamente 1% de metano.']
var planetAnchorMore = document.getElementById("knowMore");
var planetAnchorMoreList = ['https://www.natgeo.pt/ciencia/2018/05/o-sol-factos-e-curiosidades', 'https://www.hipercultura.com/mercurio-fatos-curiosidades/', 'https://olhardigital.com.br/2021/05/04/ciencia-e-espaco/conheca-6-curiosidades-sobre-venus-o-planeta-que-gira-ao-contrario/', 'https://www.suapesquisa.com/curiosidades/planeta_terra.htm', 'https://www.uol.com.br/tilt/noticias/redacao/2021/11/21/15-fatos-incriveis-sobre-a-lua-que-voce-talvez-nao-saiba.htm', 'https://www.natgeo.pt/espaco/2018/11/10-coisas-incriveis-sobre-marte', 'https://www.megacurioso.com.br/jupiter/59813-fatos-e-curiosidades-sobre-jupiter-o-maior-planeta-do-sistema-solar.htm#:~:text=O%20planeta%20conta%20com%20o,da%20Lua%20e%20de%20V%C3%AAnus.', 'https://www.hipercultura.com/saturno-dados-fatos/', 'https://futuroastronomo.com.br/7-curiosidades-interessantes-sobre-o-planeta-urano', 'https://diariodoestadogo.com.br/10-curiosidades-do-planeta-netuno-104485/'];
// Second top card
var planetArticlesAnchorOne = document.getElementById("articleOne");
var planetArticlesAnchorTwo = document.getElementById("articleTwo");
var planetArticlesAnchorThree = document.getElementById("articleThree");
var planetArticlesInnerOne = ['Artigo em inglês sobre o Sol', 'Artigo em inglês sobre Mercúrio', 'Artigo em ingles sobre Vênus', 'Artigo em ingles sobre a Terra', 'Artigo em ingles sobre a Lua', 'Artigo em ingles sobre Marte', 'Artigo em ingles sobre Júpiter', 'Artigo em ingles sobre Saturno', 'Artigo em ingles sobre Urano', 'Artigo em ingles sobre Netuno'];
var planetArticlesInnerTwo = ['Artigo em português', 'Artigo em português', 'Artigo em português', 'Artigo em português', 'Artigo em português', 'Artigo em português', 'Artigo em português', 'Artigo em português', 'Artigo em português', 'Artigo em português',];
var planetArticlesInnerThree = ['Documentário no Youtube sobre a estrela', 'Documentário no Youtube sobre o planeta', 'Documentário no Youtube sobre o planeta', 'Documentário no Youtube sobre o planeta',  'Documentário no Youtube sobre o satélite', 'Documentário no Youtube sobre o planeta', 'Documentário no Youtube sobre o planeta', 'Documentário no Youtube sobre o planeta', 'Documentário no Youtube sobre o planeta', 'Documentário no Youtube sobre o planeta',];
var planetArticlesListAnchorOne = ['https://solarsystem.nasa.gov/solar-system/sun/overview/', 'https://www.space.com/36-mercury-the-suns-closest-planetary-neighbor.html', 'https://www.space.com/44-venus-second-planet-from-the-sun-brightest-planet-in-solar-system.html', 'https://www.nationalgeographic.com/science/article/earth', 'https://www.britannica.com/place/Moon', 'https://www.nationalgeographic.com/science/article/mars-1', 'https://www.space.com/7-jupiter-largest-planet-solar-system.html', 'https://www.nationalgeographic.com/science/article/saturn', 'https://www.nationalgeographic.com/science/article/uranus', 'https://www.nationalgeographic.com/science/article/neptune'];
var planetArticlesListAnchorTwo = ['http://www.sbfisica.org.br/rbef/pdf/v22a10.pdf', 'https://www.planetary.org/worlds/mercury', 'https://www.if.ufrgs.br/ast/solar/portug/venus.htm', 'https://mundoeducacao.uol.com.br/geografia/planeta-terra.htm', 'https://escola.britannica.com.br/artigo/Lua/481956', 'https://www.if.ufrgs.br/ast/solar/portug/mars.htm', 'https://www.if.ufrgs.br/ast/solar/portug/jupiter.htm', 'http://astro.if.ufrgs.br/solar/saturn.htm', 'https://escola.britannica.com.br/artigo/Urano/482756', 'http://astro.if.ufrgs.br/solar/neptune.htm'];
var planetArticlesListAnchorThree = ['https://www.youtube.com/watch?v=tBLLuZvuyYw', 'https://www.youtube.com/watch?v=9k3wo4FKb30', 'https://www.youtube.com/watch?v=-FJ34qWCSYY', 'https://www.youtube.com/watch?v=MuJrgFguYRg', 'https://www.youtube.com/watch?v=Iz_AAOpnun4', 'https://www.youtube.com/watch?v=ImpreapHhHY', 'https://www.youtube.com/watch?v=4BPPh8sPHCc', 'https://www.youtube.com/watch?v=908Kcgx14p0', 'https://www.youtube.com/watch?v=szgbpny9Sag', 'https://www.youtube.com/watch?v=xO-fBNKjOzs'];
// Third bottom card
var planetInfoBasics = document.getElementById("basics-info");
var planetsInfosBasics = ['Composto principalmente por hidrogênio e hélio, além de ferro, níquel, oxigênio, silício, carbono, nitrogênio, enxofre. Sua temperatura varia, podendo atingir até 5.505 graus Celsius na superfície e 16 milhões de graus Celsius no núcleo. O Sol é de fundamental importância para a manutenção da vida terrestre, fornecendo luz, calor, energia, além de ser responsável pela evaporação e por diversos processos biológicos em plantas e animais. O Sol também possui uma estrutura, sendo ela: Núcleo, Fotosfera, Cromosfera e Coroa.', 'Mercúrio é o planeta mais próximo ao Sol e o oitavo em tamanho no sistema solar. É basicamente constituído por ferro, sendo chamado por Iron Planet. Pode ser visto da Terra a olho nu, contudo pouco antes do amanhecer e instantes após o anoitecer porque sua proximidade com o Sol dificulta a observação. Devido à sua velocidade, foi batizado com o nome de Mercúrio por ser o deus do comércio, das viagens e da malandragem.', 'O nome do planeta em questão é proveniente da deusa romana Vênus. O planeta Vênus possui grande semelhança com a Terra, ambos são do tipo terrestre, além disso, são semelhantes quanto ao tamanho, massa e composição. Outra diferença entre Terra e Vênus é a atmosfera, pois a atmosfera do segundo é 92 vezes mais densa que a da Terra. Isso por que a atmosfera é constituída em grande parte de gás carbônico, ocasionando um profundo efeito estufa que coloca o planeta como o mais quente entre todos os outros. Uma curiosidade particular de Vênus é em relação aos movimentos de rotação e translação, em que um dia nesse planeta é maior que um ano.', 'Vivemos no planeta chamado Terra, também conhecido como mundo, e até onde sabemos, trata-se do único planeta habitável do Sistema Solar. Também conhecido como “planeta água”, a Terra possui características bastante peculiares quando comparadas aos demais planetas. Sua posição em relação ao Sol é um dos principais motivos para a existência de vida e para a existência de água em seus três estados físicos. Ao dizer que ele é um planeta rochoso, estamos falando basicamente da sua composição, sua superfície sólida é formada por rochas e metais pesados, como o ferro.', 'A Lua é o único satélite natural da Terra. Formou-se praticamente ao mesmo tempo em que a Terra com o surgimento do Universo. Por sua proximidade com o planeta Terra, é o objeto maior e mais brilhante no céu noturno terrestre. Sendo a quinta maior lua do sistema solar. O nome Lua tem origem do latim, Luna, e foi usado para indicar o satélite natural da Terra, pois a princípio era a única lua conhecida.', 'Marte é um dos planetas mais estudados do sistema solar. Podendo ser visto da Terra a olho nu, ou seja, sem auxílio de um telescópio. Marte é um planeta muito frio, árido e rochoso. A sua temperatura máxima é de aproximadamente 25°C, com uma média de -60°C, a qual pode chegar até cerca de -140°C durante à noite. Sendo um planeta terrestre (rochoso), suas camadas são compostas por atmosfera, crosta, manto e núcleo. A maioria das rochas na superfície é formada por basalto.', 'As características de Júpiter são colossais e impressionantes assim como o próprio planeta. Dentre as características visíveis, podemos destacar as nuvens coloridas que pairam na superfície. Tal coloração é resultado da composição atmosférica (hidrogênio e hélio) e das intensas tempestades que ocorrem, com ventos de até 600 km/hora. A nuvem mais famosa foi apelidada de Mancha Vermelha, tão grande que é capaz de encobrir toda a Terra. Essas tempestades são comuns em Júpiter devido a ele ser um planeta gasoso e ter a atmosfera com grande quantidade de hidrogênio. Estudos apontam que algumas tempestades duram horas, outras podem durar séculos, sendo fatais para os seres humanos.', 'Saturno é o segundo maior planeta do Sistema Solar, com 9 vezes o tamanho da Terra. Está relativamente distante do Sol, sendo o sexto planeta a partir dessa estrela, demorando 29,4 anos terrestres, ou 10.756 dias, para completar uma volta em torno dela. O seu movimento de rotação é curto, tendo duração de apenas 10,7 horas. Os anéis de Saturno são formados por partículas e fragmentos maiores de rocha e gelo, originárias de asteroides, cometas e luas que foram destruídos pela força gravitacional do planeta. Distribuem-se horizontalmente por até 282.000 km, com espessura variável que pode ir de alguns metros a 1 km, de acordo com a literatura acadêmica.', 'Urano é um planeta gasoso e é o terceiro maior planeta do Sistema Solar e sua massa é formada por gases, principalmente hidrogênio e hélio. A sua nomenclatura homenageia o deus Urano da mitologia grega, que representava a personificação do céu. Os anéis de Urano foram identificados em 1977. Na época, a descoberta significou uma grande novidade para a astronomia, uma vez que, até então, acreditava-se que apenas Saturno possuía anéis. A principal característica dos anéis de Urano é a opacidade, uma que vez ele não tem iluminação própria. O planeta Urano possui 13 anéis planetários conhecidos. Eles são estreitos e formados, possivelmente, por uma estrutura de partículas espaciais e até mesmo gelo.', 'O planeta Netuno é composto, principalmente, de água muito quente, amônia e metano em seu núcleo, que tem aproximadamente o tamanho da Terra. A atmosfera é formada por hidrogênio, hélio e metano. Assim como Urano, a cor azulada brilhante de Netuno resulta da elevada quantidade de metano na atmosfera. Por conta das peculiaridades do núcleo e atmosfera, Netuno também é chamado de gigante de gelo. Netuno tem seis anéis conhecidos, todos localizados após as observações da sonda Voyager 2. Os anéis são não uniformes, mas têm quatro grossos Regiões (massas de poeira) chamado arcos e seriam jovens, com poucos bilhões de anos.'];
// Index start
var i = 0;
// Function previous planet
function previous(){
    if (i <= 0) i = planetsImages.length;
    i--;
    return setInfos();
}
// Function next planet
function next(){
    if(i > 9 - 1) i = -1;
    i++;
    return setInfos();
}
// Function set information with planet content
function setInfos(){
    var planetsInfos = 
    [planetImage.setAttribute('src', '../img/' + planetsImages[i]), 
    planetName.innerHTML = planetsNames[i], 
    planetCategory.innerHTML = planetsCategorys[i],
    planetAnchorMore.href = planetAnchorMoreList[i],
    curiosityOne.innerHTML = curiosityListOne[i],
    curiosityTwo.innerHTML = curiosityListTwo[i],
    curiosityThree.innerHTML = curiosityListThree[i],
    curiosityFour.innerHTML = curiosityListOFour[i],
    planetArticlesAnchorOne.text = planetArticlesInnerOne[i],
    planetArticlesAnchorTwo.text = planetArticlesInnerTwo[i],
    planetArticlesAnchorThree.text = planetArticlesInnerThree[i],
    planetArticlesAnchorOne.href = planetArticlesListAnchorOne[i],
    planetArticlesAnchorTwo.href = planetArticlesListAnchorTwo[i],
    planetArticlesAnchorThree.href = planetArticlesListAnchorThree[i],
    planetInfoBasics.innerHTML = planetsInfosBasics[i]]
    return planetsInfos;
}
// Functions to make change page to href
function changePageSun(){
    window.location.href = '../pages/planets.html#sun';
}
function changePageMercury(){
    window.location.href = '../pages/planets.html#planet-mercury';
}
function changePageVenus(){
    window.location.href = '../pages/planets.html#planet-venus';
}
function changePageEarth(){
    window.location.href = '../pages/planets.html#planet-earth';
}
function changePageMoon(){
    window.location.href = '../pages/planets.html#moon';
}
function changePageMars(){
    window.location.href = '../pages/planets.html#planet-mars';
}
function changePageJupiter(){
    window.location.href = '../pages/planets.html#planet-jupiter';
}
function changePageSaturn(){
    window.location.href = '../pages/planets.html#planet-saturn';
}
function changePageUranus(){
    window.location.href = '../pages/planets.html#planet-uranus';
}
function changePageNeptune(){
    window.location.href = '../pages/planets.html#planet-neptune';
}
// Function to check who planet is selected
function checkPage(){
    if (window.location.hash === "#sun") {
        return goToSun();
    }
    if (window.location.hash === "#planet-mercury") {
        return goToMercury();
    }
    if (window.location.hash === "#planet-venus") {
        return goToVenus();
    }
    if (window.location.hash === "#planet-earth") {
        return goToEarth();
    }
    if (window.location.hash === "#moon") {
        return goToMoon();
    }
    if (window.location.hash === "#planet-mars") {
        return goToMars();
    }
    if (window.location.hash === "#planet-jupiter") {
        return goToJupiter();
    }
    if (window.location.hash === "#planet-saturn") {
        return goToSaturn();
    }
    if (window.location.hash === "#planet-uranus") {
        return goToUranus();
    }
    if (window.location.hash === "#planet-neptune") {
        return goToNeptune();
    }
}
// Functions to change content if hash equals to name of a planet
function goToSun() {
    i = 0;
    var planetSun =
    [planetImage.setAttribute('src', '../img/' + planetsImages[i]), 
    planetName.innerHTML = planetsNames[i], 
    planetCategory.innerHTML = planetsCategorys[i],
    planetAnchorMore.href = planetAnchorMoreList[i],
    curiosityOne.innerHTML = curiosityListOne[i],
    curiosityTwo.innerHTML = curiosityListTwo[i],
    curiosityThree.innerHTML = curiosityListThree[i],
    curiosityFour.innerHTML = curiosityListOFour[i],
    planetArticlesAnchorOne.text = planetArticlesInnerOne[i],
    planetArticlesAnchorTwo.text = planetArticlesInnerTwo[i],
    planetArticlesAnchorThree.text = planetArticlesInnerThree[i],
    planetArticlesAnchorOne.href = planetArticlesListAnchorOne[i],
    planetArticlesAnchorTwo.href = planetArticlesListAnchorTwo[i],
    planetArticlesAnchorThree.href = planetArticlesListAnchorThree[i],
    planetInfoBasics.innerHTML = planetsInfosBasics[i]];
    return planetSun;
}
function goToMercury() {
    i = 1;
    var planetMercury =
    [planetImage.setAttribute('src', '../img/' + planetsImages[i]), 
    planetName.innerHTML = planetsNames[i], 
    planetCategory.innerHTML = planetsCategorys[i],
    planetAnchorMore.href = planetAnchorMoreList[i],
    curiosityOne.innerHTML = curiosityListOne[i],
    curiosityTwo.innerHTML = curiosityListTwo[i],
    curiosityThree.innerHTML = curiosityListThree[i],
    curiosityFour.innerHTML = curiosityListOFour[i],
    planetArticlesAnchorOne.text = planetArticlesInnerOne[i],
    planetArticlesAnchorTwo.text = planetArticlesInnerTwo[i],
    planetArticlesAnchorThree.text = planetArticlesInnerThree[i],
    planetArticlesAnchorOne.href = planetArticlesListAnchorOne[i],
    planetArticlesAnchorTwo.href = planetArticlesListAnchorTwo[i],
    planetArticlesAnchorThree.href = planetArticlesListAnchorThree[i],
    planetInfoBasics.innerHTML = planetsInfosBasics[i]];
    return planetMercury;
}
function goToVenus() {
    i = 2;
    var planetVenus =
    [planetImage.setAttribute('src', '../img/' + planetsImages[i]), 
    planetName.innerHTML = planetsNames[i], 
    planetCategory.innerHTML = planetsCategorys[i],
    planetAnchorMore.href = planetAnchorMoreList[i],
    curiosityOne.innerHTML = curiosityListOne[i],
    curiosityTwo.innerHTML = curiosityListTwo[i],
    curiosityThree.innerHTML = curiosityListThree[i],
    curiosityFour.innerHTML = curiosityListOFour[i],
    planetArticlesAnchorOne.text = planetArticlesInnerOne[i],
    planetArticlesAnchorTwo.text = planetArticlesInnerTwo[i],
    planetArticlesAnchorThree.text = planetArticlesInnerThree[i],
    planetArticlesAnchorOne.href = planetArticlesListAnchorOne[i],
    planetArticlesAnchorTwo.href = planetArticlesListAnchorTwo[i],
    planetArticlesAnchorThree.href = planetArticlesListAnchorThree[i],
    planetInfoBasics.innerHTML = planetsInfosBasics[i]];
    return planetVenus;
}
function goToEarth() {
    i = 3;
    var planetEarth =
    [planetImage.setAttribute('src', '../img/' + planetsImages[i]), 
    planetName.innerHTML = planetsNames[i], 
    planetCategory.innerHTML = planetsCategorys[i],
    planetAnchorMore.href = planetAnchorMoreList[i],
    curiosityOne.innerHTML = curiosityListOne[i],
    curiosityTwo.innerHTML = curiosityListTwo[i],
    curiosityThree.innerHTML = curiosityListThree[i],
    curiosityFour.innerHTML = curiosityListOFour[i],
    planetArticlesAnchorOne.text = planetArticlesInnerOne[i],
    planetArticlesAnchorTwo.text = planetArticlesInnerTwo[i],
    planetArticlesAnchorThree.text = planetArticlesInnerThree[i],
    planetArticlesAnchorOne.href = planetArticlesListAnchorOne[i],
    planetArticlesAnchorTwo.href = planetArticlesListAnchorTwo[i],
    planetArticlesAnchorThree.href = planetArticlesListAnchorThree[i],
    planetInfoBasics.innerHTML = planetsInfosBasics[i]];
    return planetEarth;
}
function goToMoon() {
    i = 4;
    var planetMoon =
    [planetImage.setAttribute('src', '../img/' + planetsImages[i]), 
    planetName.innerHTML = planetsNames[i], 
    planetCategory.innerHTML = planetsCategorys[i],
    planetAnchorMore.href = planetAnchorMoreList[i],
    curiosityOne.innerHTML = curiosityListOne[i],
    curiosityTwo.innerHTML = curiosityListTwo[i],
    curiosityThree.innerHTML = curiosityListThree[i],
    curiosityFour.innerHTML = curiosityListOFour[i],
    planetArticlesAnchorOne.text = planetArticlesInnerOne[i],
    planetArticlesAnchorTwo.text = planetArticlesInnerTwo[i],
    planetArticlesAnchorThree.text = planetArticlesInnerThree[i],
    planetArticlesAnchorOne.href = planetArticlesListAnchorOne[i],
    planetArticlesAnchorTwo.href = planetArticlesListAnchorTwo[i],
    planetArticlesAnchorThree.href = planetArticlesListAnchorThree[i],
    planetInfoBasics.innerHTML = planetsInfosBasics[i]];
    return planetMoon;
}
function goToMars() {
    i = 5;
    var planetMars = 
    [planetImage.setAttribute('src', '../img/' + planetsImages[i]), 
    planetName.innerHTML = planetsNames[i], 
    planetCategory.innerHTML = planetsCategorys[i],
    planetAnchorMore.href = planetAnchorMoreList[i],
    curiosityOne.innerHTML = curiosityListOne[i],
    curiosityTwo.innerHTML = curiosityListTwo[i],
    curiosityThree.innerHTML = curiosityListThree[i],
    curiosityFour.innerHTML = curiosityListOFour[i],
    planetArticlesAnchorOne.text = planetArticlesInnerOne[i],
    planetArticlesAnchorTwo.text = planetArticlesInnerTwo[i],
    planetArticlesAnchorThree.text = planetArticlesInnerThree[i],
    planetArticlesAnchorOne.href = planetArticlesListAnchorOne[i],
    planetArticlesAnchorTwo.href = planetArticlesListAnchorTwo[i],
    planetArticlesAnchorThree.href = planetArticlesListAnchorThree[i],
    planetInfoBasics.innerHTML = planetsInfosBasics[i]];
    return planetMars;
}
function goToJupiter() {
    i = 6;
    var planetJupiter =
    [planetImage.setAttribute('src', '../img/' + planetsImages[i]), 
    planetName.innerHTML = planetsNames[i], 
    planetCategory.innerHTML = planetsCategorys[i],
    planetAnchorMore.href = planetAnchorMoreList[i],
    curiosityOne.innerHTML = curiosityListOne[i],
    curiosityTwo.innerHTML = curiosityListTwo[i],
    curiosityThree.innerHTML = curiosityListThree[i],
    curiosityFour.innerHTML = curiosityListOFour[i],
    planetArticlesAnchorOne.text = planetArticlesInnerOne[i],
    planetArticlesAnchorTwo.text = planetArticlesInnerTwo[i],
    planetArticlesAnchorThree.text = planetArticlesInnerThree[i],
    planetArticlesAnchorOne.href = planetArticlesListAnchorOne[i],
    planetArticlesAnchorTwo.href = planetArticlesListAnchorTwo[i],
    planetArticlesAnchorThree.href = planetArticlesListAnchorThree[i],
    planetInfoBasics.innerHTML = planetsInfosBasics[i]];
    return planetJupiter;
}
function goToSaturn() {
    i = 7;
    var planetSaturn =
    [planetImage.setAttribute('src', '../img/' + planetsImages[i]), 
    planetName.innerHTML = planetsNames[i], 
    planetCategory.innerHTML = planetsCategorys[i],
    planetAnchorMore.href = planetAnchorMoreList[i],
    curiosityOne.innerHTML = curiosityListOne[i],
    curiosityTwo.innerHTML = curiosityListTwo[i],
    curiosityThree.innerHTML = curiosityListThree[i],
    curiosityFour.innerHTML = curiosityListOFour[i],
    planetArticlesAnchorOne.text = planetArticlesInnerOne[i],
    planetArticlesAnchorTwo.text = planetArticlesInnerTwo[i],
    planetArticlesAnchorThree.text = planetArticlesInnerThree[i],
    planetArticlesAnchorOne.href = planetArticlesListAnchorOne[i],
    planetArticlesAnchorTwo.href = planetArticlesListAnchorTwo[i],
    planetArticlesAnchorThree.href = planetArticlesListAnchorThree[i],
    planetInfoBasics.innerHTML = planetsInfosBasics[i]];
    return planetSaturn;
}
function goToUranus() {
    i = 8;
    var planetUranus =
    [planetImage.setAttribute('src', '../img/' + planetsImages[i]), 
    planetName.innerHTML = planetsNames[i], 
    planetCategory.innerHTML = planetsCategorys[i],
    planetAnchorMore.href = planetAnchorMoreList[i],
    curiosityOne.innerHTML = curiosityListOne[i],
    curiosityTwo.innerHTML = curiosityListTwo[i],
    curiosityThree.innerHTML = curiosityListThree[i],
    curiosityFour.innerHTML = curiosityListOFour[i],
    planetArticlesAnchorOne.text = planetArticlesInnerOne[i],
    planetArticlesAnchorTwo.text = planetArticlesInnerTwo[i],
    planetArticlesAnchorThree.text = planetArticlesInnerThree[i],
    planetArticlesAnchorOne.href = planetArticlesListAnchorOne[i],
    planetArticlesAnchorTwo.href = planetArticlesListAnchorTwo[i],
    planetArticlesAnchorThree.href = planetArticlesListAnchorThree[i],
    planetInfoBasics.innerHTML = planetsInfosBasics[i]];
    return planetUranus;
}
function goToNeptune() {
    i = 9;
    var planetNeptune =
    [planetImage.setAttribute('src', '../img/' + planetsImages[i]), 
    planetName.innerHTML = planetsNames[i], 
    planetCategory.innerHTML = planetsCategorys[i],
    planetAnchorMore.href = planetAnchorMoreList[i],
    curiosityOne.innerHTML = curiosityListOne[i],
    curiosityTwo.innerHTML = curiosityListTwo[i],
    curiosityThree.innerHTML = curiosityListThree[i],
    curiosityFour.innerHTML = curiosityListOFour[i],
    planetArticlesAnchorOne.text = planetArticlesInnerOne[i],
    planetArticlesAnchorTwo.text = planetArticlesInnerTwo[i],
    planetArticlesAnchorThree.text = planetArticlesInnerThree[i],
    planetArticlesAnchorOne.href = planetArticlesListAnchorOne[i],
    planetArticlesAnchorTwo.href = planetArticlesListAnchorTwo[i],
    planetArticlesAnchorThree.href = planetArticlesListAnchorThree[i],
    planetInfoBasics.innerHTML = planetsInfosBasics[i]];
    return planetNeptune;
}
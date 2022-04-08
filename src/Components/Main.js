import React, { Component } from "react";
import styled from "styled-components";


const Home = styled.div`
background-image:url('https://tarsiladoamaral.com.br/base2022/wp-content/uploads/2018/02/tarsila-blog-02-879x1024.jpg');
background-size:cover;
background-position:center;
background-repeat:no-repeat;
height:100vh;
color:white;
flex-direction:column;
display:flex;
justify-content:center;
align-items:center;`

const Sobre = styled.div`
border:solid black;
padding-top:2rem;
display:flex;
flex-wrap: wrap;
justify-content:space-evenly`

const Galeria = styled.div`
display:flex;
flex-direction:column;
align-items:center;`

const Text = styled.div`
margin-bottom:3rem;
padding:1rem;
background-color:#fff;
border: double black;
width:30rem;
display:flex;
flex-direction:column;
text-align:left;
color:grey;
`
const Titulos = styled.h2`
margin-bottom:1rem;
color:black;`

const Allpics = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;`

const Art = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin:1rem;`

const Pics = styled.img`
width:17rem;
height:17rem;
border:solid black;`

const Last =styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
height:7rem;`

export default class App extends Component {
    

  render() {
    return (
      <div>
        <Home>
            <h1>Tarsila do Amaral</h1>
            <h3>Conheça um pouco mais sobre a artista</h3>
        </Home>
        <Sobre>
            <Text>
                <Titulos>breve resumo da sua vida</Titulos>
                <p>Tarsila do Amaral nasceu em 1 de setembro de 1886, no Município de Capivari, interior do Estado de São Paulo. Filha do fazendeiro José Estanislau do Amaral e de Lydia Dias de Aguiar do Amaral, passou a infância nas fazendas de seu pai. Estudou em São Paulo, no Colégio Sion e depois em Barcelona, na Espanha, onde fez seu primeiro quadro, "Sagrado Coração de Jesus", em 1904. Quando voltou, casou-se com André Teixeira Pinto, com quem teve a única filha, Dulce. Separaram-se alguns anos depois e então iniciou seus estudos em arte. Começou com escultura, com Zadig, passando a ter aulas de desenho e pintura no ateliê de Pedro Alexandrino em 1918, onde conheceu a pintora Anita Malfatti. Em 1920, foi estudar em Paris, na Académie Julien e com Émile Renard. Ficou lá até junho de 1922 e soube da Semana de Arte Moderna (que aconteceu em fevereiro de 1922) através das cartas da amiga Anita Malfatti. Quando voltou ao Brasil, Anita a introduziu no grupo modernista e Tarsila começou a namorar o escritor Oswald de Andrade. Formaram o grupo dos cinco: Tarsila, Anita, Oswald, e os escritores Mário de Andrade e Menotti Del Picchia. Agitaram culturalmente São Paulo com reuniões, festas, conferências. Tarsila disse que entrou em contato com a arte moderna em São Paulo, pois antes ela só havia feito estudos acadêmicos. Em dezembro de 22, ela voltou a Paris e em seguida Oswald foi encontrá-la.</p>
            </Text>
            <Text>
                <Titulos>Fase Mordenista</Titulos>
                <p>Neste ano, Tarsila encontrava-se em Paris acompanhada do seu namorado Oswald de Andrade. Conheceram o poeta franco suíço Blaise Cendrars, que apresentou toda a intelectualidade parisiense para eles. Foi então que ela estudou com o mestre cubista Fernand Léger. Tarsila mostrou a ele a tela "A Negra". Léger ficou entusiasmado e até chamou os outros alunos para ver o quadro. A figura da Negra tinha muita ligação com sua infância, pois essas negras eram geralmente filhas de escravos que tomavam conta das crianças e, algumas vezes, serviam até de amas de leite. Com esta tela, Tarsila entrou para a história da arte moderna brasileira. A artista estudou também com Lhote e Gleizes, outros mestres cubistas. Cendrars também apresentou a Tarsila pintores como Picasso, o casal Delaunay, outros escritores importantes além dele, como Jean Cocteau, escultores como Brancusi, músicos como Stravinsky e Eric Satie. Ficou amiga dos brasileiros que estavam lá, como o compositor Villa Lobos, o pintor Di Cavalcanti e os mecenas Paulo Prado e Olívia Guedes Penteado. Tarsila oferecia almoços bem brasileiros em seu ateliê, servindo feijoada e caipirinha. Além de linda, vestia-se com os melhores costureiros da época, como Paul Poiret e Jean Patou.Em um jantar em homenagem a Santos Dumont, vestiu um casaco vermelho e chamou a atenção de todos por sua beleza e elegância. Pintou o autorretrato "Manteau Rouge" em 1923 depois desta ocasião.</p>
            </Text>
            <Text>
                <Titulos>Fase Pau Brasil</Titulos>
                <p>Tarsila disse que foi em Minas que ela viu as cores que gostava desde sua infância, mas que seus mestres diziam que eram caipiras e ela não devia usar em seus quadros."Encontrei em Minas as cores que adorava em criança. Ensinaram-me depois que eram feias e caipiras. Mas depois vinguei-me da opressão, passando-as para as minhas telas: o azul puríssimo, rosa violáceo, amarelo vivo, verde cantante, …" E essas cores tornaram-se uma das marcas da sua obra, assim como a temática brasileira, com as paisagens rurais e urbanas do nosso país, além da nossa fauna, flora, folclore e do nosso povo.Ela dizia que queria ser a pintora do Brasil. Além do tema e das cores, Tarsila trouxe a técnica do cubismo aprendida em Paris para os seus trabalhos. Esta fase da sua obra é chamada de Pau Brasil, e temos quadros maravilhosos como "Carnaval em Madureira", "Morro da Favela", "O Mamoeiro", "O Pescador", dentre outros. Ainda desta viagem a artista fez uma das suas melhores séries de desenhos que inspirou Oswald no livro de poesias intitulado Pau-Brasil, e Cendrars no livro Feuilles de route-Le formose.Em 1926, Tarsila fez sua primeira Exposição individual em Paris, com uma crítica bem favorável. Neste mesmo ano, ela casou-se com Oswald. Depois do casamento o casal passou longas temporadas na fazenda de Tarsila onde recebiam os amigos modernistas.</p>
            </Text>
            <Text>
                <Titulos>Antropofagia</Titulos>
                <p>Em janeiro de 1928, Tarsila queria dar um presente de aniversário ao seu marido, Oswald de Andrade. Pintou o "Abaporu". Quando Oswald viu, ficou impressionado e disse que era o melhor quadro que Tarsila já havia feito. Chamou o amigo e escritor Raul Bopp, que também achou o quadro fantástico. Batizou-se o quadro de Abaporu, que significa homem que come carne humana, o antropófago. E Oswald escreveu o Manifesto Antropófago e fundaram o Movimento Antropofágico. A figura do Abaporu simbolizou o Movimento que queria deglutir, engolir, a cultura européia, que era a cultura vigente na época, e transformá-la em algo bem brasileiro. Valorizando o nosso país. Outros exemplos de quadros desta fase dita Antropofágica são: "Sol Poente", "A Lua", "Cartão Postal", "O Lago", "Antropofagia", etc. Nesta fase ela usou bichos e paisagens imaginárias, além das cores fortes. A artista contou que o Abaporu era fruto de imagens do seu inconsciente, e tinha a ver com as histórias que as negras contavam para ela em sua infância. Em 1929 Tarsila fez sua primeira Exposição Individual no Brasil, e a crítica dividiu-se, pois ainda muitas pessoas não entendiam sua arte. Neste ano de 1929, teve a crise da bolsa de Nova Iorque e a crise do café no Brasil, e assim a realidade de Tarsila mudou. Seu pai perdeu muito dinheiro, teve as fazendas hipotecadas e ela teve que trabalhar. Separou-se de Oswald, pois este a traiu com a estudante de 18 anos Patrícia Galvão, conhecida como Pagu.</p>
            </Text>
            <Text>
                <Titulos>Social e NeoPau Brasil</Titulos>
                <p>Em 1931, já com novo namorado, o médico comunista Osório Cesar, Tarsila expôs em Moscou. Lá, sensibilizou-se com a causa operária, pois foi ciceroneada por um amigo dos tempos de Paris, Serge Romoff. Na volta ao Brasil participou de reuniões no Partido Comunista Brasileiro e foi presa por um mês. Depois deste episódio, terminou o namoro com Osório e nunca mais se envolveu com política. Em 1933 pintou a tela "Operários", pioneira da temática social no Brasil. Desta fase, temos também a tela "Segunda Classe" e outras que podemos atribuir ao social, mas com menos destaque como "Costureiras" e "Orfanato". Em meados dos anos 30, Tarsila uniu-se com o escritor Luís Martins, mais de vinte anos mais novo que ela. O romance durou 18 anos. Trabalhou como colunista nos Diários Associados do seu amigo Assis Chateaubriand de 1936 até meados dos anos 50. Em 1950, ela voltou com a temática do Pau Brasil com a tela "Fazenda". Outras telas desta fase são "Vilarejo com ponte e mamoeiro", "Povoação I" e "Porto I". Em 1949, sua única neta Beatriz morreu afogada, tentando salvar uma amiga em um lago em Petrópolis. As duas meninas faleceram. Tarsila participou da I Bienal de São Paulo em 1951, teve sala especial na VII Bienal de São Paulo, e participou da Bienal de Veneza em 1964. Em 1969, a doutora e curadora Aracy Amaral realizou a Exposição, "Tarsila 50 anos de pintura". Sua filha faleceu antes dela, em 1966. Tarsila faleceu em janeiro de 1973.</p>
            </Text>
        </Sobre>
        <Galeria>
            <Last>
                <h2>Galeria</h2>
                <h3>Algumas de suas principais obras são</h3>
            </Last>
            <Allpics>
                <Art>
                 <Pics src="https://upload.wikimedia.org/wikipedia/pt/b/bd/Abaporu.jpg"/>
                    <p>Abaporu - (1928)</p>
                </Art>
                <Art>
                    <Pics src="https://tarsiladoamaral.com.br/base2022/wp-content/uploads/2020/07/pau-brasil-640x640.jpg"/>
                    <p>Manacá - (1927)</p>
                </Art>  
                <Art>
                    <Pics src="https://tarsiladoamaral.com.br/base2022/wp-content/uploads/2020/07/cubismo-640x640.jpg"/>
                    <p>A Negra - (1923)</p>
                </Art>
                <Art>
                <Pics src="https://tarsiladoamaral.com.br/base2022/wp-content/uploads/2020/07/primeiros-anos-640x640.jpg"/>
                    <p>Academia nº 4 - (1922)</p>
                </Art>
                <Art>
                    <Pics src="https://tarsiladoamaral.com.br/base2022/wp-content/uploads/2017/07/obras-04-640x640.jpg"/>
                    <p>A Lua - (1928)</p>
                </Art>
                <Art>
                    <Pics src="https://tarsiladoamaral.com.br/base2022/wp-content/uploads/2017/07/obras-05-640x640.jpg"/>
                    <p>Operários- (1933)</p>
                </Art>
                <Art>
                    <Pics src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwuZrcO5p82HYAmFINAITOqAH3ABzppzc2g&usqp=CAU"/>
                    <p>E.F.C.B - (1924)</p>
                </Art>
                <Art>
                    <Pics src="https://i.pinimg.com/736x/72/8c/ae/728cae8fc26f96f877453af4cfdf5dc2--sp-sp-mendel.jpg"/>
                    <p>Crianças - (1935)</p>
                </Art>
            </Allpics>
        </Galeria>
      </div>
    );
  }
}
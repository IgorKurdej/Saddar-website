//import products images
import cskXxx from "./img/products/csk xxx-min.png";
import pskBhq from "./img/products/psk bhq 4x4-min.png";
import pskScr from "./img/products/psk scr.png";
import pskWst from "./img/products/psk wst 2x2-min.png";
import psoWsp from "./img/products/pso wsp 101-min.png";
import psoScr from "./img/products/pso scr.png";
import rsxg from "./img/products/RSXG.png";
import kran from "./img/products/kran231115_2.png";
import pskPxx from "./img/products/psk-pxx.png";
import pskPwx from "./img/products/psk pwx.png";
import pskWex from "./img/products/PSK_WEX_91_91_750.png";
import pskWqh from "./img/products/psk_wqh.png";
import psoWsg from "./img/products/pso wsg.png";
import rP from "./img/products/Rozbijak PET.png";
import scxg from "./img/products/scxg.png";

//import product's pdf
import pdfCxxXxx from "../assets/pdf/kartyProduktow/cxx xxx.pdf";
import pdfPskBhq from "../assets/pdf/kartyProduktow/psk bhq.pdf";
import pdfPskPwx from "./pdf/kartyProduktow/psk pwx.pdf";
import pdfPskPxx from "./pdf/kartyProduktow/psk pxx.pdf";
import pdfPskScr from "./pdf/kartyProduktow/psk scr.pdf";
import pdfPskWew from "./pdf/kartyProduktow/psk wew.pdf";
import pdfPskWex from "./pdf/kartyProduktow/psk wex.pdf";
import pdfPskWqh from "./pdf/kartyProduktow/psk wqh.pdf";
import pdfPskWsp from "./pdf/kartyProduktow/psk wsp.pdf";
import pdfPskWst from "./pdf/kartyProduktow/psk wst.pdf";
import pdfPsoScr from "./pdf/kartyProduktow/pso scr.pdf";
import pdfPsoWsg from "./pdf/kartyProduktow/pso wsg.pdf";
import pdfPsoWsp from "./pdf/kartyProduktow/pso wsp.pdf";
import pdfScxg from "./pdf/kartyProduktow/scxg.pdf";

//import articles images
import img1 from "../assets/img/articles/usa-pl.jpeg";
import img2 from "../assets/img/articles/image2.png";
import img3 from "../assets/img/articles/image3.png";

export const products = [
  {
    id: 2,
    name: "PSK SCR",
    category: "wkręcane",
    size: "4x4x24",
    img: pskScr,
    pdf: pdfPskScr,
    sizes: [
      {
        symbol: "PSK SCR 60x40x600G",
        dimension: "60x40x600",
      },
      {
        symbol: "PSK SCR 61x61x600G ",
        dimension: "61x61x600",
      },
      {
        symbol: "PSK SCR 71x71x600G",
        dimension: "71x71x600",
      },
      {
        symbol: "PSK SCR 71x71x720G",
        dimension: "71x71x720",
      },
      {
        symbol: "PSK SCR 76x76x600G",
        dimension: "76x76x600",
      },
      {
        symbol: "PSK SCR 76x76x720G",
        dimension: "76x76x720",
      },
      {
        symbol: "PSK SCR 91x91x600G",
        dimension: "91x91x600",
      },
      {
        symbol: "PSK SCR 91x91x720G",
        dimension: "91x91x720",
      },
      {
        symbol: "PSK SCR 98x98x720G",
        dimension: "98x98x720",
      },
      {
        symbol: "PSK SCR 101x101x720G",
        dimension: "101x101x720",
      },
    ],
  },
  {
    id: 3,
    name: "PSK WST",
    category: "wbijane",
    size: "2x2",
    img: pskWst,
    pdf: pdfPskWst,
    sizes: [
      {
        symbol: "PSK WST 46x46x550G",
        dimension: "46x46x550",
      },
      {
        symbol: "PSK WST 46x46x600G",
        dimension: "46x46x600",
      },
      {
        symbol: "PSK WST 51x51x550G",
        dimension: "51x51x550",
      },
      {
        symbol: "PSK WST 51x51x600G",
        dimension: "51x51x600",
      },
      {
        symbol: "PSK WST 61x61x750G",
        dimension: "61x61x750",
      },
      {
        symbol: "PSK WST 71x71x750G",
        dimension: "71x71x750",
      },
      {
        symbol: "PSK WST 76x76x610G",
        dimension: "76x76x610",
      },
      {
        symbol: "PSK WST 76x76x750G",
        dimension: "76x76x750",
      },
      {
        symbol: "PSK WST 76x76x900G",
        dimension: "76x76x900",
      },
      {
        symbol: "PSK WST 71x71x900G",
        dimension: "71x71x900",
      },
      {
        symbol: "PSK WST 91x91x750G",
        dimension: "91x91x750",
      },
      {
        symbol: "PSK WST 91x91x900G",
        dimension: "91x91x900",
      },
    ],
  },
  {
    id: 4,
    name: "PSO WSP",
    category: "wbijane",
    size: "81x610",
    img: psoWsp,
    pdf: pdfPsoWsp,
    sizes: [
      {
        symbol: "PSO WSP 61x550G",
        dimension: "61x550",
      },
      {
        symbol: "PSO WSP 71x610G",
        dimension: "71x610",
      },
      {
        symbol: "PSO WSP 81x610G",
        dimension: "81x610",
      },
      {
        symbol: "PSO WSP 81x760G",
        dimension: "81x760",
      },
      {
        symbol: "PSO WSP 91x760G",
        dimension: "91x760",
      },
      {
        symbol: " PSO WSP 101x610G",
        dimension: "101x610",
      },
      {
        symbol: " PSO WSP 101x760G",
        dimension: "101x760",
      },
      {
        symbol: " PSO WSP 101x900G",
        dimension: "101x900",
      },
      {
        symbol: "PSO WSP 121x900G",
        dimension: "121x900",
      },
    ],
  },
  {
    id: 5,
    name: "PSO SCR",
    category: "wkręcane",
    size: "550",
    img: psoScr,
    pdf: pdfPsoScr,
    sizes: [
      {
        symbol: "PSO SCR 61x565G",
        dimension: "Ø 61x575",
      },
      {
        symbol: "PSO SCR 61x675G",
        dimension: "Ø 61x675",
      },
    ],
  },
  {
    id: 6,
    name: "CSK XXX",
    category: "daszki",
    size: "4x4",
    img: cskXxx,
    pdf: pdfCxxXxx,
    sizes: [
      {
        symbol: "CSK XXX 46x46Z",
        dimension: "46x46",
      },
      {
        symbol: "CSK XXX 51x51Z",
        dimension: "51x51",
      },
      {
        symbol: "CSK XXX 71x71G",
        dimension: "71x71",
      },
      {
        symbol: "CSK XXX 75x75G ",
        dimension: "75x75",
      },
      {
        symbol: "CSK XXX 91x91G",
        dimension: "91x91",
      },
      {
        symbol: "CSK XXX 101x101G",
        dimension: "101x101",
      },
    ],
  },
  {
    id: 7,
    name: "PSK BHQ",
    category: "do betonowania",
    size: "4x4",
    img: pskBhq,
    pdf: pdfPskBhq,
    sizes: [
      {
        symbol: "PSK BHQ 71x71x330G",
        dimension: "71x71x330",
      },
      {
        symbol: "PSK BHQ 91x91x310G",
        dimension: "91x91x310",
      },
      {
        symbol: "PSK BHQ 101x101x310G",
        dimension: "101x101x310",
      },
      {
        symbol: "PSK BHQ 75x75x330G ",
        dimension: "75x75x330",
      },
    ],
  },
  {
    id: 8,
    name: "RSXQ",
    category: "do betonowania",
    size: "38x1500",
    img: rsxg,
    sizes: [
      {
        symbol: "RSXG15",
        dimension: "Ø 38x1500",
      },
      {
        symbol: "RSXG17",
        dimension: "Ø 38x1750",
      },
      {
        symbol: "RSXG20",
        dimension: "Ø 38x2000",
      },
    ],
  },
  {
    id: 9,
    name: "Kran",
    category: "do betonowania",
    size: "",
    img: kran,
  },
  {
    id: 10,
    name: "PSK PXX",
    category: "do betonowania",
    size: "38x1500",
    img: pskPxx,
    pdf: pdfPskPxx,
    sizes: [
      {
        symbol: "PSK PXX 71x71x175G",
        dimension: "71x71x175",
      },
      {
        symbol: "PSK PXX 91x91x175G",
        dimension: "91x91x175",
      },
      {
        symbol: "PSK PXX 76x76x175G",
        dimension: "76x76x175",
      },
      {
        symbol: "PSK PXX 98x98x175G ",
        dimension: "98x98x175",
      },
      {
        symbol: "  PSK PXX 101x101x175G",
        dimension: "101x101x175",
      },
      {
        symbol: "PSK PXX 140x140x175G",
        dimension: "140x140x175",
      },
      {
        symbol: "PSO PXX 81x175G",
        dimension: "81x175, Ø 81",
      },
      {
        symbol: "PSO PXX 101x175G",
        dimension: "101x175, Ø 101",
      },
    ],
  },
  {
    id: 11,
    name: "PSK PWX",
    category: "do betonowania",
    size: "",
    img: pskPwx,
    pdf: pdfPskPwx,
    sizes: [
      {
        symbol: "PSK PWX 71x71x175G",
        dimension: "71x71x175",
      },
      {
        symbol: "PSK PWX 76x76x175G",
        dimension: "76x76x175",
      },
      {
        symbol: "PSK PWX 91x91x175G",
        dimension: "91x91x175",
      },
      {
        symbol: "PSK PWX 101x101x175G",
        dimension: "101x101x175",
      },
      {
        symbol: "PSK PWX 140x140x175G",
        dimension: "140x140x175",
      },
    ],
  },
  {
    id: 12,
    name: "PSK WEX",
    category: "do betonowania",
    size: "",
    img: pskWex,
    pdf: pdfPskWex,
    sizes: [
      {
        symbol: "PSK WEX 71x71x750G",
        dimension: " 71x71x750  ",
      },
      {
        symbol: "PSK WEX 71x71x900G",
        dimension: "71x71x900",
      },
      {
        symbol: "PSK WEX 76x76x750G ",
        dimension: "76x76x750",
      },
      {
        symbol: "PSK WEX 76x76x900G ",
        dimension: "76x76x900",
      },
      {
        symbol: "PSK WEX 91x91x750G",
        dimension: "91x91x750",
      },
      {
        symbol: "PSK WEX 91x91x900G",
        dimension: "91x91x900",
      },
      {
        symbol: "PSK WEX 98x98x750G",
        dimension: "98x98x750 ",
      },
      {
        symbol: "PSKWEX 98x98x900G",
        dimension: "98x98x900",
      },
      {
        symbol: "PSK WEX 101x101x750G",
        dimension: "101x101x750",
      },
      {
        symbol: "PSK WEX 101x101x900G",
        dimension: "101x101x900",
      },
    ],
  },
  {
    id: 13,
    name: "PSK WQH",
    category: "do betonowania",
    size: "",
    img: pskWqh,
    pdf: pdfPskWqh,
    sizes: [
      {
        symbol: "PSKWHQ",
        dimension: "71x71x750",
      },
      {
        symbol: "PSKWHQ",
        dimension: "71x71x900",
      },
      {
        symbol: "PSKWHQ",
        dimension: "75x75x750",
      },
      {
        symbol: "PSKWHQ",
        dimension: "75x75x900",
      },
      {
        symbol: "PSKWHQ",
        dimension: "91x91x750",
      },
      {
        symbol: "PSKWHQ",
        dimension: "91x91x900",
      },
      {
        symbol: "PSKWHQ",
        dimension: "98x98x750 ",
      },
      {
        symbol: "PSKWHQ",
        dimension: "98x98x900",
      },
      {
        symbol: "PSKWHQ",
        dimension: "101x101x750",
      },
      {
        symbol: "PSKWHQ",
        dimension: "101x101x900",
      },
      {
        symbol: "PSKWHQ",
        dimension: "121x121x900",
      },
      {
        symbol: "PSKWHQ",
        dimension: "141x141x900",
      },
    ],
  },
  {
    id: 14,
    name: "PSO WSG",
    category: "do betonowania",
    size: "",
    img: psoWsg,
    pdf: pdfPsoWsg,
    sizes: [
      {
        symbol: "PSO WSG 101x900G ",
        dimension: "101x900",
      },
      {
        symbol: "PSO WSG 121x900G",
        dimension: "121x900",
      },
      {
        symbol: "PSO WSG 141x900G",
        dimension: "141x900",
      },
    ],
  },
  {
    id: 15,
    name: "Rozbijak PET",
    category: "do betonowania",
    size: "",
    img: rP,
  },
  {
    id: 16,
    name: "SCXG",
    category: "do betonowania",
    size: "",
    img: scxg,
    pdf: pdfScxg,
    sizes: [
      {
        symbol: "SCXG6x12",
        dimension: "60x40x120",
      },
      {
        symbol: "SCXG6x15",
        dimension: "60x40x150",
      },
      {
        symbol: "SCXG6x18",
        dimension: "60x40x180",
      },
      {
        symbol: "SCXGB6x12",
        dimension: "60x60x120",
      },
      {
        symbol: "SCXGB6x15",
        dimension: "60x60x150",
      },
      {
        symbol: "SCXGB6x18",
        dimension: "60x60x180",
      },
      {
        symbol: "SCXG7x12",
        dimension: "70x70x120",
      },
      {
        symbol: "SCXG7x15",
        dimension: "70x70x150",
      },
      {
        symbol: "SCXG7x18",
        dimension: "70x70x180",
      },
      {
        symbol: "SCXG75x12",
        dimension: "75x75x120",
      },
      {
        symbol: "SCXG7512",
        dimension: "75x75x150",
      },
      {
        symbol: "SCXG75x18",
        dimension: "75x75x180",
      },
      {
        symbol: "SCG90x12",
        dimension: "90x90x120",
      },
      {
        symbol: "SCG90x15",
        dimension: "90x90x150",
      },
      {
        symbol: "SCG90x180",
        dimension: "90x90x180",
      },
      {
        symbol: "SCG100x180",
        dimension: "100x100x180",
      },
      {
        symbol: "SCG120x200",
        dimension: "120x120x200",
      },
    ],
  },
];

export const historyData = [
  {
    year: "1999",
    text: "Powstanie  PHU SADDAR. W początkowym okresie działalność koncentrowała wokół produkcji konstrukcji stalowych mobilnych i stałych oraz  produkcji mebli szkolnych i specjalistycznego wyposażenia pomieszczeń dydaktycznych. Firma świadczyła ponadto usługi projektowania, aranżacji wnętrz oraz kompleksowego wyposażania obiektów użyteczności publicznej, jak również usługi w zakresie remontowo - budowlanym.\n",
  },
  {
    year: "2004",
    text: "Jednak po 5 latach działalności, założyciel firmy Dariusz Sadowiński rozpoczyna prace nad unikalnym projektem stworzenia pierwszej na świecie eko - kotwy wytwarzanej z kompozytu powstałego ze zużytych butelek PET.",
  },
  {
    year: "2005",
    text: "Prace przynoszą pierwsze efekty, a w Urzędzie Patentowym RP rejestrowany jest pierwszy model kompozytowej eko - kotwy SADDAR.",
  },
  {
    // year: "2006-2007",
    year: "2006",
    text: "W niespełna dwa lata od rozpoczęcia realizacji pomysłu firma SADDAR może już poszczycić się pierwszymi sukcesami sprzedażowymi. Na rodzimym rynku produkty są dostępne w sieciach handlowych Praktiker Polska i Leroy Merlin Polska. Rozpoczyna się również podbój rynków zagranicznych - eksport eko - kotew SADDAR na rynek holenderski.",
  },
  {
    year: "2012",
    text: "Do grona odbiorców produktów SADDAR dołącza sieć handlowa Kingfisher, a pierwsze dostawy trafiają na półki Castoramy Polska.",
  },
  {
    year: "2014",
    text: "Wraz z sukcesami sprzedażowymi firma rozwija moce przerobowe i uruchamia w Markach pod Warszawą zakład produkcyjny, wyspecjalizowany w produkcji tworzyw sztucznych.",
  },
  {
    year: "2015",
    text: "Dbałość o wysoką jakość produktów przynosi efekt w postaci opracowania nowej, super wytrzymałej wersji eko - kotwy. To  pierwsza na świecie kompozytowa eko - kotwa wytrzymującą ciężar dorosłego mężczyzny. W 2015 roku firma rozwija sprzedaż na rynkach europejskich i rozpoczyna współpracę z sieciami Bauhaus, Hagebau, Globus w Niemczech oraz uruchomia dostawy na rynek duński i austriacki.",
  },
  {
    year: "2016",
    text: "Firma SADDAR otwiera się na kolejne kraje europejskie. Dzięki współpracy z Gardenas BV są realizowane pierwsze dostawy dla HUBO Belgia. Współpraca z 4IQ Group owocuje dostawami do sieci handlowych w krajach Bałtyckich (Bauhof). Dostawy eko - kotew są również realizowane do Rumunii (Dedeman). Rok 2016 to także 10. rocznica dostaw na rynek holenderski i współpracy z ToopWood - Gouderak - OUTDOORLIFE GROUPE. Powstaje nowe logo SADDAR\n",
  },
  {
    year: "2017",
    text: "Eko - kotwa SADDAR zostaje wyposażona w opatentowany system przenoszenia naprężeń SDS - Stress Dstribution System SDS oraz SHR System (wzmocnienie otworów na śruby specjalnym nadlewem kompozytu). Rok 2017 to również rok bardzo intensywnej ekspansji zagranicznej. Do odbiorców produktów SADDAR dołączają kolejne kraje europejskie: Litwa, Estonia, Francja, Czechy i Słowacja. Na rynku krajowym eko - kotwy są dostępne w PSB MRÓWKA, Merkury Market, RCMB Majster. Kolejni odbiorcy pojawiają się na rynku niemieckim. Ogromnym sukcesem jest również podbój kontynentu amerykańskiego i pierwsze dostawy do Kanady. Łącznie produkty SADDAR są dostępne jest na dwóch kontynentach: w Europie w 26 sieciach handlowych w 15 krajach; w Ameryce Północnej w The Home Depot w Kanadzie",
  },
  {
    // year: "2017–2018",
    year: "2018",
    text: "Firma SADDAR rozpoczyna realizację projektu badawczo–rozwojowego „Innowacyjna gama autorskich eko - kotew SADDAR o różnych właściwościach i przeznaczeniu” finansowanego ze środków UE. Opracowane w ramach projektu modele są rejestrowane w Urzędzie Patentowym.",
  },
  {
    year: "2018",
    text: "Udział w „The Buildings Show” w Toronto w ramach stoiska narodowego zorganizowanego przez  Polską Agencję Inwestycji i Handlu.",
  },
  {
    // year: "2019–2020",
    year: "2019",
    text: "Realizacja kolejnego projektu inwestycyjnego „Wdrożenie gamy autorskich eko-kotew SADDAR, jako efekt realizacji prac B+R” finansowanego ze środków UE.",
  },
  {
    year: "2020",
    text: "Firma rozbudowuje park maszynowy w zakładzie produkcyjnym w Markach. Inwestycja pozwala obsłużenie rosnącego popytu na produkty SADDAR i na zwiększenie mocy produkcyjnych do poziomu 2.5 – 3.0 mln eko - kotew rocznie. Na rynek trafia również nowa seria eko - kotew GIGANTO. To nowy wymiar kompozytowych eko- kotew. W 2020 roku ma również miejsce udana ekspansja na rynek amerykański. SADDAR podpisuje umowę z czołową amerykańską siecią handlową w sektorze DiY Home & Garden – Menard Inc.",
  },
  {
    year: "2022",
    text: "Rok 2022 zaczął się bardzo intensywnie, powiększamy nasz zespół, zwiększamy sprzedaż i zdobywamy nowe rynki. Eko kotwy SADDAR trafiają do francuskich sklepów Brico Marche, a w Barcelonie powstaje przedstawicielstwo SADDAR na rynek Hiszpanii i Portugalii.",
  },
];

export const news = [
  {
    id: 0,
    img: img1,
    date: "6 października 2020",
    title: "Ekologiczne rozwiązania budowlane z Polski podbijają USA.",
    mainText:
      "Firma SADDAR specjalizująca się w produkcji ekologicznych elementów budowlanych podpisała, przy wsparciu Polskiej Agencji Inwestycji i Handlu (PAIH), kontrakt z amerykańską siecią 350-ciu hipermarketów budowlanych. Pierwsze zamówienie otwiera przed firmą szansę na szybkie rozszerzenie oferowanego w USA asortymentu o kolejne produkty i klientów. Wprowadzenie wyrobów SADDAR do sieci amerykańskich hipermarketów budowlanych to pierwszy krok we wsparciu, jakie udzieliło biuro handlowe PAIH w Waszyngtonie. Następny krok to zbudowanie wiedzy na rynku USA o zaletach polskiego produktu dla środowiska naturalnego.",
    contentText:
      "Pionierskie rozwiązanie produkcji ze specjalnie opracowanego przez SADDAR kompozytu na bazie surowca pochodzącego z recyklingu butelek PET jest dla Amerykanów bardzo atrakcyjne. Według danych McKinsey & Company tylko 28 proc. plastiku z opakowań i butelek jest w USA ponownie przetwarzane. Model gospodarki o obiegu zamkniętym, w który idealnie wpisuje się nasz rodzimy producent przyciąga coraz większą uwagę w Stanach Zjednoczonych. Sama Kalifornia, która przoduje w ekologicznych rozwiązaniach to piąta gospodarka światowa i tam właśnie będziemy starać się o nowe kontrakty dla polskiego producenta - powiedział Bartosz Szajda, kierownik biura ZBH PAIH w Waszyngtonie.\n" +
      "\n" +
      "Kompozytowa ekokotwa to produkt oparty na zastrzeżonej konstrukcji i innowacyjnym w skali światowej pomyśle wykorzystania do jego produkcji butelek PET. Dotychczasowa hegemonia producentów i dostawców kotw stalowych została przełamana autorskim rozwiązaniem polskiej firmy SADDAR z sukcesem podbijającej już Europę Zachodnią.\n" +
      "\n" +
      "- Rozwiązania instalacyjne oferowane przez SADDAR mają bardzo szerokie zastosowanie, w tym jako elementy montażu ogrodzeń, drewnianej architektury ogrodowej czy w sektorze budowlanym. Są to kotwy wbijane, wkręcane i przykręcane w niemal każdy rodzaj gruntu czy powierzchni. Na szeroką skalę używane są przy m.in. instalacji ogromnych farm fotowoltaicznych w USA. Montaż jest szybki i przyjazny środowisku: bez użycia cementu oraz potrzeby dostosowania gruntu z użyciem ciężkiego sprzętu. W razie potrzeby, instalacje można po prostu przenieść w inne miejsce bez uszczerbku dla środowiska - dodaje Bartosz Szajda.\n" +
      "\n" +
      'Naszym celem jest zapewnienie idealnego ekologicznego produktu, który istotnie przyczynia się do poszanowania środowiska naturalnego. Oprócz rozpoczętej właśnie ekspansji w USA w ciągu najbliższych 3 lat planujemy również umocnić się w Europie, zdobywając 25 proc. rynku. Przy poziomie produkcji 1.5 mln sztuk rocznie i zużyciu 20 butelek na jedną ekokotwę recyklingowi będziemy poddawać aż 30 mln butelek plastikowych. Dumnie możemy zatem mówić o naszych "zielonych zasługach" - powiedział Dariusz Sadowiński, założyciel firmy SADDAR.\n' +
      "\n" +
      "Bazowy surowiec PET pochodzi z recyklingu głównie plastikowych butelek po wodzie mineralnej czy napojach gazowanych i stanowi istotny czynnik ochrony środowiska i przekształcenia plastikowych odpadów poużytkowych czy poprodukcyjnych w pełnowartościowy nowy wyrób, który zastępuje droższy wykonany z blachy stalowej i którego wytworzenie wymaga zużycia dużej ilości energii i kopalin nieodnawialnych, będąc jednocześnie szkodliwym obciążeniem dla środowiska a zwłaszcza atmosfery. Jednocześnie ekokotwa SADDAR wbita w ziemię nigdy nie będzie korodować i nie ulegnie działaniom czynników atmosferycznych, na które jest narażona i jak ma to miejsce w przypadku konkurencyjnych wyrobów ze stali lakierowanej lub pokrytej galwanicznie mikronową powłoką. Oferowane przez SADDAR ekokotwy można użyć ponownie co więcej można je zmielić i ponownie przetworzyć na inne produkty. Wpisują się zatem w wymagania stawiane produktom w zakresie gospodarki w obiegu zamkniętym (circular economy).\n" +
      "\n" +
      "\n" +
      "W latach 2018-2020 firma SADDAR zainwestowała w badania i rozwój blisko 2.0 mln USD na poprawę wydajność produkcji do 2,5 - 3 mln ekokotw rocznie oraz na unowocześnienie i opracowanie nowych innowacyjnych modeli produktów.\n" +
      "\n" +
      "Źródło: Informacja Prasowa Polskiej Agencji Inwestycji i Handlu (PAIH)\n" +
      "https://www.paih.gov.pl/20201006/ekologiczne_rozwiazania_budowlane_z_polski_w_usa\n",
  },
  {
    id: 1,
    img: img2,
    date: "2 lutego 2022",
    title: "Nominacja do Polskiej Nagrody Inteligentnego Rozwoju 2022",
    mainText:
      "Firma PHU Saddar Dariusz Sadowiński otrzymała List Nominacyjny do Polskiej Nagrody Inteligentnego Rozwoju 2022 w kategorii Innowacyjne Technologie Przyszłości.",
    contentText:
      "To już 7. edycja Konkursu organizowanego przez Centrum Inteligentnego Rozwoju oraz Forum Inteligentnego Rozwoju. Laureatami wyróżnienia zostają osoby i organizacje, które realizują innowacyjne projekty, rozwojowe inwestycje czy prowadzą nowatorską działalność, skutkującą wprowadzaniem na rynek już lub w przyszłości innowacji technologicznych bądź społecznych, przekładających się na inteligentny rozwój. Statuetki i certyfikaty PNIR trafiają w ręce ludzi inspirujących, przedstawicieli organizacji, chcących wpływać na lepszą przyszłość. Partnerzy Merytoryczni wydarzenia są: Fundacja Forum Inteligentnego Rozwoju, Śląskie Centrum Etyki Biznesu i Zrównoważonego Rozwoju przy Politechnice Śląskiej. Nagrody tradycyjnie zostaną wręczone podczas 7. Forum Inteligentnego Rozwoju, które odbędzie się w dniach 6-7 czerwca w Uniejowie.",
  },
  {
    id: 2,
    img: img3,
    date: "21 lutego 2022",
    title: "Ekologiczne rozwiązania budowlane z Polski podbijają rynek EU.",
    mainText:
      "Firma SADDAR specjalizująca się w produkcji ekologicznych elementów budowlanych podpisała kontrakt z dystrybutorem we Francji. W marcu tego roku produkty marki SADDAR zostaną dostarczone do francuskich sklepów Brico Marche.",
    contentText:
      "Pierwsze zamówienie do Brico Marche obejmuje 51 tys. sztuk eko kotew, a do końca roku firma SADDAR\n" +
      "wyeksportuje na rynek francuski ponad 150 tys. sztuk produktów.\n" +
      "To kolejny sukces rodzimego producenta, który pod koniec 2020 roku rozpoczął sprzedaż swoich produktów\n" +
      "we współpracy z amerykańską siecią 350-ciu hipermarketów budowlanych. Ekspansja na rynek USA była\n" +
      "realizowana przy wsparciu Polskiej Agencji Inwestycji i Handlu.\n" +
      "„Naszym celem jest zapewnienie idealnego ekologicznego produktu, który istotnie przyczynia się do\n" +
      "poszanowania środowiska naturalnego. W ciągu najbliższych 2 lat planujemy umocnić się w Europie,\n" +
      "zdobywając 25 proc. rynku. Przy poziomie produkcji 1.5 mln sztuk rocznie i zużyciu 20 butelek na jedną eko\n" +
      "kotwę recyklingowi będziemy poddawać równowartość 30 mln butelek plastikowych” - powiedział Dariusz\n" +
      "Sadowiński, wynalazca i właściciel firmy SADDAR.\n" +
      "Pionierskie rozwiązanie produkcji ze specjalnie opracowanego przez SADDAR kompozytu na bazie surowca\n" +
      "pochodzącego z recyklingu tworzywa PET a w tym butelek PET jest dla Europejczyków bardzo atrakcyjne.\n" +
      "Według danych EuroPAP News w Europie recyclingowi poddawane jest tylko 32,5 proc. plastiku, a\n" +
      "najczęstszym sposobem utylizacji odpadów z tworzyw sztucznych jest odzyskiwanie energii (42,6 proc.).\n" +
      "„Komisja Europejska w ramach Zielonego Ładu przyjęła plan, w ramach którego 55 proc. plastikowych\n" +
      "odpadów opakowaniowych powinno zostać poddanych recyklingowi do 2030 roku. Rozwiązania\n" +
      "produktowe firmy SADDAR w istotny sposób wspierają realizację tego planu. Cieszymy się, że nasze\n" +
      "rodzime rozwiązania zyskują uznanie na europejskich i światowych rynkach. Cieszymy się również, że jako\n" +
      "Polska Agencji Inwestycji i Handlu możemy wspierać firmę w tym podboju” - powiedział Łukasz\n" +
      "Grabowski, zastępca Dyrektora Centrum Eksportu PAIH.\n" +
      "Rozwiązania instalacyjne oferowane przez SADDAR mają bardzo szerokie zastosowanie, w tym jako\n" +
      "elementy montażu ogrodzeń, drewnianej architektury ogrodowej czy w sektorze budowlanym. Są to kotwy\n" +
      "wbijane, wkręcane i przykręcane w niemal każdy rodzaj gruntu czy powierzchni. Na szeroką skalę używane\n" +
      "są przy m.in . instalacji ogromnych farm fotowoltaicznych. Montaż jest szybki i przyjazny środowisku: bez\n" +
      "użycia cementu oraz potrzeby dostosowania gruntu z użyciem ciężkiego sprzętu. W razie potrzeby, instalacje\n" +
      "można po prostu przenieść w inne miejsce bez uszczerbku dla środowiska.\n" +
      "Bazowy surowiec PET pochodzi z recyklingu głównie plastikowych butelek po wodzie mineralnej czy napojach gazowanych i stanowi istotny czynnik ochrony środowiska i przekształcenia plastikowych odpadów poużytkowych czy poprodukcyjnych w pełnowartościowy nowy wyrób który zastępuje droższy wykonany z blachy stalowej i którego wytworzenie wymaga zużycia dużej ilości energii i kopalin nieodnawialnych, będąc jednocześnie szkodliwym obciążeniem dla środowiska a zwłaszcza atmosfery. Jednocześnie eko kotwa SADDAR wbita w ziemię nigdy nie będzie korodować i nie ulegnie działaniom czynników atmosferycznych, na które jest narażona i jak ma to miejsce w przypadku konkurencyjnych wyrobów ze stali lakierowanej lub pokrytej galwanicznie mikronową powłoką. Oferowane przez SADDAR eko kotwy można użyć ponownie co więcej można je zmielić i ponownie przetworzyć na inne produkty. Wpisują się zatem w wymagania stawiane przez Unie Europejską produktom w zakresie gospodarki w obiegu zamkniętym (circular economy). W latach 2018-2020 firma SADDAR zainwestowała w badania i rozwój blisko 2.0 mln USD na poprawę wydajność produkcji do 2,5 – 3 mln eko kotew rocznie oraz na unowocześnienie i opracowanie nowych innowacyjnych modeli produktów. Obecnie firma planuje kolejne inwestycje w zakresie przygotowania i wdrożenia do produkcji modeli dostosowanych do wymogów budownictwa modułowego.",
  },
  // {
  //   id: 3,
  //   date: "21 lutego 2022",
  //   title:
  //     "Polska ekologiczna technologia do budowy farm PV wchodzi na europejski rynek artykuł w www.swiatoze.pl",
  //   mainText: "",
  //   contentText:
  //     "Polska ekologiczna technologia do budowy farm PV wchodzi na europejski rynek\n" +
  //     "Flagowym produktem firmy są kotwy wbijane, wkręcane i przykręcane w niemal każdy\n" +
  //     "rodzaj gruntu czy powierzchni. Na szeroką skalę używane są m.in . przy instalacji\n" +
  //     "ogromnych farm fotowoltaicznych. Montaż jest szybki i przyjazny środowisku: bez użycia\n" +
  //     "cementu oraz potrzeby dostosowania gruntu z użyciem ciężkiego sprzętu. W razie\n" +
  //     "potrzeby, instalacje można po prostu przenieść w inne miejsce bez uszczerbku dla\n" +
  //     "środowiska.\n" +
  //     "Bazowy surowiec PET pochodzi z recyklingu głównie plastikowych butelek po wodzie\n" +
  //     "mineralnej czy napojach gazowanych. Stanowi to istotny czynnik ochrony środowiska i\n" +
  //     "przekształcenia plastikowych odpadów poużytkowych czy poprodukcyjnych w\n" +
  //     "pełnowartościowy nowy wyrób.\n" +
  //     "Taki produkt zastępuje droższy, wykonany z blachy stalowej, którego wytworzenie wymaga\n" +
  //     "zużycia dużej ilości energii i kopalin nieodnawialnych.\n" +
  //     "\n" +
  //     "Dodatkowo eko kotwa SADDAR wbita w ziemię nigdy nie będzie korodować i nie ulegnie\n" +
  //     "działaniom czynników atmosferycznych, czego nie można powiedzieć o wyrobach ze stali\n" +
  //     "lakierowanej lub pokrytej galwanicznie mikronową powłoką.\n" +
  //     "Co ważne, oferowane przez polską firmę eko kotwy można ponownie zmielić i\n" +
  //     "przetworzyć. Produkt wpisuje się zatem w wymagania stawiane przez Unię Europejską w\n" +
  //     "zakresie gospodarki w obiegu zamkniętym.\n" +
  //     "Cały artykuł: https://swiatoze.pl/polska-ekologiczna-technologia-do-budowy-farm-pv-\n" +
  //     "wchodzi-na-europejski-rynek/",
  // },
];

export const contacts = [
  {
    id: 1,
    position: "Właściciel",
    name: "Dariusz Sadowiński",
    email: "dariusz.sadowinski@saddar.eu",
    phone: "+48698645855",
  },
  // {
  //   id: 2,
  //   position: "Dyrektor ds. międzynarodowych rynków DIY",
  //   name: "Karolina Berlińska",
  //   email: "karolina.berlinska@saddar.eu",
  //   phone: "+48 604177790",
  // },
  // {
  //   id: 3,
  //   position: "Handlowiec ds. międzynarodowych rynków DIY",
  //   name: "Piotr Smolarek",
  //   email: "piotr.smolarek@saddar.eu",
  //   phone: "+48 690117382",
  // },
  {
    id: 4,
    position: "Dyr. Produkcji",
    name: "Waldemar Federczyk",
    email: "waldemar.federczyk@saddar.eu",
    phone: "+48500633108",
  },
  {
    id: 5,
    position: "Badania i Rozwój",
    name: "Tomasz Waściszakowski",
    email: "tomasz.wasciszakowski@saddar.eu",
    phone: "+48787404486",
  },
  {
    id: 6,
    position: "Magazyn i Logistyka",
    name: "Robert Hutkowski",
    email: "robert.hutkowski@saddar.eu",
    phone: "+48605189643",
  },
  // {
  //   id: 6,
  //   position: "Administracja i programy unijne",
  //   name: "Monika Walczak, Agnieszka Czerwiec",
  //   email: "monika.walczak@saddar.eu, dofinansowania.eu@gmail.com",
  //   phone: "+48 698656855, +48 793153453",
  // },
  {
    id: 7,
    position: "Komunikacja i handel międzynarodowy",
    name: "Renata Żukowska",
    email: "renata.zukowska@saddar.eu",
    phone: "+48609372850",
  },
  // {
  //   id: 8,
  //   position: "Rynek Angielski",
  //   name: "Composite Eco Fencing UK Ltd.",
  //   email: "ecocompositeuk@gmail.com",
  //   phone: "+4407990451544",
  // },
  // {
  //   id: 9,
  //   position: "Rynek Hiszpański",
  //   name: "Aleksandra Franczyk, Leszek Franczyk",
  //   email: "aleksandra.franczyk@saddar.eu, leszek.franczyk@saddar.eu",
  //   phone: "+34 697434011, +34 631181540",
  // },
];

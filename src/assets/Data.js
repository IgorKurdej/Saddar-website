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
import img3 from "../assets/img/articles/aaa.jpg";
import img4 from '../assets/img/articles/image3.png'

export const products = [
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
    name: "PSK WHQ",
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
    id: 5,
    name: "PSO SCR",
    category: "wkr??cane",
    size: "550",
    img: psoScr,
    pdf: pdfPsoScr,
    sizes: [
      {
        symbol: "PSO SCR 61x565G",
        dimension: "?? 61x575",
      },
      {
        symbol: "PSO SCR 61x675G",
        dimension: "?? 61x675",
      },
    ],
  },
  {
    id: 2,
    name: "PSK SCR",
    category: "wkr??cane",
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
        dimension: "81x175, ?? 81",
      },
      {
        symbol: "PSO PXX 101x175G",
        dimension: "101x175, ?? 101",
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
];

export const productsSec = [
  {
    id: 8,
    name: "RSXQ",
    category: "do betonowania",
    size: "38x1500",
    img: rsxg,
    sizes: [
      {
        symbol: "RSXG15",
        dimension: "?? 38x1500",
      },
      {
        symbol: "RSXG17",
        dimension: "?? 38x1750",
      },
      {
        symbol: "RSXG20",
        dimension: "?? 38x2000",
      },
    ],
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
  {
    id: 9,
    name: "Kran",
    category: "do betonowania",
    size: "",
    img: kran,
  },
  {
    id: 15,
    name: "Rozbijak PET",
    category: "do betonowania",
    size: "",
    img: rP,
  },
]

export const historyData = [
  {
    year: "1999",
    text: "Powstanie  PHU SADDAR. W pocz??tkowym okresie dzia??alno???? koncentrowa??a wok???? produkcji konstrukcji stalowych mobilnych i sta??ych oraz  produkcji mebli szkolnych i specjalistycznego wyposa??enia pomieszcze?? dydaktycznych. Firma ??wiadczy??a ponadto us??ugi projektowania, aran??acji wn??trz oraz kompleksowego wyposa??ania obiekt??w u??yteczno??ci publicznej, jak r??wnie?? us??ugi w zakresie remontowo - budowlanym.\n",
  },
  {
    year: "2004",
    text: "Jednak po 5 latach dzia??alno??ci, za??o??yciel firmy Dariusz Sadowi??ski rozpoczyna prace nad unikalnym projektem stworzenia pierwszej na ??wiecie Eko - kotwy SADDAR wytwarzanej z kompozytu powsta??ego ze zu??ytych butelek PET.",
  },
  {
    year: "2005",
    text: "Prace przynosz?? pierwsze efekty, a w Urz??dzie Patentowym RP rejestrowany jest pierwszy model kompozytowej Eko - kotwy SADDAR.",
  },
  {
    // year: "2006-2007",
    year: "2006",
    text: "W niespe??na dwa lata od rozpocz??cia realizacji pomys??u firma SADDAR mo??e ju?? poszczyci?? si?? pierwszymi sukcesami sprzeda??owymi. Na rodzimym rynku produkty s?? dost??pne w sieciach handlowych Praktiker Polska i Leroy Merlin Polska. Rozpoczyna si?? r??wnie?? podb??j rynk??w zagranicznych - eksport Eko - kotew SADDAR na rynek holenderski.",
  },
  {
    year: "2012",
    text: "Do grona odbiorc??w produkt??w SADDAR do????cza sie?? handlowa Kingfisher, a pierwsze dostawy trafiaj?? na p????ki Castoramy Polska.",
  },
  {
    year: "2014",
    text: "Wraz z sukcesami sprzeda??owymi firma rozwija moce przerobowe i uruchamia w Markach pod Warszaw?? zak??ad produkcyjny, wyspecjalizowany w produkcji tworzyw sztucznych.",
  },
  {
    year: "2015",
    text: "Dba??o???? o wysok?? jako???? produkt??w przynosi efekt w postaci opracowania nowej, super wytrzyma??ej wersji Eko - kotwy SADDAR. To  pierwsza na ??wiecie kompozytowa Eko - kotwa wytrzymuj??c?? ci????ar doros??ego m????czyzny. W 2015 roku firma rozwija sprzeda?? na rynkach europejskich i rozpoczyna wsp????prac?? z sieciami Bauhaus, Hagebau, Globus w Niemczech oraz uruchomia dostawy na rynek du??ski i austriacki.",
  },
  {
    year: "2016",
    text: "Firma SADDAR otwiera si?? na kolejne kraje europejskie. Dzi??ki wsp????pracy z Gardenas BV s?? realizowane pierwsze dostawy dla HUBO Belgia. Wsp????praca z 4IQ Group owocuje dostawami do sieci handlowych w krajach Ba??tyckich (Bauhof). Dostawy Eko - kotew SADDAR s?? r??wnie?? realizowane do Rumunii (Dedeman). Rok 2016 to tak??e 10. rocznica dostaw na rynek holenderski i wsp????pracy z ToopWood - Gouderak - OUTDOORLIFE GROUPE. Powstaje nowe logo SADDAR\n",
  },
  {
    year: "2017",
    text: "Eko - kotwa SADDAR zostaje wyposa??ona w opatentowany system przenoszenia napr????e?? SDS - Stress Dstribution System SDS oraz SHR System (wzmocnienie otwor??w na ??ruby specjalnym nadlewem kompozytu). Rok 2017 to r??wnie?? rok bardzo intensywnej ekspansji zagranicznej. Do odbiorc??w produkt??w SADDAR do????czaj?? kolejne kraje europejskie: Litwa, Estonia, Francja, Czechy i S??owacja. Na rynku krajowym Eko - kotwy SADDAR s?? dost??pne w PSB MR??WKA, Merkury Market, RCMB Majster. Kolejni odbiorcy pojawiaj?? si?? na rynku niemieckim. Ogromnym sukcesem jest r??wnie?? podb??j kontynentu ameryka??skiego i pierwsze dostawy do Kanady. ????cznie produkty SADDAR s?? dost??pne jest na dw??ch kontynentach: w Europie w 26 sieciach handlowych w 15 krajach; w Ameryce P????nocnej w The Home Depot w Kanadzie",
  },
  {
    year: "2017",
    text: "Nowe logo firmy Saddar",
  },
  {
    // year: "2017???2018",
    year: "2018",
    text: "Firma SADDAR rozpoczyna realizacj?? projektu badawczo???rozwojowego ???Innowacyjna gama autorskich Eko - kotew SADDAR o r????nych w??a??ciwo??ciach i przeznaczeniu??? finansowanego ze ??rodk??w UE. Opracowane w ramach projektu modele s?? rejestrowane w Urz??dzie Patentowym.",
  },
  {
    year: "2018",
    text: "Udzia?? w ???The Buildings Show??? w Toronto w ramach stoiska narodowego zorganizowanego przez Polsk?? Agencj?? Inwestycji i Handlu.",
  },
  {
    // year: "2019???2020",
    year: "2019",
    text: "Realizacja kolejnego projektu inwestycyjnego ???Wdro??enie gamy autorskich Eko-kotew SADDAR, jako efekt realizacji prac B+R??? finansowanego ze ??rodk??w UE.",
  },
  {
    year: "2020",
    text: "Firma rozbudowuje park maszynowy w zak??adzie produkcyjnym w Markach. Inwestycja pozwala obs??u??enie rosn??cego popytu na produkty SADDAR i na zwi??kszenie mocy produkcyjnych do poziomu 2.5 ??? 3.0 mln eko - kotew rocznie. Na rynek trafia r??wnie?? nowa seria eko - kotew GIGANTO. To nowy wymiar kompozytowych eko- kotew. W 2020 roku ma r??wnie?? miejsce udana ekspansja na rynek ameryka??ski. SADDAR podpisuje umow?? z czo??ow?? ameryka??sk?? sieci?? handlow?? w sektorze DiY Home & Garden ??? Menard Inc.",
  },
  {
    year: "2022",
    text: "Rok 2022 zacz???? si?? bardzo intensywnie, powi??kszamy nasz zesp????, zwi??kszamy sprzeda?? i zdobywamy nowe rynki. Eko - kotwy SADDAR trafiaj?? do francuskich sklep??w Brico Marche, a w Barcelonie powstaje przedstawicielstwo SADDAR na rynek Hiszpanii i Portugalii.",
  },
];

export const news = [
  {
    id: 0,
    img: img1,
    date: "6 pa??dziernika 2020",
    title: "Ekologiczne rozwi??zania budowlane z Polski podbijaj?? USA.",
    mainText:
      "Firma SADDAR specjalizuj??ca si?? w produkcji ekologicznych element??w budowlanych podpisa??a, przy wsparciu Polskiej Agencji Inwestycji i Handlu (PAIH), kontrakt z ameryka??sk?? sieci?? 350-ciu hipermarket??w budowlanych. Pierwsze zam??wienie otwiera przed firm?? szans?? na szybkie rozszerzenie oferowanego w USA asortymentu o kolejne produkty i klient??w. Wprowadzenie wyrob??w SADDAR do sieci ameryka??skich hipermarket??w budowlanych to pierwszy krok we wsparciu, jakie udzieli??o biuro handlowe PAIH w Waszyngtonie. Nast??pny krok to zbudowanie wiedzy na rynku USA o zaletach polskiego produktu dla ??rodowiska naturalnego.",
    contentText:
      "Pionierskie rozwi??zanie produkcji ze specjalnie opracowanego przez SADDAR kompozytu na bazie surowca pochodz??cego z recyklingu butelek PET jest dla Amerykan??w bardzo atrakcyjne. Wed??ug danych McKinsey & Company tylko 28 proc. plastiku z opakowa?? i butelek jest w USA ponownie przetwarzane. Model gospodarki o obiegu zamkni??tym, w kt??ry idealnie wpisuje si?? nasz rodzimy producent przyci??ga coraz wi??ksz?? uwag?? w Stanach Zjednoczonych. Sama Kalifornia, kt??ra przoduje w ekologicznych rozwi??zaniach to pi??ta gospodarka ??wiatowa i tam w??a??nie b??dziemy stara?? si?? o nowe kontrakty dla polskiego producenta - powiedzia?? Bartosz Szajda, kierownik biura ZBH PAIH w Waszyngtonie.\n" +
      "\n" +
      "Kompozytowa Eko - kotwa SADDAR to produkt oparty na zastrze??onej konstrukcji i innowacyjnym w skali ??wiatowej pomy??le wykorzystania do jego produkcji butelek PET. Dotychczasowa hegemonia producent??w i dostawc??w kotw stalowych zosta??a prze??amana autorskim rozwi??zaniem polskiej firmy SADDAR z sukcesem podbijaj??cej ju?? Europ?? Zachodni??.\n" +
      "\n" +
      "- Rozwi??zania instalacyjne oferowane przez SADDAR maj?? bardzo szerokie zastosowanie, w tym jako elementy monta??u ogrodze??, drewnianej architektury ogrodowej czy w sektorze budowlanym. S?? to kotwy wbijane, wkr??cane i przykr??cane w niemal ka??dy rodzaj gruntu czy powierzchni. Na szerok?? skal?? u??ywane s?? przy m.in. instalacji ogromnych farm fotowoltaicznych w USA. Monta?? jest szybki i przyjazny ??rodowisku: bez u??ycia cementu oraz potrzeby dostosowania gruntu z u??yciem ci????kiego sprz??tu. W razie potrzeby, instalacje mo??na po prostu przenie???? w inne miejsce bez uszczerbku dla ??rodowiska - dodaje Bartosz Szajda.\n" +
      "\n" +
      'Naszym celem jest zapewnienie idealnego ekologicznego produktu, kt??ry istotnie przyczynia si?? do poszanowania ??rodowiska naturalnego. Opr??cz rozpocz??tej w??a??nie ekspansji w USA w ci??gu najbli??szych 3 lat planujemy r??wnie?? umocni?? si?? w Europie, zdobywaj??c 25 proc. rynku. Przy poziomie produkcji 1.5 mln sztuk rocznie i zu??yciu 20 butelek na jedn?? ekokotw?? recyklingowi b??dziemy poddawa?? a?? 30 mln butelek plastikowych. Dumnie mo??emy zatem m??wi?? o naszych "zielonych zas??ugach" - powiedzia?? Dariusz Sadowi??ski, za??o??yciel firmy SADDAR.\n' +
      "\n" +
      "Bazowy surowiec PET pochodzi z recyklingu g????wnie plastikowych butelek po wodzie mineralnej czy napojach gazowanych i stanowi istotny czynnik ochrony ??rodowiska i przekszta??cenia plastikowych odpad??w pou??ytkowych czy poprodukcyjnych w pe??nowarto??ciowy nowy wyr??b, kt??ry zast??puje dro??szy wykonany z blachy stalowej i kt??rego wytworzenie wymaga zu??ycia du??ej ilo??ci energii i kopalin nieodnawialnych, b??d??c jednocze??nie szkodliwym obci????eniem dla ??rodowiska a zw??aszcza atmosfery. Jednocze??nie ekokotwa SADDAR wbita w ziemi?? nigdy nie b??dzie korodowa?? i nie ulegnie dzia??aniom czynnik??w atmosferycznych, na kt??re jest nara??ona i jak ma to miejsce w przypadku konkurencyjnych wyrob??w ze stali lakierowanej lub pokrytej galwanicznie mikronow?? pow??ok??. Oferowane przez SADDAR Eko - kotwy mo??na u??y?? ponownie co wi??cej mo??na je zmieli?? i ponownie przetworzy?? na inne produkty. Wpisuj?? si?? zatem w wymagania stawiane produktom w zakresie gospodarki w obiegu zamkni??tym (circular economy).\n" +
      "\n" +
      "\n" +
      "W latach 2018-2020 firma SADDAR zainwestowa??a w badania i rozw??j blisko 2.0 mln USD na popraw?? wydajno???? produkcji do 2,5 - 3 mln Eko - kotw rocznie oraz na unowocze??nienie i opracowanie nowych innowacyjnych modeli produkt??w.\n" +
      "\n" +
      "??r??d??o: Informacja Prasowa Polskiej Agencji Inwestycji i Handlu (PAIH)\n" +
      "https://www.paih.gov.pl/20201006/ekologiczne_rozwiazania_budowlane_z_polski_w_usa\n",
  },
  {
    id: 1,
    img: img2,
    date: "2 lutego 2022",
    title: "Nominacja do Polskiej Nagrody Inteligentnego Rozwoju 2022",
    mainText:
      "Firma PHU Saddar Dariusz Sadowi??ski otrzyma??a List Nominacyjny do Polskiej Nagrody Inteligentnego Rozwoju 2022 w kategorii Innowacyjne Technologie Przysz??o??ci.",
    contentText:
      "To ju?? 7. edycja Konkursu organizowanego przez Centrum Inteligentnego Rozwoju oraz Forum Inteligentnego Rozwoju. Laureatami wyr????nienia zostaj?? osoby i organizacje, kt??re realizuj?? innowacyjne projekty, rozwojowe inwestycje czy prowadz?? nowatorsk?? dzia??alno????, skutkuj??c?? wprowadzaniem na rynek ju?? lub w przysz??o??ci innowacji technologicznych b??d?? spo??ecznych, przek??adaj??cych si?? na inteligentny rozw??j. Statuetki i certyfikaty PNIR trafiaj?? w r??ce ludzi inspiruj??cych, przedstawicieli organizacji, chc??cych wp??ywa?? na lepsz?? przysz??o????. Partnerzy Merytoryczni wydarzenia s??: Fundacja Forum Inteligentnego Rozwoju, ??l??skie Centrum Etyki Biznesu i Zr??wnowa??onego Rozwoju przy Politechnice ??l??skiej. Nagrody tradycyjnie zostan?? wr??czone podczas 7. Forum Inteligentnego Rozwoju, kt??re odb??dzie si?? w dniach 6-7 czerwca w Uniejowie.",
  },
  {
    id: 2,
    img: img3,
    date: "21 lutego 2022",
    title: "Ekologiczne rozwi??zania budowlane z Polski podbijaj?? rynek EU.",
    mainText:
      "Firma SADDAR specjalizuj??ca si?? w produkcji ekologicznych element??w budowlanych podpisa??a kontrakt z dystrybutorem we Francji. W marcu tego roku produkty marki SADDAR zostan?? dostarczone do francuskich sklep??w Brico Marche.",
    contentText:
      "Pierwsze zam??wienie do Brico Marche obejmuje 51 tys. sztuk Eko - kotew SADDAR, a do ko??ca roku firma SADDAR\n" +
      "wyeksportuje na rynek francuski ponad 150 tys. sztuk produkt??w.\n" +
      "To kolejny sukces rodzimego producenta, kt??ry pod koniec 2020 roku rozpocz???? sprzeda?? swoich produkt??w\n" +
      "we wsp????pracy z ameryka??sk?? sieci?? 350-ciu hipermarket??w budowlanych. Ekspansja na rynek USA by??a\n" +
      "realizowana przy wsparciu Polskiej Agencji Inwestycji i Handlu.\n" +
      "???Naszym celem jest zapewnienie idealnego ekologicznego produktu, kt??ry istotnie przyczynia si?? do\n" +
      "poszanowania ??rodowiska naturalnego. W ci??gu najbli??szych 2 lat planujemy umocni?? si?? w Europie,\n" +
      "zdobywaj??c 25 proc. rynku. Przy poziomie produkcji 1.5 mln sztuk rocznie i zu??yciu 20 butelek na jedn?? eko\n" +
      "kotw?? recyklingowi b??dziemy poddawa?? r??wnowarto???? 30 mln butelek plastikowych??? - powiedzia?? Dariusz\n" +
      "Sadowi??ski, wynalazca i w??a??ciciel firmy SADDAR.\n" +
      "Pionierskie rozwi??zanie produkcji ze specjalnie opracowanego przez SADDAR kompozytu na bazie surowca\n" +
      "pochodz??cego z recyklingu tworzywa PET a w tym butelek PET jest dla Europejczyk??w bardzo atrakcyjne.\n" +
      "Wed??ug danych EuroPAP News w Europie recyclingowi poddawane jest tylko 32,5 proc. plastiku, a\n" +
      "najcz??stszym sposobem utylizacji odpad??w z tworzyw sztucznych jest odzyskiwanie energii (42,6 proc.).\n" +
      "???Komisja Europejska w ramach Zielonego ??adu przyj????a plan, w ramach kt??rego 55 proc. plastikowych\n" +
      "odpad??w opakowaniowych powinno zosta?? poddanych recyklingowi do 2030 roku. Rozwi??zania\n" +
      "produktowe firmy SADDAR w istotny spos??b wspieraj?? realizacj?? tego planu. Cieszymy si??, ??e nasze\n" +
      "rodzime rozwi??zania zyskuj?? uznanie na europejskich i ??wiatowych rynkach. Cieszymy si?? r??wnie??, ??e jako\n" +
      "Polska Agencji Inwestycji i Handlu mo??emy wspiera?? firm?? w tym podboju??? - powiedzia?? ??ukasz\n" +
      "Grabowski, zast??pca Dyrektora Centrum Eksportu PAIH.\n" +
      "Rozwi??zania instalacyjne oferowane przez SADDAR maj?? bardzo szerokie zastosowanie, w tym jako\n" +
      "elementy monta??u ogrodze??, drewnianej architektury ogrodowej czy w sektorze budowlanym. S?? to kotwy\n" +
      "wbijane, wkr??cane i przykr??cane w niemal ka??dy rodzaj gruntu czy powierzchni. Na szerok?? skal?? u??ywane\n" +
      "s?? przy m.in . instalacji ogromnych farm fotowoltaicznych. Monta?? jest szybki i przyjazny ??rodowisku: bez\n" +
      "u??ycia cementu oraz potrzeby dostosowania gruntu z u??yciem ci????kiego sprz??tu. W razie potrzeby, instalacje\n" +
      "mo??na po prostu przenie???? w inne miejsce bez uszczerbku dla ??rodowiska.\n" +
      "Bazowy surowiec PET pochodzi z recyklingu g????wnie plastikowych butelek po wodzie mineralnej czy napojach gazowanych i stanowi istotny czynnik ochrony ??rodowiska i przekszta??cenia plastikowych odpad??w pou??ytkowych czy poprodukcyjnych w pe??nowarto??ciowy nowy wyr??b kt??ry zast??puje dro??szy wykonany z blachy stalowej i kt??rego wytworzenie wymaga zu??ycia du??ej ilo??ci energii i kopalin nieodnawialnych, b??d??c jednocze??nie szkodliwym obci????eniem dla ??rodowiska a zw??aszcza atmosfery. Jednocze??nie eko kotwa SADDAR wbita w ziemi?? nigdy nie b??dzie korodowa?? i nie ulegnie dzia??aniom czynnik??w atmosferycznych, na kt??re jest nara??ona i jak ma to miejsce w przypadku konkurencyjnych wyrob??w ze stali lakierowanej lub pokrytej galwanicznie mikronow?? pow??ok??. Oferowane przez SADDAR eko kotwy mo??na u??y?? ponownie co wi??cej mo??na je zmieli?? i ponownie przetworzy?? na inne produkty. Wpisuj?? si?? zatem w wymagania stawiane przez Unie Europejsk?? produktom w zakresie gospodarki w obiegu zamkni??tym (circular economy). W latach 2018-2020 firma SADDAR zainwestowa??a w badania i rozw??j blisko 2.0 mln USD na popraw?? wydajno???? produkcji do 2,5 ??? 3 mln eko kotew rocznie oraz na unowocze??nienie i opracowanie nowych innowacyjnych modeli produkt??w. Obecnie firma planuje kolejne inwestycje w zakresie przygotowania i wdro??enia do produkcji modeli dostosowanych do wymog??w budownictwa modu??owego.",
  },
  // {
  //   id: 3,
  //   date: "21 lutego 2022",
  //   title:
  //     "Polska ekologiczna technologia do budowy farm PV wchodzi na europejski rynek artyku?? w www.swiatoze.pl",
  //   mainText: "",
  //   contentText:
  //     "Polska ekologiczna technologia do budowy farm PV wchodzi na europejski rynek\n" +
  //     "Flagowym produktem firmy s?? kotwy wbijane, wkr??cane i przykr??cane w niemal ka??dy\n" +
  //     "rodzaj gruntu czy powierzchni. Na szerok?? skal?? u??ywane s?? m.in . przy instalacji\n" +
  //     "ogromnych farm fotowoltaicznych. Monta?? jest szybki i przyjazny ??rodowisku: bez u??ycia\n" +
  //     "cementu oraz potrzeby dostosowania gruntu z u??yciem ci????kiego sprz??tu. W razie\n" +
  //     "potrzeby, instalacje mo??na po prostu przenie???? w inne miejsce bez uszczerbku dla\n" +
  //     "??rodowiska.\n" +
  //     "Bazowy surowiec PET pochodzi z recyklingu g????wnie plastikowych butelek po wodzie\n" +
  //     "mineralnej czy napojach gazowanych. Stanowi to istotny czynnik ochrony ??rodowiska i\n" +
  //     "przekszta??cenia plastikowych odpad??w pou??ytkowych czy poprodukcyjnych w\n" +
  //     "pe??nowarto??ciowy nowy wyr??b.\n" +
  //     "Taki produkt zast??puje dro??szy, wykonany z blachy stalowej, kt??rego wytworzenie wymaga\n" +
  //     "zu??ycia du??ej ilo??ci energii i kopalin nieodnawialnych.\n" +
  //     "\n" +
  //     "Dodatkowo eko kotwa SADDAR wbita w ziemi?? nigdy nie b??dzie korodowa?? i nie ulegnie\n" +
  //     "dzia??aniom czynnik??w atmosferycznych, czego nie mo??na powiedzie?? o wyrobach ze stali\n" +
  //     "lakierowanej lub pokrytej galwanicznie mikronow?? pow??ok??.\n" +
  //     "Co wa??ne, oferowane przez polsk?? firm?? eko kotwy mo??na ponownie zmieli?? i\n" +
  //     "przetworzy??. Produkt wpisuje si?? zatem w wymagania stawiane przez Uni?? Europejsk?? w\n" +
  //     "zakresie gospodarki w obiegu zamkni??tym.\n" +
  //     "Ca??y artyku??: https://swiatoze.pl/polska-ekologiczna-technologia-do-budowy-farm-pv-\n" +
  //     "wchodzi-na-europejski-rynek/",
  // },
  {
    id: 4,
    img: img4,
    date: "21 lutego 2022",
    title: "Polska ekologiczna technologia do budowy farm PV wchodzi na europejski rynek",
    mainText: "Flagowym produktem firmy s?? kotwy wbijane, wkr??cane i przykr??cane w niemal ka??dy rodzaj gruntu czy powierzchni.",
    contentText:
        "Polska ekologiczna technologia do budowy farm PV wchodzi na europejski rynek.\n" +
        "Flagowym produktem firmy s?? kotwy wbijane, wkr??cane i przykr??cane w niemal ka??dy\n" +
        "rodzaj gruntu czy powierzchni. Na szerok?? skal?? u??ywane s?? m.in . przy instalacji\n" +
        "ogromnych farm fotowoltaicznych. Monta?? jest szybki i przyjazny ??rodowisku: bez u??ycia\n" +
        "cementu oraz potrzeby dostosowania gruntu z u??yciem ci????kiego sprz??tu. W razie\n" +
        "potrzeby, instalacje mo??na po prostu przenie???? w inne miejsce bez uszczerbku dla\n" +
        "??rodowiska.\n" +
        "Bazowy surowiec PET pochodzi z recyklingu g????wnie plastikowych butelek po wodzie\n" +
        "mineralnej czy napojach gazowanych. Stanowi to istotny czynnik ochrony ??rodowiska i\n" +
        "przekszta??cenia plastikowych odpad??w pou??ytkowych czy poprodukcyjnych w\n" +
        "pe??nowarto??ciowy nowy wyr??b.\n" +
        "Taki produkt zast??puje dro??szy, wykonany z blachy stalowej, kt??rego wytworzenie wymaga\n" +
        "zu??ycia du??ej ilo??ci energii i kopalin nieodnawialnych.\n" +
        "Dodatkowo eko kotwa SADDAR wbita w ziemi?? nigdy nie b??dzie korodowa?? i nie ulegnie\n" +
        "dzia??aniom czynnik??w atmosferycznych, czego nie mo??na powiedzie?? o wyrobach ze stali\n" +
        "lakierowanej lub pokrytej galwanicznie mikronow?? pow??ok??.\n" +
        "Co wa??ne, oferowane przez polsk?? firm?? eko kotwy mo??na ponownie zmieli?? i\n" +
        "przetworzy??. Produkt wpisuje si?? zatem w wymagania stawiane przez Uni?? Europejsk?? w\n" +
        "zakresie gospodarki w obiegu zamkni??tym.\n" +
        "\nCa??y artyku??: https://swiatoze.pl/polska-ekologiczna-technologia-do-budowy-farm-pv-\n" +
        "wchodzi-na-europejski-rynek/"
    },
];

export const contacts = [
  {
    id: 1,
    position: "W??a??ciciel",
    name: "Dariusz Sadowi??ski",
    email: "dariusz.sadowinski@saddar.eu",
    phone: "+48698645855",
  },
  // {
  //   id: 2,
  //   position: "Dyrektor ds. mi??dzynarodowych rynk??w DIY",
  //   name: "Karolina Berli??ska",
  //   email: "karolina.berlinska@saddar.eu",
  //   phone: "+48 604177790",
  // },
  // {
  //   id: 3,
  //   position: "Handlowiec ds. mi??dzynarodowych rynk??w DIY",
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
    position: "Badania i Rozw??j",
    name: "Tomasz Wa??ciszakowski",
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
    position: "Komunikacja i handel mi??dzynarodowy",
    name: "Renata ??ukowska",
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
  //   position: "Rynek Hiszpa??ski",
  //   name: "Aleksandra Franczyk, Leszek Franczyk",
  //   email: "aleksandra.franczyk@saddar.eu, leszek.franczyk@saddar.eu",
  //   phone: "+34 697434011, +34 631181540",
  // },
];

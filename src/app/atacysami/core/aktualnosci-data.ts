/**
 * Dane wpisów „Aktualności" stowarzyszenia „A Tacy Sami" — w formie postów.
 *
 * Jak dodać nowy post:
 *  1) Dopisz kolejny obiekt na końcu tablicy AKTUALNOSCI poniżej.
 *  2) Nic więcej nie trzeba zmieniać — strona sama posortuje posty
 *     od najnowszego (po polu dataISO) i pogrupuje je w zakładki lat.
 */

export interface SekcjaZadan {
  tytul: string;
  pozycje: string[];
}

export interface Aktualnosc {
  rok: number;
  dataISO: string;
  data: string;
  tytul: string;
  tresc?: string[];
  sekcje?: SekcjaZadan[];
  zdjecia?: string[];
  link?: string;
}

export const AKTUALNOSCI: Aktualnosc[] = [
  {
    rok: 2026,
    dataISO: '2026-01-01',
    data: 'Stan na 2026 r.',
    tytul: 'Aktualnie realizowane zadania publiczne i wsparcia finansowe',
    sekcje: [
      {
        tytul: 'Aktualnie realizowane zadania publiczne',
        pozycje: [
          '„Boccia kreuje i rehabilituje" — dotacja z Gminy Miejskiej Lubin (zadanie rozpoczęte — treningi sekcji bocci).',
          '„Aqua Akcja" — dotacja z Powiatu Lubińskiego (zadanie rozpoczęte — zajęcia sekcji pływackiej Aqua Aerobiku).',
          'XII Regionalny Turniej Bocci — „Sport dla każdego" — dotacja z Powiatu Lubińskiego.',
          'V Regionalny Rajd „Wędruj z nami" etap drugi — zadanie współfinansowane ze środków PFRON przekazanych przez Samorząd Województwa Dolnośląskiego (zadanie rozpoczęte).'
        ]
      },
      {
        tytul: 'Inne zadania i wsparcia finansowe',
        pozycje: [
          'V Regionalny Rajd „Wędruj z nami" etap pierwszy.',
          '„Akcja Smacznego" — zapewnienie wsparcia żywieniowego dla podopiecznych stowarzyszenia (obiady, drugie śniadania).',
          'Finansowanie transportu wycieczek m.in. do: Rzeszówek — Centrum Edukacji „Zielony Wulkan" na warsztaty kosmetyczne, Żmigrodu — wycieczka przyrodnicza, Wrocławia do MovieGate — Muzeum w podziemiach placu Solnego.',
          'Wsparcie Regionalnego konkursu matematyczno-informatycznego „MatemaTik".',
          'Wsparcie w organizacji III Regionalnego Konkursu Wokalnego (najem sali, dekoracje).',
          'Sfinansowanie kursu Kwalifikowanej Pierwszej Pomocy członka Stowarzyszenia.',
          'Sfinansowanie szkolenia dla członków Stowarzyszenia — Standardy Ochrony Małoletnich.',
          'Sfinansowanie kosztów leczenia stomatologicznego.',
          'Zakup artykułów żywnościowych i higienicznych dla rodziny będącej w trudnej sytuacji życiowej.',
          'Sfinansowanie kosztów warsztatów ogrodniczych — organizacja Dnia Ziemi w SOSzW.',
          'Zakup nagród na II Ogólnoszkolny Turniej w badmintona.',
          'Wsparcie finansowe w organizacji Dnia Dziecka w SOSzW (poczęstunek, stroje dla zespołu tanecznego).',
          'Sfinansowanie budowy wiatrołapu w SOSzW.',
          'Zakup mebli do klasy SOSzW.',
          'Ogólnoszkolny Turniej Tenisa Stołowego — zakup banera, medali.',
          'Dofinansowanie kosztu pobytu podopiecznych Stowarzyszenia na obozie w Wygnańczycach.',
          'Wsparcie w zakupie biletów wstępu do różnych atrakcji dla podopiecznych przebywających na wypoczynku w Pobierowie.'
        ]
      }
    ],
    zdjecia: [
      'assets/images/ATS/aktualnosci/2026-aktualnosci-01.jpg'
    ]
  },
  {
    rok: 2026,
    dataISO: '2026-06-08',
    data: '8 czerwca 2026',
    tytul: 'V Regionalny Rajd Nordic Walking',
    tresc: [
      'W ramach projektu „V Regionalny Rajd Nordic Walking" nadal realizowane są regularne zajęcia sekcji chodzenia z kijkami. Uczestnicy bardzo chętnie i aktywnie biorą udział w treningach, doskonaląc technikę marszu oraz poprawiając swoją kondycję fizyczną.',
      'Zajęcia odbywają się w przyjaznej atmosferze, sprzyjają integracji uczestników oraz promują zdrowy i aktywny styl życia. Systematyczny udział w spotkaniach świadczy o dużym zaangażowaniu i zainteresowaniu tą formą aktywności.',
      'Zadanie finansowane jest przez „A Tacy Sami". Dzięki otrzymanemu wsparciu możliwa jest kontynuacja działań służących aktywizacji, rehabilitacji i integracji osób z niepełnosprawnościami.'
    ],
    zdjecia: [
      'assets/images/ATS/aktualnosci/2026-06-08-nordic-walking-01.JPG',
      'assets/images/ATS/aktualnosci/2026-06-08-nordic-walking-02.JPG'
    ],
    link: 'https://www.facebook.com/share/p/1C6VjbkPTd/'
  },
  {
    rok: 2026,
    dataISO: '2026-05-29',
    data: '29 maja 2026',
    tytul: 'XII Regionalny Turniej Bocci „Sport dla każdego"',
    tresc: [
      '29 maja w Lubinie odbył się XII Regionalny Turniej Bocci „Sport dla Każdego" – wydarzenie promujące aktywność sportową osób z niepełnosprawnościami oraz integrację uczestników z różnych części Dolnego Śląska. W zawodach udział wzięły drużyny reprezentujące powiaty: wrocławski, średzki, lubiński, legnicki, polkowicki oraz wałbrzyski.',
      'Turniej został zorganizowany w ramach działań wspierających rozwój sportowy dzieci i młodzieży z niepełnosprawnościami. Uczestnicy na co dzień trenują w sekcjach bocci, rozwijając swoje umiejętności i sprawność fizyczną. Zadanie zostało sfinansowane przez Powiat Lubiński.',
      'Rozgrywki przebiegały w atmosferze zdrowej rywalizacji, wzajemnego szacunku i sportowych emocji. Zawodnicy wykazali się ogromnym zaangażowaniem, determinacją oraz wolą walki, a każdy mecz dostarczał wielu emocji zarówno uczestnikom, jak i kibicom.',
      'Gośćmi specjalnymi wydarzenia byli pani Jadwiga Musiał – Przewodnicząca Rady Powiatu, dyrektorzy zaprzyjaźnionych i współorganizujących szkół: pan Dariusz Tomaszewski oraz pan Łukasz Nowicki, a także pani Natalia Czerwonka. Wsparcia udzielili również sponsorzy indywidualni oraz partnerzy wydarzenia: firma Libram, Gmina Miejska Lubin oraz Zagłębie Lubin.',
      'Nad prawidłowym przebiegiem zawodów czuwali organizatorzy, wolontariusze oraz zespół sędziowski z SOSzW im. Przyjaciół Dzieci w Lubinie oraz Wrocławia.',
      'W organizację wydarzenia zaangażował się również Zespół Szkół nr 1 w Lubinie, wspierając techniczne przygotowanie turnieju. Nad sprawnością organizacyjną czuwali harcerze z 9 Drużyny Harcerskiej „Antares" z Hufca ZHP Lubin. Bezpieczeństwo uczestników zapewniali przedstawiciele służby zdrowia oraz funkcjonariusze Policji. Koordynator strony cateringowej pani Agnieszka S. wraz z pomocnymi członkami stowarzyszenia wykazała się wspaniałą organizacją i profesjonalizmem.',
      'Na zakończenie turnieju wszyscy uczestnicy otrzymali pamiątkowe dyplomy, medale, nagrody oraz puchary ufundowane przez sponsorów i partnerów wydarzenia. Organizatorzy przygotowali także poczęstunek oraz czas na wspólną integrację po sportowych zmaganiach.',
      'XII Regionalny Turniej Bocci „Sport dla Każdego" po raz kolejny pokazał, jak ważne są inicjatywy wspierające aktywność sportową, integrację społeczną oraz rozwój pasji wśród osób z niepełnosprawnościami.',
      'Dziękujemy wszystkim, którzy przyczynili się do organizacji wydarzenia.'
    ],
    sekcje: [
      {
        tytul: 'Wyniki turnieju',
        pozycje: [
          '1. miejsce: „A Tacy Sami" z Lubina',
          '2. miejsce: „Dreptaki" ze Środy Śląskiej',
          '3. miejsce: „Tęcza" z Wrocławia',
          '4. miejsce: „Stokrotki" z Legnicy',
          '5. miejsce: „Radośni" z Polkowic',
          '6. miejsce: „Sokoły" z Wałbrzycha',
          '7. miejsce: „Orlęta" z Lubina'
        ]
      }
    ],
    zdjecia: [
      'assets/images/ATS/aktualnosci/2026-05-30-xii-rtb-01.JPG',
      'assets/images/ATS/aktualnosci/2026-05-30-xii-rtb-02.jpg',
      'assets/images/ATS/aktualnosci/2026-05-30-xii-rtb-03.jpg',
      'assets/images/ATS/aktualnosci/2026-05-30-xii-rtb-04.jpeg',
      'assets/images/ATS/aktualnosci/2026-05-30-xii-rtb-05.jpeg'

    ],
    link: 'https://www.facebook.com/share/p/1GTZGBTqQM/'
  },
  {
    rok: 2026,
    dataISO: '2026-04-29',
    data: '27–29 kwietnia 2026',
    tytul: 'II Ogólnoszkolne Mistrzostwa Badmintona',
    tresc: [
      'W dniach 27–29 kwietnia odbyły się II Ogólnoszkolne Mistrzostwa Badmintona, które dostarczyły uczestnikom i kibicom wielu sportowych emocji oraz niezapomnianych wrażeń.',
      'Turniej rozegrano w czterech kategoriach: dziewcząt młodszych i starszych oraz chłopców młodszych i starszych. Zawody nie tylko wyłoniły najlepszych zawodników, ale przede wszystkim promowały aktywność fizyczną, zdrowy styl życia oraz badminton jako atrakcyjną formę ruchu.',
      'Rywalizacja przebiegała w duchu fair play, a uczestnicy wykazali się dużym zaangażowaniem, determinacją i sportową postawą. Każdy mecz był okazją do sprawdzenia swoich umiejętności oraz przeżycia radości z gry.',
      'Gratulujemy zwycięzcom!',
      'Stowarzyszenie sfinansowało nagrody dla uczestników Turnieju.'
    ],
    zdjecia: [
      'assets/images/ATS/aktualnosci/2026-04-29-badminton-01.jpeg',
      'assets/images/ATS/aktualnosci/2026-04-29-badminton-02.jpeg'
    ],
    link: 'https://www.facebook.com/share/p/1BAGsMqSpu/'
  },
  {
    rok: 2026,
    dataISO: '2026-04-22',
    data: '22 kwietnia 2026',
    tytul: 'Obchody Dnia Ziemi „Zainwestuj w naszą planetę" w Ośrodku Szkolno-Wychowawczym',
    tresc: [
      'W ramach obchodów Dnia Ziemi pod hasłem „Zainwestuj w naszą planetę" zrealizowano szereg działań mających na celu kształtowanie postaw proekologicznych wśród uczniów poprzez ich aktywne zaangażowanie.',
      'Przez cały tydzień uczniowie uczestniczyli w porządkowaniu terenu ośrodka oraz jego okolic. Działania te polegały na sprzątaniu terenów zanieczyszczonych wskutek działalności człowieka, co przyczyniło się do promowania dbałości o środowisko naturalne oraz rozwijania odpowiedzialnych postaw ekologicznych. Zwracano również uwagę na utrzymanie czystości w klasach oraz estetykę otoczenia poprzez ich ukwiecenie.',
      'Sfinansowano warsztaty ogrodnicze, w ramach których dokonano ukwiecenia oraz nasadzeń roślinności wokół Ośrodka Szkolno-Wychowawczego im. Przyjaciół Dzieci w Lubinie. Działania przyczyniły się do zwiększenia świadomości ekologicznej uczniów oraz kształtowania odpowiedzialnych postaw wobec środowiska naturalnego.'
    ],
    zdjecia: [
      'assets/images/ATS/aktualnosci/2026-04-22-dzien-ziemi-01.JPG',
      'assets/images/ATS/aktualnosci/2026-04-22-dzien-ziemi-02.JPG'
    ],
    link: 'https://www.facebook.com/share/p/19TLQywZHF/'
  },
  {
    rok: 2026,
    dataISO: '2026-03-27',
    data: '24–27 marca 2026',
    tytul: 'Ogólnoszkolny Turniej Tenisa Stołowego',
    tresc: [
      'W ramach organizacji turnieju tenisa stołowego dofinansowano zakup banera oraz medali dla uczestników.',
      'Zawody zostały rozegrane w czterech kategoriach: dziewczęta młodsze, chłopcy młodsi, dziewczęta starsze oraz chłopcy starsi.',
      'Eliminacje, rozgrywki oraz finały odbywały się w ramach lekcji wychowania fizycznego, co sprzyjało aktywnemu udziałowi uczniów oraz popularyzacji tej dyscypliny sportu wśród młodzieży.',
      'Rozgrywki odbywały się zarówno na sali gimnastycznej, jak i na świeżym powietrzu – przy zewnętrznych stołach do tenisa stołowego przystosowanych do użytkowania na świeżym powietrzu.',
      'Wszystkim uczestnikom serdecznie gratulujemy osiągniętych wyników oraz sportowej postawy.',
      'Organizatorzy – Zespół nauczycieli wychowania fizycznego.'
    ],
    sekcje: [
      {
        tytul: 'Kategoria dziewcząt młodszych',
        pozycje: [
          '1 miejsce – Dominika Mazur',
          '2 miejsce – Wiktoria Skowronek',
          '3 miejsce – Julia Kapłon'
        ]
      },
      {
        tytul: 'Kategoria chłopców młodszych',
        pozycje: [
          '1 miejsce – Olaf Goliczewski',
          '2 miejsce – Adam Oporski',
          '3 miejsce – Marcel Kurzawa'
        ]
      },
      {
        tytul: 'Kategoria dziewcząt starszych',
        pozycje: [
          '1 miejsce – Paulina Walczak',
          '2 miejsce – Martyna Kurzawa',
          '3 miejsce – Gizela Struk'
        ]
      },
      {
        tytul: 'Kategoria chłopców starszych',
        pozycje: [
          '1 miejsce – Mariusz Kaźmierczak',
          '2 miejsce – Mateusz Słomiński',
          '3 miejsce – Jakub Sadczak'
        ]
      }
    ],
    zdjecia: [
      'assets/images/ATS/aktualnosci/2026-03-27-tenis-stolowy-01.JPG',
      'assets/images/ATS/aktualnosci/2026-03-27-tenis-stolowy-02.jpeg',
      'assets/images/ATS/aktualnosci/2026-03-27-tenis-stolowy-03.jpeg'
    ],
    link: 'https://www.facebook.com/share/p/1GnMZckuEv/'
  },
  {
    rok: 2026,
    dataISO: '2026-03-19',
    data: '19 marca 2026',
    tytul: 'Inwestujemy w przyszłość! Relacja z konkursu „Matema-TIK 2026"',
    tresc: [
      'Jako Stowarzyszenie „A Tacy Sami" z ogromną radością wspieramy inicjatywy SOSzW w Lubinie, które otwierają przed młodymi ludźmi drzwi do świata nowoczesnych technologii. 19 marca mieliśmy zaszczyt wspierać uczestników II Regionalnego Konkursu Matematyczno-Informatycznego „Matema-TIK 2026" jako fundatorzy nagród!',
      'Poziom tegorocznej rywalizacji przeszedł nasze najśmielsze oczekiwania. Z podziwem obserwowaliśmy, jak uczniowie klas 7 i 8 z Lubina, Jawora i Głogowa z pasją programują roboty i rozwiązują skomplikowane zadania logiczne.',
      'Dla nas każdy uczestnik jest wygrany – odwaga do zmierzenia się z tak trudnymi wyzwaniami to cecha przyszłych liderów!',
      'Cieszymy się, że wspólnie ze Szkolnym Kołem TPD mogliśmy dołożyć cegiełkę do tego sukcesu i nagrodzić trud włożony w naukę. Wierzymy, że przekazane upominki będą dla Was motywacją do dalszego odkrywania świata cyfr i kodów.',
      'Brawo! Jesteśmy z Was dumni!'
    ],
    sekcje: [
      {
        tytul: 'Zwycięzcy konkursu',
        pozycje: [
          'I miejsce: Maja i Bartek (Lubin)',
          'II miejsce: Magda i Kamila (Jawor)',
          'III miejsce: Milena i Paweł (Głogów)'
        ]
      }
    ],

    zdjecia: [
      'assets/images/ATS/aktualnosci/2026-03-19-matematik-01.jpg',
      'assets/images/ATS/aktualnosci/2026-03-19-matematik-02.jpg',
      'assets/images/ATS/aktualnosci/2026-03-19-matematik-03.jpg'
    ],
    link: 'https://www.facebook.com/share/p/1FEWhwJmvG/'
  },
  {
    rok: 2025,
    dataISO: '2025-10-17',
    data: '17 października 2025',
    tytul: 'Projekt „Podróżuj i Zdobywaj" dobiegł końca',
    tresc: [
      'Projekt „Podróżuj i Zdobywaj", dofinansowany przez Państwowy Fundusz Rehabilitacji Osób Niepełnosprawnych w kwocie 322 290 zł, dobiegł końca.',
      'Celem przedsięwzięcia było zorganizowanie trzech wyjazdów rekreacyjno-wypoczynkowych dla dzieci i młodzieży z niepełnosprawnościami, umożliwiających aktywny wypoczynek, integrację oraz rozwój poprzez ruch i kontakt z przyrodą. W projekcie wzięło udział 140 uczestników z terenów dotkniętych powodzią.',
      'Podczas wyjazdów prowadzone były zajęcia terapeutyczne, relaksacyjne, artystyczne, sportowe i muzyczne, dostosowane do potrzeb i możliwości uczestników. Zajęcia te wspierały rozwój emocjonalny, fizyczny i społeczny dzieci oraz młodzieży, sprzyjając budowaniu poczucia własnej wartości i wzmacnianiu kompetencji społecznych.',
      'Wszystkie działania realizowane były przez wykwalifikowaną kadrę specjalistów – oligofrenopedagogów, terapeutów, arteterapeutów, trenerów sportowych oraz psychologa, co zapewniło wysoki poziom merytoryczny i bezpieczeństwo uczestników.',
      'Każdy z wyjazdów obfitował w ciekawe atrakcje, warsztaty i wspólne zabawy, które sprzyjały budowaniu relacji, rozwijaniu samodzielności oraz zdobywaniu nowych doświadczeń.',
      'Projekt „Podróżuj i Zdobywaj" był nie tylko okazją do poznawania nowych miejsc, ale przede wszystkim szansą na radość, rozwój i integrację uczestników w przyjaznej, wspierającej atmosferze.',
      'Projekt dofinansowany przez Państwowy Fundusz Rehabilitacji Osób Niepełnosprawnych (PFRON).'
    ],
    sekcje: [
      {
        tytul: 'Odwiedzone miejsca',
        pozycje: [
          'Warszawa – poznając stolicę Polski, jej zabytki i kulturę',
          'Zakopane – odkrywając uroki Tatr i górskich szlaków',
          'Pobierowo nad Morzem – ciesząc się wypoczynkiem nad Bałtykiem i zajęciami na plaży'
        ]
      }
    ],
    zdjecia: [
      'assets/images/ATS/aktualnosci/2025-10-17-podroz-i-zdobywaj-01.jpeg',
      'assets/images/ATS/aktualnosci/2025-10-17-podroz-i-zdobywaj-02.jpeg'
    ],
    link: 'https://www.facebook.com/share/p/14qrXhtQf51/'
  },
  {
    rok: 2026,
    dataISO: '2026-09-24',
    data: '24 września 2026',
    tytul: '„Kąpiel w dźwiękach" za nami',
    tresc: [
      '24 września 2026 r. odbyło się wydarzenie skierowane do wszystkich rodziców uczniów SOSzW w Lubinie oraz dla chętnych nauczycieli. Spotkanie o charakterze relaksacyjnym przy dźwiękach mis i gongów, które pomaga odprężyć ciało i umysł.',
      'Zadania pn. „Kąpiel w dźwiękach” sfinansowane przez Stowarzyszenie „A Tacy Sami”'
    ],

    zdjecia: [
      'assets/images/ATS/aktualnosci/2026-09-24-kapiel-w-dzwiekach-01.jpeg',
      'assets/images/ATS/aktualnosci/2026-09-24-kapiel-w-dzwiekach-02.jpeg',
      'assets/images/ATS/aktualnosci/2026-09-24-kapiel-w-dzwiekach-03.jpeg',
      'assets/images/ATS/aktualnosci/2026-09-24-kapiel-w-dzwiekach-04.jpeg'
    ],

  }
];

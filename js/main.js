
  (function(){
    var header = document.getElementById('siteHeader');
    function onScroll(){ header.classList.toggle('scrolled', window.scrollY > 40); }
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();

    var menuBtn = document.getElementById('menuBtn');
    var nav = document.getElementById('siteNav');
    menuBtn.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) header.classList.add('scrolled');
    });
    nav.addEventListener('click', function(e){
      if (e.target.closest('a')){
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded','false');
      }
    });

    var form = document.getElementById('offerteForm');
    var error = document.getElementById('formError');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var naam = document.getElementById('fNaam').value.trim();
      var tel = document.getElementById('fTel').value.trim();
      var bericht = document.getElementById('fBericht').value.trim();
      if (!naam || !tel || !bericht){
        error.style.display = 'block';
        return;
      }
      error.style.display = 'none';
      var tekst = 'Hallo MoreThanTiles, ik wil graag een offerte aanvragen.\n\nNaam: ' + naam + '\nTelefoon: ' + tel + '\n\n' + bericht;
      window.open('https://wa.me/31686319155?text=' + encodeURIComponent(tekst), '_blank', 'noopener');
    });

    /* ---------- Fotogalerij (lightbox) ---------- */
    var galleries = {
      'donker-marmer': {
        title: 'Badkamer – Donker marmer',
        photos: [
          { src:'images/img-001.jpg', alt:'Luxe badkamer in donker marmer met gouden aders' },
          { src:'images/img-012.jpg', alt:'Badkamer in donker marmer — detail' },
          { src:'images/img-013.jpg', alt:'Badkamer in donker marmer — de douche' },
          { src:'images/img-014.jpg', alt:'Badkamer in donker marmer — de wastafel' },
          { src:'images/img-015.jpg', alt:'Badkamer in donker marmer — overzicht' }
        ]
      },
      'kleurrijk': {
        title: 'Badkamer – Kleurrijk tegelwerk',
        photos: [
          { src:'images/img-006.jpg', alt:'Afgewerkte badkamer met kleurrijke Marokkaans-Portugese tegels' },
          { src:'images/img-016.jpg', alt:'De badkamervloer gestript vóór het nieuwe tegelwerk, met het hangtoilet al geplaatst en de puin zakken klaar' },
          { src:'images/img-017.jpg', alt:'De gestripte badkamervloer van bovenaf, met de oude lijmresten en het hangtoilet al geplaatst' },
          { src:'images/img-018.jpg', alt:'Detail van de gestripte vloerrand bij de deur, met de lagen van de oude vloer en een kabel bloot' },
          { src:'images/img-019.jpg', alt:'De wateraansluitingen en de afvoer van de wastafel in de wand, afgeplakt tijdens de renovatie' },
          { src:'images/img-020.jpg', alt:'De wand boven de wastafel tijdens de renovatie: de spiegel en de verlichting verwijderd, de bedrading en de beugels bloot' },
          { src:'images/img-021.jpg', alt:'De badkamer tijdens de renovatie: de wanden betegeld, de vloer nog kaal, met regendouche en hangtoilet' },
          { src:'images/img-022.jpg', alt:'De diepte van de betegelde reservoirkast wordt met de rolmaat gecontroleerd' },
          { src:'images/img-023.jpg', alt:'De lengte van het betegelde plateau boven het reservoir wordt opgemeten, met de bedieningsplaat eronder' },
          { src:'images/img-024.jpg', alt:'Detail van het opmeten van het plateau boven het reservoir met de rolmaat' },
          { src:'images/img-025.jpg', alt:'Waterdichting van de douche tijdens de renovatie' },
          { src:'images/img-026.jpg', alt:'Kleurrijke vloertegels in wording' },
          { src:'images/img-027.jpg', alt:'Nieuw gelegde badkamervloer met kleurrijke tegels' },
          { src:'images/img-028.jpg', alt:'De nieuw gelegde donkere vloertegels bij de badkamerdeur, met het blauwe afdekzeil in de gang' },
          { src:'images/img-029.jpg', alt:'De afgewerkte donkere badkamervloer met het hangtoilet en de glazen douchedeur, gezien vanaf de wastafel' },
          { src:'images/img-030.jpg', alt:'Afgewerkte douche met kleurrijke tegels' },
          { src:'images/img-031.jpg', alt:'Detail van de afgewerkte douche' },
          { src:'images/img-032.jpg', alt:'De afgewerkte douche met donkere tegels, glazen schuifdeur en regendouche aan het plafond' },
          { src:'images/img-033.jpg', alt:'Het afgewerkte hangtoilet tegen de donker betegelde reservoirkast, naast de glazen douchedeur' },
          { src:'images/img-034.jpg', alt:'Afgewerkte badkamer met kleurrijk tegelwerk' }
        ]
      },
      'grijze-tegels': {
        title: 'Badkamer – Grijze tegels',
        photos: [
          { src:'images/img-007.jpg', alt:'Moderne badkamer met grijze tegels en inloopdouche' },
          { src:'images/img-035.jpg', alt:'Badkamer met grijze tegels — detail' },
          { src:'images/img-036.jpg', alt:'Badkamer met grijze tegels — de douche' },
          { src:'images/img-037.jpg', alt:'Badkamer met grijze tegels — de wastafel' },
          { src:'images/img-038.jpg', alt:'Badkamer met grijze tegels — overzicht' },
          { src:'images/img-039.jpg', alt:'Badkamer met grijze tegels — afwerking' }
        ]
      },
      'totale-renovatie': {
        title: 'Woning – Totale renovatie',
        photos: [
          { src:'images/img-008.jpg', alt:'Woonkamer met glazen schuifdeur in zwart staal, na de renovatie' },
          { src:'images/img-040.jpg', alt:'Lange gang vóór de renovatie, met de vloer afgedekt met plastic en de oude deuren nog aanwezig' },
          { src:'images/img-005.jpg', alt:'Woonkamer tijdens de totale renovatie, met nieuwe gipsplafonds en wanden en doorkijk naar de erker' },
          { src:'images/img-041.jpg', alt:'Plafond tijdens het stuken, met schaduwvoeg langs de rand en de opening voor de inbouwspot' },
          { src:'images/img-042.jpg', alt:'De ombouw van de inbouwkast in aanbouw, nog in onbewerkt plaatmateriaal, met het deurpaneel ernaast' },
          { src:'images/img-043.jpg', alt:'Beide inbouwkasten in onbewerkt MDF aan weerszijden van de doorgang, met een stapel gipsplaten ervoor' },
          { src:'images/img-044.jpg', alt:'Inbouwkasten op maat in aanbouw, met een stapel gipsplaten in de woonkamer' },
          { src:'images/img-045.jpg', alt:'De rechter inbouwkast in onbewerkt MDF, met de paneeldeur ernaast en de vloer afgedekt' },
          { src:'images/img-046.jpg', alt:'De linker inbouwkast in onbewerkt MDF tijdens de opbouw, met platen en gereedschap in de kamer' },
          { src:'images/img-047.jpg', alt:'Smalle hal met vers geëgaliseerde vloer en witte radiator aan de wand' },
          { src:'images/img-048.jpg', alt:'Wand geschilderd en inbouwspots aan, terwijl het plafond nog plamuurplekken vertoont boven de paneeldeur' },
          { src:'images/img-049.jpg', alt:'Hoek van de woning met witte wanden, ingebouwde plafondspots en een wit radiatorpaneel' },
          { src:'images/img-050.jpg', alt:'De vensterbank van de erker vers geschilderd in het wit, zorgvuldig afgeplakt met papier' },
          { src:'images/img-051.jpg', alt:'Detail van de vers geschilderde vensterbank, met afgeplakte randen rond het raam' },
          { src:'images/img-052.jpg', alt:'Beide inbouwkasten wit geschilderd aan weerszijden van de doorgang, met gereedschap nog in de kamer' },
          { src:'images/img-053.jpg', alt:'De witte inbouwkast naast de doorgang, met de kamer erachter nog in afwerking' },
          { src:'images/img-054.jpg', alt:'Twee witte paneeldeuren geplaatst, met doorkijk naar de kamer die nog wordt afgewerkt' },
          { src:'images/img-055.jpg', alt:'De witte paneeldeur geplaatst, met erboven het nog onafgewerkte vak en de kamer erachter in werk' },
          { src:'images/img-056.jpg', alt:'Afgewerkte woonkamer met witte inbouwkast, grijze bank en ingebouwde plafondverlichting' },
          { src:'images/img-057.jpg', alt:'Afgewerkte wand en plafond met inbouwspots, met het raam nog afgeplakt voor de laatste schilderbeurt' },
          { src:'images/img-058.jpg', alt:'Afgewerkte woonkamer met televisie op het witte dressoir, witte inbouwkast en paneeldeur' }
        ]
      },
      'bakstenen-trap': {
        title: 'Trap – Bakstenen trap',
        photos: [
          { src:'images/img-059.jpg', alt:'Een hand meet met een rolmaat de grond bij de oude muur op, vóór de bouw van de trap' },
          { src:'images/img-060.jpg', alt:'De dikte van de stenen platen wordt met een rolmaat opgemeten' },
          { src:'images/img-061.jpg', alt:'Stapels bakstenen klaar langs de muur, met een hamer erop' },
          { src:'images/img-062.jpg', alt:'Pallet met bakstenen klaar voor het metselwerk van de buitentrap' },
          { src:'images/img-063.jpg', alt:'Het opmeten van de bakstenen met een rolmaat tijdens de bouw van de trap' },
          { src:'images/img-064.jpg', alt:'Een rolmaat tegen een stapel bakstenen om de hoogte te controleren' },
          { src:'images/img-065.jpg', alt:'Een hand meet met een rolmaat de bakstenen tijdens de bouw van de trap' },
          { src:'images/img-066.jpg', alt:'De breedte van de holle muur wordt van bovenaf met een rolmaat opgemeten' },
          { src:'images/img-067.jpg', alt:'Een rolmaat langs de bakstenen treden om de optrede te controleren' },
          { src:'images/img-068.jpg', alt:'De holle bakstenen muur wordt tijdens de bouw gevuld met puin en stenen' },
          { src:'images/img-069.jpg', alt:'De muur in aanbouw met zakken cement en de gele slang ernaast' },
          { src:'images/img-070.jpg', alt:'De stenen bak gevuld met puin, met stapels bakstenen ervoor' },
          { src:'images/img-071.jpg', alt:'De holle muur in aanbouw bij de schutting, gestut met gele stempelpalen' },
          { src:'images/img-072.jpg', alt:'De zijmuur van de buitentrap in aanbouw, gestut met gele stempelpalen' },
          { src:'images/img-073.jpg', alt:'De bovenkant van de bakstenen muur met het mortelbed klaar voor de afdekking' },
          { src:'images/img-074.jpg', alt:'De andere kant van de muur met het mortelbed en de stenen platen ertegenaan' },
          { src:'images/img-075.jpg', alt:'De terrastegels zijn gelegd en de bakstenen trap is in aanbouw' },
          { src:'images/img-076.jpg', alt:'Het terras met de gelegde tegels, van boven gezien, met de trap in aanbouw' },
          { src:'images/img-077.jpg', alt:'Overzicht van het terras met de betonnen basis, de trap en de muur bijna klaar' },
          { src:'images/img-078.jpg', alt:'Brede blik op de bakstenen muren en de trap met de terrasbasis ertussen' },
          { src:'images/img-009.jpg', alt:'Bakstenen buitentrap tussen twee pijlers met stenen afdekking, van boven gezien' },
          { src:'images/img-079.jpg', alt:'Drie bakstenen treden van de buitentrap, strak gemetseld' },
          { src:'images/img-080.jpg', alt:'Detail van de afgewerkte bakstenen treden en de muurhoek bij de marmeren vloer' },
          { src:'images/img-081.jpg', alt:'Zijmuur van de buitentrap met marmeren afdekking en terras' },
          { src:'images/img-082.jpg', alt:'De lange afgewerkte bakstenen muur langs de marmeren terrasvloer' },
          { src:'images/img-083.jpg', alt:'De afgewerkte bakstenen muur met marmeren afdekking en het terras ervoor' },
          { src:'images/img-084.jpg', alt:'De afgewerkte bakstenen muur wordt met de hogedrukreiniger schoongespoten' },
          { src:'images/img-085.jpg', alt:'De bakstenen treden worden met de hogedrukreiniger schoongespoten' },
          { src:'images/img-086.jpg', alt:'Afgewerkte bakstenen buitentrap, vooraanzicht' }
        ]
      },
      'buitenmuur': {
        title: 'Buitenmuur – Baksteen',
        photos: [
          { src:'images/img-087.jpg', alt:'De voortuin vóór de verbouwing, met de oude groene hekjes en de groene schakelkast voor de erker' },
          { src:'images/img-088.jpg', alt:'De voortuin vóór de verbouwing, gezien vanaf de straat, met de erker en de fietsen achter de oude afscheiding' },
          { src:'images/img-089.jpg', alt:'De voortuin vóór de verbouwing met de voordeur open, de oude groene hekjes en het lage bakstenen muurtje rechts bij de ingang' },
          { src:'images/img-090.jpg', alt:'De voortuin vóór de verbouwing in zijn geheel, met de groene schakelkast, de oude hekjes en de boom voor het huis' },
          { src:'images/img-091.jpg', alt:'Blik vanuit de voortuin over de straat, met de blauwe afvalcontainer klaar voor de verbouwing' },
          { src:'images/img-010.jpg', alt:'Bakstenen tuinmuur met afdekstenen' },
          { src:'images/img-092.jpg', alt:'Bakstenen muur met verzorgd metselwerk' },
          { src:'images/img-093.jpg', alt:'De achterzijde van de tuinmuur in aanbouw, bekleed met cementplaten, met de slijpmachine erop' },
          { src:'images/img-094.jpg', alt:'De bovenkant van de bakstenen muur tijdens het voegen, met voegijzers en gereedschap erop' },
          { src:'images/img-095.jpg', alt:'De bakstenen tuinmuur gezien vanuit de tuin, met de pijler nog zonder deksteen' },
          { src:'images/img-096.jpg', alt:'Detail van de bakstenen hoekpijler en de gemetselde muur met verzorgde voegen' },
          { src:'images/img-097.jpg', alt:'De bakstenen tuinmuur gezien vanuit de voortuin, met de straat en geparkeerde auto\u2019s erachter' },
          { src:'images/img-098.jpg', alt:'De voortuin tijdens de afwerking: de grond rond de boom opengebroken en een stapel bakstenen klaar, met de afgewerkte muur ernaast' },
          { src:'images/img-099.jpg', alt:'Detail van de muur met stenen afdekking en de pijler in gele steen nog in opbouw, met de deksteen er al opgelegd' },
          { src:'images/img-100.jpg', alt:'De muur met stenen afdekking gezien vanuit de tuin, met de pijler in gele steen nog in opbouw' },
          { src:'images/img-101.jpg', alt:'Bakstenen muur in aanbouw, gezien vanuit een andere hoek' },
          { src:'images/img-102.jpg', alt:'Detail van de pijlers en afdekstenen van de bakstenen muur' },
          { src:'images/img-103.jpg', alt:'Bakstenen pijler met stenen deksteen, met voegijzer erop' },
          { src:'images/img-104.jpg', alt:'Detail van de deksteen op de bakstenen pijler, met rolmaat' },
          { src:'images/img-105.jpg', alt:'Afgewerkte bakstenen pijler met deksteen, naast de muur' },
          { src:'images/img-106.jpg', alt:'Bakstenen pijler met deksteen, gezien vanaf de straatkant' },
          { src:'images/img-107.jpg', alt:'De afgewerkte bakstenen voortuinmuur met pijlers en stenen dekstenen, gezien vanaf de straat, met het huis en de boom erachter' },
          { src:'images/img-108.jpg', alt:'De afgewerkte muur met pijlers en dekstenen langs het trottoir, gezien over de lengte van de straat' },
          { src:'images/img-109.jpg', alt:'De afgewerkte muur en de ingang met twee pijlers met dekstenen, gezien vanaf het trottoir' },
          { src:'images/img-110.jpg', alt:'De afgewerkte muur met dekstenen langs de voortuin, met de boom, de groene schakelkast en de erker van het huis' },
          { src:'images/img-111.jpg', alt:'De voortuin van boven gezien, met de afgewerkte muur met metalen afdekprofiel, de zwarte kantopsluiting rond het boomvak en de voordeur van het huis' },
          { src:'images/img-112.jpg', alt:'De afgewerkte muur gezien vanuit de voortuin, met de boom en het nog kale plantvak met zwarte kantopsluiting' },
          { src:'images/img-113.jpg', alt:'De afgewerkte muur en de pijlers met dekstenen gezien vanaf het trottoir, met de boom en de voortuin erachter' },
          { src:'images/img-114.jpg', alt:'De ingang van de voortuin van boven gezien, tussen twee pijlers met stenen dekstenen, met het betegelde pad erachter' },
          { src:'images/img-115.jpg', alt:'Detail van de bakstenen pijler met stenen deksteen, met de rolmaat op de afdekking van de muur' },
          { src:'images/img-116.jpg', alt:'Detail van de bakstenen pijler met stenen deksteen, gezien vanaf de straatkant' }
        ]
      }
    };

    var lightbox = document.getElementById('lightbox');
    var lbImg = document.getElementById('lbImg');
    var lbTitle = document.getElementById('lbTitle');
    var lbCount = document.getElementById('lbCount');
    var lbClose = document.getElementById('lbClose');
    var current = null;
    var index = 0;
    var lastFocus = null;

    function showPhoto(){
      var photo = current.photos[index];
      lbImg.src = photo.src;
      lbImg.alt = photo.alt;
      lbTitle.textContent = current.title;
      lbCount.textContent = (index + 1) + ' / ' + current.photos.length;
      var next = current.photos[(index + 1) % current.photos.length];
      var prev = current.photos[(index - 1 + current.photos.length) % current.photos.length];
      new Image().src = next.src;
      new Image().src = prev.src;
    }
    function openGallery(key, trigger){
      if (!galleries[key]) return;
      current = galleries[key];
      index = 0;
      lastFocus = trigger || null;
      showPhoto();
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    }
    function closeGallery(){
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    }
    function step(delta){
      index = (index + delta + current.photos.length) % current.photos.length;
      showPhoto();
    }

    var cards = document.querySelectorAll('.project-card[data-gallery]');
    for (var i = 0; i < cards.length; i++){
      cards[i].addEventListener('click', function(){
        openGallery(this.getAttribute('data-gallery'), this);
      });
    }
    lbClose.addEventListener('click', closeGallery);
    document.getElementById('lbPrev').addEventListener('click', function(){ step(-1); });
    document.getElementById('lbNext').addEventListener('click', function(){ step(1); });
    lightbox.addEventListener('click', function(e){
      if (e.target === lightbox) closeGallery();
    });
    document.addEventListener('keydown', function(e){
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeGallery();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    });

    var touchX = null;
    lightbox.addEventListener('touchstart', function(e){
      touchX = e.changedTouches[0].clientX;
    }, { passive:true });
    lightbox.addEventListener('touchend', function(e){
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 45) step(dx < 0 ? 1 : -1);
    }, { passive:true });
  })();

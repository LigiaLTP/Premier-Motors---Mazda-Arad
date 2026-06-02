# Mazda Arad Landing Page

Landing page premium realizat în **React + TypeScript** pentru afacerea **Premier Motors - Mazda Arad**, dealer Mazda autorizat din Arad.

Proiectul prezintă într-un mod modern informațiile principale despre showroom, service, program, recenzii, locație și metode rapide de contact.

## Descriere

Acest proiect este o pagină de prezentare premium pentru **Premier Motors - Mazda Arad**.

Pagina include:

* secțiune hero cu prezentare premium;
* informații despre dealerul Mazda;
* rating Google și număr de recenzii;
* program de lucru afișat elegant;
* secțiune de servicii;
* recenzii ale clienților;
* buton de contact prin WhatsApp;
* link către locația din Google Maps;
* design responsive pentru desktop, tabletă și mobil.

## Tehnologii folosite

* React
* TypeScript
* Vite
* CSS custom
* HTML semantic
* Responsive design

## Structura proiectului

```txt
mazda-arad/
├── public/
├── src/
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Instalare

Pentru a rula proiectul local, instalează dependențele:

```bash
npm install
```

## Pornire în modul development

Rulează aplicația local cu:

```bash
npm run dev
```

După pornire, proiectul va fi disponibil de obicei la:

```txt
http://localhost:5173
```

## Build pentru producție

Pentru generarea versiunii finale:

```bash
npm run build
```

Fișierele optimizate vor fi generate în folderul:

```txt
dist/
```

## Preview pentru build

Pentru verificarea build-ului local:

```bash
npm run preview
```

## Funcționalități principale

### Hero premium

Prima secțiune conține o prezentare vizuală modernă, cu accent pe imaginea premium a brandului Mazda și pe informațiile esențiale ale dealerului.

### Contact rapid prin WhatsApp

Butonul **Programează o vizită** redirecționează utilizatorul către WhatsApp cu un mesaj precompletat.

Exemplu link folosit:

```txt
https://wa.me/40357431955
```

### Locație Google Maps

Butonul pentru locație trimite utilizatorul către adresa:

```txt
Calea Zimandului km5+200, 310206 Arad
```

### Program de lucru

Programul este afișat într-un card modern:

```txt
Luni:      08:30 – 17:30
Marți:     08:30 – 17:30
Miercuri:  08:30 – 17:30
Joi:       08:30 – 17:30
Vineri:    08:30 – 17:30
Sâmbătă:   09:00 – 13:00
Duminică:  Închis
```

### Recenzii

Pagina include o secțiune dedicată recenziilor Google, evidențiind ratingul:

```txt
4,8 / 5
338 recenzii
```

## Date folosite în pagină

Informațiile afișate sunt bazate pe datele disponibile public pentru:

```txt
Premier Motors - Mazda Arad
Calea Zimandului km5+200, 310206 Arad
Telefon: 0357 431 955
Rating: 4,8
Recenzii: 338
```

## Personalizare

Pentru modificarea conținutului principal, editează fișierul:

```txt
src/App.tsx
```

Pentru modificarea designului, culorilor, layoutului și responsive behavior, editează:

```txt
src/App.css
```

## Elemente care pot fi personalizate ușor

* numărul de telefon;
* linkul de WhatsApp;
* textul mesajului precompletat;
* adresa showroomului;
* programul de lucru;
* recenziile afișate;
* textele din secțiunea de servicii;
* culorile principale;
* animațiile și efectele vizuale.

## Recomandări pentru producție

Înainte de publicare, este recomandat să verifici:

* corectitudinea numărului de telefon;
* funcționarea linkului WhatsApp;
* funcționarea linkului Google Maps;
* afișarea pe mobil;
* contrastul textului;
* viteza de încărcare;
* datele reale de contact și programul actualizat.

## Posibile îmbunătățiri viitoare

* integrare formular de programare;
* hartă Google Maps embedded;
* galerie foto showroom/service;
* secțiune modele Mazda;
* secțiune oferte speciale;
* integrare SEO avansată;
* animații suplimentare la scroll;
* conectare la un CMS pentru actualizarea ușoară a conținutului.

## Autor

Proiect realizat pentru prezentarea online a afacerii:

```txt
Premier Motors - Mazda Arad
```

## Licență

Acest proiect este destinat utilizării ca landing page de prezentare pentru afacerea menționată.

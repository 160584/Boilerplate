Boilerplate
===========

v1: 2011-12-21
v2: 2012-06-08


Wat is dit?
===========

Een startpunt voor de front-end-code van een nieuw project.
Gebaseerd op HTML5Boilerplate e.d.


Waar bestaat het uit?
=====================

* Een mappen/bestands-structuur waardoor alle 'vaste' locaties alvast zijn vastgelegd.

* ## HTML-templates:
  - _template.html:  Een minimale opzet voor een template.

* ## /Presentation:
  - main.css:      Het bestand dat in ieder template wordt opgehaald. Een verzamelplaats van alle benodigde stylesheets in de site.
  - base.css:      Grotendeels een uitgebreide versie van Normalize.css met een handige indeling van site-brede, overall styling.

  - feature-a.css:  Een placeholder-bestand voor iedere specifieke regio/feature in de site. Deze worden gebruikt in import.css

  - /fonts:      (Gegenereerde) Webfont-bestanden komen hier terecht. (Generator: http://www.fontsquirrel.com/fontface/generator)
  - /backgrounds    Gradients, high-light-effects, button-textures etc.
  - /icons      Herbruikbare (context-onafhankelijke) iconen. Uiteindelijk in sprite(s).
  - /logos      Herbruikbare (liefst context-onafhankelijke) afbeeldingen van gebruikte logo's.


* ## /Behaviour:
  - engine.js          De belangrijkste functies die nodig zijn op iedere pagina + on-document-ready{}-verzamelplaats.
  
  - /libs/
    - jquery-1.8.2.min.js  #TODO: check nieuwste versie: http://jquery.com/

  * modernizr.custom.js    #TODO: Een custom versie genereren met alleen de nodige tests: http://www.modernizr.com/download/


* ## /Placeholders:
  Een map waarin content-afhankelijke afbeeldingen of video's worden opgeslagen. Deze komen in een live-omgeving vanuit het CMS.

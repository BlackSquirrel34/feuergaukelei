import React from "react";

import alle from "@/public/alle.jpg";
import feuerfaecher from "@/public/feuerfaecher.jpg";
import doppelschwert from "@/public/doppelschwert.jpg";
import fackeln from "@/public/fackeln.jpg";
import feuerspucken from "@/public/feuerspucken.jpg";
import turtle from "@/public/turtle.jpg";
import pois from "@/public/pois.jpg";
import feuerschale from "@/public/feuerschale.jpg";
import fight from "@/public/fight.jpg";
import alle2 from "@/public/alle2.jpg";
import staff from "@/public/staff.jpg";
import close from "@/public/close.jpg";
import poisbroad from "@/public/pois-broad.jpg";
import poivid from "@/public/poivid.jpg";
import dragon2 from "@/public/Dragonstaff2.jpg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Galerie",
    hash: "#galerie",
  },
  {
    name: "Kontaktfestival",
    hash: "#kontaktfestival",
  },
  {
    name: "Training",
    hash: "#training",
  },
] as const;

export const german = [ // is accessed based on index. so change that only if you know what you do!
  {
    welcomeheadline: "Hallo, willkommen auf der Website der Bamberger Feuergaukelei 😉",
  }, // 0
  {
    subheadline: "Wir sind eine Gruppe von Bamberger Feuerartistik- und Flow-Arts-Begeisterten und treffen uns regelmäßig, um gemeinsam zu trainieren.",
  }, // 1
  {
    galleryheadline:  "Bildergalerie",
  }, // 2
  {
    festivalheadline:  "Kontaktfestival 2024: Mischgebiet",
  }, // 3
  {
    trainingheadline: "Du möchtest mit uns trainieren?",
  }, // 4
  {
    trainingtext: "Wir trainieren regelmäßig in der Umgebung von Bamberg. Derzeit sind bei uns folgende Props vertreten: Poi, Kontaktstab, Double Staff, Dragonstaff, Feuerschwert, Puppyhammer, Rope Dart, Feuerfächer, Firehoop, Candles und Feuerjonglage. Wie du siehst, eine ganze Menge! Wenn du neugierig geworden bist und selbst einen Flow-Art Prop spielst oder spielen lernen möchtest, komm doch einfach vorbei! Wir freuen uns sehr.", 
  }, // 5
  {
    thanks:  "Danke ;)",
  }, // 6
  {
    click: "Feuer-Icon klicken zum chatten",
  }, // 7
  {
    dataprotectionheadline: "0. Ganz kurz und informell vorweg...",
  }, // 8
  {
    dataprotection: "Wir selbst als Betreibende sammeln auf unserer Website keine persönlichen Daten. Darum gibt es auch keine Cookies und Cookiebanner. Für das Captcha nutzen wir die selbstgehostete, trackingfreie Alternative Altcha (siehe https://altcha.org/). Da wir auf unserer Website auf Angebote Dritter (namentlich Youtube, Instagram und Telegram) verlinken und die Seite nicht selbst hosten, können wir allerdings nicht garantieren, dass beim Besuch der Website nicht doch personenbezogene Daten gesammelt werden von diesen Dritten. Darum haben wir mit e-recht24.de eine ganz ausführliche Datenschutzerklärung erstellt.",
  }, // 9
];

export const english = [ // is accessed based on index. so change that only if you know what you do!
  {
    welcomeheadline: "Hello, welcome to the Website of the Bamberg Feuergaukelei 😉",
  }, 
  {
    subheadline: "We are a group of flow-arts- and fire spinning enthusiasts from Bamberg, regularly training together."
  },
  {
    galleryheadline:  "Gallery",
  }, // 2
  {
    festivalheadline:  "Kontaktfestival 2024: Mischgebiet",
  }, // 3
  {
    trainingheadline: "You want to train with us?",
  }, // 4
  {
    trainingtext: "Regularly, we're meeting for training sessions near Bamberg. At the moment, we've got the following props represented in our group: Poi, Contact Staff, Double Staff, Dragonstaff, Firesword, Puppyhammer, Rope Dart, Firehoop, Candles and Fire juggling. You see, that's quite a lot! If you're curious now and are interested in learning a (new) Flow-Arts Prop, get in contact and come join us! We're looking forward to meeting you.", 
  }, // 5
  {
    thanks:  "Thank you!",
  }, // 6
  {
    click: "Click the fire icon to open a chat",
  }, // 7
  {
    dataprotectionheadline: "0. Just a quick and informal note upfront...",
  }, // 8
  {
    dataprotection: "We, as the operators of our website, do not collect any personal data. That's why there are no cookies or cookie banners. Please note that nonetheless Germany is a country with many laws and lawyers, necessitating a thorough data protection text. For the captcha, we use the self-hosted, tracking-free alternative Altcha (see https://altcha.org/). However, since we link to third-party services (specifically YouTube, Instagram, and Telegram) and do not host the Website ourselves, we cannot guarantee that personal data will not be collected during your visit to our website by those third parties. For this reason, we have generated a comprehensive data protection statement with e-recht24.de.",
  }, // 9
];

export const gallery = [
  {
    imageLink: alle2,
  }, // index 0: gets only rendered if there are at least 3 columns
  {
    imageLink: poivid,
  }, // index 1: gets rendered only if we got 3x3 layout on md-screens
  {
    imageLink:  doppelschwert,
  },
  {
    imageLink:  feuerspucken,
  },
  {
    imageLink: feuerfaecher,
  },
  {
    imageLink: fackeln, // until here: first row on lg-screens
  },
  {
    imageLink:  turtle,
  },
  {
    imageLink: pois,
  },
  {
    imageLink: feuerschale,
  },
  {
    imageLink: fight, // until here: end of 2nd row on lg-screens
  },
  {
    imageLink: alle, // gets only rendered if there are at least 2 columns
  },
  {
    imageLink: staff, // gets only rendered if there are at least 2 columns
  },
  {
    imageLink: close, // gets only rendered if there are at least 2 columns
  },
  {
    imageLink: poisbroad, // gets only rendered if there are at least 2 columns
  },
];
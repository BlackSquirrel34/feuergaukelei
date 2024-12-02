"use client";

import React, { useState } from 'react';
import SectionHeading from "./section-heading";
import { useLanguage } from '@/context/language-context';
import { english, german } from '@/lib/data';

export default function Impressum() {

  // language switching
  const { currentlanguage } = useLanguage(); // Get current language state
  const content = currentlanguage === 'en' ? english : german;
  const dataprotectionheadline = content[8]?.dataprotectionheadline;
  const dataprotection = content[9]?.dataprotection;

  return (
    <div className='max-w-[960px] mt-36 mb-24'>
      <SectionHeading>Impressum</SectionHeading>
      <p className="mb-6 py-12 px-4 sm:px-10 text-center">
      <p>Max Mustermann<br />
        Musterstra&szlig;e 111<br />
        Geb&auml;ude 44<br />
        90210 Musterstadt</p>
      </p>
      <SectionHeading>Kontakt</SectionHeading>
      <p className="mb-12 text-center py-12 px-4 sm:px-10">
      <p>Telefon: +49 (0) 123 44 55 66<br />
        Telefax: +49 (0) 123 44 55 99<br />
        E-Mail: mustermann@musterfirma.de</p>    
        <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
      </p>
      <div className="mb-14">
      <SectionHeading>Datenschutz</SectionHeading>
      </div>
      <div>
      <h1 className='text-2xl font-semibold py-8'>{dataprotectionheadline}</h1>
      <div className='py-4'>
        <p>{dataprotection}</p>
      </div>
      <h1 className='text-2xl font-semibold py-8'>1. Datenschutz auf einen Blick</h1>
<h3 className='text-lg font-semibold py-4'>Allgemeine Hinweise</h3> 
<p>Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber,
was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind
alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum
Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten
Datenschutzerkl&auml;rung.</p>
<div className='py-4'>
<h3 className='text-lg font-semibold py-4'>Datenerfassung auf dieser Website</h3> 
<strong className='py-2'>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</strong> 
<p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
Datenschutzerkl&auml;rung entnehmen.</p> 
</div>
<div className='py-4'>
<strong className='py-2'>Wie erfassen wir Ihre Daten?</strong> 
<p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein
Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
Website betreten.</p> 
</div>
<div className='py-4'>
<strong className='py-2'>Wof&uuml;r nutzen wir Ihre Daten?</strong> 
<p>Ein Teil der Daten wird erhoben, um eine
fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres
Nutzerverhaltens verwendet werden.</p> 
</div>
<div className='py-4'>
<strong className='py-2'>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</strong>
<p>Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer
gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder
L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht,
unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu
verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns
wenden.</p>
</div>

<h1 className='text-2xl font-semibold py-8'>2. Hosting</h1>
<p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
<div className='py-4'>Vercel Hosting</div> 
<div className='py-4'>
<p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich
v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
Namen, Websitezugriffe und sonstige Daten, die &uuml;ber eine Website generiert werden, handeln.<br /></p> 
</div>
<div className='py-4'>
<p>Das externe Hosting erfolgt im Interesse einer sicheren, schnellen und effizienten
Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern
eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von
Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder
den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des
TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.<br /></p> 
</div>
<div className='py-4'>
<p>Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erf&uuml;llung seiner Leistungspflichten erforderlich ist und unsere
Weisungen in Bezug auf diese Daten befolgen.<br /></p> 
</div>
<div className='py-4'>
<p>Wir setzen folgende(n) Hoster ein:<br /></p>
<p>Musterhosting AG<br />
Musterweg 100<br />
90210 Musterstadt</p>
</div>
<h1 className='text-2xl font-semibold py-8'>3. Allgemeine Hinweise und Pflicht&shy;informationen</h1>
<div className='py-4'>
<div className='text-lg font-semibold py-4'>Datenschutz</div> 
<p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr
ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.</p> <p>Wenn Sie diese Website benutzen,
werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert,
welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das
geschieht.</p> 
<p>Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der
Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor
dem Zugriff durch Dritte ist nicht m&ouml;glich.</p>
</div>
<div className='text-lg font-semibold py-4'>Hinweis zur verantwortlichen Stelle</div> 
<p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
dieser Website ist:</p> 
<p>Beispielfirma<br />
Musterweg 10<br />
90210 Musterstadt</p>
<p>Telefon: +49 (0) 123 44 55 66<br />
E-Mail: info@beispielfirma.de</p>
<p className='py-4'>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen
&uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-
Adressen o. &Auml;.) entscheidet.</p>
<div className='text-lg font-semibold py-4'>Speicherdauer</div> 
<p>Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer
genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die Datenverarbeitung
entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine Einwilligung zur
Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht, sofern wir keine anderen rechtlich
zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer-
oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall
dieser Gr&uuml;nde.</p>
<div className='text-lg font-semibold py-4'>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</div> 
<p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art.
6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
verarbeitet werden. Im Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung personenbezogener
Daten in Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.
Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via
Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect;
25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf&uuml;llung oder zur
Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des
Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf&uuml;llung einer
rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung
kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die
jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser
Datenschutzerkl&auml;rung informiert.</p>
<div className='text-lg font-semibold py-4'>Empfänger von personenbezogenen Daten</div> 
<p>Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. 
Dabei ist teilweise auch eine &Uuml;bermittlung von
personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
externe Stellen weiter, wenn dies im Rahmen einer Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich
hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbeh&ouml;rden), wenn wir ein berechtigtes
Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die
Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer
Kunden nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber Auftragsverarbeitung weiter. Im Falle einer
gemeinsamen Verarbeitung wird ein Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.</p>
<div className='text-lg font-semibold py-4'>Widerruf Ihrer Einwilligung zur Datenverarbeitung</div> 
<p>Viele Datenverarbeitungsvorg&auml;nge sind
nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung
jederzeit widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
Widerruf unber&uuml;hrt.</p>
<div className='text-lg font-semibold py-4'>Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21
DSGVO)</div> 
<p className='py-4'>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F
DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER
BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES
PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN
SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE
BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG
NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE
VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON
RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p> 
<p className='py-4'>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS
RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER
DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING,
SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN,
WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
<div className='text-lg font-semibold py-4'>Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</div> <p>Im Falle von
Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres
Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
<div className='text-lg font-semibold py-4'>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</div> <p>Sie haben das Recht, Daten, die wir auf Grundlage
Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
&Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
machbar ist.</p>
<div className='text-lg font-semibold py-4'>Auskunft, Berichtigung und L&ouml;schung</div> <p>Sie haben im Rahmen der geltenden gesetzlichen
Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen
Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
Daten k&ouml;nnen Sie sich jederzeit an uns wenden.</p>
<div className='text-lg font-semibold py-4'>Recht auf Einschr&auml;nkung der Verarbeitung</div> <p>Sie haben das Recht, die Einschr&auml;nkung der
Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden.
Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:</p> 
<ul> <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit,
um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die
Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn die
Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt
der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.</li> <li>Wenn wir Ihre
personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder
Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die
Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn Sie einen
Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren
Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das
Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> </ul>

<p className='py-4'>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese
Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung,
Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der
Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
<div className='text-lg font-semibold py-4'>SSL- bzw. TLS-Verschl&uuml;sselung</div> 
<p className='py-4'>Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz
der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als
Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen
Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und
an dem Schloss-Symbol in Ihrer Browserzeile.</p> 
<p className='py-4'>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</p>
<div className='text-lg font-semibold py-4'>Widerspruch gegen Werbe-E-Mails</div> 
<p className='py-4'>Der Nutzung von im Rahmen der Impressumspflicht
ver&ouml;ffentlichten Kontaktdaten zur &Uuml;bersendung von nicht ausdr&uuml;cklich angeforderter Werbung
und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdr&uuml;cklich
rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails,
vor.</p>
<h1 className='text-2xl font-semibold py-8'>4. Soziale Medien</h1>
<div className='text-lg font-semibold py-4'>Instagram</div> <p>Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese
Funktionen werden angeboten durch die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5,
Irland.</p> 
<p className='py-4'>Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem
Endger&auml;t und dem Instagram-Server hergestellt. Instagram erh&auml;lt dadurch Informationen &uuml;ber
den Besuch dieser Website durch Sie.</p>
<p className='py-4'>Wenn Sie in Ihrem Instagram-Account eingeloggt sind, k&ouml;nnen
Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken.
Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass
wir als Anbieter der Seiten keine Kenntnis vom Inhalt der &uuml;bermittelten Daten sowie deren Nutzung durch
Instagram erhalten.</p> 
<p className='py-4'>Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1
lit. a DSGVO und &sect; 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.</p> 
<p className='py-4'>Soweit mit Hilfe des
hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook bzw. Instagram
weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal
Harbour, Dublin 2, Irland gemeinsam f&uuml;r diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die
gemeinsame Verantwortlichkeit beschr&auml;nkt sich dabei ausschlie&szlig;lich auf die Erfassung der Daten und
deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung erfolgende Verarbeitung durch
Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden
Verpflichtungen wurden in einer Vereinbarung &uuml;ber gemeinsame Verarbeitung festgehalten. Den Wortlaut
der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum"
target="_blank" rel="noopener noreferrer">https://www.facebook.com/legal/controller_addendum</a>. Laut
dieser Vereinbarung sind wir f&uuml;r die Erteilung der Datenschutzinformationen beim Einsatz des Facebook-
bzw. Instagram-Tools und f&uuml;r die datenschutzrechtlich sichere Implementierung des Tools auf unserer
Website verantwortlich. F&uuml;r die Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook
verantwortlich. Betroffenenrechte (z.&nbsp;B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram
verarbeiteten Daten k&ouml;nnen Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns
geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.</p> <p>Die Daten&uuml;bertragung in die
USA wird auf die Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details finden Sie hier: <a
href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener
noreferrer">https://www.facebook.com/legal/EU_data_transfer_addendum</a>, <a
href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener
noreferrer">https://privacycenter.instagram.com/policy/</a> und <a href="https://de-
de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer">https://de-
de.facebook.com/help/566994660333381</a>.</p> 
<p className='py-4'>Weitere Informationen hierzu finden Sie in der
Datenschutzerkl&auml;rung von Instagram: <a href="https://privacycenter.instagram.com/policy/" target="_blank"
rel="noopener noreferrer">https://privacycenter.instagram.com/policy/</a>.</p>
<p className='py-4'>Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy
Framework&ldquo; (DPF). Der DPF ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den
USA, der die Einhaltung europ&auml;ischer Datenschutzstandards bei Datenverarbeitungen in den USA
gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
<a href="https://www.dataprivacyframework.gov/participant/4452" target="_blank" rel="noopener
noreferrer">https://www.dataprivacyframework.gov/participant/4452</a>.</p>
<h1 className='text-2xl font-semibold py-8'>6. Plugins und Tools</h1>
<h3 className='text-lg font-semibold py-4'>YouTube</h3> 
<p className='py-4'>Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die
Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland.</p> 
<p className='py-4'>Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube eingebunden ist, wird eine Verbindung zu den Servern von
YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.</p>
<p className='py-4'>Des Weiteren kann YouTube verschiedene Cookies auf Ihrem Endger&auml;t speichern oder vergleichbare
Technologien zur Wiedererkennung verwenden (z.&nbsp;B. Device-Fingerprinting). Auf diese Weise kann YouTube
Informationen &uuml;ber Besucher dieser Website erhalten. Diese Informationen werden u.&nbsp;a. verwendet,
um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen.
Des Weiteren werden die erfassten Daten im Google-Werbenetzwerk verarbeitet.</p> 
<p className='py-4'>Wenn Sie in Ihrem YouTube-Account eingeloggt sind, erm&ouml;glichen Sie YouTube, Ihr Surfverhalten direkt Ihrem
pers&ouml;nlichen Profil zuzuordnen. Dies k&ouml;nnen Sie verhindern, indem Sie sich aus Ihrem YouTube-Account
ausloggen.</p> 
<p className='py-4'>Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-
Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine
entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6
Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den
Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG
umfasst. Die Einwilligung ist jederzeit widerrufbar.</p> <p>Weitere Informationen zum Umgang mit Nutzerdaten
finden Sie in der Datenschutzerkl&auml;rung von YouTube unter: <a
href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener
noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
<p className='py-4'>Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy
Framework&ldquo; (DPF). Der DPF ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den
USA, der die Einhaltung europ&auml;ischer Datenschutzstandards bei Datenverarbeitungen in den USA
gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
<a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noopener
noreferrer">https://www.dataprivacyframework.gov/participant/5780</a>.</p>
      </div>
      </div>

  );
}
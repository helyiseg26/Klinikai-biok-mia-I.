// ============================================================================
// KLINIKAI BIOKÉMIA ÉS LABORATÓRIUMI DIAGNOSZTIKA
// 3. Előadás: Porfíriák klinikai biokémiája és az ABO/Rh vércsoportrendszerek
// ============================================================================

window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas3",
    title: "3. Előadás: Porfíriák klinikai biokémiája & ABO és Rh vércsoportrendszerek",
    shortName: "Porfíriák & ABO/Rh",
    html: `
        <div style="font-size: 0.96rem; line-height: 1.62; color: inherit;">

            <!-- =================================================================
                 I. RÉSZ: PORFÍRIÁK KLINIKAI BIOKÉMIÁJA ÉS DIAGNOSZTIKÁJA
                 ================================================================= -->
            <div style="background: rgba(43, 108, 176, 0.08); border-left: 5px solid var(--primary-light); padding: 1.1rem; border-radius: 6px; margin-bottom: 1.5rem;">
                <h3 style="margin-top: 0; color: var(--primary); font-size: 1.25rem;">🧬 I. Rész: Porfíriák klinikai biokémiája és laboratóriumi diagnosztikája</h3>
                <p style="margin-bottom: 0;">
                    A <strong>porfíriák</strong> a hem bioszintézisében részt vevő enzimek örökletes vagy szerzett defektusai következtében kialakuló anyagcsere-betegségek. Az enzimblokk előtti köztitermékek (porfirin prekurzorok vagy porfirinek) kórosan felszaporodnak, szövetekben lerakódnak, majd a vizelettel és/vagy széklettel ürülnek. A klinikai tüneteket szinte kizárólag az <strong>idegrendszerre</strong> és/vagy a <strong>bőrre</strong> kifejtett toxikus hatásuk okozza.
                </p>
            </div>

            <!-- RÖVIDÍTÉSEK ÉS KULCSFOGALMAK - PORFÍRIA -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem; margin-top: 1.2rem;">
                📖 1. Rövidítések feloldása és kulcsfogalmak (Porfíriák)
            </h4>

            <table style="width: 100%; border-collapse: collapse; margin: 0.8rem 0 1.4rem 0; font-size: 0.88rem;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.04); text-align: left;">
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 20%;">Rövidítés</th>
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 35%;">Teljes megnevezés</th>
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 45%;">Biokémiai / Klinikai szerep</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>ALA</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">&delta;-Aminolevulinsav</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">A hem szintézis első elkötelezett intermedierje; színtelen, nem fluoreszkáló, neurotoxikus porfirin prekurzor.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>PBG</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Porfobilinogén</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Monopirrol szerkezetű porfirin prekurzor; színtelen, neurotoxikus, akut porfíriás rohamban a vizeletből szűrhető.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>HMB</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Hidroxi-metil-bilán</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Instabil lineáris tetrapirrol; az első porfirinogén köztitermék a citoplazmában.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>AIP</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Akut intermittáló porfíria</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">A leggyakoribb akut hepatikus porfíria (HMB-szintáz hiány); kizárólag neurovisceralis rohamokkal jár, bőrtünet nincs.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>HCP / VP</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Herediter koproporfíria / Porfíria variegata</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Kevert típusú hepatikus porfíriák; akut neurovisceralis rohamokat és fotoszenzitív bőrtüneteket is okoznak.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>PCT</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Porphyria cutanea tarda</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">A leggyakoribb krónikus kután porfíria (uroporfirinogén-dekarboxiláz defektus); 80-85%-ban szerzett (alkohol, májkárosodás).</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>CEP / EPP</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Congenitalis erythropoetikus porfíria / Erythropoetikus protoporfíria</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Csontvelői eredetű, krónikus fotoszenzitivitással járó kórképek.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>AD / AR</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Autoszomális domináns / recesszív</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Öröklődésmenet; az AD típusok többsége inkomplett penetranciájú (kiváltó faktor szükséges a manifesztációhoz).</td>
                    </tr>
                </tbody>
            </table>

            <div style="background: rgba(0,0,0,0.02); border: 1px solid var(--border); border-radius: 6px; padding: 0.9rem; margin-bottom: 1.3rem;">
                <strong>🔑 Kulcsfogalmak meghatározása:</strong>
                <ul style="margin-left: 1.4rem; margin-bottom: 0; margin-top: 0.3rem;">
                    <li><strong>Hem:</strong> Vastartalmú (Fe<sup>2+</sup>) protoporfirin IX gyűrű; a hemproteinek (hemoglobin, mioglobin, kataláz, peroxidáz, citokróm P450) nemfehérje természetű prosztetikus csoportja.</li>
                    <li><strong>Porfirin prekurzorok (ALA, PBG):</strong> Korai köztitermékek; színtelenek, nem fluoreszkálnak, felhalmozódásuk <strong>neurológiai és visceralis tüneteket</strong> okoz (neurotoxinok és érkárosítók).</li>
                    <li><strong>Porfirinogének és Porfirinek:</strong> A porfirinogének (HMB, uroporfirinogén, koproporfirinogén) színtelen, instabil redukált formák, amelyek a vizeletben/székletben fény és oxigén hatására spontán sötétvörös, intenzíven fluoreszkáló <strong>porfirinekké</strong> oxidálódnak. Felhalmozódásuk <strong>fotoszenzitív bőrtüneteket</strong> eredményez (fényabszorpció &rarr; reaktív szabad gyökök képződése &rarr; sejtmembrán-károsodás).</li>
                </ul>
            </div>

            <!-- A HEM BIOSZINTÉZISE ÉS OSZTÁLYOZÁS -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                ⚙️ 2. A hem bioszintézise és a porfíriák osztályozása
            </h4>
            <p>
                A szintézis két kompartmentben zajlik: <strong>1. Mitochondrium:</strong> Glicin + szukcinil-CoA &rarr; <em>ALA-szintáz</em> (sebességmeghatározó enzim; a hem negatív feedback-kel gátolja!) &rarr; ALA. <strong>2. Cytoplasma:</strong> ALA &rarr; <em>ALA-dehidratáz</em> &rarr; PBG &rarr; <em>PBG-deamináz (HMB-szintáz)</em> &rarr; HMB &rarr; <em>Uroporfirinogén-III-koszintáz</em> &rarr; Uroporfirinogén III (enzimhiányban nem enzimatikusan Uroporfirinogén I keletkezik!) &rarr; <em>Uroporfirinogén-dekarboxiláz</em> &rarr; Koproporfirinogén III. <strong>3. Vissza a mitochondriumba:</strong> <em>Koproporfirinogén-oxidáz</em> &rarr; Protoporfirinogén IX &rarr; <em>Protoporfirinogén-oxidáz</em> &rarr; Protoporfirin IX &rarr; <em>Ferrokelatáz</em> (+ Fe<sup>2+</sup>) &rarr; <strong>HEM</strong>.
            </p>

            <table style="width: 100%; border-collapse: collapse; margin: 0.8rem 0 1.4rem 0; font-size: 0.86rem;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.04); text-align: left;">
                        <th style="padding: 6px 8px; border: 1px solid var(--border);">Csoport / Kórkép</th>
                        <th style="padding: 6px 8px; border: 1px solid var(--border);">Hiányzó enzim</th>
                        <th style="padding: 6px 8px; border: 1px solid var(--border);">Öröklődés</th>
                        <th style="padding: 6px 8px; border: 1px solid var(--border);">Klinikai lefolyás</th>
                        <th style="padding: 6px 8px; border: 1px solid var(--border);">Fotoszenz.</th>
                        <th style="padding: 6px 8px; border: 1px solid var(--border);">Neurovisceralis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);"><strong>1. Hepatikus:</strong> ALA-dehidratáz hiány</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">ALA-dehidratáz</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">AR</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Akut</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Nincs</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">+</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);"><strong>Akut intermittáló porfíria (AIP)</strong></td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">HMB-szintáz (PBG-deamináz)</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">AD</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Akut</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Nincs</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">+</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);"><strong>Herediter koproporfíria (HCP)</strong></td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Koproporfirinogén-oxidáz</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">AD</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Akut / kevert</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">+</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">+</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);"><strong>Porfíria variegata (VP)</strong></td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Protoporfirinogén-oxidáz</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">AD</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Akut / kevert</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">+</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">+</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);"><strong>Porphyria cutanea tarda (PCT)</strong></td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Uroporfirinogén-dekarboxiláz</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Szerzett / AD</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Krónikus</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">+</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Nincs</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);"><strong>2. Erythropoetikus:</strong> Veleszületett (CEP)</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Uroporfirinogén-III-koszintáz</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">AR</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Krónikus</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">+++</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Nincs</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);"><strong>Erythropoetikus protoporfíria (EPP)</strong></td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Ferrokelatáz</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">AD</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Krónikus</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">+</td>
                        <td style="padding: 6px 8px; border: 1px solid var(--border);">Nincs</td>
                    </tr>
                </tbody>
            </table>

            <!-- KLINIKUM ÉS LABORATÓRIUMI DIAGNOSZTIKA -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                🏥 3. Klinikai tünettan, diagnosztika és terápia
            </h4>
            <ul style="margin-left: 1.4rem; margin-bottom: 1.5rem;">
                <li><strong>Akut porfíriás roham (pl. AIP):</strong> Nőkben gyakoribb, pubertás után kezdődik; kiváltó tényezők: citokróm P450-indukáló gyógyszerek (barbiturátok, szulfonamidok), hormonális változások (menstruáció, terhesség), éhezés, alkohol.
                    <ul>
                        <li><em>Tünetek:</em> 1. <strong>Gastrointestinalis:</strong> diffúz, görcsös hasi fájdalom ("akut has" műtéti indikáció nélkül!), hányás, székrekedés. 2. <strong>Perifériás neuropathia (60%):</strong> proximalis túlsúlyú, felső végtagi dominanciájú motoros izomgyengeség, paraesthesia. 3. <strong>Központi idegrendszer:</strong> görcsök, depresszió, hallucinációk, pszichózis (történelmi példa: III. György brit király). 4. <strong>Cardiovascularis:</strong> sinus tachycardia, hypertensio.</li>
                        <li><em>Diagnózis és Terápia:</em> Roham alatt <strong>vizelet PBG gyors szűrőteszt</strong> (Hoesch- vagy Watson–Schwartz-próba), majd kvantitatív ALA, PBG, uro- és koproporfirin mérés (<strong>fénytől védett mintavétel kötelező!</strong>). Terápia: nagy dózisú <strong>i.v. glükóz</strong> és <strong>hem-arginát / hematin</strong> (negatív visszacsatolással gátolják a máj ALA-szintáz aktivitását), folyadékpótlás, ópiát fájdalomcsillapítás, családtagok genetikai szűrése.</li>
                    </ul>
                </li>
                <li><strong>Nem akut / Kután porfíriák (pl. PCT):</strong> A máj uroporfirinogén-dekarboxiláz aktivitása 50%-ra csökken (I. típus: sporadikus/szerzett – 90%-ban alkoholos májbetegséggel, hepatitis C-vel vagy vas-túlterheléssel társul; II. típus: öröklött, 15–20%). Fénynek kitett területeken erythema, hólyagok (vezikula, bulla), hegesedés, hyperpigmentatio, hypertrichosis (homlokon), vörösen fluoreszkáló fogak és állás során sötétvörösre/barnásra sötétedő vizelet jellemzi (a "vámpír- és farkasember-mítosz" orvosi alapja). Kezelés: fényvédelem, alkohol/hepatotoxin elhagyása, flebotómia (vasraktárak csökkentése).</li>
            </ul>

            <!-- =================================================================
                 II. RÉSZ: TRANSZFÚZIOLÓGIA ALAPJAI – ABO ÉS RH RENDSZER
                 ================================================================= -->
            <div style="background: rgba(198, 40, 40, 0.08); border-left: 5px solid var(--danger); padding: 1.1rem; border-radius: 6px; margin-bottom: 1.5rem; margin-top: 2rem;">
                <h3 style="margin-top: 0; color: var(--danger); font-size: 1.25rem;">🩸 II. Rész: Transzfúziológia alapjai – Az ABO és Rh vércsoportrendszerek</h3>
                <p style="margin-bottom: 0;">
                    A <strong>transzfúziós medicina</strong> a vér alkotórészeinek szelektív kiválasztásával, komponens-terápiával (vvt-massza, thrombocyta-koncentrátum, friss fagyasztott plazma), aferezissel és az immunhematológiai kompatibilitás biztosításával foglalkozik. Jelenleg közel 400 vércsoport-antigént ismerünk, amelyek 48 önállóan öröklődő vércsoportrendszerbe szerveződnek.
                </p>
            </div>

            <!-- RÖVIDÍTÉSEK ÉS SZEROLÓGIAI ALAPFOGALMAK -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                📖 4. Rövidítések és szerológiai alapfogalmak (Vércsoportok)
            </h4>

            <table style="width: 100%; border-collapse: collapse; margin: 0.8rem 0 1.4rem 0; font-size: 0.88rem;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.04); text-align: left;">
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 22%;">Rövidítés / Fogalom</th>
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 33%;">Feloldás</th>
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 45%;">Immunhematológiai definíció</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>OVSZ</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Országos Vérellátó Szolgálat</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Magyarország vérgyűjtést, vizsgálatot és vérkészítmény-ellátást végző országos intézménye.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>ISBT</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">International Society of Blood Transfusion</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Nemzetközi Vértranszfúziós Társaság (ABO = ISBT 001; Rh = ISBT 004).</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>CPDA-1</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Citrate-Phosphate-Dextrose-Adenine</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Vérkonzerváló oldat (citrát: Ca<sup>2+</sup>-kelátor alvadásgátló; dextróz és adenin: ATP-szintézishez).</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>Ag / At</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Antigén / Antitest</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>Alloantigén:</strong> fajon belüli eltérő egyedekben immunválaszt kiváltó struktúra. <strong>Izoszerológia:</strong> fajon belüli egyedek különbségeit Ag–At reakcióval detektáló tudományág.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>GalNAc / Gal / Fuc</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">N-acetil-galaktózamin / Galaktóz / L-Fukóz</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Az ABO vércsoport-antigének terminális immunodomináns cukormolekulái.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>ÚHB</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Újszülöttkori hemolitikus betegség</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Anyai IgG típusú irreguláris ellenanyagok (főleg anti-D) placentán átjutva lízálják a magzati vvt-ket.</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Antitestek összehasonlítása a transzfúziológiában:</strong></p>
            <ul style="margin-left: 1.4rem; margin-bottom: 1.2rem;">
                <li><strong>Természetes (reguláris) antitestek (ABO rendszer):</strong> Kialakulásukat környezeti antigének (pl. <em>E. coli</em> sejtfal poliszacharidjai) stimulálják 3–6 hónapos kortól. Túlnyomórészt <strong>IgM</strong> osztályúak (Mr: 900 000–1 000 000), szobahőmérsékleten aktívak ("hideg" antitestek), nagy méretük miatt közvetlenül áthidalják a vvt-k közötti elektrosztatikus taszítást (izotóniás NaCl-ban direkt agglutinációt adnak), komplementet aktiválnak (intravascularis hemolízis!), és <strong>NEM jutnak át a placentán</strong>.</li>
                <li><strong>Immunizációs (irreguláris) antitestek (pl. Rh rendszer):</strong> Csak előzetes szenzibilizáció (inkompatibilis transzfúzió vagy terhesség) után termelődnek. Túlnyomórészt <strong>IgG</strong> típusúak (Mr: 160 000), 37 &deg;C-on aktívak ("meleg" antitestek), kisebb méretük miatt direkt sós közegben nem agglutinálnak (makromolekuláris közeg vagy Coombs-savó szükséges), nem kötnek jelentősen komplementet (extravascularis hemolízis a lépben), és <strong>ÁTMENNEK a placentán</strong> (ÚHB veszély!).</li>
            </ul>

            <!-- AZ ABO RENDSZER -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                🅰️🅱️ 5. Az ABO vércsoportrendszer (ISBT 001)
            </h4>
            <p>
                1901-ben <strong>Karl Landsteiner</strong> fedezte fel (1902: De Castello és Sturli – AB csoport). <strong>Landsteiner-szabály:</strong> Egészséges felnőtt plazmája mindig tartalmazza azt az ABO ellenanyagot, amelynek antigénje hiányzik a saját vörösvértestjeiről, és nem tartalmazhatja azt, amelynek antigénjét vvt-i hordozzák.
            </p>
            <ul style="margin-left: 1.4rem; margin-bottom: 1rem;">
                <li><strong>Biokémia és genetika:</strong> A génlokusz a <strong>9q34.1–q34.2</strong> kromoszómán található. Az alapláncra a 19q13 kromoszómán lévő <em>FUT1 (Hh)</em> gén által kódolt fukozil-transzferáz egy <strong>L-fukózt</strong> kapcsol &rarr; kialakul a <strong>H-antigén</strong> (ez található a 0-s vvt-ken). Az <em>A</em> gén N-acetil-galaktózaminil-transzferázt kódol (<strong>GalNAc</strong> kapcsolása &rarr; A-antigén); a <em>B</em> gén galaktozil-transzferázt kódol (<strong>Gal</strong> kapcsolása &rarr; B-antigén); a <em>0</em> allél inaktív enzimhez vezet. Az A és B allél <strong>kodomináns</strong>, mindkettő domináns a 0-val szemben.</li>
                <li><strong>Szöveti eloszlás és Secretor státusz:</strong> Az ABO antigének minden szöveti sejten (endothel! – szervtranszplantációs jelentőség), thrombocytán és fehérvérsejten megtalálhatók. A <em>FUT2 (Se)</em> gén (domináns, népesség 80%-a) biztosítja a vízoldékony H, A, B antigének megjelenését a testnedvekben (nyál, ondó, verejték – igazságügyi orvostan).</li>
                <li><strong>A-szubtípusok és Bombay fenotípus:</strong> Az A csoport 80%-a <strong>A<sub>1</sub></strong> (~1 millió antigén/vvt), 20%-a <strong>A<sub>2</sub></strong> (~200 000 antigén/vvt; az A<sub>2</sub> egyének termelhetnek anti-A<sub>1</sub> ellenanyagot). A ritka recesszív <strong>hh genotípus (Bombay fenotípus)</strong> képtelen H-anyagot termelni; bár genetikailag hordozhatják az A vagy B transzferázt, szerológiailag 0-snak tűnnek, szérumukban viszont erős <strong>anti-H</strong> kering, így még 0-s vért sem kaphatnak (csak másik Bombay donortól).</li>
                <li><strong>Klinikai transzfúziós szabályok és hazai megoszlás:</strong> Magyarországi gyakoriság: <strong>A Rh+ (36%), 0 Rh+ (26%), B Rh+ (16%), AB Rh+ (7%), A Rh- (6%), 0 Rh- (6%), B Rh- (2%), AB Rh- (1%)</strong>. <em>Univerzális vvt-donor:</em> <strong>0 Rh-</strong> (nincs A, B, D felszíni antigén). <em>Univerzális vvt-recipiens:</em> <strong>AB Rh+</strong> (nincs anti-A, anti-B, anti-D a szérumában). ABO-inkompatibilis transzfúzió komplement-mediált, fulmináns intravascularis hemolízishez, DIC-hez és veseelégtelenséghez vezet (legveszélyesebb 0-s recipiensben az erős anti-A/B miatt).</li>
            </ul>

            <!-- AZ RH RENDSZER -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                🧬 6. Az Rh vércsoportrendszer (ISBT 004) és az ÚHB
            </h4>
            <p>
                1940-ben Landsteiner és Wiener írta le. Az Rh antigének (kizárólag vvt-ken expresszálódó 32 kDa-os transzmembrán fehérjék, ~20 000/vvt) két szorosan kapcsolt gén – az <strong>RHD</strong> és az <strong>RHCE</strong> – termékei az <strong>1p34.3–36.1</strong> lokuszon. A 'd' jelölés a D gén teljes delécióját jelenti (nincs d antigénprotein). A népesség ~85%-a Rh(D) pozitív (DD vagy Dd), ~15%-a Rh(D) negatív (dd). <strong>Immunogenitási sorrend: D &gt; c &gt; E &gt; C &gt; e</strong>.
            </p>

            <table style="width: 100%; border-collapse: collapse; margin: 0.8rem 0 1.2rem 0; font-size: 0.88rem;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.04); text-align: left;">
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 24%;">Különleges Rh fenotípus</th>
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 40%;">Molekuláris eltérés</th>
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 36%;">Transzfúziós / Klinikai konzekvencia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>Parciális D</strong> (Kvalitatív variáns)</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">A D fehérje egyes epitópjai hiányoznak a vvt felszínéről.</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Normál D+ vér adásakor a hiányzó epitópok ellen anti-D-t termelhet!</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>Gyenge D</strong> (Kvantitatív variáns)</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Minden D epitóp jelen van, de a példányszám csökkent a membránban.</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>Gyakorlati szabály:</strong> D-variáns <em>donor/újszülött</em> &rarr; <strong>Rh(D)+</strong>; D-variáns <em>recipiens/várandós</em> &rarr; <strong>Rh(D)-</strong>!</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>Rh-null fenotípus</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Az <em>RHAG</em> (Rh-asszociált glikoprotein) gén mutációja miatt semmilyen Rh fehérje nem jut ki a membránba.</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Membráninstabilitás (stomatocytosis), krónikus enyhe hemolitikus anaemia (csökkent vvt-élettartam).</td>
                    </tr>
                </tbody>
            </table>

            <div style="background: rgba(214, 158, 46, 0.08); border-left: 5px solid var(--accent); padding: 1rem; border-radius: 6px; margin-top: 1rem;">
                <h4 style="margin: 0 0 0.4rem 0; color: #b7791f;">👶 Újszülöttkori Hemolitikus Betegség (ÚHB) és Prevenció:</h4>
                <ul style="margin-left: 1.4rem; margin-bottom: 0;">
                    <li><strong>Patomechanizmus:</strong> Az Rh(D) negatív egyének 80%-a anti-D termeléssel válaszol Rh(D)+ vvt-kkel való találkozáskor. Ha Rh(D) negatív anyának Rh(D) pozitív magzata van, az első szülés során a magzati vvt-k az anyai keringésbe jutva <strong>szenzibilizálják</strong> az anyát (IgG típusú anti-D termelődés indul). A következő Rh(D)+ terhességben az anyai IgG anti-D átjut a placentán, és súlyos magzati hemolízist, hydrops fetalis-t vagy újszülöttkori kernicterust okoz.</li>
                    <li><strong>Megelőzés (Anti-D profilaxis):</strong> Az Rh(D) negatív anyának a szülés előtt (28. hét) és/vagy a szülést követő 72 órán belül adott <strong>anti-D immunglobulin</strong> elfedi a bejutott magzati vvt-k D antigénjeit, megakadályozva az anyai immunrendszer szenzibilizálódását. <strong>Szigorú szabály:</strong> Szülőképes korú Rh(D) negatív nőnek tilos bármilyen Rh(D) pozitív vérkészítményt adni!</li>
                </ul>
            </div>

        </div>
    `
});
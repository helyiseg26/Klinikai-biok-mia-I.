// ============================================================================
// KLINIKAI BIOKÉMIA ÉS LABORATÓRIUMI DIAGNOSZTIKA
// 5. Előadás: Kompatibilitás vizsgálat és Transzfúziós reakciók
// ============================================================================

window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas5",
    title: "5. Előadás: Kompatibilitás vizsgálat és Transzfúziós reakciók",
    shortName: "Kompatibilitás & Transzfúzió",
    html: `
        <div style="font-size: 0.96rem; line-height: 1.62; color: inherit;">

            <!-- BEVEZETÉS -->
            <div style="background: rgba(43, 108, 176, 0.08); border-left: 5px solid var(--primary-light); padding: 1.1rem; border-radius: 6px; margin-bottom: 1.5rem;">
                <h3 style="margin-top: 0; color: var(--primary); font-size: 1.25rem;">🩸 I. Rész: Kompatibilitási vizsgálatok rendszere és vércsoport-szerológia</h3>
                <p style="margin-bottom: 0;">
                    A kompatibilitási vizsgálat elsődleges célja, hogy elkerüljük az <strong>inkompatibilis vörösvértestek (vvt)</strong> transzfúzióját, amelyek túlélése a recipiens szervezetében lerövidül, és súlyos, akár életveszélyes <strong>hemolitikus transzfúziós szövődményt</strong> váltanak ki. A biztonságos vértranszfúzió alapja a pontos beteg- és mintaazonosítás a folyamat minden szakaszában, a mintavételtől egészen a kompatibilis vér beadásáig.
                </p>
            </div>

            <!-- RÖVIDÍTÉSEK ÉS KULCSFOGALMAK -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                📖 1. Rövidítések feloldása és kulcsfogalmak
            </h4>

            <table style="width: 100%; border-collapse: collapse; margin: 0.8rem 0 1.4rem 0; font-size: 0.88rem;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.04); text-align: left;">
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 20%;">Rövidítés</th>
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 34%;">Teljes megnevezés</th>
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 46%;">Biokémiai / Klinikai jelentőség</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>VVT / FVS / THR</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Vörösvértest / Fehérvérsejt / Thrombocyta</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Alakos vérelemek; transzfúziós célkészítmények és immunológiai célpontok.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>Ag / Ab / IgG / IgM</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Antigén / Antitest / Immunglobulin G és M</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Ag: sejtfelszíni struktúra; IgM: pentamer (direkt agglutináló, hideg); IgG: monomer (inkomplett, meleg, placentán átjut, AHG szükséges a kimutatásához).</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>IAT / AHG</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Indirekt Antiglobulin Teszt / Anti-Humán Globulin</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">A recipiens szérumában lévő szabad (irreguláris) IgG antitestek detektálása ismert tesztsejtekkel és Coombs-savóval (AHG) 37 &deg;C-on.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>DAT / DCT</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Direkt Antiglobulin Teszt / Direkt Coombs Teszt</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">A beteg vvt-inek felszínére <em>in vivo</em> már rákötődött IgG antitestek és/vagy C3d komplement-fragmentumok kimutatása.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>ÚHB</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Újszülöttkori Hemolitikus Betegség</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Anyai IgG antitestek (pl. anti-D, anti-K, anti-c) placentán való átjutása és a magzati vvt-k pusztítása.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>OVSZ / We</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Országos Vérellátó Szolgálat / Westergren (vvt-süllyedés)</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">OVSZ: hazai transzfúziós szabályzat kiadója; emelkedett We (gyulladás, paraprotein) ál-agglutinációt (szimpexis) okozhat.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>HLA / TRALI</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Human Leukocyte Antigen / Transfusion-Related Acute Lung Injury</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">TRALI: transzfúzióhoz társuló akut tüdőkárosodás (15 perc–6 óra); donor FVS (HLA I/II) elleni antitestek és citokinek okozzák.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>PTP / GvHD</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Poszt-Transzfúziós Purpura / Graft-versus-Host Disease</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Késői immunreakciók: PTP-ben THR-ellenes antitest saját thrombocytákat is pusztít; GvHD-ben donor T-limfociták támadják a recipienst.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>LDH / UBG / MDS</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Laktát-dehidrogenáz / Urobilinogén / Myelodyspláziás szindróma</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Hemolízisben emelkedik a szérum LDH és a vizelet UBG; MDS-ben a gyakori transzfúziók miatt fokozott az immunizációs kockázat.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>HBV / HCV / HIV / CMV</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Hepatitis B és C vírus / Humán Immunhiány Vírus / Citomegalovírus</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">HBV, HCV, HIV-1/2 és syphilis minden vérkészítményből szűrve van; a CMV fehérvérsejtekkel átvihető.</td>
                    </tr>
                </tbody>
            </table>

            <div style="background: rgba(0,0,0,0.02); border: 1px solid var(--border); border-radius: 6px; padding: 0.9rem; margin-bottom: 1.4rem;">
                <strong>🔑 Kulcsfogalmak meghatározása:</strong>
                <ul style="margin-left: 1.4rem; margin-bottom: 0; margin-top: 0.3rem;">
                    <li><strong>"Type and Screen" (I–III. lépés):</strong> A transzfúziót megelőző laboratóriumi vércsoport-vizsgálati csomag: (I) recipiens ABO és RhD meghatározása, (II) ellenanyagszűrés és pozitív esetben azonosítás a recipiens savójában, (III) az eredmények összevetése a korábbi leletekkel.</li>
                    <li><strong>Kétoldalas ABO meghatározás:</strong> Egyszerre vizsgáljuk a beteg vvt-inek antigénjeit ismert tesztsavókkal (<strong>direkt oldal</strong>: anti-A, anti-B, anti-A,B) és a beteg savójának természetes antitestjeit ismert tesztsejtekkel (<strong>reverz oldal</strong>: A<sub>1</sub>, A<sub>2</sub>, B, O sejtek), kiegészítve saját savós kontrollal.</li>
                    <li><strong>Szimpexisképződés (pénztekercs / rouleaux):</strong> Ál-agglutináció, amelyben a vvt-k lapjukkal egymáshoz tapadva pénztekercsszerű halmazokat képeznek a plazma megnövekedett viszkozitása miatt (pl. magas globulin, emelkedett We, dextrán plazmapótszer, kontrasztanyag).</li>
                    <li><strong>Papain technika:</strong> Proteolitikus enzimkezelés, amely lehasítja a vvt-felszín negatív töltésű szialoglikoproteinjeit, ezáltal csökkenti a sejtek közötti elektrosztatikus taszítást és felerősíti az inkomplett (IgG) ellenanyagok agglutinációját.</li>
                </ul>
            </div>

            <!-- KOMPATIBILITÁSI VIZSGÁLAT LÉPÉSEI -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                🔬 2. A kompatibilitási vizsgálat lépései és vércsoport-meghatározás
            </h4>

            <div style="margin-bottom: 1.1rem;">
                <h5 style="color: var(--primary-light); margin-bottom: 0.25rem; font-size: 1rem;">A teljes kivizsgálási protokoll (I–IV. lépés)</h5>
                <ol style="margin-left: 1.4rem;">
                    <li><strong>ABO és RhD meghatározás (recipiens vvt):</strong> Első alkalommal kötelezően <strong>két független vizsgáló, két különböző módszerrel</strong> végzi.</li>
                    <li><strong>Ellenanyagszűrés (recipiens savójában):</strong> Váratlan (irreguláris) antitestek keresése; pozitivitás esetén kötelező az <strong>ellenanyag-azonosítás</strong>.</li>
                    <li><strong>Dokumentáció és előzmények összevetése:</strong> Az aktuális eredmények egyeztetése a korábbi vizsgálati adatokkal (I–III. lépés = <em>"Type and screen"</em>).</li>
                    <li><strong>Donor vvt választás és laboratóriumi keresztpróba:</strong> A kiválasztott donor vvt-k és a recipiens szérumának közvetlen reagáltatása.</li>
                </ol>
            </div>

            <div style="margin-bottom: 1.1rem;">
                <h5 style="color: var(--primary-light); margin-bottom: 0.25rem; font-size: 1rem;">ABO és RhD meghatározási technikák és buktatók</h5>
                <ul>
                    <li><strong>Módszerek:</strong> Csőtechnika, csempe (egyoldalas vvt 10%-os konyhasós szuszpenzióval), mikrolemez (microplate), oszlopagglutinációs gélkártya, valamint betegágy melletti kártya (pl. <em>Serafol&reg; ABO</em>: beszárított monoklonális antitestek + 1 csepp fiz. só + 1 csepp vér [~20 &mu;L], 30 mp keverés, 30–60 mp döntögetés).</li>
                    <li><strong>Betegágy melletti kártya limitációi:</strong> A gyengén reagáló <strong>A alosztályok</strong> (A<sub>3</sub> normál/gyenge, A<sub>x</sub> gyenge vagy negatív reakciót ad) és a <strong>D variánsok</strong> (gyenge vagy negatív anti-D reakció) álnegatívak lehetnek &rarr; ilyenkor laboratóriumi vizsgálat szükséges gyenge D vagy parciális D irányába.</li>
                    <li><strong>Autokontroll pozitivitás okai:</strong> A beteg savóját saját vvt-ivel reagáltatjuk. Pozitív lesz, ha a sejteket <strong>autoantitestek</strong>, <strong>alloantitestek</strong> (korábbi inkompatibilis transzfúzió után), vagy <strong>gyógyszerellenes antitestek</strong> fedik, illetve ha a savó <strong>szimpexisképző</strong>.</li>
                    <li><strong>RhD meghatározás és klinikai szabály:</strong> Az ABO-val egy időben végzendő (elírás megelőzése), első alkalommal kétszer (mivel nincs reverz kontroll). Nagy titerű monoklonális IgM anti-D reagenseket használnak, amelyek a parciális D-t nem mutatják pozitívnak. A <strong>D variánsok gyakorisága ~1%</strong>; gyenge agglutináció vagy két módszer közötti eltérés esetén <strong>a recipienst RhD negatívnak kell tekinteni!</strong> (Rh fenotipizálás: anti-D, -C, -E, -c, -e ismert kontrollpanelekkel).</li>
                </ul>
            </div>

            <!-- IAT, DAT, KERESZTPRÓBA ÉS ÉRVÉNYESSÉG -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                🧪 3. Ellenanyagszűrés, IAT/DAT, keresztpróba és sürgősségi ellátás
            </h4>

            <ul style="margin-left: 1.4rem; margin-bottom: 1.1rem;">
                <li><strong>Ellenanyagszűrés:</strong> A recipiensek <strong>2–5%-a</strong> termel váratlan antitestet donor vvt-antigének ellen; az esetek <strong>2/3-ában az anti-c, anti-E és anti-K</strong> antitestek okoznak hemolitikus szövődményt. A beteg plazmáját legalább két (gyakran 3) különböző, <strong>O vércsoportú</strong> szűrősejt-szuszpenzióval vizsgálják, amelyeken az antigének <strong>homozigóta expressziója</strong> kívánatos (dózishatás miatt a gyenge antitestek is kimutathatók).</li>
                <li><strong>Indirekt Antiglobulin Teszt (IAT) vs. Direkt Antiglobulin Teszt (DAT):</strong>
                    <ul>
                        <li><strong>IAT:</strong> A szérumban lévő <em>szabad</em> antitesteket detektálja ismert tesztsejtekkel (szűréshez 2–3 sejt, azonosításhoz 10–16-féle O-s tesztsejtpanel). Pozitív IAT esetén DAT végzendő.</li>
                        <li><strong>DAT (Direkt Coombs):</strong> A beteg mosott vvt-ihez adott anti-IgG / anti-C3d reagenssel mutatja ki a sejtfelszínhez <em>in vivo</em> már kötődött ellenanyagot. Pozitív: <strong>AIHA, ÚHB, hemolitikus transzfúziós szövődmény, gyógyszer-indukált immun-hemolitikus anaemia</strong>.</li>
                    </ul>
                </li>
                <li><strong>Laboratóriumi keresztpróba:</strong> A recipiens széruma és a donor vvt-i közötti IAT reakció. Akkor is kiszűri az inkompatibilitást, ha a donor vvt-n egy ritka antigén (gyakoriság <strong>&lt; 1:400</strong>) van, amely a szűrősejteken nem szerepelt (negatív szűrés mellett a pozitív keresztpróba esélye <strong>1 : 30 000</strong>).</li>
                <li><strong>Választott vvt-készítmények (kötelező I–IV. lépés):</strong> Pozitív ellenanyagszűrés vagy korábbi antitest az anamnézisben, pozitív DAT, 3 hónapon belüli immunizáló esemény (transzfúzió, terhesség, transzplantáció), hipotermiás műtét, csecsemőkor, vagy fokozott immunizációs kockázat (MDS, thalassemia).</li>
            </ul>

            <table style="width: 100%; border-collapse: collapse; margin: 0.6rem 0 1.4rem 0; font-size: 0.87rem;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.04); text-align: left;">
                        <th style="padding: 6px 10px; border: 1px solid var(--border); width: 45%;">Klinikai helyzet / Anamnézis</th>
                        <th style="padding: 6px 10px; border: 1px solid var(--border); width: 25%;">Kompatibilitás érvényessége</th>
                        <th style="padding: 6px 10px; border: 1px solid var(--border); width: 30%;">Sürgősségi életmentő szabály</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">Nincs transzfúzió az anamnézisben, vagy <strong>&gt; 3 hónapja</strong> volt és negatív az ellenanyagszűrés</td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>1 hét</strong></td>
                        <td rowspan="3" style="padding: 6px 10px; border: 1px solid var(--border); vertical-align: top;">
                            Ismeretlen vércsoportú, kivérzett betegnek életmentésként <strong>O RhD negatív mosott vvt</strong> adható keresztpróba nélkül (előtte vérminta levétele kötelező!). <strong>2 egység vvt</strong> beadása után ABO és Rh csoportazonos vérrel kell folytatni.
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">Transzfúzió (vagy terhesség) <strong>3 hónapon belül</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>72 óra</strong></td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">Transzfúzió <strong>2 héten belül</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>72 óra</strong></td>
                    </tr>
                </tbody>
            </table>

            <!-- =================================================================
                 II. RÉSZ: TRANSZFÚZIÓS REAKCIÓK
                 ================================================================= -->
            <div style="background: rgba(198, 40, 40, 0.08); border-left: 5px solid var(--danger); padding: 1.1rem; border-radius: 6px; margin-bottom: 1.3rem; margin-top: 1.6rem;">
                <h3 style="margin-top: 0; color: var(--danger); font-size: 1.25rem;">🚨 II. Rész: Transzfúziós reakciók osztályozása és diagnosztikája</h3>
                <p style="margin-bottom: 0;">
                    <strong>Biológiai inkompatibilitás jelei esetén a transzfúziót azonnal le kell állítani!</strong> Figyelmeztető tünetek: hirtelen gyengeség, rossz általános állapot, mellkasi nyomás/fájdalom, dyspnoe, deréktáji hátfájdalom, égő fájdalom a véna mentén, hányinger/hányás, hasmenés, láz, hidegrázás, verejtékezés, agitáció, hemoglobinuria, gyors elnyomható pulzus, hypotenzió és keringési elégtelenség.
                </p>
            </div>

            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                ⚡ 4. Immunológiai eredetű azonnali és késői transzfúziós reakciók
            </h4>

            <div style="margin-bottom: 1rem;">
                <h5 style="color: var(--danger); margin-bottom: 0.25rem; font-size: 1rem;">I. Azonnali immunológiai reakciók (transzfúzió alatt vagy 1–2 órán belül, max. &lt; 48 óra)</h5>
                <ul>
                    <li><strong>Akut hemolitikus transzfúziós reakció (AHTR):</strong> A recipiensben lévő antitestek pusztítják a donor vvt-ket; legsúlyosabb forma az <strong>inkompatibilis ABO vér</strong> beadásakor (intravascularis hemolízis). <em>Laborleletek:</em> <strong>hemoglobinuria</strong>, akut veseelégtelenség (oligo-anuria), <strong>mérhetetlenül alacsony haptoglobin</strong>, emelkedett szérum <strong>LDH</strong>, <strong>nem konjugált bilirubin</strong> és emelkedett <strong>vizelet UBG</strong> (valamint methemalbumin, hemopexin-csökkenés, hemosiderinuria).</li>
                    <li><strong>Immunmediált thrombocyta destrukció (refrakteritás):</strong> A recipiensben lévő HLA- és/vagy thrombocyta-specifikus (HPA), illetve gyógyszer-indukálta ellenanyagok elpusztítják a beadott vérlemezkéket &rarr; elmarad a várt THR-szám emelkedés.</li>
                    <li><strong>Nem hemolitikus lázas transzfúziós reakció (FNHTR):</strong> A recipiens beadott FVS elleni antitestjei (korábbi immunizáció) vagy a készítményben tárolás során a fehérvérsejtekből felszabaduló pirogén <strong>citokinek</strong> okozzák.</li>
                    <li><strong>Allergiás reakció és Anaphylaxia:</strong> Enyhe formában plazmafehérjék elleni IgE mediált urticaria, angioödéma. Súlyos <strong>anaphylaxia</strong> alakul ki <strong>IgA-hiányos</strong> egyénekben, akik anti-IgA antitesttel rendelkeznek és IgA-tartalmú plazmát kapnak.</li>
                    <li><strong>Transzfúzióhoz társuló akut tüdőkárosodás (TRALI):</strong> A transzfúzió megkezdése után <strong>15 perc – 6 órán belül</strong> kialakuló akut gázcserezavar (nem kardiogén tüdőödéma). A donor plazmájában lévő, a recipiens FVS-ei (HLA I. és II. osztály) ellen irányuló antitestek és gyulladásos citokinek aktiválják a neutrofileket a tüdőkapillárisokban.</li>
                </ul>
            </div>

            <div style="margin-bottom: 1.2rem;">
                <h5 style="color: var(--primary-light); margin-bottom: 0.25rem; font-size: 1rem;">II. Késői immunológiai reakciók (transzfúzió után 1–2 héttel, max. 1 hónap)</h5>
                <ul>
                    <li><strong>Késői hemolitikus reakció (DHTR):</strong> Korábbi transzfúzió vagy terhesség során képződött, alacsony titerű <strong>irreguláris antitestek</strong> (pl. Kidd, Duffy, Rh) másodlagos immunválasz miatti felszaporodása és extravascularis hemolízis.</li>
                    <li><strong>Poszt-Transzfúziós Purpura (PTP):</strong> <strong>7–10 napon</strong> jelentkező hirtelen, súlyos thrombocytopeniás vérzés és purpurák. A recipiensben lévő THR-ellenes (anti-HPA-1a) antitestek nemcsak a donor, hanem a beteg saját thrombocytáit is elpusztítják.</li>
                    <li><strong>Transzfúzióhoz társuló Graft-versus-Host betegség (TA-GvHD):</strong> <strong>3–4 hét</strong> után alakul ki (bőrtünetek, májkárosodás, hasmenés, pancytopenia). A donor T-limfocitáit a recipiens nem ismeri fel idegenként és nem pusztítja el (immundeficiens, immunszuppresszált beteg, vagy közeli rokon donor miatti közös HLA-antigének), így a donor T-sejtek megtámadják a recipiens szöveteit. <em>Megelőzés:</em> <strong>irradiált (besugárzott) vérkészítmények</strong> adása!</li>
                </ul>
            </div>

            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                🧪 5. Nem immunológiai eredetű transzfúziós szövődmények
            </h4>

            <div style="background: rgba(0,0,0,0.02); border: 1px solid var(--border); border-radius: 6px; padding: 0.9rem;">
                <ul style="margin-left: 1.3rem; margin-bottom: 0;">
                    <li><strong>Nem immun hemolízis:</strong> Helytelen tárolás (fagyasztás vagy túlmelegítés), lejárt készítmény, túl nagy nyomással vagy túl vékony tűn keresztüli beadás okozta mechanikai/ozmotikus vvt-szétesés.</li>
                    <li><strong>Bakteriális kontamináció:</strong> Vérvételkor vagy előállításkor bekerült baktériumok elszaporodása és endotoxin-termelése (különösen szobahőn tárolt thrombocyta-koncentrátumban veszélyes).</li>
                    <li><strong>Keringési túlterhelés (TACO) és Hemodilúció:</strong> Nagy térfogat túl gyors infúziója szívelégtelenséget okoz; nagy mennyiségű vvt-koncentrátum adásakor az alvadási faktorok és a THR-ek felhígulnak (hemodilúciós koagulopátia).</li>
                    <li><strong>Vastúlterhelés (szekunder hemochromatosis):</strong> Politranszfundált betegekben (1 egység vvt ~200–250 mg vasat tartalmaz) szervkárosodást okoz &rarr; vaskelátor terápia szükséges.</li>
                    <li><strong>Transzfúzióval átvihető infekciók:</strong> Minden készítményt kötelezően szűrnek: <strong>HBV (Ag és Ab), HCV, HIV-1, HIV-2, syphilis</strong>. További átvihető kórokozók: <strong>CMV!</strong> (leukocitadepletióval védhető), Creutzfeldt–Jakob betegség variánsa (vCJD), <em>Babesia, Bartonella, Borrelia, Brucella, Leishmania, Parvovirus B19, Toxoplasma, Plasmodium, Rickettsia, Trypanosoma spp.</em>, Chikungunya- és Nyugat-nílusi vírus.</li>
                    <li><strong>Metabolikus toxicitások:</strong> <strong>Citrát-toxicitás</strong> (nagy mennyiségű FFP gyors adásakor a citrát megköti a plazma Ca<sup>2+</sup>-ionjait &rarr; hypocalcaemia) és <strong>K<sup>+</sup>-toxicitás</strong> (hosszan tárolt vvt-készítményekből kiszivárgó kálium okozta hyperkalaemia).</li>
                </ul>
            </div>

        </div>
    `
});

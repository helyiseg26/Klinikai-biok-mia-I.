window.LEKTURAK.push({
    id: "eloadas1",
    title: "1. Előadás: Thrombocyták számbeli rendellenességeinek laboratóriumi diagnosztikája",
    shortName: "Thrombocyták zavarai",
    html: `
        <div style="line-height: 1.7; font-size: 1.02rem;">

            <!-- BEVEZETŐ ÉS ALAPOK -->
            <div style="background: rgba(43, 108, 176, 0.08); border-left: 5px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 2rem;">
                <h2 style="color: var(--primary); margin-top: 0; font-size: 1.5rem;">Vérlemezkék (Thrombocyták) képződése és élettana</h2>
                <p>
                    A <strong>thrombocyták</strong> (vérlemezkék) a csontvelői óriássejtek, a <strong>megakaryocyták</strong> citoplazmájából lefűződő magvatlan, diszkosz alakú képletek. 
                    A megakaryocytopoesis során a sejtek <strong>endomitosissal</strong> (sejtosztódás nélküli magtöbbszöröződéssel) poliploiddá válnak, majd citoplazmatikus nyúlványaikból (<strong>proplatelet</strong> és <strong>preplatelet</strong> képződés) a csontvelői sinusoidokba fűződnek le a vérlemezkék.
                </p>
                <p style="margin-bottom: 0;">
                    <strong>Fő élettani feladatuk:</strong> Az <strong>elsődleges (primer) hemostasis</strong> biztosítása, az érfal sérülését követő adhézió, aktiváció, szekréció és aggregáció révén kialakítva az elsődleges vérrögöt (<strong>hemostatic plug / fehér thrombus</strong>). Emellett a vérlemezke negatív töltésű foszfolipid felszíne ad platformot a másodlagos hemostasisnak, azaz a <strong>véralvadási kaszkád sejtmodelljének</strong> (iniciáció, amplifikáció, propagáció lépései, tenáz és protrombináz komplexek működése).
                </p>
            </div>

            <!-- SZÁMLÁLÁS ÉS REFERENCIA ÉRTÉKEK -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.8rem;">1. Laboratóriumi számlálás és döntési szintek</h3>
            
            <p><strong>A thrombocytaszám meghatározásának módszerei:</strong></p>
            <ul>
                <li><strong>Automatizált hematológiai analizátorok (pl. Sysmex rendszerek):</strong> Elsővonalbeli vizsgálat impedancia-méréssel és/vagy optikai, fluoreszcens festésen alapuló csatornával (<strong>PLT-F</strong>). Az automata meghatározza a vérlemezkék átlagos térfogatát is: <strong>MPV (Mean Platelet Volume – vérlemezke átlagos térfogata)</strong>, ami a fiatal, nagyobb vérlemezkék jelenlétére utalhat.</li>
                <li><strong>Perifériás vérkenet mikroszkópos vizsgálata:</strong> Elengedhetetlen a morfológiai eltérések (<strong>óriásthrombocyták</strong>), zárványok vizsgálatára, valamint az <strong>ál-vérlemezkehiány (pseudothrombocytopenia)</strong> kizárására, amelyet in vitro EDTA (etilén-diamin-tetraecetsav) indukálta aggregátumok okozhatnak.</li>
                <li><strong>Kamrás manuális számlálás:</strong> Bürker-kamra segítségével végzett referencia-módszer bizonytalan vagy szélsőséges esetekben.</li>
            </ul>

            <div style="background: var(--card-bg); border: 1.5px solid var(--border); border-radius: 8px; padding: 1.2rem; margin: 1.2rem 0;">
                <h4 style="color: var(--accent); margin-top: 0;">Klinikai döntési szintek (Thrombocytaszám határok)</h4>
                <ul>
                    <li><strong>150 – 450 G/L (Giga/Liter = 10<sup>9</sup>/L):</strong> Fiziológiás referencia-tartomány.</li>
                    <li><strong>&lt; 100 G/L:</strong> <strong>Thrombocytopenia</strong> (kóros vérlemezkeszám-csökkenés).</li>
                    <li><strong>&lt; 50 G/L:</strong> Kifejezett vérzékenységi rizikó (beavatkozások, invazív műtétek esetén vérzés léphet fel).</li>
                    <li><strong>&lt; 10 G/L:</strong> Kritikus szint: spontán, életveszélyes vérzések (pl. központi idegrendszeri, gastrointestinalis) nagy valószínűséggel alakulnak ki!</li>
                </ul>
                <p style="margin-top: 0.6rem; font-size: 0.95rem; color: var(--text-muted);">
                    <strong>Klinikai tünettan thrombocytopeniában:</strong> Sokszor tünetmentes, enyhébb esetben mukokután (nyálkahártya- és bőr-) vérzések jelentkeznek: <strong>petechiák</strong> (apró, gombostűfejnyi pontszerű bevérzések), <strong>purpurák</strong> (összefolyó bőrvérzések), epistaxis (orrvérzés), gingiva-vérzés, menorrhagia, tápcsatornai vérzések.
                </p>
            </div>

            <!-- THROMBOCYTOPENIÁK PATOMECHANIZMUSA -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">2. A thrombocytopeniák kórélettani csoportosítása</h3>
            <p>A vérlemezkeszám-csökkenés mögött három alapvető mechanizmus állhat: <strong>csökkent termelődés</strong>, <strong>fokozott pusztulás (destrukció)</strong> vagy <strong>kóros megoszlás (szekvesztráció)</strong>.</p>

            <h4 style="color: var(--primary-light); margin-top: 1.4rem;">A) Csökkent vagy károsodott thrombocyta-képzés</h4>
            <ul>
                <li>
                    <strong>Veleszületett (kongenitális) kórképek:</strong>
                    <ul>
                        <li><strong>May-Hegglin anomália:</strong> Az <em>MYH9</em> gén (nem-izom miozin nehézlánc IIA) mutációja miatt kialakuló autoszomális domináns kórkép. Jellemzői: <strong>óriásthrombocyták</strong>, a neutrophil granulocytákban látható <strong>Döhle-testek</strong> (bazofil zárványok, melyek a durva felszínű endoplazmatikus retikulum riboszómamaradványai), enyhe/közepes mukokután vérzékenység.</li>
                        <li><strong>Wiskott-Aldrich szindróma (WAS):</strong> <em>WAS</em> gén defektusa miatti X-kromoszómához kötött recesszív kórkép: mikrotrombocitákkal járó vérzékenység, ekcéma és kombinált immundeficiencia triásza.</li>
                    </ul>
                </li>
                <li>
                    <strong>Neonatális hypoplasia:</strong> Kongenitális <strong>rubeolavírus-fertőzés</strong> (a csontvelői megakaryocyták hiánya/pusztulása), illetve anyai gyógyszerszedés (pl. tiazid típusú vízhajtók, tolbutamid).
                </li>
                <li>
                    <strong>Szerzett csontvelői elégtelenség:</strong>
                    <ul>
                        <li><strong>Aplasticus anaemia:</strong> Pancytopeniával járó csontvelői őssejt-károsodás (korai tünete lehet a thrombocytopenia).</li>
                        <li><strong>Malignus folyamatok:</strong> Csontvelői infiltráció (leukémiák, myeloma multiplex, lymphomák, szolid tumor áttétek, myelofibrosis).</li>
                        <li><strong>Iatrogén hatások:</strong> Ionizáló sugárzás, citosztatikus daganatterápia (kemoterápia).</li>
                        <li><strong>Toxikus tényezők:</strong> <strong>Krónikus alkoholizmus</strong> (az etanol direkt módon gátolja a megakaryocytopoesist).</li>
                        <li><strong>Vírusfertőzések:</strong> CMV (Cytomegalovírus), EBV (Epstein-Barr vírus – Mononucleosis infectiosa), Varicella zoster vírus, kanyaró oltóanyag.</li>
                        <li><strong>Ineffektív thrombocytopoesis:</strong> <strong>B<sub>12</sub>-vitamin</strong> vagy <strong>folsav</strong> hiánya miatti DNS-szintézis zavar (megaloblasztos anaemia részeként).</li>
                    </ul>
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1.4rem;">B) Fokozott thrombocyta-destrukció: Nem-immun mechanizmusok</h4>
            <p>Ezekben az állapotokban a thrombocyták mechanikai sérülés vagy kontrollálatlan intravaszkuláris alvadási folyamat miatt használódnak el.</p>
            <ul>
                <li>
                    <strong>1. Disszeminált Intravascularis Coagulopathia (DIC):</strong> 
                    Szisztémás, szabályozatlan véralvadási és másodlagos fibrinolitikus aktiváció, amit nagymennyiségű <strong>szöveti faktor (TF – Tissue Factor)</strong> keringésbe kerülése indít el (okai: szepszis – főleg Gram-negatív baktériumok endotoxinjai, súlyos politrauma, égés, szülészeti katasztrófák: placenta leválás, malignus tumorok: pl. APML – Akut Promyelocytás Leukémia).
                    <br><em>Patogenezis:</em> A mikrocirkulációban diffúz fibrinháló és mikrotrombusok képződnek &rarr; szervi ischaemia &rarr; a vérlemezkék és az alvadási faktorok kimerülnek (<strong>konszumpciós coagulopathia</strong>), ami paradox módon súlyos vérzésekhez vezet.
                    <br><em>Laboratóriumi DIC-panel:</em> Megnyúlt alvadási idők: <strong>PI (Protrombin idő)</strong> &uarr;, <strong>APTI (Aktivált parciális tromboplasztin idő)</strong> &uarr;, <strong>TI (Trombin idő)</strong> &uarr;; emelkedett lebomlási termékek: <strong>FDP (Fibrin degradációs termékek)</strong> &uarr;, <strong>FM (Fibrin monomer)</strong> &uarr;, <strong>D-dimer</strong> &uarr;; csökkent alvadási faktorok: <strong>Fibrinogén</strong> &darr;, <strong>Thrombocytaszám</strong> &darr;; természetes antikoagulánsok kimerülése: <strong>PC (Protein C)</strong> &darr;, <strong>ATIII (Antithrombin III)</strong> &darr;; perifériás kenetben mechanikusan sérült vörösvértestek: <strong>schistocyták (fragmentocyták)</strong> jelennek meg.
                </li>
                <li>
                    <strong>2. Thromboticus Thrombocytopeniás Purpura (TTP – Moschcowitz-szindróma):</strong>
                    Az <strong>ADAMTS13</strong> metalloproteáz hiánya vagy gátlása miatt alakul ki. Élettani körülmények között ez az enzim hasítja az endothelsejtek által szekretált <strong>ultra-nagy von Willebrand faktor (UL-VWF) multimereket</strong>. Enzimhiány esetén a keringő óriás multimerek spontán aggregálják a vérlemezkéket a kiserekben.
                    <br><em>Klinikai pentád:</em> 1. Súlyos thrombocytopenia (&lt; 20 G/L, DIC nélkül!); 2. Mikroangiopátiás hemolitikus anaemia (MAHA: schistocyták, microspherocyták a vérkenetben); 3. Intravasculáris haemolysis jelei: szabad hemoglobin, hemoglobinuria, hemosiderinuria, <strong>csökkent haptoglobin</strong>, magas szérum <strong>LDH (laktát-dehidrogenáz)</strong> és indirekt bilirubin; 4. Változékony idegrendszeri tünetek (fejfájás, zavartság, görcsök); 5. Vesekárosodás és láz.
                    <br><em>Formái:</em> Veleszületett (Upshaw-Schulman szindróma, génmutáció, AR öröklődés, kezelése: <strong>FFP – Friss fagyasztott plazma</strong> enzim-pótlásra); Szerzett/autoimmun (&gt;90%, anti-ADAMTS13 IgG autoantitestek miatt, kezelése: azonnali <strong>plazmaferezis</strong>, immunszupresszió: Rituximab, glükokortikoidok, valamint Caplacizumab – anti-vWF nanobody).
                </li>
                <li>
                    <strong>3. Hemolyticus Uremiás Szindróma (HUS):</strong>
                    Elsősorban kisgyermekekben (&lt; 5 év) előforduló kórkép, a gyermekkori heveny veseelégtelenség leggyakoribb oka. Típusosan <strong>STEC (Shiga-toxint termelő Escherichia coli O157:H7)</strong> vagy Shigella fertőzés okozza, véres hasmenést követően 7–10 nappal. A toxin a vese glomerulus endotheljét károsítja, lokális mikrotrombusokat indukálva.
                    <br><em>Vezető tünet:</em> Akut veseelégtelenség (emelkedett szérum karbamid/urea és kreatinin, proteinuria, haematuria, cilinderek), hypertonia. Neurológiai tünetek ritkák; a thrombocytopenia és anaemia kevésbé súlyos, mint TTP-ben. Terápiája szupportív (folyadék, szükség esetén hemodialízis); antibiotikum adása kontraindikált, mert fokozhatja a toxin felszabadulását!
                </li>
                <li>
                    <strong>4. HELLP-szindróma:</strong>
                    Terhességi súlyos szövődmény, preeclampsiás nőkben gyakori mozaikszó: <strong>H</strong>aemolysis, <strong>E</strong>levated <strong>L</strong>iver enzymes (emelkedett májenzimek: GOT/ASAT, GPT/ALAT), <strong>L</strong>ow <strong>P</strong>latelet count (alacsony vérlemezkeszám: 20–40 G/L). Megoldása a terhesség azonnali befejezése (szülésindítás / császármetszés). <em>Megjegyzés:</em> Terhességben enyhe vérlemezkeszám-csökkenés (70–150 G/L) fiziológiásan is előfordul a hemodilúció miatt.
                </li>
                <li>
                    <strong>5. Heparin-indukálta thrombocytopenia (HIT) I-es típus:</strong>
                    Nem-immun eredetű, benignus, enyhe és átmeneti állapot (thrombocytaszám ritkán esik 100 G/L alá). A heparin direkt vérlemezke-aggregáló tulajdonsága okozza a kezelés első 1–2 napján. A heparin adása biztonsággal folytatható.
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1.4rem;">C) Fokozott thrombocyta-destrukció: Immun-mechanizmusok</h4>
            <ul>
                <li>
                    <strong>1. Heparin-indukálta thrombocytopenia (HIT) II-es típus:</strong>
                    Súlyos, életveszélyes immunológiai kórkép! A heparin és a vérlemezkékből felszabaduló <strong>PF4 (Platelet Factor 4 – Vérlemezke 4-es faktor)</strong> egymással immunogén makromolekuláris komplexet képez. Ez ellen <strong>IgG típusú antitestek</strong> termelődnek, melyek az immunkomplex révén a vérlemezkék felszíni <strong>Fc&gamma;RIIa receptoraihoz</strong> kötődnek.
                    <br><em>Következmény:</em> Masszív thrombocyta-aktiváció, aggregáció és prokoaguláns mikropartikulumok ürülése &rarr; <strong>paradox módon súlyos arteriás és vénás thromboemboliák alakulnak ki</strong> (fehér vérrög szindróma)! A lép makrofágjai a szenzitizált thrombocytákat lebontják &rarr; thrombocytopenia alakul ki a heparin expozíció 4–14. napján (vagy korábbi expozíció esetén órákon belül).
                    <br><em>Teendő és diagnózis:</em> A heparint <strong>azonnal le kell állítani</strong>! Becslésre a klinikai <strong>4T pontrendszer</strong> szolgál (Thrombocytopenia mértéke, Timing/időzítés, Thrombosis jelenléte, oTher/egyéb okok kizárása), megerősítésre pedig anti-PF4/heparin ELISA és funkcionális tesztek (HIPA, SRA).
                </li>
                <li>
                    <strong>2. Egyéb gyógyszer-indukálta immunthrombocytopenia:</strong>
                    Gyógyszerek (pl. kinin, kinidin, para-amino-szalicilsav, szulfonamidok) fehérjéhez kötődve hapténként antitestképződést indukálnak. Az immunkomplexek abszorbeálódnak a thrombocytákra, és <strong>komplement-aktiváció</strong> vagy a <strong>RES (Reticuloendothelialis Rendszer / mononukleáris fagocita rendszer)</strong> általi lízis útján pusztítják el azokat (thrombocytaszám gyakran &lt; 10 G/L).
                </li>
                <li>
                    <strong>3. Idiopathiás (Immun) Thrombocytopeniás Purpura (ITP – Morbus Werlhof):</strong>
                    A vérlemezkék saját felszíni glikoproteinjei (leggyakrabban a <strong>GPIIb/IIIa</strong> vagy <strong>GPIb/IX</strong> komplexek) ellen termelődő <strong>autoantitestek (IgG)</strong> okozzák. Az antitesttel fedett sejteket a lép makrofágjai az Fc-receptoraikon keresztül megkötik és idő előtt elpusztítják. A vérlemezkék élettartama a normál 7–10 napról néhány órára rövidül.
                    <br><em>Klinikai formái:</em>
                    <ul>
                        <li><strong>Akut ITP:</strong> Leggyakoribb gyermekkorban; az esetek 75%-ában vírusfertőzés vagy vakcináció előzi meg. Hirtelen vérzéses tünetekkel indul, de túlnyomórészt spontán remisszióba kerül (csak 5–10%-ban válik krónikussá).</li>
                        <li><strong>Krónikus ITP:</strong> Jellemzően 20–50 éves nőknél fordul elő. Spontán gyógyulás ritka, fluktuáló lefolyású. A csontvelőben kompenzatorikus megakaryocyta-szaporulat (hyperplasia) észlelhető.</li>
                    </ul>
                </li>
                <li>
                    <strong>4. További immunthrombocytopeniák:</strong>
                    <ul>
                        <li><strong>Neonatális alloimmun thrombocytopenia (NAIT):</strong> Az anya vérlemezkéin hiányzik egy specifikus antigén (pl. Pl<sup>A1</sup> negatív), az apa révén Pl<sup>A1</sup> pozitív magzat vérlemezkéi ellen az anyában IgG antitest képződik, ami a méhlepényen átjutva magzati thrombocytopeniát és agyvérzésveszélyt okozhat.</li>
                        <li><strong>Szekunder immunthrombocytopeniák:</strong> Autoimmun kórképekhez (<strong>SLE – Szisztémás Lupus Erythematosus</strong>) vagy hematológiai malignitásokhoz (<strong>CLL – Krónikus Lymphoid Leukémia</strong>) társulnak.</li>
                    </ul>
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1.4rem;">D) Kóros megoszlással (szekvesztrációval) járó thrombocytopeniák</h4>
            <p>
                Élettani körülmények között a keringő vérlemezkék kb. 70%-a a szisztémás keringésben, 30%-a pedig a lépben raktározódik. <strong>Lépmegnagyobbodás (splenomegalia)</strong>, portális hypertonia vagy májcirrhosis esetén a lép vérlemezke-tároló kapacitása 60–90%-ra nőhet (<strong>hypersplenia</strong>), emiatt a perifériás vérben a vérlemezkeszám csökken (bár a szervezet teljes vérlemezkemennyisége normális lehet; a szám ritkán esik 40 G/L alá). Egyéb okok: hypothermia, extrakorporális keringés (műszív-tüdő gép), masszív transzfúzió (dilúciós hatás).
            </p>

            <!-- DIFFERENCIÁLDIAGNOSZTIKAI TÁBLÁZAT -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">3. Főbb mikroangiopátiás és immun-kórképek laboratóriumi elkülönítése</h3>
            <div style="overflow-x: auto; margin: 1rem 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
                    <thead>
                        <tr style="background: var(--header-grad); color: white;">
                            <th style="padding: 0.7rem; border: 1px solid var(--border);">Kórkép</th>
                            <th style="padding: 0.7rem; border: 1px solid var(--border);">Alapvető Patomechanizmus</th>
                            <th style="padding: 0.7rem; border: 1px solid var(--border);">Alvadási idők (PI, APTI, TI)</th>
                            <th style="padding: 0.7rem; border: 1px solid var(--border);">Fibrinogén & D-dimer</th>
                            <th style="padding: 0.7rem; border: 1px solid var(--border);">Vérkenet morfológia</th>
                            <th style="padding: 0.7rem; border: 1px solid var(--border);">Specifikus laborlelet / Terápia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 0.6rem; border: 1px solid var(--border); font-weight: bold;">DIC</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Szisztémás TF felszabadulás, konszumpció</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border); color: var(--danger); font-weight: bold;">Mind megnyúlt (&uarr;)</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Fibrinogén &darr;, D-dimer &uarr;&uarr;&uarr;</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Schistocyták kifejezettek</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">PC &darr;, ATIII &darr;; kiváltó ok kezelése</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.6rem; border: 1px solid var(--border); font-weight: bold;">TTP</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">ADAMTS13 hiány &rarr; UL-VWF multimerek</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border); color: var(--success); font-weight: bold;">Normálisak!</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Fibrinogén normál, D-dimer norm./enyhe &uarr;</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Schistocyták, microspherocyták</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">ADAMTS13 aktivitás &lt; 5%; Plazmaferezis!</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.6rem; border: 1px solid var(--border); font-weight: bold;">HUS</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Shiga-toxin &rarr; vese endothel sérülés</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border); color: var(--success); font-weight: bold;">Normálisak!</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Fibrinogén normál</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Schistocyták láthatók</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Karbamid/Kreatinin &uarr;&uarr;; Szupportív kezelés</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.6rem; border: 1px solid var(--border); font-weight: bold;">ITP</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Anti-GPIIb/IIIa IgG autoantitestek (RES lízis)</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border); color: var(--success); font-weight: bold;">Normálisak!</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Normális értékek</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Nagy thrombocyták (megatrombocita)</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Csontvelőben megakaryocyta hyperplasia</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.6rem; border: 1px solid var(--border); font-weight: bold;">HIT II</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Heparin-PF4 elleni IgG &rarr; Fc&gamma;RIIa aktiváció</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border); color: var(--success); font-weight: bold;">Általában normális</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">D-dimer emelkedhet (thrombozis!)</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Thrombocyta aggregátumok</td>
                            <td style="padding: 0.6rem; border: 1px solid var(--border);">Heparin azonnali leállítása; 4T teszt, ELISA</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- THROMBOCYTOSIS ÉS MYELOPROLIFERATÍV KÓRKÉPEK -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">4. Emelkedett vérlemezkeszám: Thrombocytosis és Thrombocythaemia</h3>
            <p>
                A vérlemezkék számának felső referencia-érték fölé emelkedését (&gt; 450 G/L) <strong>thrombocytosisnak</strong> nevezzük. 
                Klinikailag gyakran tünetszegény melléklelet, de kóros funkciójú vérlemezkék esetén paradox vérzések, míg extrém magas számnál <strong>thromboemboliás szövődmények</strong> és vazomotoros panaszok (fejfájás, szédülés, acrocyanosis, paraesthesia) jelentkezhetnek.
            </p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-top: 1rem;">
                <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 8px; padding: 1.2rem;">
                    <h4 style="color: var(--primary-light); margin-top: 0;">Reaktív (Szekunder) Thrombocytosis (az esetek ~80%-a)</h4>
                    <p style="font-size: 0.95rem;">A thrombocytaszám ritkán haladja meg az 1000 G/L-t. A megemelkedett szint valamilyen külső ingerre adott válaszreakció:</p>
                    <ul style="font-size: 0.95rem;">
                        <li><strong>Akut fázis reakció / Szisztémás gyulladás:</strong> Az <strong>IL-6 (Interleukin-6)</strong> serkenti a májban a <strong>TPO (Thrombopoetin)</strong> szintézisét, ami fokozza a csontvelői képzést.</li>
                        <li><strong>Akut vérvesztés vagy sebészi beavatkozás után.</strong></li>
                        <li><strong>Splenectomia (lépmegszüntetés) után:</strong> Megszűnik a fiziológiás léptárolás és lebontás.</li>
                        <li><strong>Vashiányos anaemia:</strong> A vashiány mechanizmusa nem teljesen tisztázott módon serkenti a megakaryocytopoesist.</li>
                        <li>Fizikai megterhelés, stressz (katekolamin-hatás).</li>
                    </ul>
                </div>

                <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 8px; padding: 1.2rem;">
                    <h4 style="color: var(--accent); margin-top: 0;">Klónális (Primer) Myeloproliferatív Kórképek (MPN)</h4>
                    <p style="font-size: 0.95rem;">A csontvelői multipotens őssejt autonóm, malignus proliferációja okozza (thrombocytaszám elérheti az 500–2000 G/L-t is):</p>
                    <ul style="font-size: 0.95rem;">
                        <li><strong>Essentialis Thrombocythaemia (ET):</strong> Izolált, nagymértékű megakaryocyta-proliferáció. Jellemzőek a mutációk (<em>JAK2</em> V617F, <em>CALR</em>, <em>MPL</em>). A perifériás kenetben óriásthrombocyták és megakaryocyta-törmelékek láthatók. Recurráló vérzések és trombózisok kísérik.</li>
                        <li><strong>Polycythaemia Vera (PV):</strong> Főként a vörösvértest-vonal, de gyakran a thrombocyták egyidejű túlszaporodásával jár.</li>
                        <li><strong>Krónikus Myeloid Leukémia (CML):</strong> Philadelphia kromoszóma / <em>BCR-ABL1</em> fúziós gén jelenlétével jellemezhető.</li>
                        <li><strong>Primer Myelofibrosis (PMF):</strong> Korai szakaszban thrombocytosis, később csontvelői fibrosis és extramedullaris vérképzés.</li>
                    </ul>
                </div>
            </div>

            <!-- ÖSSZEFOGLALÁS -->
            <div style="margin-top: 2rem; padding: 1.2rem; background: rgba(214, 158, 46, 0.1); border-radius: 8px; border-left: 5px solid var(--accent);">
                <h4 style="color: var(--text); margin-top: 0;">Diagnosztikai algoritmus lényege</h4>
                <p style="margin-bottom: 0; font-size: 0.95rem;">
                    A számbeli vérlemezke-eltérések kivizsgálásának első lépése az <strong>ál-thrombocytopenia kizárása</strong> vérkenet alapján. 
                    Csökkent számnál a döntő lépés az <strong>alvadási idők (DIC vs. egyéb)</strong>, a <strong>hemolízis- és vesefunkciós paraméterek (TTP/HUS)</strong>, az <strong>anamnézis (heparinkezelés &rarr; HIT, fertőzés &rarr; ITP)</strong> és a perifériás kenet morfológiájának összekapcsolása. 
                    Emelkedett vérlemezkeszámnál az <strong>akut fázis fehérjék (CRP, ferritin)</strong> vizsgálatával különíthető el a reaktív forma a klonális myeloproliferatív kórképektől.
                </p>
            </div>

        </div>
    `
});
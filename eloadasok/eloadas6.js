// ============================================================================
// KLINIKAI BIOKÉMIA ÉS LABORATÓRIUMI DIAGNOSZTIKA
// 6. Előadás: Vérkészítmények előállítása, típusai és tárolás alatti változásai
// ============================================================================

window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas6",
    title: "6. Előadás: Vérkészítmények előállítása, típusai és tárolás alatti változásai",
    shortName: "Vérkészítmények & Tárolás",
    html: `
        <div style="font-size: 0.96rem; line-height: 1.62; color: inherit;">

            <!-- BEVEZETÉS -->
            <div style="background: rgba(43, 108, 176, 0.08); border-left: 5px solid var(--primary-light); padding: 1.1rem; border-radius: 6px; margin-bottom: 1.5rem;">
                <h3 style="margin-top: 0; color: var(--primary); font-size: 1.25rem;">🩸 I. Rész: Véradás, donoralkalmasság és vértartósítás</h3>
                <p style="margin-bottom: 0;">
                    Magyarországon a vérgyűjtés <strong>önkéntes, térítésmentes véradóktól</strong> történik, amelyet kizárólag az <strong>Országos Vérellátó Szolgálat (OVSZ)</strong> területi szervei és a velük szerződésben álló kórházi transzfúziós osztályok végezhetnek. Vérátömlesztés kizárólag magát egészségesnek tartó és erről írásban nyilatkozó, jogszabályok szerint kivizsgált donortól levett, fertőzőágens-szűrésben negatív és vércsoport-szerológiailag kivizsgált vérkészítménnyel történhet.
                </p>
            </div>

            <!-- RÖVIDÍTÉSEK ÉS KULCSFOGALMAK -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                📖 1. Rövidítések feloldása és kulcsfogalmak
            </h4>

            <table style="width: 100%; border-collapse: collapse; margin: 0.8rem 0 1.4rem 0; font-size: 0.88rem;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.04); text-align: left;">
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 22%;">Rövidítés</th>
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 34%;">Teljes megnevezés</th>
                        <th style="padding: 7px 10px; border: 1px solid var(--border); width: 44%;">Biokémiai / Klinikai jelentőség</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>OVSZ / WHO</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Országos Vérellátó Szolgálat / World Health Organization</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Hazai vérellátó szervezet, illetve a nemzetközi donorkiválasztási irányelvek kiadója.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>ACD / CPD / CPDA-1</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Acid-Citrate-Dextrose / Citrate-Phosphate-Dextrose (+Adenin)</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Véralvadásgátló és tápoldatok: a citrát Ca<sup>2+</sup>-ot köt, a foszfát pufferel, a dextróz energiaforrás, az adenin az ATP-szintet védi (35 napos eltarthatóság).</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>VVT / THR / FVS</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Vörösvértest / Thrombocyta / Fehérvérsejt</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Zárt zsákrendszerben szeparált sejtes vérkomponensek.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>FFP / Cryo / PR-Cryo</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Fresh Frozen Plasma / Cryoprecipitátum / Patogén-redukált Cryo</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">FFP: friss fagyasztott plazma (összes alvadási faktor); Cryo: FFP +4 &deg;C-on történő felolvasztásakor kiváló fehér csapadék (FVIII, vWF, FXIII, fibrinogén).</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>DMSO</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Dimetil-szulfoxid</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Krioprotektív anyag thrombocyták (-80 &deg;C / -196 &deg;C) mélyfagyasztásához (VVT-hez 20%-os glicerolt használnak).</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>PCC / aPCC (FEIBA)</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Prothrombin Komplex Koncentrátum / aktivált PCC</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">4-faktoros PCC: II, VII, IX, X, Protein C és S; aPCC (FEIBA = Factor Eight Inhibitor Bypass Activity): inhibitoros hemofíliában használt stabil gyógyszer.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>IVIG</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Intravénás Immunglobulin</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Poolozott humán plazmából iparilag gyártott, vírusinaktivált stabil immunglobulin-készítmény.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>GvHD / AIHA</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Graft-versus-Host Disease / Autoimmun Hemolitikus Anaemia</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">GvHD kivédésére besugárzott (25–50 Gy), AIHA-ban és IgA-hiányban közegcserélt (mosott) vvt adandó.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>2,3-DPG / ATP</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">2,3-Difoszfoglicerát / Adenozin-trifoszfát</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Tárolás során csökkenő VVT-metabolitok: az ATP-vesztés rontja a membrán deformálhatóságát, a 2,3-DPG csökkenése balra tolja a Hb-O<sub>2</sub> disszociációs görbét.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>HBsAg / anti-HBc / CMV</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Hepatitis B felszíni Ag / mag-Ab / Citomegalovírus</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Minden véradást szűrnek HBsAg, anti-HBc (első véradóknál), anti-HCV, HIV-1/2 és syphilis irányába; CMV-t csak szervtranszplantáció előtt szűrnek.</td>
                    </tr>
                </tbody>
            </table>

            <div style="background: rgba(0,0,0,0.02); border: 1px solid var(--border); border-radius: 6px; padding: 0.9rem; margin-bottom: 1.4rem;">
                <strong>🔑 Kulcsfogalmak meghatározása:</strong>
                <ul style="margin-left: 1.4rem; margin-bottom: 0; margin-top: 0.3rem;">
                    <li><strong>Labilis vérkészítmények:</strong> Teljes vér komponensekre történő szétválasztásával vagy aferezissel az OVSZ-ben előállított, rövid lejáratú biológiai készítmények (vvt-, thrombocyta-, fehérvérsejt-koncentrátum és FFP).</li>
                    <li><strong>Stabil vérkészítmények:</strong> Gyógyszergyárban, ipari körülmények között, poolozott humán plazmából frakcionálással előállított, vírusinaktivált, 1 évnél hosszabb lejáratú gyógyszerek (alvadási faktorok, albumin, immunglobulinok).</li>
                    <li><strong>Leukodepleció (szűrés):</strong> Fehérvérsejt-eltávolító szűrők alkalmazása, amely csökkenti a HLA-alloimmunizációt, a lázas nem hemolitikus transzfúziós reakciókat, a sejt-közvetített vírusátvitelt (pl. CMV) és a citokin-felszabadulást.</li>
                    <li><strong>Irradiáció (25–50 Gray besugárzás):</strong> A vérkészítményben maradt donor T-limfociták DNS-ének károsítása a transzfúzióhoz társuló Graft-versus-Host betegség (TA-GvHD) megelőzése céljából.</li>
                </ul>
            </div>

            <!-- DONOROK, ALKALMASSÁG ÉS VÉRTARTÓSÍTÁS -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                🩺 2. Donoralkalmassági kritériumok, szűrés és vértartósítás
            </h4>

            <div style="margin-bottom: 1.1rem;">
                <h5 style="color: var(--primary-light); margin-bottom: 0.25rem; font-size: 1rem;">Alkalmassági feltételek és kizárási okok (WHO / hazai irányelvek)</h5>
                <ul>
                    <li><strong>Alapkritériumok:</strong> Életkor <strong>18–60 év</strong> (rendszeres véradó 65 éves korig); testsúly <strong>50–140 kg</strong> (1 egység = <strong>450 mL &plusmn; 10%</strong> vér + 63 mL tartósító oldat; limit: max. 10,5 mL/ttkg).</li>
                    <li><strong>Laboratóriumi minimumok:</strong> Hemoglobin: <strong>nők &ge; 120 g/L, férfiak &ge; 130 g/L</strong>; aferezis thrombocyta-donornál THR &ge; 150 G/L; plazmaferezis-donornál összfehérje &ge; 60 g/L.</li>
                    <li><strong>Gyakoriság:</strong> Teljes véradás: <strong>férfiak évente max. 5-ször, nők évente max. 4-szer</strong> (két véradás között legalább <strong>56 napnak</strong> kell eltelnie). Thrombocytapheresis: 3 naponta, max. 24-szer/év. Autológ véradás: műtét előtt 3–4 napig vehető le, két levétel között min. 7 nap szünettel.</li>
                    <li><strong>Kizárási szabályok (WHO):</strong> <em>Végleges kizárás:</em> anamnézisben szereplő anaphylaxia, dermatomyositis, inzulinnal kezelt vagy szövődményes diabetes, intravénás droghasználat, HHV-8 fertőzés. <em>Átmeneti halasztás:</em> terhességmegszakítás után 6 hónap; akupunktúra, piercing, tetoválás után 12 hónap; egyszerű fogászati kezelés után 24 óra, foghúzás/gyökérkezelés után 7 nap; antibiotikum-kúra vagy lázas betegség teljes gyógyulása után 14 nap; szimptómás herpes után min. 28 nap; védőoltás után 48 óra. (Menstruáció és jól beállított diétás/orális diabetes nem kizáró ok).</li>
                    <li><strong>Kötelező fertőzőágens-szűrés és reziduális kockázat:</strong> HBsAg (és első véradóknál anti-HBc), anti-HCV, HIV-1/2 Ab, syphilis szerológia. Átviteli kockázat: HBV 1:63 000, HCV 1:103 000, HIV-1 1:587 000, HIV-2 &lt; 1:1 000 000.</li>
                </ul>
            </div>

            <div style="margin-bottom: 1.3rem;">
                <h5 style="color: var(--primary-light); margin-bottom: 0.25rem; font-size: 1rem;">A vértartósító oldatok fejlődése és a CPDA-1 összetevői</h5>
                <p style="margin-bottom: 0.4rem;">
                    Történeti mérföldkövek: <strong>1914</strong> Citrát &rarr; <strong>1916</strong> Citrát + Dextróz &rarr; <strong>1943</strong> ACD (Acid-Citrate-Dextrose) &rarr; <strong>1957</strong> CPD &rarr; <strong>1962</strong> <strong>CPDA-1</strong> (+adenin, amely <strong>35 napra</strong> növelte a vvt-k eltarthatóságát).
                </p>
                <ul>
                    <li><strong>Citrát:</strong> Kalciumionok megkötésével (kelátképzés) gátolja a véralvadási kaszkádot.</li>
                    <li><strong>Foszfát:</strong> A citrát-foszfát pufferrendszer részeként ellensúlyozza a glikolízis során képződő tejsav savanyító hatását (pH-stabilizálás).</li>
                    <li><strong>Dextróz (glükóz):</strong> Energiát (ATP-t) szolgáltat a vörösvértestek anaerob glikolíziséhez.</li>
                    <li><strong>Adenin:</strong> Az ATP-szintézis szubsztrátja, így lassabban csökken a vvt-k ATP-tartalma.</li>
                </ul>
            </div>

            <!-- VÉRKÉSZÍTMÉNYEK ELŐÁLLÍTÁSA ÉS TÍPUSAI -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                🏭 3. Vérkomponensek szeparálása és a készítmények típusai
            </h4>

            <p style="margin-bottom: 0.5rem;">
                A komponensek szeparálása <strong>teljesen zárt, műanyag csövekkel összekötött többszörös zsákrendszerben</strong> történik (elkerülve a bakteriális kontaminációt). A levett teljes vért 2–6 &deg;C-on tárolják (ha thrombocyta készül belőle, akkor <strong>20–24 &deg;C-on</strong> tartják és <strong>8 órán belül</strong> szeparálják!). Először <em>alacsony fordulatszámú (lágy) centrifugálással</em> elválasztják a vvt-masszát a thrombocytában gazdag plazmától (PRP), majd plazma-extraktorral átpréselik a PRP-t, és <em>magas fordulatszámú (erős) centrifugálással</em> szétválasztják a thrombocyta-koncentrátumra és a felülúszó plazmára (FFP).
            </p>

            <table style="width: 100%; border-collapse: collapse; margin: 0.6rem 0 1.4rem 0; font-size: 0.86rem;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.04); text-align: left;">
                        <th style="padding: 6px 9px; border: 1px solid var(--border); width: 22%;">Készítmény</th>
                        <th style="padding: 6px 9px; border: 1px solid var(--border); width: 24%;">Tárolás és lejárat</th>
                        <th style="padding: 6px 9px; border: 1px solid var(--border); width: 54%;">Klinikai indikációk és speciális szabályok</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>Vörösvértest (VVT) koncentrátum</strong><br><em>(Fagyasztott VVT)</em></td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>+4 &deg;C &plusmn; 2 &deg;C: 35 nap</strong><br><em>(-196 &deg;C-on 20% glicerolban: 10 év)</em></td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">Akut vérvesztésnél: 30% vértérfogat-vesztés relatív, <strong>40% abszolút indikáció</strong>. Hb &lt; 60 g/L szinte mindig, &gt; 100 g/L ritkán indokolt; krónikus normovolaemiás anaemiában &lt; 70 g/L-nél jelentkeznek tünetek. 2018.11.01-től csak additív oldatban reszuszpendált VVT készül.</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>Közegcserélt (mosott) &amp; Szűrt &amp; Irradiált VVT</strong></td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">Előállítás után rövid lejáratú</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>Mosott (plazmamentes):</strong> IgA-hiány, anaphylaxia, AIHA. <strong>Szűrt (leukodepletált):</strong> FNHTR, HLA-alloimmunizáció és CMV-átvitel csökkentése. <strong>Irradiált (25–50 Gy):</strong> TA-GvHD megelőzése (immunszuprimáltak, rokontól kapott vér, kis súlyú újszülött, intrauterin transzfúzió, HLA-kompatibilis THR).</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>Thrombocyta (THR) koncentrátum</strong><br><em>(Poolozott 4E vs. Aferezis 1 donor)</em></td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>+22 &deg;C &plusmn; 2 &deg;C: 5 nap</strong> folyamatos mozgatással<br><em>(Szűrt, poolozott: <strong>6 óra!</strong>; DMSO fagyasztott: 2–10 év, felolvasztva 6 óra)</em></td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>Abszolút indikáció:</strong> THR &lt; 5 G/L és vérzés (GIT, urogenitális, KIR). <strong>Relatív:</strong> &lt; (5)–10–(20) G/L. <em>Ellenjavallt:</em> ITP, TTP, HUS, PTP! 1 aferezis egység (3,0&times;10<sup>11</sup> THR) ~30 G/L-rel emeli a THR-számot (poolozott: 20–40 G/L). Keringésben megjelenés: normálisan 2/3 (65%), splenectomia után 90%, hyperspleniában 15–20%. Fertilis nőknek Rh-kompatibilisen adandó!</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>Friss fagyasztott plazma (FFP) &amp; Cryoprecipitátum</strong></td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>&lt; -25 &deg;C: 2 év</strong><br><strong>-25 és -18 &deg;C között: 3 hónap</strong><br><em>(Olvasztás: 20–30 perc)</em></td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>FFP (180–250 mL, ABO-kompatibilis):</strong> DIC, ritka faktorhiány, májbetegség, TTP (ADAMTS13), masszív transzfúzió, Syncumar-vérzés. <strong>Cryo (10–15 mL, dózis: 10–20 E):</strong> FVIII, vWF, FXIII és fibrinogén pótlására.</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>Stabil plazmakészítmények</strong></td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">&gt; 1 év (vírusinaktivált gyógyszerek)</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">FVIII, FIX, FXI, FXIII, vWF, fibrinogén koncentrátum, 3- és 4-faktoros PCC, <strong>aPCC (FEIBA)</strong>, albumin, im. és intravénás immunglobulinok (IVIG). (PCC-nél thrombosis és allergia kockázata!).</td>
                    </tr>
                </tbody>
            </table>

            <!-- TÁROLÁS ALATTI VÁLTOZÁSOK -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                📉 4. A teljes vér és a VVT-készítmények tárolás alatti változásai (0. &rarr; 35. nap)
            </h4>

            <div style="background: rgba(198, 40, 40, 0.06); border: 1px solid var(--border); border-radius: 6px; padding: 0.9rem; margin-bottom: 0.9rem;">
                <strong>⚠️ Tárolási lézió (Storage lesion) – Biokémiai eltolódások 35 nap alatt:</strong>
                <ul style="margin-left: 1.3rem; margin-bottom: 0; margin-top: 0.3rem;">
                    <li><strong>Emelkedő paraméterek:</strong> Plazma <strong>K<sup>+</sup></strong> (3,3 &rarr; 17,2–21,7 mEq/L, a Na<sup>+</sup>/K<sup>+</sup>-pumpa leállása és hemolízis miatt &rarr; hyperkalaemia veszélye!), teljes vér <strong>laktát</strong> (19 &rarr; 202 mg/dL), <strong>ammónia</strong> (82 &rarr; 703 &mu;g/dL), plazma <strong>LDH</strong> (296 &rarr; 1816 U) és <strong>szabad plazma hemoglobin</strong> (0,5 &rarr; 45,6 mg/dL).</li>
                    <li><strong>Csökkenő paraméterek:</strong> <strong>pH</strong> (7,16 &rarr; 6,73, tejsavas acidózis), plazma <strong>dextróz</strong> (432 &rarr; 282 mg/dL), <strong>Na<sup>+</sup></strong> (169 &rarr; 153 mEq/L), <strong>bikarbonát</strong> (12,0 &rarr; 8,0 mEq/L), valamint a vvt-k <strong>2,3-DPG</strong> (13,2 &rarr; 0,7 &mu;mol/g Hb; fokozott O<sub>2</sub>-affinitás, rosszabb szöveti O<sub>2</sub>-leadás) és <strong>ATP</strong> szintje (4,18 &rarr; 2,40 &mu;mol/g Hb).</li>
                </ul>
            </div>

            <p style="font-size: 0.9rem; margin-bottom: 0;">
                <em>Megjegyzés a thrombocyták életképességéről:</em> Friss THR-eknél a keringésben megjelenés ~65% (túlélés ~5%), 5 napig tárolt THR-eknél 40–50% (túlélés 9–11%), míg fagyasztott THR-eknél csak 30–40% (túlélés 9–11%, azonnali vérzéscsillapító hatás mérsékelt &rarr; 2,5&times; dózis szükséges).
            </p>

        </div>
    `
});

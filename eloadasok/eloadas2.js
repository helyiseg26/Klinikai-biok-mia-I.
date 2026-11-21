// ============================================================================
// KLINIKAI BIOKÉMIA ÉS LABORATÓRIUMI DIAGNOSZTIKA
// 2. Előadás: A vitaminanyagcsere zavarai és laboratóriumi diagnosztikája
// ============================================================================

window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas2",
    title: "2. Előadás: A vitaminanyagcsere zavarai és laboratóriumi diagnosztikája",
    shortName: "Vitaminanyagcsere",
    html: `
        <div style="font-size: 0.98rem; line-height: 1.65; color: inherit;">

            <!-- BEVEZETŐ ÉS FOGALOMTÁR -->
            <div style="background: rgba(43, 108, 176, 0.08); border-left: 5px solid var(--primary-light); padding: 1.2rem; border-radius: 6px; margin-bottom: 1.8rem;">
                <h3 style="margin-top: 0; color: var(--primary); font-size: 1.25rem;">📌 Bevezetés és Alapfogalmak</h3>
                <p>
                    A <strong>vitaminok</strong> olyan kismolekulájú, esszenciális szerves vegyületek, amelyeket az emberi szervezet egyáltalán nem, vagy nem elegendő mennyiségben képes szintetizálni (pl. a niacin triptofánból vagy a D-vitamin UV-B expozíció révén képződhet, de szintjük gyakran exogén pótlást igényel). A normális sejtes metabolizmushoz, növekedéshez és funkciók fenntartásához mikrogrammos vagy milligrammos nagyságrendben nélkülözhetetlenek.
                </p>
            </div>

            <!-- RÖVIDÍTÉSEK ÉS KULCSFOGALMAK RÉSZLETES JEGYZÉKE -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                📖 1. Rövidítések feloldása és kulcsfogalmak definíciója
            </h3>
            
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0 1.8rem 0; font-size: 0.9rem;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.04); text-align: left;">
                        <th style="padding: 8px 12px; border: 1px solid var(--border); width: 22%;">Rövidítés / Fogalom</th>
                        <th style="padding: 8px 12px; border: 1px solid var(--border); width: 38%;">Hivatalos megnevezés</th>
                        <th style="padding: 8px 12px; border: 1px solid var(--border); width: 40%;">Diagnosztikai / Élettani jelentőség</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>IU (NE)</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">International Unit (Nemzetközi Egység)</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Biológiai aktivitáson alapuló nemzetközi dózismérce (pl. A-, D-, E-vitamin).</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>TPP</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Tiamin-pirofoszfát</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">A B<sub>1</sub>-vitamin aktív koenzime ketosavak dekarboxilálásában és a pentóz-foszfát útban.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>FMN / FAD</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Flavin-mononukleotid / Flavin-adenin-dinukleotid</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">A B<sub>2</sub>-vitamin aktív kofaktorai redoxi reakciókban és a légzési láncban.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>NAD / NADP</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Nikotinamid-adenin-dinukleotid (-foszfát)</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">A B<sub>3</sub>-vitamin aktív formái; elektron- és hidridion-transzfer (glikolízis, citrátkör, szintézisek).</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>PLP</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Piridoxál-5-foszfát</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">A B<sub>6</sub>-vitamin aktív koenzime transzaminázok (ASAT, ALAT) és dekarboxilázok számára.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>THF</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Tetrahidrofolát</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">A folsav (B<sub>9</sub>) funkcionális kofaktora; egy szénatomos csoportok átvivője (purin/pirimidin szintézis).</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>IF</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Intrinsic Faktor (Belső faktor)</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Gyomor parietális sejtjei által termelt glikoprotein; nélkülözhetetlen a B<sub>12</sub> ileális felszívódásához.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>TCII</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Transzkobalamin II</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">A véráramban keringő transzportfehérje, amely a felszívódott B<sub>12</sub>-vitamint a sejtekhez szállítja.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>MCV</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Mean Corpuscular Volume (Átlagos vvt-térfogat)</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Referencia: 80–100 fL. Értéke >100 fL megaloblasztos anaemiában (B<sub>12</sub>- vagy folsavhiány).</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>Gla</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">gamma-Karboxiglutaminsav</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">K-vitamin-függő poszttranszlációs módosulás; Ca<sup>2+</sup>-kötő kelátképző domén alvadási faktorokon (II, VII, IX, X).</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>PI / INR</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Prothrombin Idő / Nemzetközi Normalizált Arány</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Extrinsic alvadási útvonal mérője; K-vitamin hiányban vagy kumarinhatásra megnyúlik (INR emelkedik).</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>ETKAC / EGRAC</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Erythrocyte Transketolase / Glutathione Reductase Activation Coeff.</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Funkcionális VVT-enzimaktivitási hányadosok B<sub>1</sub>- és B<sub>2</sub>-ellátottság felmérésére.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>HPLC / LC-MS</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Nagyhatékonyságú Folyadékkromatográfia / Tömegspektrometria</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Kvantitatív arany standard analitikai módszerek zsíroldékony vitaminok és izoformák közvetlen mérésére.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);"><strong>TPN</strong></td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Total Parenteral Nutrition (Teljes parenterális táplálás)</td>
                        <td style="padding: 8px 12px; border: 1px solid var(--border);">Gastrointestinalis traktust megkerülő infúziós táplálás; vitaminpótlás nélkül iatrogén hiányhoz vezet.</td>
                    </tr>
                </tbody>
            </table>

            <div style="background: rgba(0,0,0,0.02); border: 1px solid var(--border); border-radius: 8px; padding: 1rem; margin-bottom: 1.8rem;">
                <h4 style="margin: 0 0 0.5rem 0; color: var(--primary);">🔬 Kulcsfogalmak Klinikai Meghatározása:</h4>
                <ul style="margin-left: 1.5rem; margin-bottom: 0;">
                    <li><strong>Szubklinikai deficiencia:</strong> Olyan állapot, amelyben a szervezet vitaminraktárai és szöveti szintjei már kimerültek, a specifikus enzimek aktivitása csökkent, de még nem alakultak ki klasszikus fizikai vagy morfológiai tünetek.</li>
                    <li><strong>Megaloblastos anaemia:</strong> A DNS-szintézis gátlása miatti sejtosztódási zavar a csontvelőben, miközben az RNS- és fehérjeszintézis zajlik. Ennek következménye a mag-citoplazma érési disszociáció és óriás vérképző sejtek (megaloblasztok), valamint makrociter (MCV > 100 fL) vörösvértestek képződése.</li>
                    <li><strong>Streptavidin-Biotin immunoassay interferencia:</strong> Analitikai mérési műtermék; a vérben lévő masszív szabad biotin felesleg kompetitíven gátolja a reagens sztreptavidin kötőhelyeit, ami szendvics assay esetén ál-alacsony (pl. TSH), kompetitív assay esetén ál-magas (pl. FT4, FT3) mérési eredményt okoz.</li>
                </ul>
            </div>

            <!-- PATOMECHANIZMUS ÉS NAPI SZÜKSÉGLETEK -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                ⚙️ 2. A vitaminhiány etiológiája, fokozatai és a napi szükségletek
            </h3>

            <p><strong>A szükségletet befolyásoló tényezők:</strong> Testtömeg, fizikai aktivitás foka, metabolikus ráta, növekedési periódus, terhesség és laktáció.</p>

            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.04);">
                        <th style="padding: 6px 10px; border: 1px solid var(--border);">Vitamin megnevezése</th>
                        <th style="padding: 6px 10px; border: 1px solid var(--border);">Ajánlott napi bevitel (RDA)</th>
                        <th style="padding: 6px 10px; border: 1px solid var(--border);">Vitamin megnevezése</th>
                        <th style="padding: 6px 10px; border: 1px solid var(--border);">Ajánlott napi bevitel (RDA)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>A-vitamin</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">5000 IU</td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>E-vitamin</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">15 IU</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>Tiamin (B<sub>1</sub>)</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">1.5 mg</td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>K-vitamin</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">70 &mu;g</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>Riboflavin (B<sub>2</sub>)</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">1.8 mg</td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>Folsav (B<sub>9</sub>)</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">0.4 mg (400 &mu;g)</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>Niacin (B<sub>3</sub>)</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">20 mg</td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>Kobalamin (B<sub>12</sub>)</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">3 &mu;g</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>Piridoxin (B<sub>6</sub>)</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">2 mg</td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>Aszkorbinsav (C)</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">45 mg</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>D-vitamin</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">400 IU</td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);"><strong>Pantoténsav (B<sub>5</sub>)</strong></td>
                        <td style="padding: 6px 10px; border: 1px solid var(--border);">Nincs egzakt RDA (Unknown)</td>
                    </tr>
                </tbody>
            </table>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A vitaminhiány kialakulásának okai:</h4>
            <ol style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li><strong>Elégtelen bevitel:</strong> Nem megfelelő étrend, éhezés, krónikus alkoholbetegség.</li>
                <li><strong>Felszívódási zavarok (Abszorpció zavar):</strong> Malnutríció, malabszorpciós szindrómák (cöliákia, Crohn-betegség, bariatrikus műtét, exocrin pancreas elégtelenség, epesavhiány).</li>
                <li><strong>Veleszületett metabolikus zavarok:</strong> Enzimopátiák, ahol a vitamin aktív kofaktorrá alakulása vagy transzportja károsodott.</li>
                <li><strong>Megnövekedett metabolikus igény:</strong> Terhesség, szoptatás, intenzív gyermekkori növekedés, lázas állapotok, hyperthyreosis.</li>
                <li><strong>Fokozott vesztés:</strong> Krónikus hasmenés, fehérjevesztő enteropathia vagy nefropátia.</li>
                <li><strong>Iatrogén okok / Terápia:</strong> Hemodialízis (vízoldékony vitaminok dializátumba mosódása), vitaminmentes TPN, gyógyszerinterakciók.</li>
            </ol>

            <h4 style="color: var(--primary-light);">A vitaminhiány kialakulásának stádiumai:</h4>
            <div style="display: flex; gap: 10px; margin: 0.8rem 0; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 220px; background: rgba(0,0,0,0.03); border: 1px solid var(--border); border-radius: 6px; padding: 10px;">
                    <strong>1. Raktárak kimerülése:</strong> Mobilizáció a raktárakból (pl. máj, zsírszövet), a plazmaszint még kompenzált lehet.
                </div>
                <div style="flex: 1; min-width: 220px; background: rgba(0,0,0,0.03); border: 1px solid var(--border); border-radius: 6px; padding: 10px;">
                    <strong>2. Szöveti vitaminhiány:</strong> Szubklinikai deficiencia. Az intracelluláris enzimek kofaktortelítettsége csökken, tünetmentes.
                </div>
                <div style="flex: 1; min-width: 220px; background: rgba(0,0,0,0.03); border: 1px solid var(--border); border-radius: 6px; padding: 10px;">
                    <strong>3. Valódi deficiencia:</strong> Manifeszt hiánytünetek, szervi diszfunkciók, irreverzibilis morfológiai károsodások.
                </div>
            </div>

            <!-- VÍZOLDÉKONY VITAMINOK -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.8rem;">
                💧 3. Vízoldékony vitaminok (B-komplex és C-vitamin)
            </h3>
            <p>Jellemzőjük a gyors renális elimináció; a szervezetben általában nem vagy alig raktározódnak (kiemelt kivétel a B<sub>12</sub>, mely a májban 3–5 évre elegendő raktárral bír). Túladagolásuk ritka, kivéve iatrogén megadózisok esetén.</p>

            <div style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--primary-light); margin-bottom: 0.3rem;">B<sub>1</sub>-vitamin (Tiamin)</h4>
                <ul>
                    <li><strong>Aktív forma:</strong> Tiamin-pirofoszfát (TPP).</li>
                    <li><strong>Funkció:</strong> C-C kötések hasításának koenzime; ketosavak (piruvát-dehidrogenáz, &alpha;-ketoglutarát-dehidrogenáz) oxidatív dekarboxilálása és a pentóz-foszfát út transzketoláz reakciójának kofaktora.</li>
                    <li><strong>Hiánybetegség:</strong>
                        <ul>
                            <li><strong>Beriberi:</strong> <em>Nedves beriberi:</em> perifériás vazodilatáció, nátrium- és vízretenció (ödéma), magas perctérfogatú szívelégtelenség. <em>Száraz beriberi:</em> perifériás szenzomotoros neuropathia, izomatrófia.</li>
                            <li><strong>Wernicke–Korsakoff szindróma:</strong> Krónikus alkoholizmusban. Akut fázis: <em>Wernicke encephalopathia</em> (nystagmus, ophthalmoplegia, ataxia, zavartság). Krónikus fázis: <em>Korsakoff pszichózis</em> (súlyos anterográd/retrográd amnézia, konfabuláció). B<sub>1</sub> hiányban adott glükóz infúzió laktátacidózist és akut állapotromlást provokál!</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--primary-light); margin-bottom: 0.3rem;">B<sub>2</sub>-vitamin (Riboflavin)</h4>
                <ul>
                    <li><strong>Aktív formák:</strong> Riboflavin + 1 AMP = Flavin-mononukleotid (FMN); Riboflavin + 2 AMP = Flavin-adenin-dinukleotid (FAD).</li>
                    <li><strong>Funkció:</strong> Kofaktor oxidációs-redukciós folyamatokban, enzimek prosztetikus csoportja (légzési lánc I. és II. komplex, citrátkör, zsírsav &beta;-oxidáció).</li>
                    <li><strong>Forrás:</strong> Hús, tej, tojás, gabonafélék.</li>
                    <li><strong>Deficiencia:</strong> Krónikus alkoholizmusban gyakori (rendszerint B<sub>1</sub> és B<sub>3</sub> hiánnyal kombinálódva). Tünetei: <em>glossitis</em> (magenta-nyelv), <em>angularis stomatitis</em> (szájzugberepedés), seborrhoeás dermatitis, normocytás anaemia, emésztőszervi zavarok.</li>
                </ul>
            </div>

            <div style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--primary-light); margin-bottom: 0.3rem;">B<sub>3</sub>-vitamin (Niacin / Nikotinsav)</h4>
                <ul>
                    <li><strong>Aktív származékok:</strong> Nikotinamid-adenin-dinukleotid (NAD), Nikotinamid-adenin-dinukleotid-foszfát (NADP).</li>
                    <li><strong>Funkció:</strong> Glikolízis, citrátkör, oxidatív foszforiláció, zsírsavszintézis, DNS-javítási mechanizmusok (PARP enzim).</li>
                    <li><strong>Forrás:</strong> Exogén táplálék (fehérjedús húsok, hüvelyesek) és endogén szintézis esszenciális triptofán aminosavból (60 mg triptofánból 1 mg niacin képződik; a konverzió B<sub>6</sub>-vitamint igényel).</li>
                    <li><strong>Hiánybetegség: Pellagra</strong> (a "4D" betegség): <strong>Dermatitis</strong> (szimmetrikus, napfénynek kitett helyeken jelentkező fotoszenzitív bőrpír és hyperkeratosis, ún. Casal-gallér), <strong>Diarrhoea</strong> (hasmenés, bélhám atrófia), <strong>Dementia</strong> (depresszió, delírium, kognitív hanyatlás), valamint kezeletlen esetben <strong>Death</strong> (halál). További tünetek: súlyvesztés, anaemia.</li>
                </ul>
            </div>

            <div style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--primary-light); margin-bottom: 0.3rem;">B<sub>6</sub>-vitamin (Piridoxin, Piridoxál, Piridoxamin)</h4>
                <ul>
                    <li><strong>Aktív forma:</strong> Piridoxál-5-foszfát (PLP).</li>
                    <li><strong>Funkció:</strong> Az aminosav-metabolizmus központi koenzime (transzaminálás [ASAT, ALAT], dekarboxilálás [GABA, szerotonin, hisztamin képződés], hem szintézis [&delta;-aminolevulinsav szintetáz]).</li>
                    <li><strong>Hiányt okozó gyógyszerek:</strong> Izoniazid (INH – antituberkulotikum, hidrazon komplexet képezve inaktiválja a PLP-t), Teofillin, Penicillamin.</li>
                    <li><strong>Deficiencia:</strong> Gyermekkorban ingerlékenység, görcsrohamok (GABA hiány), dermatitis, cheilosis, glossitis, mikrocitás sideroblasztos anaemia.</li>
                    <li><strong>Toxicitás (vitamintúlsúly!):</strong> Napi >200–500 mg tartós szedése esetén szenzoros perifériás neuropathia, ataxia, paraesthesia, izomgyengeség (a piridoxin felesleg kompetitíven gátolja a szöveti PLP-kötést).</li>
                </ul>
            </div>

            <div style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--primary-light); margin-bottom: 0.3rem;">B<sub>7</sub>-vitamin (Biotin) és a Laboratóriumi Immunoassay Interferencia</h4>
                <ul>
                    <li><strong>Funkció:</strong> Karboxiláz enzimek prosztetikus csoportja (piruvát-karboxiláz, acetil-CoA karboxiláz).</li>
                    <li><strong>Klinikai felhasználás:</strong> Haj- és körömerősítő étrend-kiegészítők (OTC: 5–20 mg/nap), valamint kísérleti nagy dózisok Sclerosis Multiplexben (300+ mg/nap).</li>
                    <li><strong>Diagnosztikai veszély (Interferencia!):</strong> A modern klinikai laboratóriumok streptavidin-biotin kötésen alapuló heterogén immunoassay-ket alkalmaznak. A szuprafiziológiás keringő szabad biotin kompetitíven blokkolja a szilárdfázis streptavidin kötőhelyeit:
                        <ul>
                            <li><strong>Kompetitív mérések esetén:</strong> Falsely high (ál-magas) eredmény (pl. FT4, FT3 emelkedettnek látszik).</li>
                            <li><strong>Szendvics (immunometrikus) mérések esetén:</strong> Falsely low (ál-alacsony) eredmény (pl. TSH elnyomottnak látszik).</li>
                            <li><strong>Klinikai következmény:</strong> Euthyreoid betegeknél laboratóriumi <em>hyperthyreosist</em> (Graves-Basedow kór látszatát) utánozza, felesleges thyreostaticus kezelést és félrediagnosztizálást indukálva.</li>
                            <li><strong>Kivédés:</strong> Laboratóriumi vérvétel előtt a biotintartalmú készítmények szedését a dózistól és vesefunkciótól függően 2–7 nappal fel kell függeszteni!</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--primary-light); margin-bottom: 0.3rem;">B<sub>9</sub>-vitamin (Folsav / Folát)</h4>
                <ul>
                    <li><strong>Funkció:</strong> Hidroximetil- és formil-csoportok (egy szénatomos fragmentumok) átvivője; esszenciális a purinbázisok és a timin szintézisében (DNS és RNS replikáció). B<sub>12</sub>-vitaminnal együttműködve biztosítja a sejtproliferációt és a vvt-érést.</li>
                    <li><strong>Forrás:</strong> Nyers zöldségek, gyümölcsök, máj (hőérzékeny!).</li>
                    <li><strong>Deficiencia:</strong> <strong>Megaloblastos anaemia</strong> (MCV emelkedett, de neurológiai tünetek NÉLKÜL!), magzati velőcsőzáródási rendellenességek (spina bifida, anencephalia – periconcepcionális 400 &mu;g/nap profilaxis szükséges!).</li>
                    <li><strong>Túlsúly veszélyei (Nutrients 2023):</strong> Megzavarja a folátmetabolizmust, DNS-hipometilációhoz, epigenetikai instabilitáshoz vezethet, és elősegítheti premalignus laesiók és tumorok progresszióját. Továbbá a folsav felesleg fedi a B<sub>12</sub>-hiány haematológiai jeleit, miközben a neurológiai károsodás csendben progrediál!</li>
                </ul>
            </div>

            <div style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--primary-light); margin-bottom: 0.3rem;">B<sub>12</sub>-vitamin (Kobalamin)</h4>
                <ul>
                    <li><strong>Szerkezet és forrás:</strong> Porfirinszerű corrin gyűrű központi kobalt (Co) ionnal. KIZÁRÓLAG állati eredetű élelmiszerekben található meg (hús, máj, tej, tojás); növényekben nincs. Szigorú vegán étrend mellett kötelező a szubsztitúció. Raktározása kiemelkedő (májban 3–5 évre elegendő).</li>
                    <li><strong>Transzportmechanizmus:</strong>
                        <ol>
                            <li>Gyomorban a pepszin és sósav felszabadítja a fehérjekötésből, majd nyál-haptocorrinhoz kötődik.</li>
                            <li>Duodenumban a pancreas proteázok elbontják a haptocorrint; a B<sub>12</sub> hozzákötődik a gyomor parietális sejtjei által szekretált <strong>Intrinsic Faktorhoz (IF)</strong>.</li>
                            <li>Az IF–B<sub>12</sub> komplex a <strong>terminalis ileumban</strong> specifikus receptorokon (cubilin) keresztül, Ca<sup>2+</sup>-függő endocitózissal szívódik fel.</li>
                            <li>A keringésben a <strong>Transzkobalamin II (TCII)</strong> szállítja a perifériás sejtekhez és a májhoz.</li>
                        </ol>
                    </li>
                    <li><strong>Hiány etiológiája:</strong> Parietális sejtek autoimmun destrukciója (Anaemia perniciosa), gastrectomia, terminalis ileum resectio, Crohn-betegség, szigorú vegán étrend.</li>
                    <li><strong>Klinikai kép:</strong>
                        <ul>
                            <li><strong>Megaloblastos anaemia:</strong> Magas MCV (>100 fL), hypersegmentált neutrofil granulocyták, ineffektív erythropoiesis miatti enyhe indirekt hyperbilirubinaemia és LDH emelkedés.</li>
                            <li><strong>Funicularis myelosis (Subacut kombinált degeneráció):</strong> A gerincvelő hátsó és oldalsó kötegeinek demyelinizációja. Korai tünetek: kesztyű-harisnya típusú paresztézia, vibráció- és helyzetérzékelés kiesése; késői tünetek: spasticus paresis, ataxia, demencia. A neurológiai tünetek haematológiai eltérések nélkül is megmutatkozhatnak!</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--primary-light); margin-bottom: 0.3rem;">C-vitamin (Aszkorbinsav)</h4>
                <ul>
                    <li><strong>Funkció:</strong> Hatékony redukálószer és vízoldékony antioxidáns. Specifikus kofaktora a prolil- és lizil-hidroxiláz enzimeknek (Fe<sup>2+</sup> ion redukált formában tartása), ami alapvető a prokollagén stabil hármashélix szerkezetének kialakításához. Szükséges a karnitin és katekolaminok szintéziséhez, valamint segíti a táplálékkal bevitt vas (Fe<sup>3+</sup> &rarr; Fe<sup>2+</sup>) bélrendszeri felszívódását.</li>
                    <li><strong>Szintézis:</strong> A legtöbb emlős glükózból képes előállítani; az emberben az L-gulonolakton-oxidáz gén inaktiváló mutációja miatt esszenciális.</li>
                    <li><strong>Hiánybetegség: Skorbut (Scurvy)</strong>. Tünetei a kollagén instabilitásból fakadó kapilláris fragilitás következményei: petechiák, purpurák, perifollicularis vérzések, ínyvérzés és fogvesztés, izom- és ízületi bevérzések (haemarthros), gyerekkori intracranialis haemorrhagia, elégtelen sebgyógyulás, osteoporosis, szekunder anaemia.</li>
                </ul>
            </div>

            <!-- ZSÍROLDÉKONY VITAMINOK -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.8rem;">
                🥑 4. Zsíroldékony vitaminok (A, D, E, K)
            </h3>
            <p>Felszívódásukhoz intakt epesav-szekréció, micellaképzés és pancreaslipáz szükséges. A szervezetben (máj, zsírszövet) jelentős raktáraik képződnek. Lassú eliminációjuk miatt <strong>a kontrollálatlan túladagolás kumulációhoz és toxikus hipervitaminózishoz vezethet!</strong></p>

            <div style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--primary-light); margin-bottom: 0.3rem;">A-vitamin (Retinol, Retinál, Retinsav)</h4>
                <ul>
                    <li><strong>Aktív formák és funkciók:</strong> <em>11-cisz-retinál:</em> a látóbíbor (rhodopsin) kromofórja a retina pálcikáiban (szürkületi látás). <em>Retinsav:</em> nukleáris receptorokhoz (RAR/RXR) kötődve génexpressziós faktor; hámszöveti sejtdifferenciáció, mucopoliszacharid szintézis, nyáktermelés fenntartása. Antioxidáns.</li>
                    <li><strong>Raktározás:</strong> Májcsillagsejtekben (Ito-sejtek) retinil-palmitátként; 5–10 hónapra elegendő tartalék.</li>
                    <li><strong>Deficiencia:</strong> Szürkületi vakság (nyctalopia / farkasvakság), xerophthalmia (kötőhártya szárazság, Bitot-foltok, cornealis keratinizáció és fekély), follicularis hyperkeratosis ("reszelős bőr"), fokozott fertőzéshajlam.</li>
                    <li><strong>Vitamintúlsúly (A-hypervitaminosis):</strong> Akut: fejfájás, émelygés, hányás, aluszékonyság, pseudotumor cerebri (emelkedett intracranialis nyomás). Krónikus: hepatomegalia, májcirrózis, alopecia, száraz bőrhámlás, csontfájdalom. Terhesség alatt teratogén (tilos a nagy dózisú A-vitamin és izotretinoin)!</li>
                </ul>
            </div>

            <div style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--primary-light); margin-bottom: 0.3rem;">E-vitamin (&alpha;-tokoferol)</h4>
                <ul>
                    <li><strong>Funkció:</strong> A legfontosabb lipofil lánczáró antioxidáns. Védi a membránlipidek többszörösen telítetlen zsírsavait (PUFA) és a plazma lipoproteineket (főleg LDL) a reaktív oxigéngyökök (ROS) okozta lipidperoxidációtól.</li>
                    <li><strong>Forrás:</strong> Növényi olajok (búzacsíra-, napraforgóolaj), olajos magvak. Állati eredetű élelmiszerekben egyáltalán nincs vagy elenyésző!</li>
                    <li><strong>Hiány okai:</strong> Súlyos krónikus zsírmalabszorpció (cholestasis, cysticus fibrosis, abetalipoproteinaemia).</li>
                    <li><strong>Deficiencia következményei:</strong> Sejtorganellumok (mitokondriumok, lizoszómák) membránjának károsodása; haemolyticus anaemia (a vörösvértestek ozmotikus rezisztenciája csökken); neurológiai degeneráció: spinocerebellaris ataxia, propriocepció és mélyreflexek kiesése (areflexia), perifériás paresis.</li>
                </ul>
            </div>

            <div style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--primary-light); margin-bottom: 0.3rem;">D-vitamin (Cholecalciferol D<sub>3</sub> / Ergocalciferol D<sub>2</sub>)</h4>
                <ul>
                    <li><strong>Metabolizmus és foto-szintézis:</strong>
                        <ol>
                            <li>Bőrben a 7-dehidrokoleszterin UV-B sugárzás hatására fotolitikus hasadással kolekalciferollá (D<sub>3</sub>) alakul (vagy táplálékkal, halolajjal szívódik fel).</li>
                            <li>Májban: 25-hidroxiláz enzim hatására <strong>25-hidroxikolekalciferol [25-OH-D<sub>3</sub> / kalcidiol]</strong> képződik (ez a fő keringő raktárforma, felezési ideje 2–3 hét).</li>
                            <li>Vesében (proximalis tubulus): 1&alpha;-hidroxiláz (CYP27B1) enzim aktiválja <strong>1,25-dihidroxikolekalciferollá [1,25-(OH)<sub>2</sub>-D<sub>3</sub> / kalcitriol]</strong>. A folyamatot a Parathormon (PTH) és az alacsony foszfátszint serkenti, az FGF-23 és maga a kalcitriol gátolja.</li>
                        </ol>
                    </li>
                    <li><strong>Biológiai hatás:</strong> A kalcium- és foszfáthomeosztázis központi regulátora: fokozza a bélrendszeri Ca<sup>2+</sup>- és PO<sub>4</sub><sup>3-</sup>-abszorpciót (calbindin szintézisen keresztül), segíti a csontok mineralizációját, gátolja a PTH szekréciót.</li>
                    <li><strong>Kórállapotok:</strong>
                        <ul>
                            <li><strong>Hiány:</strong> Gyermekkorban <em>rachitis</em> (angolkór: csontosodási elégtelenség, epifízis kiszélesedés, O-láb, kraniotabesz). Felnőttkorban <em>osteomalacia</em> (csontlágyulás: az oszteoid mineralizációja elégtelen, pseudotörések, csontfájdalom), csontritkulás (osteoporosis).</li>
                            <li><strong>Túlsúly (D-hypervitaminosis):</strong> Súlyos hypercalcaemia, hypercalcuria, nephrocalcinosis, recidiváló vesekőképződés, lágyszöveti és érrendszeri kalcifikáció, polyuria, veseelégtelenség.</li>
                        </ul>
                    </li>
                    <li><strong>Laboratóriumi referenciaértékek (Debreceni Egyetem KK MedSol adatok alapján):</strong>
                        <div style="background: rgba(0,0,0,0.03); border-left: 4px solid var(--accent); padding: 8px 12px; margin-top: 6px;">
                            <strong>Mérendő paraméter: Szérum Total 25-OH D-vitamin</strong> (natív vérből, Endokrinológia labor):<br>
                            &bull; <strong>> 75 nmol/L (> 30 ng/mL):</strong> Ideális ellátottság.<br>
                            &bull; <strong>50 – 75 nmol/L (20 – 30 ng/mL):</strong> Szuboptimális szint (elégtelenség).<br>
                            &bull; <strong>&lt; 50 nmol/L (&lt; 20 ng/mL):</strong> Deficiencia (vitaminhiány).<br>
                            &bull; <strong>&lt; 25 nmol/L (&lt; 10 ng/mL):</strong> Súlyos deficiencia.
                        </div>
                    </li>
                </ul>
            </div>

            <div style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--primary-light); margin-bottom: 0.3rem;">K-vitamin (K<sub>1</sub> Fillokinon, K<sub>2</sub> Menakinon, K<sub>3</sub> Menadion)</h4>
                <ul>
                    <li><strong>Biokémiai funkció:</strong> A mikroszomális &gamma;-glutamil-karboxiláz enzim esszenciális kofaktora. Specifikus fehérjék glutaminsav (Glu) aminosavmaradékait karboxilálja <strong>&gamma;-karboxiglutaminsavvá (Gla)</strong>.
                        <ul>
                            <li><strong>Véralvadási faktorok:</strong> FII (protrombin), FVII, FIX, FX, valamint a fiziológiás alvadásgátló Protein C és Protein S aktiválása. A negatív töltésű Gla-domének Ca<sup>2+</sup> hidakon keresztül képesek a thrombocyta membrán negatív foszfolipidjeihez kapcsolódni.</li>
                            <li><strong>Csontmetabolizmus:</strong> Az <em>Osteocalcin</em> Gla-kötése rögzíti a kalciumot a csont hidroxiapatit kristályrácsába.</li>
                        </ul>
                    </li>
                    <li><strong>Források:</strong> K<sub>1</sub>: zöld növények (spenót, brokkoli); K<sub>2</sub>: colon bélbaktériumok által szintetizált forma; K<sub>3</sub>: szintetikus származék.</li>
                    <li><strong>Hiány okai:</strong> Zsírmalabszorpció, epeúti elzáródás (epehiány), hosszantartó széles spektrumú antibiotikum kezelés (bélflóra eradikációja), újszülöttkor (steril bél és alacsony anyai transzplacentáris transzport miatt K-profilaxis kötelező!).</li>
                    <li><strong>Vezető laboratóriumi eltérés: Megnyúlt Prothrombin Idő (PI) / emelkedett INR</strong>. (Mivel az FVII féléletideje a legrövidebb [~4–6 óra], a K-vitamin hiány legérzékenyebben és legkorábban az extrinsic alvadási teszt megnyúlásában mutatkozik meg!).</li>
                </ul>
            </div>

            <!-- LABORATÓRIUMI DIAGNOSZTIKA ÉS MÓDSZERTAN -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.8rem;">
                🧪 5. Laboratóriumi vizsgálómódszerek összefoglalása
            </h3>
            <p>
                A plazma vagy szérum koncentráció mérése nem minden esetben reflektálja a valós biológiai ellátottságot vagy a szöveti raktárak állapotát (pl. a közelmúltbeli diétás bevitel torzíthatja a plazmaszintet). Emiatt a klinikai biokémia direkt és funkcionális teszteket alkalmaz:
            </p>

            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.88rem;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.04); text-align: left;">
                        <th style="padding: 8px 10px; border: 1px solid var(--border);">Teszt kategória</th>
                        <th style="padding: 8px 10px; border: 1px solid var(--border);">Mért paraméter</th>
                        <th style="padding: 8px 10px; border: 1px solid var(--border);">Alkalmazott minta</th>
                        <th style="padding: 8px 10px; border: 1px solid var(--border);">Diagnosztikai elv és jelentőség</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="3" style="padding: 8px 10px; border: 1px solid var(--border); vertical-align: top;">
                            <strong>Funkcionális intracelluláris enzimes tesztek</strong>
                        </td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);"><strong>B<sub>1</sub>-vitamin</strong> (Transzketoláz)</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">VVT-lizátum</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">Eritrocita transzketoláz aktivitás mérése TPP kofaktor hozzáadása előtt és után (ETKAC index emelkedett hiányban).</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);"><strong>B<sub>2</sub>-vitamin</strong> (Glutation-reduktáz)</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">VVT-lizátum</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">Eritrocita glutation-reduktáz aktivitás mérése FAD stimuláció előtt és után (EGRAC index emelkedett hiányban).</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);"><strong>B<sub>6</sub>-vitamin</strong> (Transzamináz)</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">VVT-lizátum</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">Eritrocita glutamát-oxálacetát transzamináz (EGOT) aktivitásváltozása in vitro PLP hozzáadására.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);"><strong>Szöveti raktár direkt mérése</strong></td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);"><strong>C-vitamin</strong> (Aszkorbinsav)</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">Leukocita koncentráció</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">A fehérvérsejt-aszkorbátszint közvetlenül reprezentálja a szöveti telítettséget (szemben az instabil plazmaszinttel).</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);"><strong>Heterogén Immunoassay-k</strong> (CLIA / ECLIA)</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);"><strong>Folsav, B<sub>12</sub>, 25-OH-D</strong></td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">Szérum / Plazma</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">Automatizált fénysugárzáson (kemilumineszcencia) alapuló nagy áteresztőképességű tesztek (Biotin interferenciára ügyelni!).</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);"><strong>Kromatográfia és MS</strong> (HPLC, LC-MS/MS)</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);"><strong>A-, E-, K-, C-vitamin</strong></td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">Szérum / Plazma</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">Közvetlen elválasztáson és molekulatömeg-azonosításon alapuló arany standard; specifikus és interferenciamentes.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);"><strong>Koagulometria</strong></td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);"><strong>K-vitamin</strong> funkcionális hatás</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">Citráttal alvadásgátolt vérplazma</td>
                        <td style="padding: 8px 10px; border: 1px solid var(--border);">Prothrombin Idő (PI) mérése és INR kalkuláció; K-hiányban az alvadási idő megnyúlik, K-adásra rendeződik.</td>
                    </tr>
                </tbody>
            </table>

            <!-- ÖSSZEGZŐ KLINIKAI DIFFERENCIÁLDIAGNOSZTIKA -->
            <div style="background: rgba(214, 158, 46, 0.08); border-left: 5px solid var(--accent); padding: 1.1rem; border-radius: 6px; margin-top: 1.5rem;">
                <h4 style="margin: 0 0 0.5rem 0; color: #b7791f;">💡 Klinikai Gyöngyszemek a Vizsgára (Differenciáldiagnózis):</h4>
                <ul style="margin-left: 1.5rem; margin-bottom: 0;">
                    <li><strong>Megaloblastos anaemia elkülönítése:</strong> Ha az MCV > 100 fL, mind B<sub>12</sub>-, mind folsavhiány szóba jön. Ha szenzoros paraesthesia, ataxia és vibrációkiesés (funicularis myelosis) kíséri &rarr; B<sub>12</sub> hiány! Csak folsav adása B<sub>12</sub> hiányban a vérképet rendezi, de a neurológiai destrukciót súlyosbítja!</li>
                    <li><strong>K-vitamin hiány vs. Májcirrózis:</strong> Mindkettőben nyúlt lehet a prothrombin idő. Ha parenterális K-vitamin adására az INR 24 órán belül normalizálódik, K-vitamin hiányról (felszívódási zavar/bélflóra hiba) van szó; ha nem javul, a májsejtek szintetikus fehérjeképző kapacitása elégtelen.</li>
                    <li><strong>Alkoholizmus és tudatzavar:</strong> Hypoglykaemiás alkoholbetegnek soha nem adunk önmagában glükóz infúziót tiamin (B<sub>1</sub>) nélkül, mert az a még meglévő minimális tiaminraktárakat kimerítve fatális Wernicke encephalopathiát provokál!</li>
                </ul>
            </div>

        </div>
    `
});
// ============================================================================
// KLINIKAI BIOKÉMIA ÉS LABORATÓRIUMI DIAGNOSZTIKA
// 4. Előadás: Egyéb vércsoportrendszerek jelentősége & Őssejt-transzplantáció
// ============================================================================

window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas4",
    title: "4. Előadás: Egyéb vércsoportrendszerek (Kell, Kidd, Duffy, MNS, I) és az őssejt-transzplantáció",
    shortName: "Egyéb vércsoportok & Őssejt",
    html: `
        <div style="font-size: 0.96rem; line-height: 1.62; color: inherit;">

            <!-- BEVEZETÉS -->
            <div style="background: rgba(43, 108, 176, 0.08); border-left: 5px solid var(--primary-light); padding: 1.1rem; border-radius: 6px; margin-bottom: 1.5rem;">
                <h3 style="margin-top: 0; color: var(--primary); font-size: 1.25rem;">🩸 I. Rész: Egyéb vércsoportrendszerek klinikai és biokémiai jelentősége</h3>
                <p style="margin-bottom: 0;">
                    A Nemzetközi Vértranszfúziós Társaság (<strong>ISBT</strong>) nyilvántartása szerint 2026 szeptemberében már <strong>49 önálló vércsoportrendszert</strong> tartunk számon (a 49. rendszer a <em>JAMA</em> [F11R gén, JIMI antigén]). Az ABO és Rh rendszereken túl a transzfúziós gyakorlatban a <strong>Kell (KEL)</strong>, a <strong>Kidd (JK)</strong> és a <strong>Duffy (FY)</strong> rendszerek bírnak kiemelt klinikai jelentőséggel, mivel inkompatibilitás esetén súlyos hemolitikus transzfúziós reakciót vagy újszülöttkori hemolitikus betegséget okoznak.
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
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>DHTR</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Delayed Hemolytic Transfusion Reaction</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Késői hemolitikus transzfúziós reakció; alacsony titerű irreguláris IgG ellenanyagok másodlagos immunválasza okozza (pl. Kidd, Duffy).</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>DARC / DBP</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Duffy-Antigen Chemokine Receptor / Duffy Binding Protein</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">A Duffy antigén a vvt-n kemokinreceptor és a <em>Plasmodium vivax</em> (DBP ligandján keresztül történő) belépési kapuja.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>AE1 (Band 3)</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Anion Exchanger 1 (Anioncserélő protein 1)</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Cl<sup>-</sup> / HCO<sub>3</sub><sup>-</sup> ioncserélő a vvt-membránban és a vesében; rajta helyezkednek el a Diego vércsoport antigénjei.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>HUS</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Hemolitikus urémiás szindróma</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Shiga-toxin termelő <em>E. coli</em> fertőzés szövődménye; a toxin a P-vércsoportrendszer P<sup>k</sup> antigénjéhez kötődik.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>auto- / allo-SCT</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Autológ / Allogén Stem Cell Transplantation</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Saját (fagyasztott) vagy HLA-egyező donortól származó vérképző őssejt-transzplantáció.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>G-CSF / GM-CSF</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Granulocyte (-Macrophage) Colony-Stimulating Factor</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Növekedési faktorok, amelyek a csontvelői CD34+ őssejteket a perifériás vérbe mobilizálják.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>GvHD / GvL</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Graft-versus-Host Disease / Graft-versus-Leukemia</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Allogén transzplantációban a donor T-limfociták támadása a recipiens egészséges szövetei (GvHD) vagy a maradék leukémiás sejtek (GvL) ellen.</td>
                    </tr>
                    <tr>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);"><strong>TAT / 7-AAD / DMSO</strong></td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">Turnaround Time / 7-Aminoaktinomicin D / Dimetil-szulfoxid</td>
                        <td style="padding: 7px 10px; border: 1px solid var(--border);">TAT: laboratóriumi átfutási idő (CD34+ mérésnél 90 perc); 7-AAD: életképességi festék; DMSO: krioprotektív fagyasztó adalék (10%).</td>
                    </tr>
                </tbody>
            </table>

            <div style="background: rgba(0,0,0,0.02); border: 1px solid var(--border); border-radius: 6px; padding: 0.9rem; margin-bottom: 1.4rem;">
                <strong>🔑 Kulcsfogalmak meghatározása:</strong>
                <ul style="margin-left: 1.4rem; margin-bottom: 0; margin-top: 0.3rem;">
                    <li><strong>Immunogenitás sorrendje:</strong> A vércsoport-antigének antitestképzést kiváltó képessége (relatív potenciál): <strong>D (0,7) &gt; K (0,1) &gt; c (0,041) &gt; E &gt; C &gt; e (0,011) &gt; Fy<sup>a</sup> (0,005) &gt; S (0,0008) &gt; s (0,0006)</strong>.</li>
                    <li><strong>Hideg hemagglutininek:</strong> Alacsony hőmérsékleten (4–20 &deg;C, perifériás keringésben) vörösvértest-agglutinációt és komplementaktivációt okozó IgM típusú auto- vagy alloantitestek (pl. anti-I, anti-M).</li>
                    <li><strong>CD34+ abszolút sejtszám:</strong> A vérképző őssejtek felszíni markere (CD34). Áramlási citometriával mérik; a perifériás vérben elért <strong>15 sejt/&mu;L</strong> küszöbérték jelzi a sikeres mobilizációt és a leukaferezis optimális kezdési időpontját.</li>
                </ul>
            </div>

            <!-- KLINIKAILAG SZIGNIFIKÁNS RENDSZEREK -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                ⚠️ 2. Klinikailag szignifikáns vércsoportrendszerek
            </h4>

            <div style="margin-bottom: 1.1rem;">
                <h5 style="color: var(--primary-light); margin-bottom: 0.25rem; font-size: 1rem;">1. Kell (Kell–Cellano) rendszer (ISBT 006 | Gén: KEL – 7q33 | CD238)</h5>
                <ul>
                    <li><strong>Genetika és gyakoriság:</strong> 38 antigén tartozik ide; fő antitétikus párja a <strong>K (Kell)</strong> és a <strong>k (Cellano)</strong>. Europid populációban: <strong>K-k+ (91%)</strong>, <strong>K+k+ (8,8%)</strong>, <strong>K+k- (0,2%)</strong>; negroidokban K-k+ (98%); arab populációban a K antigén gyakorisága eléri a 25%-ot. A Kell fehérje diszulfid-híddal kapcsolódik az <em>XK</em> fehérjéhez (hiánya: McLeod-szindróma acanthocytosissal).</li>
                    <li><strong>Biokémiai funkció:</strong> Cink-dependens neutrális endopeptidáz, amely az inaktív big-endothelin-3 hasításával aktív <strong>endothelin-3-at</strong> (erős érösszehúzó peptidet) állít elő.</li>
                    <li><strong>Klinikai jelentőség:</strong> Az Rh(D) után a <strong>második legerősebb immunogén</strong>! A vérképzés nagyon korai szakaszában (6–10. magzati héten) expresszálódik a vvt-előalakokon is. Az <strong>anti-K (IgG)</strong> súlyos transzfúziós reakciót és különösen súlyos <strong>ÚHB-t</strong> okoz (nemcsak a érett vvt-ket lízálja, hanem direkt módon gátolja a csontvelői eritroid progenitorok érését is, ezért az anyai antitest-titer nem mindig korrelál a magzati anaemia súlyosságával!).</li>
                </ul>
            </div>

            <div style="margin-bottom: 1.1rem;">
                <h5 style="color: var(--primary-light); margin-bottom: 0.25rem; font-size: 1rem;">2. Duffy rendszer (ISBT 008 | Gén: ACKR1 – 1q21-q22 | CD234)</h5>
                <ul>
                    <li><strong>Szerkezet és funkció:</strong> A <strong>DARC</strong> (Duffy-Antigen Chemokine Receptor) egy hétszeres transzmembrán fehérje. Fő antigénjei: <strong>Fy<sup>a</sup></strong> és <strong>Fy<sup>b</sup></strong>. Nemcsak vvt-ken, hanem endothelsejteken, Purkinje-sejteken, alveolusokban és a pajzsmirigyben is jelen van. Feladata a gyulladásos kemokinek (IL-8, RANTES) megkötése és pufferelése.</li>
                    <li><strong>Malária rezisztencia:</strong> A Duffy antigén a <strong><em>Plasmodium vivax</em></strong> merozoiták kötelező kötőhelye (a parazita DBP fehérjéje a DARC receptor dimerizációját indukálja az irreverzibilis invázióhoz). A <strong>Duffy-null fenotípus – Fy(a-b-)</strong> – védettséget nyújt a <em>P. vivax</em> maláriával szemben (a fekete bőrű populációban 68%-os gyakoriságú szelekciós előny miatt, míg fehérekben extrém ritka).</li>
                    <li><strong>Klinikai jelentőség:</strong> Az anti-Fy<sup>a</sup> és anti-Fy<sup>b</sup> (IgG) elsősorban késői hemolitikus transzfúziós reakciót (DHTR) és enyhe/közepes ÚHB-t vált ki.</li>
                </ul>
            </div>

            <div style="margin-bottom: 1.1rem;">
                <h5 style="color: var(--primary-light); margin-bottom: 0.25rem; font-size: 1rem;">3. Kidd rendszer (ISBT 009 | Gén: SLC14A1 – 18q11-q12)</h5>
                <ul>
                    <li><strong>Funkció:</strong> <strong>Urea transzporter</strong> (expresszálódik a vvt-membránban, a vese gyűjtőcsatornáiban és a vasa recta endotheljében). Biztosítja a vvt-k gyors ozmotikus alkalmazkodását és stabilitását, amikor a vese velőállományának magas karbamid-koncentrációjú környezetén haladnak át (hiányában a vvt-k 2 M karbamid oldatban lassabban lízálnak).</li>
                    <li><strong>Klinikai veszély ("Alattomos ellenanyag"):</strong> Fő antigénjei a <strong>Jk<sup>a</sup></strong> és <strong>Jk<sup>b</sup></strong>. Az <strong>anti-Jk<sup>a</sup> / anti-Jk<sup>b</sup> (IgG)</strong> antitestek komplementet kötnek (intravascularis hemolízis!). Egyedülálló szerológiai tulajdonságuk, hogy <strong>titerük néhány hónappal az immunizáció után a kimutathatósági határ alá csökken</strong>. Emiatt az előzetes keresztreakció során rejtve maradhatnak, ám ismételt antigén-expozíció (újabb transzfúzió) hatására gyors anamnesztikus immunválasszal súlyos, gyakran fatális <strong>késői hemolitikus transzfúziós reakciót (DHTR)</strong> okoznak. ÚHB-t csak ritkán és enyhe formában idéznek elő.</li>
                </ul>
            </div>

            <div style="margin-bottom: 1.4rem;">
                <h5 style="color: var(--primary-light); margin-bottom: 0.25rem; font-size: 1rem;">4. Diego (ISBT 010) és Lutheran (ISBT 005) rendszerek</h5>
                <ul>
                    <li><strong>Diego (Gén: SLC4A1, 17q21.31, CD233):</strong> A vvt legnagyobb példányszámú integráns membránfehérjéjén, a <strong>Band 3</strong> (Anion Exchanger 1 – AE1; 10<sup>6</sup> molekula/vvt) fehérjén helyezkedik el. Funkciója a Cl<sup>-</sup>/HCO<sub>3</sub><sup>-</sup> csere (CO<sub>2</sub> transzport a szövetek és a tüdő között, valamint renális savszekréció). A Di<sup>a</sup> antigén jellegzetesen dél-amerikai indián és kelet-ázsiai populációkban fordul elő (antropológiai marker), míg a Di<sup>b</sup> mindenhol gyakori. Antitestjei (IgG/IgM) gyakrabban okoznak ÚHB-t, mint transzfúziós szövődményt.</li>
                    <li><strong>Lutheran (Gén: BCAM, 19q13.2, CD239):</strong> Nagy affinitású <strong>laminin receptor</strong> az epitélium és érendothel bazális membránjában és a vvt-ken (2000–5000/vvt). Tumorokban való overexpressziója a fokozott invazivitás jele; <strong>sarlósejtes anaemiában</strong> a vvt-k fokozott Lu expressziója fokozza az érfalhoz való adhéziót és vazookkluzív krízist provokál.</li>
                </ul>
            </div>

            <!-- KEVÉSBÉ SZIGNIFIKÁNS / HIDEG RENDSZEREK -->
            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                ❄️ 3. Egyéb vércsoportrendszerek és kórokozó-receptor funkciók
            </h4>
            <p style="font-size: 0.9rem; margin-bottom: 0.6rem;">
                <em>Memóriaszabály a jellemzően hideg-reaktív, klinikailag ritkábban veszélyes rendszerekhez:</em> <strong>"I love my new Honda Prelude"</strong> &rarr; <strong>I, Le, M, N, H, P</strong>.
            </p>

            <table style="width: 100%; border-collapse: collapse; margin: 0.6rem 0 1.5rem 0; font-size: 0.87rem;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.04); text-align: left;">
                        <th style="padding: 6px 9px; border: 1px solid var(--border); width: 18%;">Rendszer (ISBT)</th>
                        <th style="padding: 6px 9px; border: 1px solid var(--border); width: 32%;">Szerkezet és genetika</th>
                        <th style="padding: 6px 9px; border: 1px solid var(--border); width: 25%;">Antitestek és klinikum</th>
                        <th style="padding: 6px 9px; border: 1px solid var(--border); width: 25%;">Biológiai / Kórokozó szerep</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>I és i rendszer</strong><br>(ISBT 027)</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">Szénhidrát láncok (GCNT2 gén). Magzatban/újszülöttben el nem ágazó <strong>i</strong>; 18 hónapos korig az <em>I-branching enzim</em> elágazó <strong>I</strong> antigénné alakítja.</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">Ritka "felnőtt i" fenotípus (természetes anti-I). Szerzett <strong>auto-anti-I</strong>: a hideg-agglutinin betegség (autoimmun hemolitikus anaemia) leggyakoribb oka.</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">Leukémiában, thalassemiában, sarlósejtes anaemiában (stressz-erythropoiesis) az <strong>i</strong> expresszió fokozódik.</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>Lewis rendszer</strong><br>(ISBT 007)</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">Fukóz-tartalmú szénhidrátok (FUT3 gén). A GI-traktus mirigyhámja termeli, és <strong>passzív adszorpcióval</strong> rakódnak a vvt-re a plazmából.</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">Fenotípusok: Le(a+b-), Le(a-b+), Le(a-b-). Anti-Lewis ellenanyagok <strong>IgM</strong> típusúak &rarr; nem okoznak ÚHB-t!</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">A <strong>Le<sup>b</sup></strong> antigén a <em>Helicobacter pylori</em> és a Norwalk-vírus gyomor-bélrendszeri receptora.</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>MNS rendszer</strong><br>(ISBT 002)</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">MN: <strong>Glycophorin A</strong> (CD235a, fő sziálomucin, 10<sup>6</sup>/vvt); Ss: <strong>Glycophorin B</strong> (CD235b, 10<sup>5</sup>/vvt). 4q31.21 lokusz.</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">Anti-M/N: hideg IgM (ritkán veszélyes). <strong>Anti-S és anti-s:</strong> meleg <strong>IgG</strong> &rarr; hemolitikus reakciót és ÚHB-t okoznak!</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><em>Plasmodium falciparum</em> receptora. A <strong>GYPB-A Dantu hibrid</strong> glikoforin 40%-kal csökkenti a súlyos malária kockázatát.</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>P1PK / P rendszer</strong><br>(ISBT 003)</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">Glikoszfingolipid szénhidrát antigének: P, P<sub>1</sub>, P<sup>k</sup> (A4GALT gén, CD77).</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);">Ritka <strong>p fenotípus</strong> (minden P hiányzik): erős <strong>anti-PP<sub>1</sub>P<sup>k</sup></strong> (IgM+IgG) &rarr; DHTR, ÚHB, habituális vetélés.</td>
                        <td style="padding: 6px 9px; border: 1px solid var(--border);"><strong>P<sup>k</sup>:</strong> Shiga-toxin és <em>E. coli</em> receptor (HUS!). <strong>P:</strong> Parvovirus B19 receptor. P-fimbriás uropatogén <em>E. coli</em> kötőhely.</td>
                    </tr>
                </tbody>
            </table>

            <!-- =================================================================
                 II. RÉSZ: ŐSSEJT TRANSZFÚZIÓ (TRANSZPLANTÁCIÓ)
                 ================================================================= -->
            <div style="background: rgba(46, 125, 50, 0.08); border-left: 5px solid var(--success); padding: 1.1rem; border-radius: 6px; margin-bottom: 1.4rem; margin-top: 1.8rem;">
                <h3 style="margin-top: 0; color: var(--success); font-size: 1.25rem;">🧬 II. Rész: Vérképző őssejt-transzfúzió (transzplantáció) és laboratóriumi háttere</h3>
                <p style="margin-bottom: 0;">
                    A vérképző őssejt-transzplantáció (<strong>SCT</strong>) során nagy dózisú myeloablatív kemo-/radioterápiát követően egészséges hematopoetikus progenitor sejtekkel állítjuk helyre a csontvelői vérképzést és az immunrendszert. Alkalmazási területei: <strong>malignus hematológiai betegségek</strong> (leukémiák, limfómák, myeloma multiplex), súlyos <strong>autoimmun kórképek</strong> és bizonyos <strong>szolid tumorok</strong>.
                </p>
            </div>

            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                🏥 4. Őssejtforrások és a transzplantáció típusai
            </h4>

            <ul style="margin-left: 1.4rem; margin-bottom: 1.1rem;">
                <li><strong>Őssejtek forrásai:</strong>
                    <ol>
                        <li><strong>Perifériás vér (61% – leggyakoribb):</strong> Egészséges állapotban kevés őssejt kering, ezért <strong>G-CSF</strong> (vagy GM-CSF) adásával mobilizálják őket a csontvelőből a keringésbe, majd leukaferezissel gyűjtik.</li>
                        <li><strong>Csontvelő (20%):</strong> Altatásban, a csípőlapátból (spina iliaca posterior superior) végzett többszörös csontvelő-punkcióval nyerik.</li>
                        <li><strong>Újszülött köldökzsinórvér (19%):</strong> Szülés után a placentából és köldökzsinórból gyűjtött, naiv immunsejteket tartalmazó minta (kisebb térfogat, főleg gyermekeknek).</li>
                    </ol>
                </li>
                <li><strong>Autológ transzplantáció (auto-SCT):</strong> A beteg saját, remisszióban mobilizált (G-CSF) és mélyfagyasztva tárolt őssejtjeit adják vissza a nagy dózisú kemoterápia után (pl. Non-Hodgkin és Hodgkin limfóma, Myeloma multiplex). Előnye, hogy nincs kilökődés vagy GvHD, hátránya, hogy nincs tumor elleni immunhatás.</li>
                <li><strong>Allogén transzplantáció (allo-SCT):</strong> <strong>HLA-egyező</strong> testvér vagy nem rokon (regiszter) donortól származó őssejtek átültetése (pl. akut leukémiák, aplasticus anaemia).
                    <ul>
                        <li><em>Előnye:</em> A donor immunsejtjei elpusztítják a recipiens maradék daganatsejtjeit (<strong>Graft-versus-Leukemia [GvL] hatás</strong>).</li>
                        <li><em>Hátránya:</em> <strong>Graft-versus-Host betegség (GvHD)</strong> (a donor T-sejtek megtámadják a beteg bőrét, máját, bélrendszerét), valamint a graft rejekciójának kockázata.</li>
                    </ul>
                </li>
            </ul>

            <h4 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.3rem;">
                🔬 5. Laboratóriumi diagnosztika: CD34+ áramlási citometria, gyűjtés és krioprezerváció
            </h4>

            <div style="background: rgba(0,0,0,0.02); border: 1px solid var(--border); border-radius: 6px; padding: 1rem;">
                <ol style="margin-left: 1.3rem; margin-bottom: 0;">
                    <li><strong>CD34+ abszolút sejtszám meghatározás áramlási citometriával:</strong>
                        <ul>
                            <li><em>Szolgáltatás:</em> Sürgős, 24/7 elérhető diagnosztika, rövid átfutási idővel (<strong>TAT: 90 perc</strong>).</li>
                            <li><em>Mérési elv (ISHAGE protokoll):</em> Fluoreszcensen jelölt monoklonális antitestekkel (CD45-FITC, CD34-PE) és ismert koncentrációjú kalibrációs gyöngyökkel (bead) határozzák meg az élő (<strong>7-AAD negatív</strong>), CD45<sup>dim</sup> / CD34<sup>+</sup> valódi őssejtek számát. Képlet: <strong>(CD34 események / bead események) &times; C<sub>bead</sub> &times; hígítás</strong>.</li>
                            <li><em>Döntési küszöb:</em> A leukaferezis akkor indítható, amikor a perifériás vérben a CD34+ sejtszám eléri a <strong>&ge; 15 sejt/&mu;L</strong> értéket.</li>
                        </ul>
                    </li>
                    <li><strong>Őssejtgyűjtés (Leukaferezis):</strong> Folyamatos áramlású sejtszeparáló készülékkel (pl. <em>Fresenius Com.Tec</em>) történik (4–6 óra / alkalom; a beteg teljes vérmennyiségének legalább 2,5-szeresét dolgozzák fel). A végtermék <strong>300–500 ml leukaferetizátum</strong>, amelyből ismételt CD34+ sejtszámlálás történik.</li>
                    <li><strong>Koncentrálás és krioprezerváció (mélyfagyasztás):</strong> A leukaferetizátum centrifugálása után a fehérvérsejt-gyűrűt (<strong>buffy coat</strong>) manuálisan bekoncentrálják. A sejtkárosodás (jégkristály-képződés) kivédésére <strong>10% DMSO</strong>-t (dimetil-szulfoxid) tartalmazó albuminos izotóniás krioprotektív oldattal keverik, majd számítógép-vezérelt programozott fagyasztóval (<strong>1 &deg;C/perc</strong> hűtési sebességgel) -80 &deg;C-ra hűtik, végül felhasználásig folyékony nitrogénben (<strong>-196 &deg;C</strong>) tárolják.</li>
                </ol>
            </div>

        </div>
    `
});
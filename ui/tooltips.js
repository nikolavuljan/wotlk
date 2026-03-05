// Sun-Lute tooltip hack
var sunluteTxt = '<table><tr><td><b class="q5">Sun-Lute of the Phoenix King</b><br /><!--bo-->Binds when picked up<br />Unique<table width="100%"><tr><td>Two-Hand</td><th>Axe</th></tr></table><table width="100%"><tr><td><!--dmg-->673 - 1008 Damage</td><th>Speed <!--spd-->3.60</th></tr></table><!--dps-->(233.5 damage per second)<br /><span><!--stat4-->+131 Strength</span><br /><span><!--stat7-->+139 Stamina</span><br />_SLPH_Durability 145 / 145<br />Classes: <a href="?class=1" class="c1">Warrior</a>, <a href="?class=2" class="c2">Paladin</a><br />Requires Level 80<br />Item Level 232<br /></td></tr></table><table><tr><td><span class="q2">Equip: Improves critical strike rating by <!--rtg32-->81&nbsp;<small>(<!--rtg%32-->1.76%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases your armor penetration rating by <!--rtg44-->64&nbsp;<small>(<!--rtg%44-->4.57%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Your melee attacks have a chance to strike a Power Chord. When you reach 4 Power Chords, they will release, causing you to instantly attack for 100% weapon damage with the Sun-Lute.</span><br /><div class="q1 whtt-sellprice">Sell Price: <span class="moneygold">36</span> <span class="moneysilver">32</span> <span class="moneycopper">60</span></div></td></tr></table><!--?130031:1:80:80-->'
var sunluteFake = 46041 // Starfall Girdle (has same sockets and bonus as Sun-Lute)
var fixSunlute
// Sulfuras tooltip hack
var sulfurasTxt = '<table><tr><td><b class="q5">Sulfuras, Hand of Ragnaros</b><br /><!--bo-->Binds when picked up<br />Unique<table width="100%"><tr><td>Two-Hand</td><th>Mace</th></tr></table><table width="100%"><tr><td><!--dmg-->872 - 1309 Damage</td><th>Speed <!--spd-->3.70</th></tr></table><!--dps-->(294.7 damage per second)<br /><span class=\"c11\"><!--fap-->(3359 Feral Attack Power)</span><br /><span><!--stat3-->+155 Agility</span><br /><span><!--stat7-->+199 Stamina</span><br />_SULPH_Durability 145 / 145<br />Requires Level 80<br />Item Level 264<br /></td></tr></table><table><tr><td><span class="q2">Equip: Improves hit rating by <!--rtg31-->116&nbsp;<small>(<!--rtg%31-->3.54%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases your expertise rating by <!--rtg37-->99&nbsp;<small>(<!--rtg%37-->12.08%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases attack power by <!--rtg38-->184.</span><br /><span class="q2">Chance on hit: Hurls a fiery ball that causes 717 to 913 Fire damage and an additional 116 Fire damage over 8 sec.</span><br /><div class="q1 whtt-sellprice">Sell Price: <span class="moneygold">32</span> <span class="moneysilver">44</span> <span class="moneycopper">95</span></div></td></tr></table><!--?132001:1:80:80-->'
var sulfurasFake = 51905 // Ramaladni's Blade of Culling (has same sockets. there is no real item with +12 dodge socket bonus, making this harder)
var fixSulfuras
// Warglaives tooltip hack
var warglaiveATxt = '<table><tr><td><b class="q5">Warglaive of Azzinoth</b><br /><!--bo-->Binds when picked up<br />Unique<table width="100%"><tr><td>Main Hand</td><th>Sword</th></tr></table><table width="100%"><tr><td><!--dmg-->394 - 701 Damage</td><th>Speed <!--spd-->2.80</th></tr></table><!--dps-->(195.5 damage per second)<br /><span><!--stat3-->+58 Agility</span><br /><span><!--stat7-->+60 Stamina</span><br />_WGPH_Durability 125 / 125<br />Classes: <a href="?class=4" class="c4">Rogue</a><br />Requires Level 80<br />Item Level 245<br /></td></tr></table><table><tr><td><span class="q2">Equip: Improves hit rating by <!--rtg31-->39&nbsp;<small>(<!--rtg%31-->1.19%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases attack power by 78.</span><br /><span class="q2">Equip: Improves melee haste rating by <!--rtg36-->39&nbsp;<small>(<!--rtg%36-->1.19%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><br /><span class="q"><a href="?itemset=699" class="q">The Twin Blades of Azzinoth</a> (0/2)</span><div class="q0 indent"><span><!--si32837--><a href="?item=32837">Warglaive of Azzinoth</a></span><br /><span><!--si32838--><a href="?item=32838">Warglaive of Azzinoth</a></span></div><br /><span class="q0"><span>(2) Set: Your Sinister Strike has a 100% chance to grant you an evolving insight into an opponent\'s defenses, increasing damage to that target by up to 10%. Opponents can adapt over time, negating this benefit, and Striking a different opponent will begin the cycle anew.</span><div class="q1 whtt-sellprice">Sell Price: <span class="moneygold">24</span> <span class="moneysilver">31</span> <span class="moneycopper">12</span></div></td></tr></table><!--?32837:1:80:80-->'
var warglaiveAFake = 32837
var fixWarglaiveA
var warglaiveBTxt = '<table><tr><td><b class="q5">Warglaive of Azzinoth</b><br /><!--bo-->Binds when picked up<br />Unique<table width="100%"><tr><td>Off Hand</td><th>Sword</th></tr></table><table width="100%"><tr><td><!--dmg-->186 - 365 Damage</td><th>Speed <!--spd-->1.40</th></tr></table><!--dps-->(196.8 damage per second)<br /><span><!--stat3-->+58 Agility</span><br /><span><!--stat7-->+60 Stamina</span><br />_WGPH_Durability 125 / 125<br />Classes: <a href="?class=4" class="c4">Rogue</a><br />Requires Level 80<br />Item Level 245<br /></td></tr></table><table><tr><td><span class="q2">Equip: Improves critical strike rating by <!--rtg32-->39&nbsp;<small>(<!--rtg%32-->0.85%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases your armor penetration rating by <!--rtg44-->39&nbsp;<small>(<!--rtg%44-->2.79%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases attack power by 78.</span><br /><br /><span class="q"><a href="?itemset=699" class="q">The Twin Blades of Azzinoth</a> (0/2)</span><div class="q0 indent"><span><!--si32837--><a href="?item=32837">Warglaive of Azzinoth</a></span><br /><span><!--si32838--><a href="?item=32838">Warglaive of Azzinoth</a></span></div><br /><span class="q0"><span>(2) Set: Your Sinister Strike has a 100% chance to grant you an evolving insight into an opponent\'s defenses, increasing damage to that target by up to 10%. Opponents can adapt over time, negating this benefit, and Striking a different opponent will begin the cycle anew.</span><br /></span><div class="q1 whtt-sellprice">Sell Price: <span class="moneygold">24</span> <span class="moneysilver">39</span> <span class="moneycopper">74</span></div></td></tr></table><!--?32838:1:80:80-->'
var warglaiveBFake = 32838
var fixWarglaiveB
var thunderfuryTxt = '<table><tr><td><b class="q5">Thunderfury, Blessed Blade of the Windseeker</b><br /><!--bo-->Binds when picked up<br />Unique<table width="100%"><tr><td>One-Hand</td><th>Sword</th></tr></table><table width="100%"><tr><td><!--dmg-->494 - 685 Damage</td><th>Speed <!--spd-->2.60</th></tr></table><!--dps-->(226.7 damage per second)<br /><span><!--stat3-->+69 Agility</span><br /><span><!--stat7-->+69 Stamina</span><br />_TFPH_Durability 125 / 125<br />Classes: <a href="?class=1" class="c1">Warrior</a>, <a href="?class=2" class="c2">Paladin</a><br />Requires Level 80<br />Item Level 264<br /></td></tr></table><table><tr><td><span class="q2">Equip: Improves hit rating by <!--rtg31-->44&nbsp;<small>(<!--rtg%31-->1.34%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases your expertise rating by <!--rtg37-->41&nbsp;<small>(<!--rtg%37-->5.00%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases attack power by <!--rtg38-->139.</span><br /><span class="q2">Chance on hit: Slashes a lightning charged weapon at the enemy, dealing 15% Stormstrike damage and then jumping to additional nearby enemies. Each jump reduces the damage by 30%. Affects 2 total targets. (2 procs per minute)</span><br /><div class="q1 whtt-sellprice">Sell Price: <span class="moneygold">12</span> <span class="moneysilver">59</span> <span class="moneycopper">28</span></div></td></tr></table><!--?132003:1:80:80-->'
var thunderfuryFake = 50738 // Mithrios, Bronzebeard's Legacy (has same socket. there is no real item with one blue socket and +8 dodge socket bonus)
var fixThunderfury
// Scythe tooltip hack
var scytheTxt = '<table><tr><td><b class="q5">Scythe of the Cat God</b><br /><!--bo-->Binds when picked up<br />Unique<table width="100%"><tr><td>Two-Hand</td><th>Polearm</th></tr></table><table width="100%"><tr><td><!--dmg-->761 - 1080 Damage</td><th>Speed <!--spd-->3.60</th></tr></table><!--dps-->(255.69 damage per second)<br /><span class=\"c11\"><!--fap-->(2813 Feral Attack Power)</span><br /><span><!--stat3-->+130 Agility</span><br /><span><!--stat7-->+142 Stamina</span><br />_SCYPH_Durability 145 / 145<br />Requires Level 80<br />Item Level 245<br /></td></tr></table><table><tr><td><span class="q2">Equip: Increases attack power by 177.</span><br /><span class="q2">Equip: Improves critical strike rating by <!--rtg32-->98&nbsp;<small>(<!--rtg%32-->2.13%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases your armor penetration rating by <!--rtg44-->92&nbsp;<small>(<!--rtg%44-->6.57%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Your finishing moves restore 4 energy per 1 combo point spent.</span><br /><div class="q1 whtt-sellprice">Sell Price: <span class="moneygold">38</span> <span class="moneysilver">75</span> <span class="moneycopper">22</span></div></td></tr></table><!--?132004:1:80:80-->'
var scytheFake = 50737 // Havoc's Call, Blade of Lordaeron Kings (has same socket. there is no real item with the correct socket+bonus, making this harder)
var fixScythe
// Atiesh tooltip hack
var atieshPriestMageTxt = '<table><tr><td><b class="q5">Atiesh, Greatstaff of the Guardian</b><br /><!--bo-->Binds when picked up<br />Unique<table width="100%"><tr><td>Two-Hand</td><th>Staff</th></tr></table><table width="100%"><tr><td><!--dmg-->231 - 427 Damage</td><th>Speed <!--spd-->2.10</th></tr></table><!--dps-->(156.7 damage per second)<br /><span class="c11"><!--fap-->(1426 Feral Attack Power)</span><br /><span><!--stat7-->+108 Stamina</span><br /><span><!--stat5-->+128 Intellect</span><br />_ATPH_Durability 145 / 145<br />Requires Level 80<br />Item Level 232<br /></td></tr></table><table><tr><td><span class="q2">Equip: Improves critical strike rating by <!--rtg32-->113&nbsp;<small>(<!--rtg%32-->2.46%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases your haste rating by <!--rtg36-->108&nbsp;<small>(<!--rtg%36-->3.29%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases spell power by <!--rtg45-->550.</span><br /><span class="q2">Equip: Your offensive spells have a chance on hit to increase your spell power by 285 for 10 sec.</span><br /><div class="q1 whtt-sellprice">Sell Price: <span class="moneygold">28</span> <span class="moneysilver">23</span> <span class="moneycopper">25</span></div></td></tr></table><!--?132005:1:80:80-->'
var atieshDruidTxt = '<table><tr><td><b class="q5">Atiesh, Greatstaff of the Guardian</b><br /><!--bo-->Binds when picked up<br />Unique<table width="100%"><tr><td>Two-Hand</td><th>Staff</th></tr></table><table width="100%"><tr><td><!--dmg-->231 - 427 Damage</td><th>Speed <!--spd-->2.10</th></tr></table><!--dps-->(156.7 damage per second)<br /><span class="c11"><!--fap-->(1426 Feral Attack Power)</span><br /><span><!--stat7-->+108 Stamina</span><br /><span><!--stat5-->+128 Intellect</span><br />_ATPH_Durability 145 / 145<br />Requires Level 80<br />Item Level 232<br /></td></tr></table><table><tr><td><span class="q2">Equip: Improves hit rating by <!--rtg31-->120&nbsp;<small>(<!--rtg%31-->3.66%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Improves critical strike rating by <!--rtg32-->113&nbsp;<small>(<!--rtg%32-->2.46%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases spell power by <!--rtg45-->550.</span><br /><span class="q2">Equip: Your offensive spells have a chance on hit to increase your spell power by 285 for 10 sec.</span><br /><div class="q1 whtt-sellprice">Sell Price: <span class="moneygold">28</span> <span class="moneysilver">23</span> <span class="moneycopper">25</span></div></td></tr></table><!--?132005:1:80:80-->'
var atieshPriest258Txt = '<table><tr><td><b class="q5">Atiesh, Greatstaff of the Guardian</b><br /><!--bo-->Binds when picked up<br />Unique<table width="100%"><tr><td>Two-Hand</td><th>Staff</th></tr></table><table width="100%"><tr><td><!--dmg-->231 - 427 Damage</td><th>Speed <!--spd-->2.10</th></tr></table><!--dps-->(156.7 damage per second)<br /><span class="c11"><!--fap-->(1426 Feral Attack Power)</span><br /><span><!--stat7-->+108 Stamina</span><br /><span><!--stat5-->+128 Intellect</span><br />_ATPH258_Durability 145 / 145<br />Requires Level 80<br />Item Level 258<br /></td></tr></table><table><tr><td><span class="q2">Equip: Improves critical strike rating by <!--rtg32-->144&nbsp;<small>(<!--rtg%32-->3.14%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases your haste rating by <!--rtg36-->137&nbsp;<small>(<!--rtg%36-->4.18%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases spell power by <!--rtg45-->701.</span><br /><span class="q2">Equip: Your offensive spells have a chance on hit to increase your spell power by 326 for 10 sec.</span><br /><div class="q1 whtt-sellprice">Sell Price: <span class="moneygold">28</span> <span class="moneysilver">23</span> <span class="moneycopper">25</span></div></td></tr></table><!--?132008:1:80:80-->'
var atieshFake = 45886 // Icecore Staff (has same sockets and bonus as Atiesh)
var fixAtiesh1
var fixAtiesh2
var fixAtiesh3
// Nightwing tooltip hack
var nightwingTxt = '<table><tr><td><b class="q5">Nightwing</b><br /><!--bo-->Binds when picked up<br />Unique<table width="100%"><tr><td>Two-Hand</td><th>Staff</th></tr></table><table width="100%"><tr><td><!--dmg-->347 - 641 Damage</td><th>Speed <!--spd-->2.60</th></tr></table><!--dps-->(190.0 damage per second)<br /><span><!--stat7-->+137 Stamina</span><br /><span><!--stat5-->+151 Intellect</span><br />_NWPH_Durability 145 / 145<br />Requires Level 80<br />Item Level 258<br /></td></tr></table><table><tr><td><span class="q2">Equip: Improves critical strike rating by <!--rtg32-->117&nbsp;<small>(<!--rtg%32-->2.55%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases your haste rating by <!--rtg36-->117&nbsp;<small>(<!--rtg%36-->3.57%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases spell power by <!--rtg45-->701.</span><br /><span class="q2">Equip: Your offensive spell casts have a 10% chance to summon a raven for 10 sec. The raven stores damage equal to 21% of your spell damage dealt, and unleashes it when it expires.</span><br /><div class="q1 whtt-sellprice">Sell Price: <span class="moneygold">36</span> <span class="moneysilver">35</span> <span class="moneycopper">18</span></div></td></tr></table><!--?132009:1:80:80-->'
var nightwingFake = 50648 // Nibelung (heroic) has matching 3 sockets (red, blue, yellow)
var fixNightwing
// Doomhammer tooltip hack
var doomhammerTxt = '<table><tr><td><b class="q5">Doomhammer</b><br /><!--bo-->Binds when picked up<br />Unique<table width="100%"><tr><td>Main Hand</td><th>Mace</th></tr></table><table width="100%"><tr><td><!--dmg-->357 - 666 Damage</td><th>Speed <!--spd-->2.60</th></tr></table><!--dps-->(196.73 damage per second)<br /><span><!--stat7-->+58 Stamina</span><br /><span><!--stat5-->+58 Intellect</span><br />_DHMH_Durability 125 / 125<br />Classes: <a href="?class=7" class="c7">Shaman</a><br />Requires Level 80<br />Item Level 258<br /></td></tr></table><table><tr><td><span class="q2">Equip: Improves critical strike rating by <!--rtg32-->39&nbsp;<small>(<!--rtg%32-->0.85%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases your haste rating by <!--rtg36-->58&nbsp;<small>(<!--rtg%36-->1.77%&nbsp;@&nbsp;L<!--lvl-->80)</small>.</span><br /><span class="q2">Equip: Increases spell power by <!--rtg45-->621.</span><br /><span class="q2">Equip: Your Flame Shock periodic damage has a 20% chance to reset Lava Burst and grant Lava Surge, making your next Lava Burst instant within 10 sec.</span><br /><div class="q1 whtt-sellprice">Sell Price: <span class="moneygold">31</span> <span class="moneysilver">15</span> <span class="moneycopper">42</span></div></td></tr></table><!--?132010:1:80:80-->'
var doomhammerFake = 50685 // Trauma has matching 1 yellow socket
var fixDoomhammer

// Hard switch for testing: disable legacy EvoWoW/Wowhead runtime and use only local CSV tooltips.
var __WOTLK_FORCE_LOCAL_TOOLTIPS = true;

// Local tooltip fallback:
// If remote Wowhead/Evowow resources fail (CORS/CORP/challenge), load tooltip HTML from
// same-origin static CSV files that are already shipped in assets/db_inputs.
(function scheduleLocalTooltipFallback() {
    var installAttempts = 0;

    function hasLegacyTooltipRuntime() {
        return !!(
            window.$WH &&
            typeof window.$WH.g_ajaxIshRequest === "function" &&
            window.$WH.Tooltip
        );
    }

    function installLocalTooltipRuntime() {
        if (window.__wotlkLocalTooltipsInstalled) {
            return;
        }
        window.__wotlkLocalTooltipsInstalled = true;

        var REPO_NAME = "wotlk";
        var pathParts = window.location.pathname.split("/");
        var repoIdx = pathParts.indexOf(REPO_NAME);
        var repoBase = repoIdx === -1 ? "" : "/" + REPO_NAME;
        var itemCsvUrl = repoBase + "/assets/db_inputs/wowhead_item_tooltips.csv";
        var spellCsvUrl = repoBase + "/assets/db_inputs/wowhead_spell_tooltips.csv";
        var enchantDescriptionsUrl = repoBase + "/assets/enchants/descriptions.json";
        var wowheadIconBaseUrl = "https://wow.zamimg.com/images/wow/icons/large/";

        var socketIconUrls = {
            "socket-red": "https://wow.zamimg.com/images/icons/socket-red.gif",
            "socket-yellow": "https://wow.zamimg.com/images/icons/socket-yellow.gif",
            "socket-blue": "https://wow.zamimg.com/images/icons/socket-blue.gif",
            "socket-meta": "https://wow.zamimg.com/images/icons/socket-meta.gif",
            "socket-prismatic": "https://wow.zamimg.com/images/icons/socket-prismatic.gif",
        };

        var legendaryItemTooltipOverrides = {
            130031: { tooltip: sunluteTxt, icon: "inv_weapon_bow_18" },
            131001: { tooltip: warglaiveATxt, icon: "inv_weapon_glave_01" },
            131002: { tooltip: warglaiveBTxt, icon: "inv_weapon_glave_01" },
            132001: { tooltip: sulfurasTxt, icon: "inv_hammer_unique_sulfuras" },
            132003: { tooltip: thunderfuryTxt, icon: "inv_sword_39" },
            132004: { tooltip: scytheTxt, icon: "inv_staff_2h_artifactelune_d_04" },
            132005: { tooltip: atieshPriestMageTxt, icon: "inv_staff_medivh" },
            132006: { tooltip: atieshDruidTxt, icon: "inv_staff_medivh" },
            132007: { tooltip: atieshPriestMageTxt, icon: "inv_staff_medivh" },
            132008: { tooltip: atieshPriest258Txt, icon: "inv_staff_medivh" },
            132009: { tooltip: nightwingTxt, icon: "inv_staff_107" },
            132010: { tooltip: doomhammerTxt, icon: "inv_mace_17" },
        };
        var legendaryItemTooltipSocketTemplates = {
            130031: { fakeId: sunluteFake, token: "_SLPH_" },
            131001: { fakeId: warglaiveAFake, token: "_WGPH_" },
            131002: { fakeId: warglaiveBFake, token: "_WGPH_" },
            132001: { fakeId: sulfurasFake, token: "_SULPH_" },
            132003: { fakeId: thunderfuryFake, token: "_TFPH_" },
            132004: { fakeId: scytheFake, token: "_SCYPH_" },
            132005: { fakeId: atieshFake, token: "_ATPH_" },
            132006: { fakeId: atieshFake, token: "_ATPH_" },
            132007: { fakeId: atieshFake, token: "_ATPH_" },
            132008: { fakeId: atieshFake, token: "_ATPH258_" },
            132009: { fakeId: nightwingFake, token: "_NWPH_" },
            132010: { fakeId: doomhammerFake, token: "_DHMH_" },
        };

        var itemMapPromise = null;
        var spellMapPromise = null;
        var enchantDescriptionsPromise = null;
        var activeAnchor = null;
        var activeRequestId = 0;
        var cursorX = 0;
        var cursorY = 0;

        var tooltipEl = document.createElement("div");
        tooltipEl.className = "wotlk-local-tooltip";
        tooltipEl.style.display = "none";

        var styleEl = document.createElement("style");
        styleEl.textContent =
            ".wotlk-local-tooltip{position:fixed;z-index:2147483000;max-width:560px;font-size:13px;line-height:1.35;pointer-events:none}" +
            ".wotlk-local-tooltip-frame{position:relative;background:#111;color:#ddd;border:1px solid #3a3a3a;border-radius:6px;box-shadow:0 10px 28px rgba(0,0,0,.55);padding:9px}" +
            ".wotlk-local-tooltip-frame.has-icon{margin-left:24px;padding-left:9px}" +
            ".wotlk-local-tooltip-scroll{max-height:70vh;overflow:auto}" +
            ".wotlk-local-tooltip-icon{position:absolute;left:-44px;top:0;width:40px;height:40px;border:1px solid #666;border-radius:3px;background:#080808;box-shadow:0 6px 12px rgba(0,0,0,.45)}" +
            ".wotlk-local-tooltip table{width:100% !important;max-width:100%;border-collapse:collapse}" +
            ".wotlk-local-tooltip td,.wotlk-local-tooltip th{font-size:13px !important;line-height:1.35 !important;vertical-align:top;padding:0}" +
            ".wotlk-local-tooltip th{text-align:right !important;white-space:nowrap}" +
            ".wotlk-local-tooltip small{font-size:11px !important}" +
            ".wotlk-local-tooltip .q0{color:#fff}" +
            ".wotlk-local-tooltip .q1{color:#fff}" +
            ".wotlk-local-tooltip .q2{color:#1eff00}" +
            ".wotlk-local-tooltip .q3{color:#0070dd}" +
            ".wotlk-local-tooltip .q4{color:#a335ee}" +
            ".wotlk-local-tooltip .q5{color:#ff8000}" +
            ".wotlk-local-tooltip .q8{color:#ffd100}" +
            ".wotlk-local-tooltip .wotlk-set-piece-missing,.wotlk-local-tooltip .wotlk-set-piece-missing a{color:#7f7f7f !important}" +
            ".wotlk-local-tooltip .wotlk-set-bonus-active,.wotlk-local-tooltip .wotlk-set-bonus-active a{color:#1eff00 !important}" +
            ".wotlk-local-tooltip .wotlk-set-bonus-missing,.wotlk-local-tooltip .wotlk-set-bonus-missing a{color:#7f7f7f !important}" +
            ".wotlk-local-tooltip .wotlk-socket-bonus-active,.wotlk-local-tooltip .wotlk-socket-bonus-active a{color:#1eff00 !important}" +
            ".wotlk-local-tooltip .wotlk-socket-bonus-missing,.wotlk-local-tooltip .wotlk-socket-bonus-missing a{color:#7f7f7f !important}" +
            ".wotlk-local-tooltip a{color:#9ecbff !important;text-decoration:none}" +
            ".wotlk-local-tooltip a.socket-red,.wotlk-local-tooltip a.socket-yellow,.wotlk-local-tooltip a.socket-blue,.wotlk-local-tooltip a.socket-meta,.wotlk-local-tooltip a.socket-prismatic{display:inline-flex;align-items:center;min-height:14px;padding-left:18px;background-repeat:no-repeat;background-size:14px 14px;background-position:left center}" +
            ".wotlk-local-tooltip a.socket-red{background-image:url('https://wow.zamimg.com/images/icons/socket-red.gif')}" +
            ".wotlk-local-tooltip a.socket-yellow{background-image:url('https://wow.zamimg.com/images/icons/socket-yellow.gif')}" +
            ".wotlk-local-tooltip a.socket-blue{background-image:url('https://wow.zamimg.com/images/icons/socket-blue.gif')}" +
            ".wotlk-local-tooltip a.socket-meta{background-image:url('https://wow.zamimg.com/images/icons/socket-meta.gif')}" +
            ".wotlk-local-tooltip a.socket-prismatic{background-image:url('https://wow.zamimg.com/images/icons/socket-prismatic.gif')}" +
            ".wotlk-local-tooltip .wotlk-socket-line{display:inline-flex;align-items:center;gap:2px;vertical-align:middle}" +
            ".wotlk-local-tooltip .wotlk-socketed-gem-slot{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;background-position:center;background-repeat:no-repeat;background-size:14px 14px}" +
            ".wotlk-local-tooltip .wotlk-socketed-gem-slot.socket-red{background-image:url('https://wow.zamimg.com/images/icons/socket-red.gif')}" +
            ".wotlk-local-tooltip .wotlk-socketed-gem-slot.socket-yellow{background-image:url('https://wow.zamimg.com/images/icons/socket-yellow.gif')}" +
            ".wotlk-local-tooltip .wotlk-socketed-gem-slot.socket-blue{background-image:url('https://wow.zamimg.com/images/icons/socket-blue.gif')}" +
            ".wotlk-local-tooltip .wotlk-socketed-gem-slot.socket-meta{background-image:url('https://wow.zamimg.com/images/icons/socket-meta.gif')}" +
            ".wotlk-local-tooltip .wotlk-socketed-gem-slot.socket-prismatic{background-image:url('https://wow.zamimg.com/images/icons/socket-prismatic.gif')}" +
            ".wotlk-local-tooltip .wotlk-socketed-gem-icon{width:14px;height:14px;display:block;border-radius:2px}" +
            ".wotlk-local-tooltip .wotlk-socketed-gem-text{white-space:nowrap;margin-left:0}" +
            ".wotlk-local-tooltip .moneygold,.wotlk-local-tooltip .moneysilver,.wotlk-local-tooltip .moneycopper{display:inline-flex;align-items:center;gap:2px;margin-right:4px}" +
            ".wotlk-local-tooltip .moneygold::after,.wotlk-local-tooltip .moneysilver::after,.wotlk-local-tooltip .moneycopper::after{content:'';display:inline-block;width:13px;height:13px;background-position:center;background-repeat:no-repeat;background-size:13px 13px}" +
            ".wotlk-local-tooltip .moneygold::after{background-image:url('https://wow.zamimg.com/images/icons/money-gold.gif')}" +
            ".wotlk-local-tooltip .moneysilver::after{background-image:url('https://wow.zamimg.com/images/icons/money-silver.gif')}" +
            ".wotlk-local-tooltip .moneycopper::after{background-image:url('https://wow.zamimg.com/images/icons/money-copper.gif')}";
        document.head.appendChild(styleEl);
        document.body.appendChild(tooltipEl);

        function parseCsvMap(csvText) {
            var map = {};
            var start = 0;

            while (start < csvText.length) {
                var end = csvText.indexOf("\n", start);
                if (end === -1) {
                    end = csvText.length;
                }

                var line = csvText.slice(start, end).trim();
                start = end + 1;

                if (!line) {
                    continue;
                }

                var commaIdx = line.indexOf(",");
                if (commaIdx <= 0) {
                    continue;
                }

                var id = parseInt(line.slice(0, commaIdx), 10);
                if (!id) {
                    continue;
                }

                try {
                    map[id] = JSON.parse(line.slice(commaIdx + 1));
                } catch (_err) {
                    // Skip malformed lines.
                }
            }

            return map;
        }

        function loadCsvMap(url) {
            return fetch(url).then(function (response) {
                if (!response.ok) {
                    throw new Error("Failed to load tooltip CSV: " + url);
                }
                return response.text();
            }).then(function (csvText) {
                return parseCsvMap(csvText);
            });
        }

        function getItemMap() {
            if (!itemMapPromise) {
                itemMapPromise = loadCsvMap(itemCsvUrl);
            }
            return itemMapPromise;
        }

        function getSpellMap() {
            if (!spellMapPromise) {
                spellMapPromise = loadCsvMap(spellCsvUrl);
            }
            return spellMapPromise;
        }

        function loadEnchantDescriptions(url) {
            return fetch(url).then(function (response) {
                if (!response.ok) {
                    throw new Error("Failed to load enchant descriptions: " + url);
                }
                return response.json();
            }).then(function (jsonData) {
                var map = {};
                if (!jsonData || typeof jsonData !== "object") {
                    return map;
                }

                for (var enchantId in jsonData) {
                    if (!Object.prototype.hasOwnProperty.call(jsonData, enchantId)) {
                        continue;
                    }
                    var parsedId = parseInt(enchantId, 10);
                    if (!parsedId) {
                        continue;
                    }

                    map[parsedId] = String(jsonData[enchantId] || "");
                }

                return map;
            });
        }

        function getEnchantDescriptionsMap() {
            if (!enchantDescriptionsPromise) {
                enchantDescriptionsPromise = loadEnchantDescriptions(enchantDescriptionsUrl).catch(function () {
                    return {};
                });
            }
            return enchantDescriptionsPromise;
        }

        function extractTargetFromString(value) {
            if (!value) {
                return null;
            }

            var match = value.match(/(?:[?&#/]|^)(item|spell)=(-?\d+)(?=$|[&#/?])/i);
            if (!match) {
                match = value.match(/(?:^|[,\s])(item|spell)[:=](-?\d+)/i);
            }

            if (!match) {
                return null;
            }

            var id = parseInt(match[2], 10);
            if (!id) {
                return null;
            }

            return {
                type: match[1].toLowerCase(),
                id: id,
            };
        }

        function parseTooltipParamsFromString(value) {
            var params = {};

            if (!value) {
                return params;
            }

            value.replace(/\b([a-z]+)=([a-z0-9:-]+)/ig, function (_fullMatch, rawKey, rawValue) {
                var key = rawKey.toLowerCase();

                if (key === "pcs") {
                    var pcs = rawValue.split(":").map(function (idStr) {
                        return parseInt(idStr, 10);
                    }).filter(function (id) {
                        return !!id;
                    });

                    if (pcs.length > 0) {
                        params.pcs = pcs;
                    }
                } else if (key === "gems") {
                    var gems = rawValue.split(":").map(function (idStr) {
                        var id = parseInt(idStr, 10);
                        return isNaN(id) ? 0 : id;
                    });

                    if (gems.length > 0) {
                        params.gems = gems;
                    }
                } else if (key === "ench") {
                    var enchantId = parseInt(rawValue, 10);
                    if (enchantId > 0) {
                        params.ench = enchantId;
                    }
                }

                return "";
            });

            return params;
        }

        function getAnchorTarget(anchor) {
            if (!anchor) {
                return null;
            }

            var datasetValue = null;
            if (anchor.dataset && Object.prototype.hasOwnProperty.call(anchor.dataset, "wowhead")) {
                datasetValue = anchor.dataset.wowhead;
            } else if (anchor.getAttribute) {
                datasetValue = anchor.getAttribute("data-wowhead");
            }

            var relValue = anchor.getAttribute("rel");
            var hrefValue = anchor.getAttribute("href");

            var target =
                extractTargetFromString(datasetValue) ||
                extractTargetFromString(relValue) ||
                extractTargetFromString(hrefValue);

            if (!target) {
                return null;
            }

            var params = {};
            var datasetParams = parseTooltipParamsFromString(datasetValue);
            var relParams = parseTooltipParamsFromString(relValue);
            var hrefParams = parseTooltipParamsFromString(hrefValue);

            if (datasetParams.pcs && datasetParams.pcs.length > 0) {
                params.pcs = datasetParams.pcs;
            } else if (relParams.pcs && relParams.pcs.length > 0) {
                params.pcs = relParams.pcs;
            } else if (hrefParams.pcs && hrefParams.pcs.length > 0) {
                params.pcs = hrefParams.pcs;
            }

            if (datasetParams.gems && datasetParams.gems.length > 0) {
                params.gems = datasetParams.gems;
            } else if (relParams.gems && relParams.gems.length > 0) {
                params.gems = relParams.gems;
            } else if (hrefParams.gems && hrefParams.gems.length > 0) {
                params.gems = hrefParams.gems;
            }

            if (datasetParams.ench) {
                params.ench = datasetParams.ench;
            } else if (relParams.ench) {
                params.ench = relParams.ench;
            } else if (hrefParams.ench) {
                params.ench = hrefParams.ench;
            }

            target.params = params;
            return target;
        }

        function sanitizeLegacyTooltipHtml(html) {
            return html.replace(/_[A-Z0-9]+_/g, "");
        }

        function ensureSocketIcons(html) {
            for (var cssClass in socketIconUrls) {
                if (!Object.prototype.hasOwnProperty.call(socketIconUrls, cssClass)) {
                    continue;
                }
                var socketRegex = new RegExp('class="([^"]*\\b' + cssClass + '\\b[^"]*)"', "gi");
                html = html.replace(socketRegex, function (_match, classList) {
                    if (/\bsocket-local-icon\b/.test(classList)) {
                        return 'class="' + classList + '"';
                    }
                    return 'class="' + classList + ' socket-local-icon"';
                });
            }

            return html;
        }

        function buildTooltipMarkup(html, icon) {
            if (!html) {
                return "";
            }

            html = ensureSocketIcons(html);

            var iconHtml = "";
            if (icon) {
                iconHtml =
                    '<img class="wotlk-local-tooltip-icon" src="' +
                    wowheadIconBaseUrl + icon.toLowerCase() + '.jpg" alt="">';
            }

            return (
                '<div class="wotlk-local-tooltip-frame' + (icon ? " has-icon" : "") + '">' +
                    iconHtml +
                    '<div class="wotlk-local-tooltip-scroll">' +
                        html +
                    '</div>' +
                '</div>'
            );
        }

        function applyLocalSetPieceCount(html, params) {
            if (!html || !params || !params.pcs || !params.pcs.length) {
                return html;
            }

            var equippedCount = 0;
            var setPieceAliases = {
                131001: [131001, 32837],
                131002: [131002, 32838],
                32837: [32837, 131001],
                32838: [32838, 131002],
            };
            var equippedSetPieceIds = {};

            for (var i = 0; i < params.pcs.length; ++i) {
                var setItemId = parseInt(params.pcs[i], 10);
                if (!setItemId) {
                    continue;
                }

                var candidateIds = setPieceAliases[setItemId] || [setItemId];
                for (var c = 0; c < candidateIds.length; ++c) {
                    equippedSetPieceIds[candidateIds[c]] = true;
                }
            }

            html = html.replace(/<span(?: class="[^"]*")?>(<!--si([0-9:]+)--><a href="[^"]*item=([0-9]+)[^"]*">(.+?)<\/a>)<\/span>/g, function (_fullMatch, innerHtml, _siToken, itemIdStr) {
                var tooltipSetItemId = parseInt(itemIdStr, 10);
                if (equippedSetPieceIds[tooltipSetItemId]) {
                    ++equippedCount;
                    return '<span class="q8">' + innerHtml + '</span>';
                }

                return '<span class="wotlk-set-piece-missing">' + innerHtml + '</span>';
            });

            if (equippedCount > 0) {
                html = html.replace(/\(0\/([0-9]+)\)/, "(" + equippedCount + "/$1)");
                html = html.replace(/<span>\(([0-9]+)\)/g, function (fullMatch, countStr) {
                    return parseInt(countStr, 10) <= equippedCount ? '<span class="q2">(' + countStr + ')' : fullMatch;
                });
            }

            html = html.replace(/<span>(\(([0-9]+)\)\s*Set\s*:[\s\S]*?)<\/span>/g, function (_fullMatch, innerHtml, requiredCountStr) {
                var requiredCount = parseInt(requiredCountStr, 10);
                var bonusClass = requiredCount <= equippedCount ? "wotlk-set-bonus-active" : "wotlk-set-bonus-missing";
                return '<span class="' + bonusClass + '">' + innerHtml + "</span>";
            });

            return html;
        }

        function escapeHtml(text) {
            return String(text || "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");
        }

        function decodeHtmlEntities(text) {
            if (!text) {
                return "";
            }

            var textarea = document.createElement("textarea");
            textarea.innerHTML = text;
            return textarea.value;
        }

        function insertTooltipExtraLines(html, lines) {
            if (!html || !lines || !lines.length) {
                return html;
            }

            var extraHtml = "<br>" + lines.join("<br>") + "<br>";

            if (html.indexOf('class="whtt-sellprice"') !== -1) {
                return html.replace(/<div class="whtt-sellprice">/, extraHtml + '<div class="whtt-sellprice">');
            }

            var tooltipTailIdx = html.lastIndexOf("</td></tr></table>");
            if (tooltipTailIdx !== -1) {
                return html.slice(0, tooltipTailIdx) + extraHtml + html.slice(tooltipTailIdx);
            }

            return html + extraHtml;
        }

        function extractGemBonusText(gemEntry) {
            if (!gemEntry) {
                return "";
            }

            var tooltip = gemEntry.tooltip || "";
            var bonusMatch = tooltip.match(/<span class="q1">([\s\S]*?)<\/span>/i);
            var rawText = bonusMatch ? bonusMatch[1] : (gemEntry.name || "");

            rawText = rawText
                .replace(/<a [^>]*>([\s\S]*?)<\/a>/gi, "$1")
                .replace(/<[^>]+>/g, "");

            return decodeHtmlEntities(rawText).replace(/\s+/g, " ").trim();
        }

        function getGemMatchColors(gemEntry) {
            var colors = {
                red: false,
                yellow: false,
                blue: false,
                meta: false,
                prismatic: false,
            };

            if (!gemEntry || !gemEntry.tooltip) {
                return colors;
            }

            var tooltipText = decodeHtmlEntities(gemEntry.tooltip.replace(/<[^>]+>/g, " ")).toLowerCase();
            if (tooltipText.indexOf("only fits in a meta gem slot") !== -1) {
                colors.meta = true;
                return colors;
            }

            if (tooltipText.indexOf("matches any socket") !== -1) {
                colors.red = true;
                colors.yellow = true;
                colors.blue = true;
                colors.prismatic = true;
                return colors;
            }

            if (tooltipText.indexOf("red socket") !== -1) {
                colors.red = true;
            }
            if (tooltipText.indexOf("yellow socket") !== -1) {
                colors.yellow = true;
            }
            if (tooltipText.indexOf("blue socket") !== -1) {
                colors.blue = true;
            }
            if (tooltipText.indexOf("meta socket") !== -1) {
                colors.meta = true;
            }

            return colors;
        }

        function parseSocketColorFromAnchorHtml(socketAnchorHtml) {
            var socketClassMatch = socketAnchorHtml.match(/\bsocket-(red|yellow|blue|meta|prismatic)\b/i);
            return socketClassMatch ? socketClassMatch[1].toLowerCase() : "";
        }

        function gemMatchesSocketColor(gemEntry, socketColor) {
            if (!gemEntry || !socketColor) {
                return false;
            }

            var colors = getGemMatchColors(gemEntry);
            if (socketColor === "meta") {
                return colors.meta;
            }

            if (socketColor === "prismatic") {
                return (colors.red || colors.yellow || colors.blue || colors.prismatic) && !colors.meta;
            }

            if (colors.prismatic) {
                return true;
            }

            return !!colors[socketColor];
        }

        function applySocketedGemBonuses(html, gemSocketIds, itemMap) {
            if (!html || !gemSocketIds || !gemSocketIds.length) {
                return { html: html, socketBonusActive: null };
            }

            var socketIdx = 0;
            var hasSockets = false;
            var allSocketsMatched = true;

            var enhancedHtml = html.replace(/<a href="[^"]*" class="[^"]*\bsocket-(?:red|yellow|blue|meta|prismatic)[^"]*">[\s\S]*?<\/a>/ig, function (socketAnchorHtml) {
                hasSockets = true;
                var gemId = parseInt(gemSocketIds[socketIdx], 10) || 0;
                socketIdx += 1;
                var socketColor = parseSocketColorFromAnchorHtml(socketAnchorHtml);
                var gemEntry = gemId ? itemMap[gemId] : null;
                var isSocketMatched = gemId > 0 && gemMatchesSocketColor(gemEntry, socketColor);
                var stateClass = isSocketMatched ? "wotlk-socket-bonus-active" : "wotlk-socket-bonus-missing";

                if (!gemId) {
                    allSocketsMatched = false;
                    return socketAnchorHtml;
                }

                if (!isSocketMatched) {
                    allSocketsMatched = false;
                }

                var bonusText = extractGemBonusText(gemEntry);
                if (!bonusText) {
                    bonusText = gemEntry && gemEntry.name ? gemEntry.name : ("Gem #" + gemId);
                }
                var gemIconHtml = "";
                if (gemEntry && gemEntry.icon) {
                    gemIconHtml =
                        '<img class="wotlk-socketed-gem-icon" src="' +
                        wowheadIconBaseUrl + String(gemEntry.icon).toLowerCase() + '.jpg" alt="">';
                }

                return (
                    '<span class="wotlk-socket-line">' +
                        '<span class="wotlk-socketed-gem-slot socket-' + socketColor + '">' + gemIconHtml + "</span>" +
                        '<a href="?item=' + gemId + '" data-wowhead="item=' + gemId + '&domain=wotlk" class="wotlk-socketed-gem-text q2">' + escapeHtml(bonusText) + "</a>" +
                    "</span>"
                );
            });

            return {
                html: enhancedHtml,
                socketBonusActive: hasSockets ? allSocketsMatched : null,
            };
        }

        function applySocketBonusState(html, socketBonusActive) {
            if (!html || socketBonusActive == null) {
                return html;
            }

            var socketBonusClass = socketBonusActive ? "wotlk-socket-bonus-active" : "wotlk-socket-bonus-missing";
            return html.replace(
                /<span class="q[0-9]">\s*Socket Bonus:\s*([\s\S]*?)<\/span>/i,
                '<span class="' + socketBonusClass + '">Socket Bonus: $1</span>'
            );
        }

        function applyEnchantLine(html, enchantText) {
            if (!html || !enchantText) {
                return html;
            }

            var enchantLine = '<span class="q2">' + escapeHtml(enchantText) + "</span>";
            if (html.indexOf(enchantLine) !== -1) {
                return html;
            }

            if (/<br\s*\/?>\s*<br\s*\/?>\s*<a href="[^"]*" class="[^"]*\bsocket-/i.test(html)) {
                return html.replace(/(<br\s*\/?>\s*<br\s*\/?>)(\s*<a href="[^"]*" class="[^"]*\bsocket-[^"]*")/i, "<br />" + enchantLine + "$1$2");
            }

            if (/<a href="[^"]*" class="[^"]*\bsocket-/i.test(html)) {
                return html.replace(/(\s*<a href="[^"]*" class="[^"]*\bsocket-[^"]*")/i, "<br />" + enchantLine + "<br />$1");
            }

            if (/Durability\s+[0-9]+\s*\/\s*[0-9]+/i.test(html)) {
                return html.replace(/(Durability\s+[0-9]+\s*\/\s*[0-9]+)/i, enchantLine + "<br />$1");
            }

            return insertTooltipExtraLines(html, [enchantLine]);
        }

        function applyLegendarySocketTemplate(itemId, html, itemMap) {
            var template = legendaryItemTooltipSocketTemplates[itemId];
            if (!template || !html || html.indexOf(template.token) === -1) {
                return html;
            }

            var fakeEntry = itemMap[template.fakeId];
            if (!fakeEntry || !fakeEntry.tooltip) {
                return html;
            }

            var fakeTooltip = sanitizeLegacyTooltipHtml(fakeEntry.tooltip);
            var socketBlock = fakeTooltip.match(/((?:<span class="q2">)?<!--e-->.*?)Durability/);
            if (!socketBlock || !socketBlock[1]) {
                return html;
            }

            var fixedHtml = html.replace(template.token, socketBlock[1]);

            if (itemId === 132001) {
                fixedHtml = fixedHtml.replace('Bonus: <a href="?enchantment=3312">+8 Strength', 'Bonus: <a href="?enchantment=3312">+12 Dodge Rating');
            } else if (itemId === 132003) {
                fixedHtml = fixedHtml.replace('Bonus: <a href="?enchantment=2868">+6 Stamina', 'Bonus: <a href="?enchantment=2868">+8 Dodge Rating');
            } else if (itemId === 132004) {
                fixedHtml = fixedHtml.replace('Bonus: <a href="?enchantment=2877">+4 Agility', 'Bonus: <a href="?enchantment=3313">+8 Agility');
            } else if (itemId === 132009) {
                fixedHtml = fixedHtml.replace(/\+9 Spell Power/g, "+7 Spell Power");
            } else if (itemId === 132010) {
                fixedHtml = fixedHtml.replace(/\+5 Spell Power/g, "+4 Haste Rating");
            }

            return fixedHtml;
        }

        function hasSocketLines(html) {
            return /class="[^"]*\bsocket-(?:red|yellow|blue|meta|prismatic)\b/i.test(html || "");
        }

        function applyEquippedItemEnhancements(html, params, itemMap) {
            if (!html || !params) {
                return Promise.resolve(html);
            }

            var gemSocketIds = (params.gems || []).map(function (gemId) {
                var parsedId = parseInt(gemId, 10);
                return isNaN(parsedId) ? 0 : parsedId;
            });
            var enchantId = parseInt(params.ench || 0, 10);

            if (!gemSocketIds.length && !enchantId) {
                return Promise.resolve(html);
            }

            var finalize = function (enchantDescriptions) {
                var modifiedHtml = html;
                if (enchantId) {
                    var enchantText = enchantDescriptions[enchantId] || "";
                    modifiedHtml = applyEnchantLine(modifiedHtml, enchantText);
                }

                var socketBonusState = applySocketedGemBonuses(modifiedHtml, gemSocketIds, itemMap);
                modifiedHtml = socketBonusState.html;
                modifiedHtml = applySocketBonusState(modifiedHtml, socketBonusState.socketBonusActive);
                return modifiedHtml;
            };

            if (!enchantId) {
                return Promise.resolve(finalize({}));
            }

            return getEnchantDescriptionsMap().then(function (enchantDescriptions) {
                return finalize(enchantDescriptions || {});
            }).catch(function () {
                return finalize({});
            });
        }

        function getTooltipData(type, id, params) {
            if (type === "item") {
                return getItemMap().then(function (map) {
                    var entry = map[id];
                    var override = legendaryItemTooltipOverrides[id];
                    var html = "";
                    var icon = "";
                    var shouldForceLegendaryTemplate = false;

                    if (!entry && override) {
                        html = sanitizeLegacyTooltipHtml(override.tooltip || "");
                        icon = override.icon || "";
                        html = applyLegendarySocketTemplate(id, html, map);
                    } else if (entry && override) {
                        html = entry.tooltip || "";
                        icon = entry.icon || override.icon || "";
                        shouldForceLegendaryTemplate = !hasSocketLines(html);
                    } else {
                        html = entry ? (entry.tooltip || "") : "";
                        icon = entry ? (entry.icon || "") : (override ? override.icon : "");
                    }

                    if (shouldForceLegendaryTemplate) {
                        html = sanitizeLegacyTooltipHtml(override.tooltip || "");
                        html = applyLegendarySocketTemplate(id, html, map);
                    }

                    html = applyLocalSetPieceCount(html, params);

                    return applyEquippedItemEnhancements(html, params, map).then(function (finalHtml) {
                        return {
                            html: finalHtml,
                            icon: icon,
                        };
                    });
                });
            }
            if (type === "spell") {
                return getSpellMap().then(function (map) {
                    var entry = map[id];
                    if (!entry) {
                        return { html: "", icon: "" };
                    }
                    return {
                        html: entry.tooltip || entry.buff || "",
                        icon: entry.icon || "",
                    };
                });
            }
            return Promise.resolve({ html: "", icon: "" });
        }

        function positionTooltip() {
            if (tooltipEl.style.display === "none") {
                return;
            }

            var padX = 32;
            var padY = 6;
            var left = cursorX + padX;
            var top = cursorY + padY;
            var rect = tooltipEl.getBoundingClientRect();

            if (left + rect.width > window.innerWidth - 8) {
                left = Math.max(8, cursorX - rect.width - padX);
            }
            if (top + rect.height > window.innerHeight - 8) {
                top = Math.max(8, cursorY - rect.height - padY);
            }

            tooltipEl.style.left = left + "px";
            tooltipEl.style.top = top + "px";
        }

        function hideTooltip() {
            tooltipEl.style.display = "none";
            tooltipEl.innerHTML = "";
        }

        function showTooltip(tooltipData) {
            if (!tooltipData || !tooltipData.html) {
                hideTooltip();
                return;
            }
            tooltipEl.innerHTML = buildTooltipMarkup(tooltipData.html, tooltipData.icon);
            tooltipEl.style.display = "block";
            positionTooltip();
        }

        function findTooltipSource(node) {
            while (node) {
                if (node.getAttribute && node.getAttribute("data-wowhead")) {
                    return node;
                }
                if (node.tagName === "A" || node.tagName === "AREA") {
                    return node;
                }
                node = node.parentNode;
            }
            return null;
        }

        function isInsideTooltipSource(node, source) {
            return !!(node && source && (node === source || source.contains(node)));
        }

        document.addEventListener("mousemove", function (event) {
            cursorX = event.clientX;
            cursorY = event.clientY;
            positionTooltip();
        }, true);

        document.addEventListener("mouseover", function (event) {
            var source = findTooltipSource(event.target);
            var target = getAnchorTarget(source);

            if (!target) {
                return;
            }

            activeAnchor = source;
            activeRequestId += 1;
            var requestId = activeRequestId;

            getTooltipData(target.type, target.id, target.params).then(function (tooltipData) {
                if (requestId !== activeRequestId || activeAnchor !== source) {
                    return;
                }
                showTooltip(tooltipData);
            }).catch(function () {
                if (requestId === activeRequestId) {
                    hideTooltip();
                }
            });
        }, true);

        document.addEventListener("mouseout", function (event) {
            if (!activeAnchor) {
                return;
            }

            var fromActiveAnchor = isInsideTooltipSource(event.target, activeAnchor);
            var toActiveAnchor = isInsideTooltipSource(event.relatedTarget, activeAnchor);

            if (fromActiveAnchor && !toActiveAnchor) {
                activeAnchor = null;
                hideTooltip();
            }
        }, true);
    }

    function maybeInstallFallback() {
        if (__WOTLK_FORCE_LOCAL_TOOLTIPS) {
            installLocalTooltipRuntime();
            return;
        }

        if (hasLegacyTooltipRuntime()) {
            return;
        }

        installAttempts += 1;
        if (installAttempts < 6) {
            setTimeout(maybeInstallFallback, 200);
            return;
        }

        installLocalTooltipRuntime();
    }

    setTimeout(maybeInstallFallback, 200);
})();

if (!__WOTLK_FORCE_LOCAL_TOOLTIPS && typeof $WH == "undefined") {
    $WH = { wowheadRemote: true };

    /* custom */
    var g_host      = 'https://wotlk.evowow.com';
    var g_staticUrl = 'https://wotlk.evowow.com/static';
}

if (!__WOTLK_FORCE_LOCAL_TOOLTIPS && typeof $WowheadPower == "undefined") {
    var $WowheadPower = new function () {
        var isRemote = $WH.wowheadRemote;
        var
            opt  = { applyto: 3 },
            head = document.getElementsByTagName("head")[0],
            whcss,
            currentType,
            currentId,
            currentLocale,
            currentDomain,
            currentParams,
            currentA,

            cursorX,
            cursorY,

            mode = 0,

            eventAttached = false,

            npcs         = {},
            objects      = {},
            items        = {},
            quests       = {},
            spells       = {},
            achievements = {},
            holidays     = {},
            itemsets     = {},
            currencies   = {},
            profiles     = {},
            guides       = {},

            showLogo = 1,

            STATUS_NONE     = 0,
            STATUS_QUERYING = 1,
            STATUS_ERROR    = 2,
            STATUS_NOTFOUND = 3,
            STATUS_OK       = 4,
            STATUS_SCALES   = 5,

            SCALES_NONE     = 0,
            SCALES_LOADED   = 1,
            SCALES_QUERYING = 2,

            TYPE_NPC         = 1,
            TYPE_OBJECT      = 2,
            TYPE_ITEM        = 3,
            TYPE_ITEMSET     = 4,
            TYPE_QUEST       = 5,
            TYPE_SPELL       = 6,
            TYPE_ACHIEVEMENT = 10,
            TYPE_HOLIDAY     = 12,
            TYPE_CURRENCY    = 17,
            TYPE_PROFILE     = 100,
            TYPE_GUIDE       = 300,

            CURSOR_HSPACE = 15,
            CURSOR_VSPACE = 15,

            _LANG = {
                0: { achievementComplete: "Achievement earned by $1 on $2/$3/$4",     loading: "Loadingâ€¦",    noResponse: "No response from server :(",       notFound: "$1 Not Found"       },
                2: { achievementComplete: "Haut-fait reÃ§u par $1 le $2/$3/$4",        loading: "Chargementâ€¦", noResponse: "Pas de rÃ©ponse du serveur :(",     notFound: "$1 non trouvÃ©"      },
                3: { achievementComplete: "Erfolg wurde von $1 am $3.$2.$4 errungen", loading: "LÃ¤dtâ€¦",       noResponse: "Keine Antwort vom Server :(",      notFound: "$1 nicht gefunden"  },
                4: { achievementComplete: "$1åœ¨$2/$3/$4ä¸ŠèŽ·å¾—æˆå°±",                     loading: "æ­£åœ¨è½½å…¥â€¦",    noResponse: "æœåŠ¡å™¨æ²¡æœ‰å“åº” :(",                   notFound: "$1æœªæ‰¾åˆ°"            },
                8: { achievementComplete: "$1 Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ð»(Ð°) ÑÑ‚Ð¾ Ð´Ð¾ÑÑ‚Ð¸Ð¶ÐµÐ½Ð¸Ðµ $2/$3/$4",    loading: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ°â€¦",   noResponse: "ÐÐµÑ‚ Ð¾Ñ‚Ð²ÐµÑ‚Ð° Ð¾Ñ‚ ÑÐµÑ€Ð²ÐµÑ€Ð° :(",         notFound: "$1 Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½Ð¾"      },
                6: { achievementComplete: "Logro conseguido por $1 el $2/$3/$4",      loading: "Cargandoâ€¦",   noResponse: "No hay respuesta del servidor :(", notFound: "$1 no encontrado/a" },
            },
            LOOKUPS = {
                  1: [npcs,         "npc",         "NPC"        ],
                  2: [objects,      "object",      "Object"     ],
                  3: [items,        "item",        "Item"       ],
                  4: [itemsets,     "itemset",     "Item Set"   ],
                  5: [quests,       "quest",       "Quest"      ],
                  6: [spells,       "spell",       "Spell"      ],
                 10: [achievements, "achievement", "Achievement"],
                 12: [holidays,     "event",       "Holiday"    ],
                 17: [currencies,   "currency",    "Currency"   ],
                100: [profiles,     "profile",     "Profile"    ],
                300: [guides,       "guide",       "Guide"      ]
            },
            SCALES = {
                3: { url: "?data=item-scaling" },
                6: { url: "?data=item-scaling" }
            },
            LOCALES = {
                0: "enus",
                2: "frfr",
                3: "dede",
                4: "zhcn",
                6: "eses",
                8: "ruru"
            },
            REDIRECTS = {
             // wotlk: "www",
             // ptr:   "www"
            };

        if (isRemote) {
            var Locale = {
                getId: function () {
                    return 0;
                },
                getName: function () {
                    return "enus";
                }
            }
        }

        function init() {
            if (isRemote) {
                var script = document.createElement("script");
                // script.src = (document.location.protocol != "https:" ? "http:": document.location.protocol) + "//wowjs.zamimg.com/js/basic.js?5";
                script.src = g_staticUrl + "/js/basic.js";
                head.appendChild(script);
            }
            else {
                attachEvent();
            }

            for (var type in SCALES) {
                for (var localeId in LOCALES) {
                    SCALES[type][localeId] = SCALES_NONE
                }
            }
        }

        function initCSS() {
            if (typeof aowow_tooltips == "undefined") {
                return;
            }

            if (!("hide" in aowow_tooltips)) {
                return;
            }

            if (typeof whcss != "undefined") {
                return;
            }

            if (!document.styleSheets) {
                return
            }

            var style = document.createElement("style");
            style.type = "text/css";
            head.appendChild(style);

            if (!window.createPopup) {
                head.appendChild(document.createTextNode(""));
            }

            whcss = document.styleSheets[document.styleSheets.length - 1];
            for (var k in aowow_tooltips.hide) {
                if (!aowow_tooltips.hide[k]) {
                    continue;
                }

                if (whcss.insertRule) {
                    whcss.insertRule(".wowhead-tooltip .whtt-" + k + "{display : none}", whcss.cssRules.length);
                }
                else if (whcss.addRule) {
                    whcss.addRule(".wowhead-tooltip .whtt-" + k, "display : none", -1);
                }
            }
        }

        function attachEvent() {
            if (eventAttached) {
                return;
            }

            eventAttached = true;
            $WH.aE(document, "mouseover", onMouseOver);
        }

        function onDOMReady(func) {
            if (typeof jQuery != "undefined") {
                jQuery(func);
                return
            }
            /in/.test(document.readyState) ? setTimeout(onDOMReady.bind(null, func), 9) : func();
        }

        this.init = function () {
            if (isRemote) {
                $WH.ae(head, $WH.ce("link", {
                    type: "text/css",
                    // href: (document.location.protocol != "https:" ? "http:": document.location.protocol) + "//wowcss.zamimg.com/css/basic.css?5",
                    href: g_staticUrl + "/css/basic.css",
                    rel:  "stylesheet"
                }));
            }
            attachEvent();

            onDOMReady(function () {
                if (typeof aowow_tooltips != "undefined") {
                    for (var i = 0; i < document.links.length; i++) {
                        var link = document.links[i];
                        scanElement(link);
                    }

                    initCSS();
                }
            });
        };

        function updateCursorPos(e) {
            var pos = $WH.g_getCursorPos(e);
            cursorX = pos.x;
            cursorY = pos.y;
        }

        function scanElement(t, e) {
            if (t.nodeName != "A" && t.nodeName != "AREA") {
                return -2323;
            }

            var rel = t.rel;
            try {
                if (t.dataset && t.dataset.hasOwnProperty("wowhead")) {
                    rel = t.dataset.wowhead;
                }
                else if (t.getAttribute && t.getAttribute("data-wowhead")) {
                    rel = t.getAttribute("data-wowhead");
                }
            }
            catch(e) { void(0); }

            if (!t.href.length && !rel) {
                return;
            }

            if (rel && /^np\b/.test(rel)) {
                return;
            }

            if (t.getAttribute("data-disable-wowhead-tooltip") == "true") {
                return;
            }

            var
                i0,
                i1,
                i2,
                url,
                params = {};

            currentParams = params;

            var p = function (url, k, v) {
                if (k == "buff" || k == "sock" || k == "map") {
                    params[k] = true;
                }
                else  if (k == "rand" || k == "ench" || k == "lvl" || k == "c") {
                    params[k] = parseInt(v);
                }
                else if (k == "gems" || k == "pcs" || k == "know" || k == "cri") {
                    params[k] = v.split(":");
                }
                else if (k == "who" || k == "domain") {
                    params[k] = v;
                }
                else if (k == "when") {
                    params[k] = new Date(parseInt(v));
                }
                else if (k == "premium") {
                    params[k] = true;
                }
                else if (k == "text") {
                    params[k] = true;
                }
            };

            if (opt.applyto & 1) {
                i1 = 2;
                i2 = 3;
                if (t.href.indexOf("http://") == 0 || t.href.indexOf("https://") == 0) {
                    i0 = 1;
                    // url = t.href.match(/^https?:\/\/(.+?)?\.?wowhead\.com(?:\:\d+)?\/\??(item|quest|spell|achievement|event|npc|object|itemset|currency)=(-?[0-9]+)/);
                    url = t.href.match(/^https?:\/\/(.*)\/?\??(item|quest|spell|achievement|event|npc|object|itemset|currency)=(-?[0-9]+)/);
                    if (url == null) {
                        // url = t.href.match(/^http:\/\/(.+?)?\.?wowhead\.com\/\?(profile)=([^&#]+)/)
                        url = t.href.match(/^https?:\/\/(.*)\/?\??(profile|guide)=([^&#]+)/);
                    }

                    showLogo = 0;
                }
                else {
                    url = t.href.match(/()\?(item|quest|spell|achievement|event|npc|object|itemset|currency)=(-?[0-9]+)/);
                    if (url == null) {
                        url = t.href.match(/()\?(profile|guide)=([^&#]+)/);
                    }

                    showLogo = 1;
                }
            }

            if (url == null && rel && (opt.applyto & 2)) {
                i0 = 0;
                i1 = 1;
                i2 = 2;
                url = rel.match(/(item|quest|spell|achievement|event|npc|object|itemset|currency).?(-?[0-9]+)/);
                // if (url == null) {                       // aowow: also matches 'profiler' and 'profiles' which screws with the language-menu workaround
                    // url = rel.match(/(profile).?([^&#]+)/);
                // }
                showLogo = 1;
            }

            // aowow - skip protected guide names
            if (url && url[2] == 'guide' && (url[3] == 'new' || url[3] == 'edit' || url[3] == 'changelog'))
                return;

            t.href.replace(/([a-zA-Z]+)=?([a-zA-Z0-9:-]*)/g, p);
            if (rel) {
                rel.replace(/([a-zA-Z]+)=?([a-zA-Z0-9:-]*)/g, p);
            }

            if (params.gems && params.gems.length > 0) {
                var i;
                for (i = Math.min(3, params.gems.length - 1); i >= 0; --i) {
                    if (parseInt(params.gems[i])) {
                        break;
                    }
                }
                ++i;

                if (i == 0) {
                    delete params.gems;
                }
                else if (i < params.gems.length) {
                    params.gems = params.gems.slice(0, i);
                }
            }

            if (url) {
                var
                    locale,
                    domain = "www";

                currentA = t;
                if (params.domain) {
                    domain = params.domain;
                }
                else if (i0 && url[i0]) {
                    // domain = url[i0];
                    domain = url[i0].split(".")[0];
                }
                else if (typeof window.Locale == 'object') {// aowow - Locale is known, just out of scope...?
                    domain = window.Locale.current.domain;
                }

                if (REDIRECTS[domain]) {
                    domain = REDIRECTS[domain];
                }

                locale = $WH.g_getLocaleFromDomain(domain);

                /* edit start */
                if ($WH.in_array(['fr', 'de', 'cn', 'es', 'ru', 'en'], domain) == -1) {
                    for (i in document.scripts) {
                        if (!document.scripts[i].src)
                            continue;

                        var dmn = document.scripts[i].src.match(/widgets\/power.js\?(lang|locale)=(en|fr|de|cn|es|ru)/i);
                        if (dmn) {
                            domain = dmn[2];
                            locale = $WH.g_getLocaleFromDomain(dmn[2]);
                            break;
                        }
                    }
                }
                /* end of edit */

                currentDomain = domain;
                if (t.href.indexOf("#") != -1 && document.location.href.indexOf(url[i1] + "=" + url[i2]) != -1) {
                    return;
                }

                mode = t.parentNode.className.indexOf("icon") == 0 && t.parentNode.nodeName == "DIV" ? 1 : 0;
                if (!t.onmouseout) {
                    if (mode == 0) {
                        t.onmousemove = onMouseMove;
                    }
                    t.onmouseout = onMouseOut;
                }

                if (e) {
                    updateCursorPos(e);
                }

                var
                    type = $WH.g_getIdFromTypeName(url[i1]),
                    typeId = url[i2];

                display(type, typeId, locale, params);

                if (e || typeof aowow_tooltips == "undefined") {
                    return;
                }

                var data = LOOKUPS[type][0][getFullId(typeId, params)];

                var timeout = function (t) {
                    if (data.status[locale] != STATUS_OK && data.status[locale] != STATUS_NOTFOUND) {
                        window.setTimeout(function () {
                            timeout(t);
                        }, 5);

                        return;
                    }

                    if (aowow_tooltips.renamelinks) {
                        eval("name = data.name_" + LOCALES[locale]);
                        if (name) {
                            t.innerHTML = '<span>' + name + '</span>';
                        }
                    }

                    if (aowow_tooltips.iconizelinks && (type == TYPE_ITEM || type == TYPE_ACHIEVEMENT || type == TYPE_SPELL) && data.icon) {
                        // t.children[0].style.marginLeft = "18px";
                        t.className += " icontinyl";
                        // t.style.paddingLeft = "18px !important";
                        t.setAttribute("style", t.getAttribute("style") + "; padding-left:18px !important;");
                        t.style.verticalAlign = "center";
                        // t.style.background = "url(" + (document.location.protocol != "https:" ? "http:": document.location.protocol) + "//wowimg.zamimg.com/images/wow/icons/tiny/" + data.icon.toLocaleLowerCase() + ".gif) left center no-repeat"
                        t.style.background = "url(" + g_staticUrl + "/images/wow/icons/tiny/" + data.icon.toLocaleLowerCase() + ".gif) left center no-repeat"
                    }

                    if (aowow_tooltips.colorlinks) {
                        if (type == TYPE_ITEM) {
                            t.className += " q" + data.quality;
                        }
                    }
                };
                timeout(t);
            }
        }

        function onMouseOver(e) {
            e = $WH.$E(e);
            var t = e._target;
            var i = 0;
            while (t != null && i < 5 && scanElement(t, e) == -2323) {
                t = t.parentNode;
                ++i;
            }
        }

        function onMouseMove(e) {
            e = $WH.$E(e);
            updateCursorPos(e);
            $WH.Tooltip.move(cursorX, cursorY, 0, 0, CURSOR_HSPACE, CURSOR_VSPACE);
        }

        function onMouseOut() {
            currentType = null;
            currentA = null;
            $WH.Tooltip.hide();
        }

        function getTooltipField(locale, n) {
            var prefix = "tooltip";

            if (currentParams && currentParams.buff) {
                prefix = "buff";
            }

            if (currentParams && currentParams.text) {
                prefix = "text";
            }

            if (currentParams && currentParams.premium) {
                prefix = "tooltip_premium";
            }

            return prefix + (n ? n : "") + "_" + LOCALES[locale];
        }

        function getIconField() {
            return (currentParams && currentParams.text) ? "text_icon" : "icon";
        }

        function getSpellsField(locale) {
            return (currentParams && currentParams.buff ? "buff" : "") + "spells_" + LOCALES[locale];
        }

        function initElement(type, id, locale) {
            var arr = LOOKUPS[type][0];

            if (arr[id] == null) {
                arr[id] = {};
            }

            if (arr[id].status == null) {
                arr[id].status = {};
            }

            if (arr[id].response == null) {
                arr[id].response = {};
            }

            if (arr[id].status[locale] == null) {
                arr[id].status[locale] = STATUS_NONE;
            }
        }

        function display(type, id, locale, params) {
            fixSunlute = id == 130031
            if (fixSunlute) {
                id = sunluteFake
            }

            fixSulfuras = id == 132001
            if (fixSulfuras) {
                id = sulfurasFake
            }

            fixWarglaiveA = id == 131001
            if (fixWarglaiveA) {
                id = warglaiveAFake
            }

            fixWarglaiveB = id == 131002
            if (fixWarglaiveB) {
                id = warglaiveBFake
            }

            fixThunderfury = id == 132003
            if (fixThunderfury) {
                id = thunderfuryFake
            }

            fixScythe = id == 132004
            if (fixScythe) {
                id = scytheFake
            }

            fixAtiesh1 = (id == 132005 || id == 132007)
            fixAtiesh2 = id == 132006
            fixAtiesh3 = id == 132008
            if (fixAtiesh1 || fixAtiesh2 || fixAtiesh3) {
                id = atieshFake
            }

            fixNightwing = id == 132009
            if (fixNightwing) {
                id = nightwingFake
            }

            fixDoomhammer = id == 132010
            if (fixDoomhammer) {
                id = doomhammerFake
            }


            if (!params) {
                params = {};
            }

            var fullId    = getFullId(id, params);
            currentType   = type;
            currentId     = fullId;
            currentLocale = locale;
            currentParams = params;

            initElement(type, fullId, locale);

            var arr = LOOKUPS[type][0];
            if (arr[fullId].status[locale] == STATUS_OK || arr[fullId].status[locale] == STATUS_NOTFOUND) {
                showTooltip(arr[fullId][getTooltipField(locale)], arr[fullId][getIconField()], arr[fullId].map, arr[fullId][getSpellsField(locale)], arr[fullId][getTooltipField(locale, 2)]);
            }
            else if (arr[fullId].status[locale] == STATUS_QUERYING || arr[fullId].status[locale] == STATUS_SCALES) {
                showTooltip(_LANG[locale].loading);
            }
            else {
                request(type, id, locale, null, params);
            }
        }

        function request(type, id, locale, stealth, params) {
            var fullId = getFullId(id, params);
            var arr = LOOKUPS[type][0];

            if (arr[fullId].status[locale] != STATUS_NONE && arr[fullId].status[locale] != STATUS_ERROR) {
                return;
            }

            arr[fullId].status[locale] = STATUS_QUERYING;

            if (!stealth) {
                arr[fullId].timer = setTimeout(function () {
                    showLoading.apply(this, [type, fullId, locale]);
                }, 333);
            }

            var p = "";
            for (var i in params) {
                if (i != "rand" && i != "ench" && i != "gems" && i != "sock" && i != "lvl") {
                    continue;
                }

                if (typeof params[i] == "object") {
                    p += "&" + i + "=" + params[i].join(":");
                }
                else if (params[i] === true) {
                    p += "&" + i;
                }
                else {
                    p += "&" + i + "=" + params[i];
                }
            }

            // var url = "http://" + $WH.g_getDomainFromLocale(locale) + ".wowhead.com"
            // var url = (document.location.protocol != "https:" ? "http:": document.location.protocol) + "//" + localeDomain + ".wowhead.com";
            var
                localeDomain = $WH.g_getDomainFromLocale(locale),
                url = g_host + "/";

            // $WH.g_ajaxIshRequest(url + "?" + LOOKUPS[type][1] + "=" + id + "&power" + p);
            $WH.g_ajaxIshRequest(url + "?" + LOOKUPS[type][1] + "=" + id + "&domain=" + localeDomain + "&power" + p);
            if (SCALES[type] && SCALES[type][locale] == SCALES_NONE) {
                $WH.g_ajaxIshRequest(url + SCALES[type].url);
                SCALES[type][locale] = SCALES_QUERYING;
            }
        }

        function showTooltip(html, icon, map, spellData, html2) {
            if (fixSunlute && currentType == 3 && currentId.startsWith(sunluteFake.toString())) {
                icon = "inv_weapon_bow_18"
                var txt = html.match(/((?:<span class="q2">)?<!--e-->.*?)Durability/)
                if (txt) {
                    html = sunluteTxt.replace("_SLPH_", txt[1])
                }
            }

            if (fixSulfuras && currentType == 3 && currentId.startsWith(sulfurasFake.toString())) {
                icon = "inv_hammer_unique_sulfuras"
                var txt = html.match(/((?:<span class="q2">)?<!--e-->.*?)Durability/)
                if (txt) {
                    html = sulfurasTxt.replace("_SULPH_", txt[1])
                    html = html.replace('Bonus: <a href=\"?enchantment=3312\">+8 Strength', 'Bonus: <a href=\"?enchantment=3312\">+12 Dodge Rating')
                }
            }

            if (fixWarglaiveA && currentType == 3 && currentId.startsWith(warglaiveAFake.toString())) {
                var txt = html.match(/((?:<span class="q2">)?<!--e-->.*?)Durability/)
                if (txt) {
                    html = warglaiveATxt.replace("_WGPH_", txt[1])
                }
            }

            if (fixWarglaiveB && currentType == 3 && currentId.startsWith(warglaiveBFake.toString())) {
                var txt = html.match(/((?:<span class="q2">)?<!--e-->.*?)Durability/)
                if (txt) {
                    html = warglaiveBTxt.replace("_WGPH_", txt[1])
                }
            }

            if (fixThunderfury && currentType == 3 && currentId.startsWith(thunderfuryFake.toString())) {
                icon = "inv_sword_39"
                var txt = html.match(/((?:<span class="q2">)?<!--e-->.*?)Durability/)
                if (txt) {
                    html = thunderfuryTxt.replace("_TFPH_", txt[1])
                    html = html.replace('Bonus: <a href=\"?enchantment=2868\">+6 Stamina', 'Bonus: <a href=\"?enchantment=2868\">+8 Dodge Rating')
                }
            }

            if (fixScythe && currentType == 3 && currentId.startsWith(scytheFake.toString())) {
                icon = "inv_staff_2h_artifactelune_d_04"
                var txt = html.match(/((?:<span class="q2">)?<!--e-->.*?)Durability/)
                if (txt) {
                    html = scytheTxt.replace("_SCYPH_", txt[1])
                    html = html.replace('Bonus: <a href=\"?enchantment=2877\">+4 Agility', 'Bonus: <a href=\"?enchantment=3313\">+8 Agility')
                }
            }

            if ((fixAtiesh1 || fixAtiesh2 || fixAtiesh3) && currentType == 3 && currentId.startsWith(atieshFake.toString())) {
                icon = "inv_staff_medivh"
                var txt = html.match(/((?:<span class="q2">)?<!--e-->.*?)Durability/)
                if (txt) {
                    if (fixAtiesh1) {
                        html = atieshPriestMageTxt.replace("_ATPH_", txt[1])
                    } else if (fixAtiesh2) {
                        html = atieshDruidTxt.replace("_ATPH_", txt[1])
                    } else if (fixAtiesh3) {
                        html = atieshPriest258Txt.replace("_ATPH258_", txt[1])
                    }
                }
            }

            if (fixNightwing && currentType == 3 && currentId.startsWith(nightwingFake.toString())) {
                icon = "inv_staff_107"
                var txt = html.match(/((?:<span class="q2">)?<!--e-->.*?)Durability/)
                if (txt) {
                    html = nightwingTxt.replace("_NWPH_", txt[1])
                    html = html.replace(/\+9 Spell Power/g, "+7 Spell Power")
                }
            }

            if (fixDoomhammer && currentType == 3 && currentId.startsWith(doomhammerFake.toString())) {
                icon = "inv_mace_17"
                var txt = html.match(/((?:<span class="q2">)?<!--e-->.*?)Durability/)
                if (txt) {
                    html = doomhammerTxt.replace("_DHMH_", txt[1])
                    html = html.replace(/\+5 Spell Power/g, "+4 Haste Rating")
                }
            }

            if (currentA && currentA._fixTooltip) {
                html = currentA._fixTooltip(html, currentType, currentId, currentA);
            }

            initCSS();
            var notFound = false;
            if (!html) {
                html = $WH.sprintf(_LANG[currentLocale].notFound, LOOKUPS[currentType][2]);
                icon = "inv_misc_questionmark";
                notFound = true;
            }
            else if (currentParams != null) {
                if (currentParams.pcs && currentParams.pcs.length) {
                    var n = 0;
                    for (var i = 0, len = currentParams.pcs.length; i < len; ++i) {
                        var m;
                        if (m = html.match(new RegExp("<span><!--si([0-9]+:)*" + currentParams.pcs[i] + '(:[0-9]+)*--><a href="\\?item=(\\d+)">(.+?)</a></span>'))) {
                            html = html.replace(m[0], '<span class="q8"><!--si' + currentParams.pcs[i] + '--><a href="?item=' + m[3] + '">' + (($WH.isset("g_items") && g_items[currentParams.pcs[i]]) ? g_items[currentParams.pcs[i]]["name_" + LOCALES[currentLocale]] : m[4]) + "</a></span>");
                            ++n;
                        }
                    }

                    if (n > 0) {
                        html = html.replace("(0/", "(" + n + "/");
                        html = html.replace(new RegExp("<span>\\(([0-" + n + "])\\)", "g"), '<span class="q2">($1)');
                    }
                }

                if (currentParams.c) {
                    html = html.replace(/<span class="c([0-9]+?)">(.+?)<\/span><br \/>/g, '<span class="c$1" style="display: none">$2</span>');
                    html = html.replace(new RegExp('<span class="c(' + currentParams.c + ')" style="display: none">(.+?)</span>', "g"), '<span class="c$1">$2</span><br />');
                }

                if (currentParams.know && currentParams.know.length) {
                    html = $WH.g_setTooltipSpells(html, currentParams.know, spellData);
                }

                if (currentParams.lvl) {
                    html = $WH.g_setTooltipLevel(html, currentParams.lvl, currentParams.buff);
                }
                // custom start
                else if ($WH.gc('compare_level') && window.location.href.match(/\?compare/i)) {
                    html = $WH.g_setTooltipLevel(html, $WH.gc('compare_level'), currentParams.buff);
                }
                // custom end

                if (currentParams.who && currentParams.when) {
                    html = html.replace("<table><tr><td><br />", '<table><tr><td><br /><span class="q2">' + $WH.sprintf(_LANG[currentLocale].achievementComplete, currentParams.who, currentParams.when.getMonth() + 1, currentParams.when.getDate(), currentParams.when.getFullYear()) + "</span><br /><br />");
                    html = html.replace(/class="q0"/g, 'class="r3"');
                }
                if ((currentType == TYPE_ACHIEVEMENT) && currentParams.cri) {
                    for (var i = 0; i < currentParams.cri.length; i++) {
                        html = html.replace(new RegExp("<!--cr" + parseInt(currentParams.cri[i]) + ":[^<]+", "g"), '<span class="q2">$&</span>')
                    }
                }
            }

            if (currentParams.map && map && map.getMap) {
                html2 = map.getMap();
            }

            if (mode == 1) {
                $WH.Tooltip.setIcon(null);
                $WH.Tooltip.show(currentA, html, null, null, null, html2);
            }
            else {
                $WH.Tooltip.setIcon(icon);
                $WH.Tooltip.showAtXY(html, cursorX, cursorY, CURSOR_HSPACE, CURSOR_VSPACE, html2);
            }

            if (isRemote && $WH.Tooltip.logo) {
                $WH.Tooltip.logo.style.display = (showLogo ? "block": "none");
            }
        }

        function showLoading(type, id, locale) {
            if (currentType == type && currentId == id && currentLocale == locale) {
                showTooltip(_LANG[locale].loading);
                var arr = LOOKUPS[type][0];

                arr[id].timer = setTimeout(function () {
                    notFound.apply(this, [type, id, locale]);
                }, 3850);
            }
        }

        function notFound(type, id, locale) {
            var arr = LOOKUPS[type][0];
            arr[id].status[locale] = STATUS_ERROR;

            if (currentType == type && currentId == id && currentLocale == locale) {
                showTooltip(_LANG[locale].noResponse);
            }
        }

        function getFullId(id, params) {
            return id + (params.rand ? "r" + params.rand : "") + (params.ench ? "e" + params.ench : "") + (params.gems ? "g" + params.gems.join(",") : "") + (params.sock ? "s" : "");
        }

        this.loadScales = function (type, locale) {
            var arr = LOOKUPS[type][0];
            for (var i in LOCALES) {
                if (locale == i || (!locale && !isNaN(i))) {
                    SCALES[type][i] = SCALES_LOADED;
                    for (var id in arr) {
                        if (arr[id].status[i] == STATUS_SCALES && arr[id].response[i]) {
                            arr[id].response[i]();
                        }
                    }
                }
            }
        };

        this.register = function (type, id, locale, json) {
            var arr = LOOKUPS[type][0];
            initElement(type, id, locale);

            if (SCALES[type] && SCALES[type][locale] != SCALES_LOADED) {
                arr[id].status[locale] = STATUS_SCALES;
                arr[id].response[locale] = this.register.bind(this, type, id, locale, json);
                return;
            }

            if (arr[id].timer) {
                clearTimeout(arr[id].timer);
                arr[id].timer = null;
            }

            if (!$WH.wowheadRemote && !$.isEmptyObject(json.map)) {
                if (arr[id].map == null) {
                    arr[id].map = new Mapper({
                        parent: $WH.ce("div"),
                        zoom: 3,
                        zoomable: false,
                        buttons: false
                    }, true);
                }
                arr[id].map.update(json.map, true);
                delete json.map;
            }

            $WH.cO(arr[id], json);

            if (arr[id].status[locale] == STATUS_QUERYING || arr[id].status[locale] == STATUS_SCALES) {
                if (arr[id][getTooltipField(locale)]) {
                    arr[id].status[locale] = STATUS_OK;
                }
                else {
                    arr[id].status[locale] = STATUS_NOTFOUND;
                }
            }

            if (currentType == type && id == currentId && currentLocale == locale) {
                showTooltip(arr[id][getTooltipField(locale)], arr[id].icon, arr[id].map, arr[id][getSpellsField(locale)], arr[id][getTooltipField(locale, 2)]);
            }
        };

        this.registerNpc = function (id, locale, json) {
            this.register(TYPE_NPC, id, locale, json);
        };

        this.registerCurrency = function (id, locale, json) {
            this.register(TYPE_CURRENCY, id, locale, json)
        };

        this.registerObject = function (id, locale, json) {
            this.register(TYPE_OBJECT, id, locale, json);
        };

        this.registerItem = function (id, locale, json) {
            this.register(TYPE_ITEM, id, locale, json);
        };

        this.registerHoliday = function (id, locale, json) {
            this.register(TYPE_HOLIDAY, id, locale, json);
        };

        this.registerItemSet = function (id, locale, json) {
            this.register(TYPE_ITEMSET, id, locale, json);
        };

        this.registerQuest = function (id, locale, json) {
            this.register(TYPE_QUEST, id, locale, json);
        };

        this.registerSpell = function (id, locale, json) {
            this.register(TYPE_SPELL, id, locale, json);
        };

        this.registerAchievement = function (id, locale, json) {
            this.register(TYPE_ACHIEVEMENT, id, locale, json);
        };

        this.registerProfile = function (id, locale, json) {
            this.register(TYPE_PROFILE, id, locale, json);
        };

        this.registerGuide = function (id, locale, json) {
            this.register(TYPE_GUIDE, id, locale, json);
        };

        this.displayTooltip = function (type, id, locale, params) {
            display(type, id, locale, params);
        };

        this.request = function (type, id, locale, params) {
            if (!params) {
                params = {};
            }

            var fullId = getFullId(id, params);
            initElement(type, fullId, locale);

            request(type, id, locale, 1, params);
        };

        this.requestItem = function (id, params) {
            this.request(TYPE_ITEM, id, Locale.getId(), params);
        };

        this.requestSpell = function (id) {
            this.request(TYPE_SPELL, id, Locale.getId());
        };

        this.getStatus = function (type, id, locale) {
            var arr = LOOKUPS[type][0];
            if (arr[id] != null) {
                return arr[id].status[locale];
            }
            else {
                return STATUS_NONE;
            }
        };

        this.getItemStatus = function (id, locale) {
            this.getStatus(TYPE_ITEM, id, locale);
        };

        this.getSpellStatus = function (id, locale) {
            this.getStatus(TYPE_SPELL, id, locale);
        };

        this.refreshLinks = function () {
            if (typeof aowow_tooltips != "undefined") {
                for (var i = 0; i < document.links.length; i++) {
                    var link = document.links[i];
                    var node = link.parentNode;
                    var isTooltipChild = false;

                    while (node != null) {
                        if ((" " + node.className + " ").replace(/[\n\t]/g, " ").indexOf(" wowhead-tooltip ") > -1) {
                            isTooltipChild = true;
                            break;
                        }
                        node = node.parentNode
                    }

                    if (!isTooltipChild) {
                        scanElement(link);
                    }
                }
            }

            this.hideTooltip();
        };

        this.setParent = function (newParent) {
            $WH.Tooltip.reset();
            $WH.Tooltip.prepare(newParent);
        };

        if (isRemote) {
            this.set = function (foo) {
                $WH.cO(opt, foo);
            };

            this.showTooltip = function (e, tooltip, icon) {
                updateCursorPos(e);
                showTooltip(tooltip, icon);
            };

            this.hideTooltip = function () {
                $WH.Tooltip.hide();
            };

            this.moveTooltip = function (e) {
                onMouseMove(e);
            }
        }

        init();
    }
};

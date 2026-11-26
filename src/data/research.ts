/** Source-derived page content, reviewed against the current Confluence HUNTtheTRUTH report (26 Nov 2026). */
export type Section = {
  heading: string;
  paragraphs?: string[];
  points?: string[];
  table?: { headers: string[]; rows: string[][] };
};
export type ResearchPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  sections: Section[];
  references: Array<{ label: string; url: string }>;
  related: string[];
};

const insights = 'https://www.leagueoflegends.com/en-us/news/dev/champion-insights-seraphine/';
const biography = 'https://universe.leagueoflegends.com/en_US/story/champion/seraphine/';
const riotArchive = 'https://www.leagueoflegends.com/en-us/news/tags/seraphine/';
const standing = 'https://universe.leagueoflegends.com/en_US/story/seraphine-color-story/';
const voiceHistory = 'https://wiki.leagueoflegends.com/en-us/Seraphine/History';
const sidhu = 'https://twitter.com/JeevunSidhu/status/1321936795597066241';
const riotRedPosts = 'https://www.surrenderat20.net/2020/10/red-post-collection-client-cleanup.html';
const wikipedia = 'https://en.wikipedia.org/wiki/Seraphine_(League_of_Legends)';

export const pages: ResearchPage[] = [
  {
    slug: 'seraphine-original-lore',
    title: 'Seraphine’s Original Lore (2020): The Riot Evidence Missing from the Backlash',
    description: 'Riot’s 12 October 2020 Seraphine source established empathy and explained the Brackern souls before influencer accusations. Examine what later retellings omitted.',
    eyebrow: 'THE ORIGINAL RECORD · OCTOBER 2020',
    lead: 'Before the most widely repeated accusations, Riot had already published an explanation of Seraphine’s empathy, the Brackern crystal and why inability to rescue souls did not mean indifference. That dated evidence is the starting point for testing the influencer claims.',
    sections: [
      { heading: 'The first source the backlash overlooked: 12 October 2020', paragraphs: [
        'On <strong>12 October 2020</strong>, Riot published <em>Champion Insights: Seraphine</em>. Narrative writer Rayla “Jellbug” Heide described a character intended to be <em>deeply empathetic</em>. Riot explained that Seraphine experiences other people’s emotions as music, rather than merely hearing conventional sounds.',
        'Daniel “Istogaiden” Couts described the Brackern souls inside Hextech crystals, including members of Skarner’s family. Seraphine can hear their song and connects particularly with one crystal, whose presence helps her learn to manage the overwhelming songs around her.',
        'Riot’s developer explanation also distinguishes Seraphine’s <strong>inability to free the trapped souls</strong> from indifference towards them. In that stated conception, listening and singing back the songs she hears are part of her desire to connect people.'
      ] },
      { heading: 'The biography and the launch', paragraphs: [
        'Riot’s original champion biography followed on <strong>13 October 2020</strong>. It described a Piltover-born singer whose family came from Zaun, the difficulty of hearing surrounding emotions and a device built with a Hextech crystal.',
        'The original biography did not make every boundary of Seraphine’s knowledge unambiguous. That ambiguity, combined with the early voice-over, helped produce an interpretation in which she fully understood the Brackern’s fate and remained unconcerned. The original developer explanation is essential context for evaluating that reading.'
      ] },
      { heading: 'The chronological source record', table: { headers: ['Date', 'Document or event', 'Why it matters'], rows: [
        ['12 October 2020', 'Champion Insights: Seraphine', 'Explicit original design intent, empathy, music, Brackern and Hextech context'],
        ['13 October 2020', 'Seraphine Champion Bio', 'Original in-universe biography, before the later changes'],
        ['28 October 2020', 'Marc Merrill’s response', 'Contemporaneous acknowledgement that disputed material should have been removed'],
        ['29 October 2020', 'Champion release, Standing Room Only and Jag’s statement', 'Subsequent published story, biography clarifications and explanation of removed dialogue']
      ] } },
      { heading: 'Why these dates matter', paragraphs: [
        'The test for a historical claim is the evidence <strong>available when that claim was made</strong>. The 12 October developer article was already public before several prominent reactions, whereas the 29 October revisions cannot fairly be expected to appear in earlier videos.',
        'This account addresses the <strong>original 2020</strong> material. Current biographies and later changes to Skarner should not silently replace the record from the release period.'
      ] }
    ],
    references: [ { label: 'Riot — Champion Insights: Seraphine (12 October 2020)', url: insights }, { label: 'Riot — Seraphine publication archive (dated entries)', url: riotArchive }, { label: 'Riot — current Seraphine biography (not a preserved 2020 snapshot)', url: biography }, { label: 'Jeevun Sidhu — original October 2020 statement', url: sidhu } ],
    related: ['seraphine-skarner', 'seraphine-lore-changes', 'sources']
  },
  {
    slug: 'seraphine-skarner',
    title: 'Seraphine and Skarner: Was Brackern Exploitation Established by the Lore?',
    description: 'Did Seraphine knowingly exploit Skarner’s people? Compare Riot’s original 2020 Brackern lore, the disputed voice line and claims made by influential commentators.',
    eyebrow: 'SKARNER · HEXTECH · SOURCE COMPARISON',
    lead: 'The claim was not merely that a Brackern crystal powered Seraphine’s stage. Influential commentators went further: that she understood the trapped souls’ suffering and exploited them anyway. What does the original 2020 evidence actually establish?',
    sections: [
      { heading: 'What the original material established', paragraphs: [
        'In the 2020 setting, Hextech crystals were connected to the souls of the Brackern. Riot’s <em>Champion Insights</em> specifically identified Skarner’s family and established that Seraphine could hear the crystal’s song.',
        'The connection was not presented solely as a power supply. The article explained that the crystal helped her manage her otherwise overwhelming perception of emotions and that she could hear songs from souls described as tormented and joyous.',
        'Crucially, <strong>hearing a soul does not by itself establish complete understanding of everything that happened to it</strong>. The original biography’s language left room for dispute about the extent of that understanding.'
      ] },
      { heading: 'Hearing a Brackern soul is not proof of knowing exploitation', table: { headers: ['Question', 'Evidence and distinction'], rows: [
        ['Does Hextech have a Brackern connection?', 'Yes — Riot’s 12 October 2020 developer article explicitly describes the trapped souls.'],
        ['Can Seraphine hear a Brackern crystal?', 'Yes — the intended hearing ability and her connection with a particular crystal are explicit.'],
        ['Did the initial biography communicate everything clearly?', 'No — its wording and the original voice-over generated ambiguity and criticism.'],
        ['Did Riot intend Seraphine to be indifferent to suffering?', 'No — the original developer explanation describes empathy as foundational and separates inability to save the souls from indifference.'],
        ['Did criticism of the stage and Hextech therefore have no basis?', 'The stage design and original lore could still be criticised; criticism is not proof of a contrary intended personality.']
      ] } },
      { heading: 'Why the voice-over matters', paragraphs: [
        'The early first-encounter line addressing Skarner’s missing kind was criticised for its delivery. The line was subsequently removed. The investigation considers this an important failure of narrative execution: what reached the public could conflict with the empathetic personality described in the developer article.',
        'On 29 October 2020, gameplay designer Jeevun “Jag” Sidhu explained that the recorded lines had been removed because they did not fit the story the team was telling. The original developer statement and the shipped dialogue should be examined together, rather than treating either as the entire record.'
      ] },
      { heading: 'After the original lore', paragraphs: [
        'Later revisions to Skarner and the Brackern changed how Hextech’s history fits contemporary Runeterra continuity. Those developments are relevant to <strong>modern canon</strong>, but they do not change what the October 2020 developers had already published.'
      ] }
    ],
    references: [ { label: 'Riot — Champion Insights: Seraphine', url: insights }, { label: 'Riot — official Seraphine publication timeline', url: riotArchive }, { label: 'League Wiki — historical Seraphine voice lines', url: voiceHistory }, { label: 'Jeevun Sidhu — 29 October 2020 statement', url: sidhu } ],
    related: ['seraphine-original-lore', 'seraphine-brackern', 'seraphine-lore-changes']
  },
  {
    slug: 'seraphine-brackern',
    title: 'Seraphine and the Brackern: What Did the Hextech Crystal Actually Reveal?',
    description: 'What did Seraphine hear and understand about the Brackern? Revisit Riot’s 2020 Hextech explanation before treating exploitation claims as established lore.',
    eyebrow: 'THE BRACKERN CRYSTAL · 2020 CONTEXT',
    lead: 'The Brackern were central to Riot’s original Seraphine concept: the crystal’s song helped her manage overwhelming emotions. Critics often treated that connection as proof of deliberate exploitation. The two claims are not the same.',
    sections: [
      { heading: 'The original crystal', paragraphs: [
        'Seraphine was overwhelmed by the songs of other people’s emotions. Her parents obtained a Hextech crystal and built a dampening device to help her cope. The crystal also had a voice of its own.',
        'Riot’s original development article explained that <strong>the Brackern’s song mattered to them</strong> and that Seraphine learned from listening to a particular crystal. This contextualises the narrative role of the crystal before it became associated with her performance equipment.'
      ] },
      { heading: 'What the original crystal’s song did — and did not — establish', paragraphs: [
        'A Hextech crystal could contain an exploited Brackern soul, while the singer hearing it could still have been written as empathetic. Those propositions are not mutually exclusive. The question is whether the released story communicated the ethical conflict effectively.',
        'The October 2020 backlash frequently collapsed these separate issues into a simple character verdict. A more precise reading compares (1) the setting’s treatment of Brackern souls, (2) what Seraphine perceived, (3) what the dialogue implied, and (4) the developer explanation of her motives.'
      ] },
      { heading: 'What changed', paragraphs: [
        'On 29 October 2020, Riot revised the biography to make the crystal’s communication less direct and to state Seraphine’s hope that the crystal’s voice would be among the voices she could hear. These changes are documented side by side in the biography revision analysis.',
        'The original material should remain the baseline for assessing videos and community posts published <em>before</em> those changes.'
      ] }
    ],
    references: [ {label:'Riot — Champion Insights: Seraphine',url:insights},{label:'Riot — Seraphine biography',url:biography},{label:'Riot — publication dates',url:riotArchive} ],
    related: ['seraphine-skarner', 'seraphine-lore-changes', 'sources']
  },
  {
    slug: 'seraphine-lore-changes',
    title: 'Seraphine Lore Retcon: All Six October 2020 Biography Changes',
    description: 'All six October 2020 Seraphine lore changes, compared with the original wording, removed Skarner dialogue and incomplete influencer retcon summaries.',
    eyebrow: 'THE OCTOBER 2020 REVISION RECORD',
    lead: 'The retcon was not limited to the two or three passages highlighted by some prominent videos. Six identified biography changes altered the Brackern wording and Seraphine’s expressed hopes; the original Skarner voice line was a separate issue. Compare the complete revision record.',
    sections: [
      { heading: 'Six identified changes', paragraphs: [
        'The following is the change register preserved in the current HUNTtheTRUTH investigation. Ellipses denote surrounding text not reproduced here. The precise publication time of the revised biography has not been established.'
      ], table: { headers: ['Change', 'Before', 'After'], rows: [
        ['1. Crystal voice', 'The voice was kind.', 'Though hard to hear, and harder to comprehend, the voice was kind.'],
        ['2. Clarity of speech', 'The voice helped Seraphine understand how to resonate with a crowd…', 'The voice rarely spoke clearly, but Seraphine felt its influence as it helped her understand how to resonate with a crowd…'],
        ['3. Warning about hatred', 'The crystal’s voice had spoken of what hatred left unchecked could accomplish.', 'The crystal had sung an elegy of what hatred left unchecked could accomplish.'],
        ['4. Stage transformation', 'They repurposed the crystal to power its opposite.', 'They gave the crystal a new home in its opposite.'],
        ['5. Her hope for the crystal', 'No corresponding sentence.', 'Seraphine hoped the crystal’s voice would be among them.'],
        ['6. Final statement', 'Everyone matters — especially those struggling.', 'Everyone deserves to be heard — especially those struggling.']
      ] } },
      { heading: 'What partial retcon comparisons leave out', paragraphs: [
        'Changes 1 and 2 limit how clearly Seraphine can comprehend the crystal. Change 3 reframes the warning as a song. Change 4 alters how the stage’s relationship to the crystal is described. Change 5 gives explicit expression to her continuing hope of hearing the crystal. Change 6 changes the closing statement about why she sings.',
        'These changes belong in their historical context: they cannot be retroactively used to judge a video published on 13 October, but they are directly relevant to videos evaluating the revisions after 29 October.'
      ] },
      { heading: 'The separate voice-line correction', paragraphs: [
        'The first-encounter line directed towards Skarner was removed separately. The line’s words, delivery, implied knowledge and compatibility with intended characterisation are distinct editorial questions; the investigation examines them separately.',
        'Contemporaneous statements from Marc Merrill and Jeevun Sidhu confirm that Riot recognised a mismatch between published/recorded material and the story the team intended.'
      ] }
    ],
    references: [ {label:'Riot — 12 October developer explanation',url:insights},{label:'Riot — October 2020 Seraphine posts',url:riotArchive},{label:'League Wiki — Seraphine history',url:voiceHistory},{label:'Jeevun Sidhu — developer clarification',url:sidhu},{label:'Surrender at 20 — October 2020 developer posts',url:riotRedPosts} ],
    related: ['seraphine-original-lore', 'seraphine-skarner', 'sources']
  },
  {
    slug: 'seraphine-controversy',
    title: 'Why Was Seraphine Controversial? Lore Claims, Bandwagon and Missing Context',
    description: 'Why did Seraphine face a 2020 backlash? Separate Brackern allegations, Sona comparisons and marketing criticism from claims contradicted by Riot’s original lore evidence.',
    eyebrow: 'RELEASE CONTROVERSY · SEPARATE THE CLAIMS',
    lead: 'The 2020 Seraphine backlash bundled distinct complaints — Brackern exploitation, Sona comparisons, K/DA promotion and social-media controversy — into a shared negative narrative. This analysis separates documented criticism from claims about the character that the original sources do not establish.',
    sections: [
      { heading: 'Five threads of criticism', table: { headers: ['Issue', 'What was criticised', 'What to verify'], rows: [
        ['Brackern / Skarner', 'A singer using Hextech associated with sentient Brackern souls.', 'The exact original lore, voice-over, developer intentions and subsequent edits.'],
        ['Similarity to Sona', 'Perceived overlap in gameplay role, musical theme and ability design.', 'Contemporary design comparisons rather than treating resemblance as identity.'],
        ['K/DA marketing', 'Perception that a highly promoted skin overshadowed the Runeterra character.', 'Dates and volume of promotion versus published narrative material.'],
        ['Social-media persona', 'Claims that character accounts encouraged a parasocial relationship or exploited vulnerability.', 'The actual campaign posts, Riot responses and contemporary reporting.'],
        ['Stephanie likeness allegations', 'Claims that the champion resembled a real person linked to a Riot employee.', 'The claimant’s original account and Riot’s denial, with both attributed accurately.']
      ] } },
      { heading: 'The lore criticism is not a single question', paragraphs: [
        'Riot’s concept could establish a deeply empathetic singer while still producing a voice-over that undermined that intended characterisation. Criticism of how the result was delivered differs from a claim about what the original developers wanted her personality to be.',
        'The original 12 October 2020 article describes empathy and Brackern music explicitly. Any historical reconstruction of the lore criticism needs to take that source into account alongside the biography, first-encounter dialogue and 29 October revisions.'
      ] },
      { heading: 'When several criticisms become one bandwagon narrative', paragraphs: [
        'Community backlash is an established part of Seraphine’s release history. The truth of every interpretation circulating within that backlash is a separate evidential question.',
        'This investigation does not require readers to like the character. It asks that factual claims about her knowledge, motives and creators be tested against dated material, and that accusations made by real people be presented as allegations rather than proven facts.'
      ] }
    ],
    references: [{label:'Riot — Seraphine publication archive',url:riotArchive},{label:'Riot — original developer explanation',url:insights},{label:'Polygon — contemporary social-media campaign coverage',url:'https://www.polygon.com/interviews/2020/11/3/21548141/seraphine-controversy-league-of-legends-twitter/'}, {label:'Stephanie — The Problem With Seraphine',url:'https://step-nie.medium.com/the-problem-with-seraphine-58dc16c07e79'}, {label:'Wikipedia — Seraphine reception and sources',url:wikipedia}],
    related: ['seraphine-original-lore', 'seraphine-skarner', 'seraphine-misinformation']
  },
  {
    slug: 'seraphine-misinformation',
    title: 'Seraphine Lore Misinformation: Influencer Cherry-Picking, Google AI and Wikipedia',
    description: 'NickyBoi, Necrit, T B Skyen and Skooch cross-examined against Riot’s 2020 sources. Track cherry-picking, bandwagon reinforcement, Google AI citations and Wikipedia.',
    eyebrow: 'HUNTTHETRUTH · CLAIM-BY-CLAIM AUDIT',
    lead: 'NickyBoi used artwork from Riot’s development article while excluding its narrative context. Necrit narrated Seraphine’s struggle, then denied she had one. Skyen acknowledged her intended empathy while accusing her of indifference. The source audit examines the claims, creator cross-references and their visibility in Google and AI — alongside a six-year omission on Wikipedia.org.',
    sections: [
      { heading: 'The test: creator claim versus Riot’s dated evidence', paragraphs: [
        'Riot’s <a href="https://www.leagueoflegends.com/en-us/news/dev/champion-insights-seraphine/">Champion Insights: Seraphine</a> was public on 12 October 2020. Rayla Heide described the intention to make Seraphine deeply empathetic. Daniel Couts explained her overwhelming perception of other people’s emotions, her special connection with a Brackern crystal and her use of music to connect with and uplift people.',
        'The relevant question is not whether the community could criticise her original writing or voice-over. It is whether creators presented interpretations as fact while setting aside evidence that was already available when they published their claims. The original 2020 material, later revisions and current canon must be evaluated separately.'
      ] },
      { heading: 'NickyBoi: concept art used, narrative context excluded', paragraphs: [
        'In his 24 October 2020 video, at approximately 10:47–11:32, NickyBoi characterises Seraphine as a “narcissistic, selfish sociopath”. The video also uses concept art originating in Riot’s 12 October <em>Champion Insights</em> article, yet does not represent its accompanying explanation of empathy, Brackern song and the distinction between inability to save trapped souls and not caring about them.',
        'That is a concrete same-document omission: material useful to a visual-design critique appears, while contrary narrative context published with it does not. The audit treats selective presentation as strongly supported; the route by which the creator obtained the artwork is not directly established. Video identification for independent research: NickyBoi, 24 October 2020, YouTube ID bDa0p_xx_KA.'
      ] },
      { heading: 'Necrit: narrating motivations, then denying them', paragraphs: [
        'In <em>Was Seraphine Forced Into Runeterra?</em> (18 October 2020), Necrit recounts Seraphine’s overwhelming emotional hearing and childhood distress at approximately 10:21–12:17, but subsequently argues that she has effectively no struggle. At approximately 14:26–15:24, he denies a clear motivation despite earlier narrating her wish to bridge Piltover and Zaun and give struggling people a voice.',
        'Those are source-to-conclusion inconsistencies within the same video, not merely a disagreement about the amount of character development. At approximately 15:44–16:34, he explicitly refers to T B Skyen’s analysis and endorses Skooch’s K/DA comparison. These are documented cross-references between commentators, relevant to the reinforcement of shared interpretations.'
      ] },
      { heading: 'T B Skyen: acknowledged intent versus repeated moral accusation', paragraphs: [
        'In the 13 October 2020 video <em>seraphine’s stage is canonically powered by the souls of the innocent</em>, T B Skyen reads the original biography and recognises Seraphine’s intended empathy, optimism and sympathy. At approximately 11:45–12:55 he nevertheless frames her as knowingly indifferent to Brackern exploitation, without accounting for the developer explanation published one day earlier.',
        'His 14 October follow-up repeats the allegation at approximately 00:42–01:05. Later in that video, around 03:54–04:54, he acknowledges Riot intended her as nice and wholesome and rejects a secret-villain theory. The audit distinguishes criticism of Riot’s awkward execution from the stronger assertion that deliberate cruelty was established as her characterisation. Research reference: 13 October video, YouTube ID xDl7-WITHNo.'
      ] },
      { heading: 'Skooch: short biography versus K/DA promotion', paragraphs: [
        'On 16 October 2020, Skooch compares extensive K/DA promotion against Seraphine’s shorter Runeterra biography at approximately 06:41–06:58 and argues the in-universe character looks like an afterthought. Riot’s separate <em>Champion Insights</em> had already been published four days before, explaining her Runeterra motivations, region, Brackern relationship and stage design.',
        'The video therefore supports a comparison of promotional volume, but not an assertion that the short biography represents the whole body of Riot’s narrative development material. Research reference: YouTube ID mtDognO_CPM; comparison at approximately 06:41.'
      ] },
      { heading: 'ProGuides: an important counterexample', paragraphs: [
        'ProGuides’ 24 October 2020 video explicitly challenges the Sona-copy bandwagon, compares gameplay differences, accepts that Seraphine’s positive personality was not itself the problem, and discusses Riot’s stage rationale. It therefore provides a counterexample to indiscriminate negative framing.',
        'The same video uses <em>Champion Insights</em> for visual-design discussion but omits its explicit inability-to-save explanation when criticising the lack of a Brackern rescue arc at approximately 12:41–13:14. This is a source omission without an accompanying accusation that Seraphine was sociopathic.'
      ] },
      { heading: 'Creator reinforcement, cherry-picking and bandwagon effects', paragraphs: [
        'Selective use of a published source can give a characterisation an apparent evidential basis while excluding passages that complicate it. Repeated presentations by popular commentators can create social proof, especially when a later narrator points approvingly to earlier critics. The documented Necrit–Skyen–Skooch cross-references are a concrete example of this reinforcement network.',
        'A creator’s influence and the emotional intensity of a criticism do not independently validate the underlying factual claim. The report analyses this mechanism as selective framing, argument from popularity and an information cascade. Claims of deliberately coordinated social engineering require evidence of the specific intent or coordination; repetition and cross-reference alone do not establish that.'
      ] },
      { heading: 'From YouTube commentary to Google AI citations — and Wikipedia’s missing source', paragraphs: [
        'The concern is source dependency. Several accounts repeating one original interpretation do not become several independent pieces of evidence. The investigation tracks recurring claims through community references, Wikipedia and later retrieval and citation by search and AI systems.',
        'In Google Search captures dated 26 November 2026, results for <em>seraphine lore</em>, <em>seraphine skarner</em>, <em>seraphine original lore</em> and <em>why is seraphine controversial</em> prominently surfaced secondary commentary and Reddit discussion. Source displays attributed material to T B Skyen and Necrit, while Riot’s particular 12 October developer article was not visibly identified in those supplied results.',
        'That is a documented source-visibility finding, not proof of any particular model-training dataset or an unseen causal path. The distinction matters when evaluating whether an AI answer has independently verified a claim.'
      ] },
      { heading: 'Read the complete cross-examination', paragraphs: [
        'The <a href="/seraphine-lore-misinformation-investigation/">full Seraphine lore misinformation investigation</a> contains the individual creator audit sections, date-by-date evidence comparisons, video timecodes, revisions, source-dependency analysis, Wikipedia findings and original conclusion. Video titles, IDs and timestamps are supplied here as text rather than direct links to creator channels.',
        'See also the <a href="/seraphine-original-lore/">original 2020 source chronology</a> and the <a href="/seraphine-lore-changes/">six biography changes</a> for the underlying record.'
      ] }
    ],
    references: [
      { label: 'Riot — Champion Insights: Seraphine (12 October 2020)', url: insights },
      { label: 'Riot — dated Seraphine publications', url: riotArchive },
      { label: 'Jeevun Sidhu — 29 October 2020 clarification', url: sidhu },
      { label: 'Wikipedia — Seraphine article and revisions', url: wikipedia }
    ],
    related: ['seraphine-original-lore', 'seraphine-lore-changes', 'sources']
  },
  {
    slug: 'sources',
    title: 'Seraphine Lore Evidence: Riot’s 2020 Sources and the Missing Wikipedia Citation',
    description: 'The original Riot articles, biography revisions and developer statements behind the Seraphine misinformation investigation — including the source Wikipedia omitted for six years.',
    eyebrow: 'DOCUMENTS · ORIGINAL PUBLISHERS',
    lead: 'On 12 October 2020, Riot published the explanation of Seraphine’s intended empathy and relationship with the Brackern. That first developer source was absent from Wikipedia’s references for six years. Here are the primary documents and dates needed to check the influencer claims independently.',
    sections: [
      { heading: 'Riot’s contemporaneous publications', table: { headers: ['Published', 'Source', 'What it establishes'], rows: [
        ['12 Oct 2020', 'Champion Insights: Seraphine', 'Narrative intention, empathy, magical hearing, Brackern songs and concept art.'],
        ['13 Oct 2020', 'Seraphine Champion Bio', 'The original biography. The currently hosted URL may display revised text.'],
        ['28–29 Oct 2020', 'Developer clarifications', 'Responses concerning material removed from the story and dialogue.'],
        ['29 Oct 2020', 'Standing Room Only', 'Official colour story showing Seraphine, audience experiences and limits of her ambitions.']
      ] } },
      { heading: 'Historical comparison rules', paragraphs: [
        'Use publication dates, original wording and archived versions wherever possible. A current biography is not a historical snapshot of its October 2020 predecessor. Nor should a later retcon be treated as if it were available to a commentator writing before the revision.',
        'When evaluating disputed interpretations, distinguish an original developer statement, an in-universe biography, recorded voice-over, contemporary criticism and a later retelling. These are different categories of evidence.'
      ] },
      { heading: 'Video claims, primary-source gaps and Wikipedia revisions', paragraphs: [
        'The wider audit analyses creator videos with dated transcripts and timecodes, alongside the League Wiki and Wikipedia revision histories. For a given claim, the important question is which original source supports it and whether intervening summaries accurately preserve its meaning.',
        'The source links below provide the initial documentary trail. For the complete historical claim comparisons, see the original-lore, revision-history and misinformation articles linked from this page.'
      ] }
    ],
    references: [{label:'12 October 2020 — Champion Insights: Seraphine',url:insights},{label:'13 October 2020 — official publication archive',url:riotArchive},{label:'Seraphine biography — current URL',url:biography},{label:'29 October 2020 — Standing Room Only',url:standing},{label:'29 October 2020 — Jeevun Sidhu statement',url:sidhu},{label:'October 2020 — Riot statement collection',url:riotRedPosts},{label:'Historical Seraphine voice lines',url:voiceHistory},{label:'Wikipedia — Seraphine article and edit history',url:wikipedia}],
    related: ['seraphine-original-lore', 'seraphine-lore-changes', 'seraphine-misinformation']
  }
];

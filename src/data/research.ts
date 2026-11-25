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
    title: 'Seraphine’s Original Lore (2020): What Riot Published',
    description: 'Read the original Seraphine lore chronology: the 12 October 2020 developer explanation, original biography, Brackern crystal and characterisation.',
    eyebrow: 'THE ORIGINAL RECORD · OCTOBER 2020',
    lead: 'The original Seraphine controversy is often retold through the biography alone. Riot published a separate developer explanation before the biography, setting out her characterisation, her magical hearing and her relationship with the Brackern.',
    sections: [
      { heading: 'The article published first', paragraphs: [
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
    title: 'Seraphine and Skarner: The Original Brackern Controversy',
    description: 'What the October 2020 sources actually established about Seraphine, Skarner, Brackern souls, Hextech crystals and the controversy.',
    eyebrow: 'SKARNER · HEXTECH · SOURCE COMPARISON',
    lead: 'A central accusation in the backlash was that Seraphine knowingly exploited the Brackern to support her career. The historical source record separates what was written, what Riot said it intended and what commentators inferred.',
    sections: [
      { heading: 'What the original material established', paragraphs: [
        'In the 2020 setting, Hextech crystals were connected to the souls of the Brackern. Riot’s <em>Champion Insights</em> specifically identified Skarner’s family and established that Seraphine could hear the crystal’s song.',
        'The connection was not presented solely as a power supply. The article explained that the crystal helped her manage her otherwise overwhelming perception of emotions and that she could hear songs from souls described as tormented and joyous.',
        'Crucially, <strong>hearing a soul does not by itself establish complete understanding of everything that happened to it</strong>. The original biography’s language left room for dispute about the extent of that understanding.'
      ] },
      { heading: 'The knowledge-versus-intent distinction', table: { headers: ['Question', 'Evidence and distinction'], rows: [
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
    title: 'Seraphine, the Brackern and Hextech Crystals in 2020',
    description: 'How the original Brackern crystal, soul-songs and Hextech device connect to Seraphine’s 2020 story and subsequent criticism.',
    eyebrow: 'THE BRACKERN CRYSTAL · 2020 CONTEXT',
    lead: 'In the 2020 version of the lore, the Brackern were not incidental to Seraphine’s concept. Their songs helped define the difference between her supernatural empathy and a conventional singer using technology.',
    sections: [
      { heading: 'The original crystal', paragraphs: [
        'Seraphine was overwhelmed by the songs of other people’s emotions. Her parents obtained a Hextech crystal and built a dampening device to help her cope. The crystal also had a voice of its own.',
        'Riot’s original development article explained that <strong>the Brackern’s song mattered to them</strong> and that Seraphine learned from listening to a particular crystal. This contextualises the narrative role of the crystal before it became associated with her performance equipment.'
      ] },
      { heading: 'The distinction often lost', paragraphs: [
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
    title: 'Seraphine Lore Changes: The Six October 2020 Biography Revisions',
    description: 'A dated original-versus-revised comparison of six Seraphine biography changes, the original voice lines and Riot’s October 2020 clarifications.',
    eyebrow: 'THE OCTOBER 2020 REVISION RECORD',
    lead: 'Riot revised Seraphine’s biography around 29 October 2020. The investigation identifies six specific textual changes. A complete comparison matters because selective presentation can make the revision appear narrower than it was.',
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
      { heading: 'What the changes accomplish', paragraphs: [
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
    title: 'Why Was Seraphine Controversial? The 2020 Backlash Explained',
    description: 'The distinct causes of Seraphine’s 2020 controversy: Brackern lore, Sona comparisons, K/DA promotion, social-media marketing and likeness allegations.',
    eyebrow: 'RELEASE CONTROVERSY · SEPARATE THE CLAIMS',
    lead: 'Seraphine’s launch attracted several kinds of criticism at once. The Brackern controversy was one part of a broader dispute over character design, gameplay, commercial promotion and the virtual singer’s social-media campaign.',
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
      { heading: 'Why the distinction matters', paragraphs: [
        'Community backlash is an established part of Seraphine’s release history. The truth of every interpretation circulating within that backlash is a separate evidential question.',
        'This investigation does not require readers to like the character. It asks that factual claims about her knowledge, motives and creators be tested against dated material, and that accusations made by real people be presented as allegations rather than proven facts.'
      ] }
    ],
    references: [{label:'Riot — Seraphine publication archive',url:riotArchive},{label:'Riot — original developer explanation',url:insights},{label:'Polygon — contemporary social-media campaign coverage',url:'https://www.polygon.com/interviews/2020/11/3/21548141/seraphine-controversy-league-of-legends-twitter/'}, {label:'Stephanie — The Problem With Seraphine',url:'https://step-nie.medium.com/the-problem-with-seraphine-58dc16c07e79'}, {label:'Wikipedia — Seraphine reception and sources',url:wikipedia}],
    related: ['seraphine-original-lore', 'seraphine-skarner', 'seraphine-misinformation']
  },
  {
    slug: 'seraphine-misinformation',
    title: 'Seraphine Lore Misinformation: Influencer Claims, Wikis and AI',
    description: 'An evidence-led audit of Seraphine commentary, original Riot sources, community repetition, Wikipedia, Google Search and AI Overview source attribution.',
    eyebrow: 'HUNTTHETRUTH · SOURCE PROVENANCE',
    lead: 'The investigation asks how commentary about an ambiguous story became a durable account of a character’s personality, and why original evidence published before the backlash was often absent from retellings.',
    sections: [
      { heading: 'The original evidence was already public', paragraphs: [
        'Riot published <em>Champion Insights: Seraphine</em> on 12 October 2020, before many popular reactions. That article explicitly discussed empathy, Brackern souls, the role of song, overwhelming emotional hearing and the character’s stated motives.',
        'The core audit compares each commentator’s factual assertions and source choices with the material available on their video’s publication date. A statement about the ethical implications of a crystal is different from an established fact about Seraphine’s awareness or indifference.'
      ] },
      { heading: 'Creator comparisons', table: { headers: ['Commentator', 'Historical material examined', 'Central audit question'], rows: [
        ['T B Skyen', '12–14 October 2020 material and later retrospective', 'Does the claim about knowledge and culpable inaction follow from the original sources?'],
        ['Necrit', '14, 18 October and 4 November 2020 coverage', 'Were changes and earlier developer explanations represented in their full context?'],
        ['NickyBoi', '24 October 2020 and later comments', 'Was the lore criticism set against the narrative explanation accompanying Riot’s published concept art?'],
        ['Skooch', '16 October 2020 and subsequent follow-up', 'Did comparing the short biography against K/DA promotion omit Riot’s separate developer article?'],
        ['ProGuides', '24 October 2020 coverage', 'What did a comparatively balanced response cover, and what did it still omit?']
      ] } },
      { heading: 'Propagation into reference sources', paragraphs: [
        'The source audit extends to community wikis and Wikipedia. A page can accurately report that critics called Seraphine cruel while still omitting Riot’s contemporary explanation of her characterisation. That omission matters when readers mistake a report of criticism for confirmation of the underlying accusation.',
        'The investigation has also examined Wikipedia’s history and proposed corrections. Its historical omission and its current content are not the same question; revision dates must establish which version readers encountered at a particular time.'
      ] },
      { heading: 'What Google presented in November 2026', paragraphs: [
        'Four searches were recorded in Singapore on 26 November 2026: <em>seraphine lore</em>, <em>seraphine skarner</em>, <em>seraphine original lore</em> and <em>why is seraphine controversial</em>. The AI Overviews visibly featured Reddit and historical creator commentary, including source presentations associated with T B Skyen and Necrit.',
        'For the query specifically requesting original lore, the initial source display did not explicitly identify Riot’s 12 October developer article. This is an observation about which sources were visible in those results, not evidence that the article was unavailable to Google or that a model had been trained on any particular source.'
      ] },
      { heading: 'Repeated claims are not independent corroboration', paragraphs: [
        'A criticism repeated by multiple videos, forums, search snippets and AI answers may be the same interpretation recycled through dependent sources. The number of references does not establish that each reference independently checked the original publication.',
        'The investigative method is to trace the claim back to a dated primary source, compare the exact wording and document where the account changes between retellings.'
      ] }
    ],
    references: [{label:'Riot — Champion Insights: Seraphine',url:insights},{label:'Riot — dated Seraphine releases',url:riotArchive},{label:'Skooch — contemporary October 2020 commentary',url:'https://www.youtube.com/watch?v=mtDognO_CPM'},{label:'NickyBoi — contemporary October 2020 commentary',url:'https://www.youtube.com/watch?v=bDa0p_xx_KA'},{label:'T B Skyen — 13 October 2020 video',url:'https://www.youtube.com/watch?v=xDl7-WITHNo'},{label:'Wikipedia — Seraphine article',url:wikipedia}],
    related: ['seraphine-original-lore', 'seraphine-lore-changes', 'sources']
  },
  {
    slug: 'sources',
    title: 'Original Seraphine Lore Sources and October 2020 Evidence',
    description: 'Dated Riot primary sources, original lore, historical voice lines, developer clarifications and creator material for independent verification.',
    eyebrow: 'DOCUMENTS · ORIGINAL PUBLISHERS',
    lead: 'The most important source in the October 2020 debate was available before the champion released. This register links to the publisher’s material and records why dates and revisions matter.',
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
      { heading: 'Creator and wiki records', paragraphs: [
        'The wider audit analyses creator videos with dated transcripts and timecodes, alongside the League Wiki and Wikipedia revision histories. For a given claim, the important question is which original source supports it and whether intervening summaries accurately preserve its meaning.',
        'The source links below provide the initial documentary trail. For the complete historical claim comparisons, see the original-lore, revision-history and misinformation articles linked from this page.'
      ] }
    ],
    references: [{label:'12 October 2020 — Champion Insights: Seraphine',url:insights},{label:'13 October 2020 — official publication archive',url:riotArchive},{label:'Seraphine biography — current URL',url:biography},{label:'29 October 2020 — Standing Room Only',url:standing},{label:'29 October 2020 — Jeevun Sidhu statement',url:sidhu},{label:'October 2020 — Riot statement collection',url:riotRedPosts},{label:'Historical Seraphine voice lines',url:voiceHistory},{label:'Wikipedia — Seraphine article and edit history',url:wikipedia}],
    related: ['seraphine-original-lore', 'seraphine-lore-changes', 'seraphine-misinformation']
  }
];

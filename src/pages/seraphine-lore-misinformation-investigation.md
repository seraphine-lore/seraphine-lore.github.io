---
layout: ../layouts/ReportLayout.astro
title: "Seraphine Lore Misinformation: Influencer Bias, Google AI and Wikipedia | HUNTtheTRUTH"
description: "Riot published Seraphine’s empathy and Brackern lore on League’s official website before the backlash. Cross-examination of YouTube omissions, Google AI citations and Wikipedia’s six-year gap."
---


And what happens when search engines and (new) AI systems begin presenting that same claim as established 'fact' due to popularity? How does that give new players looking into a champion they like a misleading answer from e.g. Gemini/Bing AI pulling misinformation as established fact? 

Why did even the official League Wiki state a possible interpretation as fact… with no references in the same document for contextual reading for an entire 6 years? 

And likewise - how did ***even Wikipedia***, one of the highest authority of SEO rankings…. not mention the primary source of lore despite it *literally* being on League of Legend’s official website?

I've been investigating the controversy surrounding Seraphine's original lore since her October 2020 release. Context - I’m a Product Engineer (so use tools like Jira which is what Riot also uses) and my other SWE friends also helped research and peer review this via said tool (they don’t play League). 

What started as an examination of Riot's original characterisation developed into a wider investigation into how misleading interpretations can become accepted as fact through influencers, repeated community narratives, selective use of primary sources and, more recently, AI-generated answers which can e.g. mislead new or casual players. 

**The issue isn't that people dislike or even hated a video game character.**

Unfortunately, my investigation has also uncovered something more concerning: the controversy shows how real players became targets of hostility, and at least one influencer later **publicly acknowledged feeling that he had helped encourage such results.**

That's part of why I wanted to share these findings with the wider League community.

It's perfectly fine to hate Seraphine, Teemo, Yasuo, Yone, or any other champion. My personal most disliked champ is Yuumi purely from a gameplay perspective. 

We all have characters we can't stand. But there's a difference between disliking a champion and allowing that dislike to turn into a [bandwagon](https://en.wikipedia.org/wiki/Bandwagon_effect) where people who enjoy playing them become targets. At the end of the day Riot is a business not a charity, this is F2P psychology, literally content is optional; you can simply ignore something you don’t like without harassing other real players for them having their preferences.

When influential voices reinforce those attitudes, and audiences begin treating their opinions as established facts; the consequences can extend well beyond the game itself.

**You don't have to like Seraphine to care about this.** This is about how League’s community evaluate information, challenge popular narratives and treat other players — especially when thousands of people are repeating the same thing.

That's why I believe these findings deserve to be examined openly, with the original sources available for everyone to judge for themselves. Whilst I have the ability as an Software Engineer to use OSINT, all is in the public domain and open. 

Sharing my own frame of reference: I started playing League around 2020 but only recently became interested in its lore after rewatching *Arcane* earlier this year. Over the past few months, I've also read the Ashe, Lux and Zed comics, which I've thoroughly enjoyed.

What prompted me to investigate Seraphine's original lore controversy was a trending Twitter discussion on 21 October, started by [@goldendoggyxx (formerly @astral\_fizzy)](https://x.com/goldendoggyxx/status/2112944215269265494), questioning the role of influential YouTubers in spreading misinformation about her original characterisation. This was a key point - as it highlights the same controversy being revived despite being 6 years later. 

The following day, an [esports player, @deicideares](https://x.com/deicideares/status/2113284073640845328), responded by repeating the familiar negative perception of Seraphine, attracting considerable engagement. 

I challenged his interpretation using Riot's original primary sources. **To his credit, he acknowledged that he had got a key reference wrong.** Credit to both of them, for providing me the evidential context from both sides of polarising opinions to fuel my intuition. 

That’s the thing with evidence and facts - social media doesn’t care (we all know this I hope) and outputs emotions as normalised consensus, not the actual evidence. 

Even the co-founder of Riot and the designer for the IP before/on the 29th October release was *completely ignored* in favour of popular influencers - it’s about outputting emotion, not actual logic to observe a new product neutrally. 

e.g. eSports player negative opinion tweet at 10k+ likes so high spread of that opinion becoming ‘normalised’. But my correction and his own admission? Got exactly 1 like. 

We then had a productive chat via DM; he was open to help sharing that misinformation did occur but as an eSports player was understandably busy with Worlds and was not available to help retweet my observations at the time. He was happy for me to share the context of that Twitter trend and his subsequent agreement and wanting to talk to me. If he reads this then I credit him and also the first user who got the trend going which gave me the gut feeling that something wasn’t right. 

This is aimed at misinformation and the consequences from a SDLC point of view. 

Anyone who liked Skarner and wanted to see his OG lore develop also lost out. I won’t get into the evidence showing that the interest in Skarner was very low until Seraphine’s release. But for irony - Seraphine did actually end up giving him and the bracken a voice if you think about it. 

As an experienced Product Engineer, I can advise that’s exactly what happens when vicious negative user feedback occurs, developers/designers/product managers will backtrack and cancel their intended stories aka ‘features’ in an app/product. 

Comparative example - Halo 5, Halo Infinite. For that franchise, it’s gotten bad enough into a complete reboot possibility. 

Halo 5 had the most misleading marketing campaign that upset fans of the story - yet did have an interesting ending - that was quickly scrapped and set aside in the next soft reboot with Infinite due to player feedback. Then it happened again. 

Hence, please enjoy my ‘HUNTTheTruth’ style investigation findings for this matter. 

Considering the detail, feel free to (optionally) listen to this [boss theme song from Metroid Prime 3 *Corruption*](https://www.youtube.com/watch?v=UiDkCW9-exI) as you read to help engagement.

**Out of scope:**

- Selling skin concerns
- Marketing tool for K/DA
- Sona 2.0
- Favouritism of skins over longer term champs
- K/DA lore first then Runeterra
- Allegation of some girl claiming Seraphine’s design is based on her (…)
- Opinions on quality of Riot’s writing (we know this has been one of Riot’s biggest QA failures)

I have a few interesting opinions on a few points above but leaving things out to keep a tight focus. 

I don’t want an ironic meta QA failure. But what I will obviously say that the above context *does *explain the reasoning of hatred during the release of the IP, absolutely.

That context is key and as these are indeed valid concerns, providing background to the issues raised below. A large audience of the community was fuelled with this hatred which made it *very *easy for influencers to take advantage of. 

## Background context: League of Legends, Riot Games and Seraphine’s release

League of Legends is a free-to-play multiplayer online battle arena (MOBA) released by Riot Games in 2009. In its standard five-versus-five mode, players control champions whose fictional identities also form part of the Runeterra narrative universe.

Riot monetises optional digital content, including skins and event passes. Champions are therefore both gameplay products and fictional IP. Riot’s [2023 business model explanation](https://www.leagueoflegends.com/en-gb/news/dev/dev-league-s-business-model-in-2023/) provides additional context for this commercial structure.

Seraphine’s 2020 release combined a fictional social media campaign, collaboration with K/DA and a 3,250 RP Ultimate skin. Criticism of commercialisation, parasocial marketing and gameplay similarities to Sona must be distinguished from factual accusations about the character’s original Runeterra lore.

The investigation examines how those separate criticisms became associated with accusations of knowingly exploiting the Brackern, and how influencer coverage compared with the primary evidence available at the time.

Further background:

- [League of Legends’ business model: how Riot Games makes money](/league-of-legends-business-model/)
- [Seraphine’s marketing controversy: K/DA and Ultimate skins](/seraphine-marketing-controversy/)
- [Seraphine’s 2020 release: marketing, backlash and lore misinformation](/seraphine-release-controversy/)

## Primary sources: what Riot actually published

**12 October 2020 — [Riot, Champion Insights: Seraphine](https://www.leagueoflegends.com/en-us/news/dev/champion-insights-seraphine/).** Riot opened by distinguishing the K/DA social-media character from the Runeterra singer. Its explanation then connected Seraphine's personality, magic, relationship with the Brackern and reason for singing. Read the [“Sing Your Soul’s Song” section](https://www.leagueoflegends.com/en-us/news/dev/champion-insights-seraphine/) together rather than isolating the reference to Skarner's family.

This entire initial lore despite literally being on the game’s official website was completely ignored despite being important context.

**Empathy was the foundation, not an afterthought.** Narrative writer Rayla “Jellbug” Heide explicitly says the team wanted Seraphine to be *“deeply empathetic”*.

They deliberately avoided an unapproachable celebrity archetype and made her experience other people's emotions as music. This explains both her personality and her unusual way of perceiving the world. Empathy is therefore Seraphine's defining character trait, underpinning both her personality and her supernatural abilities. 

Any interpretation of her character* needs to account for this foundational aspect* of her original characterisation.

**The Brackern's song was part of that same ability.** Narrative writer Daniel “Istogaiden” Couts explains that hextech crystals contain Brackern souls — explicitly including Skarner's family — and that Seraphine can hear them. ***“Song is important to the brackern, and that song continues from their crystals.”*** She connects with one crystal in particular and, **through listening to it**, begins learning to manage her own powers. The connection is a formative part of her story, not merely a stage-powering device.

**Hearing other people's feelings was overwhelming.** Riot describes a *“constant barrage of songs”* from Piltover and Zaun's inhabitants and the trapped souls around her. It explicitly says that being unable to rescue those souls does not mean she is indifferent to them. Her singing is how she makes sense of the emotions she hears — *“both tormented and joyous”* — and turns them into something she can share with others. In Couts's explanation, she can hear an audience member's individual soul-song and sing it back. Her empathy, magical hearing and ambition to bring people together are one connected narrative.

**Her intended characterisation was reinforced across the team.** In the article's closing exchange, concept artist Anna “Newmilky” Nikonova describes *Seraphine as wanting everyone to know she loves them*; Couts, Heide and gameplay designer Jeevun “Jag” Sidhu agree. The gameplay discussion likewise explains that her supportive abilities were designed to **encourage cooperation rather than hostility between teammates.**

(Appreciate I am being as concise as I can  but the irony of the last one really shows how big of a QA failure Riot made with this IP’s release)

### Where Riot's execution failed: the original voice-over

The intention documented above does not excuse what Riot allowed into Seraphine's original voice-over. Her first-encounter line to Skarner was:

> “I miss your kind too, Skarner… Would **you like** to **hear** their **song**?”

That is the [historically documented line](https://wiki.leagueoflegends.com/en-us/Seraphine/History) which was the most controversial due to it’s *delivery* was subsequently removed in patch 10.24. Disclaimer: some people mentioned that regardless of delivery, that line is ‘sociopathic’. 

The experiment to determine this is simple - ask real people at work who don’t like League etc to remove bias, say something like you made a song with a friend of theirs, their friend passed away and you said the same line empathetically when they were grieving. You can then find out how people would normally perceive that the words themselves are empathetic. This is exactly in line with the character defining trait of the IP, and song is specifically mentioned as per Champion Insights.

So - if the line is read in context of the entire actual lore, the interpretation and intention is explicitly now obvious. But, it is apparent that the VO delivered all lines in the same happy Lux-optimism like approach. This is confirmed when all first encounter lines are listened to. 

Unfortunately, this was clearly a QA failure, VO for games is delivered in one session, so being able to quickly fix this was not possible in the tight 2 weeks sprint (a spring in SDLC is normally 2 weeks, notice how that aligns up with exactly the timeline I’m sharing) to ‘fix’ these mistakes; hence the soft retcon. 

**28 October 2020:** Riot co-founder Marc Merrill publicly acknowledged that disputed material should already have been removed from the intellectual property and promised a fix, constituting a public acknowledgement of an execution/QA failure.

> ah, that wasn't cool and was supposed to have been removed from the IP =p it will be fixed

— [Marc Merrill, original Twitter statement, 28 October 2020](https://x.com/MarcMerrill/status/1321595282878996482)

**29 October 2020:** Jag explained that the recorded Brackern lines had been removed because the team had agreed it did not fit the story being told. See the [contemporaneous preserved developer statements](https://www.surrenderat20.net/2020/10/red-post-collection-client-cleanup.html) and [report of Merrill's 28 October response](https://www.dexerto.com/league-of-legends/riot-already-changing-seraphine-league-of-legends-fan-backlash-1442889/). Confirms Seraphine's story is to help the Brackern in future. 

**This was a production and narrative QA failure on Riot's side.** The issue was not that Riot had failed to intend an empathetic Seraphine; its *own* 12 October publication explicitly states otherwise. 

The issue was that recorded dialogue delivery contradicting the agreed character knowledge made it far enough through the content pipeline to be publicly heard during PBE. 

Game VO often involves concentrated recording sessions, with scripts, direction and approvals prepared beforehand; recording pickups and later changes are also standard practice but consider the fact that the timing to release was a very short sprint cycle (2 weeks between first lore reveal and the actual release), it would absolutely may have been not possible to get the VO back in on time to create those corrections *and *any other potential risk within such a short sprint cycle. 

That failure deserves criticism in its own right. It also matters to the investigation: **an execution error is not evidence that the developers originally intended a cruel or sociopathic character**. The dated Riot material allows those two questions to be examined separately.

### The October 2020 timeline & secondary official sources:

**12 October 2020:** Champion Insights published. (NEVER MENTIONED BY ANY INFLUENCER’S VIDEOS)

**13 October 2020, 15:00 UTC:** *Seraphine Champion Bio* — original champion biography published.

**28 October:** patch 10.22 and contemporary reporting of Marc Merrill's acknowledgement of material that should have been removed. (NEVER MENTIONED BY ANY INFLUENCER’S VIDEOS)

**29 October 2020:** Seraphine champion release; *Standing Room Only* (official colour story) published; and Jeevun Sidhu's public clarification distinguishing player knowledge from Seraphine's knowledge of the Brackern. [Original developer post](https://twitter.com/JeevunSidhu/status/1321936795597066241). (NEVER MENTIONED BY ANY INFLUENCER’S VIDEOS)

**29 October**: [community cross-post](https://www.reddit.com/r/SeraphineMains/comments/jkk42b) by Jeevun - an IP owner at Riot even tried to share the canon on Reddit and intentions regarding Seraphine’s story being set up to help the Brackern but had little to no engagement.  (NEVER MENTIONED BY ANY INFLUENCER’S VIDEOS)


We now go into the meat of the findings, enjoy:

### Influencer video metadata — chronological evidence register

Approximate views recorded November 2026; cumulative views are not unique viewers.

| Influencer | Video title | Published | Views | Notes |
| --- | --- | --- | --- | --- |
| Skooch | The Most CRINGE Thing Riot Has Done | 12 Oct 2020 | ≈500,000 | Commercial and parasocial marketing criticism; contextual evidence, not lore misinformation |
| T B Skyen | Let's think out loud about Seraphine and what she's selling for 28 minutes | 12 Oct 2020 | ≈147,639 | Commercialisation and potential parasocial hypocrisy; transcript pending |
| T B Skyen | seraphine's stage is canonically powered by the souls of the innocent | 13 Oct 2020 | ≈209,062 | Skarner/Seraphine thumbnail; Brackern controversy |
| T B Skyen | ok but now let's try to be CONSTRUCTIVE about seraphine | 14 Oct 2020 | ≈153,938 | Constructive criticism; lore relevance pending transcript |
| Necrit | Rift News: Seraphine Backlash, Ranked Rewards & New Skins | 14 Oct 2020 | ≈215,095 | Early backlash coverage; transcript pending |
| Skooch | How Seraphine got WORSE | 16 Oct 2020 | ≈286,181 | Biography comparison omits Champion Insights |
| Necrit | Was Seraphine Forced Into Runeterra? | 18 Oct 2020 | ≈378,859 | Influencer cross-references: description links to Skooch's video and T B Skyen's channel |
| ProGuides Challenger League of Legends Guides | Why SO MANY League Players HATE Seraphine (Design, Kit, Lore) - League of Legends | 24 Oct 2020 | 352,390 | Transcript audited: cites and uses Champion Insights for K/DA distinction and stage concepts, but omits its Brackern inability-to-save explanation in lore criticism. See detailed audit. |
| NickyBoi | Original Seraphine criticism video (exact title pending) | 24 Oct 2020 | ≈2,000,000 | Uses Champion Insights artwork; recommends Skooch |
| Necrit | They Changed Seraphine's Lore - Is it Better? | 4 Nov 2020 | ≈330,081 | Lore revision commentary; transcript pending |
| Skooch | My Final Thoughts On Seraphine | 6 Nov 2020 | ≈246,015 | Recommends NickyBoi; acknowledges developers lacked malicious intentions |
| Skooch (with NickyBoi) | Can we talk about this? Seraphine | 14 Nov 2020 | ≈920,000 | Direct collaboration; post-revision lore claims; explicit acknowledgement of views incentive |

**Combined approximate views:** ≈5,739,260 across twelve videos in this register, including approximately 1,952,196 across Skooch's four videos. The two additional Skooch view counts are rounded.

### Evidence baseline for influencer cross-examinations — original developer intent and subsequent biography revisions

**12 October 2020 — Champion Insights: Seraphine.** Complete context relevant to characterisation, motivation, Brackern and the design rationale. [Original Riot developer article](https://www.leagueoflegends.com/en-us/news/dev/champion-insights-seraphine/).

| Section | Relevant published evidence |
| --- | --- |
| Introduction | Piltovan performer; sensitive, tenacious and supportive; seeks human connection |
| A Piltovan Pop Star | Developers wanted to explore positive, creative dimensions of Zaun |
| A Piltovan Pop Star | Music and performance developed from the Piltover–Zaun setting |
| A Piltovan Pop Star | Hextech platform and microphone support her performances; stage also serves visual/gameplay design |
| Sing Your Soul’s Song | Jellbug explicitly wanted Seraphine to be “deeply empathetic” |
| Sing Your Soul’s Song | Team deliberately avoided the emotionally distant celebrity archetype |
| Sing Your Soul’s Song | Her magic lets her hear people’s emotions as music |
| Sing Your Soul’s Song | Hextech crystals contain Brackern souls; most Piltovans do not know |
| Sing Your Soul’s Song | Riot acknowledges the ethical stakes of the trapped Brackern |
| Sing Your Soul’s Song | Seraphine can hear Brackern singing through crystals |
| Sing Your Soul’s Song | She connects with a particular crystal and learns to manage her overwhelming abilities through listening |
| Sing Your Soul’s Song | She hears the songs of city residents and trapped souls |
| Sing Your Soul’s Song | Riot expressly distinguishes inability to save trapped souls from indifference |
| Sing Your Soul’s Song | Desire to connect with and uplift others drives her musical ambitions |
| Sing Your Soul’s Song | She transforms tormented and joyous songs into music for others |
| Sing Your Soul’s Song | She can hear an individual soul-song and reflect it back through performance |
| Music in Action | Gameplay design encourages teamwork and cooperation |
| Music in Action | Supportive mechanics reinforce her cooperative identity |
| An Encore Performance | Newmilky says Seraphine wants everyone to know she loves them |
| An Encore Performance | Other developers affirm that characterisation |

**29 October 2020 — biography soft retcon.** Six identified text changes, original and revised wording. The ellipses in rows 2 indicate unchanged surrounding text. Precise publication time not established. These revisions must not be applied retroactively to videos published before 29 October.

| # | Original biography | Revised biography |
| --- | --- | --- |
| 1 | The voice was kind. | Though hard to hear, and harder to comprehend, the voice was kind. |
| 2 | The voice helped Seraphine understand how to resonate with a crowd… | The voice rarely spoke clearly, but Seraphine felt its influence as it helped her understand how to resonate with a crowd… |
| 3 | The voice of her hextech crystal had spoken of what hatred left unchecked could accomplish. | Her hextech crystal had sung an elegy of what hatred left unchecked could accomplish. |
| 4 | they repurposed the crystal to power its opposite | they gave the crystal a new home in its opposite |
| 5 | No corresponding sentence | Seraphine hoped the crystal’s voice would be among them. |
| 6 | because to her, everyone matters—especially those who are struggling. | because to her, everyone deserves to be heard—especially those who are struggling. |

#### Significance of revision #3 — the elegy

The change from the crystal having spoken of what hatred left unchecked could accomplish to having sung an elegy is particularly significant when cross-examined against Seraphine's original long-movement voice line, [removed in patch 10.24](https://wiki.leagueoflegends.com/en-us/Seraphine/History):

> “The brackern fuel our city, our future. All I can do is sing their elegy.”

In the voice line, Seraphine explicitly acknowledges the Brackern's role in powering the city and describes herself as singing their elegy. In the revised biography, it is the Brackern crystal itself that sings the elegy.

This aligns with Riot's original [*Champion Insights: Seraphine*](https://www.leagueoflegends.com/en-us/news/dev/champion-insights-seraphine/), published on the official League of Legends website on 12 October 2020:

> “Song is important to the brackern, and that song continues from their crystals.”

The revision preserves the Brackern's suffering whilst changing how that suffering is communicated to Seraphine. Perceiving grief through song does not necessarily entail understanding the complete historical circumstances behind it.

However, the original voice line also directly challenges the accusation that Seraphine knowingly does nothing about the Brackern's suffering.

The words **“All I can do”** express an acknowledgement of her own limitations, not indifference. What realistic means does a physically vulnerable teenage singer possess to dismantle an established system of industrial exploitation?

What she does possess is the ability to hear the Brackern's songs and express emotions through music. Singing their elegy represents an act of mourning, remembrance and giving their suffering a voice through the very medium Riot established as important to their culture.

The accusation of inaction therefore disregards both the limitations of the character and the narrative significance of her response to their suffering.

**An inability to rescue the Brackern is not an unwillingness to help them — a distinction Riot had already established in its original developer article.**

Both Necrit and TBSkyen omitted revision #3 from their respective biography revision comparisons, despite its direct relevance to the accusations concerning both Seraphine's knowledge of Brackern suffering and her response to it.

The relationship between the crystal's elegy and Seraphine's own singing is particularly significant. Riot explicitly established that song is important to the Brackern and that their song continues from their crystals. By singing their elegy, Seraphine gives expression to their suffering through the very medium that connects her to them. This is not indifference or inaction: it is an artistic response within the limits of her abilities, with the potential to raise awareness of their suffering. Combined with her desire to hear the crystal's voice and her principle that everyone deserves to be heard, these elements establish a narrative foundation for Seraphine potentially developing into a protest singer advocating for the Brackern.

#### Combined significance of revisions #3, #5 and #6

Revision #3 establishes the crystal's elegy; revision #5 explicitly states that Seraphine hoped the crystal's voice would be among the crowd; and revision #6 establishes her guiding principle that everyone deserves to be heard, especially those who are struggling.

Read together, revisions #5 and #6 demonstrate that the Brackern are included in her stated objective of giving others a voice. Her desire to hear the crystal is not separate from that objective: it is a specific example of it. Combined with the elegy in revision #3, these changes establish a coherent narrative of suffering, emotional connection and inclusion, directly challenging accusations of indifference.

TBSkyen omitted all three interconnected revisions from his January 2021 comparison. NickyBoi likewise omitted their combined significance in Skooch's 14 November 2020 video (03:34–04:02), asserting that the Brackern aspect was removed entirely and dismissing Seraphine's elegy as insufficient.

### Influencer cross-examination: comparing claims with Riot's original evidence

The following dated videos are compared against Riot's material available at the time. 

***The test is not whether a influencer was entitled to dislike Seraphine.***

The test is whether factual claims and characterisations were supported by Riot's primary material available on each video's publication date, what relevant context was omitted, and whether viewers were given enough evidence to distinguish established characterisation from criticism of Riot's execution. The comparison also traces recurring interpretations and documented cross-references between influencers.

#### Skooch — 12 October 2020: The Most CRINGE Thing Riot Has Done

Skooch's initial video (YouTube ID: `RpGE6CNkRQE`) establishes the commercial and emotional framing preceding his later Runeterra lore criticism. Its stated subject is Seraphine's marketing: the fictional social media account, parasocial connections, posts about insecurity, the ultimate skin at launch and the wider K/DA campaign. It does not substantively examine her Runeterra biography, Skarner or the Brackern.

Skooch describes the marketing as “one of the creepiest and cringe-worthy things that Riot has ever done”, and argues that the fictional account's interaction with followers builds a parasocial connection that Riot can subsequently monetise. He nevertheless acknowledges that the people working on Seraphine's account, music and lore may genuinely care about the character, and that the creative design team may not have intended to appear manipulative, money-hungry or predatory. He also explicitly tells viewers that disagreement about Seraphine need not result in hostility towards one another.

The video itself uses audience-engagement techniques, including repeated promotion of his Twitter account, a subscription appeal and expressions of affection towards viewers. These provide context for his criticism of parasocial marketing without establishing that the two approaches are equivalent.

**Significance to the investigation:** This video is contextual evidence of pre-existing negative framing, not an example of Brackern lore misinformation. Four days later, Skooch extends his criticism into Runeterra characterisation through a comparison that omits Riot's contemporaneous developer article. His 6 November follow-up then documents amplification of NickyBoi's commentary. The distinction between commercial criticism and the subsequent selective presentation of lore evidence is central to the chronology.

#### Skooch — 16 October 2020: How Seraphine got WORSE

In his Seraphine commentary (YouTube video ID: mtDognO_CPM; approximately 02:00), Skooch reads sections of the original biography and criticises the use of a Brackern crystal to power her performance stage (\~02:00–05:00). He then scrolls through extensive K/DA promotional material (\~05:13–06:40) before contrasting it with the much shorter Runeterra biography (\~06:41–06:58), arguing that the in-universe character appeared to be an afterthought. Comparison at approximately 06:41 (YouTube video ID: mtDognO_CPM).

That comparison omits Riot's [*Champion Insights: Seraphine*](https://www.leagueoflegends.com/en-us/news/dev/champion-insights-seraphine/), published four days earlier on the same official League of Legends website as the biography. This was not merely a supplementary promotional article: Rayla Heide identifies deep empathy as Seraphine's defining trait; Daniel Couts explains the Brackern souls within hextech crystals, the importance of song to the Brackern and its continuation from their crystals, and Seraphine's connection to a particular crystal that helps her manage overwhelming emotional hearing. Riot expressly distinguishes her inability to save trapped souls from indifference towards them, and explains that she transforms the emotions she hears into music to connect with and uplift others. The article also explains the Piltover/Zaun setting and floating-stage design. Thus the short biography was not the complete published record of Runeterra development. Skooch's comparison could substantiate a disparity in promotional volume, but not the implied absence of this contemporaneous design and narrative work.

**Plausible deniability — selective primary-source comparison:** Four days had elapsed since Riot published *Champion Insights: Seraphine*, and three days since the original biography. Skooch had already published a substantial examination of Seraphine's commercialisation on 12 October. His 16 October comparison of official K/DA promotional material with the Runeterra biography excludes an entire official developer article detailing her Runeterra characterisation, motivations, magical abilities and relationship with the Brackern. The omission is particularly material because the quantity and substance of Riot's published material form the basis of his argument. His demonstrated research makes selective presentation a credible inference.

#### NickyBoi — 24 October 2020: selective use of Riot's own development article

NickyBoi's 24 October video (YouTube video ID: bDa0p_xx_KA) | [Riot's *Champion Insights: Seraphine* (12 October 2020)](https://www.leagueoflegends.com/en-us/news/dev/champion-insights-seraphine/)

At \~10:47–11:32, NickyBoi invokes the same hatred based narrative regarding Brackern souls and Skarner's family, then characterises Seraphine as a *“narcissistic, selfish sociopath”*. 

At \~11:33–12:28, he ridicules her motivations and concludes that she lacks meaningful progression or goals. At \~16:20–16:45, he calls her gameplay, base design and lore afterthoughts to selling a skin i.e. recognition and grouping same concerns with the audience to attract viewers to his video as is called ‘clickbait’.

But twelve days before NickyBoi's video, Riot had *already* published *Champion Insights: Seraphine*, explaining considerably more than simply her intended personality. A reminder of context:

Narrative writer Rayla “Jellbug” Heide explicitly established **deep empathy as Seraphine's defining character trait**, amplified into a supernatural ability to experience other people's emotions as music.

Daniel “Istogaiden” Couts then explained that hextech crystals contain Brackern souls, including Skarner's family, and that **song is important to the Brackern and that their song continues from their crystals**. Seraphine is the first person able to hear their songs through the crystals. She forms a connection with one particular crystal, loses herself in its song and, through that experience, begins learning to manage her own powers.

Riot goes further explicitly. Seraphine is constantly overwhelmed by the songs of Piltover and Zaun's citizens and the trapped souls around her. She cannot necessarily save those souls, **but that does not mean she doesn't care about them**.

And here's the crucial part that keeps getting overlooked: 

**Seraphine wants to connect with others and uplift them so deeply that she learns to do it the only way she knows how — through music.** She takes the overwhelming mixture of suffering and joy she hears, transforms it into something meaningful and beautiful that she herself can understand, and gives it back to everyone around her.

Couts even explains that she can hear an individual's soul-song and sing it back to them, creating a personal connection that ordinary performers cannot.

This wasn't merely a vague statement about her being a nice person. **Riot had already explained the entire narrative relationship between her empathy, the Brackern's songs, her struggle to manage the emotions she hears, and her motivation to use music to connect with and uplift others.** The developers even concluded the article by collectively agreeing that Seraphine wanted everyone to know she loved them.

Riot also documented why she belonged in Piltover and Zaun, how the region's technology made her performances possible, and why her stage was designed the way it was.

**All of this was publicly available on 12 October 2020.** 

Yet NickyBoi's 24 October video portrayed her as a narcissistic, selfish sociopath.

**Plausible deniability — likely intentional selective presentation, based on the documented source overlap:** NickyBoi's video displays concept artwork from Riot's *Champion Insights: Seraphine* while presenting Seraphine as a “narcissistic, selfish sociopath”. The same official article, published twelve days earlier, directly describes her deep empathy, the Brackern souls and their song, her connection to the crystal, and Riot's explicit distinction between being unable to save trapped souls and not caring about them. This is a materially stronger omission than merely failing to discover a separate webpage. On the evidence that he used artwork originating in that article while excluding its directly relevant narrative explanations, intentional selection of favourable material is **likely**. The remaining uncertainty is whether he personally viewed the article text or obtained its artwork through another route; the visual overlap alone cannot establish which. His standing as a League commentator, the article's publication on Riot's official site and the twelve-day interval further weaken an innocent-oversight explanation.

NickyBoi's video **uses concept art taken directly from Riot's *Champion Insights: Seraphine*** — the very same article that **explicitly established empathy as her defining character trait**, the same article saying **song is important to the Brackern and that their song continues from their crystals**.

The article also explained how Seraphine connected with a particular crystal's song while learning to control her abilities, how the constant barrage of emotions and songs affected her, why her inability to save the trapped souls did **not** mean she lacked compassion, and how she transformed those experiences into music to connect with and uplift others. It even documented the creative reasoning behind her integration into Piltover and Zaun, including her stage design.

Yet his visual-design criticism draws directly from that publication, while his lore criticism omits the narrative explanations published alongside the artwork.

This raises a straightforward question: **how does someone use Riot's own development article to criticise Seraphine's visual design, yet overlook the explicit narrative context in that same source when portraying her as a narcissistic, selfish sociopath?**

Riot deserves criticism for horrendous rushed QA. But that doesn't explain why NickyBoi used Riot's own canon lore article to criticise Seraphine's visual design, only to ignore its extensive narrative explanations when portraying her as a narcissistic, selfish sociopath i.e. [cherry picking](https://en.wikipedia.org/wiki/Cherry_picking) / [strawman argument](https://en.wikipedia.org/wiki/Straw_man).

**And this is where the wider problem begins.** The backlash against Seraphine was already well underway…. Rather than challenging the prevailing narrative with the primary evidence available to him, NickyBoi consciously reinforced and strengthened the backlash, presenting an interpretation that aligned with what an already hostile audience wanted to hear. Obviously, any authentic video would have provided the full context so the audience can make an informed opinion. 

In his [6 January 2022 Twitter thread](https://x.com/NickyBoiYT/status/1478992366577012736), NickyBoi acknowledged the hostility associated with his video:

> The sheer amount of hatred festered from that video keeps me up at night sometimes

***The irony is that this is exactly very [parasocial behaviour](https://en.wikipedia.org/wiki/Parasocial_interaction) often criticised in Seraphine's K/DA marketing by all influencers mentioned in this post.***

 Instead of critically examining the character neutrally, the commentary became an exercise in validating an audience's existing emotional investment in hating her.

That's why the omission matters, because it's not simply a missing lore detail. **It's evidence consistent with pandering to an established hate train, where audience approval takes precedence over engaging with inconvenient primary sources.**

And here's where the irony gets even better.

NickyBoi's own Fandom biography describes his Seraphine video as criticising Riot for exploiting parasocial relationships through her K/DA social-media persona.

The same biography also credits that video with an extraordinary surge in popularity:

> “This video clearly struck a chord with people in the League of Legends community, as his channel tripled in size over the next three months.”

**So a video criticising Riot for exploiting parasocial attachment reportedly helped triple its influencer's audience, while reinforcing an existing community-wide emotional investment in hating the very character he was discussing.**

Remember, this was the same video that used Riot's *Champion Insights* concept artwork while overlooking its explanations of Seraphine's empathy, the importance of song to the Brackern, her connection with the crystal and her motivations.

From a ***social-engineering*** perspective, the mechanism is particularly interesting: identify an audience's existing emotional response, reinforce it through selective information, and receive engagement and social validation in return. The audience feels understood, the influencer gains visibility, and the prevailing narrative becomes increasingly difficult to challenge.

Then, on 6 January 2022, [NickyBoi publicly acknowledged](https://x.com/NickyBoiYT/status/1478992366577012736) feeling that he had helped encourage the cycle of hatred, urging people to stop harassing Seraphine players.

**Result: the influencer who criticised Riot's parasocial marketing benefited from a surge in audience engagement around his own emotionally charged criticism, and later acknowledged contributing to the hostility surrounding it.**

But unlike the fictional parasocial relationship he criticised, this controversy had consequences for real people.

At \~15:09–15:16, **NickyBoi also recommends Skooch's video** and states that he works for him. **Skooch subsequently recommends NickyBoi in his 6 November follow-up.**

**This establishes a dated, two-way amplification link between the influencers, followed by direct collaboration in Skooch's 14 November video, in which NickyBoi presents the lore segment.**

**Primary-source and intent assessment — NickyBoi's 24 October video:** The decisive distinction is between an objection to Riot's execution and an assertion that the fictional character is selfish or sociopathic. *Champion Insights* explicitly says Seraphine hears trapped Brackern souls, connects through their song, and may be unable to save them without being indifferent. His use of artwork originating in that article, together with the article's availability on Riot's official website twelve days earlier, makes **intentional selective presentation likely**, although it does not prove he read the adjacent text. His recommendation of Skooch's video at 15:09–15:16 further documents amplification of an interpretation which did not incorporate the complete contemporaneous developer explanation. This inference concerns selection and framing of public evidence, not proof of a private commercial motive.

#### 6 November follow-up — Skooch: My Final Thoughts On Seraphine

In a subsequent Seraphine discussion on 6 November 2020, Skooch explicitly recommends NickyBoi's video to viewers (\~13:38–14:00), says he will link it, and goes on to discuss NickyBoi's China-related argument. 

This establishes a concrete influencer-to-influencer amplification link, rather than an assumed shared narrative. In the same discussion (\~05:04–05:30), Skooch explicitly says he does not believe the people who worked on Seraphine had bad intentions: his primary criticism is Riot's commercialisation, not an allegation that the writers deliberately created a cruel character. 

**Plausible deniability — continued omission following developer clarification:** By 6 November, 25 days had elapsed since *Champion Insights*, 21 days since Skooch's previous lore examination and eight days since Riot's biography revisions and developer clarification. Despite this additional opportunity, Skooch recommends NickyBoi's pre-revision analysis, which characterises Seraphine as a sociopath while using artwork originating from the developer article establishing her empathy. His acknowledgement that Riot's developers lacked malicious intentions distinguishes commercial criticism from creative intent. Nevertheless, his recommendation amplifies the earlier characterisation without supplying the revised elegy (#3), hope of hearing the crystal (#5), inclusive listening objective (#6), or Riot's explanation of inability to rescue. The cumulative evidence weakens an explanation based on initial release confusion or insufficient research opportunity. No individual six-change comparison by Skooch is established.

#### Skooch and NickyBoi — 14 November 2020: Can we talk about this? Seraphine

**Video:** Skooch, 14 November 2020 — *Can we talk about this? Seraphine* (YouTube ID: `b5swQg-G_PI`); approximately 920,000 views. Source: timestamped transcript. Riot's 12 October developer article, 29 October biography revisions and developer clarification were already available.

**Direct collaboration (01:23–01:49):** Skooch introduces NickyBoi specifically to explain Seraphine's lore. NickyBoi delivers the lore segment, and Skooch subsequently endorses his analysis. This establishes shared authorship of the presented narrative rather than independent corroboration.

| Timecode | Claim or framing | Primary-source comparison |
| --- | --- | --- |
| 01:51–02:04 | NickyBoi says Seraphine grew up in Zaun and her family moved to Piltover because of her hearing. | The biography identifies her as born in Piltover to Zaunite parents; her hearing difficulties arose during childhood. |
| 02:10–02:17 | The crystal's voice is described as crying out for help. | The revised biography establishes communication that is difficult to hear and comprehend, including an elegy, rather than an explicit intelligible request for liberation. |
| 02:53–03:14 | Seraphine knows the crystals contain conscious souls in pain but chooses a hoverboard and pop stardom instead of freeing them. | Riot's 29 October clarification distinguishes her knowledge from the audience's; Champion Insights explicitly distinguishes inability to save trapped souls from indifference. |
| 03:34–03:49 | Riot removed the Brackern aspect entirely; NickyBoi acknowledges the reduced clarity of the voice but questions whether the original portrayal was a writing mistake. | Revisions #3, #5 and #6 retain the elegy, the hope of hearing the crystal's voice and the inclusive objective of giving everyone a voice. The Brackern relationship was not removed entirely. |
| 03:50–04:02 | NickyBoi presents the elegy voice line and insists she could free the souls instead. | Mourning is an action, and “All I can do” expresses a limitation. No means of liberation available to Seraphine is established. Riot's developer article had already addressed this distinction. |
| 08:28–08:48 | Skooch repeats the stage exploitation framing, specifically invoking Skarner's dead mother. | Champion Insights establishes souls including Skarner's family, but does not establish that the particular stage crystal contains his mother. Its explanation of Seraphine's connection and inability to rescue is omitted. |

**The elegy and the six revisions:** NickyBoi presents “The brackern fuel our city, our future. All I can do is sing their elegy” (03:50–03:56), then treats liberation as an available alternative. This turns evidence of mourning into an accusation of indifference without establishing that a teenage singer could dismantle the exploitation of the Brackern. Riot had explained: “Song is important to the brackern, and that song continues from their crystals.” The revised biography's elegy (#3), hope of hearing the crystal (#5) and principle that everyone deserves to be heard (#6) directly challenge the assertion that the Brackern aspect was removed entirely.

**Attention economy (09:58–10:13):** Skooch acknowledges, “I know that I have milked her for every single view I can”, describing the subject as “the freest content”. This is direct evidence of his stated incentive to repeatedly cover the controversy, rather than an inference from publication frequency alone. The irony is that he criticises Riot's commercial exploitation of Seraphine while acknowledging his own use of the controversy to generate views.

**Further amplification (10:13–10:39; 10:54–11:23):** Skooch describes NickyBoi's video as probably the best Seraphine video he has seen, directs viewers to it through the description and end-screen annotation, and encourages subscriptions to NickyBoi's channel. Together with the 24 October and 6 November recommendations, this establishes reciprocal amplification followed by direct collaboration.

**Plausible deniability — cumulative evidence and elapsed time:** By 14 November 2020, 33 days had elapsed since Riot published *Champion Insights: Seraphine* (12 October), 31 days since the original biography (13 October), and 16 days since the six biography revisions and developer clarification (29 October). This was not commentary produced during the initial release window.

NickyBoi had already used concept artwork originating from *Champion Insights* in his 24 October video, 21 days before this collaboration. The article containing that artwork also explained Seraphine's empathy, her connection to the Brackern through song and the distinction between being unable to save them and being indifferent to their suffering. Its narrative explanation remained omitted on 14 November.

NickyBoi explicitly discusses the revised biography (03:34–03:49), establishing awareness of the revisions, and presents the elegy voice line (03:50–04:02). Nevertheless, he asserts that Seraphine knowingly exploits conscious souls, claims the Brackern aspect was removed entirely and dismisses her mourning on the premise that she could liberate them. He does not address Riot's clarification or the combined significance of revisions #3, #5 and #6. Skooch subsequently repeats the exploitation framing (08:28–08:48) and endorses NickyBoi's analysis (10:13–10:39).

His presentation of the elegy establishes direct awareness of Seraphine's acknowledgement of Brackern suffering. His response assumes liberation was an available alternative, despite Riot's original explanation of her inability to rescue. Sixteen days after the revisions, his categorical claim that the Brackern aspect was removed entirely excludes the changes preserving mourning (#3), continuing concern (#5) and inclusion within her guiding principle (#6).

The cumulative evidence materially weakens an explanation based solely on initial release confusion or insufficient time to consult the available material. The repeated omissions, prior use of artwork from the original developer article, demonstrated awareness of the revised biography and direct collaboration support an inference of selective presentation. They do not independently establish that either influencer read every relevant passage. Skooch's explicit acknowledgement of generating views from repeated coverage (09:58–10:13) separately establishes an audience incentive, rather than requiring speculation about one.

#### NickyBoi — 6 January 2022: looking back at the hostility

In public posts dated 6 January 2022, NickyBoi described “a viscous cycle of hate for well over a year” and wrote that he could not help feeling he had “helped encouraged” it. He also said, “I still hate Seraphine and everything she stands for, but ffs leave her players alone, accept that there are people who like her”. His words distinguish criticism of a champion from hostility directed at players, and provide a retrospective acknowledgement from one of the influencers involved. [Original Twitter thread — 6 January 2022](https://x.com/NickyBoiYT/status/1478992366577012736).

> It’s been nothing but a viscous cycle of hate for well over a year now, something I can’t help but feel I helped encouraged

> I have seriously considered deleting my seraphine video on multiple occasions
>
> The sheer amount of hatred festered from that video keeps me up at night sometimes
>
> And while I do love how players have become more aware of riots approach to character design I can’t help feel guilty

He also described his unexpected audience growth from a 5,000-subscriber channel to reaching 100,000 subscribers, condemned attacks on Seraphine players and reported receiving threats himself. He distinguished criticism of fictional characters from attacks on real people and stated that he would continue voicing his opinions.

#### Necrit — 14 October 2020: Rift News — early characterisation before the dedicated lore analysis

**Source:** *Rift News: Seraphine Backlash, Ranked Rewards & New Skins* (14 October 2020; ≈215,095 views).

**13:57–14:07 — chronology:** Necrit states that he will examine Seraphine's biography in his next video. Nevertheless, he already offers a substantive assessment of the Runeterra character in this news episode, four days before his 18 October video *Was Seraphine Forced Into Runeterra?*. The later video should be checked for whether it expands or repeats these points.

**14:07–14:36 — the principal inconsistency:** Necrit summarises her biography as hearing people's thoughts and suffering and wanting to help them through singing, then declares: *“No real motivation, no personal drama, nothing.”* Yet wanting to relieve suffering is a motivation. Whether the story develops that motivation compellingly is a separate, legitimate criticism; saying there is no motivation is not equivalent. This is a directly testable inconsistency within his own summary.

**Primary-source comparison:** Riot's *Champion Insights: Seraphine*, published 12 October, had already described deep empathy as her foundational character trait; overwhelming emotional hearing; the Brackern crystal helping her learn to manage her powers; and singing as her way of connecting with and uplifting others. Necrit's account does not incorporate that explanatory material when judging her characterisation.

**14:36–15:19 — selective primary-source presentation:** Necrit contrasts the relatively developed K/DA promotional narrative with the Runeterra biography and says the latter appears to exist to sell a skin. Yet Riot's *Champion Insights: Seraphine* was already available on the same official League of Legends website as that biography. The comparison excludes published explanations of the Runeterra character's defining empathy, struggle and motivation. Classification: **oversimplification, internal inconsistency and selective presentation of available primary sources**.

**Important qualifications:** At approximately 15:04 Necrit explicitly says that he knows selling K/DA merchandise was not Riot's actual goal. At 15:24–16:20 he praises Seraphine's innovative use of audio in gameplay. At 20:28–20:45 he says he is not hating on Seraphine. These passages should be retained to represent his position accurately.

**Context, not a separate lore finding:** His extended Sona comparison at 6:56–9:27 establishes the negative gameplay framing preceding the lore assessment, but gameplay similarity and skin-pricing criticism are outside the core lore cross-examination.

**Plausible deniability — contradiction of known material:** Two days had elapsed since *Champion Insights*, and one day since the original biography. Although this was a relatively short research window, Necrit's own discussion establishes that he had examined Seraphine's stated desire to relieve suffering. His assertion that she has “no real motivation” cannot be explained solely by unfamiliarity with her characterisation. The contradiction exists within material he demonstrably examined, independently of the omission of the separate developer article. His established lore specialism and the availability of both official sources strengthen the expectation of a complete primary-source examination.

**Additional cross-examination — Riot's 12 October developer explanation:** *Champion Insights: Seraphine*, already published on Riot's main League website before this 14 October news video, explicitly describes deep empathy, overwhelming emotional hearing, a Brackern crystal's formative song, and Seraphine's aim of connecting with and uplifting others. Its explanation that inability to save trapped souls is not indifference also contradicts the emerging claim that Brackern exploitation establishes her callous personality. Necrit's statement that she wants to relieve suffering but has “no real motivation” cannot be reconciled with the developer's account without changing “no motivation” into “a motivation I find insufficient”. **Plausible deniability:** Necrit was an established lore specialist discussing the biography on the same official website hosting the already published article. A claim that this explanatory material was unavailable is untenable; whether he personally encountered it is not directly shown. His expertise and source use make the omission significant, but the 14 October video alone does not establish deliberate avoidance.

#### Necrit — 18 October 2020: Was Seraphine Forced Into Runeterra?

**Source:** Necrit, *Was Seraphine Forced Into Runeterra?* (18 October 2020; ≈378,859 views).

**10:21–12:17 — narrated struggle versus claimed absence of struggle:** Necrit recounts Seraphine's overwhelming emotional hearing, distress severe enough that she hid with her hands over her ears, her parents' sacrifices, and the Brackern crystal helping her manage the noise. He then says at approximately 11:32 that there was “absolutely no struggle in her story”. He immediately acknowledges the childhood struggle but dismisses it because the problem does not recur in his preferred form. This supports a distinction between insufficiently developed ongoing conflict (an evaluative criticism) and claiming that no struggle existed (contradicted by his narration).

**14:26–15:24 — repeated denial of motivation:** Necrit says “all the story mentioned is that she likes music” and concludes “She just doesn't have a motivation.” Yet his own narration at approximately 8:23–10:18 describes Seraphine discovering suffering and resentment in Zaun, seeking to unite the cities, fearing the consequences of unchecked hatred and trying to amplify the voices of those who struggle. This repeats the 14 October characterisation problem, now against biographical material he demonstrably recounted.

**12:57–13:47 — Zaun connection:** Necrit questions why Seraphine goes to Zaun and why Piltover begins feeling less like home. His narration had already established her parents' Zaunite origins, her sense of belonging alongside estrangement, her exposure to Zaunite hardship and the division between the two cities. The explanation is present in the source material he narrates; whether the emotional transition was sufficiently developed is a different criticism.

**6:52–7:52 — Brackern characterisation:** Necrit questions why Seraphine is not shocked by hextech's origins and why the crystal's Brackern soul helps her instead of opposing humanity. He then recounts the crystal's kindness and guidance. The critical interpretation assumes the individual Brackern soul ought to be hostile despite its benevolence as written. This matters to the wider Brackern controversy; distinguish a request for additional explanation from a factual claim that the crystal's behaviour was not established.

**1:18–2:25 — development chronology:** Necrit presents K/DA-first character development and subsequent Runeterra adaptation as obvious. The transcript does not demonstrate the internal production chronology. His aesthetic and narrative assessments should not be treated as proof of development order.

**10:37–11:28 and 13:48–14:26 — legitimate requests for elaboration:** Necrit asks for more explanation of Seraphine's rise to fame, the effect of removing her dampener and the Brackern's perspective. These concern narrative depth rather than the absence of the underlying characterisation.

**15:44–16:34 — direct influencer cross-references:** Necrit says he watched T B Skyen's Seraphine video and found it reflected almost exactly his own opinion. He also identifies and endorses Skooch's comparison between Runeterra and K/DA promotional material. This directly documents reinforcing interpretations across three influencers. It complements the video's description links to Skooch's specific video and T B Skyen's channel. These cross-references document an influence network, not independent corroboration. Necrit says he watched the video after conducting his own analysis.

**Plausible deniability — repeated contradiction across dedicated lore examinations:** Six days had elapsed since *Champion Insights*, five days since the original biography and four days since Necrit's previous examination. Necrit states at approximately 10:21 that he deliberately retained the biography's wording. His narration establishes awareness of Seraphine's emotional distress, Brackern guidance and altruistic motivation, yet he subsequently denies struggle and motivation. This is the second documented instance of conclusions contradicting material he demonstrably examined. His endorsement of Skooch's comparison and reference to T B Skyen further amplify interpretations excluding Riot's developer explanation. The repeated contradiction strongly supports selective interpretation independently of whether he accessed *Champion Insights*.

**Evidence priority:** Critical — denial of motivation and struggle despite recounting them. High — Zaun explanation discounted and direct influencer cross-references. Medium — unsupported certainty about production chronology. Low — preferences regarding outfit and additional plot detail.

**Additional cross-examination — 18 October primary-source omission:** Riot's *Champion Insights* had been on its main League website for six days. Its developers explicitly describe Seraphine's profound empathy, the emotional barrage she experiences, her relationship with a Brackern crystal through song, and her desire to elevate suffering people. It also explicitly distinguishes her inability to rescue trapped Brackern souls from not caring about them. Necrit narrates the original biography's distress, crystal guidance and reconciliation aims, but then declares that she has no struggle or motivation. His own source narration and the omitted developer explanation independently contradict those absolute claims. **Plausible deniability:** Compared with 14 October, the longer interval, dedicated lore research, his deliberate use of biography wording and his endorsement of Skooch and T B Skyen substantially weaken an innocent lack-of-opportunity explanation. Repeated selective presentation is strongly supported; deliberate omission of *Champion Insights* is a credible inference but cannot be proved from the transcript without evidence of direct access to the article.

#### Necrit — 4 November 2020: They Changed Seraphine's Lore — Is It Better?

##### 1. Which biography changes did Necrit cover?

**Summary:** Necrit explicitly compares two of the six identified biography changes (33%). The other four are absent from his revision comparison, although he later recounts evidence relevant to change 5 while narrating the colour story.

| # | Biography change | Necrit’s treatment | Timestamp |
| --- | --- | --- | --- |
| 1 | The crystal’s voice becomes difficult to hear and comprehend | Explicit before-and-after comparison | 2:14–2:26 |
| 2 | The voice rarely speaks clearly, but Seraphine feels its influence | Explicit before-and-after comparison | 2:26–2:42 |
| 3 | The crystal’s warning changes from having “spoken” to having “sung an elegy” | Not addressed in his retcon comparison | Material omission — the revision relates to the original elegy voice line and Riot's explanation of Brackern songs continuing from their crystals. Its omission leaves both historical comprehension and singing as a response to suffering unexamined. |
| 4 | The crystal is given “a new home” rather than being “repurposed” | Not addressed | — |
| 5 | Seraphine hopes the crystal’s voice will be among the voices she hears | Not addressed as a biography revision; related evidence narrated later in Standing Room Only | 6:45–6:55; 12:45–13:16 |
| 6 | “Everyone matters” becomes “everyone deserves to be heard” | Not addressed | — |

##### 2. Standing Room Only — summary of omissions and underweighted evidence

**Source:** Daniel Couts, *Standing Room Only* (29 October 2020), compared with the transcript of Necrit’s 4 November video. The categories distinguish material not narrated from material narrated but discounted in the conclusion.

| # | Original story evidence | Video treatment | Time | Investigative relevance |
| --- | --- | --- | --- | --- |
| 1 | Recognises she cannot solve everything | Omitted in the narrated transition after Schala and Roland restore her determination | \~10:19–10:32 | High — explicit limit on her intended intervention |
| 2 | Imagines Schala completing her thesis and Roland perfecting his silverwork | Specific imagined scenes skipped in the move to singing | \~10:32–10:42 | Medium — concrete empathy with their aspirations |
| 3 | Realises she and the others are not alone | Explicit first-person recognition skipped | \~10:32–10:42 | Medium — directly articulates connection |
| 4 | Everyone feels the cities’ discord, although only she hears it | Distinction condensed in opening summary | \~5:02–5:13 | Medium — social impact beyond Seraphine |
| 5 | Occasional harmony makes her heart ache with possibility | Personal emotional response condensed | \~5:13–5:25 | Medium — emotional stake in reconciliation |
| 6 | Crystal remains indistinct even when its rhythm returns | Narration gives less emphasis to continuing difficulty understanding it | \~10:21–10:32 | Medium — distinguishes contact from comprehension |
| 7 | Post-concert harmony is temporary; crystal still cannot be clearly understood | Narrated | \~12:10–13:16 | Not omitted — conclusion underweights its implications |
| 8 | Stage fright, self-doubt, Schala and Roland’s struggles | Narrated | \~7:40–11:36 | Not omitted — evaluation underweights it |

##### 3. Detailed forensic audit — colour story against final characterisation

**Primary omission: explicit limits of intervention (\~10:19–10:32).** Immediately after Schala and Roland’s determination restores her own, Seraphine states: “I don’t need to solve everything. I’m not here for that. Neither are they, and that’s okay.” The narration moves from restored determination towards the crystal and performance without preserving this explicit statement. This is the clearest material omission: the original directly defines her goal as a bounded act of connection, rather than a claim that a concert will solve systemic injustice. It is particularly relevant to Necrit’s later demand for a stronger personal reason to intervene.

**Concrete empathic imagination (\~10:32–10:42).** The source has Seraphine imagine Schala finally writing the conclusion to her repeatedly rejected thesis and Roland completing his silverwork. These scenes are more than incidental background: she imagines each individual’s hoped-for success before singing. The narration condenses this transition, omitting those concrete expressions of empathy. The omitted detail supports Riot’s characterisation of empathy as an active process influencing her choices.

**Explicit recognition of shared connection (\~10:32–10:42).** Seraphine’s first-person recognition that neither she nor the others are alone gives the performance a clearly articulated internal purpose. Its omission makes the movement from other people’s determination to the concert less explicit. The original is not simply “she wants everyone to be happy”; it describes how listening to particular individuals helps her overcome isolation and reach the wider audience.

**Opening emotional stake (\~5:02–5:25).** The original distinguishes the uniquely audible song from the discord felt by everyone, describes that discord as a background pressure in daily life, and says brief moments of harmony make Seraphine’s heart ache with possibility. The video communicates the broad conflict and that she has heard harmony before, but compresses these personal and social details. They establish why the conflict affects her and why she seeks reconciliation before the performance begins.

**Crystal communication (\~10:21–10:32; 12:45–13:16).** The original specifies that the crystal’s rhythm is present yet indistinct, and ends with Seraphine uncertain whether they will understand one another while resolving to keep listening. Necrit does recount the ending. The finding is therefore not that he hides her ongoing interest in the crystal; it is that his later summary, which treats the story as adding little beyond the crystal singing during harmony, discounts a continuing character objective and the distinction between sensing a voice and comprehending its message.

**Counter-evidence preserved (\~7:40–11:36; 12:10–13:16).** Necrit narrates stage fright, self-doubt, the individual struggles of Schala and Roland, the audience’s temporary union, the continued post-concert interaction and Seraphine’s attempt to listen to the crystal. These must not be recorded as omitted. The forensic issue is his failure to carry their implications into the closing assessment.

**Final-claim cross-examination (13:17–14:25).** After narrating this evidence, Necrit questions Seraphine’s “real motivations” and what she gains from uniting the cities, while conceding that she acts because she wants to make the world happier. The evidence supports a distinction between *motivation absent* and *motivation present but judged narratively insufficient*. The original explicitly supplies altruistic motivation, emotional stakes, self-doubt, limits on her intervention and a continuing desire to understand the crystal. His preference for a different kind of personal stake is an evaluative criterion, not proof that Riot omitted motivation.

**Finding:** Riot’s 29 October story predates the 4 November video. Necrit covers most major events but omits or condenses first-person statements, particularly Seraphine’s explicit acknowledgement that she cannot solve everything. His conclusion discounts motives and struggles he narrates, allowing an incomplete account of her motivation to circulate without readers revisiting the original story.

**Cross-video pattern:** As documented elsewhere in this section, Necrit’s 14 October, 18 October and 4 November discussions repeatedly acknowledge altruistic motives or emotional struggle while characterising her as inadequately motivated. The 4 November colour story supplies additional, contemporaneously available evidence against the categorical version of that claim.

**13:17–14:25 — motivation acknowledged, then discounted:** After narrating the colour story *Standing Room Only*, Necrit says it does not explain Seraphine's “real motivations” or what she would gain from uniting Piltover and Zaun. He then expressly acknowledges: “She just does it because she wants to make the world happier.” He accepts this is not a bad character trait but argues it does not work in her case. This identifies the actual evaluative disagreement: an altruistic motivation exists, but Necrit rejects it as insufficient for his preferred fantasy narrative. That differs materially from his repeated 14 and 18 October assertions that she has no motivation.

**7:40–11:36 — ongoing psychological struggle narrated:** Necrit recounts Seraphine's stage fright, self-doubt, fear of failure and emotional connection with Shala and Roland. Their determination helps her regain confidence, and she channels panic, fear and self-doubt into song. This supplies further evidence of emotional difficulties continuing beyond the childhood sensory distress he acknowledged but dismissed in his 18 October examination.

**5:01–13:16 — characterisation in the colour story:** His narration covers Seraphine's awareness of historical injustice between Piltover and Zaun; frustration when the audience divides along city lines; doubt about whether one person can make a difference; emotional renewal through Shala and Roland; and her attempt to transform shared struggles into music. At approximately 12:48–13:16, she still cannot clearly understand the crystal's voice but remains determined to listen. Necrit subsequently summarises the story as adding little beyond the crystal singing when crowds unite, overlooking those additional character elements in his evaluation.

**1:42–3:25 — Riot's Brackern revisions:** Necrit explains that the revised biography makes the crystal's voice difficult to comprehend and its influence less explicit, removing the earlier implication that Seraphine understood the Brackern's fate and ignored it. He characterises the original impression as an accidental communication problem and acknowledges that the changes address the principal Brackern concern. This is important evidence separating Riot's presentation failure from claims of deliberately malicious characterisation.

**Other criticisms distinguished:** Necrit continues to criticise the limited depiction of Seraphine's rise to fame and her stage clothing. These are requests for more narrative explanation or aesthetic judgements, not proof that her established motivation is absent.

**Across all three videos:** On 14 October, Necrit acknowledges Seraphine wants to help suffering people but calls her unmotivated. On 18 October, he recounts her childhood distress, the Brackern's guidance and her desire to unite Piltover and Zaun, then again claims she lacks struggle and motivation. On 4 November, after recounting *Standing Room Only*, he explicitly recognises that she wants to make the world happier but rejects that motivation because it is not rooted in a personal problem or gain. His own accounts establish that he knew the relevant characterisation. The repeated claim that motivation is absent is therefore not sustained by the material he presents: he is judging the established altruistic motivation against his own preferred narrative criteria.

In his 18 October video, Necrit also says he watched T B Skyen's video and found it reflected his own opinion, then endorses Skooch's comparison of K/DA and Runeterra. The same interpretation was being reinforced across multiple influential channels.

**Plausible deniability — cumulative assessment across three publications:** By 4 November, 23 days had elapsed since *Champion Insights*, 22 days since the original biography, 21 days since Necrit's first examination, 17 days since his dedicated lore video and six days since Riot's revisions and clarification. Across three publications, Necrit examines official narrative material while discounting evidence of struggle and motivation. His retrospective includes revised biography material and *Standing Room Only*, providing further evidence of self-doubt, altruism and personal limitations.

Despite explicitly examining the revised biography, Necrit compares only two of six substantive changes (33%). His comparison excludes the revised elegy (#3), explicit hope of hearing the crystal (#5), and the change from everyone mattering to everyone deserving to be heard (#6). Particularly significant is that he subsequently narrates Seraphine's continuing determination to listen to the crystal in *Standing Room Only* (12:48–13:16). He demonstrably encountered related evidence of continuing concern yet did not adequately incorporate its significance into his assessment. The omissions concern knowledge, response to suffering and motivation. Combined with three examinations over 21 days, this strengthens the finding of repeated selective interpretation and presentation. The cumulative pattern materially weakens explanations based on initial release confusion, insufficient time or unfamiliarity with the character.

##### Supplementary forensic cross-examination — 4 November retcon video (complete transcript reviewed)

**Scope and source control:** Necrit says at 0:55–1:04 that he obtained a direct comparison of the two biographies, yet his explicit comparison addresses only two of six identified changes. At 4:51–5:02 he transitions away from the revision to the colour story. The table below distinguishes omission from the biography comparison from material he does acknowledge later in the same video.

| Revision | Necrit treatment | Video time |
| --- | --- | --- |
| 1 — voice hard to hear/comprehend | Quotes original and revised | 2:14–2:26 |
| 2 — voice rarely speaks clearly | Quotes original and revised | 2:26–2:42 |
| 3 — “spoken” becomes “sung an elegy” | Not compared | — |
| 4 — “repurposed” becomes “new home” | Not compared | — |
| 5 — hope of hearing the crystal again | Not compared as biography revision; related desire to listen acknowledged in colour-story narration | 6:45–6:55; 12:45–13:16 |
| 6 — “everyone matters” becomes “everyone deserves to be heard” | Not compared | — |

**Core contradiction (13:27–14:25):** Necrit claims that the story does not explain Seraphine’s real motivation or why she cares about the division of Piltover and Zaun, while simultaneously conceding that she wants to make the world happier. Earlier, he himself narrates her direct exposure to the cities’ emotional pain (5:01–6:20), her distress at the segregated crowd (6:55–7:48), her stage fright and self-doubt (7:48–8:15), and her emotional connection to Shala and Roland (8:23–10:21). These are specific story events supplying her reason to care. His preferred criterion — that the character should obtain a personal benefit or suffer a different kind of personal stake — is a subjective demand, not evidence that the published motivation is absent.

**Crystal evidence against indifference:** At 6:45–6:55 he recounts Seraphine pleading for the crystal to speak; at 10:21–10:33 he describes the crystal joining her music; at 12:45–13:16 he recounts her continuing effort to listen even without knowing whether they can understand one another. He then dismisses the colour story as adding little besides the crystal singing when crowds unite (13:17–13:27). This summary omits the significance of the very relationship and persistent concern he has just described. It is inaccurate to claim he never presented the crystal-listening evidence; the issue is his failure to integrate it into his conclusion.

**Developer evidence omitted:** Riot’s 12 October *Champion Insights* expressly defined deep empathy as the design premise, established the Brackern-song connection, and stated that Seraphine’s inability to save trapped souls did not mean indifference. The video does not bring this decisive contemporaneous explanation into its character assessment. Necrit’s assertion that the original story made her look as if she knew and simply did not care (1:42–2:02) treats a hostile inference as the character’s apparent attitude, without distinguishing that inference from Riot’s documented intended characterisation.

**Separate criticisms:** A limited depiction of her path to fame (3:25–3:49) and dissatisfaction with her costume (3:50–4:46; 14:25 onward) are independently arguable questions of narrative execution and aesthetics. Neither proves a lack of empathy or motivation. His claim that she cares only about her voice, not appearance (4:31–4:46), is not established by the material he cites.

**Finding:** This is a demonstrable pattern of selective comparison (two of six changes), omission of an available primary developer explanation, and a final conclusion that fails to account for material he personally narrated. The strongest evidential finding is not concealed footage but **acknowledged evidence discounted at the point of judgement**. Repetition across his 14 October, 18 October and 4 November videos strengthens the case that the incomplete characterisation persisted despite opportunities to review it.

#### T B Skyen — 12 October 2020: Let's think out loud about Seraphine and what she's selling for 28 minutes

**7:38–10:18 — condemning a business model he openly practises:** T B Skyen admits: “I leverage a parasocial relationship with my audience to get people to subscribe to my Patreon.” He explains that presenting an appealing public persona, requesting donations and promoting merchandise are necessary parts of his business. He is candid about his discomfort with these practices, but the admission is significant: the commercial use of audience attachment is not unique to Riot, and it is a mechanism he personally employs. His proposed distinction is that he, as a real person, must live with the moral consequences of his choices.

**11:29–13:12 — reducing the character to a sales mechanism:** He says the vast majority of Seraphine's followers know she is fictional, yet describes her as a marketing project created to sell K/DA skins and “a business model with a pretty face and a costume attached to it.” That is a characterisation of the K/DA promotional persona and Riot's commercial campaign, not evidence that the Runeterra character lacks genuine altruistic motivations in her fictional narrative. Earlier, at 0:57–1:25, he himself distinguishes the two versions of Seraphine.

**18:16–18:45 — accountability asserted away:** Having explained that he personally must answer for his monetisation decisions, he argues that fictional Seraphine cannot experience moral responsibility and then declares: “Riot doesn't have to reckon with the morality of that.” The second claim does not follow from the first. Riot is an actual organisation whose staff and management can be held accountable for the campaign; the fictional character's inability to feel guilt does not remove their responsibility.

**18:41–19:27 — predicting exploitation while acknowledging audience awareness:** He declares that Riot is “going to abuse that attachment”, while repeatedly acknowledging that followers understand Seraphine is fictional. His concern that fictional personas can encourage genuine emotional attachment is intelligible; the assertion that Riot will abuse that attachment is a prediction, not an established example of abuse. He contrasts this campaign with the transparency of an in-game cosmetics shop.

**19:52–22:49 — escalating from suggestion to accusation:** He interprets K/DA interactions involving Akali and Seraphine, and a cover of a song associated with sapphic imagery, as “queerbaiting”, then attributes the lack of explicit confirmation to Riot's “corporate cowardice”. This is his interpretation of promotional storytelling and Riot's commercial choices; the cited examples do not independently establish Riot's private intentions. It also concerns the K/DA persona rather than the Runeterra character's established personality.

**24:21–24:55 — a hypothetical substituted for actual conduct:** He likens the situation to a children's television character asking children to obtain their parents' payment-card details under a fabricated medical pretext. The analogy illustrates the exploitation he fears, but the transcript provides no comparable request by Seraphine.

**25:55–26:40 — the decisive concessions:** He acknowledges that similar fictional marketing has been used elsewhere, that Riot is not necessarily the worst offender and that “They have been very careful with Seraphine.” He specifically concedes that she never directly asks followers to buy merchandise to support her personal journey and says the campaign is probably fine. These concessions sharply limit his earlier implication that the campaign already constitutes abuse: he identifies a possible mechanism for exploitation, but also acknowledges that the clearest direct exploitative behaviour is absent.

**Plausible deniability:** This first video is principally an unscripted criticism of K/DA marketing, not a detailed examination of the original Runeterra biography. It was published on 12 October, the date of Riot's *Champion Insights: Seraphine*; the timing alone does not establish that he had read or deliberately excluded that article. He expressly promises later, more detailed examinations. The stronger findings here concern his acknowledged participation in parasocial monetisation, his escalating allegations of corporate manipulation and his own concessions that Riot had been careful. The video establishes a strongly negative framing before his subsequent lore examinations, but does not by itself prove deliberate omission of Runeterra primary sources or bandwagon coordination. Those questions turn on the evidence in the following videos.

#### T B Skyen — 13 October 2020: seraphine's stage is canonically powered by the souls of the innocent

**6:30–10:15 — source access and recognised intent:** T B Skyen reads Seraphine's original biography, including her overwhelming emotional hearing, her parents' efforts to help her, the kind Brackern consciousness within the crystal, and her wish to reconcile Piltover and Zaun. At approximately 16:04–16:40 he expressly recognises that she is supposed to be sympathetic, naive, optimistic and empathetic. These admissions establish that the intended altruistic characterisation was available to him from the biography itself.

**11:45–12:55 — inference presented as indifference:** He argues that Seraphine recognises the Brackern exploitation and “doesn't seem to give a shit”, even though the biography establishes a kind voice sharing ancient history, not that she fully understands the extraction and suffering Skarner knows about. Crucially, Riot's [*Champion Insights: Seraphine*](https://www.leagueoflegends.com/en-us/news/dev/champion-insights-seraphine/), published the previous day on the official League website, already explained the Brackern souls and the importance of song to the Brackern and its continuation from their crystals, and expressly distinguished Seraphine's inability to save them from indifference. That is a direct contemporaneous contradiction of his central characterisation.

**15:24–17:25 — escalation into sociopathy:** He suggests the writers failed to notice that Seraphine could read as a sociopath exploiting a soul for personal gain, while simultaneously acknowledging the character's intended empathy. He entertains audience theories that she is secretly a villain. The source supports criticism of an underexplained narrative contradiction; it does not establish deliberate cruelty as her personality.

**18:08–18:29 — voice-line reframing:** He recasts “I miss your kind too, Skarner. Would you like to hear their song?” as an offer made by someone exploiting one of Skarner's people to become a pop star. The voice line was legitimately controversial, but the biography describes the stage as a means of amplifying others' voices and bridging divided cities. *Champion Insights* independently describes the empathy, emotional hearing, Brackern song and altruistic purpose behind that design. His paraphrase drops this context.

**Plausible deniability — demonstrated awareness of contrary characterisation:** One day had elapsed since *Champion Insights*. Although the short interval and unscripted late-night format limit the inference concerning omission of that particular article, T B Skyen demonstrably examined official biography material and recognised Seraphine's intended empathy and altruistic motivation. His exploitation accusation cannot be attributed solely to ignorance of that characterisation. The central evidential issue is selective interpretation of material he already knew, alongside omission of Riot's explicit distinction between inability to rescue and indifference.

#### T B Skyen — 14 October 2020: ok but now let's try to be CONSTRUCTIVE about seraphine

**00:42–01:05 — the accusation repeated:** In his third consecutive Seraphine video, T B Skyen again describes her using a Brackern soul to power her stage for a personal music career, apparently without moral scruples. Riot's [*Champion Insights: Seraphine*](https://www.leagueoflegends.com/en-us/news/dev/champion-insights-seraphine/), published on 12 October on the official League of Legends website, explicitly establishes deep empathy, her formative connection with the crystal's song, and her desire to connect with and uplift others. Crucially, it distinguishes her inability to save trapped souls from indifference to their suffering. His repeated allegation does not account for that developer explanation.

**01:05–03:16 — rejection of the crystal's benevolence:** He acknowledges the objection that the Brackern consciousness is written as willing to help Seraphine, but calls that very writing choice the problem. He contrasts Skarner's traumatic history with the kind crystal in Seraphine's story, criticising the implications of making a soul apparently comfortable with hextech use. That is a substantive criticism of Riot's narrative execution. It is not evidence that Seraphine herself knowingly disregards the soul's suffering. *Champion Insights* expressly explains that song is important to the Brackern, that their song continues from their crystals, and that listening to a particular crystal helps Seraphine understand her own powers.

**03:54–04:54 — decisive admission of intended characterisation:** Discussing a popular fan theory that Seraphine is secretly a sociopathic villain, he says Riot's published media and commentary from people who worked on her show she was intended from the outset to be nice and wholesome. He therefore rejects the idea that Riot secretly planned a villain reveal. This is direct evidence that he was familiar with Riot's intended positive characterisation, regardless of whether he read every passage of *Champion Insights*.

**07:28–08:13 — empathy accurately recognised:** While describing his own alternative storyline, he characterises Seraphine as young, idealistic and naive, believing art can change the world, with a special ability to listen empathetically and connect with people. That description closely matches the foundations Riot had already set out in *Champion Insights*. It makes his continued opening portrayal of apparently unscrupulous personal exploitation especially inconsistent with the characterisation he himself acknowledges.

**03:46–16:40 — constructive proposals versus claims about existing canon:** His three alternatives are (1) a villain-oriented arc involving manipulation and eventual recognition of Brackern suffering, (2) changing Skarner's crystal lore so the stage does not contain a stolen soul, and (3) retaining the Brackern exploitation premise while making Seraphine a protest singer challenging hextech and uniting the cities in political action. The third proposal retains the importance of Brackern song, her magical hearing and her wish to unite Piltover and Zaun. These are identifiable creative alternatives and criticisms of missing conflict or stakes, not evidence that the original character was intended to be selfish or sociopathic.

**16:50–18:10 — countervailing conduct:** He explicitly discourages harassment of Riot's writers and artists, asks viewers to show empathy to creative staff, and distinguishes their work from decisions imposed by management. Those remarks contrast with the separate source-selection problem.

**Plausible deniability — cumulative assessment across 12, 13 and 14 October:** By the third video, T B Skyen had examined Skarner's lore and Seraphine's original biography, explicitly recognised her intended empathy and altruism, and referred to Riot's published media and developer commentary. The official *Champion Insights* article had been publicly available for two days on the same League website. His own statements defeat an explanation that he was unaware Riot intended a wholesome, empathetic character. The continued presentation of Seraphine as exploiting a Brackern soul for personal ambition while omitting Riot's express distinction between inability to rescue souls and indifference is **likely intentional selective framing**, based on his repeated recognition of the contrary characterisation and continued use of the accusation. Whether he personally opened *Champion Insights* is not directly established, so intentional avoidance of that specific webpage remains an inference rather than a documented access event. His explicit anti-harassment remarks are counterevidence to any claim that he urged viewers to harass Riot creatives.

**Finding:** Repeated selective characterisation; demonstrated awareness of Riot's intended empathy; likely intentional continuation of the selfish-exploitation framing; substantive but separate criticism of Riot's narrative execution.

#### TBSkyen — 27 January 2021: What’s the Deal with Seraphine?

**Video:** TBSkyen, 27 January 2021 — *What's the deal with Seraphine? || character review (League of Legends)*. YouTube ID: `47FBBuJ7GO0`.

**Principal transcript segments:** \~12:56–16:02 (Brackern knowledge, moral inference and acknowledged writer intent); \~17:20–20:09 (biography revision); \~23:28–29:10 (political stakes and alternative storyline).

**Claims tested:** degree of knowledge of Brackern history; alleged inaction despite empathy; whether the October changes merely create plausible deniability; and whether the character’s existing goals are absent or merely politically insufficient.

**Primary sources:** Riot *Champion Insights: Seraphine* (12 October 2020); original/revised biography and *Standing Room Only* (29 October 2020); original champion voice-over. See six-change comparison and detailed audit below.

**Assessment:** Accurate recognition of intended empathy; materially incomplete revision comparison (three of six changes); interpretation of Brackern knowledge and inaction exceeds what the compared text alone establishes. See evidence matrix for differentiated findings.



##### 1. Summary evidence matrix — January video against contemporaneous Riot material

**Primary sources:** Riot *Champion Insights: Seraphine* (12 October 2020); original and revised biographies (29 October 2020); *Standing Room Only* (29 October 2020); original champion voice-over.

| # | 29 October biography change | TBSkyen’s treatment | Classification | Why it matters |
| --- | --- | --- | --- | --- |
| 1 | Voice kind → hard to hear and harder to comprehend | Explicitly quoted (\~17:31–17:39) | Covered | The revision narrows comprehension; it does not establish that the original specified complete knowledge of Brackern history. |
| 2 | Voice helped her understand → rarely spoke clearly; she felt its influence | Explicitly quoted (\~17:39–17:57) | Covered | The original indicates guidance about musical resonance, not necessarily intelligible disclosure of genocide. |
| 3 | Crystal had spoken of unchecked hatred → sung an elegy | Not identified in the direct comparison (\~17:20–18:57) | Material omission | Most directly relevant edit to the claimed knowledge of past suffering; its absence leaves a misleadingly narrow account of what Riot revised. |
| 4 | Repurposed crystal → gave crystal a new home | Explicitly quoted and mocked (\~17:57–18:57) | Covered, negatively framed | Change personifies and positively frames the crystal relationship; whether it resolves exploitation is a separate interpretive issue. |
| 5 | Added hope that crystal’s voice would be among the crowd | Not identified in the direct comparison | Material omission | Shows Seraphine’s continuing desire to hear the crystal, contradicting any suggestion the revision simply removes her relationship with it. |
| 6 | Everyone matters → everyone deserves to be heard | Not identified in the direct comparison | Material omission | When read alongside revision #5, which explicitly establishes Seraphine's hope of hearing the crystal's voice among the crowd, revision #6 demonstrates that her guiding principle of everyone deserving to be heard extends to the Brackern themselves. Combined with revision #3, the crystal's elegy, these changes reinforce her empathetic relationship with the Brackern and directly challenge accusations of indifference towards their suffering. |

##### 2. Cross-source claims matrix

| Video timestamp | Claim / framing | Contemporaneous primary-source check | Finding |
| --- | --- | --- | --- |
| \~1:59–4:31 | Seraphine has exceptional hearing/empathy; hears Brackern voice vaguely; wants to bring divided cities together. | Biography and *Champion Insights* support the empathy-centred intended characterisation and hearing a song beyond ordinary perception. | Substantially accurate acknowledgment of intent; cannot characterise the entire video as ignoring empathy. |
| \~12:56–14:49 | Original crystal communicates the nature of the Brackern and their history; she learns of murdered people, then “does nothing”. | Original biography’s statement about hatred and crystal guidance is evidence of some communicated history, but does not clearly establish the full degree of her comprehension. *Champion Insights* explicitly frames the trapped Brackern voices and her inability to save them as distinct from indifference. | Interpretive leap from ambiguous comprehension to complete awareness, then to a categorical accusation of inaction. |
| \~14:49–16:02 | Riot intended her as a good person; problematic implications are unintended. | Riot’s original developer article establishes deep empathy, her struggle with others’ emotions and concern for the crystal’s song. | Important concession: Skyen recognises intended characterisation. The criticism concerns execution and inferred implications, not an assertion that Riot intended cruelty. |
| \~17:20–20:09 | Retcon supplies “plausible deniability” and sidesteps the issue. | Three of six textual changes are discussed. The revised elegy, added hope of hearing the crystal and shift towards everyone deserving to be heard are not included in his comparison. | Materially incomplete change audit; the global interpretation is broader than the changes he presents. |
| \~23:28–25:20 | Questions what uniting the cities actually means; allows that she may be naïve. | *Standing Room Only* depicts her seeing individual suffering, fearing failure, recognising she cannot solve everything and attempting a temporary shared experience. | Legitimate question about political efficacy, but not evidence of absent empathy or absence of an articulated, bounded objective. |
| \~27:46–29:10 | Proposes an alternative storyline involving Brackern exploitation and protest. | Riot’s contemporaneous material instead presents listening, imperfect connection and personal limits. | Creative alternative, not proof the intended existing characterisation was missing. |

##### 3. Detailed forensic audit — primary-source comparison and argument testing

**A. What the influencer demonstrably understood.** At \~1:59–4:31 Skyen summarises Seraphine’s overwhelming empathy, hearing souls and Brackern voice, and aspiration to bridge Piltover and Zaun. At \~14:49–15:20 he explicitly acknowledges Riot wrote her to be a good person. These are counterweights against any allegation that he denied Riot’s intended empathetic characterisation outright. His central claim is instead that unintended implications arise from the combination of her crystal, its history and her continued use of it.

**B. Knowledge versus comprehension (\~12:56–14:49).** The video moves from the original biography’s references to the crystal speaking and warning about hatred to the stronger assertion that Seraphine has learned the nature and fate of the Brackern and nevertheless does nothing. The original text does not straightforwardly specify how much she understands, and the 29 October changes further clarify indistinct communication. *Champion Insights*, already published on 12 October, describes the Brackern’s song and her inability to save the trapped souls: that material is directly relevant to the moral inference. The question is not whether an exploitation reading is permissible, but whether it is justified to present full knowledge and culpable indifference as established by the text.

**C. Six changes, not merely the three selected (\~17:20–18:57).** Skyen discusses edits #1, #2 and #4, including a sarcastic response to the “new home” wording. He does not compare #3 (spoken warning of hatred becomes an elegy), #5 (new explicit hope of hearing the crystal in the crowd) or #6 (everyone matters becomes everyone deserves to be heard). #3 directly affects the evidential basis for how much history the crystal communicated; #5 establishes her explicit desire to hear the crystal's voice among the crowd; #6 establishes that everyone deserves to be heard, especially those who are struggling. Read together with #3, these revisions connect Brackern suffering, her desire to hear their voice and her guiding principle of inclusion. Their omission materially weakens the completeness of his retcon analysis. His description of approximately eight sentences is not itself proof of deception; the six listed here are the six identifiable substantive changes in the investigation’s established comparison.

**D. Riot’s 12 October developer account.** The *Champion Insights* primary source predates both the revision and the January video. It explains the creative intent behind empathy, overwhelming perception, hearing Brackern songs and being unable to free the trapped voices. Skyen’s own accurate description of her empathy does not substitute for confronting the article’s distinction between helplessness and indifference when arguing she “does nothing”. Record this as a material source-comparison gap, not as a claim he never understood empathy.

**E. Colour story: emotional stakes and limits.** *Standing Room Only* (29 October) supplies stage fright, concrete concern for Schala and Roland, her recognition that she does not need to solve everything, the fleeting nature of harmony and her continued effort to hear the crystal. The January review’s political-efficacy critique can coexist with those facts, but the categorical framing of an empty or toothless intervention must be tested against them. The official story illustration of Seraphine smiling while holding the crystal is additional positive visual characterisation; whether Skyen displayed it in the video cannot be determined from the transcript alone.

**F. Original voice-over and source hierarchy.** The original voice-over, biography and developer article must be read together. A short in-game line cannot establish the full extent of Seraphine’s knowledge or abilities.

**G. Interpretation versus fact.** His proposed protest-singer/Brackern-ally storyline (\~27:46–29:10) is a coherent creative alternative. His argument that Riot should have written that story is evaluative; it does not establish that Riot’s existing empathic characterisation, limits and motivations were absent. Likewise, criticism of a short-lived concert’s inability to repair structural inequality is distinct from evidence that Seraphine believes she can solve those inequalities through one performance.

**H. Framework applied — provenance, completeness, framing, inference, impact.** **Provenance:** the 12 October developer account and 29 October biography/story predate the January review. **Completeness:** three of six biography edits are discussed, while relevant developer/story evidence is not systematically confronted. **Framing:** the emotionally charged analogy of technology powered by a victim’s soul (\~13:47–14:14) intensifies the accusation and presupposes knowledge; the sarcastic “new home” reading gives little weight to the accompanying continuing relationship. **Inference:** problematic unintended implications are a defensible literary criticism, but complete knowledge, deliberate exploitation and indifference are stronger propositions requiring more evidence. **Impact:** a confident influencer summary may propagate a compressed moral reading, but downstream repetition requires separately dated examples rather than assumption. **Intent:** the transcript supports selective presentation and overconfident inference, not proof of a deliberate plan to mislead.

**Cross-examination questions.** (1) Why does the retcon comparison omit the revision of the hatred passage, when that passage bears directly on claimed Brackern knowledge? (2) How is the added wish to hear the crystal reconciled with a reading of mere instrumental exploitation? (3) Why is Riot’s 12 October account of hearing Brackern songs but being unable to save them not tested against “she does nothing”? (4) Is the criticism that her motivation is absent, or that the existing altruistic motivation is politically insufficient? (5) What contemporaneous primary text establishes full understanding of the Brackern’s fate, rather than partial guidance or an indistinct song?

##### 4. Focused omission register — the “new home” joke and all six changes

**Transcript-verified segment:** 17:20–20:09. “Omitted” means not explicitly identified in his change-by-change discussion; it does not mean the influencer never addresses the underlying theme elsewhere.

| Change | Original → revised biography | Timestamp | Finding |
| --- | --- | --- | --- |
| #1 | Voice kind → hard to hear and harder to comprehend | 17:31–17:39 | Discussed — reduced comprehension identified |
| #2 | Voice helped → rarely spoke clearly; felt its influence | 17:39–17:57 | Discussed — indirect guidance identified |
| #3 | Spoken warning about hatred → sung an elegy | 17:20–18:57 | Material omission — directly relevant to both Seraphine's knowledge of Brackern suffering and her response to it. The revision connects the original elegy voice line with Riot's explanation of Brackern songs continuing from their crystals, challenging the accusations of knowing exploitation and inaction. |
| #4 | Repurposed crystal → gave crystal a new home | 17:57–18:57 | Discussed and mocked — extended house/interior/bath/pool joke |
| #5 | Added hope to hear crystal’s voice among the crowd | 17:20–18:57 | Omitted — continuing desire to hear crystal |
| #6 | Everyone matters → everyone deserves to be heard | 17:20–18:57 | Omitted — reinforces listening as objective |

##### 5. Supplementary detailed audit — transcript-verbatim framing, concessions and source hierarchy

**Extended satire of change #4 (17:57–18:57).** Skyen reads both versions of the sentence and then responds “How nice!” (\~18:23), describing the crystal as having a lovely interior, an en-suite bathroom and a pool (\~18:33–18:47), before sarcastically asserting that it is happy. This is an identifiable instance of *satirical framing of a specific revision*, not merely a passing joke. The joke makes the personifying phrase “new home” the focal point while the same comparison omits the revised elegy, continuing hope of hearing the crystal and “deserves to be heard” ending. The source does not demonstrate that “new home” itself establishes the crystal’s consent or welfare; equally, the joke does not resolve what the other revisions communicate about Seraphine’s intended relationship with it.

**Source-completeness test.** The three unquoted changes are #3, #5 and #6, not #4. In particular, #3 replaces an apparently intelligible warning about hatred with an elegy, directly relevant to whether the character understands the crystal’s history. Its significance extends beyond historical comprehension. Seraphine's original elegy voice line establishes a response to Brackern suffering within the limits of her abilities. Combined with Riot's original explanation of the cultural importance of song to the Brackern and its continuation from their crystals, this directly challenges the characterisation that she simply does nothing. Skyen's omission therefore leaves two central components of his accusation unexamined: the extent of Seraphine's knowledge and the significance of her response. #5 shows her actively hoping to hear the crystal's voice among the crowd, while #6 establishes that everyone deserves to be heard. Together, they explicitly include the Brackern within her guiding principle, reinforcing the significance of the elegy in #3. The influencer’s conclusion that the retcon merely grants “plausible deniability” (\~17:24–17:37) therefore rests on a partial textual comparison.

**Strongest categorical inference (13:03–14:49).** Skyen describes the crystal as telling her about Brackern nature and history, then says she learns of a murdered people and “does nothing”. This conflates the established existence of a communicating consciousness with an asserted degree of intelligible historical knowledge. His own earlier narration says she hears it only vaguely (\~3:44–3:56). The original biography’s ambiguity, 12 October *Champion Insights* discussion of trapped souls and inability to save them, and 29 October revised wording must be considered together. The categorical accusation is stronger than those sources independently prove.

**Crucial concession about politics (24:34–25:08).** Skyen expressly says Seraphine *does not* need to arrive with a “12-point action plan” or a political ideology, and that youthful naivety and doing her best through art are acceptable. Do not misrepresent his position as demanding an immediate comprehensive political solution. His actual criticism is that the story should develop the artistic empathy into a more consequential protest-singer role. This is a preference for a further narrative trajectory, not evidence that her existing bounded purpose is missing.

**Colour-story cross-check.** In *Standing Room Only*, the statement “I don’t need to solve everything. I’m not here for that. Neither are they, and that’s okay” is directly relevant to the above concession. The story also depicts Schala and Roland’s distinct difficulties, Seraphine’s panic and emotional participation, an observable but temporary easing of social division, and an unresolved wish to listen to the crystal. A complete assessment should distinguish these depicted outcomes from a demand for structural political transformation.

**Developer-intent cross-check.** *Champion Insights: Seraphine* (12 October 2020) predates both the revised biography and this review. Its empathy-centred design account, Brackern song and inability-to-save framing are directly relevant to the accusation of conscious indifference. Skyen explicitly says her writers intended her to be good (\~15:15–15:20); the evidential gap concerns whether the review gives that documented intention and her stated limitations adequate weight when alleging what she knew and failed to do.

**Framework determination.** **Provenance:** all three Riot primary texts predate this review. **Completeness:** three of six biography changes directly discussed; the remaining three omitted from the revision comparison. **Satirical framing:** extended “new home” analogy emphasises perceived absurdity of the revision. **Consistency:** influencer acknowledges sincere empathy and accepts that she need not solve everything, but characterises her as knowingly doing nothing and her intervention as toothless. **Inference:** exploitation is a possible critical interpretation; complete historical comprehension and deliberate indifference are not established by the cited passages alone. **Propagation:** the review is a potential secondary-source amplifier, but specific downstream adoption must be separately evidenced.

**Plausible deniability — cumulative assessment across 107 days:** By 27 January 2021, 107 days had elapsed since *Champion Insights*, 106 days since the original biography and 90 days since the six biography revisions and developer clarification. TBSkyen had already published three videos examining commercialisation and characterisation in October. His January retrospective represents a fourth opportunity to examine the available primary-source record.

He explicitly examines the biography revisions yet presents only three of six changes while concluding that Riot's revisions merely provide “plausible deniability”. The omitted revisions directly address the central accusation: #3 establishes communication through an elegy, #5 establishes her desire to hear the crystal's voice, and #6 establishes that everyone deserves to be heard. Together they address knowledge, response to suffering and inclusive motivation. Rather than examining these interconnected changes, he devotes approximately one minute (17:57–18:57) to satirising revision #4's “new home” wording.

His acknowledgement of Riot's intended empathy and acceptance that Seraphine need not possess a comprehensive political solution further undermine the categorical accusation that she knowingly does nothing. Singing their elegy gives expression to Brackern suffering through the medium connecting her to them, with the potential to raise awareness. The interconnected revisions also provide a foundation for the protest-singer direction he proposes.

The extended research window, repeated examinations, demonstrated familiarity with the revised biography and selective presentation of three out of six changes substantially weaken an innocent-oversight explanation. The cumulative evidence supports likely intentional selective framing. Ironically, his accusation that Riot's revisions merely provide “plausible deniability” rests on an incomplete presentation of those revisions.

**Cross-examination questions for each influencer:** (1) What did they actually claim or imply about Seraphine's knowledge and motivations? (2) Which biography/voice-line passages did they present? (3) Did they acknowledge the Brackern's song, Seraphine's connection to it, her inability to save the souls and Riot's stated empathy-centred intent? (4) Did they distinguish disagreement with Riot's execution from assertions about what Riot intended? (5) Did their framing treat the biography alone as the entire available Runeterra development record? Use verified short quotations only where wording matters, otherwise timestamped summaries.

#### TBSkyen — 4 November 2026: Patreon outreach and response

The investigator contacted TBSkyen through Patreon, sharing a music recommendation and a [Reddit discussion](https://www.reddit.com/r/loreofleague/s/HewpPhztg7) introduced as a “Prequel to our (hopeful) discussion”.

TBSkyen responded:

> You seem like a parasocial weirdo, so I'm going to refund your pledge and block you.

The Patreon conversation subsequently displayed “This account has blocked you.”

The response is relevant to his earlier public acknowledgement that he leverages parasocial relationships to attract Patreon subscribers. In this exchange, he used the term “parasocial” as part of a personal insult towards a subscriber seeking discussion, rather than addressing the linked discussion. The exchange ended without substantive engagement with the material shared.

**Source:** Investigator's Patreon correspondence, screenshot dated 4 November (2026 outreach). The screenshot records the stated intention to refund the pledge and confirms the block; it does not establish whether the refund was processed.

### Cross-examination synthesis — recurring framing, primary-source omissions and counterexamples

The individual audits reveal a recurring tension: criticism of the Brackern storyline was often framed around Seraphine's supposed knowledge and failure to act, while Riot's contemporaneous *Champion Insights* explained both her intended empathy and her inability to save the trapped souls. The evidence differs by influencer: some demonstrably consulted the relevant developer article, others demonstrably read the biography or acknowledged Riot's intended characterisation, and access to the specific article cannot be assumed in every case. The detailed audits above preserve these distinctions and the dates on which sources became available.

The distinction is between criticising a narrative decision and treating an interpretation of the character's motives as established canon. The ProGuides audit provides a useful counterexample: it challenges the Sona-copy bandwagon, recognises Seraphine's positive personality and Riot's design rationale, yet still omits the inability-to-save explanation when discussing the Brackern.

Skooch's 14 November video adds direct collaboration to the previously documented reciprocal recommendations: NickyBoi presents the lore narrative, Skooch repeats its exploitation framing and endorses NickyBoi's analysis. Their contributions cannot be counted as independent corroboration. The video also repeats the accusations after Riot's revisions and clarification.

**Comparative post-revision evidence**

| Influencer | Days since 29 October revisions | Revision coverage | Key finding |
| --- | ---: | --- | --- |
| Necrit — 4 November | 6 | 2/6 | Narrates related evidence of continuing concern but underweights its significance |
| Skooch — 6 November | 8 | No documented comparison | Amplifies pre-revision criticism |
| NickyBoi and Skooch — 14 November | 16 | Reduced comprehension acknowledged | Dismisses elegy and claims the Brackern aspect was removed entirely |
| TBSkyen — 27 January | 90 | 3/6 | Accuses Riot of introducing plausible deniability while omitting #3, #5 and #6 |

The recurring omission of revisions #3, #5 and #6 is significant because they collectively address the knowledge, action and motivation underlying the accusations. Elapsed time strengthens the assessment when combined with demonstrated source use, repeated contradictions and opportunities to reassess earlier claims.

The subsequent source-integrity question is how such interpretations were represented in secondary reporting and reference material over the following years. Similar wording or framing recurs across influencer commentary and Wikipedia. Riot's original developer article remained absent from Wikipedia's references for six years.

#### ProGuides — 24 October 2020: a balanced counterexample

ProGuides' *Why SO MANY League Players HATE Seraphine (Design, Kit, Lore)* (352,390 views) provides an important contrast. Rather than simply repeating the Sona-copy allegation, the narrator compares their abilities and playstyles in detail and explicitly urges viewers to try Seraphine before joining the bandwagon (\~01:20–06:56). He accepts that a pop star can belong in Runeterra (\~09:05–09:17), acknowledges Riot's rationale for her stage (\~10:04–10:14), and says that her positive personality is not the problem (\~11:26–11:43).

**One material omission remains.** ProGuides expressly uses Riot's 12 October *Champion Insights: Seraphine* for the K/DA distinction (\~08:01–08:17) and alternative stage concepts (\~10:24–10:36), yet does not mention the same article's explanation that she cannot save the trapped Brackern souls when suggesting that her empathy should have led to a rescue journey (\~12:41–13:14). This makes the lore criticism incomplete, but it is a criticism of a missed story opportunity, not an accusation that Seraphine is malicious or sociopathic.

That is the distinction this investigation draws: criticism of Riot's execution can be constructive and informed even where a specific source omission warrants correction. ProGuides challenged the community bandwagon rather than simply amplifying it.

### ProGuides — 24 October 2020: primary-source comparison and detailed audit

**Video:** *Why SO MANY League Players HATE Seraphine (Design, Kit, Lore) - League of Legends*, ProGuides Challenger League of Legends Guides, 24 October 2020; 352,390 views. **Source:** Timestamped video transcript. **Chronology:** Riot's 12 October *Champion Insights: Seraphine* and original biography were available; 29 October revisions and *Standing Room Only* were not.

#### Evidence matrix — coverage, omissions and claim testing

| Timestamp | Transcript evidence | Finding |
| --- | --- | --- |
| 06:49–06:56 | Warns against joining the “copy and paste of Sona” bandwagon without trying Seraphine | Counterexample to unqualified hate-bandwagon framing: offers substantive gameplay differentiation |
| 08:01–08:17 | Explicitly cites Riot's Champion Insights for K/DA versus base-Runeterra distinction | Direct awareness of the primary developer article established |
| 10:04–10:36 | Uses Champion Insights to discuss platform rationale and alternative concept art | Direct substantive use of the same article established |
| 11:39–11:43 | “No, the issue is not her character” | Separates positive personality from Brackern narrative criticism |
| 12:29–12:43 | Describes Brackern extraction, then says Seraphine learns of their existence through her device | Awareness of a Brackern voice is established; full comprehension of historical exploitation is not demonstrated by the cited Seraphine biography |
| 12:41–12:50 | Expects empathetic Seraphine to undertake a journey to free the Brackern | Omits contemporaneous Champion Insights explanation that she cannot save the trapped souls |
| 12:50–13:14 | Contrasts guidance and repurposed stage with a missed Brackern story opportunity | Normative preference for a different narrative trajectory; not proof of malicious intent or indifference |

#### Detailed audit against the established framework

**1. Provenance and opportunity.** The narrator references the 12 October Riot developer article by name at \~08:01 and returns to its platform-design illustrations at \~10:24. Unlike an inference from general research experience, this directly establishes use of the relevant primary source. The same article also describes Seraphine's intense empathy, Brackern consciousness, and her inability to save trapped souls. The lore segment (\~11:24–13:14) does not incorporate that countervailing explanation. This establishes selective use of the developer article.

**2. Source coverage versus omission.** ProGuides accurately acknowledges a distinct K/DA persona, Riot's stage-design rationale and several rejected concepts. In the Brackern segment, it explains the suffering associated with harvested namestones, then expects Seraphine to launch a rescue effort. Its treatment leaves out the explicit developer explanation of her inability to save them and the intended empathy-centred narrative. These omissions are especially relevant because the influencer has already demonstrated access to the very same article.

**3. Knowledge/comprehension distinction.** At \~12:29–12:43 the video says Seraphine “learns of their existence”, then immediately treats that as the basis for an expected rescue mission. Learning a Brackern voice exists is not equivalent to acquiring full knowledge of the harvesting process or a means to reverse it. The criticism instead implies that learning of their existence should have triggered a different story.

**4. Consistency and concessions.** The video rejects an unqualified Sona-copy allegation and says the problem is not her bubbly, positive personality. It recognises that the platform had an official design rationale, while criticising the selected execution. The criticism concerns the absence of a Brackern liberation arc without incorporating the published inability-to-save explanation.

**5. Distinguish opinion from unsupported fact.** Complaints that her stage looks like a dinner plate, that her design lacks Piltover/Zaun visual signifiers, or that a Brackern rescue arc would be more compelling are aesthetic or creative judgements. The assertion that K/DA Seraphine came first (\~07:38–08:01) is presented as apparent from marketing and character framing; the cited evidence does not itself establish Riot's internal production chronology. Claims that Riot deliberately exploited mental-health insecurity or consciously steered tweets away after criticism (\~08:22–09:00) would require independent dated corroboration if included in the investigation; they are separate from the Brackern primary-source finding.

**6. Propagation and scope.** The video reports and evaluates existing community complaints rather than simply endorsing every complaint. The lore segment nonetheless reproduces the familiar Brackern knowledge/inaction framing while omitting Riot's directly relevant developer clarification.

**Determination — balanced counterexample with a material omission.** ProGuides directly consulted *Champion Insights*, challenged the Sona-copy bandwagon through detailed mechanics, acknowledged Riot's design rationale and did not portray Seraphine as malicious. Its lore segment nevertheless omitted the same developer article's explanation that she could not save the trapped Brackern souls, weakening its rescue-arc criticism. This is a documented source-completeness gap in an otherwise evidence-informed review.

**Plausible deniability — direct source access and balanced counterevidence:** Twelve days had elapsed since *Champion Insights*. ProGuides demonstrably consulted the article and incorporated its design explanations. The omission of the same article's inability-to-save explanation cannot be attributed to the article being unavailable or undiscovered. Nevertheless, the review challenges community accusations, acknowledges Seraphine's positive personality and recognises Riot's design rationale. Direct source access establishes a material omission; the wider evidence does not support an equivalent finding of likely intentional mischaracterisation.

### Closing counterexample — ProGuides: balanced criticism despite an identifiable omission

**Summary assessment:** ProGuides' 24 October 2020 review demonstrates that a influencer could discuss the backlash, evaluate complaints and explicitly challenge parts of the community bandwagon. The detailed primary-source audit identifies one material omission in its Brackern criticism.

| Issue | Timestamp / source | Finding |
| --- | --- | --- |
| Sona-copy allegation | 01:20–06:56 | Detailed comparison of kits, play patterns and skill expression; concludes Seraphine plays differently |
| Community bandwagon | 06:49–06:56 | Explicitly encourages viewers to try Seraphine before joining the “copy and paste of Sona” bandwagon |
| Source awareness | 08:01–08:17; 10:24–10:36 | References Riot's Champion Insights for the K/DA distinction and alternative stage designs |
| Runeterra character concept | 09:05–09:17; 11:26–11:43 | Accepts that a pop star can belong in Runeterra; says her positive personality is not the problem |
| Stage design | 10:04–10:36 | Acknowledges Riot's reasoning, then criticises the chosen execution — a design preference |
| Brackern rescue criticism | 12:41–13:14; Champion Insights (12 October) | **Material omission:** suggests an empathetic Seraphine should attempt a rescue, without mentioning the article's explanation that she cannot save the trapped souls |
| Characterisation | 11:26–13:14 | Does not accuse Seraphine of sociopathy, malice or deliberate indifference; frames the issue as a missed story opportunity |

#### Concluding audit and interpretive distinction

**What the video establishes:** ProGuides had consulted the original Riot developer article; it presented a reasoned case against the Sona-copy allegation, acknowledged a coherent rationale for the platform and accepted Seraphine's positive characterisation. Its criticism of the stage's aesthetics and desire for a Brackern-focused story are legitimate creative assessments. The narrator also challenges viewers not to adopt popular criticism before trying the champion.

**What remains incomplete:** The same *Champion Insights* article contains Riot's explanation that Seraphine cannot save the trapped Brackern souls. This relevant limitation is not incorporated when the narrator expects her to embark on a mission to free them. The video says she learns of their existence, not explicitly that she comprehends every detail of their history.

**Why this counterexample matters:** An evidence-based investigation must distinguish incomplete source use from a false allegation about a character's motives, and distinguish strong disagreement with Riot's creative choices from uncritical reinforcement of community hostility. ProGuides illustrates that distinction: constructive, relatively balanced criticism, including an explicit challenge to the hate bandwagon, alongside one identifiable lore omission. Its inclusion as a positive counterexample strengthens the investigation's consistent evidential standard.

### 4. Controversy in the pandemic-era attention economy

The controversy emerged during the COVID-19 period, when online entertainment and influencer visibility were important features of gaming culture. The [attention economy](https://en.wikipedia.org/wiki/Attention_economy) describes competition for audience attention. Controversy can generate strong engagement. Skooch explicitly acknowledges in his 14 November 2020 video (09:58–10:13) that he had “milked her for every single view I can”, describing the subject as “the freest content”. This directly documents the audience incentive behind repeated coverage, alongside his criticism of Riot's commercialisation.

Parasocial relationships can influence perceived trust. [Social proof](https://en.wikipedia.org/wiki/Social_proof), the bandwagon effect, [confirmation bias](https://en.wikipedia.org/wiki/Confirmation_bias), the [illusory truth effect](https://en.wikipedia.org/wiki/Illusory_truth_effect) and [information cascades](https://en.wikipedia.org/wiki/Information_cascade) describe ways perceived consensus can form or intensify.

**A community can become more confident in an interpretation without becoming better informed about its original evidence.**

### 5. When popular opinion masquerades as proof

[*Argumentum ad populum*](https://en.wikipedia.org/wiki/Argumentum_ad_populum): Popularity does not establish truth. Repeated interpretations do not constitute independent corroboration.

### 6. Circular reporting and evidence laundering: when ten sources are really one

[Circular reporting](https://en.wikipedia.org/wiki/Circular_reporting) occurs when sources reference one another, creating an appearance of independent corroboration. Evidence laundering occurs when repeated claims acquire apparent credibility through successive publications, even when they trace back to the same unsupported origin. This can give weak claims an appearance of authority. The key test is source independence: three citations do not necessarily represent three independent observations. In [information fusion](https://en.wikipedia.org/wiki/Information_fusion), double-counting dependent evidence is sometimes called data incest.

The Skooch–NickyBoi relationship provides a concrete example: reciprocal recommendations on 24 October and 6 November were followed by NickyBoi delivering the lore segment in Skooch's 14 November video (01:23–04:02), with Skooch repeating its framing and endorsing NickyBoi's video (08:28–08:48; 10:13–11:23). Counting these as independent confirmations would double-count a shared narrative.

**Ten articles are not necessarily ten independent sources of canon evidence.**

### 7. SEO, search retrieval and AI

[Search engine optimisation](https://en.wikipedia.org/wiki/Search_engine_optimization) increases discoverability, not factual accuracy. If pages repeating an unsupported interpretation become prominent, retrieval systems may surface those pages when users ask about the topic.

A chatbot retrieving several articles that repeat the same unsupported interpretation can present dependent sources as independent corroboration.

**An AI system can reproduce the internet's confidence without verifying its evidential value.**

#### 7.1. November 2026 — Testing Google's search results and AI-generated answers

As part of the investigation's search and information-provenance audit ([RRHL-13](https://rundasrework.atlassian.net/browse/RRHL-13)), four Google Search queries were examined on 26 November 2026 using results captured in Singapore.

The purpose was to establish which sources Google's search interface presents when users investigate Seraphine's original lore, historical controversies and relationship with Skarner.

| Search query | Observed findings |
| --- | --- |
| `seraphine lore` | Riot's official biography ranked prominently, alongside community wikis and Reddit. The AI Overview incorporated both primary and secondary material. |
| `seraphine skarner` | A three-year-old Reddit discussion appeared as the first organic result. Google's AI Overview displayed T B Skyen among its source attributions, while his October 2020 video appeared prominently. |
| `seraphine original lore` | Despite explicitly requesting historical lore, the AI Overview presented T B Skyen and Necrit as cited sources when explaining the original Brackern controversy. |
| `why is seraphine controversial` | The AI Overview combined several distinct controversies and drew prominently on Reddit. Its additional supporting-source cards included T B Skyen's 13 October 2020 commentary. |

#### 7.2. The original source versus the material surfaced

A recurring observation across these searches was the prominence of secondary interpretations when explaining the original controversy.

Riot's [Champion Insights: Seraphine](https://www.leagueoflegends.com/en-us/news/dev/champion-insights-seraphine/), published **12 October 2020**, established empathy as central to her intended characterisation and explained her relationship with the Brackern souls.

Yet that specific original developer article was not visibly identified among the results captured for these four queries.

By contrast, commentary from T B Skyen and Necrit appeared within Google's AI Overview source presentations for relevant historical questions.

T B Skyen's video, *seraphine's stage is canonically powered by the souls of the innocent*, was published **13 October 2020**, one day after the original developer explanation.

Six years later, secondary interpretations remain more prominent than Riot's original evidence in some search results.

#### 7.3. Search visibility and the appearance of authority

Google's AI-generated summaries sometimes attribute disputed interpretations to fan criticism or community consensus.

That distinction matters: documenting that a criticism became popular does not independently establish that the underlying interpretation accurately describes the character's intended personality or motivations.

The search results illustrate how users investigating the historical controversy may encounter influencer commentary, Reddit discussions and wiki summaries together within an apparently authoritative AI-generated explanation.

These observations document search visibility and AI Overview source attribution, not model training data.

#### 7.4. Keyword research and discoverability

Four Google Trends comparisons covering January 2020 to November 2026 were also conducted.

Of the tested phrases, `seraphine lore` demonstrated the most sustained measurable search interest, followed by the particularly relevant `seraphine skarner` query.

Some alternatives, including `seraphine history` and `seraphine crystal`, also attracted searches unrelated to the original controversy.

These results inform the planned independent publication of the investigation and its evidence register, with separate pages addressing the original lore, Brackern controversy, October 2020 revisions and subsequent information propagation.

### 8. Six years later, the original evidence still exists

The source trail includes Riot's dated original intent article, biography publication, public developer clarifications, historical videos and potentially recoverable wiki revisions. 

**The internet doesn't need a conspiracy to manufacture false consensus. An unsupported claim, enough repetition and nobody checking the original source are sufficient.**

Seraphine’s release is the perfect case study of how bad misinformation in a gaming community can spread.

**Final question:** If an AI gives you five sources supporting a claim, but all five ultimately repeat the same unsupported statement, have you received five pieces of evidence — or the same mistake five times?


### 9. November 2026 — even Wikipedia itself had no reference to the literal first official lore for 6+ years

And here's where this investigation takes an unexpected turn. As I was drafting this post I didn’t even discover this until I queried Bing’s AI search (which is even worse) and it used Wikipedia as a source dogmatically. 

[Wikipedia's article on Seraphine](<https://en.wikipedia.org/wiki/Seraphine_(League_of_Legends)>).

**Six years after her release, the article still did *not* cite Riot's original *Champion Insights: Seraphine*, published on 12 October 2020.**

Instead, its account of the Brackern controversy relied on secondary reporting and described fans as believing Seraphine lacked the desire to help the trapped souls — without presenting the contemporaneous developer explanation that directly addressed her motivations.

The same article described criticism of her supposedly *“uncharacteristically cruel lore relating to Brackerns”*, ***without*** explaining Riot's original characterisation alongside that criticism.

Yet Riot's own developers had explicitly established deep empathy as Seraphine's defining trait, explained the importance of song to the Brackern, described her connection with the crystal and distinguished her inability to rescue trapped souls from indifference towards their suffering.

**That evidence had been publicly available since 12 October 2020 — *before* Seraphine was even released as a playable champion.**

And the subsequent clarifications from Riot co-founder Marc Merrill on 28 October and gameplay designer Jeevun “Jag” Sidhu on 29 October provided further context about the mistakes in the released material and the distinction between player knowledge and Seraphine's own understanding.

These were not newly discovered explanations invented six years later. They were contemporaneous primary sources.

So I have now submitted corrections to Wikipedia, adding the missing Riot sources, clarifying her original characterisation and distinguishing documented lore from the negative interpretations surrounding it.

The existing criticism was not removed simply because it was negative. **The purpose was to give readers the original evidence alongside that criticism, so they could evaluate it themselves.**

And this brings us directly back to the SEO and AI problem.

Wikipedia is a widely consulted reference source: readers may encounter it directly, through search results or through AI systems retrieving it. Its apparent authority does not guarantee completeness of source selection. An article can accurately cite secondary reporting yet still omit the contemporaneous primary evidence necessary to assess that reporting. Here, Riot's original developer explanation was publicly available before Seraphine's release.

That distinction matters because the article's citations may appear to corroborate a settled account of the controversy while primarily documenting what commentators and fans said. Reporting that people criticised Seraphine is not the same as establishing that their interpretation of her knowledge or motives was canonically correct. The omitted Riot explanation is the missing comparison point.

An AI citing Wikipedia does **not** independently verify every claim in that article. Nor does adding several secondary articles necessarily provide independent corroboration if they ultimately rely on the same incomplete interpretation.

**The documented finding is already significant: six years after the controversy began, the original developer explanation was still absent from Wikipedia's account of the character - despite that same source being from the exact same official League of Legends site as the Champion biography. **

The evidence was there all along.

The question is why so many discussions about Seraphine's original characterisation proceeded without it.

**And if even a widely consulted reference article can omit the original evidence for six years, what happens when search engines and AI systems are asked to explain that controversy to someone encountering it for the first time?**

Like, dislike or even hate a fictional IP - it doesn’t matter. 

What *does* matter is ensuring communities have informed opinions so e.g. casual players outside intense fandoms don’t face negative experiences.

These influencers were fully aware that innocent players could be trapped in the hostile ecosystem they helped create, exposed to potential harassment. Yet they continued with awareness of that potential suffering to fuel their own YouTube careers.

After all… knowingly exploiting sentient beings for personal gain is precisely what they accused Seraphine of. 

**Perhaps the influencers were the real "Seraphine" all along.**

‘See you next mission’ 

\- Rundas 2.0

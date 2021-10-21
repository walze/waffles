## [0.21.0](https://github.com/datacamp/waffles/compare/v0.20.0...v0.21.0) (2021-10-21)


### Bug Fixes

* **content-container:** adjust the order of media queries to be safe ([5a3fe7d](https://github.com/datacamp/waffles/commit/5a3fe7d753c2e74885a5347e2e1ca41b4e476731))
* **tooltip:** calculate tooltip position correctly ([4c50118](https://github.com/datacamp/waffles/commit/4c5011886c899c6044ea92110d638b2d2b03d669))


### Core Changes

* **button:** auto generate hover colors from tokens ([bbeed31](https://github.com/datacamp/waffles/commit/bbeed31d7cd1fe99cab18d2571505fc0790cfa9a))
* **button:** expose button internal only for docs purposes ([3a17756](https://github.com/datacamp/waffles/commit/3a177565a1dcae025eb78a4fd95cac1c2b762a30))
* **button:** tighten typings ([ac4901d](https://github.com/datacamp/waffles/commit/ac4901d18191c29d484cb6f15bafac88c12e731a))
* **button:** tighten up icon display logic ([e645165](https://github.com/datacamp/waffles/commit/e6451656a59a5e60582f7b4b71ca19e75260fc2d))
* **chapeau:** add inverted style variant ([dac6d77](https://github.com/datacamp/waffles/commit/dac6d77e1124685bcf13270e206b8c274381d05a))
* **code-block:** update typings ([c69fd5a](https://github.com/datacamp/waffles/commit/c69fd5af7e1afd1e636fcb40ed5a53f8febd80ac))
* **display:** add inverted variant ([0368b13](https://github.com/datacamp/waffles/commit/0368b13d558cc8e9a918f5e0a11a4cef7fee4766))
* **heading:** add inverted variant ([7cea102](https://github.com/datacamp/waffles/commit/7cea102dd0ef3267c41b490140b568049f2f2d65))
* **helpers:** add hexColorLuminance utility ([33de78a](https://github.com/datacamp/waffles/commit/33de78aa58cdad2096c146409e49a02685b7b40c))
* **helpers:** add isHexColor utility ([d414b43](https://github.com/datacamp/waffles/commit/d414b43cb517a6bddb4505125ae17059501659bb))
* **helpers:** add readableHexColor utility ([b231c8e](https://github.com/datacamp/waffles/commit/b231c8ec6442a9fd2c4221f144ce6e35bf7d9d39))
* **helpers:** implement hexColorShade utility ([d77812b](https://github.com/datacamp/waffles/commit/d77812b19db128484de2882ff4ab510dbf78dc99))
* **helpers:** improve error handling in hexToRgba ([f908541](https://github.com/datacamp/waffles/commit/f908541ec7a08a4df1470caa458087d2fdfa3194))
* **icon:** add kaggle brand icon ([bc36e6e](https://github.com/datacamp/waffles/commit/bc36e6e07a0b5beb6b6ba1c0f9c811ae7478ef24))
* **icon:** properly capitalize DataCamp brand icon ([786bdf9](https://github.com/datacamp/waffles/commit/786bdf9025ad604e38b524419da008fc966fce58))
* **icon:** remove side padding ([ed18c6d](https://github.com/datacamp/waffles/commit/ed18c6d4bb88dff0d83f95a97f683543c7951666))
* **icon:** update external-link ([491c4c2](https://github.com/datacamp/waffles/commit/491c4c2c2c5443332992f4d36ede019040a377b8))
* **link:** adjust position of icons ([0d981fe](https://github.com/datacamp/waffles/commit/0d981feba00e75258fa099a6b0f3094a1c376f66))
* **link:** inherit font size and adjust icon placement ([d6c73a1](https://github.com/datacamp/waffles/commit/d6c73a1dc397bd876b1e844f1bf21430ae7f4e94))
* **paragraph:** add extra sizes ([b18946f](https://github.com/datacamp/waffles/commit/b18946fb9e95efadd238c28b5f7ef24d871bec9b))


### Documentation Changes

* add ability to skip some props by providing [skip docs] flag ([a88e2bd](https://github.com/datacamp/waffles/commit/a88e2bd3a40d043baf4ba3bb109cc772f5d7356e))
* add ambient type declaration for babel ts preset ([fdb9b7d](https://github.com/datacamp/waffles/commit/fdb9b7d7a67aa930231d84089da7d554377a4c3b))
* add basic content container documentation page ([60de5ec](https://github.com/datacamp/waffles/commit/60de5ec4cc1d52afc48d530bce4df2a423f32037))
* add basic text documentation page ([521c4d7](https://github.com/datacamp/waffles/commit/521c4d7724af988c7ce47053e5b8f4a372531766))
* add button documentation page ([7bcfff8](https://github.com/datacamp/waffles/commit/7bcfff84379f982611af7145bb649f458b679847))
* add button examples ([bc2ac2a](https://github.com/datacamp/waffles/commit/bc2ac2aeda5bad2be1c3226fd5e2708be8dcd700))
* add button states example ([6e90969](https://github.com/datacamp/waffles/commit/6e90969941e72219f135c583c41cd0d68bc73e93))
* add chapeau examples ([5e865d9](https://github.com/datacamp/waffles/commit/5e865d9827a7660734a236d08eed999c9d025efe))
* add chapeau inline props documentation ([ceb7f93](https://github.com/datacamp/waffles/commit/ceb7f9358bfc25b305b5c7106e714c3c1afd5f7d))
* add code block examples ([0ffe707](https://github.com/datacamp/waffles/commit/0ffe7073b90314993088666a051f39259f45bb44))
* add code examples ([637f4d4](https://github.com/datacamp/waffles/commit/637f4d4bf1b9c7df835f4059ed4b8e9457f4a48f))
* add code inline props documentation ([e0a45f8](https://github.com/datacamp/waffles/commit/e0a45f89eeb7f3f7d9484a253efe95beaa6a9459))
* add component which shows all icons ([4ce3278](https://github.com/datacamp/waffles/commit/4ce3278d1a46ef576d9b8b581f72524b3dccf047))
* add custom table components to markdown elements ([6fbcc55](https://github.com/datacamp/waffles/commit/6fbcc554890d95921387b04facfe995463f07bdc))
* add design tokens page ([23dc1c9](https://github.com/datacamp/waffles/commit/23dc1c98b3e4bdda1078b98431e7a9ca0e4ed63e))
* add design-tokens examples ([ba82ea4](https://github.com/datacamp/waffles/commit/ba82ea4e09f0ecdff0b233f0665935b3ed8df536))
* add display examples ([abeca43](https://github.com/datacamp/waffles/commit/abeca4396d2af82e436632e581882c268d84d931))
* add display inline props documentation ([20d226a](https://github.com/datacamp/waffles/commit/20d226a233b2113d7ed5c4e46f93cc42c2fbabfe))
* add extensive helpers documentation page ([eafbb08](https://github.com/datacamp/waffles/commit/eafbb08014bee03f7e3ab77b472b21a63c8ed112))
* add flag to enable dark preview in example ([8a5a620](https://github.com/datacamp/waffles/commit/8a5a620ac1a78782701048e340992c23fdae3f99))
* add helpers examples ([539505a](https://github.com/datacamp/waffles/commit/539505a3608257afc53d008241291f47dd5c1b28))
* add icon examples ([1fa439e](https://github.com/datacamp/waffles/commit/1fa439ea3928274e5cb63753546b080a0d1b0dd6))
* add icon page and update button documentation ([7899802](https://github.com/datacamp/waffles/commit/78998021ea5b5cdb55f0e6defb35b55b88c9e082))
* add icon props documentation ([f605269](https://github.com/datacamp/waffles/commit/f605269ba06069093b63b0f6eb00ce3bf61ce424))
* add inline content container props documentation ([0bbed01](https://github.com/datacamp/waffles/commit/0bbed010f5dff20be051ba9bd1b908641694c9d2))
* add inline portal props documentation ([f0dbb25](https://github.com/datacamp/waffles/commit/f0dbb251553ee468451d179dfe638ad3fa16a8ac))
* add inline props documentation for button ([a428663](https://github.com/datacamp/waffles/commit/a428663d36294d40b1119ffe9dbd3e0e30e02101))
* add inline text props documentation ([c4f2072](https://github.com/datacamp/waffles/commit/c4f20721f38dc78e42e400ecf309e02d212f1dae))
* add inline tooltip props documentation ([afb5f56](https://github.com/datacamp/waffles/commit/afb5f5620e92531c45a435bde005294e980a6797))
* add isPolymorphic flag to props-table ([406030f](https://github.com/datacamp/waffles/commit/406030fefa7f26f819c16c085087622b577b1c31))
* add link examples ([68a6dca](https://github.com/datacamp/waffles/commit/68a6dcabf1c717a9653273bca4b48535c81f7b25))
* add link inline props documentation ([3e91944](https://github.com/datacamp/waffles/commit/3e919443c658b585b1d5b7b3f5ba019d102b1ca6))
* add more advanced tooltip examples ([0727605](https://github.com/datacamp/waffles/commit/0727605634bd402ec737b7ff1ee67ae4003ff6fc))
* add next up section to roadmap page ([d001e75](https://github.com/datacamp/waffles/commit/d001e75fc86d52426e2da3b38b7decc99321a4bd))
* add paragraph examples, props, and playground ([eb53176](https://github.com/datacamp/waffles/commit/eb53176c432dfcfba62aa312a9323b440332b17e))
* add placeholder decision log page ([8547389](https://github.com/datacamp/waffles/commit/85473892bdbb7a352f625ededc9f817cac8f3000))
* add remark GFM plugin ([d69116b](https://github.com/datacamp/waffles/commit/d69116bb4bf6186668a1bc85045165c8613f6b22))
* add roadmap adnotation ([0ff0292](https://github.com/datacamp/waffles/commit/0ff0292032e6e3486a548c4ebae619ef30ec547d))
* add roadmap table of component status ([f26be84](https://github.com/datacamp/waffles/commit/f26be844eafc956f807cad988c800f5b5dd5b048))
* add section about props autogenarated docs in dev guide ([7b4e5a0](https://github.com/datacamp/waffles/commit/7b4e5a06db19feac10d35282c95fd768f1bf7db6))
* add setup section for engineers ([b81ddc4](https://github.com/datacamp/waffles/commit/b81ddc4abf3d9000d51d4f0e4558b173ebc52e0b))
* add text examples ([11dde9a](https://github.com/datacamp/waffles/commit/11dde9a2ce0a4da629629256d2b4e71435cd2418))
* add toggle to show or hide icons preview labels ([d90df3f](https://github.com/datacamp/waffles/commit/d90df3fe384b4ec5b02a43d10592ce9926c87899))
* additional spacing guidelines for tokens ([c4338e2](https://github.com/datacamp/waffles/commit/c4338e208d18bf118744a1e18c2abfc69260d156))
* adjust example and markdown minor styles ([ade1079](https://github.com/datacamp/waffles/commit/ade107974668482f7edaf8c18317a54cf0614b06))
* adjust example border color ([f12fc93](https://github.com/datacamp/waffles/commit/f12fc933c4713660a1987e205fc2f3a6be98319b))
* adjust markdown heading margin ([5bdb700](https://github.com/datacamp/waffles/commit/5bdb700f099e52face300d26353762469fe75066))
* allow to manually specify imports ([5e7e45f](https://github.com/datacamp/waffles/commit/5e7e45f13c54af555349561c5d78a28b4212a31c))
* basic tooltip documentation page ([0d35693](https://github.com/datacamp/waffles/commit/0d3569340d1ca7c0cdf14b6625241c9c8adaf1ee))
* basic tooltip examples ([43b3d2e](https://github.com/datacamp/waffles/commit/43b3d2e633125c0c8e5567aa26dc9f91721704fc))
* change introduction category name to overview ([12c5c21](https://github.com/datacamp/waffles/commit/12c5c219cce2def0c01a9500f9366131b504261f))
* create basic code block documentation page ([46a2231](https://github.com/datacamp/waffles/commit/46a2231400d5aa16dc63b8c4bbd267d445d0e566))
* create basic code documentation page ([e716fda](https://github.com/datacamp/waffles/commit/e716fda13b0c71d059a0b6d6c9d3ba3259b90d41))
* create basic documentation page for chapeau ([fec4e97](https://github.com/datacamp/waffles/commit/fec4e973e63eb4f7d096ab96999be28267b53e6e))
* create basic heading doc page with examples ([1c2c92b](https://github.com/datacamp/waffles/commit/1c2c92b2048b73f72763371e3e9c45551fb5cf49))
* create basic portal documentation page ([e532703](https://github.com/datacamp/waffles/commit/e5327035b08945bda14ba6e52b98d03f0e6f28f9))
* create custom previews for each design tokens group ([357f7a9](https://github.com/datacamp/waffles/commit/357f7a9b21abc0a000a8fb210e99b18ba48e62bd))
* create display documentation page with examples ([c5ad94c](https://github.com/datacamp/waffles/commit/c5ad94c08f1a29bc8de7b2b70d760af08380981d))
* exclude table elements from props table markdown ([e1b5552](https://github.com/datacamp/waffles/commit/e1b55523d1e85da557c4c5beebef9129c95b8a21))
* extract albel section from button general best practices ([7a7120a](https://github.com/datacamp/waffles/commit/7a7120a89af28600bf1dbfd1955543d2ecae7882))
* fix a link in icon props table ([ebe8da5](https://github.com/datacamp/waffles/commit/ebe8da54db3012459070f05193822006adbaf820))
* fix layout showing scrollbars when wrapping ([3ee9c31](https://github.com/datacamp/waffles/commit/3ee9c31d23092599ad83c909238eec1322341f49))
* fix props sorting ([c991471](https://github.com/datacamp/waffles/commit/c99147163b0eb6845c5adb6c26f558919ab6c4ff))
* fix typography examples ([f295356](https://github.com/datacamp/waffles/commit/f2953566df2355b0689916f7a7787476f67065b7))
* fixed markdown code ([250d36e](https://github.com/datacamp/waffles/commit/250d36eb8c9d9637c9468f42cdc12020376b73d2))
* grammar fixes ([5d9f3d6](https://github.com/datacamp/waffles/commit/5d9f3d67ab7c82d4858003246ac14d3a466c9b40))
* hide icon names at first in icons grid ([68f83e0](https://github.com/datacamp/waffles/commit/68f83e00e9f4140aaa1b97ea4a10809c0608a47d))
* implement component-status ([a87ea6b](https://github.com/datacamp/waffles/commit/a87ea6b9c4652c72f5d4e6254833ea3e3ab0a843))
* implement component-status-table ([6bfcbd8](https://github.com/datacamp/waffles/commit/6bfcbd8ca1f5a192cfdd1383b768ed9641d73082))
* implement table to display design tokens ([c20253e](https://github.com/datacamp/waffles/commit/c20253e279da8b3c9760705198f70db3213763a3))
* implement utility to group icons ([4870757](https://github.com/datacamp/waffles/commit/48707574272e50a14977831b0b440e6bd7999861))
* provide heading props inline docs ([e0d39fb](https://github.com/datacamp/waffles/commit/e0d39fbc3512133e9f0088d5c5b3b68628727289))
* reduce main content width and adjust some examples ([169d75f](https://github.com/datacamp/waffles/commit/169d75f18d21b0320c99a22e5113fa19f4f6fc3c))
* remove unsupported markdown element from mapping ([e446414](https://github.com/datacamp/waffles/commit/e446414638f19e30ad3b131489a55ddf6d9b3c7a))
* setup code block rendering in markdown ([0c3bc4b](https://github.com/datacamp/waffles/commit/0c3bc4b3af65bef17cf10733f7ad31dfcff06b19))
* small tweaks ([21ba42f](https://github.com/datacamp/waffles/commit/21ba42fd2808471364904c2008bbe9591abd5e51))
* update button examples ([a87a7d8](https://github.com/datacamp/waffles/commit/a87a7d8a318c02609d97dfe397ec18871247f13d))
* update button playground config ([b795cca](https://github.com/datacamp/waffles/commit/b795ccaebc37f91ffb44f5241baf5680c1f9b24b))
* update icon example ([5596323](https://github.com/datacamp/waffles/commit/5596323615cf823b1ccc3f53ae6cf5917991a03b))
* update strong html element font weight ([9f9c2c4](https://github.com/datacamp/waffles/commit/9f9c2c464a158a0dc6fc75ec4044d6510f4a81ba))

## [0.20.0](https://github.com/datacamp/waffles/compare/v0.19.0...v0.20.0) (2021-10-05)


### Bug Fixes

* docs logo in safari ([54ba036](https://github.com/datacamp/waffles/commit/54ba036178518ad86d33df7fa13c9dbc890e03eb))


### Core Changes

* **button:** change hover color for primary variant ([8b513fd](https://github.com/datacamp/waffles/commit/8b513fda17631cba39423eda311090affb19df0d))
* **button:** specify lighter colors for inverted hover ([b196721](https://github.com/datacamp/waffles/commit/b19672196bc86453528432e690214141f8f149c2))
* **button:** update destructive variant hover color ([2af73ee](https://github.com/datacamp/waffles/commit/2af73eeba8438cc00514d0bcc011f0d53242edfb))
* **content-container:** set top and bottom padding ([494f41f](https://github.com/datacamp/waffles/commit/494f41fc9d6ad9108df0e909f5d3866876a1284b))
* **link:** add subtle highlight hover color ([27faaaf](https://github.com/datacamp/waffles/commit/27faaaf975d7d8625b3e336aab9422d46aec4f0b))
* **link:** change hover background when focused ([ad484e0](https://github.com/datacamp/waffles/commit/ad484e009636832f31e63c44d26bb9c2f440a97c))
* **paragraph:** add bottom padding back ([6b37c72](https://github.com/datacamp/waffles/commit/6b37c72a79f229c11ac46e685dc7541d23137018))
* rename utils to helpers and move media-query there ([7360df1](https://github.com/datacamp/waffles/commit/7360df17266776c5f86dae632b89445070c8cec4))
* **tokens:** update opacity low token value ([96609b1](https://github.com/datacamp/waffles/commit/96609b19cf16aa402d9663c9875bb3e0cfc0c854))


### Documentation Changes

* add basic nav component ([2096717](https://github.com/datacamp/waffles/commit/2096717cdcb0778e25d4a9299660a7485aca5b88))
* add edit page link to the bottom of relevant pages ([e2e63a9](https://github.com/datacamp/waffles/commit/e2e63a927de4015d67cd90ef397748485ae2c202))
* add libs to autogenerate props docs ([4b3e006](https://github.com/datacamp/waffles/commit/4b3e00680f9fdde4a4d39ebc4c0249c2b18b9cee))
* add public pages placeholders ([e91f2ac](https://github.com/datacamp/waffles/commit/e91f2acc5945f13b134e41cfc4a755683e11b519))
* add reset code button to playground ([0affc58](https://github.com/datacamp/waffles/commit/0affc585a9c25b5d73fdb746ee8263f909cf7e7a))
* add sidebar component ([f1c34d0](https://github.com/datacamp/waffles/commit/f1c34d04e0bd9e0c5e5c824e767018ded6addbc2))
* add subcategory style to nav link ([b9f671e](https://github.com/datacamp/waffles/commit/b9f671e3657118ab7cbf123f1553daf1c3849f5b))
* add text selection color ([27222e5](https://github.com/datacamp/waffles/commit/27222e5e7a1d0f4936151ad0eddc5c87afd3e341))
* add textFromChildren utility ([f2cf307](https://github.com/datacamp/waffles/commit/f2cf307fb7d18533e6b6042e879a949fa50631aa))
* adjust best-practices style for single card ([98849f1](https://github.com/datacamp/waffles/commit/98849f19ebf260190ee91883fed0c494fce74e7d))
* adjust font size of paragrpah after main heading ([08634d5](https://github.com/datacamp/waffles/commit/08634d5498eb6555de415464396d29cb7df0c7a4))
* adjust secondary heading margin ([ad2082f](https://github.com/datacamp/waffles/commit/ad2082f6be2bc07c11f13992683d02dd8b81f368))
* adjust side nav look ([bc98ec4](https://github.com/datacamp/waffles/commit/bc98ec44c552f9a59f4c3741e96e3916607f5755))
* align copyright to the left ([5a7242c](https://github.com/datacamp/waffles/commit/5a7242c5147e616c7ed5d15531702d89f8c151a9))
* allow props-table to render markdown as description ([6340d7c](https://github.com/datacamp/waffles/commit/6340d7c4d39379970785148a998a86305de12f06))
* allow secondary headings to be bookmarked ([dc2b514](https://github.com/datacamp/waffles/commit/dc2b514d73cc9d430075ab47b220d189bfcfa82b))
* creat list component for markdown ([1bb2026](https://github.com/datacamp/waffles/commit/1bb20269a81c1fddca1eaa3c9e07d4e151f9553c))
* create navigation-category component ([f95fdac](https://github.com/datacamp/waffles/commit/f95fdac9c559bc2bc27f99375c9923dfdbbbb08a))
* create navigation-link component ([1b5558a](https://github.com/datacamp/waffles/commit/1b5558a7563943ec798b682792d4564c7455bc55))
* create props table component ([761eead](https://github.com/datacamp/waffles/commit/761eeadde5bfdbb1a260b1596a32a5d845adf28a))
* custom components mapping for mdx ([28a3773](https://github.com/datacamp/waffles/commit/28a37734d77a66a44ef21c32dd4c6f41bd9d1a73))
* enable docs written in markdown with mdx ([e245145](https://github.com/datacamp/waffles/commit/e245145993e9dc4f7936911912e1348a09539ec2))
* extract page title from mine heading ([d59589d](https://github.com/datacamp/waffles/commit/d59589d90da55a3084656417daba8afe47d7ea2c))
* fix svg logo in safari ([b1d7858](https://github.com/datacamp/waffles/commit/b1d785882ffff0141d607f81194a605ce3506542))
* higlight selected nav link ([ea282b3](https://github.com/datacamp/waffles/commit/ea282b325730d4ae20cfc3286b77969237aeedf0))
* implement basic page-layout component ([4a02953](https://github.com/datacamp/waffles/commit/4a02953afe0c5458a08c705839d16d214fa6d5be))
* implement best-practices component ([23168e6](https://github.com/datacamp/waffles/commit/23168e64c998e8a70604b3f6dc957c7b7135e3a7))
* implement convertedProps utility ([ac1ac8e](https://github.com/datacamp/waffles/commit/ac1ac8e9924ae2e0d05b55c6a38c209fb61cf796))
* implement example component ([21b018b](https://github.com/datacamp/waffles/commit/21b018bd9c53691e30f8827e35a1b2a0455fe2ff))
* implement imports component ([d16acd7](https://github.com/datacamp/waffles/commit/d16acd7cf96b813fd9c41ef48c4693e221cff5ad))
* implement nav subcategory component ([fd07298](https://github.com/datacamp/waffles/commit/fd0729819e7d34748fc8f831d545d868a3bf701b))
* implement page-header component ([ddf98cd](https://github.com/datacamp/waffles/commit/ddf98cdb610e931c7303719524b6193782b6a471))
* implement table component ([d1bf9e8](https://github.com/datacamp/waffles/commit/d1bf9e84c185f1c2f653d6cda7d22c2a7822c327))
* improve convertedProps typings ([5703af1](https://github.com/datacamp/waffles/commit/5703af172a82c0b2ce1757dda59d30ed29ef8906))
* make page-header position fixed at the top ([c1515cb](https://github.com/datacamp/waffles/commit/c1515cb4b0ab07e9289dc6f970f76223e53245a0))
* set up live coding components playground ([fc931df](https://github.com/datacamp/waffles/commit/fc931df556082d8aaabf18210888ccdb354e603e))
* set up side navigation ([5cfbf5e](https://github.com/datacamp/waffles/commit/5cfbf5ed16634bd608977af2b1c58eec4afce626))
* sort props and fixed optional flag adjustment ([15e6bce](https://github.com/datacamp/waffles/commit/15e6bcefc0a198390d8b89f27c6969968ae158e6))
* update link border width and it's on hover color ([41997a9](https://github.com/datacamp/waffles/commit/41997a90549e6fcd43d4b15f7b529a7019954208))

## [0.19.0](https://github.com/datacamp/waffles/compare/v0.18.0...v0.19.0) (2021-09-22)


### Core Changes

* **icon:** add flash and flash inverted icons ([4ec635c](https://github.com/datacamp/waffles/commit/4ec635c2cb0ca0e5049467fb489b9ae1e98b1f8a))
* **link:** update link hover underline style ([54c3c96](https://github.com/datacamp/waffles/commit/54c3c96eba6c7db0c43448f810610b312951ccd5))
* merge props in button, code-block, and link ([afbfead](https://github.com/datacamp/waffles/commit/afbfead7c210d146b9d10dc2d108ffc738a61a37))
* **portal:** implement isomorphic portal component ([bd1f0b3](https://github.com/datacamp/waffles/commit/bd1f0b34dc3d0b98af970e23d858dde639998360))
* **tokens:** add new popup z-index token ([87a813b](https://github.com/datacamp/waffles/commit/87a813b8301824e486b595eaf43998a536b4ad88))
* **tooltip:** add inverted style ([6d40fcd](https://github.com/datacamp/waffles/commit/6d40fcd628047d95d76b9895535cfb9056c4ddc9))
* **tooltip:** adjust styles slightly ([da6abd8](https://github.com/datacamp/waffles/commit/da6abd81feecd1c827fb6018f9b62f84a10d8b78))
* **tooltip:** allow offset to be passed with units ([b9807fd](https://github.com/datacamp/waffles/commit/b9807fdea73e459a40ef3e7d98b4a1acac83153d))
* **tooltip:** associate trigger and tooltip by id ([3ca7c39](https://github.com/datacamp/waffles/commit/3ca7c39a3a7db06bf2df6cb1620693dd1d0960ce))
* **tooltip:** custom hook for trigger position and size ([7d3f967](https://github.com/datacamp/waffles/commit/7d3f9670648d4f90990c218005dc1893859d74e2))
* **tooltip:** implement basic bottom placed tooltip ([d950e50](https://github.com/datacamp/waffles/commit/d950e50e803c579e7488250cef5e28a879fd7435))
* **tooltip:** set tooltip position based on placement ([80b1790](https://github.com/datacamp/waffles/commit/80b179094dc04f63e2757738a2a4fe4b168312f2))
* **tooltip:** show tooltip with very slight delay ([acda40a](https://github.com/datacamp/waffles/commit/acda40a041f1866ffda579ce8a34458dbdaaa48d))
* update external link icon ([7ea6de2](https://github.com/datacamp/waffles/commit/7ea6de2018cddc759e8828e902da3ce24c3ab4af))

## [0.18.0](https://github.com/datacamp/waffles/compare/v0.17.0...v0.18.0) (2021-09-09)


### Core Changes

* **button:** use polymorphic types fro utils ([8af469d](https://github.com/datacamp/waffles/commit/8af469d12953b9b11744589eba7d4c0b454cb4b0))
* **chapeau:** create chapeau component ([e323eed](https://github.com/datacamp/waffles/commit/e323eed0408a8e2bb06fb27b45c9d8a6525c3646))
* **code-block:** create code-block component ([78933c4](https://github.com/datacamp/waffles/commit/78933c4a5fb90fa065931ac51aea21b668abe40e))
* **code-block:** make code block focusable ([d56a3d8](https://github.com/datacamp/waffles/commit/d56a3d85352115cdc94d089de48d44735cdcd6db))
* **code:** implement code component ([7a5f057](https://github.com/datacamp/waffles/commit/7a5f0575e0888ccc23786c83a0eae853fa46e7d0))
* **code:** make code work as pre tag ([b303ffd](https://github.com/datacamp/waffles/commit/b303ffd35a2a4c443b3e005523bee9d0767bca98))
* **display:** adjust font weight ([3353f6d](https://github.com/datacamp/waffles/commit/3353f6dc7f0529abc482b8e261c120aa2ca1e197))
* **display:** create display component ([e345d93](https://github.com/datacamp/waffles/commit/e345d93572dbeab74e6e698889b46b236f36a845))
* **heading:** adjust line height ([59e50a4](https://github.com/datacamp/waffles/commit/59e50a4d2d2fcb33a77961b3f5995bbad4a60b9b))
* **heading:** create heading component ([9cba950](https://github.com/datacamp/waffles/commit/9cba9501528987ae1fcee74845207739344aa854))
* **link:** create link component ([b6d525a](https://github.com/datacamp/waffles/commit/b6d525a2977fe4025b7c54b2c0f2b6282196e2c2))
* **paragraph:** implement paragraph component ([75c47d5](https://github.com/datacamp/waffles/commit/75c47d5011dab8ff322cac58e9972123d1be9193))
* **paragraph:** remove margin from last paragraph in a section ([9851ca6](https://github.com/datacamp/waffles/commit/9851ca69dc710ddedc38347ecede536539f9bf46))
* **text:** implement generic text component ([e9ef4ac](https://github.com/datacamp/waffles/commit/e9ef4ac8d544246f745b0a43b36de327eae2f672))
* **utils:** add polymorphic component types ([db36ca5](https://github.com/datacamp/waffles/commit/db36ca59d6a7bc28193adefbe43a7729776c34b2))

## [0.17.0](https://github.com/datacamp/waffles/compare/v0.16.0...v0.17.0) (2021-09-03)


### Bug Fixes

* **button:** prevent content from shrinking ([5054ebd](https://github.com/datacamp/waffles/commit/5054ebd36a795097d85bb919a81b458eec53144b))


### Core Changes

* **button:** add disabled styles ([cf586f9](https://github.com/datacamp/waffles/commit/cf586f92aaa1d4f06b28ccd9d5c386acec0ffa92))
* **button:** add inverted variants for dark backgrounds ([2d07f9f](https://github.com/datacamp/waffles/commit/2d07f9f47f2403e6a0ade1bce40a67aa755f6805))
* **button:** add keyboard focus indicator style ([85c91ce](https://github.com/datacamp/waffles/commit/85c91ced583255ca65c5093227b211b367397705))
* **button:** add padding depending on button size ([6e5bb8c](https://github.com/datacamp/waffles/commit/6e5bb8c4b63b17596e6690d26004b2806933a2ca))
* **button:** add props to show icon, iconLeft, or iconRight ([7830b97](https://github.com/datacamp/waffles/commit/7830b97c957360dc80f5edf43aa67038176fe23c))
* **button:** adjust padding around label when there is an icon ([3ac7878](https://github.com/datacamp/waffles/commit/3ac7878a443f7ed0a5867e0ef4caa5fb3d76f971))
* **button:** clean button as a link style ([3aa7616](https://github.com/datacamp/waffles/commit/3aa7616b8e73122740d4b274afae6299608a4f94))
* **button:** extrac dynamic styles to separate file ([4150fa3](https://github.com/datacamp/waffles/commit/4150fa37eb07b99be9c4665c8f59def367ae4dff))
* **button:** forward ref ([6bfdae6](https://github.com/datacamp/waffles/commit/6bfdae65004ef45b6ee89f9cbb2b0ab090bdad09))
* **button:** implement base sizes and variants ([4d501b1](https://github.com/datacamp/waffles/commit/4d501b146857748322b920e80064fce88387cb6a))
* **button:** make button props extensible ([63c4860](https://github.com/datacamp/waffles/commit/63c486088ab0a4dda46d67bdb4b8319cc6e24089))
* **button:** make icons slots more flexible ([561116f](https://github.com/datacamp/waffles/commit/561116f103bce0f4a8342012bf8a8e4993ddb26c))
* **button:** support for fullWidth prop ([533e317](https://github.com/datacamp/waffles/commit/533e31767846c15d49d55795b189ce051ca0f836))
* **button:** update button to use hexToRgba util ([9109367](https://github.com/datacamp/waffles/commit/9109367518d4dad8f15f2fdf15cf22088c8b60c5))
* **button:** update secondary variant mappings ([7f502ad](https://github.com/datacamp/waffles/commit/7f502ad0081667312a64b4ad1f4b85303e3d40c5))
* **tokens:** convert opacity from percentages to unitless ([8c9c551](https://github.com/datacamp/waffles/commit/8c9c5518de189a33e266ddd0ef31e0f373cedfb5))
* **utils:** implement hexToRgba color conversion util ([8e191ec](https://github.com/datacamp/waffles/commit/8e191eca53ea9207a52b92ae7248d1331b3f43d8))

## [0.16.0](https://github.com/datacamp/waffles/compare/v0.15.0...v0.16.0) (2021-09-03)


### Core Changes

* **content-container:** extract styles to separate file ([ca7b845](https://github.com/datacamp/waffles/commit/ca7b845f85076674d9062550f2a2b1a6691b2d18))
* **content-container:** implement content wrapper ([d733339](https://github.com/datacamp/waffles/commit/d733339bc084c02acbf2ae186e9f48882574cb36))

## [0.15.0](https://github.com/datacamp/waffles/compare/v0.14.0...v0.15.0) (2021-09-01)


### Documentation Changes

* proofread docs ([f6838b6](https://github.com/datacamp/waffles/commit/f6838b6f3375e825ec7e43fafbb5c41c72f6277b))


### Core Changes

* **media-query:** generate media queries from breakpoints ([c9237bc](https://github.com/datacamp/waffles/commit/c9237bc652d10143236db4b7a28ed66660086ec6))

## [0.14.0](https://github.com/datacamp/waffles/compare/v0.13.0...v0.14.0) (2021-08-24)


### Documentation Changes

* mention generate icons script ([94433fe](https://github.com/datacamp/waffles/commit/94433fe096051271961ddec7c32f9d4a5c57ec78))
* update icons path ([c965f14](https://github.com/datacamp/waffles/commit/c965f1483ae0825634a832d24539fbdafe7bc64d))
* update npm script names ([b4b57f7](https://github.com/datacamp/waffles/commit/b4b57f73152994669c1f32cdf94c561c42f995e5))


### Core Changes

* **icon:** add base icon with size mapping baked in ([7583ad1](https://github.com/datacamp/waffles/commit/7583ad1806e86a2603bf22a8d0747b24a0271e4c))
* **icon:** add colored pay pal bran icon ([e92f7b5](https://github.com/datacamp/waffles/commit/e92f7b537a55c56cc5714189fbb254b180d2dc87))
* **icon:** add raw svg icons ([72e3b15](https://github.com/datacamp/waffles/commit/72e3b15ce6be60c1dd4c5fb9436a1287f80f111a))
* **icon:** commit auto generated icons ([161f7ce](https://github.com/datacamp/waffles/commit/161f7ce522231438fd56be04467b6029f155b159))
* **icon:** commit optimized icons ([f8ff012](https://github.com/datacamp/waffles/commit/f8ff012236e8d2ad1f7b68d3d2b95d2359c17015))
* **icon:** commit updated icon components ([aed9307](https://github.com/datacamp/waffles/commit/aed93075e1ad6f2338533c22fa4e0709dab98338))
* **icon:** keep only one facebbok brand icon ([6bdeff5](https://github.com/datacamp/waffles/commit/6bdeff56cfb57072a53df69da480f84fa2135a09))
* **icon:** keep only one linked in brand icon ([85f8857](https://github.com/datacamp/waffles/commit/85f8857241e14dc8c95ceeac0df18f4943b27977))
* **icon:** make size prop optional ([87cf798](https://github.com/datacamp/waffles/commit/87cf79802abd7f9679c6ae2189d78128da743f11))
* **icon:** remove google plus icon ([22c0f83](https://github.com/datacamp/waffles/commit/22c0f83adcbd3d777cd5f241751fa76967ddb4d9))
* **icon:** remove title element ([7717cf9](https://github.com/datacamp/waffles/commit/7717cf9fc2722546ce40474b35d0ce407ffed499))
* **icon:** streamline svg icons files ([04f7e44](https://github.com/datacamp/waffles/commit/04f7e4490aa18a1077a4ddcaf657b2455cecfb2f))
* **icon:** update share icon ([4a26f1e](https://github.com/datacamp/waffles/commit/4a26f1ec011590f86ae1ca998574fb152096a084))
* **workbench:** wrap whole workbench with main component ([68da194](https://github.com/datacamp/waffles/commit/68da19421ced14154cb604c9dc0725ec126c8fd2))

## [0.13.0](https://github.com/datacamp/waffles/compare/v0.12.0...v0.13.0) (2021-08-19)


### Core Changes

* **tokens:** add base design tokens compatible with Figma ([8b2a859](https://github.com/datacamp/waffles/commit/8b2a8595de30642458c020085d84b7e6c5f56936))
* **tokens:** commit auto generated tokens for internal use ([caceb96](https://github.com/datacamp/waffles/commit/caceb96131e3f0cea00d0ad855c9f88657f7ebfe))


### Documentation Changes

* add generate dsign tokens script overview ([320fdd5](https://github.com/datacamp/waffles/commit/320fdd559245edc0a18d149672ac3c4ee55082d1))
* add section about design tokens and icons to dev guide ([211b37c](https://github.com/datacamp/waffles/commit/211b37c69c53349aecc56daded2bcdde961ee56d))
* mention script to generate design tokens ([ff25c4b](https://github.com/datacamp/waffles/commit/ff25c4b4e8875259b7bb1c0c5fccdea58d72d6c9))
* update core principles in dev guide ([93ff9ae](https://github.com/datacamp/waffles/commit/93ff9aecef10ab1eda2ad701fe29f8ba4250b35e))

## [0.12.0](https://github.com/datacamp/waffles/compare/v0.11.0...v0.12.0) (2021-08-18)


### Core Changes

* **button:** use tokens in button ([4aa1d34](https://github.com/datacamp/waffles/commit/4aa1d34597d054a6b16c60e3cd9373ba0040df57))
* **tokens:** implement design tokens ([c9dd36c](https://github.com/datacamp/waffles/commit/c9dd36c3c675c7781b9256d7d638c6a36582c928))
* **tokens:** put tokens groups in separate files ([e73640c](https://github.com/datacamp/waffles/commit/e73640cf28fd2de46c30984300e39b3e4342f36a))


### Documentation Changes

* add available commands and directories overview ([8e67b03](https://github.com/datacamp/waffles/commit/8e67b03aef1cd9f4029d74f22f229ce496494c03))
* add docs about local development ([19dde43](https://github.com/datacamp/waffles/commit/19dde43ce466dde586120aad416f18e65a399de4))
* add links to internal docs to readme ([8b7b23b](https://github.com/datacamp/waffles/commit/8b7b23bf05489f638fbc15b56bf6f3a7d39ca635))
* add project scripts and structure documentation ([d92b2fd](https://github.com/datacamp/waffles/commit/d92b2fda3dba6f8abefcd6da5a3c079e99732c30))
* extend development guide docs ([d795fea](https://github.com/datacamp/waffles/commit/d795feaea8d849680aa53d017f5b1d7130a0103d))
* mention commit types and scopes ([746515c](https://github.com/datacamp/waffles/commit/746515cc3fec6baa27604ed75d935f8d59d61256))
* small project organization doc adjustments ([c3ce95e](https://github.com/datacamp/waffles/commit/c3ce95e5204752f2cb233ec7159eca63df6d5577))
* use tokens in doc-site ([d3cd05c](https://github.com/datacamp/waffles/commit/d3cd05cb18425da193774d80d9ae0c41eb16b8ae))

## 0.11.0 (2021-08-12)


### Bug Fixes

* bump package version ([00e5956](https://github.com/datacamp/waffles/commit/00e5956c26427206af32b8568303bf2fe3699684))
* ci config ([63c4a2e](https://github.com/datacamp/waffles/commit/63c4a2e1cf4a7a322179cdf5ad94ecba0d3bd903))
* commit message in release-it config ([2ca9ed8](https://github.com/datacamp/waffles/commit/2ca9ed8246a49cdc33fe4cdad45f193acba721d3))
* github unknown host during ci ([4e49670](https://github.com/datacamp/waffles/commit/4e49670bc4baccaefe2e97917bf2fca296bbf3e0))
* pass correct env var ([2e7ef31](https://github.com/datacamp/waffles/commit/2e7ef314e78773d09fe7d671cd61c065f108cba0))


### Documentation Changes

* add basic readme ([de7593c](https://github.com/datacamp/waffles/commit/de7593c96b21d9e4cc80d621a144692d03f8bc84))
* update readme ([32a29a2](https://github.com/datacamp/waffles/commit/32a29a271f1f77ad6e4c07705582ba5643786bd3))
* update readme ([818f16d](https://github.com/datacamp/waffles/commit/818f16d02b72464cf7dddb7ccf836aefdbbb48a6))


### Core Changes

* add custom assets ([3e704af](https://github.com/datacamp/waffles/commit/3e704afbf678940f81350f8184dd3eeca0c18c8e))
* add custom optimized fonts ([774bd50](https://github.com/datacamp/waffles/commit/774bd50cb517a76b1bee97be1eac2f960597d333))
* add dummy button component ([cc5a057](https://github.com/datacamp/waffles/commit/cc5a05744281d98509eb440062e4ab200fe8d7e0))
* add emotion to doc-site ([49b1c25](https://github.com/datacamp/waffles/commit/49b1c25003646f5eb35b64af04c875b608ea0901))
* add fonts and favicons to playground ([04c10c5](https://github.com/datacamp/waffles/commit/04c10c5ef34c25ac8b4e6638f590a1780d81e1ec))
* basic doc-site setup ([dfabdf2](https://github.com/datacamp/waffles/commit/dfabdf2337cc945a388c10f8525a43c8197e558b))
* basic playground setup ([284b02c](https://github.com/datacamp/waffles/commit/284b02c2757bc69c4dd61ca0b4f6757635d8ec3d))
* cleanup workbench setup ([b94bd0d](https://github.com/datacamp/waffles/commit/b94bd0d42ff18c39c106074f62331ce020d769d0))
* extend cypress a11y checks and add a11y logger ([a3c5bc3](https://github.com/datacamp/waffles/commit/a3c5bc3f35f0937d84e9761fb01822b3af14705a))
* implement main component with grid background ([670a111](https://github.com/datacamp/waffles/commit/670a111ff5cededc1100c38129e89574df1b2480))
* make doc-site work with emotion ([8f6c060](https://github.com/datacamp/waffles/commit/8f6c060c9c33175d05fef16b66991d1f4a80d9d1))
* set up custom fonts and CSS reset ([f1840a6](https://github.com/datacamp/waffles/commit/f1840a60c95d8053c14cb86b67bbd6e4fa1682ca))
* setup playground entry ([63bccdc](https://github.com/datacamp/waffles/commit/63bccdc8d3c6a16fc97f948e6b16693bc1c53bd2))
* update dummy button example ([17ba3c5](https://github.com/datacamp/waffles/commit/17ba3c574325927af85c42d7ffe5b1197002c0eb))
* update workbench layout ([60a4129](https://github.com/datacamp/waffles/commit/60a4129d6637fcf21ed435cf77e0eec4f0f42376))


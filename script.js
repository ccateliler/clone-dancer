/*Overall effects*/

const overlayEl = document.getElementById("overlay");
const imgEl = document.getElementById("fullscreen");
const navBar = document.getElementById("navbar");
const titleHor = document.getElementById("title-hor");
const footer = document.getElementById("footer");

/*CONTACT*/
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const contactFormSubmit = document.getElementById("submit-btn");
  const contactFormName = document.getElementById("input-name");
  const contactFormEmail = document.getElementById("input-email");
  const contactFormTitle = document.getElementById("input-title");
  const contactFormMsg = document.getElementById("input-message");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(this);
      contactFormSubmit.style.color = "blue";

      fetch(this.action, { method: "POST", body: formData })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success:", data);
          contactFormSubmit.style.color = "white";
          alert(
            "Form submitted! Thank you for contacting us. We will get back to you as soon as we can."
          );
          [
            contactFormName,
            contactFormEmail,
            contactFormTitle,
            contactFormMsg,
          ].forEach((box) => {
            box.value = "";
          });
        })
        .catch((error) => console.error("Error:", error));
    });
  }
});

/*GALERIE AME*/

const fullscreen = (id) => {
  if (imgEl && overlayEl) {
    const tag = "imgbtn-";
    const imgNum = id.replace(tag, "");
    const currImgSrc = document.getElementById(`img-${imgNum}`).src;
    imgEl.src = currImgSrc;
    overlayEl.style.display = "flex";
    navBar.style.display = "none";
    titleHor.style.display = "none";
    if (footer) {
      footer.style.display = "none";
    }

    if (fullscreenCaptionDiv) {
      const currImgCaption = imgCaptionData.find(
        (item) => item.img === Number(imgNum)
      );
      fullscreenCaptionDiv.innerHTML = `<h2>${currImgCaption.h2}</h2><p>${currImgCaption.p}</p>`;
    }
  }
};

const cancelFullscreen = () => {
  if (imgEl && overlayEl) {
    overlayEl.style.display = "none";
    navBar.style.display = "flex";
    titleHor.style.display = "block";
    if (footer) {
      footer.style.display = "block";
    }
  }
};

const imgBtns = document.querySelectorAll(".imgBtn");
const imgCaptionData = [
  { img: 15, h2: "TONIGHT OR NEVER...", p: "Photo Ikuro Suzuki" },
  { img: 16, h2: "TONIGHT OR NEVER...", p: "Photo Ikuro Suzuki" },
  {
    img: 17,
    h2: "TONIGHT OR NEVER... 今宵かぎりは・・・",
    p: "Photo Azusa Todoroki",
  },
  {
    img: 18,
    h2: "TONIGHT OR NEVER... 今宵かぎりは・・・",
    p: "Photo Azusa Todoroki",
  },
  {
    img: 19,
    h2: "TONIGHT OR NEVER... 今宵かぎりは・・・",
    p: "Photo Azusa Todoroki",
  },
  { img: 20, h2: "BOKUTOH KI-DANCE墨東綺譚”ス", p: "Photo GEN Kasuga" },
  { img: 21, h2: "BOKUTOH KI-DANCE墨東綺譚”ス", p: "Photo GEN Kasuga" },
  { img: 22, h2: "BOKUTOH KI-DANCE墨東綺譚”ス", p: "Photo GEN Kasuga" },
  { img: 23, h2: "BOKUTOH KI-DANCE墨東綺譚”ス", p: "Photo GEN Kasuga" },
  { img: 24, h2: "BOKUTOH KI-DANCE墨東綺譚”ス", p: "Photo GEN Kasuga" },
  { img: 25, h2: "PINK RIVER", p: "Photo Rinko Tsukamoto" },
  { img: 26, h2: "PINK RIVER", p: "Photo Rinko Tsukamoto" },
  { img: 27, h2: "PINK RIVER", p: "Photo Rinko Tsukamoto" },
  { img: 28, h2: "PINK RIVER", p: "Photo Rinko Tsukamoto" },
  { img: 29, h2: "PINK RIVER", p: "Photo Rinko Tsukamoto" },
  { img: 30, h2: "PINK RIVER", p: "Photo Rinko Tsukamoto" },
];

const fullscreenCaptionDiv = document.getElementById("fullscreen-caption");

if (imgBtns) {
  imgBtns.forEach((button) => {
    button.addEventListener("click", () => {
      fullscreen(button.id);
    });
  });
}

const cancelFullscreenBtn = document.getElementById("cancelFullscreen");
if (cancelFullscreenBtn) {
  cancelFullscreenBtn.addEventListener("click", () => {
    cancelFullscreen();
  });
}

/* Scenes */

const scenesOverlayCaptions = document.querySelectorAll(
  "#scenes-body .caption"
);
const slideshowOverlayTrigger = document.querySelectorAll(".mouseoverDim");
const slideshowOverlay = document.querySelectorAll(".caption");

if (scenesOverlayCaptions && scenesOverlayCaptions.length > 0) {
  document.addEventListener("DOMContentLoaded", () => {
    renderOverlayCaptions();
  });
}

const renderOverlayCaptions = () => {
  scenesOverlayCaptions.forEach((caption, index) => {
    caption.innerHTML = `<h2>${imgCaptionData[index].h2}</h2><p>${imgCaptionData[index].p}</p>`;
  });
};

if (slideshowOverlayTrigger) {
  slideshowOverlayTrigger.forEach((image, index) => {
    image.addEventListener("mouseover", () => {
      slideshowOverlay[index].style.display = "flex";
      slideshowOverlayTrigger[index].style.filter =
        "opacity(80%) brightness(50%)";
      slideshowOverlay[index].addEventListener("mouseover", () => {
        slideshowOverlay[index].style.display = "flex";
        slideshowOverlayTrigger[index].style.filter =
          "opacity(80%) brightness(50%)";
      });
    });

    image.addEventListener("mouseout", () => {
      slideshowOverlay[index].style.display = "none";
      slideshowOverlayTrigger[index].style.filter =
        "opacity(100%) brightness(100%)";
      slideshowOverlay[index].addEventListener("mouseout", () => {
        slideshowOverlay[index].style.display = "none";
        slideshowOverlayTrigger[index].style.filter =
          "opacity(100%) brightness(100%)";
      });
    });
  });
}

const nextSlideBtn = document.getElementById("scenes-next");
const prevSlideBtn = document.getElementById("scenes-prev");
const scenesSlideshowContainer = document.getElementById("scenes-slideshow");

if (nextSlideBtn) {
  nextSlideBtn.addEventListener("click", () => {
    const scenesSlides = document.querySelectorAll(
      ".slideshow-container .slides"
    );
    scenesSlides.forEach((slide) => {
      slide.classList.add("nextSlide");
    });

    setTimeout(() => {
      scenesSlides.forEach((slide) => {
        slide.classList.remove("nextSlide");
        scenesSlideshowContainer.appendChild(scenesSlides[0]);
      });
    }, 1001);
  });
}

if (prevSlideBtn) {
  prevSlideBtn.addEventListener("click", () => {
    const scenesSlides = document.querySelectorAll(
      ".slideshow-container .slides"
    );
    scenesSlides.forEach((slide) => {
      slide.classList.add("prevSlide");
    });

    setTimeout(() => {
      scenesSlides.forEach((slide) => {
        slide.classList.remove("prevSlide");
        scenesSlideshowContainer.prepend(scenesSlides[scenesSlides.length - 1]);
      });
    }, 1001);
  });
}

/*News*/
const linkRegex = /(?<!^)\s+(?!$)|['"『』”「」～“・\/,\.!！()]/g;

let rawText = ``;
const blankLine = /(\r\n|\r|\n)/g;

console.log("###creating url: " + "".toLowerCase().replace(linkRegex, "-"));
console.log("###creating text: " + rawText.replace(blankLine, "[empty]"));

const newsData = [
  {
    id: 1,
    url: "./tonight-or-never.html",
    title: "TONIGHT OR NEVER",
    prenotes: "",
    img: [
      "https://static.wixstatic.com/media/1bc6ef_3821ff1b32f24cebb137c818aefd8812~mv2.png",
    ],
    text: `26 DE MAIO DE 2024[empty][empty]ATIVIDADE GRATUITA 16H[empty][empty]FUTURA[empty]https://www.institutotomieohtake.org.br/programas-publicos/apresentacao-artistica-tonight-or-never/[empty][empty][empty]APRESENTAÇÃO ARTÍSTICA DE BUTOH[empty][empty]Tonight or Never[empty][empty]A peça é inspirada no primeiro filme de Daniel Schmid, Tonight or Never; e conta a história de duas almas separadas que se reencontram após uma longa jornada. É um casamento eterno. Quando duas almas estão ouvindo os batimentos cardíacos uma da outra, são abençoadas. Mesmo com uma distância entre a vida e a morte, a morte ama a vida e a vida sopra na morte.`,
  },
  {
    id: 2,
    url: "./pink-river.html",
    title: "Pink River",
    prenotes: `むつみねいろ舞踏公演「Pink River」を上演いたします。[empty][empty]※満員御礼のため、予約を締切ります。[empty][empty]公演の安全を考慮して、当日券もキャンセル待ちも出しません。[empty][empty]当日ならワンチャンス行けるかも、と思っていた方がいらっしゃったら、ごめんなさい。[empty][empty]よろしくお願いいたします。[empty][empty]It is totally full house![empty][empty]We stop booking for our performance.[empty][empty]There will be no ticket at the door neither.[empty][empty]Thank you.[empty][empty]`,
    img: [
      "https://static.wixstatic.com/media/1bc6ef_d1f559e52d4e42daa6b3fa8457376b55~mv2.jpg/v1/fill/w_1414,h_2000,al_c,q_90/1bc6ef_d1f559e52d4e42daa6b3fa8457376b55~mv2.webp",
      "https://static.wixstatic.com/media/1bc6ef_4156adf996ef4be0a04666a5c78da08f~mv2.jpg/v1/fill/w_1414,h_2000,al_c,q_90/1bc6ef_4156adf996ef4be0a04666a5c78da08f~mv2.webp",
    ],
    text: `シアターX 提携公演[empty]むつみねいろ DUET MUTSUMINEIRO[empty][empty]     [empty][empty]　Pink River[empty][empty][empty]2023年12月16日(土) [empty]18：30開場 19：00開演[empty][empty][empty]劇場  東京両国 シアターXカイ[empty][empty][empty]舞踏   むつみねいろ[empty]音響・照明   曽我傑[empty]スタッフ  [empty]高松真樹子 田中亞弥 川村和央 仙石朱音 [empty]映像撮影  塚本倫子[empty][empty][empty]主催　ギャルリ雨[empty][empty][empty]前売り3,500円 当日4,000円[empty]予約・問合わせ[empty]mutumimutum＠gmail.com[empty]080-4616-9038(ギャルリ雨) `,
  },
  {
    id: 3,
    url: "./mutsumineiro-europe-tour-2023--our-last-waltz-.html",
    title: "MUTSUMINEIRO EUROPE TOUR 2023 'OUR LAST WALTZ'",
    prenotes: "",
    img: [
      "https://static.wixstatic.com/media/1bc6ef_35fe6a5f33bb476fa55813e379329b6b~mv2.jpg/v1/fill/w_1584,h_2376,al_c,q_90/1bc6ef_35fe6a5f33bb476fa55813e379329b6b~mv2.webp",
    ],
    text: `"Our Last Waltz"[empty][empty]Before we eat dinner, before we fall asleep, before before we wake up, [empty][empty]before we wash our face, before we think about today,  let's dance our Last Waltz.[empty][empty]Before we make up, before we put our shoes on, before we open the door, let's dance our Last Waltz. [empty][empty]Our every little Last Waltz.[empty][empty]Forever, let's dance our Last Waltz.[empty][empty][empty]******************[empty][empty][empty]We will be on our Europe Tour in May and June 2023.[empty][empty]If we could get a chance to see you in somewhere, that would be our pleasure.[empty][empty]Please follow our update information for more details. Thank you.[empty][empty][empty]May 13th and 14th / [empty][empty]2 days Butoh Workshop in Nessodem, NORWAY[empty][empty]FACEBOOK [empty][empty]https://www.facebook.com/events/1221406578484573/?ref=newsfeed [empty][empty][empty]May 20th/[empty][empty]APARTE FESTIVAL2023 in Tonsberg, NORWAY[empty][empty]https://apartefestival.no/ [empty][empty][empty]May 28th/[empty][empty]MUTSUMINEIRO DUET PERFORMANCE[empty][empty]"Our Last Waltz" [empty][empty]in Warsaw, POLAND[empty][empty][empty]Photo GEN Kasuga`,
  },
  {
    id: 4,
    url: "./ねいろ-田中誠司-舞踏duo公演--四金-yonkin-.html",
    title: "ねいろ・田中誠司　舞踏DUO公演　『四金/YONKIN』",
    prenotes: "",
    img: [
      "https://static.wixstatic.com/media/1bc6ef_17dae45440ec45e19a43848ecc9cc2ef~mv2.jpg/v1/fill/w_595,h_842,al_c,q_85,enc_avif,quality_auto/1bc6ef_17dae45440ec45e19a43848ecc9cc2ef~mv2.jpg",
      "https://static.wixstatic.com/media/1bc6ef_b86ac770587f4542989af267a7173da8~mv2.jpg/v1/fill/w_891,h_1260,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1bc6ef_b86ac770587f4542989af267a7173da8~mv2.jpg",
    ],
    text: `ねいろ・田中誠司　舞踏DUO公演[empty]『四金/YONKIN』　を上演致します。 [empty][empty][empty]ある時ふと思い出した、幼い頃。団地の裏で日が暮れるまで、誰にも見つからないように過ごした記憶。[empty][empty]果てしない宇宙の中で行われた、永遠に輝きを失わない他愛もない秘密。[empty][empty]二つの体は物語を語らず、ただ無防備に秘密をぶら下げて。 [empty]もう僕たちには、踊る喜び以外、何も要らない。[empty][empty]  [empty][empty][empty]日時|2022/12/13(火),14(水)[empty]　　  19:00開場19:30開演 [empty][empty] [empty][empty]劇場| 東京・両国 シアターカイ [empty][empty]東京都墨田区両国2-10-14 両国シティコア内[empty]TEL：03-5624-1181[empty]JR総武線両国駅西口下車、左へ徒歩約3分[empty]都営地下鉄大江戸線両国駅A4・A5出口徒歩約8分 [empty][empty][empty]予約 3,500円　当日 4,000円 [empty][empty]予約・問い合わせ　ギャルリ雨[empty]email mutumimutum@gmail.com[empty]TEL 080-4616-9038[empty][empty] [empty][empty]制作 ギャルリ雨[empty]　 田中誠司舞踏スタジオ[empty]提携 シアターXカイ [empty][empty][empty]ねいろ　[empty]JIDAI氏にアートマイムを、大野慶人氏に舞踏を師事2010年 ポーランド・ワルシャワへ渡り、Stefan Niedziałkowski 氏主宰のTeatr Szutki Mimuに所属[empty]2012年 帰国後、大野一雄舞踏研究所での出会いより、山本むつみと｢Duet むつみねいろ｣を始動　代表作「今宵かぎりは・・・」を日本、ポーランド、イスラエル、ドイツで上演　2016年 東京東墨田に「ギャルリ雨」を設立 2020年11月 ソロ作品「墨東綺譚”ス－誕誕／TANTAN」(シアターX)を上演 [empty]https://www.mutsumineiro.com [empty][empty][empty]田中誠司[empty]大野一雄舞踏研究所にて、大野慶人に師事。[empty]2011年2月、郷里の奈良に田中誠司舞踏スタジオを開設。[empty]同年5月、日独交流150周年記念の一環として招待を受け、「デュッセルドルフ舞踏フェスティバル」に出演し、好評を得る。[empty]近年の主な活動として、2017年、2019年、2021年、ドイツ4都市、ベルギー、スイスにて、舞踏公演&ワークショップツアーを行う。その他、国内及びヨーロッパ各地で精力的に公演やワークショップを続けている。 [empty]http://web1.kcn.jp/seijitanaka`,
  },
  {
    id: 5,
    url: "./シアターxカイ第15回国際舞台芸術祭.html",
    title: "シアターXカイ第15回国際舞台芸術祭",
    prenotes: "",
    img: [
      "https://static.wixstatic.com/media/1bc6ef_4d9fbb1de6284210bbfd21f2b06496a4~mv2.jpg/v1/fill/w_525,h_1101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1bc6ef_4d9fbb1de6284210bbfd21f2b06496a4~mv2.jpg",
    ],
    text: `むつみねいろ[empty]シアターカイ第15回国際舞台芸術祭2022に、出演します。[empty][empty]http://www.theaterx.jp/22/220616-220710p.php[empty][empty]ちょうど2年前に同じフェスティバルで踊って以来のデュエット。[empty][empty]2年の間に、互いにソロ作品発表を経て、新たな踊りを手繰り寄せるためのチャンス！！[empty]むつみねいろの新たな冒険を、ぜひ劇場でご覧下さい。[empty][empty]========+==================+====+======[empty]日時 : 6/26(日)14:30開演(他に3組の出演があります)[empty]劇場 : シアター カイ [empty]           東京都墨田区両国2-10-14 両国シティコア内[empty]料金 : 1000円[empty]予約·問い合わせ : neironeironeiro@hotmail.co.jp (ねいろ)`,
  },
  {
    id: 6,
    url: "./浮遊蕩蕩-nagasaki-nostalghia.html",
    title: "浮遊蕩蕩　nagasaki nostalghia",
    prenotes: `山本むつみ舞踏公演[empty]｢浮遊蕩蕩  ～nagasaki nostalghia｣`,
    img: [
      "https://static.wixstatic.com/media/1bc6ef_5c8c5d5619ab4572beae3e25f38dc3d8~mv2.jpg/v1/fill/w_891,h_612,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1bc6ef_5c8c5d5619ab4572beae3e25f38dc3d8~mv2.jpg",
    ],
    text: `舞踏者   山本むつみ[empty][empty]音楽       曽我傑[empty]灯り       ねいろ[empty][empty][empty]日にち:2022年1月8日(土)[empty]時間:14:00/19:00(開場は開演の20分前です)[empty]料金:予約 3000円当日3500円[empty]会場:テルプシコール[empty]         東京都中野区中野３丁目４９−１５[empty][empty]※SOLD OUT[empty][empty]満席となりました。[empty][empty][empty]曽我傑 [empty][empty]15歳頃まで音楽の基礎を祖父と父から学ぶ。[empty]ジョン・ケージやテリーライリーに音楽を学び[empty]1973年頃より佐野清彦、多田正美らと共に現代音楽作曲、演奏グループ｢GAP｣の活動を開始、思想と音楽、理論と実践の関係を深く追求し伝統的な活動をのこし、現在も音楽家として精力的に活動。[empty][empty][empty]山本むつみ[empty]3才からクラシックバレエを始め、12才より新体操を始める。大学在学中の身体の故障から踊りをやめるが、10年後、大野一雄氏の舞踏に出会いその強烈な感動によって再び踊り始める。 大野一雄舞踏研究所にて大野慶人氏に師事。同研究所での出会いより、夫ねいろとのデュエットを踊っている。[empty]現在は上杉満代氏主催の研究会にて舞踏を学ぶ。[empty]田舎寿司の蝶々さんとしても活動中`,
  },
  {
    id: 7,
    url: "./niko-舞踏公演--壺中の天-.html",
    title: "niko 舞踏公演 『壺中の天』",
    prenotes: `秀島実×ねいろ＝［niko］[empty][empty][empty]異形の二人[empty]捩れた敷布を拡げ[empty]niko と描き入れ[empty]眠らない夜に出帆した[empty]疲弊した玩具を転がすように`,
    img: [
      "https://static.wixstatic.com/media/1bc6ef_77a9c97f6e5d4aa28419e827445aee62~mv2.jpg/v1/fill/w_623,h_870,al_c,q_85,enc_avif,quality_auto/1bc6ef_77a9c97f6e5d4aa28419e827445aee62~mv2.jpg",
    ],
    text: `舞踏 | 秀島実、ねいろ[empty]音響・照明 | 曽我　傑[empty]舞台監督 | 宇佐美　雅司[empty]スタッフ | 浅野洋平、重田龍一、山本むつみ、中村早紀[empty]チラシデザイン | 秀島有一　[empty][empty][empty]日時 | 2021年12月13日(月) 開場19:00 開演19:30[empty][empty]劇場 | 東京・両国　シアターＸカイ[empty]〒130-0026[empty]東京都墨田区両国2-10-14 両国シティコア1階[empty]TEL 03-5624-1181　www.theaterx.jp[empty]アクセス→http://www.theaterx.jp/access.php[empty][empty][empty]料金 | 予約 3,000円　当日 3,500円[empty]予約・問い合わせ | ギャルリ雨　[empty]Email : mutumimutum@gmail.com[empty]TEL : 080-4616-9038[empty]Messenger からも予約可能です。[empty]＊イベントの参加予定ボタンはご予約にはなりません。[empty]制作 | ギャルリ雨[empty]提携 | シアターXカイ[empty][empty][empty]秀島 実 (Minoru Hideshima)[empty]1975年舞踏家・大野一雄氏に師事 1980年の大野氏の欧州ツアーにおける作品「お膳または胎児の夢」に出演。また、同年にソロ活動も開始し、世界各地で作品を発表。ソロ活動以外にも、日・仏・独のダンサー・音楽家によるダンスグループ「Ensemble-W」の立ち上げを始めとして多くの作品を手がけ、国内外の大学や劇場でのワークショップ開催や客演も多数おこなう。その他にもリトアニア・フランスの合作映画「Few of us」（監督：シャルナス・ヴァルタス）に出演している。[empty][empty][empty]ねいろ(Neiro)[empty]JIDAI氏にアートマイムを、大野慶人氏に舞踏を師事。2010年 ポーランド・ワルシャワへ渡り、Stefan Niedziałkowski 氏主宰のTeatr Szutki Mimuに所属。2012年 帰国後、大野一雄舞踏研究所での出会いより、山本むつみと｢Duet むつみねいろ｣を始動。代表作「今宵かぎりは・・・」を日本、ポーランド、イスラエル、ドイツで上演。2016年 東京東墨田に「ギャルリ雨」を設立。2019年11月 東京両国 シアターカイにてソロ作品「墨東綺譚”スー誕誕／TANTAN」を上演。2021年４月 秀島実氏と[niko]を結成。  [empty][empty][empty]♢シアターXカイ新型コロナウィルス感染症対策ガイドラインに則り、万全の対策を施します。[empty]・劇場内に入る前に手指の消毒、検温、マスク着用のご協力をお願い致します。[empty]・体温が37.5度以上の場合、入場をお断りさせて頂きます。[empty]・可能な限りの換気に務め、場内各所の消毒を随時行います。[empty]・予約をしても当日に体調のすぐれない方は当日キャンセルを受付けます。必ずご連絡くださいますようお願い致します。[empty]ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー[empty]Theater Xcai presents[empty]niko Butoh Performance[empty][empty][empty]Kochu no Ten - Heaven in the jar[empty][empty][empty]Butoh | Minoru Hideshima, NEIRO[empty]Light and Sound | Masaru Soga[empty]Stage Manager | Masashi Usami[empty]Team | Yohei Asano, Ryuichi Shigeta, Mutsumi Yamamoto, Saki Nakamura[empty]Management | Galerie ame[empty]Cooperation | Theater Xcai[empty][empty]Date and Time |[empty]13(Mon) / 12/ 2021[empty]Open 19:00 Start 19:30[empty][empty]Venue | Theater Xcai[empty]2-10-14 Ryogoku CITY CORE 1F, Sumida, Tokyo, 130-0026[empty]TEL 03-5624-1181　www.theaterx.jp Access→http://www.theaterx.jp/access.php[empty]Charge |[empty]3,000 Yen (In advance) 3,500Yen (At the door)[empty]Booking/Question |[empty]Email : mutumimutum@gmail.com[empty]TEL : 080-4616-9038 (Gallerie Ame)[empty]Please write your name ,date, number of tickets.[empty]Booking available also by Messenger.[empty]* We don't count your "going" on our event page as your booking request.[empty][empty][We are following the Theater Xcai’s guide line for preventing the spread of infection of COVID-19][empty]・We ask for your cooperation - Sanitize hands, check your temperature, wear mask.[empty]・You cannot enter if your temperature is over 37.5℃。[empty]・We take care for air ventilation as much as possible.[empty]・We keep sanitizing inside of the theater.[empty]・If you are not feeling well on the day, please inform us. We accept your cancellation.`,
  },
  {
    id: 8,
    url: "./tokyo-butoh-circus-2021.html",
    title: "TOKYO BUTOH CIRCUS 2021",
    prenotes: `TOKYO BUTOH CIRCUS 2021 に出演します。[empty][empty]これだけ世の中が揺れている時期に、「東京」の劇場で、[empty]ガッツリ舞踏観ましょうか、という企画に出演させてもらえて、感謝。[empty][empty]舞踏は、逸脱から始まった。[empty]その逸脱は、生きることに真摯だったが故の必然。[empty][empty][empty]ねいろ　『Fairy Tail』[empty][empty]私しか知らない森の奥で　尻尾の先から謎があふれ出して`,
    img: [
      "https://static.wixstatic.com/media/1bc6ef_fdbfc53c7dee4dfe81fb9fbf950c7439~mv2.jpg/v1/fill/w_891,h_665,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1bc6ef_fdbfc53c7dee4dfe81fb9fbf950c7439~mv2.jpg",
    ],
    text: `ーーーーーーーーーーーーーーーー[empty]【プログラム】[empty][empty]7月24日（土）13:30[empty][empty]松原東洋『また孵る』[empty]岩下徹　『in Silence』[empty]小林嵯峨『野放図』[empty][empty] 7月24日（土）17:00[empty][empty]今貂子　　『辰砂女』[empty]スピロ平太『アナル桟橋』[empty]東雲舞踏　『春の祭典』[empty][empty] 7月25日（日）14:00[empty][empty]ねいろ　　　　『Fairy Tail』[empty]中嶋夏と霧笛舎『夢の漂流_幼き小さな神』[empty]工藤丈輝　       『天頂の水盤』[empty]舞踏舎 天鷄      『月下の一群　～蛇となり月へ跳ぶ～』[empty][empty]【会場】[empty]劇場　東京・両国 シアターXカイ[empty][empty] 【チケット料金】全席自由[empty][empty]各プログラム 前売り 4,500円｜当日  5,000円[empty]https://eplus.jp/sf/detail/3418750001-P0030001[empty][empty]3プログラム通し券　12,000円（東雲舞踏でのみ販売）https://checkout.square.site/.../SYCT6PBYFDY7PS2SS4RHLKOB[empty][empty]※ご購入いただいた通し券は公演当日、受付にてお渡しします。[empty]ご購入後、東雲舞踏よりメールにて【引換番号】をご案内します。そのメールを受付でご呈示ください。[empty][empty]舞台監督：三津久[empty]照明：ソライロヤ[empty]音響：鳥居慎吾[empty]記録映像：たきしまひろよし[empty]記録写真：大洞博靖[empty]フライヤーデザイン：井原靖章[empty]企画：川本裕子[empty]制作：東雲舞踏、TBC実行委員[empty]主催：東雲舞踏[empty]助成：公益財団法人東京都歴史文化財団[empty]           アーツカウンシル東京　[empty]【問合せ先】[empty]東雲舞踏[empty]Tel. 03-6458-5908[empty]e-mail. tokyobutohcircus2021@gmail.co.jp`,
  },
  {
    id: 9,
    url: "./ねいろ-墨東綺譚-ス-bokutoh-ki-dance---誕-誕-tan-tan--.html",
    title: "ねいろ　墨東綺譚”ス BOKUTOH KI-DANCE 『 誕 誕 tan tan 』",
    prenotes: "",
    img: [
      "https://static.wixstatic.com/media/1bc6ef_7772f1c532f2482e93fc93d30112b743~mv2.jpg/v1/fill/w_891,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1bc6ef_7772f1c532f2482e93fc93d30112b743~mv2.jpg",
    ],
    text: `シアターXカイ提携公演[empty][empty]ねいろ　墨東綺譚”ス  BOKUTOH KI-DANCE[empty][empty][empty]『誕 誕 tan tan』[empty][empty][empty]殻を破って、赤ちゃん色の誕(いつわ)りが生まれる[empty][empty][empty][empty]この度、2020年11月13日(金)14日(土)15日(日)の3日間、[empty][empty]東京・両国シアターXカイにて新作ソロ公演を行います。[empty][empty][empty](English below)[empty][empty][empty]「誕」という字を不思議な気持ちで眺めていました。[empty][empty]漢和辞典には大きく分けて3つの意味が載っています。[empty][empty][empty]1) いつわる、あざむく 2) でたらめ、ほしいまま 3) うまれる[empty][empty][empty]ポーランドで学んだマイムの真髄は、カウンターエネルギーでした。今は亡き師、大野慶人の舞踏は「虚」と「実」でした。私が心惹かれ大切にしてきた二つのことは、実は一つで、それが「誕」の一字に見事に刻印されていたのです。[empty][empty][empty]大いなる宇宙の原理に真っ直ぐ貫かれ、矛盾だらけに今ここで生きている私の、誕（いつわ）りのダンスを、どうか劇場へ観に来てください。[empty][empty][empty]私達の新たな混迷の日々を祝福することを願って。[empty][empty][empty][empty]舞踏 　ねいろ[empty][empty][empty]誕 誕  創造集団[empty][empty]曽我　傑　　宇佐美　雅司[empty][empty]宮内　陽子　たきしまひろよし[empty][empty]野沢　朋央　高松　真樹子[empty][empty]山本　むつみ　[empty][empty][empty]2020年11月13日(金)19:30[empty][empty]                   14日(土)19:30[empty][empty]                   15日(日)15:00[empty][empty]                    (開場は開演の20分前)[empty][empty][empty]東京・両国　シアターＸカイ[empty][empty]〒130-0026[empty][empty]東京都墨田区両国2-10-14 両国シティコア1階 [empty][empty]TEL 03-5624-1181　www.theaterx.jp[empty][empty]アクセス→http://www.theaterx.jp/access.php[empty][empty][empty]予約 3,000円　当日 3,500円[empty][empty][empty]予約・問い合わせ　ギャルリ雨　[empty][empty]Email : mutumimutum@gmail.com[empty][empty]TEL : 080-4616-9038[empty][empty]Facebook Messenger ［山本むつみ・ねいろNEIRO］からでも予約を受付けます。[empty][empty]メッセンジャーの場合、緊急時のご連絡先を明記してください。[empty][empty]＊イベントの参加予定ボタンはご予約にはなりません。[empty][empty][empty]制作　ギャルリ雨[empty][empty]提携　シアターXカイ[empty][empty][empty]ねいろ　[empty][empty]JIDAI氏にアートマイムを、大野慶人氏に舞踏を師事 2010年 ポーランド・ワルシャワへ渡りStefan Niedziałkowski 氏主宰のTeatr Szutki Mimuに所属 2012年 帰国後、大野一雄舞踏研究所での出会いより、妻の山本むつみと｢Duet 睦美寧呂(現在は むつみねいろ)｣として活動を始める 2016年 東京東墨田に「ギャルリ雨」を設立 ソロ作品に「cisza kwiatow/花静」(2012)「ねいろすーぱーらいと」(2019)  Tamar Borer (イスラエル) やJanne Hoem, Øystein Elle (ノルウェー)とも継続的に共同創作を行っている[empty][empty]www.mutstumineiro.com[empty][empty][empty]♢シアターXカイ新型コロナウィルス感染症対策ガイドラインに則り、万全の対策を施します。[empty][empty]・劇場内に入る前に手指の消毒、検温、マスク着用のご協力をお願い致します。[empty][empty]・体温が37.5度以上の場合、入場をお断りさせて頂きます。[empty][empty]・可能な限りの換気に務め、場内各所の消毒を随時行います。[empty][empty]・予約をしても当日に体調のすぐれない方は当日キャンセルを受付けます。必ずご連絡くださいますようお願い致します。[empty][empty][empty]ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー[empty][empty]Theater Xcai presents[empty][empty]NEIRO BOKUTOH KI-DANCE[empty][empty][empty]TAN TAN[empty][empty][empty]Breaking the shell, a baby colored「誕」ITSUWARI was born[empty][empty][empty][empty]I was carrying mystic feeling while looking at this Chinese character 「誕」.[empty][empty]There are three meanings written on the dictionary.[empty][empty][empty]1) make lie, betray 2) haphazard, self-indulgent 3) be born[empty][empty][empty]The essence of Mime Art Theater which I learnt in Poland was Counter Energy.[empty][empty]The late Yoshito Ohno’s Butoh was in between “Hollow” and “Real”.[empty][empty]Those two things which I was fascinated and was caring for were actually one thing, [empty][empty]and was beautifully marked in 「誕」.[empty][empty][empty]A great cosmological principle is spearing through me, and I live right now right here with full of antinomy. [empty][empty]This is my dance of 「誕」ITSUWARI.[empty][empty][empty]With a pray for blessing our days with new confusion.[empty][empty][empty][empty]Butoh | NEIRO[empty][empty][empty]TAN TAN Creative Team |[empty][empty]Masaru Soga, Masashi Usami,[empty][empty]Yoko Miyauchi, Hiroyoshi Takishima,[empty][empty]Tomooh Nozawa, Makiko Takamatsu,[empty][empty]Mutsumi Yamamoto[empty][empty][empty] Date and Time |[empty][empty]13(Fri) / 11/ 2020  Start 19:30[empty][empty]14(Sat)                　　    19:30  [empty][empty]15(Sun)               　       15:00[empty][empty]*Door opens 20 minutes before the show.[empty][empty][empty]Venue |Theater Xcai[empty][empty]            2-10-14 Ryogoku CITY CORE 1F,  Sumida, Tokyo, 130-0026[empty][empty]            TEL 03-5624-1181　www.theaterx.jp                 [empty][empty]            Access→http://www.theaterx.jp/access.php[empty][empty][empty]Charge | [empty][empty]3,000 Yen (In advance) 3,500Yen (At the door)[empty][empty][empty]Booking/Question | [empty][empty]Email : mutumimutum@gmail.com[empty][empty]TEL : 080-4616-9038 (Gallerie Ame)[empty][empty]Please write your name ,date, number of tickets, Email or post address, and phone number if possible.[empty][empty]Booking available also by ねいろNEIRO’s Facebook messenger.[empty][empty] * We don't count your "going" on our event page as your booking request.[empty][empty][empty]NEIRO[empty][empty]Lernt Art Mime from JIDAI, and Butoh from Yoshito Ohno. In 2010, went to Warsaw Poland for joining Stefan Niedziałkowski’s Teatr Szutki Mimu. In 2012, returned to Japan and started “ MUTSUMINEIRO” with his beloved wife Mutsumi Yamamoto from the first meeting at Kazuo Ohno Dance Studio. In 2016, established “Gallerie Ame” as their studio at Higashisumida, Tokyo. Continuously working with Tamar Borer (Israel) and Janne Hoem, Øystein Elle (Norway). Solo pieces as, cisza kwiatow (2012), NEIRO SUPERLIGHT (2019). www.mutsumineiro.com[empty][empty][empty][empty][We are following the Theater Xcai’s guide line for preventing the spread of infection of COVID-19][empty][empty]・We ask for your cooperation - Sanitize hands, check your temperature, wear mask.[empty][empty]・You cannot enter if your temperature is over 37.5℃。[empty][empty]・We take care for air ventilation as much as possible.[empty][empty]・We keep sanitizing inside of the theater.[empty][empty]・If you are not feeling well on the day, please inform us. We accept your cancellation.`,
  },
  {
    id: 10,
    url: "./上杉満代舞踏公演-迷宮伝説-.html",
    title: "上杉満代舞踏公演『迷宮伝説』",
    prenotes: "",
    img: [
      "https://static.wixstatic.com/media/1bc6ef_35fe6a5f33bb476fa55813e379329b6b~mv2.jpg/v1/fill/w_1584,h_2376,al_c,q_90/1bc6ef_35fe6a5f33bb476fa55813e379329b6b~mv2.webphttps://static.wixstatic.com/media/1bc6ef_67edf8a09da14d85871e576d56dfe0f2~mv2.png/v1/fill/w_302,h_454,al_c,lg_1,q_85,enc_avif,quality_auto/1bc6ef_67edf8a09da14d85871e576d56dfe0f2~mv2.png",
    ],
    text: `2020年4月、コロナ禍により中止をせざるを得なかった上杉満代舞踏公演『迷宮伝説』がいよいよ開幕いたします！[empty][empty]既に4月には完成していた作品ですが、コロナと共に更なる迷宮を深め、衣装から踊り全て練り直され、新たなる迷宮伝説と生まれ変わりました。[empty][empty][empty]出来る限り万全の感染予防対策をとり、スタッフ一同、お客様をお迎え致します。未だ不安の最中ではありますが、コロナ禍である2020年現在だからこそ生みなおされた迷宮伝説という作品。これからの世界の転換期に、象徴すべき儀式に参列するような会になること間違いないです。我こそはという一回限定40名様のみ！9月1日より受付開始致します！[empty][empty]（定員に達し次第、受付を終了致します。）[empty][empty][empty][empty]上杉満代 舞踏公演『迷宮伝説』[empty][empty][empty]失ワレシ楽園　否　ワタシハ夢想ヲ　耽溺スル者デ有ル[empty][empty][empty]舞踏者　上杉満代　高松真樹子　山本むつみ[empty][empty][empty]演出　上杉満代[empty][empty]照明　宇野敦子[empty][empty]音響　ねいろ[empty][empty]舞台監督　呂師[empty][empty][empty]■2020年 9月20日(日) 開演19:00【→満席になりました。ご予約受付を終了いたします。】[empty][empty]　　 9月21日(祝・月）開演14:00 / 開演19:00[empty][empty][※開場は開演の20分前となります。状況により時間を調整する場合があります。］[empty][empty][empty]■40名様限定予約　3500円[empty][empty]（定員になり次第予約受付を終了します）[empty][empty][empty][empty]■予約・問い合わせ[empty][empty][empty]お名前、日時、枚数、ご連絡先（メールか住所）、可能であれば携帯電話番号を明記の上、[empty][empty]ご予約ください。[empty][empty][empty]infomitsuyouesugi@gmail.com[empty][empty]080-5074-8471(高松）[empty][empty]ahiru@m8.dion.ne.jp(上杉)[empty][empty] [empty][empty]Facebook Messenger ［高松真樹子］からでも予約を受付けます。メッセンジャーの場合、[empty][empty]緊急時のご連絡先を明記してください。[empty][empty]＊イベントの参加予定ボタンはご予約にはなりません。[empty][empty][empty]■会場　テルプシコール(中野区中野3-49-15)[empty][empty]アクセス→ http://www.studioterpsichore.com/access.html[empty] [empty][empty]【新型コロナウイルス感染拡大予防対策について】[empty][empty]・会場内に入る前に手指の消毒、検温、マスク着用のご協力をお願い致します。[empty][empty]・体温が37.5度以上の場合、入場をお断りさせて頂きます。[empty][empty]・可能な限りの換気に務め、座席数を削減いたします。[empty][empty]・飲食の提供は致しません。[empty][empty]・予約をしても当日に体調のすぐれない方は当日キャンセルを受付けます。[empty][empty]必ずご連絡くださいますようお願い致します。[empty][empty]・上演時間　約1時間10分[empty][empty][empty]図：『夢の宇宙誌』澁澤龍彦著　美術出版社1964年図版より[empty][empty][empty][empty]▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪[empty][empty][empty]Mitsuyo Uesugi ButohPerformance[empty][empty][ Labyrinth Legend ][empty][empty][empty][empty]Paradise Lost, denied, I am still drowning reverie[empty][empty][empty][empty][empty]Butoh | Mitsuyo Uesugi,[empty][empty]Makiko Takamatsu,[empty][empty]Mutsumi Yamamoto[empty][empty][empty][empty]Direction | Mitsuyo Uesugi[empty][empty]Lighting technical | Atsuko Uno[empty][empty]Sound technical | Nejro[empty][empty]Stage manager | Roshi[empty][empty][empty]Date and time |[empty][empty]20(Sun) / 9/ 2020 Start 19:00[empty][empty]21(Mon,Holiday) 14:00 / 19:00[empty][empty][empty]*Door opens 20 minutes before the show. We may fix the time depends on the situation.[empty][empty][empty][empty]Charge |[empty][empty]3,500 Yen (In advance-lmited to 40 audiences for each performance)[empty][empty][empty][empty]Booking/Question |[empty][empty]Please write your name,date,time,number of tickets,mail or post address, and phone number if possible.[empty][empty][empty]*Booking starts from 1st September‼︎‼︎‼︎[empty][empty][empty]infomitsuyouesugi@gmail.com 080-5074-8471(Takamatsu） ahiru@m8.dion.ne.jp(Uesugi)[empty][empty][empty][empty]Booking available also by Makiko Takamatsu's Facebook messenger.[empty][empty][empty]* We don't count your "going" on our event page as your booking request.[empty][empty][empty][empty]Venue | TERPSICHORE[empty][empty]3-49-15(1F) Nakano, Nakano, Tokyo[empty][empty]http://www.studioterpsichore.com/access.html[empty][empty][empty][empty][Preventing the sperad of infection of COVID-19][empty][empty]・We ask for your cooperation - Sanitize hands, check your temperature, wear mask.[empty][empty]・You cannot enter if your temperature is over 37.5℃。[empty][empty]・We reduce audience seats and take care for air ventilation as much as possible.[empty][empty]・We don't serve drink and food.[empty][empty]・If you are not feeling well on the day, please inform us. We accept your cancellation.[empty][empty]・Performance will be about 1h10min long.[empty][empty][empty][empty]Graphic |[empty][empty]From [Cosmographia Fantastica][empty][empty](The first edition in 1964)[empty][empty]Author Tatsuhiko Shibusawa,[empty][empty]Published by Bijutsu shuppan-sha`,
  },
];

let postsPerPage = 5;
let currPage = 1;
const numOfPages = Math.ceil(newsData.length / postsPerPage);

const newsPagePrev = document.getElementById("news-page-prev");
const newsPageNext = document.getElementById("news-page-next");

const pageNumBtnsDiv = document.getElementById("pageNumBtnsDiv");

const renderPrevNextBtns = (pageNum) => {
  if (newsPagePrev) {
    newsPagePrev.addEventListener("click", (e) => {
      e.preventDefault;
      console.log("----------from page " + pageNum + " : prev button clicked");
      currPage -= 1;

      if (!newsPagePrev.disabled && currPage >= 1 && currPage <= numOfPages) {
        console.log(
          "----------page change to " + currPage + ", restarting page----------"
        );
        renderCurrPage(currPage);
        renderFeaturedPost();
        renderPageBtns(currPage);
      }
    });
  }

  if (newsPageNext) {
    newsPageNext.addEventListener("click", (e) => {
      e.preventDefault;
      console.log("----------from page " + pageNum + " : next button clicked");
      currPage += 1;

      if (!newsPageNext.disabled && currPage >= 1 && currPage <= numOfPages) {
        console.log(
          "----------page change to " + currPage + ", restarting page----------"
        );
        renderCurrPage(currPage);
        renderFeaturedPost();
        renderPageBtns(currPage);
      }
    });
  }

  if (singlePostPrevBtn) {
    singlePostPrevBtn.addEventListener("click", (e) => {
      e.preventDefault;
      console.log("----------from page " + pageNum + " : prev button clicked");
      if (
        !singlePostPrevBtn.disabled &&
        currSinglePost >= 1 &&
        currSinglePost <= newsData.length
      ) {
        currSinglePost -= 1;
        console.log("redirecting to new page: post id " + currSinglePost);
        document.location.href = newsData.find(
          (data) => data.id === currSinglePost
        ).url;
      }
    });
  }

  if (singlePostNextBtn) {
    singlePostNextBtn.addEventListener("click", (e) => {
      e.preventDefault;
      console.log("----------from page " + pageNum + " : next button clicked");
      if (
        !singlePostNextBtn.disabled &&
        currSinglePost >= 1 &&
        currSinglePost <= newsData.length
      ) {
        currSinglePost += 1;
        console.log("redirecting to new page: post id " + currSinglePost);
        document.location.href = newsData.find(
          (data) => data.id === currSinglePost
        ).url;
      }
    });
  }
};

const renderPageBtns = (pageNum) => {
  if (pageNumBtnsDiv) {
    console.log("-pageNumBtnsDiv detected");
    pageNumBtnsDiv.innerHTML = "";
    for (i = 1; i <= numOfPages; i++) {
      pageNumBtnsDiv.innerHTML += `<button class="pageNumBtn">${i}</button>`;
      console.log(i + "th pageNumber generated");
    }
  }

  const pageNumsBtns = document.querySelectorAll(".pageNumBtn");

  if (pageNumsBtns && pageNumsBtns.length > 0) {
    console.log(
      "---------pageNumsBtns addEventListener & updatePageBtnsColoring processing"
    );

    updatePageBtnsColoring(
      newsPageNext,
      newsPagePrev,
      pageNumsBtns,
      currPage,
      numOfPages
    );

    pageNumsBtns.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault;
        console.log("----------restarting page----------");
        console.log("--index of button pushed is " + index);
        console.log("from page " + pageNum + " :");
        currPage = index + 1;
        console.log("---------current page set to " + currPage);
        renderCurrPage(currPage);
        renderFeaturedPost();
        renderPageBtns(currPage);
      });
    });
  }
};

const newsDiv = document.getElementById("news-list");

const renderCurrPage = (pageNum) => {
  if (newsDiv) {
    const currPageEnd = pageNum * postsPerPage;
    const currPageStart = currPageEnd - postsPerPage + 1;
    console.log(
      "current page starts at post number " +
        currPageStart +
        " and ends at post number " +
        currPageEnd
    );
    const currPagesData = newsData.filter(
      (post) => post.id <= currPageEnd && post.id >= currPageStart
    );
    console.log(
      currPagesData
        ? `${currPagesData.length} posts successfully extracted for curr page`
        : false
    );

    newsDiv.innerHTML = "";
    console.log("news list cleared");

    currPagesData.forEach((post) => {
      console.log(
        "----checking the generated html link is: single-post/" +
          post.title.toLowerCase().replace(linkRegex, "-") +
          ".html"
      );
      console.log(
        "!!!!!!check if text includes [empty]: " +
          String(post.text).includes("[empty]")
      );
      newsDiv.innerHTML += `
            <a class="link-to-post" id = "link-to-post-id-${
              post.id
            }" href="single-post/${post.title
        .toLowerCase()
        .replace(linkRegex, "-")}.html" target="_blank">
                <div class="post-container" id="thumbnail-id-${post.id}">
                    <img class="thumbnail-img" src="${post.img}" alt="${
        post.title
      }">
                    <div class="post-segment">
                        <h3>${post.title}</h3>
                        <p>${String(post.text)
                          .replace(/\[empty\]/g, " ")
                          .slice(0, 100)}</p>
                    </div>
                </div>
            </a>
            `;
    });
  } else if (singlePostDiv) {
    const currSinglePostData = newsData.find((post) => post.id === pageNum);

    singlePostTitle.innerText = currSinglePostData.title;
    if (currSinglePostData.prenotes !== "") {
      console.log(
        "!!!!!!check if text includes [empty]: " +
          String(currSinglePostData.prenotes).includes("[empty]")
      );
      singlePostPrenote.innerHTML = String(currSinglePostData.prenotes).replace(
        /\[empty\]/g,
        "<br>"
      );
    } else {
      singlePostPrenote.style.display = "none";
    }
    currSinglePostData.img.forEach((link, index) => {
      singlePostImgs[index].src = link;
    });
    singlePostImgs.forEach((img) =>
      img.src === ""
        ? (img.style.display = "none")
        : (img.style.display = "block")
    );
    console.log(
      "!!!!!!check if text includes [empty]: " +
        String(currSinglePostData.text).includes("[empty]")
    );
    singlePostArticle.innerHTML = String(currSinglePostData.text).replace(
      /\[empty\]/g,
      "<br>"
    );
  }
};

const featuredDiv = document.getElementById("featured-posts");

const renderFeaturedPost = () => {
  if (featuredDiv && newsDiv) {
    const randomNum = Math.floor(Math.random() * newsData.length);
    const featuredPostData = newsData[randomNum];
    console.log("extracting the " + randomNum + "th post as featured");

    featuredDiv.innerHTML = "";
    featuredDiv.innerHTML = `
        <a class="link-to-post" id = "link-to-post-id-${
          featuredPostData.id
        }" href="single-post/${featuredPostData.title
      .toLowerCase()
      .replace(linkRegex, "-")}.html" target="_blank">
            <img id="featured-img" class="featured-img" src="${
              featuredPostData.img[0]
            }" alt="${featuredPostData.title}">
            <h3 class="featured-title" id="featured-title">${
              featuredPostData.title
            }</h3>
        </a>
        `;
  } else if (featuredDiv && singlePostDiv) {
    const randomNum = Math.floor(Math.random() * newsData.length);
    const featuredPostData = newsData[randomNum];
    console.log("extracting the " + randomNum + "th post as featured");

    featuredDiv.innerHTML = "";
    featuredDiv.innerHTML = `
        <a class="link-to-post" id = "link-to-post-id-${featuredPostData.id}" href="${featuredPostData.url}" target="_blank">
            <img id="featured-img" class="featured-img" src="${featuredPostData.img[0]}" alt="${featuredPostData.title}">
            <h3 class="featured-title" id="featured-title">${featuredPostData.title}</h3>
        </a>
        `;
  }
};

const updatePageBtnsColoring = (next, prev, nums, pageNum, totalNum) => {
  if (next && prev) {
    console.log(
      "--next and prev detected" +
        " and currPage/post is " +
        pageNum +
        ", and numOfPages is " +
        totalNum
    );
    if (pageNum === totalNum) {
      next.disabled = true;
      prev.disabled = false;
      next.classList.add("disabled");
      next.classList.remove("notcurr");
      prev.classList.remove("disabled");
      prev.classList.add("notcurr");
      console.log(
        "-therefore, current class list of next and prev is " +
          next.classList +
          " and " +
          prev.classList
      );
    } else if (pageNum === 1) {
      prev.disabled = true;
      next.disabled = false;
      prev.classList.add("disabled");
      prev.classList.remove("notcurr");
      next.classList.remove("disabled");
      next.classList.add("notcurr");
      console.log(
        "-therefore, current class list of next and prev is " +
          next.classList +
          " and " +
          prev.classList
      );
    } else {
      next.disabled = false;
      prev.disabled = false;
      next.classList.remove("disabled");
      next.classList.add("notcurr");
      prev.classList.remove("disabled");
      prev.classList.add("notcurr");
      console.log(
        "-therefore, current class list of next and prev is " +
          next.classList +
          " and " +
          prev.classList
      );
    }
  }

  if (nums && nums.length > 0) {
    console.log(
      "--" +
        nums.length +
        " nums detected" +
        " and currPage is " +
        pageNum +
        ",  numOfPages is " +
        totalNum
    );
    nums.forEach((btn, index) => {
      const btnNum = index + 1;

      if (btnNum === pageNum) {
        btn.classList.add("curr");
        btn.classList.remove("notcurr");
        btn.disabled = true;
      } else {
        btn.classList.remove("curr");
        btn.classList.add("notcurr");
        btn.disabled = false;
      }

      console.log(
        "-for the " +
          btnNum +
          "th pageNumBtn, classList after adjustment is " +
          btn.classList +
          " (check if .curr is there when page num is current page), and button status is " +
          btn.disabled +
          " (if true means it is disabled)"
      );
    });
  }
};

if (newsDiv) {
  document.addEventListener("DOMContentLoaded", () => {
    renderCurrPage(currPage);
    renderFeaturedPost();
    renderPageBtns(currPage);
    renderPrevNextBtns(currPage);
  });
}

/*Single post*/

const socialShareBtns = document.querySelectorAll(".share-social-icons a");
const socialShareLinks = [
  "https://www.facebook.com/sharer.php?u=",
  "https://twitter.com/intent/tweet?url=",
  "https://www.linkedin.com/shareArticle?url=",
];

const setUpSocialShare = () => {
  const currUrl = window.location.href;
  if (socialShareBtns) {
    socialShareBtns.forEach((btn, index) => {
      btn.href = `${socialShareLinks[index]}${currUrl}`;
      btn.target = "_blank";
    });
  }
};

const singlePostDiv = document.getElementById("single-post-container");
const singlePostTitle = document.getElementById("single-post-title");
const singlePostImgs = document.querySelectorAll(".single-post-img");
const singlePostArticle = document.getElementById("single-post-article");
const singlePostPrenote = document.getElementById("single-post-prenote");

let currSinglePost = 1; //get single post code from button in newws page//

const singlePostPrevBtn = document.getElementById("singlePost-page-prev");
const singlePostNextBtn = document.getElementById("singlePost-page-next");
const recentPostsDiv = document.getElementById("recent-posts");

let numOfRecentPosts = 5;

const renderRecentPosts = () => {
  if (recentPostsDiv) {
    const startingId = newsData.length - numOfRecentPosts;
    const endingId = newsData.length;
    const recentPostsData = newsData.slice(startingId - 1, endingId - 1);
    console.log(
      "extracting the " + `${startingId}th to ${endingId}` + "th post as recent"
    );

    recentPostsDiv.innerHTML = "";
    recentPostsData.forEach((post) => {
      recentPostsDiv.innerHTML += `
            <a class="link-to-post" id = "link-to-post-id-${post.id}"  href="${post.url}" target="_blank"><div class="recent-post-single">
                <img class="recent-img" src="${post.img[0]}" alt="${post.title}">
                <p class="recent-title">${post.title}</p>
            </div></a>
        `;
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (singlePostDiv) {
    const id = Number(
      document
        .querySelector(".single-post-body")
        .id.replace("single-post-id-", "")
    );
    console.log("DETECT CORRESPONDING TO POST ID " + id);
    currSinglePost = id;
    setUpSocialShare();
    renderCurrPage(currSinglePost);
    renderFeaturedPost();
    renderRecentPosts();
    renderPrevNextBtns(currSinglePost);
    updatePageBtnsColoring(
      singlePostNextBtn,
      singlePostPrevBtn,
      false,
      currSinglePost,
      newsData.length
    );
  }
});

document.querySelectorAll(".link-to-post").forEach((el) => {
  el.addEventListener("click", () => {
    const linkToId = Number(el.id.replace("link-to-post-id-", ""));
    currSinglePost = linkToId;
  });
});

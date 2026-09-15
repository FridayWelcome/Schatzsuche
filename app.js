const languageCards = document.querySelectorAll("#language-page .card");
const continueButton = document.querySelector("#continue-button");
const aboutContinueButton = document.querySelector("#about-continue-button");
const talentsContinueButton = document.querySelector("#talents-continue-button");
const talentGrid = document.querySelector("#talent-grid");

let selectedLanguage = "de";

const translations = {
    de: {
        title: "🌱 Schatzsuche",
        subtitle: "Menschen sehen. Talente entdecken. Gemeinschaft stärken.",
        welcome: "Jeder Mensch bringt Fähigkeiten, Erfahrungen und Talente mit. Gemeinsam möchten wir die Schätze unserer Gemeinschaft sichtbar machen.",
        chooseLanguage: "Sprache wählen",
        continueText: "Weiter",
        aboutTitle: "Über mich",
        nameLabel: "Name",
        cityLabel: "Stadt",
        countryLabel: "Herkunftsland",
        motherLanguageLabel: "Muttersprache",
        otherLanguagesLabel: "Weitere Sprachen",
        talentsTitle: "Was kann ich gut?",
        talentsHint: "Wähle alles aus, was zu dir passt.",
        talents: ["Handwerk", "Computer", "Kochen", "Garten", "Musik", "Fotografie", "Unterrichten", "Übersetzen", "Kinderbetreuung", "Kreativität"],
        hiddenTitle: "Verborgene Schätze",
        hiddenHint: "Manche Fähigkeiten werden nicht sofort gesehen.",
        overlookedLabel: "Welche Fähigkeit an dir wird oft übersehen?",
        proudLabel: "Worauf bist du stolz?",
        enjoyLabel: "Was machst du besonders gerne?"
    },
    en: {
        title: "🌱 Treasure Hunt",
        subtitle: "See people. Discover talents. Strengthen community.",
        welcome: "Every person brings abilities, experience and talents. Together, we want to make the treasures of our community visible.",
        chooseLanguage: "Choose your language",
        continueText: "Continue",
        aboutTitle: "About me",
        nameLabel: "Name",
        cityLabel: "City",
        countryLabel: "Country of origin",
        motherLanguageLabel: "Native language",
        otherLanguagesLabel: "Other languages",
        talentsTitle: "What am I good at?",
        talentsHint: "Choose everything that applies to you.",
        talents: ["Crafts", "Computers", "Cooking", "Gardening", "Music", "Photography", "Teaching", "Translating", "Childcare", "Creativity"],
        hiddenTitle: "Hidden treasures",
        hiddenHint: "Some abilities are not noticed immediately.",
        overlookedLabel: "Which of your abilities is often overlooked?",
        proudLabel: "What are you proud of?",
        enjoyLabel: "What do you especially enjoy doing?"
    },
    fr: {
        title: "🌱 Chasse aux trésors",
        subtitle: "Voir les personnes. Découvrir les talents. Renforcer la communauté.",
        welcome: "Chaque personne apporte des compétences, des expériences et des talents. Ensemble, nous voulons rendre visibles les trésors de notre communauté.",
        chooseLanguage: "Choisissez votre langue",
        continueText: "Continuer",
        aboutTitle: "À propos de moi",
        nameLabel: "Nom",
        cityLabel: "Ville",
        countryLabel: "Pays d’origine",
        motherLanguageLabel: "Langue maternelle",
        otherLanguagesLabel: "Autres langues",
        talentsTitle: "Qu’est-ce que je sais bien faire ?",
        talentsHint: "Choisissez tout ce qui vous correspond.",
        talents: ["Artisanat", "Informatique", "Cuisine", "Jardinage", "Musique", "Photographie", "Enseignement", "Traduction", "Garde d’enfants", "Créativité"],
        hiddenTitle: "Trésors cachés",
        hiddenHint: "Certaines compétences ne sont pas visibles immédiatement.",
        overlookedLabel: "Quelle compétence chez vous est souvent négligée ?",
        proudLabel: "De quoi êtes-vous fier ou fière ?",
        enjoyLabel: "Qu’aimez-vous particulièrement faire ?"
    },
    ar: {
        title: "🌱 البحث عن الكنوز",
        subtitle: "نرى الناس. نكتشف المواهب. نقوّي المجتمع.",
        welcome: "كل إنسان لديه مهارات وخبرات ومواهب. معًا نريد أن نجعل كنوز مجتمعنا مرئية.",
        chooseLanguage: "اختر لغتك",
        continueText: "متابعة",
        aboutTitle: "عني",
        nameLabel: "الاسم",
        cityLabel: "المدينة",
        countryLabel: "بلد الأصل",
        motherLanguageLabel: "اللغة الأم",
        otherLanguagesLabel: "لغات أخرى",
        talentsTitle: "ما الذي أجيده؟",
        talentsHint: "اختر كل ما ينطبق عليك.",
        talents: ["الحِرَف", "الكمبيوتر", "الطبخ", "البستنة", "الموسيقى", "التصوير", "التدريس", "الترجمة", "رعاية الأطفال", "الإبداع"],
        hiddenTitle: "كنوز مخفية",
        hiddenHint: "بعض المهارات لا يلاحظها الآخرون فورًا.",
        overlookedLabel: "ما المهارة التي لديك وغالبًا لا يلاحظها الآخرون؟",
        proudLabel: "بماذا تفتخر؟",
        enjoyLabel: "ما الذي تستمتع بفعله بشكل خاص؟"
    },
    uk: {
        title: "🌱 Пошук скарбів",
        subtitle: "Бачити людей. Відкривати таланти. Зміцнювати спільноту.",
        welcome: "Кожна людина має здібності, досвід і таланти. Разом ми хочемо зробити скарби нашої спільноти видимими.",
        chooseLanguage: "Оберіть мову",
        continueText: "Далі",
        aboutTitle: "Про мене",
        nameLabel: "Ім’я",
        cityLabel: "Місто",
        countryLabel: "Країна походження",
        motherLanguageLabel: "Рідна мова",
        otherLanguagesLabel: "Інші мови",
        talentsTitle: "Що я вмію добре?",
        talentsHint: "Оберіть усе, що вам підходить.",
        talents: ["Ремесло", "Комп’ютери", "Кулінарія", "Садівництво", "Музика", "Фотографія", "Викладання", "Переклад", "Догляд за дітьми", "Творчість"],
        hiddenTitle: "Приховані скарби",
        hiddenHint: "Деякі здібності помічають не відразу.",
        overlookedLabel: "Яку вашу здібність часто не помічають?",
        proudLabel: "Чим ви пишаєтеся?",
        enjoyLabel: "Що вам особливо подобається робити?"
    },
    tr: {
        title: "🌱 Hazine Avı",
        subtitle: "İnsanları görmek. Yetenekleri keşfetmek. Toplumu güçlendirmek.",
        welcome: "Her insanın becerileri, deneyimleri ve yetenekleri vardır. Birlikte toplumumuzun hazinelerini görünür kılmak istiyoruz.",
        chooseLanguage: "Dil seçin",
        continueText: "Devam",
        aboutTitle: "Hakkımda",
        nameLabel: "Ad",
        cityLabel: "Şehir",
        countryLabel: "Geldiğim ülke",
        motherLanguageLabel: "Ana dil",
        otherLanguagesLabel: "Diğer diller",
        talentsTitle: "Neyi iyi yapabilirim?",
        talentsHint: "Size uyan her şeyi seçin.",
        talents: ["El işleri", "Bilgisayar", "Yemek pişirme", "Bahçe işleri", "Müzik", "Fotoğrafçılık", "Öğretme", "Çeviri", "Çocuk bakımı", "Yaratıcılık"],
        hiddenTitle: "Gizli hazineler",
        hiddenHint: "Bazı beceriler hemen fark edilmez.",
        overlookedLabel: "Hangi beceriniz çoğu zaman gözden kaçıyor?",
        proudLabel: "Neyle gurur duyuyorsunuz?",
        enjoyLabel: "Özellikle ne yapmaktan hoşlanıyorsunuz?"
    },
    vi: {
        title: "🌱 Săn tìm kho báu",
        subtitle: "Nhìn thấy con người. Khám phá tài năng. Gắn kết cộng đồng.",
        welcome: "Mỗi người đều có kỹ năng, kinh nghiệm và tài năng. Cùng nhau, chúng ta muốn làm cho những kho báu trong cộng đồng trở nên rõ ràng hơn.",
        chooseLanguage: "Chọn ngôn ngữ",
        continueText: "Tiếp tục",
        aboutTitle: "Về tôi",
        nameLabel: "Tên",
        cityLabel: "Thành phố",
        countryLabel: "Quốc gia xuất xứ",
        motherLanguageLabel: "Tiếng mẹ đẻ",
        otherLanguagesLabel: "Các ngôn ngữ khác",
        talentsTitle: "Tôi giỏi làm gì?",
        talentsHint: "Chọn tất cả những gì phù hợp với bạn.",
        talents: ["Thủ công", "Máy tính", "Nấu ăn", "Làm vườn", "Âm nhạc", "Nhiếp ảnh", "Giảng dạy", "Phiên dịch", "Chăm sóc trẻ em", "Sáng tạo"],
        hiddenTitle: "Kho báu ẩn giấu",
        hiddenHint: "Một số khả năng không được nhận ra ngay lập tức.",
        overlookedLabel: "Khả năng nào của bạn thường bị bỏ qua?",
        proudLabel: "Bạn tự hào về điều gì?",
        enjoyLabel: "Bạn đặc biệt thích làm gì?"
    },
    ru: {
        title: "🌱 Поиск сокровищ",
        subtitle: "Видеть людей. Открывать таланты. Укреплять сообщество.",
        welcome: "У каждого человека есть способности, опыт и таланты. Вместе мы хотим сделать сокровища нашего сообщества видимыми.",
        chooseLanguage: "Выберите язык",
        continueText: "Продолжить",
        aboutTitle: "Обо мне",
        nameLabel: "Имя",
        cityLabel: "Город",
        countryLabel: "Страна происхождения",
        motherLanguageLabel: "Родной язык",
        otherLanguagesLabel: "Другие языки",
        talentsTitle: "Что я умею делать хорошо?",
        talentsHint: "Выберите всё, что вам подходит.",
        talents: ["Ремесло", "Компьютеры", "Кулинария", "Садоводство", "Музыка", "Фотография", "Преподавание", "Перевод", "Уход за детьми", "Творчество"],
        hiddenTitle: "Скрытые сокровища",
        hiddenHint: "Некоторые способности замечают не сразу.",
        overlookedLabel: "Какую вашу способность часто не замечают?",
        proudLabel: "Чем вы гордитесь?",
        enjoyLabel: "Что вам особенно нравится делать?"
    }
};

const talentIcons = ["🔧", "💻", "👨‍🍳", "🌱", "🎵", "📷", "👩‍🏫", "🗣", "👶", "🎨"];

function renderTalents(language) {
    talentGrid.innerHTML = "";

    translations[language].talents.forEach((name, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "card";
        button.innerHTML = `
            <div class="flags">${talentIcons[index]}</div>
            <div class="language-name">${name}</div>
        `;

        button.addEventListener("click", () => {
            button.classList.toggle("selected");
        });

        talentGrid.appendChild(button);
    });
}

function applyLanguage(language) {
    selectedLanguage = language;
    const text = translations[language];

    document.querySelector(".hero h1").textContent = text.title;
    document.querySelector(".subtitle").textContent = text.subtitle;
    document.querySelector(".welcome").textContent = text.welcome;
    document.querySelector("#language-heading").textContent = text.chooseLanguage;

    continueButton.textContent = text.continueText;
    continueButton.hidden = false;

    document.querySelector("#about-title").textContent = text.aboutTitle;
    document.querySelector("#name-label").textContent = text.nameLabel;
    document.querySelector("#city-label").textContent = text.cityLabel;
    document.querySelector("#country-label").textContent = text.countryLabel;
    document.querySelector("#mother-language-label").textContent = text.motherLanguageLabel;
    document.querySelector("#other-languages-label").textContent = text.otherLanguagesLabel;
    aboutContinueButton.textContent = text.continueText;

    document.querySelector("#talents-title").textContent = text.talentsTitle;
    document.querySelector("#talents-hint").textContent = text.talentsHint;
    talentsContinueButton.textContent = text.continueText;
    renderTalents(language);

    document.querySelector("#hidden-treasures-title").textContent = text.hiddenTitle;
    document.querySelector("#hidden-treasures-hint").textContent = text.hiddenHint;
    document.querySelector("#overlooked-label").textContent = text.overlookedLabel;
    document.querySelector("#proud-label").textContent = text.proudLabel;
    document.querySelector("#enjoy-label").textContent = text.enjoyLabel;

    document.documentElement.lang = language;
    document.body.classList.toggle("arabic", language === "ar");
}

languageCards.forEach((card) => {
    card.addEventListener("click", () => {
        languageCards.forEach((otherCard) => {
            otherCard.classList.remove("selected");
        });

        card.classList.add("selected");
        applyLanguage(card.dataset.language);
    });
});

continueButton.addEventListener("click", () => {
    document.querySelector("#language-page").hidden = true;
    document.querySelector("#about-page").hidden = false;
});

aboutContinueButton.addEventListener("click", () => {
    document.querySelector("#about-page").hidden = true;
    document.querySelector("#talents-page").hidden = false;
});

talentsContinueButton.addEventListener("click", () => {
    document.querySelector("#talents-page").hidden = true;
    document.querySelector("#hidden-treasures-page").hidden = false;
});

renderTalents(selectedLanguage);

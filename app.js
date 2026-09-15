const languageCards = document.querySelectorAll(".card");
const continueButton = document.querySelector("#continue-button");
const aboutContinueButton = document.querySelector("#about-continue-button");
const talentGrid = document.querySelector("#talent-grid");

const talents = [
    { icon: "🔧", name: "Handwerk" },
    { icon: "💻", name: "Computer" },
    { icon: "👨‍🍳", name: "Kochen" },
    { icon: "🌱", name: "Garten" },
    { icon: "🎵", name: "Musik" },
    { icon: "📷", name: "Fotografie" },
    { icon: "👩‍🏫", name: "Unterrichten" },
    { icon: "🗣", name: "Übersetzen" },
    { icon: "👶", name: "Kinderbetreuung" },
    { icon: "🎨", name: "Kreativität" }
];

talents.forEach((talent) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "card";
    button.innerHTML = `
        <div class="flags">${talent.icon}</div>
        <div class="language-name">${talent.name}</div>
    `;

    button.addEventListener("click", () => {
        button.classList.toggle("selected");
    });

    talentGrid.appendChild(button);
});

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
        talentsTitle: "Was kann ich gut?"
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
        talentsTitle: "What am I good at?"
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
        talentsTitle: "Qu’est-ce que je sais bien faire ?"
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
        talentsTitle: "ما الذي أجيده؟"
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
        talentsTitle: "Що я вмію добре?"
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
        talentsTitle: "Neyi iyi yapabilirim?"
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
        talentsTitle: "Tôi giỏi làm gì?"
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
        talentsTitle: "Что я умею делать хорошо?"
    }
};

languageCards.forEach((card) => {
    card.addEventListener("click", () => {
        const language = card.dataset.language;
        const text = translations[language];

        languageCards.forEach((otherCard) => {
            otherCard.classList.remove("selected");
        });

        card.classList.add("selected");

        document.querySelector(".hero h1").textContent = text.title;
        document.querySelector(".subtitle").textContent = text.subtitle;
        document.querySelector(".welcome").textContent = text.welcome;
        document.querySelector("#language-heading").textContent =
            text.chooseLanguage;

        continueButton.textContent = text.continueText;
        continueButton.hidden = false;

        document.querySelector("#about-title").textContent =
            text.aboutTitle;
        document.querySelector("#name-label").textContent =
            text.nameLabel;
        document.querySelector("#city-label").textContent =
            text.cityLabel;
        document.querySelector("#country-label").textContent =
            text.countryLabel;
        document.querySelector("#mother-language-label").textContent =
            text.motherLanguageLabel;
        document.querySelector("#other-languages-label").textContent =
            text.otherLanguagesLabel;

        aboutContinueButton.textContent = text.continueText;

        document.querySelector("#talents-title").textContent =
            text.talentsTitle;

        document.documentElement.lang = language;
        document.body.classList.toggle(
            "arabic",
            language === "ar"
        );
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

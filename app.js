const languageCards = document.querySelectorAll("#language-page .card");
const continueButton = document.querySelector("#continue-button");
const aboutContinueButton = document.querySelector("#about-continue-button");
const talentsContinueButton = document.querySelector("#talents-continue-button");
const hiddenContinueButton = document.querySelector("#hidden-continue-button");
const supportContinueButton = document.querySelector("#support-continue-button");
const aboutBackButton = document.querySelector("#about-back-button");
const talentsBackButton = document.querySelector("#talents-back-button");
const hiddenBackButton = document.querySelector("#hidden-back-button");
const supportBackButton = document.querySelector("#support-back-button");
const summaryBackButton = document.querySelector("#summary-back-button");
const talentGrid = document.querySelector("#talent-grid");

let selectedLanguage = "de";

const translations = {
    de: {
        title: "🌱 Schatzsuche",
        subtitle: "Menschen sehen. Talente entdecken. Gemeinschaft stärken.",
        welcome: "Jeder Mensch bringt Fähigkeiten, Erfahrungen und Talente mit. Gemeinsam möchten wir die Schätze unserer Gemeinschaft sichtbar machen.",
        chooseLanguage: "Sprache wählen",
        continueText: "Weiter",
        backText: "Zurück",
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
        enjoyLabel: "Was machst du besonders gerne?",
        supportTitle: "Helfen und Unterstützung",
        supportHint: "Gemeinschaft entsteht, wenn Menschen geben und Unterstützung annehmen können.",
        canHelpLabel: "Ich kann helfen bei …",
        needHelpLabel: "Ich wünsche Unterstützung bei …",
        summaryTitle: "Zusammenfassung",
        summaryHint: "Hier siehst du deine bisherigen Angaben.",
        personalSection: "Persönliche Angaben",
        talentsSection: "Ausgewählte Talente",
        treasuresSection: "Verborgene Schätze",
        supportSection: "Helfen und Unterstützung",
        emptyText: "Keine Angabe"
    },
    en: {
        title: "🌱 Treasure Hunt",
        subtitle: "See people. Discover talents. Strengthen community.",
        welcome: "Every person brings abilities, experience and talents. Together, we want to make the treasures of our community visible.",
        chooseLanguage: "Choose your language",
        continueText: "Continue",
        backText: "Back",
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
        enjoyLabel: "What do you especially enjoy doing?",
        supportTitle: "Helping and support",
        supportHint: "Community grows when people can give help and receive support.",
        canHelpLabel: "I can help with …",
        needHelpLabel: "I would like support with …",
        summaryTitle: "Summary",
        summaryHint: "Here you can see the information you have entered.",
        personalSection: "Personal information",
        talentsSection: "Selected talents",
        treasuresSection: "Hidden treasures",
        supportSection: "Helping and support",
        emptyText: "No information provided"
    },
    fr: {
        title: "🌱 Chasse aux trésors",
        subtitle: "Voir les personnes. Découvrir les talents. Renforcer la communauté.",
        welcome: "Chaque personne apporte des compétences, des expériences et des talents. Ensemble, nous voulons rendre visibles les trésors de notre communauté.",
        chooseLanguage: "Choisissez votre langue",
        continueText: "Continuer",
        backText: "Retour",
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
        enjoyLabel: "Qu’aimez-vous particulièrement faire ?",
        supportTitle: "Aide et soutien",
        supportHint: "La communauté grandit lorsque les personnes peuvent aider et recevoir du soutien.",
        canHelpLabel: "Je peux aider pour …",
        needHelpLabel: "J’aimerais recevoir de l’aide pour …",
        summaryTitle: "Résumé",
        summaryHint: "Vous pouvez voir ici les informations que vous avez saisies.",
        personalSection: "Informations personnelles",
        talentsSection: "Talents sélectionnés",
        treasuresSection: "Trésors cachés",
        supportSection: "Aide et soutien",
        emptyText: "Aucune information"
    },
    ar: {
        title: "🌱 البحث عن الكنوز",
        subtitle: "نرى الناس. نكتشف المواهب. نقوّي المجتمع.",
        welcome: "كل إنسان لديه مهارات وخبرات ومواهب. معًا نريد أن نجعل كنوز مجتمعنا مرئية.",
        chooseLanguage: "اختر لغتك",
        continueText: "متابعة",
        backText: "رجوع",
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
        enjoyLabel: "ما الذي تستمتع بفعله بشكل خاص؟",
        supportTitle: "المساعدة والدعم",
        supportHint: "ينمو المجتمع عندما يستطيع الناس تقديم المساعدة وتلقي الدعم.",
        canHelpLabel: "يمكنني المساعدة في …",
        needHelpLabel: "أرغب في الحصول على دعم في …",
        summaryTitle: "الملخص",
        summaryHint: "هنا يمكنك رؤية المعلومات التي أدخلتها.",
        personalSection: "المعلومات الشخصية",
        talentsSection: "المواهب المختارة",
        treasuresSection: "الكنوز المخفية",
        supportSection: "المساعدة والدعم",
        emptyText: "لا توجد معلومات"
    },
    uk: {
        title: "🌱 Пошук скарбів",
        subtitle: "Бачити людей. Відкривати таланти. Зміцнювати спільноту.",
        welcome: "Кожна людина має здібності, досвід і таланти. Разом ми хочемо зробити скарби нашої спільноти видимими.",
        chooseLanguage: "Оберіть мову",
        continueText: "Далі",
        backText: "Назад",
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
        enjoyLabel: "Що вам особливо подобається робити?",
        supportTitle: "Допомога та підтримка",
        supportHint: "Спільнота розвивається, коли люди можуть допомагати й отримувати підтримку.",
        canHelpLabel: "Я можу допомогти з …",
        needHelpLabel: "Мені потрібна підтримка з …",
        summaryTitle: "Підсумок",
        summaryHint: "Тут ви можете переглянути введені дані.",
        personalSection: "Особисті дані",
        talentsSection: "Обрані таланти",
        treasuresSection: "Приховані скарби",
        supportSection: "Допомога та підтримка",
        emptyText: "Немає даних"
    },
    tr: {
        title: "🌱 Hazine Avı",
        subtitle: "İnsanları görmek. Yetenekleri keşfetmek. Toplumu güçlendirmek.",
        welcome: "Her insanın becerileri, deneyimleri ve yetenekleri vardır. Birlikte toplumumuzun hazinelerini görünür kılmak istiyoruz.",
        chooseLanguage: "Dil seçin",
        continueText: "Devam",
        backText: "Geri",
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
        enjoyLabel: "Özellikle ne yapmaktan hoşlanıyorsunuz?",
        supportTitle: "Yardım ve destek",
        supportHint: "İnsanlar yardım edip destek alabildiğinde toplum güçlenir.",
        canHelpLabel: "Şu konularda yardımcı olabilirim …",
        needHelpLabel: "Şu konularda destek istiyorum …",
        summaryTitle: "Özet",
        summaryHint: "Girdiğiniz bilgileri burada görebilirsiniz.",
        personalSection: "Kişisel bilgiler",
        talentsSection: "Seçilen yetenekler",
        treasuresSection: "Gizli hazineler",
        supportSection: "Yardım ve destek",
        emptyText: "Bilgi girilmedi"
    },
    vi: {
        title: "🌱 Săn tìm kho báu",
        subtitle: "Nhìn thấy con người. Khám phá tài năng. Gắn kết cộng đồng.",
        welcome: "Mỗi người đều có kỹ năng, kinh nghiệm và tài năng. Cùng nhau, chúng ta muốn làm cho những kho báu trong cộng đồng trở nên rõ ràng hơn.",
        chooseLanguage: "Chọn ngôn ngữ",
        continueText: "Tiếp tục",
        backText: "Quay lại",
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
        enjoyLabel: "Bạn đặc biệt thích làm gì?",
        supportTitle: "Giúp đỡ và hỗ trợ",
        supportHint: "Cộng đồng phát triển khi mọi người có thể giúp đỡ và nhận hỗ trợ.",
        canHelpLabel: "Tôi có thể giúp về …",
        needHelpLabel: "Tôi mong muốn được hỗ trợ về …",
        summaryTitle: "Tóm tắt",
        summaryHint: "Tại đây bạn có thể xem thông tin đã nhập.",
        personalSection: "Thông tin cá nhân",
        talentsSection: "Tài năng đã chọn",
        treasuresSection: "Kho báu ẩn giấu",
        supportSection: "Giúp đỡ và hỗ trợ",
        emptyText: "Chưa có thông tin"
    },
    ru: {
        title: "🌱 Поиск сокровищ",
        subtitle: "Видеть людей. Открывать таланты. Укреплять сообщество.",
        welcome: "У каждого человека есть способности, опыт и таланты. Вместе мы хотим сделать сокровища нашего сообщества видимыми.",
        chooseLanguage: "Выберите язык",
        continueText: "Продолжить",
        backText: "Назад",
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
        enjoyLabel: "Что вам особенно нравится делать?",
        supportTitle: "Помощь и поддержка",
        supportHint: "Сообщество развивается, когда люди могут помогать и получать поддержку.",
        canHelpLabel: "Я могу помочь с …",
        needHelpLabel: "Мне нужна поддержка с …",
        summaryTitle: "Итоги",
        summaryHint: "Здесь вы можете увидеть введённые данные.",
        personalSection: "Личные данные",
        talentsSection: "Выбранные таланты",
        treasuresSection: "Скрытые сокровища",
        supportSection: "Помощь и поддержка",
        emptyText: "Нет данных"
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
    hiddenContinueButton.textContent = text.continueText;

    document.querySelector("#support-title").textContent = text.supportTitle;
    document.querySelector("#support-hint").textContent = text.supportHint;
    document.querySelector("#can-help-label").textContent = text.canHelpLabel;
    document.querySelector("#need-help-label").textContent = text.needHelpLabel;
    supportContinueButton.textContent = text.continueText;
    aboutBackButton.textContent = text.backText;
    talentsBackButton.textContent = text.backText;
    hiddenBackButton.textContent = text.backText;
    supportBackButton.textContent = text.backText;
    summaryBackButton.textContent = text.backText;

    document.querySelector("#summary-title").textContent = text.summaryTitle;
    document.querySelector("#summary-hint").textContent = text.summaryHint;

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

hiddenContinueButton.addEventListener("click", () => {
    document.querySelector("#hidden-treasures-page").hidden = true;
    document.querySelector("#support-page").hidden = false;
});

supportContinueButton.addEventListener("click", () => {
    const text = translations[selectedLanguage];
    const valueOrEmpty = (selector) => document.querySelector(selector).value.trim() || text.emptyText;
    const selectedTalents = [...talentGrid.querySelectorAll(".card.selected .language-name")]
        .map((item) => item.textContent)
        .join(", ") || text.emptyText;

    document.querySelector("#summary-content").innerHTML = `
        <section class="summary-section">
            <h2>${text.personalSection}</h2>
            <p><strong>${text.nameLabel}:</strong> ${valueOrEmpty("#name")}</p>
            <p><strong>${text.cityLabel}:</strong> ${valueOrEmpty("#city")}</p>
            <p><strong>${text.countryLabel}:</strong> ${valueOrEmpty("#country")}</p>
            <p><strong>${text.motherLanguageLabel}:</strong> ${valueOrEmpty("#mother-language")}</p>
            <p><strong>${text.otherLanguagesLabel}:</strong> ${valueOrEmpty("#other-languages")}</p>
        </section>
        <section class="summary-section">
            <h2>${text.talentsSection}</h2>
            <p>${selectedTalents}</p>
        </section>
        <section class="summary-section">
            <h2>${text.treasuresSection}</h2>
            <p><strong>${text.overlookedLabel}</strong><br>${valueOrEmpty("#overlooked-skill")}</p>
            <p><strong>${text.proudLabel}</strong><br>${valueOrEmpty("#proud-of")}</p>
            <p><strong>${text.enjoyLabel}</strong><br>${valueOrEmpty("#enjoy-doing")}</p>
        </section>
        <section class="summary-section">
            <h2>${text.supportSection}</h2>
            <p><strong>${text.canHelpLabel}</strong><br>${valueOrEmpty("#can-help")}</p>
            <p><strong>${text.needHelpLabel}</strong><br>${valueOrEmpty("#need-help")}</p>
        </section>
    `;

    document.querySelector("#support-page").hidden = true;
    document.querySelector("#summary-page").hidden = false;
});


aboutBackButton.addEventListener("click", () => {
    document.querySelector("#about-page").hidden = true;
    document.querySelector("#language-page").hidden = false;
});

talentsBackButton.addEventListener("click", () => {
    document.querySelector("#talents-page").hidden = true;
    document.querySelector("#about-page").hidden = false;
});

hiddenBackButton.addEventListener("click", () => {
    document.querySelector("#hidden-treasures-page").hidden = true;
    document.querySelector("#talents-page").hidden = false;
});

supportBackButton.addEventListener("click", () => {
    document.querySelector("#support-page").hidden = true;
    document.querySelector("#hidden-treasures-page").hidden = false;
});

summaryBackButton.addEventListener("click", () => {
    document.querySelector("#summary-page").hidden = true;
    document.querySelector("#support-page").hidden = false;
});

renderTalents(selectedLanguage);

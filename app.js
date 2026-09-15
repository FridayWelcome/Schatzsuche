const languageCards = document.querySelectorAll(".card");

const translations = {
    de: {
        subtitle: "Menschen sehen. Talente entdecken. Gemeinschaft stärken.",
        welcome: "Jeder Mensch bringt Fähigkeiten, Erfahrungen und Talente mit. Gemeinsam möchten wir die Schätze unserer Gemeinschaft sichtbar machen.",
        chooseLanguage: "Sprache wählen"
    },
    en: {
        subtitle: "See people. Discover talents. Strengthen community.",
        welcome: "Every person brings abilities, experience and talents. Together, we want to make the treasures of our community visible.",
        chooseLanguage: "Choose your language"
    },
    fr: {
        subtitle: "Voir les personnes. Découvrir les talents. Renforcer la communauté.",
        welcome: "Chaque personne apporte des compétences, des expériences et des talents. Ensemble, nous voulons rendre visibles les trésors de notre communauté.",
        chooseLanguage: "Choisissez votre langue"
    },
    ar: {
        subtitle: "نرى الناس. نكتشف المواهب. نقوّي المجتمع.",
        welcome: "كل إنسان لديه مهارات وخبرات ومواهب. معًا نريد أن نجعل كنوز مجتمعنا مرئية.",
        chooseLanguage: "اختر لغتك"
    },
    uk: {
        subtitle: "Бачити людей. Відкривати таланти. Зміцнювати спільноту.",
        welcome: "Кожна людина має здібності, досвід і таланти. Разом ми хочемо зробити скарби нашої спільноти видимими.",
        chooseLanguage: "Оберіть мову"
    },
    tr: {
        subtitle: "İnsanları görmek. Yetenekleri keşfetmek. Toplumu güçlendirmek.",
        welcome: "Her insanın becerileri, deneyimleri ve yetenekleri vardır. Birlikte toplumumuzun hazinelerini görünür kılmak istiyoruz.",
        chooseLanguage: "Dil seçin"
    },
    vi: {
        subtitle: "Nhìn thấy con người. Khám phá tài năng. Gắn kết cộng đồng.",
        welcome: "Mỗi người đều có kỹ năng, kinh nghiệm và tài năng. Cùng nhau, chúng ta muốn làm cho những kho báu trong cộng đồng trở nên rõ ràng hơn.",
        chooseLanguage: "Chọn ngôn ngữ"
    },
    ru: {
        subtitle: "Видеть людей. Открывать таланты. Укреплять сообщество.",
        welcome: "У каждого человека есть способности, опыт и таланты. Вместе мы хотим сделать сокровища нашего сообщества видимыми.",
        chooseLanguage: "Выберите язык"
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

        document.querySelector(".subtitle").textContent = text.subtitle;
        document.querySelector(".welcome").textContent = text.welcome;
        document.querySelector("h2").textContent = text.chooseLanguage;

        document.documentElement.lang = language;
        document.body.classList.toggle("arabic", language === "ar");
    });
});

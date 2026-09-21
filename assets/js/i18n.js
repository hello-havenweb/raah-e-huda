/*
========================================
RAAH-E-HUDA - INTERNATIONALIZATION (i18n)
Multi-Language Support: EN / UR / AR
========================================

FEATURES:
- Complete translations stored in TRANSLATIONS object
- Automatic text replacement via data-i18n attributes
- Attribute translation support (placeholder, aria-label, etc.)
- Fallback to English when translation missing
- Language persistence in localStorage
- RTL direction switching for UR/AR
- Font family switching per language

USAGE:
- Add data-i18n="key.path" to any element
- Add data-i18n-attr="attrName:key.path" for attributes
- Call applyTranslations() after language change

NO EXTERNAL JSON FILES - ALL TRANSLATIONS INLINE
========================================
*/

// ========================================
// TRANSLATIONS OBJECT
// ========================================
const TRANSLATIONS = {
    en: {
        // Accessibility
        accessibility: {
            skipToContent: "Skip to main content"
        },
        
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            privacy: "Privacy",
            terms: "Terms",
            login: "Login",
            logout: "Logout",
            languageMenu: "Language Menu",
            menuToggle: "Toggle Menu"
        },
        
        // Hero Section
        hero: {
            subtitle: "The Path of Guidance",
            tagline: "Authentic Dars-e-Qur'an & Islamic Speeches by Dr. Israr Ahmad",
            description: "Embark on a transformative journey through the Qur'an and Islamic knowledge. Our channel preserves and shares the profound teachings of Dr. Israr Ahmad, offering deep insights into faith, spirituality, and righteous living. Each dars is a step toward understanding Allah's message and implementing it in our daily lives.",
            watchYoutube: "Watch on YouTube",
            exploreTopics: "Explore Topics"
        },
        
        // Latest Uploads
        latestUploads: {
            label: "Recent Content",
            title: "Latest Uploads",
            description: "Explore our most recent dars and Islamic speeches. Each video offers timeless wisdom and practical guidance for modern Muslims seeking to strengthen their faith.",
            video1: {
                title: "Understanding Surah Al-Baqarah",
                description: "Deep dive into the verses of guidance and wisdom"
            },
            video2: {
                title: "Tafsir: Signs of the Last Day",
                description: "Prophetic insights into the end times"
            },
            video3: {
                title: "The Concept of Tawheed",
                description: "Foundation of Islamic monotheism explained"
            },
            video4: {
                title: "Seerah: The Makkan Period",
                description: "Early years of Prophet Muhammad ﷺ"
            },
            video5: {
                title: "Purification of the Soul",
                description: "Journey of spiritual cleansing and growth"
            },
            video6: {
                title: "Islamic Economics & Justice",
                description: "The Qur'anic model for social equity"
            },
            watchBtn: "Watch Now"
        },
        
        // Topics Section
        topics: {
            label: "Knowledge Areas",
            title: "Featured Topics & Playlists",
            description: "Navigate through comprehensive collections of Islamic knowledge. Each topic is curated to provide structured learning and spiritual growth.",
            quran: {
                title: "Dars-e-Qur'an",
                description: "Comprehensive verse-by-verse explanations and thematic studies of the Holy Qur'an, unveiling divine wisdom and practical applications."
            },
            seerah: {
                title: "Seerah & History",
                description: "Learn from the blessed life of Prophet Muhammad ﷺ and the early Islamic civilization—examples of mercy, courage, and unwavering faith."
            },
            iman: {
                title: "Iman & Aqeedah",
                description: "Strengthen your belief system through deep understanding of the pillars of faith, oneness of Allah, and core Islamic creed."
            },
            tazkiyah: {
                title: "Tazkiyah & Spirituality",
                description: "Purify your soul through self-reflection, remembrance of Allah, and spiritual practices that bring inner peace and closeness to the Divine."
            },
            akhlaq: {
                title: "Akhlaq & Character",
                description: "Develop noble character traits, ethical conduct, and beautiful manners inspired by the Prophetic example and Qur'anic teachings."
            },
            dawah: {
                title: "Dawah & Community",
                description: "Understand the methods and wisdom of inviting others to Islam and building a righteous community rooted in justice and compassion."
            },
            exploreBtn: "Explore"
        },
        
        // Why Section
        why: {
            label: "Our Distinction",
            title: "Why RAAH-E-HUDA",
            description: "We are committed to presenting authentic, unaltered Islamic knowledge that empowers believers to live purposeful lives guided by the Qur'an and Sunnah.",
            feature1: {
                title: "Authentic Scholarship",
                description: "Every dars is rooted in classical scholarship and delivered by Dr. Israr Ahmad, a renowned scholar known for his deep Qur'anic insights."
            },
            feature2: {
                title: "Comprehensive Coverage",
                description: "From Tafsir to Fiqh, Seerah to spirituality—access a complete library of Islamic knowledge organized for easy learning."
            },
            feature3: {
                title: "Timeless & Relevant",
                description: "Though delivered years ago, these teachings remain profoundly relevant, addressing contemporary challenges with Qur'anic wisdom."
            },
            feature4: {
                title: "Free & Accessible",
                description: "Knowledge is a trust. We provide all content freely, ensuring that no financial barrier stands between seekers and guidance."
            }
        },
        
        // About Snapshot
        aboutSnapshot: {
            label: "Our Mission",
            title: "Illuminating the Path of Truth",
            text: "RAAH-E-HUDA exists to preserve and disseminate the teachings of Dr. Israr Ahmad—a visionary scholar who dedicated his life to reviving the Qur'an as a living guide. We believe that authentic Islamic knowledge transforms hearts, families, and societies. Through carefully curated content, we aim to connect modern Muslims with the profound wisdom of the Qur'an and the beautiful example of the Prophet Muhammad ﷺ. Our goal is not just to inform, but to inspire a generation of believers who live with purpose, integrity, and devotion.",
            learnMore: "Learn More About Us"
        },
        
        // Footer
        footer: {
            tagline: "Illuminating hearts with divine guidance",
            quickLinks: "Quick Links",
            resources: "Resources",
            legal: "Legal",
            connect: "Connect",
            newsletter: "Stay Updated",
            newsletterText: "Get notifications about new content and community updates",
            emailPlaceholder: "Enter your email",
            subscribeBtn: "Subscribe",
            copyright: "© 2025 RAAH-E-HUDA. All rights reserved.",
            madeWith: "Made with",
            and: "and",
            dedication: "dedication to Islamic knowledge"
        },
        
        // Common/Shared
        common: {
            loading: "Loading...",
            error: "An error occurred",
            retry: "Retry",
            close: "Close",
            readMore: "Read More",
            viewAll: "View All",
            search: "Search",
            filter: "Filter",
            sort: "Sort",
            share: "Share",
            download: "Download",
            play: "Play",
            pause: "Pause",
            next: "Next",
            previous: "Previous"
        }
    },
    
    ur: {
        // Accessibility
        accessibility: {
            skipToContent: "مرکزی مواد پر جائیں"
        },
        
        // Navigation
        nav: {
            home: "ہوم",
            about: "ہمارے بارے میں",
            privacy: "رازداری",
            terms: "شرائط",
            login: "لاگ ان",
            logout: "لاگ آؤٹ",
            languageMenu: "زبان کا مینو",
            menuToggle: "مینو ٹوگل کریں"
        },
        
        // Hero Section
        hero: {
            subtitle: "راہِ ہدایت",
            tagline: "ڈاکٹر اسرار احمد کے مستند درسِ قرآن اور اسلامی خطبات",
            description: "قرآن اور اسلامی علم کے ذریعے ایک تبدیلی کے سفر پر روانہ ہوں۔ ہمارا چینل ڈاکٹر اسرار احمد کی گہری تعلیمات کو محفوظ اور شیئر کرتا ہے، جو ایمان، روحانیت اور نیک زندگی میں گہری بصیرت پیش کرتے ہیں۔ ہر درس اللہ کے پیغام کو سمجھنے اور اپنی روزمرہ زندگی میں اس پر عمل کرنے کی طرف ایک قدم ہے۔",
            watchYoutube: "یوٹیوب پر دیکھیں",
            exploreTopics: "عنوانات دریافت کریں"
        },
        
        // Latest Uploads
        latestUploads: {
            label: "حالیہ مواد",
            title: "تازہ اپ لوڈز",
            description: "ہمارے تازہ ترین دروس اور اسلامی خطبات دریافت کریں۔ ہر ویڈیو لازوال حکمت اور جدید مسلمانوں کے لیے عملی رہنمائی پیش کرتی ہے جو اپنے ایمان کو مضبوط کرنا چاہتے ہیں۔",
            video1: {
                title: "سورہ البقرہ کو سمجھنا",
                description: "ہدایت اور حکمت کی آیات میں گہرائی"
            },
            video2: {
                title: "تفسیر: قیامت کی نشانیاں",
                description: "آخری وقت کے بارے میں نبوی بصیرتیں"
            },
            video3: {
                title: "توحید کا تصور",
                description: "اسلامی توحید کی بنیاد کی وضاحت"
            },
            video4: {
                title: "سیرت: مکی دور",
                description: "نبی محمد ﷺ کے ابتدائی سال"
            },
            video5: {
                title: "روح کی تطہیر",
                description: "روحانی پاکیزگی اور نشوونما کا سفر"
            },
            video6: {
                title: "اسلامی معاشیات اور انصاف",
                description: "سماجی مساوات کے لیے قرآنی ماڈل"
            },
            watchBtn: "ابھی دیکھیں"
        },
        
        // Topics Section
        topics: {
            label: "علم کے شعبے",
            title: "نمایاں عنوانات اور پلے لسٹس",
            description: "اسلامی علم کے جامع مجموعوں میں تشریف لے جائیں۔ ہر موضوع منظم سیکھنے اور روحانی ترقی فراہم کرنے کے لیے تیار کیا گیا ہے۔",
            quran: {
                title: "درسِ قرآن",
                description: "قرآن مجید کی آیت بہ آیت جامع تشریحات اور موضوعاتی مطالعات، الٰہی حکمت اور عملی اطلاقات کو ظاہر کرتی ہیں۔"
            },
            seerah: {
                title: "سیرت اور تاریخ",
                description: "نبی محمد ﷺ کی مبارک زندگی اور ابتدائی اسلامی تہذیب سے سیکھیں—رحمت، جرأت اور پختہ ایمان کی مثالیں۔"
            },
            iman: {
                title: "ایمان اور عقیدہ",
                description: "ایمان کے ارکان، توحیدِ الٰہی اور بنیادی اسلامی عقیدے کی گہری سمجھ کے ذریعے اپنے یقین کو مضبوط کریں۔"
            },
            tazkiyah: {
                title: "تزکیہ اور روحانیت",
                description: "خود احتسابی، ذکرِ الٰہی، اور روحانی عملیات کے ذریعے اپنی روح کو پاک کریں جو اندرونی سکون اور خدا سے قربت لاتی ہیں۔"
            },
            akhlaq: {
                title: "اخلاق اور کردار",
                description: "نبوی مثال اور قرآنی تعلیمات سے متاثر ہو کر نیک کردار، اخلاقی طرزِ عمل، اور خوبصورت آداب تیار کریں۔"
            },
            dawah: {
                title: "دعوت اور کمیونٹی",
                description: "دوسروں کو اسلام کی طرف دعوت دینے کے طریقے اور حکمت، اور انصاف و رحمت میں جڑی ایک نیک کمیونٹی بنانے کو سمجھیں۔"
            },
            exploreBtn: "دریافت کریں"
        },
        
        // Why Section
        why: {
            label: "ہماری امتیاز",
            title: "کیوں راہِ ہدیٰ",
            description: "ہم مستند، غیر تبدیل شدہ اسلامی علم پیش کرنے کے لیے پرعزم ہیں جو مومنین کو قرآن اور سنت کی رہنمائی میں بامقصد زندگی گزارنے کی طاقت دیتا ہے۔",
            feature1: {
                title: "مستند اسکالرشپ",
                description: "ہر درس کلاسیکی علم میں جڑا ہوا ہے اور ڈاکٹر اسرار احمد کی طرف سے پیش کیا گیا ہے، جو اپنی گہری قرآنی بصیرتوں کے لیے مشہور عالم ہیں۔"
            },
            feature2: {
                title: "جامع کوریج",
                description: "تفسیر سے فقہ تک، سیرت سے روحانیت تک—آسان سیکھنے کے لیے منظم اسلامی علم کی مکمل لائبریری تک رسائی۔"
            },
            feature3: {
                title: "لازوال اور متعلقہ",
                description: "اگرچہ برسوں پہلے پیش کیا گیا، یہ تعلیمات گہری طور پر متعلقہ رہتی ہیں، قرآنی حکمت کے ساتھ عصری چیلنجوں کو حل کرتی ہیں۔"
            },
            feature4: {
                title: "مفت اور قابل رسائی",
                description: "علم ایک امانت ہے۔ ہم تمام مواد مفت فراہم کرتے ہیں، اس بات کو یقینی بناتے ہوئے کہ طالبین اور رہنمائی کے درمیان کوئی مالی رکاوٹ نہ ہو۔"
            }
        },
        
        // About Snapshot
        aboutSnapshot: {
            label: "ہمارا مشن",
            title: "حق کی راہ کو منور کرنا",
            text: "راہِ ہدیٰ کا وجود ڈاکٹر اسرار احمد کی تعلیمات کو محفوظ اور پھیلانے کے لیے ہے—ایک دور اندیش عالم جنہوں نے اپنی زندگی قرآن کو ایک زندہ رہنما کے طور پر زندہ کرنے کے لیے وقف کر دی۔ ہمیں یقین ہے کہ مستند اسلامی علم دلوں، خاندانوں اور معاشروں کو تبدیل کرتا ہے۔ احتیاط سے تیار کردہ مواد کے ذریعے، ہمارا مقصد جدید مسلمانوں کو قرآن کی گہری حکمت اور نبی محمد ﷺ کی خوبصورت مثال سے جوڑنا ہے۔ ہمارا مقصد صرف آگاہ کرنا نہیں، بلکہ ایسے مومنین کی نسل کو متاثر کرنا ہے جو مقصد، دیانتداری اور عقیدت کے ساتھ زندگی گزاریں۔",
            learnMore: "ہمارے بارے میں مزید جانیں"
        },
        
        // Footer
        footer: {
            tagline: "الہی رہنمائی سے دلوں کو منور کرنا",
            quickLinks: "فوری لنکس",
            resources: "وسائل",
            legal: "قانونی",
            connect: "رابطہ کریں",
            newsletter: "اپ ڈیٹ رہیں",
            newsletterText: "نئے مواد اور کمیونٹی اپ ڈیٹس کے بارے میں اطلاعات حاصل کریں",
            emailPlaceholder: "اپنا ای میل درج کریں",
            subscribeBtn: "سبسکرائب کریں",
            copyright: "© 2025 راہِ ہدیٰ۔ تمام حقوق محفوظ ہیں۔",
            madeWith: "کے ساتھ بنایا گیا",
            and: "اور",
            dedication: "اسلامی علم کے لیے وقف"
        },
        
        // Common/Shared
        common: {
            loading: "لوڈ ہو رہا ہے...",
            error: "ایک خرابی پیش آئی",
            retry: "دوبارہ کوشش کریں",
            close: "بند کریں",
            readMore: "مزید پڑھیں",
            viewAll: "سب دیکھیں",
            search: "تلاش کریں",
            filter: "فلٹر",
            sort: "ترتیب دیں",
            share: "شیئر کریں",
            download: "ڈاؤن لوڈ",
            play: "چلائیں",
            pause: "روکیں",
            next: "اگلا",
            previous: "پچھلا"
        }
    },
    
    ar: {
        // Accessibility
        accessibility: {
            skipToContent: "انتقل إلى المحتوى الرئيسي"
        },
        
        // Navigation
        nav: {
            home: "الرئيسية",
            about: "عن الموقع",
            privacy: "الخصوصية",
            terms: "الشروط",
            login: "تسجيل الدخول",
            logout: "تسجيل الخروج",
            languageMenu: "قائمة اللغة",
            menuToggle: "تبديل القائمة"
        },
        
        // Hero Section
        hero: {
            subtitle: "طريق الهداية",
            tagline: "دروس القرآن والخطب الإسلامية الأصيلة للدكتور إسرار أحمد",
            description: "انطلق في رحلة تحويلية عبر القرآن والمعرفة الإسلامية. تحافظ قناتنا على تعاليم الدكتور إسرار أحمد العميقة وتشاركها، مقدمة رؤى عميقة في الإيمان والروحانية والحياة الصالحة. كل درس هو خطوة نحو فهم رسالة الله وتطبيقها في حياتنا اليومية.",
            watchYoutube: "شاهد على يوتيوب",
            exploreTopics: "استكشف المواضيع"
        },
        
        // Latest Uploads
        latestUploads: {
            label: "المحتوى الأخير",
            title: "أحدث التحميلات",
            description: "استكشف أحدث دروسنا وخطبنا الإسلامية. يقدم كل فيديو حكمة خالدة وإرشادات عملية للمسلمين المعاصرين الذين يسعون لتقوية إيمانهم.",
            video1: {
                title: "فهم سورة البقرة",
                description: "غوص عميق في آيات الهداية والحكمة"
            },
            video2: {
                title: "تفسير: علامات اليوم الأخير",
                description: "رؤى نبوية في نهاية الزمان"
            },
            video3: {
                title: "مفهوم التوحيد",
                description: "شرح أساس التوحيد الإسلامي"
            },
            video4: {
                title: "السيرة: الفترة المكية",
                description: "السنوات الأولى للنبي محمد ﷺ"
            },
            video5: {
                title: "تطهير الروح",
                description: "رحلة التطهير الروحي والنمو"
            },
            video6: {
                title: "الاقتصاد الإسلامي والعدالة",
                description: "النموذج القرآني للعدالة الاجتماعية"
            },
            watchBtn: "شاهد الآن"
        },
        
        // Topics Section
        topics: {
            label: "مجالات المعرفة",
            title: "المواضيع وقوائم التشغيل المميزة",
            description: "تصفح مجموعات شاملة من المعرفة الإسلامية. تم تنسيق كل موضوع لتوفير تعلم منظم ونمو روحي.",
            quran: {
                title: "دروس القرآن",
                description: "تفسيرات شاملة آية بآية ودراسات موضوعية للقرآن الكريم، تكشف عن الحكمة الإلهية والتطبيقات العملية."
            },
            seerah: {
                title: "السيرة والتاريخ",
                description: "تعلم من حياة النبي محمد ﷺ المباركة والحضارة الإسلامية المبكرة—أمثلة الرحمة والشجاعة والإيمان الثابت."
            },
            iman: {
                title: "الإيمان والعقيدة",
                description: "عزز نظام معتقداتك من خلال الفهم العميق لأركان الإيمان، ووحدانية الله، والعقيدة الإسلامية الأساسية."
            },
            tazkiyah: {
                title: "التزكية والروحانية",
                description: "طهر روحك من خلال التأمل الذاتي، وذكر الله، والممارسات الروحية التي تجلب السلام الداخلي والقرب من الإلهي."
            },
            akhlaq: {
                title: "الأخلاق والشخصية",
                description: "طور صفات شخصية نبيلة، وسلوك أخلاقي، وآداب جميلة مستوحاة من المثال النبوي والتعاليم القرآنية."
            },
            dawah: {
                title: "الدعوة والمجتمع",
                description: "افهم أساليب وحكمة دعوة الآخرين للإسلام وبناء مجتمع صالح متجذر في العدل والرحمة."
            },
            exploreBtn: "استكشف"
        },
        
        // Why Section
        why: {
            label: "تميزنا",
            title: "لماذا طريق الهداية",
            description: "نحن ملتزمون بتقديم معرفة إسلامية أصيلة وغير محرفة تمكن المؤمنين من عيش حياة هادفة يوجهها القرآن والسنة.",
            feature1: {
                title: "منحة علمية أصيلة",
                description: "كل درس متجذر في المنحة الكلاسيكية ويقدمه الدكتور إسرار أحمد، العالم المشهور برؤاه القرآنية العميقة."
            },
            feature2: {
                title: "تغطية شاملة",
                description: "من التفسير إلى الفقه، السيرة إلى الروحانية—الوصول إلى مكتبة كاملة من المعرفة الإسلامية منظمة للتعلم السهل."
            },
            feature3: {
                title: "خالدة وذات صلة",
                description: "على الرغم من تقديمها قبل سنوات، تظل هذه التعاليم ذات صلة عميقة، معالجة التحديات المعاصرة بالحكمة القرآنية."
            },
            feature4: {
                title: "مجانية ومتاحة",
                description: "المعرفة أمانة. نحن نقدم كل المحتوى مجانًا، مما يضمن عدم وجود عائق مالي بين الباحثين والإرشاد."
            }
        },
        
        // About Snapshot
        aboutSnapshot: {
            label: "مهمتنا",
            title: "إنارة طريق الحق",
            text: "طريق الهداية موجود للحفاظ على تعاليم الدكتور إسرار أحمد ونشرها—عالم صاحب رؤية كرس حياته لإحياء القرآن كدليل حي. نحن نؤمن بأن المعرفة الإسلامية الأصيلة تحول القلوب والعائلات والمجتمعات. من خلال المحتوى المنسق بعناية، نهدف إلى ربط المسلمين المعاصرين بالحكمة العميقة للقرآن والمثال الجميل للنبي محمد ﷺ. هدفنا ليس فقط الإعلام، بل إلهام جيل من المؤمنين الذين يعيشون بهدف ونزاهة وتفاني.",
            learnMore: "تعرف على المزيد عنا"
        },
        
        // Footer
        footer: {
            tagline: "إنارة القلوب بالهداية الإلهية",
            quickLinks: "روابط سريعة",
            resources: "الموارد",
            legal: "قانوني",
            connect: "تواصل",
            newsletter: "ابق على اطلاع",
            newsletterText: "احصل على إشعارات حول المحتوى الجديد وتحديثات المجتمع",
            emailPlaceholder: "أدخل بريدك الإلكتروني",
            subscribeBtn: "اشترك",
            copyright: "© 2025 طريق الهداية. جميع الحقوق محفوظة.",
            madeWith: "صنع ب",
            and: "و",
            dedication: "التفاني في المعرفة الإسلامية"
        },
        
        // Common/Shared
        common: {
            loading: "جاري التحميل...",
            error: "حدث خطأ",
            retry: "أعد المحاولة",
            close: "إغلاق",
            readMore: "اقرأ المزيد",
            viewAll: "عرض الكل",
            search: "بحث",
            filter: "تصفية",
            sort: "ترتيب",
            share: "مشاركة",
            download: "تحميل",
            play: "تشغيل",
            pause: "إيقاف مؤقت",
            next: "التالي",
            previous: "السابق"
        }
    }
};

// ========================================
// I18N CORE FUNCTIONALITY
// ========================================

// Current language (default: English)
let currentLanguage = 'en';

/**
 * Initialize i18n system
 * - Load saved language from localStorage
 * - Apply translations on page load
 * - Set up language switcher event listeners
 */
function initializeI18n() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('raahehuda_language') || 'en';
    setLanguage(savedLanguage);
    
    // Set up language switcher buttons
    const languageButtons = document.querySelectorAll('[data-lang]');
    languageButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    console.log('✅ i18n initialized with language:', savedLanguage);
}

/**
 * Set active language
 * @param {string} lang - Language code (en, ur, ar)
 */
function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) {
        console.warn(`Language '${lang}' not found. Falling back to English.`);
        lang = 'en';
    }
    
    currentLanguage = lang;
    
    // Save to localStorage
    localStorage.setItem('raahehuda_language', lang);
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Set text direction (RTL for Urdu and Arabic)
    if (lang === 'ur' || lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
    
    // Update font family
    updateFontFamily(lang);
    
    // Update active state in language switcher
    updateLanguageSwitcherUI(lang);
    
    // Apply all translations
    applyTranslations();
    
    console.log(`🌐 Language switched to: ${lang}`);
}

/**
 * Update font family based on language
 * @param {string} lang - Language code
 */
function updateFontFamily(lang) {
    const fontMap = {
        en: '"Inter", sans-serif',
        ur: '"Noto Nastaliq Urdu", serif',
        ar: '"Amiri", serif'
    };
    
    document.documentElement.style.setProperty('--font-primary', fontMap[lang] || fontMap.en);
}

/**
 * Update language switcher UI to show active language
 * @param {string} lang - Active language code
 */
function updateLanguageSwitcherUI(lang) {
    const buttons = document.querySelectorAll('[data-lang]');
    buttons.forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
            button.setAttribute('aria-current', 'true');
        } else {
            button.classList.remove('active');
            button.removeAttribute('aria-current');
        }
    });
}

/**
 * Apply translations to all elements with data-i18n attributes
 */
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        
        if (translation) {
            // Update text content
            element.textContent = translation;
        }
    });
    
    // Apply attribute translations
    applyAttributeTranslations();
}

/**
 * Apply translations to element attributes (placeholder, aria-label, etc.)
 */
function applyAttributeTranslations() {
    const elements = document.querySelectorAll('[data-i18n-attr]');
    
    elements.forEach(element => {
        const attrConfig = element.getAttribute('data-i18n-attr');
        // Format: "attrName:key.path" or "attr1:key1;attr2:key2"
        const configs = attrConfig.split(';');
        
        configs.forEach(config => {
            const [attrName, key] = config.split(':').map(s => s.trim());
            const translation = getTranslation(key);
            
            if (translation) {
                element.setAttribute(attrName, translation);
            }
        });
    });
}

/**
 * Get translation for a given key
 * @param {string} key - Dot-notation key (e.g., "nav.home")
 * @returns {string} - Translated text or key if not found
 */
function getTranslation(key) {
    const keys = key.split('.');
    let value = TRANSLATIONS[currentLanguage];
    
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            // Fallback to English
            value = TRANSLATIONS.en;
            for (const ek of keys) {
                if (value && value[ek] !== undefined) {
                    value = value[ek];
                } else {
                    console.warn(`Translation missing for key: ${key}`);
                    return key; // Return key itself as fallback
                }
            }
            break;
        }
    }
    
    return value;
}

/**
 * Get current language code
 * @returns {string} - Current language code
 */
function getCurrentLanguage() {
    return currentLanguage;
}

// ========================================
// AUTO-INITIALIZE ON DOM READY
// ========================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeI18n);
} else {
    initializeI18n();
}

// ========================================
// EXPORT FOR EXTERNAL USE
// ========================================
window.i18n = {
    setLanguage,
    getTranslation,
    getCurrentLanguage,
    applyTranslations
};

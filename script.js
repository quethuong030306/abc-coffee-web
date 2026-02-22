const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const translations = {
  vi: {
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.gallery": "Thư viện",
    "nav.contact": "Liên hệ",
    "index.title": "ABC Coffee - Trang Chủ",
    "index.hero.pill": "ABC Coffee",
    "index.hero.title":
      "Cà phê rang xay tại xưởng, phục vụ trong không gian ấm áp.",
    "index.hero.subtitle":
      "ABC Coffee theo đuổi triết lý cà phê nguyên bản: chọn hạt kỹ, rang chuẩn vị và phục vụ bằng sự tận tâm trong từng ly.",
    "index.hero.ctaPrimary": "Liên hệ đặt hàng",
    "index.hero.ctaSecondary": "Câu chuyện thương hiệu",
    "index.hero.stat1": "Năm bền vững",
    "index.hero.stat2": "Cửa hàng",
    "index.hero.stat3": "Hài lòng",
    "index.menu.title": "Menu nổi bật",
    "index.menu.lead":
      "Tuyển chọn đồ uống signature, cân bằng hương vị và cảm xúc.",
    "index.menu.badge": "Bán chạy trong tháng",
    "index.menu.item1": "Cà phê sữa ABC",
    "index.menu.item1desc": "Hạt rang vừa, hậu vị chocolate.",
    "index.menu.item2": "Cold Brew Cam",
    "index.menu.item2desc": "Vị cam tươi, mát lạnh dễ uống.",
    "index.menu.item3": "Latte hạt dẻ",
    "index.menu.item3desc": "Sữa mịn, hương hạt dẻ dịu.",
    "index.menu.item4": "Cà phê muối",
    "index.menu.item4desc": "Béo nhẹ, hậu vị mặn ngọt cân bằng.",
    "index.story.pill": "Câu chuyện thương hiệu",
    "index.story.title": "Từ đam mê cà phê đến chuỗi cửa hàng ABC",
    "index.story.body":
      "ABC Coffee bắt đầu từ một quán nhỏ với mong muốn mang đến ly cà phê chuẩn vị Việt. Tôi trực tiếp lựa chọn hạt, xây công thức và chăm chút từng chi tiết để tạo nên trải nghiệm đồng nhất.",
    "index.story.cta": "Tìm hiểu thêm",
    "index.store.title": "Hệ thống cửa hàng",
    "index.store.lead": "Không gian ấm áp, thuận tiện làm việc và gặp gỡ.",
    "index.store.cta": "Xem không gian",
    "index.news.title": "Tin tức & khuyến mãi",
    "index.news.lead": "Cập nhật menu mới, ưu đãi theo mùa và hoạt động cộng đồng.",
    "index.news.badge": "Mới nhất",
    "index.news.item1.title": "Bộ sưu tập mùa hè: Cold Brew & trái cây",
    "index.news.item1.body":
      "Hương vị tươi mát, giảm 15% trong tuần khai trương.",
    "index.news.item2.title": "Workshop pha chế cuối tuần tại ABC Coffee",
    "index.news.item2.body":
      "Học pha chế cơ bản và thưởng thức cà phê đặc sản.",
    "index.news.item3.title": "Ưu đãi thành viên: tặng 1 điểm cho mỗi ly",
    "index.news.item3.body": "Tích điểm đổi quà và ưu đãi sinh nhật dành riêng.",
    "index.contact.title": "Kết nối với ABC Coffee ngay hôm nay",
    "index.contact.body": "Đặt bàn, đặt đồ uống sự kiện hoặc nhận tư vấn hợp tác.",
    "index.contact.cta": "Liên hệ ngay",
    "footer.tagline":
      "Thương hiệu cà phê do tôi sáng lập, tự hào với chất lượng và cảm hứng bản địa.",
    "footer.email": "Email",
    "footer.hotline": "Hotline",
    "footer.address": "Địa chỉ",
    "about.title": "ABC Coffee - Giới Thiệu",
    "about.pill": "Về thương hiệu",
    "about.hero.title":
      "Thương hiệu cà phê ABC với trải nghiệm khách hàng làm trung tâm.",
    "about.hero.body":
      "ABC Coffee được xây dựng để mang đến trải nghiệm cà phê đồng nhất, từ chất lượng hạt rang, công thức pha chế đến phong cách phục vụ và không gian tại mỗi cửa hàng.",
    "about.vision.title": "Tầm nhìn",
    "about.vision.body":
      "Trở thành chuỗi cà phê được yêu thích nhờ chất lượng ổn định và phong cách thân thiện.",
    "about.mission.title": "Sứ mệnh",
    "about.mission.body":
      "Mang đến cho khách hàng ly cà phê chuẩn vị và không gian nghỉ ngơi dễ thương.",
    "about.values.title": "Giá trị cốt lõi",
    "about.values.body": "Chân thật, tận tâm và liên tục nâng cao chất lượng.",
    "about.space.title": "Không gian và phong cách phục vụ",
    "about.space.body":
      "ABC Coffee chú trọng không gian ấm, kết hợp gỗ và ánh sáng vàng nhẹ. Thực đơn được thiết kế để phù hợp cả tại quán và mang đi.",
    "about.space.item1": "Rang xay đặc trưng",
    "about.space.item1desc": "Hạt cà phê rang vừa, hương cacao và hạt dẻ.",
    "about.space.item2": "Thực đơn theo mùa",
    "about.space.item2desc": "Đồ uống theo mùa, vị mới lạ và độc đáo.",
    "about.quality.title": "Cam kết chất lượng",
    "about.quality.item1": "Hạt rang mới mỗi tuần, luôn giữ hương vị ổn định.",
    "about.quality.item2": "Quy trình pha chế được chuẩn hóa cho mỗi ca làm.",
    "about.quality.item3": "Nguyên liệu sạch, minh bạch nguồn gốc.",
    "about.quality.item4": "Phản hồi khách hàng được ghi nhận hằng ngày.",
    "about.journey.pill": "Hành trình phát triển",
    "about.journey.title": "Từ cửa hàng đầu tiên đến chuỗi ABC",
    "about.journey.body":
      "Khởi nguồn từ cảm hứng cà phê Việt, ABC Coffee ra mắt năm 2019 với sứ mệnh lan tỏa hương vị cà phê truyền thống. Với hơn 24+ cửa hàng, thương hiệu tự hào xây dựng cộng đồng yêu cà phê lớn mạnh và tiếp tục gìn giữ tinh hoa cà phê Việt.",
    "about.journey.item1": "2019: Mở quán đầu tiên",
    "about.journey.item2": "2021: 8 cửa hàng tại TP.HCM",
    "about.journey.item3": "2023: 24 cửa hàng trên toàn quốc",
    "about.journey.item4": "2024: Ra mắt dòng sản phẩm đóng gói",
    "gallery.title": "ABC Coffee - Thư Viện",
    "gallery.pill": "Thư viện hình ảnh & video",
    "gallery.hero.title":
      "Không gian quán cà phê và những khoảnh khắc đời thường.",
    "gallery.hero.body":
      "Khám phá concept ấm áp, góc check-in và quy trình pha chế chuẩn của ABC Coffee.",
    "gallery.collection.title": "Bộ sưu tập hình ảnh",
    "gallery.collection.body":
      "Từ hạt cà phê rang mới đến không gian phục vụ chăm chút.",
    "gallery.item1.label": "Góc trưng bày",
    "gallery.item1.alt": "Góc trưng bày sản phẩm",
    "gallery.item2.label": "Quầy thu ngân",
    "gallery.item2.alt": "Quầy thu ngân",
    "gallery.item3.label": "Không gian trải nghiệm",
    "gallery.item3.alt": "Không gian trải nghiệm",
    "gallery.item4.label": "Trưng bày sản phẩm",
    "gallery.item4.alt": "Trưng bày sản phẩm",
    "gallery.item5.label": "Workshop",
    "gallery.item5.alt": "Khu vực workshop",
    "gallery.item6.label": "Đào tạo nhân sự",
    "gallery.item6.alt": "Đào tạo nhân sự",
    "gallery.video.pill": "Video giới thiệu",
    "gallery.video.title": "Hành trình rang xay và pha chế",
    "gallery.video.body":
      "Theo dõi video giới thiệu cách chúng tôi lựa chọn hạt và pha chế để tạo nên ly cà phê ABC.",
    "contact.title": "ABC Coffee - Liên Hệ",
    "contact.pill": "Liên hệ ABC Coffee",
    "contact.hero.title": "Kết nối với tôi để nhận thông tin sản phẩm và hợp tác.",
    "contact.hero.body": "Gửi thông tin, ABC Coffee sẽ phản hồi trong 24 giờ.",
    "contact.info.title": "Thông tin liên hệ",
    "contact.info.body": "Hotline dành cho khách hàng và đối tác.",
    "contact.info.hours": "Giờ làm việc",
    "contact.form.title": "Gửi yêu cầu tư vấn",
    "contact.form.name": "Họ và tên",
    "contact.form.phone": "Số điện thoại",
    "contact.form.email": "Email",
    "contact.form.topic": "Chủ đề quan tâm",
    "contact.form.topic1": "Thực đơn và sản phẩm",
    "contact.form.topic2": "Hợp tác kinh doanh",
    "contact.form.topic3": "Sự kiện và đặt tiệc",
    "contact.form.message": "Mô tả mặt bằng hoặc câu hỏi của bạn",
    "contact.form.submit": "Gửi thông tin",
    "contact.map.pill": "Bản đồ khu vực",
    "contact.map.title": "Ghé thăm ABC Coffee tại TP.HCM",
    "contact.map.body": "Mời bạn ghé tham quan và thưởng hương vị cà phê ABC.",
    "contact.footer.tagline":
      "Thương hiệu cà phê do tôi sáng lập, lan tỏa hương vị Việt.",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "index.title": "ABC Coffee - Home",
    "index.hero.pill": "ABC Coffee",
    "index.hero.title":
      "Roasted in-house coffee served in a warm, welcoming space.",
    "index.hero.subtitle":
      "ABC Coffee follows a pure coffee philosophy: careful bean selection, precise roasting, and heartfelt service in every cup.",
    "index.hero.ctaPrimary": "Order & Contact",
    "index.hero.ctaSecondary": "Brand story",
    "index.hero.stat1": "Years of growth",
    "index.hero.stat2": "Stores",
    "index.hero.stat3": "Satisfaction",
    "index.menu.title": "Featured menu",
    "index.menu.lead": "Signature drinks balanced in flavor and emotion.",
    "index.menu.badge": "Top picks this month",
    "index.menu.item1": "ABC Milk Coffee",
    "index.menu.item1desc": "Medium roast with a chocolate finish.",
    "index.menu.item2": "Orange Cold Brew",
    "index.menu.item2desc": "Fresh citrus notes, easy to drink.",
    "index.menu.item3": "Chestnut Latte",
    "index.menu.item3desc": "Silky milk with gentle nutty aroma.",
    "index.menu.item4": "Salted Coffee",
    "index.menu.item4desc": "Light, creamy, balanced sweet-salty finish.",
    "index.story.pill": "Brand story",
    "index.story.title": "From coffee passion to the ABC chain",
    "index.story.body":
      "ABC Coffee started as a small cafe with a dream of delivering authentic Vietnamese coffee. I select the beans, build recipes, and refine every detail for a consistent experience.",
    "index.story.cta": "Learn more",
    "index.store.title": "Store locations",
    "index.store.lead": "Warm spaces for work, meetups, and relaxation.",
    "index.store.cta": "View spaces",
    "index.news.title": "News & promotions",
    "index.news.lead": "New menus, seasonal offers, and community updates.",
    "index.news.badge": "Latest",
    "index.news.item1.title": "Summer collection: Cold Brew & fruits",
    "index.news.item1.body": "Refreshing flavors with 15% launch week discount.",
    "index.news.item2.title": "Weekend brewing workshop at ABC Coffee",
    "index.news.item2.body": "Learn the basics and taste specialty coffee.",
    "index.news.item3.title": "Member perks: 1 point for every cup",
    "index.news.item3.body": "Redeem gifts and birthday offers just for you.",
    "index.contact.title": "Connect with ABC Coffee today",
    "index.contact.body": "Book a table, order for events, or discuss partnerships.",
    "index.contact.cta": "Contact now",
    "footer.tagline":
      "Coffee brand founded by me, proud of quality and local inspiration.",
    "footer.email": "Email",
    "footer.hotline": "Hotline",
    "footer.address": "Address",
    "about.title": "ABC Coffee - About",
    "about.pill": "About the brand",
    "about.hero.title":
      "ABC Coffee centers every experience around the customer.",
    "about.hero.body":
      "ABC Coffee is built to deliver a consistent coffee experience, from bean quality and brewing recipes to service style and space at every store.",
    "about.vision.title": "Vision",
    "about.vision.body":
      "To become a beloved coffee chain through consistent quality and friendly style.",
    "about.mission.title": "Mission",
    "about.mission.body":
      "Deliver great coffee and a cozy space to recharge.",
    "about.values.title": "Core values",
    "about.values.body": "Honesty, care, and continuous improvement.",
    "about.space.title": "Space and service style",
    "about.space.body":
      "ABC Coffee favors warm tones, wood textures, and soft lighting. The menu is designed for both dine-in and takeaway.",
    "about.space.item1": "Signature Roast",
    "about.space.item1desc": "Medium roast with cacao and nutty notes.",
    "about.space.item2": "Seasonal Menu",
    "about.space.item2desc": "Seasonal drinks with fresh new flavors.",
    "about.quality.title": "Quality commitment",
    "about.quality.item1": "Fresh weekly roasts for stable flavor.",
    "about.quality.item2": "Standardized brewing for every shift.",
    "about.quality.item3": "Clean ingredients with clear origins.",
    "about.quality.item4": "Daily customer feedback tracking.",
    "about.journey.pill": "Growth journey",
    "about.journey.title": "From the first cafe to the ABC chain",
    "about.journey.body":
      "Inspired by Vietnamese coffee, ABC Coffee launched in 2019 to share traditional flavors. With 24+ stores, we proudly build a growing coffee-loving community and continue preserving Vietnamese coffee heritage.",
    "about.journey.item1": "2019: Opened the first cafe",
    "about.journey.item2": "2021: 8 stores in Ho Chi Minh City",
    "about.journey.item3": "2023: 24 stores nationwide",
    "about.journey.item4": "2024: Launched packaged products",
    "gallery.title": "ABC Coffee - Gallery",
    "gallery.pill": "Photo & video gallery",
    "gallery.hero.title": "Cafe spaces and everyday moments.",
    "gallery.hero.body":
      "Discover the warm concept, check-in corners, and brewing standards of ABC Coffee.",
    "gallery.collection.title": "Photo collection",
    "gallery.collection.body":
      "From freshly roasted beans to carefully designed spaces.",
    "gallery.item1.label": "Display corner",
    "gallery.item1.alt": "Product display corner",
    "gallery.item2.label": "Cashier counter",
    "gallery.item2.alt": "Cashier counter",
    "gallery.item3.label": "Experience space",
    "gallery.item3.alt": "Experience space",
    "gallery.item4.label": "Product display",
    "gallery.item4.alt": "Product display",
    "gallery.item5.label": "Workshop",
    "gallery.item5.alt": "Workshop area",
    "gallery.item6.label": "Staff training",
    "gallery.item6.alt": "Staff training",
    "gallery.video.pill": "Intro video",
    "gallery.video.title": "Roasting and brewing journey",
    "gallery.video.body":
      "Watch how we select beans and brew each cup of ABC Coffee.",
    "contact.title": "ABC Coffee - Contact",
    "contact.pill": "Contact ABC Coffee",
    "contact.hero.title":
      "Reach out for product details and collaboration opportunities.",
    "contact.hero.body": "Send your info, we will reply within 24 hours.",
    "contact.info.title": "Contact information",
    "contact.info.body": "Hotline for customers and partners.",
    "contact.info.hours": "Working hours",
    "contact.form.title": "Send a consultation request",
    "contact.form.name": "Full name",
    "contact.form.phone": "Phone number",
    "contact.form.email": "Email",
    "contact.form.topic": "Topic of interest",
    "contact.form.topic1": "Menu and products",
    "contact.form.topic2": "Business collaboration",
    "contact.form.topic3": "Events and catering",
    "contact.form.message": "Describe your request or questions",
    "contact.form.submit": "Submit",
    "contact.map.pill": "Location map",
    "contact.map.title": "Visit ABC Coffee in HCMC",
    "contact.map.body": "Come by and enjoy the ABC Coffee flavors.",
    "contact.footer.tagline":
      "Coffee brand founded by me, spreading Vietnamese flavors.",
  },
};

const languageToggle = document.querySelector("[data-lang-toggle]");

function applyLanguage(lang) {
  const dict = translations[lang] || translations.vi;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) {
      el.setAttribute("alt", dict[key]);
    }
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    if (el === document.body) {
      return;
    }
    const key = el.getAttribute("data-i18n-title");
    if (dict[key]) {
      el.setAttribute("title", dict[key]);
    }
  });
  const titleKey = document.body.getAttribute("data-i18n-title");
  if (titleKey && dict[titleKey]) {
    document.title = dict[titleKey];
  }
  if (languageToggle) {
    languageToggle.textContent = lang === "vi" ? "EN" : "VI";
  }
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "vi";
    const next = current === "vi" ? "en" : "vi";
    localStorage.setItem("abc_lang", next);
    applyLanguage(next);
  });
}

const savedLang = localStorage.getItem("abc_lang") || "vi";
applyLanguage(savedLang);

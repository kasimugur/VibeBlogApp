Harika bir şablon\! CineSearch projesinde kullandığın bu profesyonel yapıyı, az önce adım adım inşa ettiğimiz **VibeBlog** projesinin özelliklerine ve mimarisine tam olarak uyarladım.

Görsel yollarını (`./public/...`) ve canlı yayın linkini kendi projenin yapısına göre güncelleyebilirsin.

İşte projenin ana dizinindeki `README.md` dosyasına yapıştırabileceğin VibeBlog şablonu:

-----

# ⚡ VibeBlog - Yeni Nesil Haber Platformu

VibeBlog, güncel dünyayı takip etmek için tasarlanmış modern bir **Next.js** uygulamasıdır. NewsAPI gücüyle çalışan platform, anlık veri akışı, kusursuz bir kullanıcı deneyimi (UX) ve tamamen duyarlı (responsive) bir arayüz sunar. Sadece bir haber okuma aracı değil, aynı zamanda modern web mühendisliği pratiklerinin (SSR, URL-based state yönetimi, Error Boundaries) sergilendiği bir vitrindir.

-----

## 📍 İçindekiler

  * [🚀 Öne Çıkan Özellikler](https://www.google.com/search?q=%23-%C3%B6ne-%C3%A7%C4%B1kan-%C3%B6zellikler)
  * [🛠️ Teknoloji Yığını](https://www.google.com/search?q=%23%EF%B8%8F-teknoloji-y%C4%B1%C4%9F%C4%B1n%C4%B1)
  * [🎥 Demo ve Görseller](https://www.google.com/search?q=%23-demo-ve-g%C3%B6rseller)
  * [🏗️ Mimari ve Performans](https://www.google.com/search?q=%23%EF%B8%8F-mimari-ve-performans)
  * [📦 Kurulum ve Çalıştırma](https://www.google.com/search?q=%23-kurulum-ve-%C3%A7al%C4%B1%C5%9Ft%C4%B1rma)
  * [🔗 İletişim](https://www.google.com/search?q=%23-ileti%C5%9Fim)

-----

## 🚀 Öne Çıkan Özellikler

  - **Dinamik Arama ve Filtreleme:** Saniyeler içinde haberlerde arama yapın ve URL tabanlı state yönetimi ile sonuçları kolayca paylaşın.
  - **Manşet (Hero) Carousel:** Ana sayfada dikkat çekici, otomatik kayan "Son Dakika" haberleri köşesi.
  - **Hibrit Yükleme (Load More):** Kullanıcı deneyimini kesintiye uğratmadan, sunucu ve istemci taraflı veri çekme stratejisi ile kesintisiz haber akışı.
  - **Modern UI/UX & Tema:** Shadcn/UI ve Tailwind CSS ile inşa edilmiş, pürüzsüz çalışan Gece/Gündüz (Dark/Light) modu.
  - **Dinamik Yönlendirme:** Her habere özel, içerik detaylarını barındıran şık ve SEO dostu sayfalar (`/news/[title]`).

## 🛠️ Teknoloji Yığını

  - **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
  - **Dil:** [TypeScript](https://www.typescriptlang.org/)
  - **Stil:** [Tailwind CSS](https://tailwindcss.com/)
  - **UI Bileşenleri:** [Shadcn/UI](https://www.google.com/search?q=https://ui.shadcn.com/) & Radix UI
  - **Tema Yönetimi:** [Next-Themes](https://www.google.com/search?q=https://github.com/pacocoursey/next-themes)
  - **API:** [NewsAPI](https://www.google.com/search?q=https://newsapi.org/)

## 🎥 Demo ve Görseller

### Canlı Önizleme

|---
[Canlı Link](https://www.google.com/search?q=https://vibeblog-app-link.vercel.app/) *(Projenizi yayına aldığınızda linki buraya ekleyin)*

### Uygulama Ekran Görüntüleri

| Gece Modu (Dark Mode) | Yüklenme (Skeleton) & Hata | Kategori & Arama Deneyimi |
|---|---|---|
|  |  |  |

## 🏗️ Mimari ve Performans

Uygulama, hatalara karşı dayanıklı ve yüksek performanslı olacak şekilde tasarlanmıştır:

  - **Görsel Fallback Stratejisi:** Kırık veya eksik API görsellerine karşı UI bütünlüğünü koruyan `onError` resim yönetimi.
  - **Loading ve Error States:** Kullanıcıyı boş ekranda bekletmemek adına, sayfa ve bileşen bazlı özel `Skeleton` iskeletleri ve `error.tsx` hata sınırları (Error Boundaries).
  - **URL-Based State:** Arama ve filtreleme işlemleri için istemci belleği yerine URL parametrelerinin kullanılması, bu sayede tam SEO uyumluluğu ve gelişmiş tarayıcı navigasyonu (Geri/İleri tuşları).
  - **Önbellekleme:** Dış API limitlerini korumak için Next.js `revalidate` mimarisi ile veri optimizasyonu.

## 📦 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için şu adımları izleyin:

1.  **Projeyi klonlayın:**

    ```bash
    git clone https://github.com/kasimugur/vibeblog.git
    cd vibeblog
    ```

2.  **Bağımlılıkları yükleyin:**

    ```bash
    npm install
    ```

3.  **Çevre değişkenlerini ayarlayın:**
    Ana dizinde bir `.env.local` dosyası oluşturun ve NewsAPI hesabınızdan aldığınız anahtarı ekleyin:

    ```env
    NEWS_API_KEY=sizin_api_anahtariniz_buraya
    ```

4.  **Geliştirme sunucusunu başlatın:**

    ```bash
    npm run dev
    ```

    Uygulamayı deneyimlemek için tarayıcınızda `http://localhost:3000` adresine gidin.

-----

# 🔗 İletişim

**Geliştirici: Kasım Uğur** | [GitHub](https://github.com/kasimugur/) | [LinkedIn](https://www.linkedin.com/in/kasimugur/)
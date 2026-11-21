# RentTrack

Камер, майхан, машин, унадаг дугуй, проектор, багаж хэрэгсэл зэрэг эд зүйлс түрээслэгчид өөрийн бизнесээ нэг сайтаас удирдах Single Page Application (SPA).

**Технологи:** Vanilla JavaScript (ES modules, framework-гүй) · Bulma + Sass · Font Awesome · hash router · i18n (mn/en)

## Хуудсууд
| Hash | Хуудас |
|---|---|
| `#/home` | Нүүр: hero, статистик, ангилал, хэрхэн ажилладаг |
| `#/items` | Бараа: ангиллаар шүүх хүснэгт |
| `#/calculator` | Тооцоолуур: хоног, хөнгөлөлт, барьцаа |
| `#/bookings` | Захиалга: төлөвийн хяналт |
| `#/contact` | Холбоо барих |
| `#/404` | Олдсонгүй |

## Ажиллуулах
```
npm install
npm run build:css
npm run serve        # http://localhost:8080
```
Windows PowerShell-д `npm` ажиллахгүй бол `npm.cmd install` гэж бичнэ.

## Бүтэц
```
src/
├─ index.html
├─ css/main.css            (Sass-аас үүснэ)
├─ scss/                   main.scss, components/, layouts/
├─ img/logo.svg
└─ js/
   ├─ app.js  router.js  routes.js
   ├─ pages/  layouts/  components/  fn/  data/  i18n/
```
Өгөгдөл (`js/data/sampleData.js`) нь туршилтын жишээ утга.
# RentTrack

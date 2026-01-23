
# Belajar React

Proyek ini adalah repositori pembelajaran dasar-dasar React menggunakan **Vite**, **TypeScript**, dan **React Router**. Di dalamnya terdapat implementasi routing, manajemen state, custom hooks, dan penggunaan URL search parameters.

## 🚀 Teknologi yang Digunakan

* **Framework:** [React 18+](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
* **Routing:** [React Router v7/6](https://reactrouter.com/)
* **Styling:** CSS Standar

## 📂 Struktur Folder

```text
src/
├── assets/             # Aset gambar dan statis
├── components/         # Komponen reusable (Button, Header, Card, dll)
├── hooks/              # Custom hooks (e.g., useCounter)
├── Pages/              # Komponen halaman (Home, ProductList, ProductDetail, dll)
├── App.tsx             # Root component & Konfigurasi Route
└── main.tsx            # Entry point aplikasi

```

## ✨ Fitur Utama

1. **Product List & Filtering:** Menampilkan daftar produk dengan fitur sorting menggunakan `URLSearchParams`.
2. **Dynamic Routing:** Navigasi antar halaman (Home, Detail Produk, Terms) menggunakan React Router.
3. **State Management:** Contoh penggunaan `useState` dan custom hooks (`useCounter`).
4. **Interactive UI:** Komponen toggle lampu, counter, dan button reusable.

## 🛠️ Cara Menjalankan Proyek

### 1. Clone Repositori

```bash
git clone [https://github.com/najmifaza/belajar-react.js.git](https://github.com/najmifaza/belajar-react.js.git)
cd belajar-react.js

```

### 2. Install Dependensi

Proyek ini menggunakan `pnpm` (dilihat dari adanya `pnpm-lock.yaml`), namun Anda juga bisa menggunakan `npm`:

```bash
pnpm install
# atau
npm install

```

### 3. Jalankan Mode Pengembangan

```bash
pnpm dev
# atau
npm run dev

```

Aplikasi akan berjalan di `http://localhost:5173`.

## 📝 Catatan Pembelajaran: URL Search Params

Salah satu bagian penting dalam proyek ini adalah cara mengelola *query string* di URL. Untuk memperbarui parameter pencarian tanpa menghilangkan parameter yang sudah ada, gunakan pola berikut:

```typescript
const [searchParams, setSearchParams] = useSearchParams();

function handleSortValue(sortValue: string) {
  const newParams = new URLSearchParams(searchParams);
  newParams.set("sort", sortValue);
  setSearchParams(newParams);
}

```


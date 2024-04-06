## Proje Adı

profile-viewer-nextjs (CASE)

## Açıklama

Next.js ve TypeScript'i kullanarak zengin özelliklere sahip bir profesyonel profil görüntüleme uygulaması geliştirme amaçlı yapılan bir projedir. Bu uygulama, kullanıcı profillerini görüntüleyecek, bilgi tabanlı URL'ler kullanarak bunlar arasında gezinmeye izin verecek, kullanıcıların profillerini güncellemesine olanak sağlayacak, kimlik doğrulama simülasyonu yapacak ve bir profili beğenmek gibi etkileşimli bir özellik içerecek. Bu proje, React, Next.js, TypeScript, durum yönetimi ve gelişmiş web uygulaması özelliklerini yansıtmak istedik.

## Kullanılan Araçlar

Next.js: Next.js, React tabanlı bir web framework'üdür.
NextAuth: NextAuth, kimlik doğrulama ve oturum yönetimi için bir kütüphanedir.
TypeScript: TypeScript, JavaScript'e tip güvenliği sağlayan bir programlama dilidir.
Styled Components: Styled Components, CSS-in-JS yaklaşımını benimseyen bir kütüphanedir.
JSON dosyası: Verilerin saklanması için JSON formatı kullanılmıştır.

## Kurulum

## Repoyu klonlayın:

bash /n
Copy code
git clone https://github.com/ozguraktas5/profile-viewer-nextjs.git

## Proje dizinine gidin:

bash
Copy code
cd my-app

## Bağımlılıkları yükleyin:

bash
Copy code
npm install

## Nasıl Kullanılır

## Proje dizininde aşağıdaki komutu çalıştırarak uygulamayı başlatın:

bash
Copy code
npm run dev
Tarayıcınızda http://localhost:3000 adresine gidin.

## Giriş yapmak için gerekli bilgileri girin (Name: John Doe, Email: john.doe@example.com) ve "Login" düğmesine tıklayın. 

## Admin paneline yönlendirileceksiniz. Burada kullanıcı profillerini görebilir, düzenleyebilir ve beğenebilirsiniz.

## Edit butonuna tıklayarak Admin olan John Doe'nin bilgilerini değiştirebilirsiniz

## John Doe harici diğer iki kullanıcının profilini beğenmek isterseniz Card yapılarının altında Like butonu mevcut.

## localhost:3000/profile/jane-smith ve localhost:3000/profile/mike-jones url'lerine giderek kullanıcıların profillerine doğrudan erişim sağlayabilirsiniz.

## Çıkış yapmak için sağ üst köşede bulunan "Logout" düğmesine tıklayın.
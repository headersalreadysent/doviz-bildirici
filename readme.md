
# Döviz Bildirici

Anlık değişen dolar kurlarını sesli olarak takip etmek için küçük bir uygulama.

## Kurulum

Repoyu clonelayın ve bağımlılıkları yükleyin.

```bash
git clone https://github.com/headersalreadysent/doviz-bildirici.git
yarn # veya npm install 
```


Sadece ubuntu üzerinde test edilmiştir.

Ses çalmak için **sox** ve **libsox-fmt-mp3** paketlerine ihtiyaç duyar.

```bash
sudo apt-get install sox libsox-fmt-mp3   
```

## Örnekler

Amerikan Doları için 5 dakikada bir sesli yanıt
```bash
node index.js   
```

Amerikan Doları için 1 dakikada bir sesli yanıt
```bash
node index.js  1 
```

Euro için 5 dakikada bir sesli yanıt
```bash
node index.js EUR 
```

Euro için 10 dakikada bir sesli yanıt
```bash
node index.js EUR 10
```

## Desteklenen Para Birimleri
- USD:Amerikan Doları
- EUR:Euro
- GBP:İngiliz Sterlini
- CHF:İsviçre Frangı
- CAD:Kanada Doları
- RUB:Rus Rublesi
- AED:Birleşik Arap Emirlikleri Dirhemi
- AUD:Avustralya Doları
- DKK:Danimarka Kronu
- SEK:İsveç Kronu
- NOK:Norveç Kronu
- JPY:100 Japon Yeni
- KWD:Kuveyt Dinarı
- ZAR:Güney Afrika Randı
- BHD:Bahreyn Dinarı
- LYD:Libya Dinarı
- SAR:Suudi Arabistan Riyali
- IQD:Irak Dinarı
- ILS:İsrail Şekeli
- IRR:İran Riyali
- INR:Hindistan Rupisi
- MXN:Meksika Pesosu
- HUF:Macar Forinti
- NZD:Yeni Zelanda Doları
- BRL:Brezilya Reali
- IDR:Endonezya Rupiahi
- CSK:Çek Korunası
- PLN:Polonya Zlotisi
- RON:Romanya Leyi
- CNY:Çin Yuanı
- ARS:Arjantin Pesosu
- ALL:Arnavutluk Leki
- AZN:Azerbaycan Manatı
- BAM:Bosna Hersek Markı
- CLP:Şili Pesosu
- COP:Kolombiya Pesosu
- CRC:Kostarika Kolonu
- DZD:Cezayir Dinarı
- EGP:Mısır Lirası
- HKD:Hong Kong Doları
- HRK:Hırvat Kunası
- ISK:İzlanda Kronası
- JOD:Ürdün Dinarı
- KRW:Güney Kore Wonu
- KZT:Kazak Tengesi
- LBP:Lübnan Lirası
- LKR:Sri Lanka Rupisi
- MAD:Fas Dirhemi
- MDL:Moldovya Leusu
- MKD:Makedon Dinarı
- MYR:Malezya Ringgiti
- OMR:Umman Riyali
- PEN:Peru İnti
- PHP:Filipinler Pesosu
- PKR:Pakistan Rupisi
- QAR:Katar Riyali
- RSD:Sırbistan Dinarı
- SGD:Singapur Doları
- SYP:Suriye Lirası
- THB:Tayland Bahtı
- TWD:Yeni Tayvan Doları
- UAH:Ukrayna Grivnası
- UYU:Uruguay Pesosu
- GEL:Gürcistan Larisi
- TND:Tunus Dinarı
- BGN:Bulgar Levas
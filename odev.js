alert("Hogwarts Cadılık ve Büyücülük okuluna hoşgeldin. Seçmen şapka sana birkaç soru sorup sana hangi binada olacağını bu testle söyleyecek.");

function main(){
    const cevap = prompt("Sence insanlara yardım etmek için bir neden olmalı mı?\nEvet çıkarcı dünya\nHayır iyilik etmenin nedeni olamaz saf duygudur");
    if(cevap.toLocaleLowerCase("tr").split(" ").join("") === "evet"){
        return evet();
    }
    else if(cevap.toLocaleLowerCase("tr").split(" ").join("") === "hayır"){
        return hayır();
    }
    else{
        alert("Lütfen doğru veri giriniz(Evet/Hayır)");
        return main();
    }
}

function evet(){
    const cevap = prompt("Senin için bilgi mi güç mü daha önemli? (Bilgi/Güç)");
    if (cevap === "Bilgi"){
        alert("Bilgi");
        return bilgi();    
    }
    else if(cevap === "Güç"){  
        alert("Güç");
        return güc()
    }
    else{
        alert("Lütfen doğru veri giriniz(Bilgi/Güç)");
        return evet();
    }
}

function hayır(){
    const cevap = prompt("Suçlu bir büyücü karabüyüden dolayı adalet bakanında yargılanıyor.\nKoruyucusu suçtan aklanması için etrafı aleve verdi.\nİnsanları oradan çıkaran gardiyan mı olursun yoksa adalet yerini bulsun diye o büyücüye cezasını hızlı kesecek olan hakim mi?(Gardiyan/Hakim)");
    if(cevap.toLocaleLowerCase("tr").split(" ").join("") === "gardiyan"){
        return gardiyan();
    }
    else if(cevap.toLocaleLowerCase("tr").split(" ").join("") === "hakim"){
       return hakim();
    }
    else{
        alert("Lütfen doğru veri giriniz(Gardiyan/Hakim)");
        return hayır();
    }
}

function guc(){
    const cevap = prompt('Rekabetçi misin? (Öyleyim/Alakam yok)');
    if (cevap === "Öyleyim"){
        alert("Öyleyim");
        return oyle();
    }
    else if(cevap === "Alakam yok"){
        alert("Alakam yok");
        return alakamyok();
    }
    else{
        alert("Lütfen doğru veri giriniz(Öyleyim/Alakam yok)");
        return güc();
    }
}
function alakamyok(){
    alert("Ravenclaw mantığı var sen de. Bu şekilde aklınla diğer insanlardan öne çıkacaksın.")
}

function oyle(){
    const cevap=prompt('Sırlarını akılsızca paylaşan kişileri küçümser misin (sırlar tek kişiliktir iki kişilik değil/önemsediği insanlara söyleyebilir)');
    if (cevap=="sırlar tek kişiliktir iki kişilik değil"){
        alert("sırlar tek kişiliktir iki kişilik değil");
        return tek();
    }
    else if (cevap=="önemsediği insanlara söyleyebilir"){
        alert("önemsediği insanlara söyleyebilir");
        return onemsemek();
    }
    else{
        alert("lütfen doğru veri giriniz(sırlar tek kişiliktir iki kişilik değil/önemsediği insanlara söyleyebilir)");
    }
}

function tek(){
     alert("Sen slytherinde hırsınla yönetmek için buradasın. Dikkat et hırsın yüzünden kötü yollara düşme");
}

function onemsemek(){
     alert("Yaptığın seçimler saflığını ama ayrıca mantıksal yanını koyuyor ayrıca iyimsersin sayın Hufflepuflı. Umarım yeni binanda mutlu olursun");
}

function bilgi(){
    const cevap=prompt('kilit açma büyüsü nedir? (Accio/alohomora)');
    if (cevap=="Accio"){
        alert("Accio");
        return accio();
    }
    else if(cevap=="alohomora"){
        alert("alohomora");
        return alohomora();
    }
    else{
        alert("lütfen doğru veri giriniz(Accio/alohomora)");
    }
}

function alohomora(){
     alert("tam bir ravenclawsın. Büyü ezberin iyi. Bilgeliğinle ve zekanla bu binada olmak için doğmuşsun.")
}

function accio(){
    const cevap=prompt('Eyfel kulesi nerdedir? (Almanya/fransa)');
    if (cevap=="Almanya"){
        alert("Almanya");
        return almanya();
    }
    else if(cevap=="fransa"){
        alert("fransa");
        return fransa();
    }
    else{
        alert("lütfen doğru veri giriniz(Almanya/fransa)");
    }
}

function almanya(){
     alert("Üzgünüz bu soruya almanya cevap verip hogwartsa kabul edilmene anlam veremiyoruz. \nSeçmen şapka cahilliğin için hangi binada en son boş yer kalırsa ona yerleştirecek şimdilik yedektesin. \nAyrıca biraz kendini geliştirmeyi unutma ")
}

function fransa(){
    const cevap=prompt('hangisi bir doğal sayıdır? (-1/0)');
    if (cevap=="-1"){
        alert("-1");
        return bir();
    }
    else if (cevap=="0"){
        alert("0");
        return sifir();
    }
    else{
        alert("lütfen doğru veri giriniz(-1/0)");
    }
}

function bir(){
    alert("Üzgünüz bu soruya almanya cevap verip hogwartsa kabul edilmene anlam veremiyoruz. \nSeçmen şapka cahilliğin için hangi binada en son boş yer kalırsa ona yerleştirecek şimdilik yedektesin. \nAyrıca biraz kendini geliştirmeyi unutma ")
}

function sifir(){
   const cevap = prompt("elektriğin icadını kim buldu? (franklin/tesla)");
   if (cevap=="franklin"){
       alert("franklin");
       return franklin();
   }
   else if(cevap=="tesla"){
       alert("tesla");
       return tesla();
   }
   else{
       alert("lütfen doğru veri giriniz(franklin/tesla)");
   }
}
function tesla(){
   const cevap = prompt("akıl çelip kafa karıştırmayı, insanları denemeyi sever misin? (severim/niye yapayım)");
   if (cevap=="severim"){
       alert("Sen slytherinde hırsınla yönetmek için buradasın. Dikkat et hırsın yüzünden kötü yollara düşme");
   }
   else if(cevap=="niye yapayım"){
       alert("niye yapayım");
       return niye();
   }
   else{
       alert("lütfen doğru veri giriniz(severim/niye yapayım)");
   }
}

function niye(){ 
alert("Saf olduğun için hufflepuffa daha uygunsun. İyimserliğini bozma");
}

function franklin(){
alert("tam bir ravenclawsın. Genel kültür bilgin var. Ayrıca büyü ezberinde iyi. Bilgeliğinle ve zekanla bu binada olmak için doğmuşsun.");
}

function güc(){
   const cevap = prompt("amaçlarına ulaşmak için her yolu kullanır mısın? (tabiki/nasipte nasılsa)");
   if (cevap=="tabiki"){
       alert("Sen slytherinde hırsınla yönetmek için buradasın. Dikkat et hırsın yüzünden kötü yollara düşme");
   }
   else if(cevap=="nasipte nasılsa"){
        alert("insanlarla kapışmakla uğraşmayan yapın seni çekici kılıyor sayın Hufflepuflı. Umarım yeni binanda mutlu olursun");
   }
   else{
       alert("lütfen doğru veri giriniz(tabiki/nasipte nasılsa)");
   }
}

function gardiyan(){
   const cevap = prompt("en yakın arkadaşına önünde aveda kadevra büyüsü yapılıyor. Önüne atlar mısın yoksa adaleti mi sağlarsın?");
   if (cevap=="önüne atlamak"){
    alert("arkadaşlarını koruyacak kadar, yardımsever, akıllı dinamik olan o gryffindor. İşte o sensin...")
   }
   else if(cevap=="adalet"){
    alert("adaletin ve iyiliğin temsilcisi hufflepuff ruhunu gördüm sende. Arkadaşını kurtaramasan da iyi bir yüreğin olduğunu bil.");
   }
   else{
       alert("lütfen doğru veri giriniz(önüne atlamak/adalet)");
   }
}

main();

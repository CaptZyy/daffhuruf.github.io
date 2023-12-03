let konfirmasi = confirm("Ingin Bermain Tebak Huruf?");
do{
let hurufRandom = Math.random();
console.log(hurufRandom)

let masukanHuruf = prompt("Masukan Huruf Tebakan (a-d)")
if (konfirmasi == false);

if (hurufRandom < 0.20) {
 hurufRandom = "a";
}else if(hurufRandom < 0.40){
    hurufRandom = "b";
}else if (hurufRandom <0.60){
    hurufRandom = "c";
}else hurufRandom = "d";
console.log(hurufRandom)

    if(hurufRandom == masukanHuruf){
        alert("Selamat Anda Benar!!!");
    }else if (hurufRandom < masukanHuruf){
        alert("Maaf Silahkan Coba Lagi!");
    }else if(hurufRandom > masukanHuruf){
        alert("Maaf Silahkan Coba Lagi!")
    }
    konfirmasi = confirm("Lanjut Bermain?");   
    }while (konfirmasi == true);




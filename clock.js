function past(h, m, s){
    if (h >= 0 ){
        sum = h *3600000;
    }
    if (m >= 0){
        sum2 = m *60000;
    }
    if (s >= 0){
        sum3 = s * 1000;
    }
    return sum + sum2 + sum3;
}
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a